const systemStore = {
	namespaced: true, //开启空间命名
	state: {
		loading: false, //是否显示加载
		opacity: true, //加载页是否透明
		loadingLock: true, //加载锁
		Notice: {}, //消息通知配置参数
		noticeLock: true, //消息通知锁
		toastData: {}, //toast数据参数
		toastLock: true, //toast锁
		sysHead: 0, //顶部导航图标
	},
	mutations: {
		/**
		 * @description: 打开弹窗
		 * @param {Object} state state
		 * @param {String} newValue 弹窗类型
		 * @return viod
		 */
		openLoading(state, newValue) {
			if (state.loadingLock) {
				state.loadingLock = false;
				state.loading = true;
				if (newValue == 'mini') {
					state.opacity = true;
				}
				if (newValue == 'max') {
					state.opacity = false;
				}
			}
		},

		/**
		 * @description: 关闭加载框
		 * @param {Object} state state
		 * @param {Boolean} newValue 打开或者关闭值
		 * @return viod
		 */
		closeLoading(state, newValue) {
			state.loading = false;
			state.loadingLock = true;
		},


		/**
		 * @description: 消息提示
		 * @param {Object} state  state
		 * @param {Object} newValue 提示信息
		 * @param {String} newValue.type 提示类型
		 * @param {String} newValue.title 提示标题
		 * @param {String} newValue.content 提示内容
		 * @param {String} newValue.url 跳转url
		 * @param {String} newValue.second 持续秒数
		 * @return viod
		 */
		showHeadToast(state, newValue) {
			if (state.noticeLock) {
				state.noticeLock = false;
				state.Notice = {
					type: '', //通知类型
					title: '', //通知标题
					content: '', //通知内容
					navigation: '', //导航栏类型
					url: '', //跳转path
					second: 0, //持续秒数
				}
				Object.keys(newValue).forEach((key) => {
					state.Notice[key] = newValue[key];
				});
			}
		},

		/**
		 * @description: 解开消息锁,让消息可以再次弹出
		 * @param {Object} state state
		 * @return viod
		 */
		deblocking(state) {
			state.noticeLock = true;
		},

		/**
		 * @description: 打开Toast
		 * @param {Object} state state
		 * @param {String} newValue.title 提示内容
		 * @param {String} newValue.icon 提示icon
		 * @param {String} newValue.icon 持续秒数
		 * @return viod
		 */
		showToast(state, newValue) {
			if (state.toastLock) {
				state.toastLock = false;
				state.toastData = {
					title: '', //提示信息
					icon: '', //展示logo
					second: 0, //持续时间
				}
				Object.keys(newValue).forEach((key) => {
					state.toastData[key] = newValue[key];
				});
			}
		},

		/**
		 * @description: 
		 * @param {Object} state state
		 * @return viod
		 */
		untieToast(state) {
			state.toastLock = true;
		},

		/**
		 * @description: 获取设备信息
		 * @return {*}
		 */
		getSysHead(state) {
			uni.getSystemInfo({
				success: function(res) {
					let statusBarHeight = res.statusBarHeight;
					state.sysHead = statusBarHeight;
				}
			});
		}
	},
	actions: {}
}

export default systemStore;