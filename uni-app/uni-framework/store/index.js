import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import systemStore from './modules/system';
import shopCartStore from './modules/shopCart';

const store = new Vuex.Store({
	// 模块:将状态管理划分为不同的模块，以便组织和管理。
	modules: {
		systemStore,
		shopCartStore
	}
})

export default store