/**
 * @Description: 系统层挂载的全局函数
 * @Author: @晏长刚
 * @Date: 2024-09-09 18:29:23
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-12 11:09:36
 * @FilePath: /uni-framework/common/utils/system.js
 */

import store from "../../store/index.js"

const sys = {
	//头部提示
	HeadToast: {
		/**
		 * @description: 头部弹窗成功样式
		 * @param {string} title 标题
		 * @param {string} content 内容
		 * @param {string} navigation 头部导航栏样式 '' 普通 custom 自定义
		 * @param {PageURIString} url 跳转链接
		 * @param {number} second 弹窗持续秒数
		 * @return viod
		 */
		success(title, content, navigation, url, second) {
			store.commit('systemStore/showHeadToast', {
				type: 'success',
				title: title ? title : '',
				content: content ? content : '',
				navigation: navigation ? navigation : '',
				url: url ? url : '',
				second: second ? second : 2000,
			});
		},


		/**
		 * @description: 头部弹窗失败样式
		 * @param {string} title 标题
		 * @param {string} content 标题
		 * @param {string} navigation 头部导航栏样式 '' 普通 custom 自定义
		 * @param {PageURIString} url 跳转链接
		 * @param {number} second 弹窗持续秒数
		 * @return viod
		 */
		error(title, content, navigation, url, second) {
			store.commit('systemStore/showHeadToast', {
				type: 'error',
				title: title ? title : '',
				content: content ? content : '',
				navigation: navigation ? navigation : '',
				url: url ? url : '',
				second: second ? second : 3000,
			});
		},


		/**
		 * @description: 头部弹窗警告样式
		 * @param {string} title 标题
		 * @param {string} content 内容
		 * @param {string} navigation 头部导航栏样式 '' 普通 custom 自定义
		 * @param {PageURIString} url 跳转链接
		 * @param {number} second 弹窗持续秒数
		 * @return viod
		 */
		warning(title, content, navigation, url, second) {
			store.commit('systemStore/showHeadToast', {
				type: 'warning',
				title: title ? title : '',
				content: content ? content : '',
				navigation: navigation ? navigation : '',
				url: url ? url : '',
				second: second ? second : 2000,
			});
		},

		/**
		 * @description: 头部弹窗通知样式
		 * @param {string} title 标题
		 * @param {string} content 内容
		 * @param {string} navigation 头部导航栏样式 '' 普通 custom 自定义
		 * @param {PageURIString} url 跳转链接
		 * @param {number} second 弹窗持续秒数
		 * @return viod
		 */
		notice(title, content, navigation, url, second) {
			store.commit('systemStore/showHeadToast', {
				type: 'notice',
				title: title ? title : '',
				content: content ? content : '',
				navigation: navigation ? navigation : '',
				url: url ? url : '',
				second: second ? second : 3000,
			});
		}
	},
	//自定义Toast
	Toast: {
		/**
		 * @description: Toast成功函数调用
		 * @param {string} title 标题
		 * @param {number} second 持续时间
		 * @return viod
		 */
		success(title, second) {
			store.commit('systemStore/showToast', {
				title: title ? title : '',
				icon: 'success',
				second: second ? second : 2000,
			});
		},

		/**
		 * @description: Toast失败调用
		 * @param {string} title 标题
		 * @param {number} second 持续时间
		 * @return viod
		 */
		error(title, second) {
			store.commit('systemStore/showToast', {
				title: title ? title : '',
				icon: 'error',
				second: second ? second : 2000,
			});
		}
	},

	//加载效果
	loading: {
		/**
		 * @description: 小加载
		 * @return viod
		 */
		mini() {
			store.commit('systemStore/openLoading', 'mini');
		},

		/**
		 * @description: 全屏加载
		 * @return viod
		 */
		max() {
			store.commit('systemStore/openLoading', 'max');
		},

		/**
		 * @description: 关闭加载
		 * @return viod
		 */
		close() {
			store.commit('systemStore/closeLoading');
		}
	},

	/**
	 * @description: //判断数组内容是否大于0
	 * @param {all} value 传入的参数
	 * @return viod
	 */
	isArrayZero(value) {
		if (Array.isArray(value)) {
			return value.length > 0;
		}
		return false;
	},


	/**
	 * @description: 检测数组的长度是否等于0或者1 用于与<u-loadmore :status="status" /> 组件使用
	 * @param {Number} value 传入的参数
	 * @return viod
	 */
	isPage(value) {
		const numValue = Number(value);
		if (!isNaN(numValue)) {
			if (numValue === 0 || numValue === 1) {
				return "nomore";
			} else {
				return "loading";
			}
		}
		return "nomore";
	},

	/**
	 * @description: 判断传入值是否是对象
	 * @param {all} value 传入值
	 * @return viod
	 */
	isObject(value) {
		return value !== null && typeof value === 'object' && !Array.isArray(value);
	},

	/**
	 * @description: 复制文本
	 * @param {String} value 要复制的文字
	 * @return viod
	 */
	copyText(value) {
		if (value != '' && value != null && value != undefined) {
			uni.setClipboardData({
				data: value,
				success: function() {
					uni.showToast({
						title: '复制成功',
						icon: 'none'
					})
				},
				fail(err) {
					console.log('这是失败原因', err)
				}
			})
		}
	},

	/**
	 * @description: 点击放大查看图片
	 * @param {Array} arr 图片数组
	 * @param {Number} index 当前第几张
	 * @return viod
	 */
	seeImg(arr, index) {
		if (this.isArrayZero(arr)) {
			uni.previewImage({
				current: index,
				urls: arr
			});
		}
	},

	/**
	 * @description: 普通跳转
	 * @param {PageURIString} url 携带参数的url
	 * @return viod
	 */
	toPage(url) {
		uni.navigateTo({
			url
		})
	},

	/**
	 * @description: 返回
	 * @return viod
	 */
	toBack() {
		uni.navigateBack()
	}

}

export default sys;