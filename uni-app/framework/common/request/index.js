/**
 * @Description: 项目接口请求封装,可更具项目需求做调整
 * @Author: @晏长刚
 * @Date: 2024-09-09 18:26:39
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-09-09 18:39:17
 * @FilePath: /demo/common/request/index.js
 */

import config from "../config.js";
import store from "../../store/index.js"


let AppHost = config.ENV == 'PROD' ? config.API_HOST : config.TEST_API_HOST; //域名

switch (config.ENV) {
	case 'PROD':
		AppHost = config.API_HOST;
		break;
	case 'DEV':
		AppHost = config.TEST_API_HOST;
		break;
	case 'LOCAL':
		AppHost = config.LOCAL_API_HOST;
		break;
}

// #ifdef H5
// 解决测试环境h5跨域问题，如果需要在本地预览线上环境数据，请修改源码视图中的代理域名
if (process.env.NODE_ENV === 'development') {
	AppHost = '/api';
}
// #endif

//请求体
let that = this;
export function request(parameter) {
	return new Promise(function(resolve, reject) {
		if (parameter.loading == 'byo') {
			uni.showLoading({
				title: '加载中....',
			});
		}
		if (parameter.loading == 'mini' || parameter.loading == 'max') {
			store.commit('systemStore/openLoading', parameter.loading);
		}
		uni.request({
			url: AppHost + parameter.url,
			data: parameter.data,
			method: parameter.method,
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'Authorization': uni.getStorageSync("token") || '', //token
			},
			success: function(res) {
				if (res.data.code == 200) {
					resolve(res);
				} else if (res.data.code == 401) {
					// 节流函数，如果2s内多次被触发了时只有第一次有效果
					uni.$u.throttle(function() {
						uni.navigateTo({
							url: '/pages/logOn/index'
						})
					}, 2000);
				} else {
					resolve(res);
					uni.showModal({
						title: '系统提示',
						content: res.data.message,
						showCancel: false,
					});
				}
			},
			fail: function(err) {
				uni.showToast({
					title: "服务器连接异常，请检查网络再试",
					duration: 2000,
					icon: "none",
				});
				reject("服务器连接异常，请检查网络再试");
			},
			complete: function() {
				if (parameter.loading == 'byo') {
					uni.hideLoading();
				}
				if (parameter.loading == 'mini' || parameter.loading == 'max') {
					store.commit('systemStore/closeLoading');
				}
				// if (parameter.loading == 'max') {
				// 	uni.$u.sleep(200).then(() => {
				// 		store.commit('closeLoading');
				// 	})
				// }
			},
		});
	});
}