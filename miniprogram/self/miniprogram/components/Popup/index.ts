// components/Popup/index.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: '标题'
    },
    height: {
      type: String,
      value: '60vh'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle() {
      this.setData({
        show: !this.data.show
      })
    }
  }
})