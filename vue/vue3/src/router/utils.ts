import type { RouteRecordRaw } from 'vue-router';
import { defineComponent, h } from 'vue';
import { Home } from '@/components/home';
import routes from '~pages';

export function filterRoutes(routes: RouteRecordRaw[], routeType: string): RouteRecordRaw[] {
  return routes
    ?.filter((route) => (route.name as string).startsWith(routeType))
    .map((item) => {
      return Object.assign(item, {
        order: Number((item.name as string).split('-')[1].split('.')[0]),
      });
    })
    .sort((a, b) => a.order - b.order);
}

/**
 * 获取模块路由,模块中的.vue文件不能出现大写字母,不然识别不到代码
 * @param modelName 模块名字需要与目录保持一致
 * @param firstRote 模块首屏路由
 */
export function getModuleRouter(modelName: string, firstRote: string) {
  return {
    path: `/${modelName}`,
    redirect: `/${modelName}/${firstRote}`,
    name: modelName,
    component: defineComponent(() => {
      return () =>
        h(Home, {
          routes: filterRoutes(routes, modelName) as any,
        });
    }),
    children: filterRoutes(routes, modelName),
  };
}
