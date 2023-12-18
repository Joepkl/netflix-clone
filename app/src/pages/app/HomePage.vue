<template>
  <div class="home-page-wrapper">
    <CHeader />
    <div class="content-wrapper">
      <h1>joe{{ store.getActiveApiCalls }}</h1>

    </div>
  </div>
</template>

<script setup lang="ts">
/** Vue */
import { useRouter } from 'vue-router';

/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

/** Components */
import CHeader from '@/components/partials/layout/CHeader.vue';

/** API calls */
import { fetchTrendingMovies } from '@/api/fetchMovies';

const store = useStore();
const router = useRouter();

getTrendingMovies();

async function getTrendingMovies() {
  const response = await fetchTrendingMovies();
  if(response.isSuccess) {
    console.log('sucess', response.data);
  } else {
    console.log('error', response.error)
  }
}
</script>

<style lang="scss">
.home-page-wrapper {
  min-height: 100dvh;
  background: var(--bg-blue-gradient);

  .content-wrapper {
    padding: rem(30) rem(20) rem(20);
  }
}
</style>
