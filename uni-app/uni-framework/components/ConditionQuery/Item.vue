<!--
 * @Description: 
 * @Author: @吴光辉
 * @Date: 2025-06-13 14:22:31
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-06-13 16:48:46
 * @FilePath: /uni-framework/components/ConditionQuery/Item.vue
-->

<template>
	<view
		class="query-item flex-star"
		:class="[value.active ? 'active' : '', value.expansion ? 'expansion' : '']"
		@tap="handle"
	>
		{{ value.text }}
		<text v-if="value.type === 1"></text>
		<sortIcon v-else-if="value.type === 2" :value="value.value" />
		<text
			v-else-if="value.expansion !== undefined"
			class="iconfont icon-down"
			:class="value.expansion ? 'act' : ''"
		></text>
	</view>
</template>

<script>
	import sortIcon from './sortIcon.vue';
	export default {
		props: {
			value: {
				type: Object,
				require: true,
			},
		},
		data() {
			return {};
		},
		components: {
			sortIcon,
		},
		computed: {},
		watch: {},
		mounted() {},
		methods: {
			handle() {
				// 升序降序取消该参数情况
				if (this.value.type === 1) {
					const { value } = this.value;
					this.value.value = value ? '' : 'true';
					this.value.active = !!this.value.value;
					this.$emit('menuToggle');
				} else if (this.value.type === 2) {
					if (!this.value.value) {
						this.value.value = 'desc';
					} else if (this.value.value === 'desc') {
						this.value.value = 'litre';
					} else {
						this.value.value = '';
					}
					this.value.active = !!this.value.value;
					this.$emit('menuToggle');
					// 颜色 等级 筛选
				} else if ([3, 4].includes(this.value.type)) {
					this.$emit('popupChange', this.value);
				}
				this.$emit('input', this.value);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.query-item {
		white-space: nowrap;
		font-size: 24upx;
		background: white;
		padding: 16upx 20upx;
		border-radius: 12upx;
		margin-right: 20upx;
		border: 1px solid #fff;

		.iconfont {
			font-size: 32upx;
		}

		> .icon-down {
			font-size: 20upx;
			margin-left: 5upx;
			transition: all 0.25s;

			&.act {
				transform: rotate(-180deg);
			}
		}

		&.active {
			color: $uni-color-primary;
			border: 1px solid #fff;
		}

		&.expansion {
			color: $uni-color-primary;
			border: 1px solid $uni-color-primary;
			background: #e2f0e8;
		}
	}
</style>
