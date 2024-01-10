import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

console.log("服务端", import.meta.env);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "app",
    component: () => import("@/App.vue"),
  },
];

const modules = import.meta.globEager("./modules/**/*.ts");

Object.keys(modules).forEach((key) => {
  routes.push((modules[key] as any).default || {});
});

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/**
 * 返回模块路由
 * @param blockName
 */
export const getBlockRoute = (
  blockName: string
): RouteRecordRaw[] | undefined => {
  return routes.filter((i) => i.name === blockName)[0].children;
};

/**
 * 返回路由表所有路由
 */
export const getRoutes = (): RouteRecordRaw[] => {
  return routes.slice(1);
};

export default router;
