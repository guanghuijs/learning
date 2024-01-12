// pages/component/scroll_view.ts
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isTriggered: false,
  },
  handleRefresher() {
    console.log('下拉事件');
    setTimeout(() => {
      this.setData({
        isTriggered: false,
      });
    }, 3000);
  },
  handlescrolltolower() {
    console.log('触底事件');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
