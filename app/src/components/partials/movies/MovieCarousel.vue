<template>
  <div v-if="movieData" class="movie-carousel-wrapper">
    <h2 v-if="areAllImagesLoaded" ref="titleEl" class="title fade-in">{{ title }}</h2>
    <ul ref="movieList" class="movie-carousel">
      <li 
        v-for="movie in movieData" 
        :key="movie.id"
        class="movie"
      >
        <img 
          @load="checkAllImagesLoaded"
          :src="constructMovieUrl(movie.poster_path)" 
          alt="Movie poster"
          class="poster"
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
/** Vue */
import { ref, nextTick } from 'vue';

/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

/** Constants */
import type Movie from '@/constants/Movie'

const props = defineProps<{
  movieData: Array<Movie>
  title: string
  animationDelay?: number
}>()

const emits = defineEmits(['selected-movie']);
const store = useStore();

const movieList = ref(null);
const titleEl = ref(null);
const areAllImagesLoaded = ref(false);
let delay = props.animationDelay || 0;
let imageDelay = delay;
let loadedImages = 0;

function constructMovieUrl(path:string):string {
  return `http://image.tmdb.org/t/p/w500/${path}`
}

function checkAllImagesLoaded() {
  loadedImages ++;
  areAllImagesLoaded.value = loadedImages === props.movieData.length;
  if(areAllImagesLoaded.value) {
    startAnimations();
    store.setIsLoading(false);
  }
}

function startAnimations() {
  startAnimateIn();
  // Wait for DOM update
  nextTick(() => {
    startFadeIn();
  });
}

// Movies animation
function startAnimateIn() {
  if(movieList.value) {
    const allMovies = (movieList.value as Element).querySelectorAll('.poster');

    // Loop and add animation
    for(let i = 0; i < allMovies.length; i++) {
      const movie = allMovies[i] as HTMLElement;
      movie.classList.add('animate-in');
      // Increment delay by .2 per movie
      imageDelay = imageDelay + .2;
      movie.style.animationDelay = `${imageDelay}s`;
    }
  }
}

// Title animation
function startFadeIn() {
  if(titleEl.value) {
    (titleEl.value as HTMLElement).style.animationDelay = `${delay + .3}s`;
  }
}

// Show loading animation until images are loaded
store.setIsLoading(true);
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
    opacity: 0;
  }

  .movie-carousel {
    display: flex;
    overflow: auto;
    gap: rem(10);
  }

  .movie {
    flex: 0 0 rem(120);

    .poster {
      opacity: 0;
    }
  }

  .animate-in {
    animation: animateIn .5s;
    animation-fill-mode: forwards;
  }

  .fade-in {
    animation: fadeIn .5s;
    animation-fill-mode: forwards;
  }
}

@keyframes fadeIn {
  0% { 
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes animateIn {
  0% { 
    transform: scale(.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
