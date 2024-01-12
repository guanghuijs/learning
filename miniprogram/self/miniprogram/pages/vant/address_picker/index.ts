// pages/vant/address_picker/index.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: '530103',
    addressName: '云南省昆明市盘龙区',
  },

  onChange(e: any) {
    console.log(e);
  },

  onConfirm(e: any) {
    console.log(e);
  },
});
