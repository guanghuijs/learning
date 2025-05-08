<!--
 * @Description: 空状态组件
 * @Author: @晏长刚
 * @Date: 2024-09-11 16:50:16
 * @LastEditors: @晏长刚
 * @LastEditTime: 2024-09-11 17:41:05
 * @FilePath: /demo/components/NoData/index.vue
-->

<template>
	<view class="nodata-widget" :style="{height:height}">
		<image :src="url" mode="widthFix" :style="{width:imgWidth}"></image>
		<view class="nodata-txt" :style="{fontSize:fontSize}">{{tips}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			height: { //组件高度
				type: String,
				default: '800rpx',
			},
			imgWidth: { //图片高度
				type: String,
				default: '400rpx',
			},
			fontSize: { //提示字大小
				type: String,
				default: '28rpx',
			},
			url: { //空状态图片
				type: String,
				default: 'https://cdns.zqhuahui.com/Admin/LN4N-k.png',
			},
			tips: {
				type: String,
				default: '暂无数据...',
			}
		},
		data() {
			return {}
		},
		components: {},
		computed: {},
		watch: {},
		mounted() {},
		methods: {},
	}
</script>

<style lang="scss" scoped>
	.nodata-widget {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.nodata-txt {
			font-size: 28rpx;
			margin-top: 30rpx;
			color: #999999;
		}
	}
</style>