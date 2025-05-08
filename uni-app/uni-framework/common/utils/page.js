/**
 * @Description: 页面中用到的的方法合集
 * @Author: @晏长刚
 * @Date: 2024-09-09 18:28:42
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-09-09 18:28:42
 * @FilePath: /demo/common/utils/page.js
 */


/**
 * @description: 判断一个值是否是数组，如果是数组则判断他的长度是否为大于0
 * @param {*} value 判断的参数
 * @return Boolean
 */
export function isArrayZero(value) {
	if (Array.isArray(value)) {
		return value.length > 0;
	}
	return false;
}


/**
 * @description:  检测数组的长度是否等于0或者1 用于与<u-loadmore :status="status" /> 组件使用
 * @param {*} value 检测值
 * @return string
 */
export function isPage(value) {
	const numValue = Number(value);
	if (!isNaN(numValue)) {
		if (numValue === 0 || numValue === 1) {
			return "nomore";
		} else {
			return "loading";
		}
	}
	return "nomore";
}