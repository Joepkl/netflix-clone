import { defineStore } from 'pinia';
import type { UserProfile } from '@/constants/Users';
import type Movie from '@/constants/Movie';

export const useStore = defineStore('store', {
  state: () => {
    return {
      activeApiCalls: 0 as number,
      isLoading: null as null | boolean,
      isAuthenticated: null as null | boolean,
      isSearchExpanded: false as false | boolean,
      activeUser: null as null | UserProfile,
      trendingMovies: null as null | Array<Movie>,
      upcomingMovies: null as null | Array<Movie>,
    };
  },
  persist: true,
  getters: {
    getActiveApiCalls(): null | number {
      return this.activeApiCalls;
    },
    getIsLoading(): null | boolean {
      return this.isLoading;
    },
    getIsAuthenticated(): null | boolean {
      return this.isAuthenticated;
    },
    getIsSearchExpanded():boolean {
      return this.isSearchExpanded;
    },
    getActiveUser():null | UserProfile {
      return this.activeUser;
    },
    getTrendingMovies(): null | Array<Movie> {
      return this.trendingMovies;
    },
    getUpcomingMovies(): null | Array<Movie> {
      return this.trendingMovies;
    },
  },
  actions: {
    increaseActiveApiCalls() {
      this.activeApiCalls ++;
    },
    decreaseActiveApiCalls() {
      this.activeApiCalls --;
    },
    setIsLoading(value: boolean) {
      this.isLoading = value;
    },
    setIsAuthenticated(value: boolean) {
      this.isAuthenticated = value;
    },
    setIsSearchExpanded(value:boolean) {
      this.isSearchExpanded = value;
    },
    setActiveUser(userProfile: UserProfile) {
      this.activeUser = userProfile;
    },
    setTrendingMovies(movieData: Array<Movie>) {
      this.trendingMovies = movieData;
    },
    setUpcomingMovies(movieData: Array<Movie>) {
      this.upcomingMovies = movieData;
    },
  },
});

