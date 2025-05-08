//获取昆明市的天气
import {
	uni_get,
	uni_post
} from '@/common/request/method.js';


export const getKunMingWeather = (data) => {
	return uni_get({
		url: '/simpleWeather/query',
		data,
		loading: 'byo'
	})
}