/**
 * @Description: 封装各种请求的方法
 * @Author: @晏长刚
 * @Date: 2024-09-09 18:28:15
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-09-11 10:07:42
 * @FilePath: /demo/common/request/method.js
 */

import {
	request
} from './index.js'
import qs from 'qs'


/**
 * @description: get请求
 * @param {Object} param 提示信息
 * @param {String} param.url 请求链接
 * @param {Object} param.data 提交的数据
 * @param {String} param.loading 加载效果
 * @return Function
 */
export function uni_get({
	url = '',
	data = {},
	loading = false,
} = {}) {
	return request({
		url: url,
		data: data,
		method: 'GET',
		loading: loading,
	})
}

/**
 * @description: post请求
 * @param {Object} param 提示信息
 * @param {String} param.url 请求链接
 * @param {Object} param.data 提交的数据
 * @param {String} param.loading 加载效果
 * @return Function
 */
export function uni_post(param) {
	let data = {};
	if ('data' in param) {
		data = qs.stringify(param.data);
	}
	return request({
		url: param.url,
		data: data,
		method: 'POST',
		loading: param.loading || false,
	})
}