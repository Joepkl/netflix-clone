import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => {
    return {
      count: 1,
      isLoading: null,
      isAuthorized: null,
    };
  },
  persist: true,
  getters: {
    getCount():number {
      return this.count;
    },
  },
  actions: {
    setCount(input: number):void {
      this.count = input;
    },
  },
});

