import { defineStore } from 'pinia';
import type { UserProfile } from '@/constants/Users'

export const useStore = defineStore('store', {
  state: () => {
    return {
      activeApiCalls: 0 as number,
      isLoading: null as null | boolean,
      isAuthenticated: null as null | boolean,
      activeUser: null as null | UserProfile,
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
    getActiveUser():UserProfile | null {
      return this.activeUser;
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
    setActiveUser(userProfile: UserProfile) {
      this.activeUser = userProfile;
    },
  },
});

