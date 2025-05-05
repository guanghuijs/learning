<!--
 * @Description: 视频上传组件
 * @Author: @晏长刚
 * @Date: 2024-10-28 17:02:42
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-12-14 11:53:01
 * @FilePath: /demo/components/VideoUpload/index.vue
-->

<template>
	<view class="video-upload" :style="{'grid-template-columns': `repeat(${row}, 1fr)`}">
		<view class="video-widget" @click="uploadVideo" v-if="isUp" :style="{borderRadius:radius}">
			<image src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/84462024102817938.png" mode="widthFix"
				style="width: 60rpx;height: 60rpx;"></image>
		</view>
		<view class="video-group" v-for="(video,index) in List" :key="index" :style="{borderRadius:radius}">
			<view class="video-icon" @click="delVideo(index)"></view>
			<view style="width: 100%;height: 100%;">
				<video :src="video" style="width: 100%;height: 100%;" object-fit="contain"
					:style="{borderRadius:radius}"></video>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uni_get,
		uni_post
	} from '@/common/request/method.js';
	export default {
		props: {
			// 初始化图片，可以是数组也可以是字符串
			initUrl: {
				type: [Array, String],
				default: []
			},
			// 能上传图片的最大长度
			maxLength: {
				type: [Number, String],
				default: 3,
			},
			row: {
				type: [Number, String],
				default: 3,
			},
			size: {
				type: [Number, String],
				default: 10,
			},
			radius: {
				type: String,
				default: '20rpx',
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				List: [], //图片集合
				isUp: true, //是否可以上传
			}
		},
		components: {},
		computed: {},
		watch: {
			initUrl: {
				handler(val, oldVal) {
					if (val) {
						if (typeof val == 'string') {
							this.List = val.split(',');
						} else {
							this.List = val;
						}
					} else {
						this.List = [];
					}
					if (this.List.length < Number(this.maxLength)) {
						this.isUp = true;
					} else {
						this.isUp = false;
					}
				},
				immediate: true,
			},
			List(val) {
				let urlData = {
					arrUrl: val,
					strUrl: val.join(',')
				}
				this.$emit('videoData', urlData);
			}
		},
		mounted() {},
		methods: {
			/**
			 * @description: 点击上传
			 * @return void
			 */
			uploadVideo() {
				if (this.disabled) {
					return;
				}
				let that = this;
				let count = 0;
				count = Number(that.maxLength) - Number(that.List.length);
				if (count <= 0) {
					uni.showToast({
						title: '最多上传' + that.maxLength + '个视频',
						icon: 'none',
					})
					return;
				}
				uni.chooseVideo({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (res) => {
						let size = res.size;
						let limit = this.size * 1024 * 1024;
						if (Number(size) > limit) {
							uni.showToast({
								title: '视频不能超' + this.size + 'M',
								icon: 'error',
							})
						} else {
							that.ossInfor(res.tempFilePath);
						}
					}
				})
			},

			/**
			 * @description: 上传函数
			 * @param {Object} video 要上传的视频
			 * @return viod
			 */

			async ossInfor(video) {
				let that = this;
				uni.showLoading({
					title: '上传中...'
				})
				let fileName = that.getImgName('lipei-pic', video);
				let ossData = await uni_post({
					url: '/api/sys/oss/conf',
					data: {
						fileName: fileName
					}
				})
				if (ossData.data.code == 200) {
					let sign = ossData.data.data;
					uni.uploadFile({
						url: sign.host,
						filePath: video,
						fileType: 'image',
						name: 'file',
						formData: {
							name: video,
							'key': sign.key,
							'policy': sign.policy,
							'OSSAccessKeyId': sign.accessKeyId,
							'AccessKeyId': sign.accessKeyId,
							'success_action_status': '200',
							'signature': sign.signature
						},
						success: (res) => {
							if (res.statusCode == 200) {
								that.List.push(sign.cdn);
								uni.hideLoading();
							} else {
								uni.showToast({
									title: '上传失败',
									icon: 'none',
									duration: 2000
								});
							}
						},
						fail: (err) => {
							console.log('上传错误', err);
						},
					});
				}
			},

			/**
			 * @description: 生成文件唯一文件名
			 * @param {String} name oss 路径
			 * @param {String} filename 文件名字
			 * @return String
			 */
			getImgName(name, filename) {
				let nowTime = function getNowFormatDate() {
					var date = new Date();
					var seperator1 = "-";
					var year = date.getFullYear();
					var month = date.getMonth() + 1;
					var strDate = date.getDate();
					if (month >= 1 && month <= 9) {
						month = "0" + month;
					}
					if (strDate >= 0 && strDate <= 9) {
						strDate = "0" + strDate;
					}
					var currentdate = year + seperator1 + month + seperator1 + strDate;
					return currentdate;
				}()
				return name + 'faxingVideo/' + nowTime + '/' + new Date().getTime() + Math.random().toString(36).substring(3,
					20) + this._getSuffix(filename)
			},

			/**
			 * @description:  提取文件名后缀
			 * @param {*} filename 文件名
			 * @return String
			 */
			_getSuffix(filename) {
				let pos = filename.lastIndexOf('.')
				let suffix = ''
				if (pos != -1) {
					suffix = filename.substring(pos)
				}
				return suffix;
			},

			/**
			 * @description: 删除已上传的图片
			 * @param {Number} i 图片索引
			 * @return viod
			 */
			delVideo(i) {
				if (this.disabled) {
					return;
				}
				this.List.splice(i, 1);
			},
		},
	}
</script>

<style lang="scss" scoped>
	.video-upload {
		width: 100%;
		display: grid;
		grid-template-rows: auto;
		grid-gap: 20rpx;

		.video-widget {
			width: 100%;
			aspect-ratio: 1 / 1;
			border: 3rpx dashed #999999;
			background-color: #F5F8F7;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;

		}

		.video-group {
			width: 100%;
			aspect-ratio: 1 / 1;
			position: relative;
		}

		.video-icon {
			position: absolute;
			top: -10rpx;
			z-index: 9;
			right: -10rpx;
			width: 40rpx;
			height: 40rpx;
			background-image: url('https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/48232024102816411.png');
			background-size: cover;
		}
	}
</style>