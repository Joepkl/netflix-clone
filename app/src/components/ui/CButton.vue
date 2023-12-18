<template>
  <button class="button">
    <img class="icon" :src="image" :alt="`${name} icon`">
    <p v-if="text">{{ text }}</p>
  </button>
</template>

<script setup lang="ts">

const props = defineProps<{
  image: string
  name: string
  text?: string
}>()
</script>

<style lang="scss" scoped>
.button {
  background: none;
  border: none;

  .icon {
    width: rem(30);
    height: rem(25);
  }
}
</style>
