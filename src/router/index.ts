import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '../components/pages/MainPage.vue';
import { AppRoute } from '../const/routes';

const routes: Array<RouteRecordRaw> = [
  {
    path: AppRoute.MAIN,
    name: 'main',
    component: MainPage,
  },
  {
    path: AppRoute.SIGN_IN,
    name: 'signIn',
    component: () => import('../components/pages/LoginPage.vue'),
  },
  {
    path: AppRoute.FAVORITES,
    name: 'favorites',
    component: () => import('../components/pages/FavoritesHotels.vue'),
  },
  {
    path: AppRoute.OFFER,
    name: 'hotels',
    component: () => import('../components/pages/HotelCard.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('../components/pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
