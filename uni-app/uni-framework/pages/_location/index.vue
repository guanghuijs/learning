<template>
	<view class="page">
		<cc-inputSelView leftTitle="收获地点" name="location" :value="mapSelData.name" placeholder="请选择位置"
			@click="chooseAddress"></cc-inputSelView>
		<view>66666666</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mapSelData: {},
			}
		},
		components: {},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			// 选择地址
			chooseAddress(e) {
				let myThis = this;
				// 需要运行手机硬件才可以选
				uni.chooseLocation({
					success: function(res) {
						myThis.mapSelData = res;
						console.log('位置名称：' + res.name);
						console.log('详细地址：' + res.address);
						console.log('纬度：' + res.latitude);
						console.log('经度：' + res.longitude);
					}
				});
				// 模拟地图选位数据
				myThis.mapSelData = {
					'name': '桂花便利店',
					'address': '广东省佛山市南海区桂城街道南新四路36号',
					'longitude': '113.22',
					'latitude': '23.89',
				};

			},
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {}
	}
</script>

<style lang="scss" scoped>
</style>