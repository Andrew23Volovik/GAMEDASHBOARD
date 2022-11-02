import Vue from 'vue';
import VueRouter from 'vue-router';

import Games from '@/views/Games';
import GameDetail from '@/views/GameDetail';
import Platforms from '@/views/Platforms';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'Games' },
  },
  {
    path: '/games',
    name: 'Games',
    component: Games,
  },
  {
    path: '/games/:slug',
    name: 'GameDetail',
    component: GameDetail,
  },
  {
    path: '/platforms',
    name: 'Platforms',
    component: Platforms,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
