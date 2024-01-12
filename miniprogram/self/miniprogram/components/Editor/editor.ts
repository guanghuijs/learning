// pages/shoppingmall/my_store/components/editor/editor.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    placeholder: {
      type: String,
      value: '开始输入...'
    },
    formats: {
      type: Object,
      value:{},
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    editorCtx: {} as any
  },
 
  /**
   * 组件的方法列表
   */
  methods: {
    editorOnLoad(){
      console.log('富文本');
      const platform = wx.getSystemInfoSync().platform
      const isIOS = platform === 'ios'
      this.setData({ isIOS})
      const that = this
      this.updatePosition(0)
      let keyboardHeight = 0
      wx.onKeyboardHeightChange((res:any) => {
        if (res.height === keyboardHeight) return
        const duration = res.height > 0 ? res.duration * 1000 : 0
        keyboardHeight = res.height
        setTimeout(() => {
          wx.pageScrollTo({
            scrollTop: 0,
            success() {
              that.updatePosition(keyboardHeight)
              that.editorCtx.scrollIntoView()
            }
          })
        }, duration)
      })
    },
    updatePosition(keyboardHeight:number) {
      const toolbarHeight = 50
      const { windowHeight, platform } = wx.getSystemInfoSync()
      let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
      this.setData({ editorHeight, keyboardHeight })
    },
    calNavigationBarAndStatusBar() {
      const systemInfo = wx.getSystemInfoSync()
      const { statusBarHeight, platform } = systemInfo
      const isIOS = platform === 'ios'
      const navigationBarHeight = isIOS ? 44 : 48
      return statusBarHeight + navigationBarHeight
    },
    onEditorReady() {
     const _this = this;
      _this.createSelectorQuery().select('#editor').context((res) => {
        console.log("数据哦哦哦",res);
        _this.editorCtx = res.context;
        _this.triggerEvent('editorready');
      }).exec()
    },
    blur() {
      this.editorCtx.blur()
    },
    format(e) {
      let { name, value } = e.target.dataset
      if (!name) return
      console.log('format', this)
      this.editorCtx.format(name, value)
    },
    onStatusChange(e) {
      const formats = e.detail;
      console.log(e.detail);
      this.setData({ formats })
    },
    insertDivider() {
      this.editorCtx.insertDivider({
        success: function () {
          console.log('insert divider success')
        }
      })
    },
    clear() {
      this.editorCtx.clear({
        success: function (res) {
          console.log("clear success")
        }
      })
    },
    removeFormat() {
      this.editorCtx.removeFormat()
    },
    insertDate() {
      const date = new Date()
      const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
      this.editorCtx.insertText({
        text: formatDate
      })
    },
    insertImage() {
      const that = this
      wx.chooseImage({
        count: 1,
        success: function (res) {
          that.editorCtx.insertImage({
            src: res.tempFilePaths[0],
            data: {
              id: 'abcd',
              role: 'god'
            },
            width: '80%',
            success: function (e) {
              console.log(e);
              console.log('insert image success');
              wx.uploadFile({
                filePath: 'filePath',
                name: 'name',
                url: 'url',
                header:{
                  "Content-Type": "multipart/form-data"
                },
                success(){
                }
              })
            }
          })
        }
      })
    },
    onEditorBlur(event:any){
      const {detail} = event;
      this.triggerEvent('editorblur', detail);
    },
    setContentData(html:string){
      console.log("来了老六",html);
      this.editorCtx.setContents({html});
    }
  }
})
