import { createRouter, createWebHashHistory } from 'vue-router';
import { getModuleRouter } from '@/router/utils';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/vue',
    },
    getModuleRouter('vue', '1.template'),
    getModuleRouter('es6', '1.let'),
    getModuleRouter('css', '1.属性选择器'),
    getModuleRouter('demo', 'grape'),
    getModuleRouter('three-js', 'amf'),
    getModuleRouter('bmap', '1.init'),
    getModuleRouter('echarts', '1.基本使用'),
  ],
});

export default router;
