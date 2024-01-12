import type { routeItem } from '@type/route';
export const routes: routeItem[] = [
  {
    title: '微信小程序基础',
    open: true,
    routes: [
      {
        title: 'wxfor',
        path: '/pages/applet_base/wx_for/index',
      },
      {
        title: 'login',
        path: '/pages/login/index',
      },
      {
        title: '过滤器',
        path: '/pages/applet_base/filter/index',
      },
      {
        title: '事件',
        path: '/pages/applet_base/event_/index',
      },
      {
        title: '自定义导航',
        path: '/pages/applet_base/custom_nav/index',
      },
      {
        title: '组件数据/属性监听',
        path: '/pages/applet_base/observer/index',
      },
      {
        title: '组件生命周期',
        path: '/pages/applet_base/lifetimes/lifetimes',
      },
    ],
  },
  {
    title: '组件通讯',
    open: false,
    routes: [
      {
        title: '组件通讯',
        path: '/pages/communication/1/index',
      },
      {
        title: '组件model:value',
        path: '/pages/communication/2/index',
      },
    ],
  },
  {
    title: '原生组件',
    open: false,
    routes: [
      {
        title: 'scroll-view',
        path: '/pages/component/scroll_view/index',
      },
      {
        title: '富文本编辑器',
        path: '/pages/component/edit/index',
      },
      {
        title: 'video',
        path: '/pages/component/video_/index',
      },
    ],
  },
  {
    title: 'XR_FRAME',
    open: false,
    routes: [
      {
        title: '第一个xr',
        path: '/pages/xr-frame/xr-basic/index',
      },
      {
        title: '手势点赞',
        path: '/pages/xr-frame/xr-like/index',
      },
      {
        title: '人脸识别',
        path: '/pages/xr-frame/xr-face/index',
      },
      {
        title: '识物',
        path: '/pages/xr-frame/xr-osdm/index',
      },
      {
        title: '识物2',
        path: '/pages/xr-frame/xr-2dmarker/index',
      },
    ],
  },
  {
    title: 'vant-weapp',
    open: false,
    routes: [
      {
        title: 'Popup',
        path: '/pages/vant/popup/index',
      },
      {
        title: 'address_picker',
        path: '/pages/vant/address_picker/index',
      },
    ],
  },
  {
    title: 'less',
    routes: [
      {
        title: '变量',
        path: '/pages/less/var/index',
      },
      {
        title: '&',
        path: '/pages/less/&/index',
      },
      {
        title: '继承',
        path: '/pages/less/extend/index',
      },
      {
        title: '混入',
        path: '/pages/less/mix-in/index',
      },
    ],
  },
];
