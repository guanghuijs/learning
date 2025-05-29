<!--
 * @Description: 复选框组件
 * @Author: @吴光辉
 * @Date: 2025-04-07 09:56:26
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-29 16:19:28
 * @FilePath: /uni-framework/components/GhCheckBox/index.vue
-->

<template>
	<view
		class="__checkbox flex-star"
		:class="disable ? 'disable' : ''"
		@tap="toggle"
	>
		<text
			v-if="value"
			class="iconfont icon-check"
			:style="{ color, fontSize: size + 'px', marginRight: iconMarginRight }"
		></text>
		<view
			v-else
			class="checkbox"
			:class="value ? 'check' : ''"
			:style="{
				width: size + 'px',
				height: size + 'px',
				marginRight: iconMarginRight,
			}"
		>
		</view>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		props: {
			size: {
				type: String,
				default: '18',
			},
			value: {
				type: Boolean,
				default: true,
			},
			color: {
				type: String,
				default: '#01A247',
			},
			disable: {
				type: Boolean,
				default: false,
			},
			iconMarginRight: {
				type: String,
				default: '5px',
			},
		},
		data() {
			return {};
		},
		components: {},
		computed: {},
		watch: {},
		mounted() {},
		emits: ['change'],
		methods: {
			toggle() {
				if (!this.disable) {
					this.$emit('input', !this.value);
					this.$emit('change', !this.value);
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.__checkbox {
		.checkbox {
			border: 1px solid #d4d4d4;
			box-sizing: border-box;
			border-radius: 50%;

			.label {
				font-size: 24upx;
				margin-left: 10upx;
			}
		}
	}

	.__checkbox.disable {
		.checkbox {
			background: #d9d9d9;
			border: 1px solid #9e9e9e;
		}
	}
</style>
