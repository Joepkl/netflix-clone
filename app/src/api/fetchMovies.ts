/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

const store = useStore();
const tmdbBaseUrl = 'https://api.themoviedb.org/';

interface ApiResponse {
  isSuccess: boolean,
  data?: Array<number> | null,
  error?: string | null,
}

/** Base fetch data function */
async function fetchData(url:string):Promise<ApiResponse> {
  store.setIsLoading(true);
  store.increaseActiveApiCalls();
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjYyNmFmMDJkYWM3OTI0ZDVkNDUwZWQzNWQxYjIxNiIsInN1YiI6IjY0YTJlZWQ1ODI4OWEwMDBlYmU0MjVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t7kzEV7gqauHSVA1Ty0Y8GyhpPraB2TGVEpgfUbH8IQ'
      }
    })
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

/** Trending movies */
export async function fetchTrendingMovies(page = 1) {
  return fetchData(`${tmdbBaseUrl}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
}

/** Upcoming movies */
export async function fetchUpcomingMovies(page = 1) {
  return fetchData(`${tmdbBaseUrl}/3/movie/upcoming?language=en-US&page=${page}`);
}