<template>
  <div v-if="movieData" class="movie-carousel-wrapper">
    <h2 class="title">{{ title }}</h2>
    <ul class="movie-carousel">
      <li 
        v-for="movie in movieData" 
        :key="movie.id"
        class="movie"
      >
        <img :src="constructMovieUrl(movie.poster_path)" alt="Movie poster">
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type Movie from '@/constants/Movie'

const props = defineProps<{
  movieData: Array<Movie>
  title: string
}>()

const emits = defineEmits(['selected-movie']);

function constructMovieUrl(path:string):string {
  return `http://image.tmdb.org/t/p/w500/${path}`
}
</script>

<style lang="scss" scoped>
.movie-carousel-wrapper {
  -ms-overflow-style: none; 
  scrollbar-width: none; 

  ::-webkit-scrollbar {
    display: none;
  }

  .title {
    margin-bottom: rem(10);
  }

  .movie-carousel {
    display: flex;
    overflow: auto;
    gap: rem(10);
  }

  .movie {
    flex: 0 0 rem(120);
  }
}
</style>
