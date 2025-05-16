<!--
 * @Description: 普通移动端分页代码模板
 * @Author: @吴光辉
 * @Date: 2025-05-16 18:46:35
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-16 18:46:35
 * @FilePath: /uni-framework/pages/scroll_view_2.vue
-->

<template>
	<view class="page flex-star">
		<view class="top">列表查询条件</view>
		<view class="list">
			<scroll-view class="scroll-view" refresher-enabled scroll-y :refresher-triggered="triggered"
				@scrolltolower="scrolltolower" @refresherrefresh="refresherrefresh">
				<view class="item" v-for="i in list" :key="i">{{i}}</view>
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
				list: [],
				queryParams: {}
			}
		},
		components: {},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			/**
			 * 列表加载
			 * @param {Object} status 加载嘞 reload(重新加载,清空列表)
			 */
			loadList(status = 'reload') {
				api(this.queryParams)
			},
			scrolltolower() {
				console.log('触底');
			},
			refresherrefresh() {
				console.log('下拉刷新');
			}
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {}
	}
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
			padding: 0 20px env(safe-area-inset-bottom);

			.scroll-view {
				height: 100%;
				box-sizing: border-box;

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
