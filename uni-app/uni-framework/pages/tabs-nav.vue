<template>
	<view class="page flex-star">
		<NavBar title="tabs 锚点导航(纵向)">
			<template #bottom>
				<view class="nav">
					<u-tabs
						:list="tabs"
						@click="tabChange"
						:current="activeIndex"
					></u-tabs>
				</view>
			</template>
		</NavBar>
		<view class="main">
			<scroll-view
				class="scroll-view"
				scroll-y="true"
				:scroll-into-view="isScroll ? '' : scrollToId"
				@scroll="scroll"
				scroll-with-animation
			>
				<view class="item" v-for="item in tabs" :key="item.id" :id="item.id">
					<view class="content">
						<view class="title">
							{{ item.name }} - {{ isScroll }} - {{ scrollToId }}
						</view>
						{{ JSON.stringify(contentRects) }}
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
				activeIndex: 0,
				contentRects: [],
				timer: null,
				isScroll: false, // 是否是滚动事件
				isTabsToggle: false,
				timer: null,
			};
		},
		components: {
			NavBar,
		},
		computed: {},
		watch: {},
		onLoad() {},
		mounted() {
			this.getRects();
		},
		onShow() {},
		methods: {
			tabChange({ index, id }) {
				this.isScroll = false;
				this.isTabsToggle = true;
				this.$nextTick(() => {
					this.scrollToId = id;
					if (!this.timer) {
						this.timer = setTimeout(() => {
							this.isTabsToggle = false;
							this.timer = null;
						}, 500);
					}
				});
			},
			scroll(e) {
				if (this.isTabsToggle) return;
				this.isScroll = true;
				const scrollTop = e.detail.scrollTop;
				this.updateActiveTabs(scrollTop);
			},
			getRects() {
				const query = uni.createSelectorQuery().in(this);
				let pTop = 0;
				query
					.select('.scroll-view')
					.boundingClientRect(({ top }) => {
						pTop = top;
					})
					.exec();
				query
					.selectAll('.item')
					.boundingClientRect((rects) => {
						this.contentRects = rects.map((rect, index) => ({
							top: rect.top - pTop,
							bottom: rect.bottom - pTop,
						}));
					})
					.exec();
			},
			updateActiveTabs(scrollTop) {
				this.contentRects.forEach((rect, index) => {
					if (scrollTop >= rect.top && scrollTop < rect.bottom) {
						if (this.activeIndex !== index) {
							this.activeIndex = index;
							this.scrollToId = this.tabs[index].id;
						}
					}
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
				.item {
					padding: 0 36upx;
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
