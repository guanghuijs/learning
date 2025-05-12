<template>
	<view class="page">
		<view class="menu-item" v-for="(route, i) in routes" :key="i" @tap="$sys.toPage(`/pages/${route.key}`)">
			{{route.title}}
		</view>
	</view>
</template>

<script>
	import routes from '@/common/route';
	export default {
		data() {
			return {
				routes
			}
		},
		components: {},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			navTo() {

			}
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {}
	}
</script>

<style lang="scss" scoped>
	.page {
		padding-top: 20upx;
	}

	.menu-item {
		margin: 0 36upx 20upx;
		background: white;
		padding: 20rpx;
		border-radius: 10rpx;
	}
</style>