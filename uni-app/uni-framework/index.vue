<!--
 * @Description: 货位进度条详情
 * @Author: @吴光辉
 * @Date: 2025-05-13 15:54:46
 * @LastEditors: @吴光辉
 * @LastEditTime: 2025-05-16 16:35:25
 * @FilePath: /zhenqing-employee-app/subpackage/distributionDetails/index.vue
-->

<template>
	<view class="page">
		<view class="top">
			<view class="search flex-between">
				<view class="item flex-between">
					<!-- <input type="text" placeholder="供货商名称/代码" v-model="shopName" /> -->
					<input type="text" placeholder="供货商名称" v-model="shopName" />
					<u-icon size="16" name="search"></u-icon>
				</view>
				<view class="item flex-between">
					<input type="text" placeholder="商品名称" v-model="goodsName" />
					<u-icon size="16" name="search"></u-icon>
				</view>
				<view class="btn" @tap="doSearch">搜索</view>
			</view>
			<view class="progress" v-if="record" :class="record.statusClass">
				<view class="center flex-between">
					<view class="label flex-star">
						<view class="label-item flex-star">
							玫瑰：<text>{{record.rose_num}}</text>
						</view>
						<view class="label-item flex-star">
							花草：<text>{{record.club_num}}</text>
						</view>
					</view>
					<view class="num flex-star">
						<view style="margin: 0 20px;">{{record.percent}}%</view>
						<text>{{record.enter_num}}</text> / {{record.num}}
					</view>
				</view>
				<u-line-progress :percentage="record.percent" inactiveColor="#EFEFEF" :activeColor="record.statusColor">
					<!-- <view v-if="Number(record.percent)" class="u-percentage-slot">{{record.percent}}%</view> -->
				</u-line-progress>
			</view>
			<u-tabs :list="menusColumns" @click="menuToggle" :scrollable="false"></u-tabs>
		</view>
		<view class="list">
			<scroll-view class="scroll-view" scroll-y @scrolltolower="loadMore" refresher-enabled
				:refresher-triggered="triggered" @refresherrefresh="refresherrefresh">
				<view class="item" v-for="(item,index) in list" :key="index">
					<view class="item-top flex-between">
						<view class="shop">{{item.shop_name}}[{{item.shop_id}}]</view>
						<view class="phone flex-star" @tap="callPhone(item.shop_mobile)">
							<u-icon size="12" name="phone-fill" color="#5D8CE1"></u-icon>
						</view>
					</view>
					<view class="item-center flex-between">
						<view class="left flex-star">
							<view class="name">{{item.goods_name}}</view>
							<text>{{item.goods_level}}</text>
						</view>
						<view class="right flex-star">
							<text>×{{item.num}}</text>
							<view>{{item.status}}</view>
						</view>
					</view>
					<view class="item-bottom flex-between">
						<view class="left">
							{{item.goods_attr}} | {{item.goods_maturity}} | {{item.goods_length}}
						</view>
						<view class="right">已入<text>{{item.enter_num}}</text>扎，差<text>{{item.diff_num}}</text>扎</view>
					</view>
					<view v-if="item.wrong_num" class="abnormal flex-star">
						<view class="abnormal-item"
							v-for="prop in ['缺货,lack_num','降级,lower_num','报损,lose_num','补货,lack_num','换货,refund_num']">
							{{prop.split(',')[0]}}：{{item[prop.split(',')[1]]}}<text>扎</text>
						</view>
					</view>
				</view>
				<!-- todo 加载完所有 -->
				<noData v-if="!list.length"></noData>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import noData from '@/components/noData/index.vue';
	import {
		menusColumns,
	} from './data';
	import {
		progressDetails
	} from './api';
	export default {
		data() {
			return {
				record: null,
				menusColumns,
				// 查询条件
				shopName: '', // 店铺名称
				goodsName: '', // 商品名称
				currentMenu: 0,
				statistics: null,
				list: [],
				page: 1,
				triggered: false,
			}
		},
		components: {
			noData
		},
		computed: {},
		watch: {},
		onLoad(options) {
			this.record = options;
			this.loadList();
		},
		onShow() {},
		methods: {
			/**
			 * 列表加载
			 * @param {Object} status 加载嘞 reload(重新加载,清空列表)
			 */
			loadList(status = 'reload') {
				progressDetails({
					type: menusColumns[this.currentMenu].params,
					date: this.$u.timeFormat(this.record.date, 'yyyy-mm-dd'),
					master_number: this.record.number,
					shop_id: '',
					shop_name: this.shopName,
					goods_name: this.goodsName,
					page: this.page,
					limit: 10
				}).then((res) => {
					this.triggered = false;
					const {
						page_total,
						rows
					} = res.data.data;
					this.list = status === 'reload' ? rows : this.list.concat(rows);
				})
			},
			// 类型切换
			menuToggle(res) {
				if (res.index === this.currentMenu) return;
				this.currentMenu = res.index;
				this.page = 1;
				this.loadList();
			},
			// 下拉刷新
			refresherrefresh() {
				this.page = 1;
				this.triggered = true;
				this.loadList();
			},
			// 搜索
			doSearch() {
				this.page = 1;
				this.loadList();
			},
			// 触底加载更多
			loadMore() {
				this.page++;
				this.loadList('loadMore');
			},
			callPhone(phoneNumber) {
				uni.makePhoneCall({
					phoneNumber
				});
			},
		},
		onReachBottom() {},
		onPageScroll() {},
		onUnload() {}
	}
