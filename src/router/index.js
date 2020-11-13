import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import('@/views/Cards'),
  },
  {
    path: '/cards/create',
    name: 'CardCreate',
    component: () => import('@/views/Card'),
    props: (route) => ({ ...route.query, ...route.params }),
  },
  {
    path: '/cards/:cardId',
    name: 'Card',
    component: () => import('@/views/Card'),
    props: (route) => ({ ...route.query, ...route.params }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
