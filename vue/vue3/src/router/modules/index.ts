import type { RouteMap } from './types';
const modules = import.meta.glob('./src/**.ts', { eager: true });

const routeMaps: RouteMap[] = [];
Object.values(modules).forEach((item) => {
  routeMaps.push((item as any)?.default);
});
export default routeMaps;
