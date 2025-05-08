<!--
 * @Description: 提示加载Toast
 * @Author: @晏长刚
 * @Date: 2024-09-06 11:18:57
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-09-11 16:42:52
 * @FilePath: /demo/components/Toast/index.vue
-->

<template>
	<view class="custom-toast">
		<u-transition :show="toastShow" mode="zoom-in" @afterLeave="afterLeave">
			<view class="toast-shell">
				<view class="toast-content" :style="{'margin-bottom':top+'px'}">
					<view class="iconfont toast-icon" :class="toastData.icon == 'success'?'icon-chenggong':'icon-jinggao'"></view>
					<view class="toast-txt">{{toastData.title}}</view>
				</view>
			</view>
		</u-transition>
	</view>
</template>

<script>
	export default {
		props: {},
		data() {
			return {
				toastShow: false, //是否展示
				timer: null, //定时器
				top: 0, //
			}
		},
		components: {},
		computed: {
			toastData() {
				return this.$store.state.systemStore.toastData
			},
		},
		watch: {
			toastData: {
				deep: true,
				handler(newVal) {
					this.toastShow = true;
					this.closeToast();
				}
			}
		},
		mounted() {
			this.initConfig();
		},
		methods: {
			/**
			 * @description: 初始化手机屏幕信息
			 * @return viod
			 */
			initConfig() {
				let that = this;
				uni.getSystemInfo({
					success: function(res) {
						if (res.screenHeight == res.windowHeight) {
							that.top = 0;
						} else {
							that.top = (res.screenHeight - res.windowHeight);
						}
					},
				})
			},
			/**
			 * @description: 关闭消息通知
			 * @return viod
			 */
			closeToast() {
				let that = this;
				that.timer = setTimeout(() => {
					that.toastShow = false;
				}, that.toastData.second);
			},

			/**
			 * @description: 动画结束时触发
			 * @return viod
			 */
			afterLeave() {
				this.$store.commit('systemStore/untieToast');
			},
		},
		onUnload() {
			if (this.timer) {
				clearTimeout(this.timer);
			}
		},
	}
</script>

<style lang="scss" scoped>
	.custom-toast {
		width: 100%;
		height: auto;

		.toast-shell {
			width: 100%;
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 201;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}

		.toast-content {
			padding: 30rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			max-width: 400rpx;
			min-width: 300rpx;
			background-color: rgba(0, 0, 0, 0.8);
			border-radius: 30rpx;
		}

		.toast-icon {
			font-size: 70rpx;
			color: #ffffff;
		}

		.toast-txt {
			width: 100%;
			height: auto;
			font-size: 28rpx;
			color: #ffffff;
			margin-top: 30rpx;
			display: flex;
			justify-content: center;
		}
	}
</style>