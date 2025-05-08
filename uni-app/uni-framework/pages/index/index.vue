<!--
 * @Description: app首页
 * @Author: @晏长刚
 * @Date: 2024-09-09 19:19:57
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-08 11:29:37
 * @FilePath: /uni-framework/pages/index/index.vue
-->

<template>
	<view class="index-page">
		<ShowLoading></ShowLoading>
		<HeadToast></HeadToast>
		<Toast></Toast>
		<view class="strip">
			<view class="strip-left">iconfont图标</view>
			<view class="strip-right">
				<view class="strip-cont">
					<view class="iconfont icon-zhenqinghuahui icon"></view>
					<view class="iconfont icon-icon_arrow_bottom icon"></view>
					<view class="iconfont icon-jiantoushang icon"></view>
					<view class="iconfont icon-icon_arrow_left icon"></view>
					<view class="iconfont icon-icon_arrow_right icon"></view>
					<view class="iconfont icon-xiangshang icon"></view>
					<view class="iconfont icon-xiangxia icon"></view>
				</view>
			</view>
		</view>
		<view class="strip">
			<view class="strip-left">接口调用</view>
			<view class="strip-right">
				<view style="display: flex;">
					<u-button type="primary" text="直接调用" :loading="direct" @click="getWeather"></u-button>
					<view style="width: 40rpx;"></view>
					<u-button type="primary" text="api调用" :loading="direct_api" @click="getWeatherApi"></u-button>
				</view>
				<view class="weather">
					<view class="weather-txt" v-for="(weather,index) in weatherList" :key="index">
						<text style="color: #2979ff;padding-right: 15rpx;">昆明</text>
						<text style="color: #ff9900;padding-right: 15rpx;">{{weather.temperature}}</text>
						<text style="color: #19be6b;padding-right: 15rpx;">{{weather.weather}}</text>
						<text style="color: #909399;">{{weather.date}}</text>
					</view>
				</view>
			</view>
		</view>


		<view class="strip">
			<view class="strip-left">加载效果</view>
			<view class="strip-right">
				<view style="display: flex;align-items: center;gap: 0 20rpx;">
					<u-button type="primary" text="全屏加载" :loading="direct" @click="loading('max')"></u-button>
					<u-button type="primary" text="小加载" :loading="direct_api" @click="loading('mini')"></u-button>
					<u-button type="primary" text="原生加载" :loading="direct_api" @click="loading('byo')"></u-button>
				</view>
			</view>
		</view>

		<view class="strip">
			<view class="strip-left">提示组件</view>
			<view class="strip-right">
				<view style="display: flex;align-items: center;gap: 0 20rpx;">
					<u-button type="primary" text="成功" @click="alert('success')"></u-button>
					<u-button type="primary" text="失败" @click="alert('error')"></u-button>
					<u-button type="primary" text="警告" @click="alert('warning')"></u-button>
					<u-button type="primary" text="通知" @click="alert('notice')"></u-button>
				</view>
			</view>
		</view>

		<view class="strip">
			<view class="strip-left">提示</view>
			<view class="strip-right">
				<view style="display: flex;align-items: center;gap: 0 20rpx;">
					<u-button type="primary" text="成功" @click="Toast('success')"></u-button>
					<u-button type="primary" text="失败" @click="Toast('error')"></u-button>
				</view>
			</view>
		</view>

		<view class="strip">
			<view class="strip-left">骨架屏</view>
			<view class="strip-right">
				<view style="display: flex;align-items: center;gap: 0 20rpx;">
					<view class="skeleton" style="flex: 1;height: 40rpx;border-radius: 6rpx;"></view>
					<view class="skeleton" style="flex: 1;height: 40rpx;border-radius: 6rpx;"></view>
				</view>
				<view class="skeleton" style="width: 100%;height: 40rpx;border-radius: 6rpx;margin-top: 10rpx;"></view>
			</view>
		</view>

		<view class="strip">
			<view class="strip-left">空状态</view>
			<view class="strip-right">
				<NoData></NoData>
			</view>
		</view>

		<view class="strip">
			<view class="strip-left">图片上传</view>
			<view class="strip-right">
				<ImgUpload :initUrl="imgImg" :row="row"></ImgUpload>
			</view>
		</view>

		<view class="strip">
			<view class="strip-left">每行展示{{row}}张图片</view>
			<u-slider v-model="row" :min="2" :max="6"></u-slider>
		</view>


		<view class="strip">
			<view class="strip-left">视频上传</view>
			<view class="strip-right">
				<VideoUpload></VideoUpload>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		uni_get,
		uni_post
	} from '@/common/request/method.js';
	import Toast from '@/components/Toast/index.vue'
	import {
		getKunMingWeather
	} from './api.js'
	import NoData from '@/components/NoData/index'
	import ImgUpload from '@/components/ImgUpload/index.vue'
	import VideoUpload from '@/components/VideoUpload/index.vue'
	export default {
		data() {
			return {
				direct: false, //链接请求按钮加载效果
				direct_api: false, //api请求按钮加载效果
				weatherList: [], //未来几天的天气
				timer: null, //模拟加载定时器
				lock: true, //加载锁
				imgImg: ['https://img2.baidu.com/it/u=1337068678,3064275007&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750',
					'https://img1.baidu.com/it/u=3001150338,397170470&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1422',
					'https://img2.baidu.com/it/u=1041191017,3841558816&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667',
					'https://img0.baidu.com/it/u=2595232591,1868001707&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067',
					'https://img2.baidu.com/it/u=3588819672,3294945413&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800'
				],
				row: 3,
			}
		},
		components: {
			NoData,
			ImgUpload,
			VideoUpload
		},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			/**
			 * @description: 直接调用请求数据
			 * @return viod
			 */
			getWeather() {
				this.direct = true;
				let data = {
					key: '3112f0f0ed89b7b943e137ca9602bc9b',
					city: '昆明'
				}
				uni_get({
					url: '/simpleWeather/query',
					data,
					loading: 'byo'
				}).then(res => {
					this.direct = false;
					if (res.statusCode == 200) {
						this.weatherList = res.data.result.future;
					}
					console.log(res)
				})
			},

			/**
			 * @description: api方式调用
			 * @return viod
			 */
			getWeatherApi() {
				this.direct_api = true;
				let data = {
					key: '3112f0f0ed89b7b943e137ca9602bc9b',
					city: '昆明'
				}
				getKunMingWeather(data).then(res => {
					this.direct_api = false;
					if (res.statusCode == 200) {
						this.weatherList = res.data.result.future;
					}
				})
			},

			/**
			 * @description: 展示加载类型
			 * @param {String} type 类型
			 * @return viod
			 */
			loading(type) {
				if (this.lock) {
					this.lock = false;
					if (type == 'max') {
						this.$sys.loading.max();
					} else if (type == 'mini') {
						this.$sys.loading.mini();
					} else {
						uni.showLoading({
							title: '加载中....',
						});
					}
					this.timer = setTimeout(() => {
						if (type != 'byo') {
							// this.$store.commit('systemStore/closeLoading');
							this.$sys.loading.close();
						} else {
							uni.hideLoading();
						}
						this.lock = true;
					}, 3000);
				}
			},

			/**
			 * @description: 展示头部弹窗
			 * @param {String} type 类型
			 * @return viod
			 */
			alert(type) {
				if (type == 'success') {
					this.$sys.HeadToast.success('这是成功标题', '这是内容-------');
				} else if (type == 'error') {
					this.$sys.HeadToast.error('这是失败弹窗', '这是失败的内容');
				} else if (type == 'warning') {
					this.$sys.HeadToast.warning('这是警告提示', '这是警告内容');
				} else {
					this.$sys.HeadToast.notice('这是一般通知', '这是一般通知内容');
				}
			},

			/**
			 * @description: 提示
			 * @param {String} type 提示类型
			 * @return viod
			 */
			Toast(type) {
				if (type == 'success') {
					this.$sys.Toast.success('这是成功提示框');
				} else {
					this.$sys.Toast.error('这是失败提示框');
				}
			}

		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {
			if (this.timer) {
				clearTimeout(this.timer);
				this.timer = null;
			}
		},
	}
</script>

<style lang="scss" scoped>
	.index-page {
		padding: 0 20rpx;
		padding-bottom: 40rpx;

		.strip {
			width: 100%;
			margin-bottom: 25rpx;
		}

		.strip-left {
			width: 100%;
			font-size: 34rpx;
			color: #333333;
			font-weight: bold;
			margin-bottom: 20rpx;
		}

		.strip-right {
			width: 100%;
			height: auto;
		}

		.strip-cont {
			width: 100%;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			gap: 20rpx;
		}

		.icon {
			font-size: 50rpx;
			color: $u-content-color;
		}

		.dis {
			display: flex;
		}

		.weather {
			width: 100%;
			height: auto;
		}

		.weather-txt {
			width: 100%;
			font-size: 26rpx;
			margin-top: 20rpx;
		}
	}
</style>

<style>
	page {
		background-color: #F6F6F6;
	}
</style>