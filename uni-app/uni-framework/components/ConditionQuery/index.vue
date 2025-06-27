<!--
 * @Description: 分类条件查询
 * @Author: @吴光辉
 * @Date: 2025-06-13 13:35:10
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-06-27 16:27:08
 * @FilePath: /uni-framework/components/ConditionQuery/index.vue
-->

<template>
	<view class="query">
		<view
			class="shade"
			@tap="shadeClick"
			:class="popupShow ? 'expansion' : ''"
		></view>
		<view class="content flex-star">
			<QueryItem
				v-for="(_, i) in schema"
				:key="i"
				v-model="schema[i]"
				@popupChange="popupChange"
				@menuToggle="menuToggle"
			/>
		</view>
		<view class="pitch-on flex-star">
			<view
				class="pitch-on-item flex-star"
				v-for="item in calcCancelSchema"
				:key="item.key"
			>
				<text>{{ item.text }}</text>
				<text class="close" @tap="pitchHandle(item)">×</text>
			</view>
		</view>
		<view
			class="__popup"
			v-for="(sub, i) in schema"
			:key="i"
			v-show="sub.expansion"
			:class="sub.expansion ? 'expansion' : ''"
		>
			<view class="subs flex-star" v-if="sub.type === 3">
				<view
					class="item"
					v-for="item in sub.subCondition"
					:key="item.key"
					:class="item.active ? 'act' : ''"
					@tap="subHandle(item, sub)"
				>
					{{ item.text }}
				</view>
			</view>
			<view class="filtrate" v-if="sub.type === 4">
				<view class="item" v-for="item in sub.subCondition" :key="item.key">
					<view class="title">{{ item.subText }}</view>
					<view class="filtrate-content flex-star">
						<view
							class="filtrate-item"
							v-for="subItem in item.subCondition"
							:key="subItem.key"
							:class="subItem.active ? 'act' : ''"
							@tap="subItemHandle(subItem, sub)"
						>
							{{ subItem.text }}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import QueryItem from './Item.vue';
	import { schema } from './data';
	export default {
		props: {},
		data() {
			return {
				schema,
			};
		},
		components: {
			QueryItem,
		},
		computed: {
			popupShow() {
				return this.schema.some((item) => item.type !== 1 && item.expansion);
			},
			calcCancelSchema() {
				const temp = [];
				this.schema.forEach((item, index) => {
					if ([1, 2].includes(item.type) && item.active) {
						temp.push({
							key: item.key,
							text: item.text,
							type: item.type,
						});
					}
					if (item.type === 3) {
						item.subCondition.forEach((item, index) => {
							if (item.active)
								temp.push({
									key: item.key,
									text: item.text,
								});
						});
					}
					if (item.type === 4) {
						item.subCondition.forEach((item, index) => {
							item.subCondition.forEach((subItem, subIndex) => {
								if (subItem.active)
									temp.push({
										key: subItem.key,
										text: subItem.text,
									});
							});
						});
					}
				});
				return temp;
			},
		},
		watch: {},
		mounted() {},
		methods: {
			// 弹出层切换回调
			popupChange(res) {
				if (res.expansion) {
					res.expansion = false;
				} else {
					this.schema.forEach((item) => {
						if (item.type !== 1) {
							item.expansion = false;
						}
					});
					setTimeout(() => {
						res.expansion = true;
					}, 250);
				}
			},
			// 阴影点击回调
			shadeClick() {
				this.schema.forEach((item) => {
					item.expansion = false;
				});
			},
			// 普通菜单(升序,降序,取消参数)状态切换事件
			menuToggle() {
				this.schema.forEach((item) => {
					item.expansion = false;
				});
			},
			// 类似等级筛选
			subHandle(item, sub) {
				item.active = !item.active;
				sub.active = sub.subCondition.find((item) => item.active);
			},
			// 筛选 两级
			subItemHandle(item, sub) {
				item.active = !item.active;
				let flag = false;
				sub.subCondition.forEach((subItem) => {
					if (subItem.subCondition.find((item) => item.active)) {
						flag = true;
					}
				});
				sub.active = flag;
			},
			pitchHandle(item) {
				const ids = item.key.split('-');
				const [i, j, k] = item.key.split('-').map((i) => Number(i));
				if (ids.length === 1) {
					this.schema[i].active = false;
					this.schema[i].value = '';
				}
				if (ids.length === 2) {
					this.schema[i].subCondition[j].active = false;
					this.schema[i].active = this.schema[i].subCondition.find(
						(item) => item.active
					);
				}
				if (ids.length === 3) {
					this.schema[i].subCondition[j].subCondition[k].active = false;
					let flag = false;
					this.schema[i].subCondition.forEach((subItem) => {
						if (subItem.subCondition.find((item) => item.active)) {
							flag = true;
						}
					});
					this.schema[i].active = flag;
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.query {
		position: relative;
		z-index: 1;

		.shade {
			position: fixed;
			width: 100vw;
			max-height: 0;
			left: 0;
			top: 0;
			background: rgba(0, 0, 0, 0.1);
			opacity: 0;
			transition: opacity 0.25s;

			&.expansion {
				max-height: 100vh;
				height: 100vh;
				opacity: 1;
			}
		}

		.content {
			padding: 20upx 32upx;
			background: #f2f4f8;
			overflow-x: scroll;
			position: relative;
		}

		.pitch-on {
			position: relative;
			background: #f2f4f8;
			padding: 0 36upx 20upx;
			flex-wrap: wrap;

			.pitch-on-item {
				background: white;
				font-size: 24upx;
				padding: 10upx 16upx;
				border-radius: 6px;
				margin: 0 16upx 16upx 0;
				.close {
					&:active {
						color: red;
					}
				}
			}
		}

		.subs {
			padding: 10upx 36upx 20upx;
			.item {
				background: white;
				font-size: 24upx;
				padding: 10upx 16upx;
				border-radius: 6px;
				margin-right: 16upx;

				&.act {
					color: $uni-color-primary;
					border: 1px solid $uni-color-primary;
					padding: 8upx 14upx;
				}
			}
		}

		.filtrate {
			padding: 10upx 36upx 20upx;
			.item {
				.title {
					padding-bottom: 10upx;
				}
				.filtrate-content {
					flex-wrap: wrap;
					.filtrate-item {
						background: white;
						font-size: 24upx;
						padding: 10upx 16upx;
						border-radius: 6px;
						margin: 0 16upx 16upx 0;
						&.act {
							color: $uni-color-primary;
							border: 1px solid $uni-color-primary;
							padding: 8upx 14upx;
						}
					}
				}
			}
		}

		.__popup {
			position: absolute;
			border-top: 1px solid #eee;
			width: 100vw;
			background: #f2f4f8;
			max-height: 0;
			overflow: hidden;
			transition: all 0.25s;
			border-radius: 0 0 24upx 24upx;
			box-sizing: border-box;
			left: 0;

			&.expansion {
				max-height: 100vh;
			}
		}
	}
</style>
