import App from './App'

import Vue from 'vue'

import store from "./store/index.js"

import uView from '@/uni_modules/uview-ui'

Vue.config.productionTip = false //关闭调试警告

Vue.use(uView)

import sys from '@/common/utils/system.js' //系统

Vue.prototype.$sys = sys;

import ShowLoading from "@/components/ShowLoading/index.vue";
Vue.component('ShowLoading', ShowLoading);

import HeadToast from '@/components/HeadToast/index.vue'
Vue.component('HeadToast', HeadToast);

import Toast from '@/components/Toast/index.vue'
Vue.component('Toast', Toast);

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()