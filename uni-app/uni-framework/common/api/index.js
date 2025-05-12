/**
 * @Description: 公共api存放处,该文件只能存放公共的api
 * @Author: @晏长刚
 * @Date: 2024-09-09 18:25:30
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-12 11:17:30
 * @FilePath: /uni-framework/common/api/index.js/index.js
 */

import {
	uni_get,
	uni_post
} from '@/common/request/method.js'


export function weather(data) {
	return uni_get({
		url: `${host_v1}/api/member/login`,
		data,
		loading: 'byo',
	})
}

export const getKunMingWeather = (data) => {
	return uni_get({
		url: '/simpleWeather/query',
		data,
		loading: 'byo'
	})
}