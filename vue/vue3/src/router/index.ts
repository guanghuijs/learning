import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import { defineComponent, h } from 'vue';
import { Home } from '@/components/home';
import { filterRoutes } from '@/router/utils';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/vue',
    },
    {
      path: '/vue',
      redirect: '/vue/1.template',
      name: 'vue',
      component: defineComponent(() => {
        return () =>
          h(Home, {
            routes: filterRoutes(routes, 'vue') as any,
          });
      }),
      children: filterRoutes(routes, 'vue'),
    },
    {
      path: '/demo',
      redirect: '/demo/grape',
      name: 'demo',
      component: defineComponent(() => {
        return () =>
          h(Home, {
            routes: filterRoutes(routes, 'demo') as any,
          });
      }),
      children: filterRoutes(routes, 'demo'),
    },
    {
      path: '/three-js',
      redirect: '/three-js/amf',
      name: 'threeJs',
      component: defineComponent(() => {
        return () =>
          h(Home, {
            routes: filterRoutes(routes, 'three-js') as any,
          });
      }),
      children: filterRoutes(routes, 'three-js'),
    },
  ],
});

export default router;
