<template>
	<view class="page">
		<view class="item" v-for="(item, i) in list" :key="i">
			<view class="top">
				<view class="flex-star">
					<GhCheckBox v-model="item.checked"></GhCheckBox>
					<view> {{ item.goodsName }}</view>
				</view>
				<view>
					<view>
						<text @tap="numChange([i, '-'])">-</text>
						<view style="margin: 0 10px">{{ item.num }}</view>
						<text @tap="numChange([i, '+'])">+</text>
						<!-- 状态使用 -->
						<!-- $store.state.[?modules].list  -->
						<pre>{{ $store.state.shopCartStore.list[i] }}</pre>
						<!-- actions -->
						<!-- $store.dispatch('[?modules]/del', params) -->
						<view @tap="$store.dispatch('shopCartStore/del')">删除</view>
						<!-- mutations 触发 -->
						<!-- $store.commit('[?modules]/del', params) -->
						<view
							@tap="$store.commit('shopCartStore/setList', 'commit/setList')"
						>
							删除
						</view>
						<!-- getters 使用 -->
						<!-- $store.getters['[?modules]/goods'](参数) -->
						<pre>{{ $store.getters['shopCartStore/goods'](i) }}</pre>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view>总价:{{ allPrice }}</view>
			<view>所选:{{ checkNum }}</view>
			<view>总数:{{ allNum }}</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapGetters, mapActions } from 'vuex';
	import GhCheckBox from '@/components/GhCheckBox/index.vue';
	export default {
		data() {
			return {};
		},
		components: {
			GhCheckBox,
		},
		computed: {
			...mapState('shopCartStore', ['list']),
			...mapGetters('shopCartStore', ['allPrice', 'checkNum', 'allNum']),
		},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {
			...mapActions('shopCartStore', ['numChange', 'add', 'del']),
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {},
	};
</script>

<style lang="scss" scoped>
	.page {
		padding-top: 20upx;
		padding-bottom: 100upx;
		.item {
			background: white;
			padding: 20upx;
			margin: 0 20upx 20upx;
		}
		.bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			background: white;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}
	}
</style>