</script>

<style lang="scss" scoped>
	.page {
		font-size: 28upx;
		color: #333;
		height: 100vh;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		padding-bottom: env(safe-area-inset-bottom);

		view {
			box-sizing: border-box;
		}

		$primary: #FF8000;
		$unfinished: #EB2421;
		$completed: #08D138;

		.flex-star {
			display: flex;
			align-items: center;
		}

		.flex-between {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.top {
			background: white;
			position: relative;
			z-index: 2;


			.search {
				background: white;
				padding: 20upx;

				.item {
					flex: 1;
					background: #F8F8F8;
					padding: 0 15upx;
					height: 60upx;
					margin-right: 20upx;
					border-radius: 4px;
				}

				.btn {
					padding: 0 40upx;
					background: #3674EF;
					color: white;
					line-height: 60upx;
					border-radius: 8upx;
				}
			}
		}

		.progress {
			padding: 0 20upx 20upx;
			border-bottom: 1px solid #eee;

			.center {
				padding: 16upx 0;

				.label {
					.label-item {
						margin-right: 20upx;

						text {
							color: $primary;
						}
					}
				}

				.num {
					text {
						font-weight: bold;
						margin-right: 8upx;
					}
				}
			}

			.u-percentage-slot {
				font-size: 24upx;
				height: 32upx;
				padding: 0 8upx;
				border: 1px solid #EFEFEF;
				border-radius: 30upx;
			}

			// 未完成
			&.unfinished {
				.item-top {
					.status {
						color: $unfinished;
					}
				}

				.u-percentage-slot {
					background: $unfinished;
				}
			}

			// 已完成
			&.completed {
				.item-top {
					.status {
						color: $completed;
					}
				}

				.u-percentage-slot {
					background: $completed;
				}
			}
		}
	}

	.list {
		padding: 0 20upx;
		flex: 1;
		position: relative;
		overflow-y: scroll;
		width: 100%;

		.scroll-view {
			height: 100%;

			.item {
				background: white;
				padding: 20upx;
				margin-top: 20upx;

				.item-top {
					border-bottom: 1px dotted #eee;
					padding-bottom: 20upx;

					.shop {
						color: #FF8000;
						font-weight: bold;
					}

					.phone {
						width: 40upx;
						height: 40upx;
						background: #E3EBFF;
						border-radius: 50%;
						justify-content: center;
					}
				}

				.item-center {
					padding: 20upx 0;

					.left {
						.name {
							font-weight: bold;
							margin-right: 20upx;
						}

						text {
							color: #FF8000;
						}
					}

					.right {
						text {
							font-weight: bold;
						}

						view {
							color: #EB2421;
							margin-left: 20upx;
						}
					}
				}

				.item-bottom {
					.left {
						color: #999;
						font-size: 24upx;
					}

					.right {
						text {
							color: #FF8000;
						}
					}
				}

				.abnormal {
					background: #FFF8F8;
					padding: 10upx 20upx 30upx;
					margin-top: 20upx;
					flex-wrap: wrap;

					.abnormal-item {
						width: calc(100% / 3);
						margin-top: 20upx;

						text {
							color: #EB2421;
						}
					}
				}
			}
		}
	}
</style>
