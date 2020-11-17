import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/cards',
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('@/views/Cards'),
  },
  {
    path: '/cards/create',
    name: 'CardCreate',
    component: () => import('@/views/CardCreate'),
    props: (route) => ({ ...route.query, ...route.params }),
  },
  {
    path: '/cards/:cardId',
    name: 'CardEdit',
    component: () => import('@/views/CardEdit'),
    props: (route) => ({ ...route.query, ...route.params }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
