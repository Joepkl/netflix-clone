<template>
  <div class="login-page-wrapper">
    <h1 class="title">Who's watching?</h1>
    <div class="user-profiles-wrapper">
      <ProfileCard
        v-for="user in USERS" :key="user.id"
        :user-name="user.userName"
        :profile-image="user.profileImage"
        @selected-profile="login(user)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
/** Vue */
import { useRouter } from 'vue-router';

/** Routes */
import { HOME_ROUTE } from '@/router/appRoutes'

/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";

/** Components */
import ProfileCard from '@/components/partials/users/ProfileCard.vue';

/** Constants */
import { USERS } from '@/constants/Users';
import type { UserProfile } from '@/constants/Users';

const store = useStore();
const router = useRouter();

function login(user: UserProfile) {
  store.setActiveUser(user);
  store.setIsAuthenticated(true);
  router.push({name: HOME_ROUTE.name, params: {id: user.id}});
}

</script>

<style lang="scss" scoped>
.login-page-wrapper {
  min-height: 100dvh;
  background-color: var(--bg-dark);
  padding: rem(30) rem(20) rem(20);

  .title {
    text-align: center;
  }

  .user-profiles-wrapper {
    width: 90%;
    max-width: rem(300);
    margin: rem(80) auto 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(rem(100), 1fr));
    gap: rem(20) rem(30);
  }
}
</style>
