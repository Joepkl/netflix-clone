<script setup lang="ts">
/** Vue */
import { computed } from 'vue';
import { RouterView } from 'vue-router'

/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

/** Components */
import LoadingIndicator from '@/components/ui/LoadingIndicator.vue'

const store = useStore();

const isLoading = computed(() => {
  if(store.getActiveApiCalls === null || !store.getIsLoading) {
    return false;
  }
  return true;
})

</script>

<template>
  <LoadingIndicator :is-loading="isLoading"/>
  <div v-if="store.getIsSearchExpanded" class="overlay" @touchstart="store.setIsSearchExpanded(false)" />
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/css/global.scss';

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
</style>
