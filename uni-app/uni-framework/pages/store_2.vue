<template>
	<view class="page">
		<view>总价:{{ allPrice }}</view>
		<view>所选:{{ checkNum }}</view>
		<view>总数:{{ allNum }}</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex';
	export default {
		data() {
			return {};
		},
		components: {},
		computed: {
			...mapGetters('shopCartStore', ['allPrice', 'checkNum', 'allNum']),
		},
		watch: {},
		onLoad() {},
		onShow() {},
		methods: {},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {},
	};
</script>

<style lang="scss" scoped></style>
