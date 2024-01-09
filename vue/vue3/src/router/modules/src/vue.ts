import type { RouteMap } from '../types';
import { ModuleOrderNo } from '../constants';

export default {
  title: 'vue',
  path: 'vue',
  order: ModuleOrderNo.VUE,
  children: [{ title: '模板', path: 'template' }],
} as RouteMap;
