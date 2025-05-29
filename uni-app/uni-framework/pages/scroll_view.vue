<!--
 * @Description: 
 * @Author: @吴光辉
 * @Date: 2025-05-28 17:05:50
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-28 17:05:53
 * @FilePath: /uni-framework/pages/scroll_view.vue
-->
<template>
	<view class="page flex-star">
		<view class="top">列表查询条件</view>
		<view class="list">
			<scroll-view
				class="scroll-view"
				refresher-enabled
				scroll-y
				:refresher-triggered="triggered"
				@scrolltolower="scrolltolower"
				@scrolltoupper="scrolltoupper"
				@refresherpulling="refresherpulling"
				@refresherrefresh="refresherrefresh"
				@refresherrestore="refresherrestore"
				@refresherabort="refresherabort"
			>
				<view class="item" v-for="i in list" :key="i">{{ i }}</view>
				<view class="loadMore" v-show="loadMoreFlag">加载中...</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				triggered: false,
				loadMoreFlag: false,
				list: Array.from(
					{
						length: 20,
					},
					(_, i) => ++i
				),
			};
		},
		components: {},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			loadList() {
				// 模拟请求
				this.loadMoreFlag = true;
				setTimeout(() => {
					const temp = Array.from(
						{
							length: 20,
						},
						(_, i) => this.list.length + i
					);
					this.list = [...this.list, ...temp];
					this.loadMoreFlag = false;
				}, 2000);
			},
			scrolltoupper() {
				console.log('触顶');
			},
			scrolltolower() {
				console.log('触底');
				setTimeout(() => {}, 2000);
			},
			refresherpulling() {
				// console.log('下拉中触发');
			},
			refresherrefresh() {
				console.log('下拉放手触发');
				this.triggered = true;
				// 模拟请求
				setTimeout(() => {
					this.list = Array;
					console.log('数据请求成功');
					this.triggered = false;
				}, 2000);
			},
			refresherrestore() {
				// this.triggered 重新 = false 时触发
				console.log('下拉被复位');
			},
			refresherabort() {
				console.log('拉刷新被中止');
			},
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {},
	};
</script>

<style lang="scss" scoped>
	.page {
		flex-direction: column;
		height: 100vh;

		.top {
			width: 100vw;
			height: 50px;
			background: white;
			z-index: 5;
		}

		.list {
			flex: 1;
			width: 100%;
			overflow-y: scroll;
			padding: 0 20px env(safe-area-inset-bottom);

			.scroll-view {
				height: 100%;

				.item {
					background: white;
					height: 300upx;
					display: inline-block;
					width: calc(50% - 10px);
					margin-top: 20px;
				}

				& .item:nth-of-type(even) {
					margin-left: 20px;
				}
			}

			.loadMore {
				text-align: center;
				padding: 20upx;
				color: #999;
			}
		}

		.btn {
			width: 100upx;
			line-height: 100upx;
			background: blueviolet;
			border-radius: 50%;
			text-align: center;
		}
	}
</style>
