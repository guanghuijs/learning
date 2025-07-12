<!--
 * @Description: dom 查询操作
 * @Author: @吴光辉
 * @Date: 2025-07-12 11:30:20
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-07-12 14:30:50
 * @FilePath: /uni-framework/pages/dom-opt.vue
-->

<template>
	<view class="page">
		<view id="content" class="content">
			<view class="item" v-for="i in 5" :key="i">{{ i }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		components: {},
		computed: {},
		watch: {},
		onLoad() {},
		mounted() {
			this.getDom();
		},
		onShow() {},
		methods: {
			getDom() {
				const query = uni.createSelectorQuery().in(this);
				const content = query.select('#content');
				console.log('id查询', content);
				const items = query.selectAll('.item');
				console.log('class查询', items);

				// 获取位置
				content
					.boundingClientRect((rect) => {
						console.log(rect, '============');
					})
					.exec();
				// .exec() 表示执行,漏写则不执行

				// scrollOffset
				content
					.scrollOffset((rect) => {
						console.log('scrollOffset', rect);
					})
					.exec();

				items
					.boundingClientRect((rects) => {
						console.log(rects);
					})
					.exec();
				// .exec() 表示执行,漏写则不执行
			},
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {},
	};
</script>

<style lang="scss" scoped></style>
