<template>
  <div class="profile-card-wrapper" @click="selectProfile">
    <img 
      class="profile-picture" 
      :src="profileImage" 
      alt="Profile image"
    >
    <p class="user-name">{{ userName }}</p>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  userName: string
  profileImage: string
}>()

const emits = defineEmits(['selected-profile']);

function selectProfile():void {
  emits('selected-profile')
}

</script>

<style lang="scss" scoped>
.profile-card-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  .user-name {
    width: fit-content;
    margin-top: rem(10);
  }

  .profile-picture {
    border-radius: rem(10);
  }
}
</style>
