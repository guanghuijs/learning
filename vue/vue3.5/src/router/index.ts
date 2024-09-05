import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/attr-structure',
    meta: {
      title: '自定义属性结构',
    },
    component: () => import('@/views/attr-structure/index.vue'),
  },
  {
    path: '/template-ref',
    meta: {
      title: '获取模板引擎API',
    },
    component: () => import('@/views/template-ref/index.vue'),
  },
  {
    path: '/watcher-cleanup',
    meta: {
      title: '清理回调监听',
    },
    component: () => import('@/views/watcher-cleanup/index.vue'),
  },
  {
    path: '/deferred-teleport',
    meta: {
      title: 'teleport可创建到后面元素',
    },
    component: () => import('@/views/deferred-teleport/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/attr-structure',
    },
    ...routes,
  ],
});

export { routes };
export default router;
