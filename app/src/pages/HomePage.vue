<template>
  <h1>Hello</h1>
  <p>{{ store.getCount }}</p>
  <button @click="incrementCount">Increment count</button>
</template>

<script setup lang="ts">
/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

const store = useStore();

function incrementCount() {
  store.setCount(store.getCount + 1);
}
</script>

<style lang="scss">
</style>
