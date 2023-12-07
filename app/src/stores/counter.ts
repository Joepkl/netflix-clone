import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 1,
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

