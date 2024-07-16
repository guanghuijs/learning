import { createRouter, createWebHashHistory } from 'vue-router';
import { getModuleRouter } from '@/router/utils';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/js/2.window-api?name=gh&age=18',
    },
    getModuleRouter('js', '1.btoa'),
    getModuleRouter('vue', '1.template'),
    getModuleRouter('es6', '1.let'),
    getModuleRouter('css', '1.props_select'),
    getModuleRouter('less', '1.var'),
    getModuleRouter('scss', '1.annotation'),
    getModuleRouter('demo', '1.grape'),
    getModuleRouter('three-js', 'amf'),
    getModuleRouter('bmap', '1.init'),
    getModuleRouter('amap', '1.高德地图初体验'),
    getModuleRouter('echarts', '1.basics'),
  ],
});

export default router;
