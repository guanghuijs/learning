<!--
 * @Description: 
 * @Author: @吴光辉
 * @Date: 2025-05-08 11:37:39
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-08 17:38:00
 * @FilePath: /uni-framework/components/Menus/index.vue
-->

<template>
	<view class="menus" :class="value ? 'unfold':''">
		<view class="shade" @tap="$emit('input', false)"></view>
		<view class="content">
			<view class="menu" v-for="item in routes" :class="currentRoute === item.key ? 'act':''" :key="item.key"
				@tap="routeHandle(item)">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	import routes from '@/common/route';
	export default {
		props: {
			value: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				routes,
			}
		},
		components: {},
		computed: {
			currentRoute() {
				return this.$route.fullPath.split('/')[2] || 'index';
			}
		},
		watch: {},
		mounted() {},
		methods: {
			routeHandle(route) {
				uni.navigateTo({
					url: `/pages/${route.key}/index`
				})
			},


		},
	}
</script>

<style lang="scss" scoped>
	.menus {
		position: relative;
		z-index: 100;

		.shade {
			position: fixed;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			background: rgba(0, 0, 0, 0.2);
			display: none;
		}

		.content {
			position: fixed;
			left: 0;
			top: 0;
			bottom: 0;
			right: 0;
			width: 0;
			height: 100vh;
			transition: width 0.25s;
			background: white;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			overflow: hidden;

			.menu {
				padding: 10upx 30upx;

				&.act {
					background: pink;
					color: white;
				}
			}
		}

		&.unfold {
			.shade {
				display: block;
			}

			.content {
				width: 50vw;
			}
		}
	}
</style>