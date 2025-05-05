import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import systemStore from './modules/system.js';

const store = new Vuex.Store({
	modules: {
		systemStore,
	}
})

export default store