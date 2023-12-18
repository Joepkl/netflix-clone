<template>
  <div class="search-input-wrapper" :class="{expanded: isSearchExpanded}">
    <input
      class="input-field" 
      type="text"
      placeholder="Movies..."
      v-model="input"
      @input="handleInput"
    >
    <CButton
      v-if="!input"
      class="search-button"
      :name="'Search'"
      :image="SearchIcon"
      @click="expandSearch"
    />
    <CButton
      v-if="input"
      class="clear-input-button"
      :name="'Clear'"
      :image="CrossIcon"
      @click="clearInput"
    />
  </div>
  <div v-if="isSearchExpanded" class="overlay" @click="reset" />
</template>

<script setup lang="ts">
/** Vue */
import { ref } from 'vue';

/** Components */
import CButton from '@/components/ui/CButton.vue';

/** Images */
import SearchIcon from '@/assets/icons/ic_search.svg';
import CrossIcon from '@/assets/icons/ic_cross.svg';

const isSearchExpanded = ref(false);
const input = ref('');

function expandSearch():void {
  isSearchExpanded.value = true;
}

function handleInput():void {
  console.log(input.value)
}

function clearInput():void {
  input.value = '';
}

function reset():void {
  isSearchExpanded.value = false;
  clearInput();
}
</script>

<style lang="scss" scoped>
.search-input-wrapper {
  position: relative;
  height: rem(32);
  z-index: 10;

  &.expanded {
    background-color: var(--bg-dark);

    .input-field {
      border: solid rem(1) var(--white-main);
      width: rem(150);
    }
  }

  .input-field {
    height: 100%;
    width: 0;
    border: none;
    outline: none;
    background-color: inherit;
    color: var(--white-main);
    font-size: rem(16);
    padding: rem(5) rem(30) rem(5) rem(10);
    transition: .5s;
  }
  
  .search-button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }

  .clear-input-button {
    position: absolute;
    top: 50%;
    right: rem(7);
    transform: translate(0, -50%);

    &:deep(.icon) {
      width: rem(15);
      height: rem(15);
    }
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
</style>
