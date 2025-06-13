<template>
	<view class="__sort_icon flex-star" :class="value">
		<text class="iconfont icon-sort-up"></text>
		<text class="iconfont icon-sort-dwon"></text>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: String, // 升序:desc 降序:litre
				default: '',
			},
		},
		data() {
			return {};
		},
		components: {},
		computed: {},
		watch: {},
		mounted() {},
		methods: {},
	};
</script>

<style lang="scss" scoped>
	.__sort_icon {
		flex-direction: column;
		padding-left: 5upx;
		color: #333;

		.iconfont {
			font-size: 16upx;
		}

		.icon-sort-up {
			transform: translateY(1px);
		}

		.icon-sort-dwon {
			transform: translateY(-1px);
		}

		&.desc {
			.icon-sort-up {
				color: $uni-color-primary;
			}

			.icon-sort-dwon {
				color: #333;
			}
		}

		&.litre {
			.icon-sort-up {
				color: #333;
			}

			.icon-sort-dwon {
				color: $uni-color-primary;
			}
		}
	}
</style>
