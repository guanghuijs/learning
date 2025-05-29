<!--
 * @Description: 普通移动端分页代码模板
 * @Author: @吴光辉
 * @Date: 2025-05-16 18:46:35
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-28 14:21:57
 * @FilePath: /uni-framework/pages/scroll_view_2.vue
-->

<template>
	<view class="page flex-star">
		<view class="top">列表查询条件666</view>
		<view class="list">
			<scroll-view
				class="scroll-view"
				refresher-enabled
				scroll-y
				:refresher-triggered="triggered"
				@scrolltolower="scrolltolower"
				@refresherrefresh="refresherrefresh"
				:scroll-Top="scrollTop"
			>
				<view class="item" v-for="i in list" :key="i">{{ i }}</view>
				<u-loadmore v-if="list.length" :status="loadmoreStatus" />
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				triggered: false, // 下拉刷新状态
				queryParams: {}, // 查询条件
				list: [], // 列表数据
				loadmoreStatus: 'loading', // 加载更多状态
				page: 1,
				pageTotal: 0,
				scrollTop: 0,
				a: '',
			};
		},
		computed: {},
		watch: {},
		onLoad() {
			this.loadList();
		},
		onShow() {},
		methods: {
			/**
			 * 列表加载
			 * @param {Object} status 加载嘞 reload(重新加载,清空列表)
			 */
			loadList(status = 'reload') {
				this.loadmoreStatus = 'loading';
				if (status === 'reload') {
					this.page = 1;
					this.list = [];
				}
				// todo 分页加载完不请求
				setTimeout(() => {
					const temp = Array.from(
						{
							length: 20,
						},
						(_, i) => this.list.length + i
					);
					this.list = status === 'reload' ? temp : this.list.concat(temp);
					this.triggered = false;
				}, 2000);
			},
			scrolltolower() {
				console.log('触底');
				this.loadList('loadmore');
			},
			refresherrefresh() {
				console.log('下拉刷新');
				this.triggered = true;
				this.loadList();
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
			padding: 0 20px env(safe-area-inset-bottom);
			overflow-y: scroll;

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
