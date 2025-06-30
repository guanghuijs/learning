<!--
 * @Description: 步进器
 * @Author: @吴光辉
 * @Date: 2025-04-07 16:06:26
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-06-28 16:34:09
 * @FilePath: /uni-framework/components/Stepper/index.vue
-->

<template>
	<view
		class="stepper"
		:class="[isShadow ? 'shadow' : '', round ? 'round' : '']"
		:style="{
			borderRadius: round ? `calc(${size} + 2px)` : '',
			background: bgColor,
		}"
	>
		<template v-if="!disable">
			<view class="flex-star" v-if="zeroOnlyPlus ? value !== 0 : true">
				<view
					class="_stepper-btn minus"
					@tap="minusHandle"
					:style="{
						height: size,
						width: size,
						border: `${value === 1 && oneWithDel ? 0 : 2}px solid ${color}`,
						color,
					}"
				>
					<text
						class="iconfont"
						:class="
							oneWithDel
								? value === 1
									? 'icon-del'
									: 'icon-minus'
								: 'icon-minus'
						"
					></text>
				</view>
				<input
					class="input"
					type="number"
					:style="{ height: size, width: inputWidth }"
					:value="value"
					@blur="inputHandle"
				/>
			</view>
			<view
				class="_stepper-btn plus"
				:class="maxNum && value >= maxNum ? 'disable' : ''"
				@tap="plusHandle"
				:style="{ height: size, width: size, background: primary ? color : '' }"
			>
				<text class="iconfont icon-plus"></text>
			</view>
		</template>
		<view v-else> ×{{ value }} </view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: Number,
				default: 0,
			},
			// 大小
			size: {
				type: String,
				default: '24px',
			},
			color: {
				type: String,
				default: '#01A248',
			},
			// 是否显示阴影
			isShadow: {
				type: Boolean,
				default: false,
			},
			// 数量为1时替换为删除图标
			oneWithDel: {
				type: Boolean,
				default: false,
			},
			// 输入框宽度
			inputWidth: {
				type: String,
				default: '30px',
			},
			// 是否圆角显示
			round: {
				type: Boolean,
				default: false,
			},
			// 背景颜色
			bgColor: {
				type: String,
				default: 'white',
			},
			// 值为0时,不显示减按钮跟输入框
			zeroOnlyPlus: {
				type: Boolean,
				default: false,
			},
			// 是否可编辑
			disable: {
				type: Boolean,
				default: false,
			},
			maxNum: {
				type: Number,
				default: Infinity,
			},
			primary: {
				type: Boolean,
				default: true,
			},
		},
		data() {
			return {};
		},
		components: {},
		computed: {},
		watch: {},
		methods: {
			// 减按钮事件
			minusHandle() {
				this.$emit('input', this.value - 1);
			},
			// 加按钮事件
			plusHandle() {
				if (this.value < this.maxNum) this.$emit('input', this.value + 1);
			},
			// 输入框事件
			inputHandle(res) {
				const value = Number(res.detail.value);
				this.$emit('input', value);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.stepper {
		align-items: center;
		display: inline-flex;
		padding: 4upx;
		border-radius: 4px;

		._stepper-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #eee;
			color: white;
		}

		&.shadow {
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}

		&.round {
			._stepper-btn {
				border-radius: 50%;
			}
		}

		.minus {
			border-radius: 4px;
			.icon-del {
				font-size: 36upx;
			}
		}

		.input {
			text-align: center;
			font-size: 28upx;
		}

		.plus {
			background: transparent;
			border-radius: 4px;
			&.disable {
				opacity: 0.6;
			}
		}
	}
</style>
