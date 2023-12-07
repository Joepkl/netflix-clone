<template>
  <h1>Hello</h1>
  <p>{{ counterStore.getCount }}</p>
  <button @click="incrementCount">Increment count</button>
</template>

<script setup lang="ts">
/** Store */ // @ts-ignore
import {useCounterStore} from "@/stores/counter.ts";

const counterStore = useCounterStore();

function incrementCount() {
  counterStore.setCount(counterStore.getCount + 1);
}
</script>

<style lang="scss">
</style>
