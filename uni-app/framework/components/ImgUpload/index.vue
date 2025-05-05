<!--
 * @Description: 图片上传组件
 * @Author: @晏长刚
 * @Date: 2024-10-28 17:02:09
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-12-14 11:48:36
 * @FilePath: /demo/components/ImgUpload/index.vue
-->

<template>
	<view class="img-upload" :style="{'grid-template-columns': `repeat(${row}, 1fr)`}">
		<view class="img-widget" @click="uploadImg" v-if="isUp" :style="{borderRadius:radius}">
			<image src="https://ynhh-static.oss-cn-shanghai.aliyuncs.com/static/pic/479720241028154152.png" mode="widthFix"
				style="width: 60rpx;height: 60rpx;"></image>
		</view>
		<view class="img-group" v-for="(img,index) in List" :key="index" :style="{borderRadius:radius}">
			<view class="img-icon" @click="delImg(index)"></view>
			<view style="width: 100%;height: 100%;">
				<image :src="img" mode="aspectFill" style="width: 100%;height: 100%;" @click="seeImg(index)"
					:style="{borderRadius:radius}">
				</image>
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
				default: 9,
			},
			row: {
				type: [Number, String],
				default: 3,
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
				console.log('返回图片信息', urlData)
				this.$emit('imgData', urlData);
			}
		},
		mounted() {},
		methods: {
			/**
			 * @description: 点击上传
			 * @return void
			 */
			uploadImg() {
				if (this.disabled) {
					return;
				}
				let that = this;
				let count = 0;
				count = Number(that.maxLength) - Number(that.List.length);
				if (count <= 0) {
					uni.showToast({
						title: '最多上传' + that.maxLength + '张',
						icon: 'error',
					})
					return;
				}
				uni.chooseImage({
					count: count,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					success: (res) => {
						let imgArr = res.tempFiles;
						that.ossInfor(imgArr);
					}
				})
			},

			/**
			 * @description: 上传函数
			 * @param {Array} imgArr 要上传的图片集合
			 * @return viod
			 */
			async ossInfor(imgArr) {
				let that = this;
				uni.showLoading({
					title: '上传中...'
				})
				for (var i = 0; i < imgArr.length; i++) {
					let fileName = that.getImgName('lipei-pic', imgArr[i].path);
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
							filePath: imgArr[i].path,
							fileType: 'image',
							name: 'file',
							formData: {
								name: imgArr[i].path,
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
					if (i == imgArr.length - 1) {
						uni.hideLoading();
					}
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
			delImg(i) {
				if (this.disabled) {
					return;
				}
				this.List.splice(i, 1);
			},

			/**
			 * @description: 放大查看已经上传的图片
			 * @param {Number} index 图片索引
			 * @return viod
			 */
			seeImg(index) {
				uni.previewImage({
					urls: this.List,
					current: index,
				})
			}

		},
	}
</script>

<style lang="scss" scoped>
	.img-upload {
		width: 100%;
		display: grid;
		grid-template-rows: auto;
		grid-gap: 20rpx;

		.img-widget {
			width: 100%;
			aspect-ratio: 1 / 1;
			border: 3rpx dashed #999999;
			background-color: #F5F8F7;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
		}

		.img-group {
			width: 100%;
			aspect-ratio: 1 / 1;
			position: relative;
		}

		.img-icon {
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