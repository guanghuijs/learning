import { type RouteRecordRaw } from 'vue-router';

export const map: Partial<RouteRecordRaw>[] = [
  {
    name: 'js_',
    redirect: '/js_/btoa',
    meta: {
      title: 'js',
      sort: 1,
    },
  },
  {
    name: 'vue',
    redirect: '/vue/template',
    meta: {
      title: 'vue',
      sort: 2,
    },
  },
  {
    name: 'es6',
    redirect: '/es6/let',
    meta: {
      title: 'es6',
      sort: 3,
    },
  },
  {
    name: 'css_',
    redirect: '/css_/vis-a-vis',
    meta: {
      title: 'css',
      sort: 4,
    },
  },
  {
    name: 'less',
    redirect: '/less/var',
    meta: {
      title: 'less',
      sort: 5,
    },
  },
  {
    name: 'scss',
    redirect:'/scss/annotation',
    meta: {
      title: 'scss',
      sort: 6,
    },
  },
  {
    name: 'demo',
    redirect:'/demo/grape',
    meta: {

      title: 'demo',
      sort: 7,
    },
  },
  {
    name: 'three-js',
    redirect: '/three-js/amf',
    meta: {
      title: 'three-js',
      sort: 8,
    },
  },
  {
    name: 'bmap',
    redirect:'/bmap/init',
    meta: {
      title: 'bmap',
      sort: 9,
    },
  },
  {
    name: 'amap',
    redirect:'/amap/init',
    meta: {
      title: 'amap',
      sort: 10,
    },
  },
  {
    name: 'echarts',
    redirect:'/echarts/basics',
    meta: {
      title: 'echarts',
      sort: 11,
    },
  },
  {
    name: 'swiper',
    redirect:'/swiper/base',
    meta: {
      title: 'swiper',
      sort: 12,
    },
  },
  {
    name: 'motion',
    redirect: '/motion/eg',
    meta: {
      title: 'motion',
      sort: 13,
    },
  },
];
