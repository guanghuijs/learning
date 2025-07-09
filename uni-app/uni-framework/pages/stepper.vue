<template>
	<view class="page">
		<view class="item">
			<view class="title">基本使用</view>
			<Stepper v-model="data"></Stepper>
		</view>
		<view class="item">
			<view class="title">设置大小</view>
			<Stepper v-model="data" size="18px"></Stepper>
			<Stepper v-model="data" size="36px"></Stepper>
		</view>
		<view class="item">
			<view class="title">主题颜色</view>
			<Stepper v-model="data" color="red"></Stepper>
		</view>
		<view class="item">
			<view class="title">阴影</view>
			<Stepper v-model="data" isShadow />
		</view>
		<view class="item">
			<view class="title">数量为1时替换为删除图标</view>
			<Stepper v-model="data" oneWithDel />
		</view>

		<view class="item">
			<view class="title">输入框宽度</view>
			<Stepper v-model="data" inputWidth="50px" />
		</view>
		<view class="item">
			<view class="title">值为0时,不显示减按钮跟输入框</view>
			<Stepper v-model="data" zeroOnlyPlus />
		</view>
		<view class="item">
			<view class="title">不可编辑</view>
			<Stepper v-model="data" disable></Stepper>
		</view>
		<view class="item">
			<view class="title">最大输入</view>
			<Stepper v-model="data" isShadow :maxNum="15" />
		</view>
		<view class="item">
			<view class="title">圆形模式</view>
			<Stepper v-model="data" round />
		</view>
		<view class="item">
			<view class="title">数量为0时显示加入购物车按钮</view>
			<Stepper v-model="data" zero-with-text-btn />
		</view>
	</view>
</template>

<script>
	import Stepper from '@/components/Stepper/index.vue';
	export default {
		data() {
			return {
				data: 1,
			};
		},
		components: {
			Stepper,
		},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {},
	};
</script>

<style lang="scss" scoped>
	.page {
		padding-top: 30upx;
		.item {
			background: white;
			margin: 0 36upx 30upx;
			padding: 20upx;
			.title {
				padding-bottom: 10upx;
			}
		}
	}
</style>
