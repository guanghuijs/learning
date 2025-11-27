import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import { map } from './map';
import { defineComponent, h } from 'vue';
import { Home } from '@/components/home';

routes.forEach((route) => {
  const options = map.find((option) => route.path.endsWith(option.name));
  Object.assign(route, {
    ...options,
    component: defineComponent(() => {
      return () =>
        h(Home, {
          routes: route.children,
        });
    }),
  });
});

// 排序
routes.sort((routeA, routeB) => routeA.meta.sort - routeB.meta.sort);

// 根路由
routes.unshift({
  path: '/',
  redirect: '/js_',
});

console.log(routes);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach((route) => {
  document.title = route.meta.title + ' - vue3 demo'
})

console.log(router.getRoutes());

export default router;
