<!--
 * @Description: 过渡动画
 * @Author: @吴光辉
 * @Date: 2025-07-14 14:02:25
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-07-14 15:44:16
 * @FilePath: /uni-framework/pages/tran.vue
-->

<template>
	<view class="page">
		<view class="content">
			<view class="btn" @tap="toggle">打开{{ show }}</view>
			<view class="box" :class="[show ? 'act' : '']">
				<view>呵呵呵</view>
				<view>呵呵呵</view>
				<view>呵呵呵</view>
				<view>呵呵呵</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
			};
		},
		components: {},
		computed: {},
		watch: {},
		onLoad() {},
		mounted() {},
		onShow() {},
		methods: {
			toggle() {
				this.show = !this.show;
			},
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {},
	};
</script>

<style lang="scss" scoped>
	.content {
		.btn {
			line-height: 90upx;
			padding: 0 30upx;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			display: inline-block;
		}

		.box {
			transition: all 0.25s;
			background: white;

			&.close {
				max-height: 0;
			}

			&.act {
			}
		}
	}
</style>
