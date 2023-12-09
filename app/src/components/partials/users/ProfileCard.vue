<template>
  <div class="profile-card-wrapper">
    <p class="user-name">{{ userName }}</p>
    <img class="profile-picture" :src="profileImage" alt="Profile image">
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  userName: string
  profileImage: string
}>()

</script>

<style lang="scss">
.profile-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-name {
    width: fit-content;
  }
}
</style>
