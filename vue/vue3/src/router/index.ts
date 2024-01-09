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
      redirect: '/vue/1.模板语法',
      component: defineComponent(() => {
        return () =>
          h(Home, {
            routes: filterRoutes(routes, 'vue'),
          });
      }),
      children: filterRoutes(routes, 'vue'),
    },
  ],
});

export default router;
