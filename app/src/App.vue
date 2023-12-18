<script setup lang="ts">
/** Vue */
import { computed } from 'vue';
import { RouterView } from 'vue-router'

/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

/** Components */
import LoadingIndicator from '@/components/partials/LoadingIndicator.vue'

const store = useStore();

const isLoading = computed(() => {
  if(store.getActiveApiCalls === null) {
    return false;
  } else if(store.getActiveApiCalls > 0 || store.getIsLoading) {
    return true;
  }
  return false;
})
</script>

<template>
  <LoadingIndicator :is-loading="isLoading"/>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/css/global.scss';
</style>
