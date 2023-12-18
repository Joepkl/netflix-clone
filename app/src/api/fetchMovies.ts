import { fetchData, handleResponse } from '@/api/fetch';

const tmdbBaseUrl = 'https://api.themoviedb.org/';

/** Trending movies */
export async function fetchTrendingMovies(page = 1) {
  const response = await fetchData(`${tmdbBaseUrl}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
  handleResponse(response);
}

/** Upcoming movies */
export async function fetchUpcomingMovies(page = 1) {
  const response = await fetchData(`${tmdbBaseUrl}/3/movie/upcoming?language=en-US&page=${page}`);
  handleResponse(response);
}