import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import { defineComponent, h } from 'vue';
import Home from '@/components/home.vue';
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
      component: defineComponent(() => {
        return () =>
          h(Home, {
            routes: filterRoutes(routes, 'vue') as any as RouteRecordRaw,
          });
      }),
      children: filterRoutes(routes, 'vue'),
    },
    {
      path: '/demo',
      redirect: '/demo/grape',
      component: defineComponent(() => {
        return () =>
          h(Home, {
            routes: filterRoutes(routes, 'demo') as any as RouteRecordRaw,
          });
      }),
      children: filterRoutes(routes, 'demo'),
    },
  ],
});

export default router;
