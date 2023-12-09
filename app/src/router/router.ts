import { createRouter, createWebHistory } from 'vue-router';
import authRoutes from '@/router/authRoutes';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes],
});

/** Add <title> tag based on Route's meta.pageTitle */
router.beforeEach((to, from, next) => {
  let pageTitle = import.meta.env.VITE_APP_TITLE;
  if (to?.meta?.pageTitle) {
    pageTitle = `${to.meta.pageTitle} | ${pageTitle}`;
  }
  document.title = pageTitle;
  next();
});

export default router;
