import type { RouteMap } from '../types';
import { ModuleOrderNo } from '../constants';

export default {
  title: 'less',
  path: 'less',
  order: ModuleOrderNo.LESS,
  children: [{ title: '模板', path: 'test' }],
} as RouteMap;
