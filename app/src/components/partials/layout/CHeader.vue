<template>
  <div v-if="userProfile" class="header-wrapper" ref="header" :class="{sticky: isHeaderSticky}">
    <h1>For {{ userProfile?.userName }}</h1>
    <div class="actions-wrapper">
      <CButton
        :name="'Cast'"
        :image="CastIcon"
      />
      <SearchButton />
    </div>
  </div>
  <h1 class="test">Test</h1>
</template>

<script setup lang="ts">
/** Vue */
import { computed, onMounted, ref } from 'vue';

/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

/** Components */
import CButton from '@/components/ui/CButton.vue';
import SearchButton from '@/components/ui/SearchButton.vue';

/** Images */
import CastIcon from '@/assets/icons/ic_cast.svg';


const store = useStore();
const header = ref(null);
const isHeaderSticky = ref(false);

const userProfile = computed(() => store.getActiveUser);

function initObserver():void {
  let observer = new IntersectionObserver(setStickyHeader, { threshold: 0.3 });
  let target = header.value;
  if(target) {
    observer.observe(target);
  }
}

function setStickyHeader(entries: IntersectionObserverEntry[]):void {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      isHeaderSticky.value = true;
    } 
  });
}

onMounted(() => {
  initObserver();
  // Handle sticky position for navigation
  document.addEventListener('scroll', ():void => {
    if(window.scrollY <= 5) {
      isHeaderSticky.value = false;
    }
  })
})
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  padding: rem(30) rem(20);
  transition: .5s;

  &.sticky {
    position: sticky;
    top: 0;
    background-color: red;
    // background: transparent;
    // backdrop-filter: blur(rem(8));
  }

  .actions-wrapper {
    display: flex;
    gap: rem(10);
  }
}

.test {
  margin-top: rem(900);
}
</style>
