<!--
 * @Description: 头部导航组件
 * @Author: @吴光辉
 * @Date: 2025-07-01 11:37:47
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-07-01 14:24:18
 * @FilePath: /uni-framework/components/NavBar/index.vue
-->

<template>
	<view class="nav-bar" :style="__style">
		<slot>
			<view class="content flex-between">
				<view class="title">{{ title }}</view>
				<text class="iconfont icon-left" @tap="$sys.toBack"></text>
			</view>
		</slot>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		props: {
			capsuleWith: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
				default: '标题',
			},
		},
		data() {
			return {};
		},
		components: {},
		computed: {
			...mapState('systemStore', ['statusBarHeight', 'capsuleWidth']),
			__style() {
				return `height:${this.statusBarHeight + 44}px;
				padding: ${this.statusBarHeight}px ${
					this.capsuleWith ? this.capsuleWidth + 8 : 0
				}px 0 0;`;
			},
		},
		watch: {},
		mounted() {},
		methods: {},
	};
</script>

<style lang="scss" scoped>
	.nav-bar {
		width: 100vw;
		background: white;
		border-bottom: 1px solid #eee;
		.content {
			position: relative;
			height: 44px;
			padding: 0 20px;
			.title {
				left: 0;
				width: 100%;
				position: absolute;
				text-align: center;
				line-height: 44px;
			}
			.iconfont {
				position: relative;
			}
		}
	}
</style>
