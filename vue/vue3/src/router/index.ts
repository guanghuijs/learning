import { createRouter, createWebHistory } from 'vue-router';
import { getModuleRouter } from '@/router/utils';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/vue',
    },
    getModuleRouter('vue', '1.template'),
    getModuleRouter('demo', 'grape'),
    getModuleRouter('three-js', 'amf'),
    getModuleRouter('css', '1.属性选择器'),
    getModuleRouter('es6', '1.let'),
  ],
});

export default router;
