export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/api/index',
    'pages/components/index',
    'pages/taroify/index',
    'pages/taroify/src/button/index',
  ],
  tabBar: {
    color: '#999999',
    selectedColor: '#FFC0CB',
    backgroundColor: '#ffffff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: '',
        selectedIconPath: ''
      },
      {
        pagePath: 'pages/api/index',
        text: '接口',
        iconPath: '',
        selectedIconPath: ''
      }, {
        pagePath: 'pages/components/index',
        text: '组件',
        iconPath: '',
        selectedIconPath: ''
      }, {
        pagePath: 'pages/taroify/index',
        text: 'taroify',
        iconPath: '',
        selectedIconPath: ''
      }
    ]
  },
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
});
