<template>
  <div class="home-page-wrapper">
    <CHeader />
    <div v-if="trendingMovies" class="content-wrapper">
      <MovieCarousel
        title="Trending Movies"
        :movieData="trendingMovies"
        :animation-delay="0"
      />
      <MovieCarousel
        title="Trending Movies"
        :movieData="trendingMovies"
        :animation-delay="0.2"
      />
      <MovieCarousel
        title="Trending Movies"
        :movieData="trendingMovies"
        :animation-delay="0.4"
      />
      <MovieCarousel
        title="Trending Movies"
        :movieData="trendingMovies"
        :animation-delay="0.6"
      />
      <MovieCarousel
        title="Trending Movies"
        :movieData="trendingMovies"
        :animation-delay="0.8"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
/** Vue */
import { useRouter } from 'vue-router';
import { computed } from 'vue';

/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

/** Components */
import CHeader from '@/components/partials/layout/CHeader.vue';
import MovieCarousel from '@/components/partials/movies/MovieCarousel.vue';


const store = useStore();
const router = useRouter();

const trendingMovies = computed(() => store.getTrendingMovies ?? []);
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
