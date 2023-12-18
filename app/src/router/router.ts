import { createRouter, createWebHistory } from 'vue-router';
import authRoutes from '@/router/authRoutes';
import { LOGIN_ROUTE } from '@/router/authRoutes';
import appRoutes from '@/router/appRoutes';

/** Store */ // @ts-ignore
import { useStore } from "@/stores/store.ts";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes, ...appRoutes],
});

/** Add <title> tag based on Route's meta.pageTitle */
router.beforeEach((to, from, next) => {
  let pageTitle = import.meta.env.VITE_APP_TITLE;
  if (to?.meta?.pageTitle) {
    pageTitle = `${to.meta.pageTitle} - ${pageTitle}`;
  }
  document.title = pageTitle;
  /** Add route guard for authentication */
  if (to?.meta?.requiresAuth) {
    const store = useStore();
    const isAuthenticated = store.getIsAuthenticated;
    if (!isAuthenticated) {
      next(LOGIN_ROUTE);
      return;
    }
  }
  next();
});

export default router;
