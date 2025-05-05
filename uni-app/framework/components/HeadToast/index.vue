<!--
 * @Description: 头部提示组件
 * @Author: @晏长刚
 * @Date: 2024-09-06 11:17:46
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-12-14 11:55:32
 * @FilePath: /demo/components/HeadToast/index.vue
-->

<template>
	<view class="shell" :style="{top:headerTop +'px'}">
		<u-transition :show="notSwitch" mode="slide-down" @afterLeave="afterLeave">
			<view class="notice" :style="{background:bgColour}" @click.stop="move(noticeData.path)">
				<view class="left">
					<view class="iconfont icon-label" :class="icon" :style="{color:iconColor}"></view>
					<image :src="noticeData.imgUrl" mode="aspectFill" style="width: 100%;height: 100%;" v-if="noticeData.imgUrl">
					</image>
				</view>
				<view class="middle">
					<view class="tit">{{noticeData.title}}</view>
					<view class="cont">{{noticeData.content}}</view>
				</view>
				<view class="right">
					<view>{{before}}</view>
					<view class="iconfont icon-qianwang-xiayibu" style="font-size: 35rpx;" v-if="noticeData.path">
					</view>
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
				headerTop: 0, //弹出的高度
				notSwitch: false, //是否显示
				bgColour: '', //背景颜色
				icon: '', //显示图标
				iconColor: '', //图标颜色
				before: '', //时间
				timer: null, //定时器
			}
		},
		components: {},
		computed: {
			noticeData() {
				return this.$store.state.systemStore.Notice
			},
		},
		watch: {
			noticeData: {
				deep: true,
				handler(newVal) {
					console.log('监听到数据', newVal)
					this.notSwitch = true;
					if (newVal.type == 'error') {
						this.bgColour = '#fde2e2'
						this.icon = 'icon-shibai'
						this.iconColor = '#F56C6C'
					} else if (newVal.type == 'success') {
						this.bgColour = '#e1f3d8'
						this.icon = 'icon-chenggong'
						this.iconColor = '#95d475'
					} else if (newVal.type == 'warning') {
						this.bgColour = '#faecd8'
						this.icon = 'icon-jinggao'
						this.iconColor = '#E6A23C'
					} else {
						this.bgColour = '#d9ecff'
						this.icon = 'icon-tixing'
						this.iconColor = '#79bbff'
					}
					if (newVal.navigation == 'custom') {
						let height = this.$store.state.systemStore.sysHead;
						this.headerTop = Number(height) + 40;
					} else {
						this.headerTop = 10
					}
					this.getTime();
					this.closeToast();
				}
			}
		},
		mounted() {},
		methods: {
			/**
			 * @description: 获取当前时间
			 * @return viod
			 */
			getTime() {
				const date = new Date();
				let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
				let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
				this.before = `${hour}:${minute}`;
			},

			/**
			 * @description: 关闭消息通知
			 * @return viod
			 */
			closeToast() {
				let that = this;
				that.timer = setTimeout(() => {
					that.notSwitch = false;
				}, that.noticeData.second);
			},

			/**
			 * @description: 动画结束时触发
			 * @return viod
			 */
			afterLeave() {
				this.$store.commit('systemStore/deblocking');
			},

			/**
			 * @description: 跳转页面
			 * @param {URIString} path 页面路径
			 * @return viod
			 */
			move(path) {
				if (path != '') {
					if (path == "/pages/index/index" || path == "/pages/classify/index" || path ==
						"/pages/shoppingCart/index" || path == "/pages/personal/index") {
						uni.switchTab({
							url: path
						})
					} else {
						uni.navigateTo({
							url: path
						})
					}
				}
			}
		},
		onUnload() {
			if (this.timer) {
				clearTimeout(this.timer);
				this.timer = null;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.shell {
		position: fixed;
		width: 100%;
		z-index: 10080;
		display: flex;
		justify-content: center;
		height: auto;
		left: 0;

		.notice {
			height: auto;
			border-radius: 20rpx;
			padding: 15rpx 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.left {
			width: 70rpx;
			height: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.middle {
			width: 470rpx;
			height: auto;
			margin: 0 15rpx;
		}

		.right {
			width: 100rpx;
			height: 70rpx;
			text-align: right;
			font-size: 24rpx;
		}

		.tit {
			width: 460rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: #000;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}

		.cont {
			font-size: 24rpx;
			color: #6f6f6f;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
		}

		.icon-label {
			font-size: 40rpx;
		}
	}
</style>