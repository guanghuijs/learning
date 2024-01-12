import { areaList } from '@vant/area-data';
Component({
  behaviors: [],
  properties: {
    value: {
      type: String,
      value: '110101',
    },
    showValue: {
      type: String,
      value: '北京市北京市东城区',
    },
    disable: {
      type: Boolean,
      value: false,
    },
    label: {
      type: String,
      value: '地址选择',
    },
    placeholder: {
      type: String,
      value: '请选择地址',
    },
    title: {
      type: String,
      value: '地址选择',
    },
  },
  /**
   * 页面的初始数据
   */
  data: {
    areaList,
    show: false,
  },

  methods: {
    toggle() {
      if (this.properties.disable) return;
      this.setData({
        show: !this.data.show,
      });
    },
    confirm(e: any) {
      this.setData({
        showValue: e.detail.values.map((item: any) => item.name).join(''),
        value: e.detail.values.map((item: any) => item.code)[2],
        show: false,
      });
      this.triggerEvent('confirm', e.detail.values);
    },
    change(e: any) {
      this.triggerEvent('change', e.detail.values);
    },
  },
});
