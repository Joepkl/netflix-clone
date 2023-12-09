<template>
  <div class="login-page-wrapper">
    <h1>Who's watching?</h1>
    <ProfileCard
      v-for="user in USERS" :key="user.id"
      :user-name="user.userName"
      :profile-image="user.profileImage"
    />
  </div>
</template>

<script setup lang="ts">
/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

/** Components */
import ProfileCard from '@/components/partials/users/ProfileCard.vue';

/** Constants */
import { USERS } from '@/constants/Users';

const store = useStore();


</script>

<style lang="scss">
.login-page-wrapper {
  min-height: 100dvh;
  background-color: var(--bg-dark);

  .profile-card-wrapper {
    width: rem(100);
  }
}
</style>
