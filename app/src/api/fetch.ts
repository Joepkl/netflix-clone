/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";
import type Movie from "@/constants/Movie";

const store = useStore();

interface ApiResponse {
  isSuccess?: boolean,
  data?: Array<Movie>,
  error?: string,
}

/** Base fetch data function */
export async function fetchData(url:string):Promise<ApiResponse> {
  store.setIsLoading(true);
  store.increaseActiveApiCalls();
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
      }
    })
    
    // 4xx or 5xx status code error -> not caught by try catch
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error status: ${response.status}. Message: ${errorData.errors[0]}`);
    }

    const data = await response.json();
    return { isSuccess: true, data: data.results };
  } 
  catch(err) {
    console.log(err);
    return { isSuccess: false, error: (err as Error).message || 'Unknown error' };
  }
  finally {
    store.isLoading = false;
    store.decreaseActiveApiCalls();
  }
}

/** Handle API response */
export function handleResponse(response: ApiResponse) {
  if(response.isSuccess) {
    return response;
  } else {
    throw new Error(response.error || 'An error occured')
  }
}