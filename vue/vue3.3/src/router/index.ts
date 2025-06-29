import { createRouter, createWebHashHistory } from 'vue-router';

import routes from '~pages';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/App.vue'),
    },
    ...routes,
  ],
});

export default router;
