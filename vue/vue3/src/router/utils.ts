import type { RouteRecordRaw } from 'vue-router';

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
