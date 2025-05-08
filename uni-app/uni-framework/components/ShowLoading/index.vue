<!--
 * @Description: 加载效果组件
 * @Author: @晏长刚
 * @Date: 2024-09-06 11:18:19
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-09-06 11:18:21
 * @FilePath: /demo/components/ShowLoading/index.vue
-->

<template>
	<view class="screenLoad">
		<u-transition :show="loading" mode="fade" :duration="77">
			<view class="loading" :style="{background:Toast? '':'#ffffff'}">
				<!-- 小的加载 -->
				<view class="loader-mini" v-if="Toast">
					<view class="rocket-mini">
						<view class="iconfont icon-rocket-full xhj-mini"></view>
						<view class="iconfont icon-yun1 cloud-mini" style="--i:0;"></view>
						<view class="iconfont icon-yun1 cloud-mini" style="--i:1;"></view>
						<view class="iconfont icon-yun1 cloud-mini" style="--i:2;"></view>
						<view class="iconfont icon-yun1 cloud-mini" style="--i:3;"></view>
						<view class="mini-loading">加载中...</view>
					</view>
				</view>
				<!-- 全屏加载 -->
				<view class="loader" v-else>
					<view class="rocket">
						<view class="iconfont icon-rocket-full xhj"></view>
						<view class="iconfont icon-yun1 cloud" style="--i:0;"></view>
						<view class="iconfont icon-yun1 cloud" style="--i:1;"></view>
						<view class="iconfont icon-yun1 cloud" style="--i:2;"></view>
						<view class="iconfont icon-yun1 cloud" style="--i:3;"></view>
					</view>
					<view class="spen">
						<view class="spen-i">

						</view>
					</view>
					<view class="loading-max">加载中...</view>
				</view>
			</view>
		</u-transition>
	</view>
</template>

<script>
	export default {
		props: {},
		data() {
			return {}
		},
		computed: {
			loading() {
				return this.$store.state.systemStore.loading;
			},
			Toast() {
				return this.$store.state.systemStore.opacity;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.screenLoad {
		.loading {
			width: 100vw;
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 199;
		}

		.loader {
			position: relative;
			display: flex;
		}

		.spen {
			position: relative;
			width: 250rpx;
			height: 250rpx;
			background-color: #eaeef0;
			border: 6rpx solid #eaeef0;
			border-radius: 50%;
			box-shadow: -8rpx -8rpx 15rpx rgba(255, 255, 255, 1), 8rpx 8rpx 25rpx rgba(0, 0, 0, 0.15);
			overflow: hidden;
		}

		.spen::before {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: 50%;
			box-shadow: inset 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.5), inset -5rpx -5rpx 15rpx rgba(255, 255, 255, 1);
		}

		.spen::after {
			content: '';
			position: absolute;
			inset: 40rpx;
			background: #eaeef0;
			border: 3rpx solid #eaeef0;
			border-radius: 50%;
			box-shadow: -8rpx -8rpx 25rpx rgba(255, 255, 255, 1), 8rpx 8rpx 25rpx rgba(0, 0, 0, 0.25),
				inset 3rpx 3rpx 10rpx rgba(0, 0, 0, 0.15),
				inset -1rpx -1rpx 15rpx rgba(255, 255, 255, 1);
		}

		.spen-i {
			position: absolute;
			inset: 0;
			border-radius: 50%;
			filter: blur(5rpx);
			background: linear-gradient(#42abff, #ff4f8b, #ffeb3b);
			animation: animate 1s linear infinite;
		}

		@keyframes animate {
			0% {
				transform: rotate(0deg);
			}

			100% {
				transform: rotate(360deg);
			}
		}

		.rocket {
			position: absolute;
			inset: 50rpx;
			z-index: 10;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			border-radius: 50%;
		}

		.xhj {
			position: absolute;
			color: #1B65FA;
			font-size: 70rpx;
			-webkit-text-stroke: 2rpx #000;
			animation: animateRocket 0.2s linear infinite;
		}

		@keyframes animateRocket {

			0%,
			100% {
				transform: translate(0rpx, 0rpx) rotate(-45deg);
			}

			50% {
				transform: translate(0rpx, 3rpx) rotate(-45deg);
			}
		}

		.cloud {
			position: absolute;
			top: calc(35rpx * var(--i));
			left: calc(45rpx * var(--i));
			font-size: 40rpx;
			color: #ffffff;
			-webkit-text-stroke: 2rpx #000;
			animation: animateCloud 1s linear infinite;
			animation-delay: calc(-0.5s * var(--i));
		}

		@keyframes animateCloud {
			0% {
				transform: translateY(calc(-35 * 5rpx));
			}

			100% {
				transform: translateY(calc(35 * 5rpx));
			}
		}

		.loader-mini {
			width: 300rpx;
			height: 300rpx;
			border-radius: 15rpx;
			overflow: hidden;
			position: relative;
			display: flex;
			background-color: #ffffff;
		}

		.xhj-mini {
			position: absolute;
			color: #1B65FA;
			font-size: 60rpx;
			-webkit-text-stroke: 2rpx #000;
			animation: animateRocket 0.2s linear infinite;
		}

		.rocket-mini {
			position: absolute;
			inset: 20rpx;
			z-index: 10;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
		}

		.cloud-mini {
			position: absolute;
			top: calc(35rpx * var(--i));
			left: calc(65rpx * var(--i));
			font-size: 40rpx;
			color: #ffffff;
			-webkit-text-stroke: 2rpx #000;
			animation: animateCloud 1s linear infinite;
			animation-delay: calc(-0.5s * var(--i));
		}

		.mini-loading {
			width: 100%;
			text-align: center;
			font-size: 26rpx;
			color: #999999;
			position: absolute;
			bottom: 0;
			left: 0;
		}

		.loading-max {
			position: absolute;
			bottom: 0;
			width: 100%;
			text-align: center;
			font-size: 30rpx;
			color: #999999;
			bottom: -50rpx;
			left: 0;
		}
	}
</style>