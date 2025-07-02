<template>
	<view class="page">
		<view class="tabs flex-star">
			<view
				class="checkTab"
				:style="{
					transform: `translateX(calc(${tabindex} * 100vw / 5))`,
				}"
			>
			</view>
			<view
				class="tab"
				:class="tabindex === i ? 'act' : ''"
				v-for="(_, i) in 5"
				@tap="toggle(i)"
			>
				{{ i }}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabindex: 0,
			};
		},
		components: {},
		computed: {},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			toggle(i) {
				console.log(i);
				this.tabindex = i;
			},
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {},
	};
</script>

<style lang="scss" scoped>
	.tabs {
		position: relative;
		background: white;
		.tab {
			flex: 1;
			line-height: 50px;
			position: relative;
			text-align: center;
			&.act {
				color: white;
			}
		}
		.checkTab {
			position: absolute;
			left: 0;
			top: 0;
			width: 20%;
			height: 50px;
			background: pink;
			transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1),
				width 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
		}
	}
</style>
