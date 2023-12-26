const HomePage = () => import('@/pages/app/HomePage.vue');

const HOME_ROUTE = {
  path: '/user=:id',
  name: 'Home',
  component: HomePage,
  meta: {
    requiresAuth: true,
    pageTitle: 'Home',
  },
};

const appRoutes = [
  HOME_ROUTE
];

export default appRoutes;
export {
  HOME_ROUTE,
};
