import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/about.vue'),
    },
  ],
});
