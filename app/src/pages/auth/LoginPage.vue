<template>
  <div class="login-page-wrapper">
    <div class="content-wrapper">
      <h1 class="title">Who's watching?</h1>
      <ul class="user-profiles-wrapper">
        <li v-for="user in USERS" :key="user.id">
          <ProfileCard
            :user-name="user.userName"
            :profile-image="user.profileImage"
            @selected-profile="handleLogin(user)"
          />
        </li>
      </ul>
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

/** API calls */
import { fetchTrendingMovies, fetchUpcomingMovies } from '@/api/fetchMovies';

const store = useStore();
const router = useRouter();

function handleLogin(user: UserProfile) {
  getMovies();
  login(user);
}

function login(user: UserProfile) {
  store.setActiveUser(user);
  store.setIsAuthenticated(true);
  router.push({name: HOME_ROUTE.name, params: {id: user.id}});
}

async function getMovies() {
  try {
    fetchTrendingMovies();
    fetchUpcomingMovies();
  } catch(error) {
    alert(error)
  }
}
</script>

<style lang="scss" scoped>
.login-page-wrapper {
  min-height: 100dvh;
  background-color: var(--bg-dark);
  padding: rem(30) rem(20) rem(20);
}

.content-wrapper {

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

@media screen and (min-width: 992px){
  .content-wrapper {
    margin-top: 20vh;

    .user-profiles-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: fit-content;
      max-width: rem(500);
    }

    .profile-card-wrapper {
      width: rem(130);
    }
  }
}
</style>
