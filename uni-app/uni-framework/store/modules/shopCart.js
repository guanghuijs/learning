/**
 * @Description: store 学习
 * @Author: @吴光辉
 * @Date: 2025-05-29 15:26:21
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-29 17:21:50
 * @FilePath: /uni-framework/store/modules/shopCart.js
 */
const store = {
	// 开启空间命名
	namespaced: true,
	// 状态:应用的全局数据或状态
	state: {
		list: Array.from(
			{
				length: 20,
			},
			(_, i) => ({
				goodsName: `商品	${i}`,
				num: i + 1,
				price: (Math.random() * (15 - 10) + 10).toFixed(2),
				checked: !!Math.round(Math.random()),
			})
		),
	},
	// 获取器:用于从状态中派生计算值
	getters: {
		goods: (state) => (index) => {
			return state.list[index];
		},
		allPrice(state) {
			return state.list.reduce((acc, cur) => {
				return acc + (cur.checked ? cur.num * cur.price : 0);
			}, 0);
		},
		checkNum(state) {
			return state.list.reduce((acc, cur) => {
				return acc + (cur.checked ? cur.num : 0);
			}, 0);
		},
		allNum(state) {
			return state.list.reduce((acc, cur) => {
				return acc + cur.num;
			}, 0);
		},
	},
	// 变更:用于修改状态的同步操作
	mutations: {
		setList(state, str) {
			console.log(str);
		},
	},
	// 动作:用于处理异步操作，并触发 mutations
	actions: {
		add() {},
		del({ commit }) {
			commit('setList', 'actions/commit');
		},
		numChange({ state }, [index, type]) {
			if (type === '+') {
				state.list[index].num += 1;
			} else {
				state.list[index].num -= 1;
			}
		},
	},
};

export default store;
