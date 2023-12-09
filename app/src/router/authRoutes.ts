const LoginPage = () => import('@/pages/auth/LoginPage.vue');


const BASE_ROUTE = {
  path: '/',
  redirect: '/login',
  meta: { requiresAuth: false },
};
const LOGIN_ROUTE = {
  path: '/login',
  name: 'Login',
  component: LoginPage,
  meta: {
    requiresAuth: false,
    pageTitle: 'Login',
  },
};

// const CREATE_ACCOUNT_ROUTE = {
//   path: '/create-account',
//   name: 'Create account',
//   component: ,
//   meta: {
//     requiresAuth: false,
//     pageTitle: 'Create account',
//     backRoute: LOGIN_ROUTE,
//   },
// };

const publicRoutes = [
  BASE_ROUTE,
  LOGIN_ROUTE,
  // CREATE_ACCOUNT_ROUTE,
];

export default publicRoutes;
export {
  // BASE_ROUTE,
  LOGIN_ROUTE,
  // CREATE_ACCOUNT_ROUTE,
};
