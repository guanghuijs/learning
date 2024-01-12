import { addDays, formatDate } from '@app/utils/dateUtil';

Component({
  properties: {
    start: {
      type: Number,
      value: new Date().getTime(),
    },
    end: {
      type: Number,
      value: new Date(addDays(new Date(), 1)).getTime(),
    },
    title: {
      type: String,
      value: '选择住店日期',
    },
  },
  data: {
    show: false,
    startMin: new Date().getTime(),
    endMin: new Date(addDays(new Date(), 1)).getTime(),
  },
  lifetimes: {
    attached() {},
  },
  methods: {
    onClose() {
      this.setData({
        show: false,
      });
    },
    onPicker() {
      this.setData({
        show: true,
      });
    },
    onChange(e: any) {
      this.setData({
        endMin: new Date(e.detail).getTime(),
        end: new Date(addDays(e.detail, 1)).getTime(),
      });
    },
    onConfirm() {
      // console.log(formatDate(), this.data.start);
    },
  },
});
