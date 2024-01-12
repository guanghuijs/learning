// pages/component/video_/index.ts

let videoContext: any;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    videoContext: {} as any,
    // 弹幕
    danmuList:
      [{
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      }, {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    videoContext = wx.createVideoContext('testVideo');
  },

  baseOpt(e: any) {
    const { way, param } = e.target.dataset;
    console.log(param);
    videoContext?.[way](param)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})