import { createRouter, createWebHashHistory } from 'vue-router';

import routes from '~pages';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/import-types',
    },
    ...routes,
  ],
});

export { routes };
export default router;
