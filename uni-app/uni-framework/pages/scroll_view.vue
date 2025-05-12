<template>
	<view class="page flex-star">
		<view class="top">列表查询条件</view>
		<view class="list">
			<scroll-view class="scroll-view" refresher-enabled scroll-y :refresher-triggered="triggered"
				@scrolltolower="scrolltolower" @scrolltoupper="scrolltoupper" @refresherpulling="refresherpulling"
				@refresherrefresh="refresherrefresh" @refresherrestore="refresherrestore" @refresherabort="refresherabort">
				<view class="item" v-for="i in 80" :key="i">{{i}}</view>
			</scroll-view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				triggered: false
			}
		},
		components: {},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			scrolltoupper() {
				console.log('触顶');
			},
			scrolltolower() {
				console.log('触底');
			},
			refresherpulling() {
				// console.log('下拉中触发');
			},
			refresherrefresh() {
				console.log('下拉放手触发');
				this.triggered = true;
				// 模拟请求
				setTimeout(() => {
					this.triggered = false;
				}, 2000)
			},
			refresherrestore() {
				// this.triggered 重新 = false 时触发
				console.log('下拉被复位');
			},
			refresherabort() {
				console.log('拉刷新被中止');
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
			padding: 0 20px;
			overflow-y: scroll;

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