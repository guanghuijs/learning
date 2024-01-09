import type { RouteMap } from '../types';
import { ModuleOrderNo } from '../constants';

export default {
  title: 'scss',
  path: 'scss',
  order: ModuleOrderNo.SCSS,
  children: [{ title: '模板', path: 'test' }],
} as RouteMap;
