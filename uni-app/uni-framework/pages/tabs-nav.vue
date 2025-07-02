<template>
	<view class="page flex-star">
		<NavBar title="tabs 锚点导航(纵向)"></NavBar>
		<view class="nav">
			<u-tabs :list="tabs" @click="tabChange"></u-tabs>
		</view>
		<view class="main">
			<scroll-view
				scroll-y="true"
				:scroll-into-view="scrollToId"
				scroll-with-animation
			>
				<view class="item" v-for="item in tabs" :key="item.id" :id="item.id">
					<view class="content">
						<view class="title">{{ item.name }}</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import NavBar from '@/components/NavBar/index.vue';
	export default {
		data() {
			return {
				tabs: [
					{ name: '详情', id: 'desc' },
					{ name: '商铺', id: 'shop' },
					{ name: '评论', id: 'comment' },
					{ name: '发货', id: 'shipments' },
				],
				scrollToId: '',
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
			tabChange({ id }) {
				this.$nextTick(() => {
					this.scrollToId = id;
				});
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
		height: 100vh;
		.nav {
			width: 100%;
			background: white;
			border-bottom: 1px solid #eee;
		}

		.main {
			flex: 1;
			width: 100%;
			overflow-y: hidden;

			scroll-view {
				height: 100%;
				padding-top: 40upx;

				.item {
					padding: 0 40upx;
					margin-bottom: 40upx;
					.content {
						height: 50vh;
						background: white;
						width: 100%;
					}
				}
			}
		}
	}
</style>
