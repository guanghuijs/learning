<template>
	<view class="page flex-star">
		<NavBar title="顶部tabs 锚点(横向)"></NavBar>
		<view class="nav">
			<u-tabs :list="tabs" @click="tabChange"></u-tabs>
		</view>
		<view class="main">
			<u-transition
				v-for="item in tabs"
				:key="item.id"
				:show="item.show"
				:mode="item.mode"
			>
				<view class="item">
					<view class="content">
						{{ item.name }}
					</view>
				</view>
			</u-transition>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/NavBar/index.vue';
	export default {
		data() {
			return {
				show: true,
				tabs: [
					{ name: '详情', id: 'desc', show: true, mode: 'slide-left' },
					{ name: '商铺', id: 'shop', show: false, mode: 'slide-right' },
					{ name: '评论', id: 'comment', show: false, mode: 'slide-right' },
					{ name: '发货', id: 'shipments', show: false, mode: 'slide-right' },
				],
			};
		},
		components: {
			NavBar,
		},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			tabChange({ index }) {
				this.tabs.forEach((item) => {
					item.show = false;
					item.mode = 'slide-right';
				});
				this.tabs[index].mode = 'slide-left';
				this.tabs[index].show = true;
			},
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {},
	};
</script>

<style lang="scss" scoped>
	.page {
		flex-direction: column;
		.nav {
			width: 100%;
			background: white;
			border-bottom: 1px solid #eee;
		}

		.main {
			flex: 1;
			width: 100%;
			position: relative;
			background: white;

			.item {
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				.content {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
