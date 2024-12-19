<script setup lang="ts">
  import { computed, ref, unref } from 'vue';
  import { NIcon, NCheckbox, NInputNumber } from 'naive-ui';
  import { IosTrash } from '@vicons/ionicons4';
  import type { ShopItem } from './js/type';
  import { cartList } from './js/data';
  import { useSysStoreRefs } from '@/stores/sys';

  const { primaryColor } = useSysStoreRefs();

  // 购物车数据
  const data = ref<ShopItem[]>(cartList());
  // 管理状态
  const delStatus = ref<boolean>(false);

  /**
   * 计算商品数量
   */
  const allNum = computed<number>(() => {
    let num = 0;
    unref(data).forEach((shopItem) => {
      shopItem.goodsList.forEach(() => {
        num++;
      });
    });
    return num;
  });

  /**
   * 店铺勾选(取消)
   */
  const shopToggle = () => {
    unref(data).forEach((shopItem, shopIndex) => {
      if (shopItem.isCheck) {
        data.value[shopIndex].goodsList.forEach((item) => {
          item.isCheck = true;
        });
      } else {
        data.value[shopIndex].goodsList.forEach((item) => {
          item.isCheck = false;
        });
      }
    });
  };

  /**
   * 商品勾选(取消)
   */
  const goodsToggle = () => {
    unref(data).forEach((shopItem, shopIndex) => {
      let checkNum = 0;
      const { goodsList } = shopItem;
      goodsList.forEach((item) => {
        if (item.isCheck) {
          checkNum++;
        }
      });
      if (checkNum === goodsList.length && checkNum !== 0) {
        data.value[shopIndex].isCheck = true;
      } else {
        data.value[shopIndex].isCheck = false;
      }
    });
  };

  /**
   * 全选(取消)
   * @param flag
   */
  const checkAllToggle = (flag: boolean) => {
    if (flag) {
      unref(data).forEach((shopItem, shopIndex) => {
        data.value[shopIndex].isCheck = true;
        data.value[shopIndex].goodsList.forEach((item) => {
          item.isCheck = true;
        });
      });
    } else {
      unref(data).forEach((shopItem, shopIndex) => {
        data.value[shopIndex].isCheck = false;
        data.value[shopIndex].goodsList.forEach((item) => {
          item.isCheck = flag;
        });
      });
    }
  };

  /**
   * 计算总价&全选状态
   */
  const calc = computed<{ isCheckAll: boolean; price: string }>(() => {
    let isCheckAll = false;
    let checkNum = 0;
    let price = 0;
    data.value.forEach((shopItem) => {
      if (shopItem.isCheck) {
        checkNum++;
      }
      const { goodsList } = shopItem;
      goodsList.forEach((item) => {
        if (item.isCheck) {
          price += item.price * item.num;
        }
      });
    });
    if (checkNum === data.value.length) {
      isCheckAll = true;
    }
    return {
      isCheckAll,
      price: price.toFixed(2),
    };
  });

  /**
   * 商品删除
   * @param shopIndex 店铺下标
   * @param itemIndex 店铺商品列表的商品下标
   */
  const delItem = (shopIndex: number, itemIndex: number) => {
    data.value[shopIndex].goodsList.splice(itemIndex, 1);
  };
</script>

<template>
  <div class="goods-cart">
    <div class="cart-top flex-between">
      <div>
        购物车 <span>({{ allNum }})</span>
      </div>
      <span v-if="!delStatus" @click="delStatus = !delStatus">管理</span>
      <span v-else @click="delStatus = !delStatus">退出管理</span>
    </div>
    <div class="goods-list">
      <template v-for="(shopItem, index) in data" :key="index">
        <Transition name="list">
          <div class="goods-stop" v-if="shopItem.goodsList.length">
            <div class="goods-stop-title">
              <n-checkbox
                v-model:checked="shopItem.isCheck"
                @change="shopToggle"
              >
                <div>{{ shopItem.shopName }}</div>
              </n-checkbox>
            </div>
            <TransitionGroup name="list">
              <div
                class="goods-item flex-between"
                v-for="(goodsItem, goodsIndex) in shopItem.goodsList"
                :key="goodsIndex"
              >
                <Transition>
                  <div
                    v-if="delStatus"
                    class="goods-item-delete"
                    @click="delItem(index, goodsIndex)"
                  >
                    <n-icon>
                      <ios-trash></ios-trash>
                    </n-icon>
                  </div>
                </Transition>
                <n-checkbox
                  v-model:checked="goodsItem.isCheck"
                  @change="goodsToggle"
                >
                </n-checkbox>
                <div class="goodsItem-cont flex-between">
                  <img :src="goodsItem.goodsImg" alt="" />
                  <div class="goodsItem-cont-more">
                    <div class="goodsItem-cont-name">
                      {{ goodsItem.goodsName }}
                    </div>
                    <div class="goodsItem-cont-more-bottom flex-between">
                      <div class="goods-spec">
                        <div>
                          <span
                            v-for="(item, specIndex) in goodsItem.goodsSpec"
                            :key="specIndex"
                          >
                            {{ item }}
                          </span>
                        </div>
                        <div>￥{{ goodsItem.price }}</div>
                      </div>
                      <n-input-number
                        v-model:value="goodsItem.num"
                        :range="[1, 10]"
                      ></n-input-number>
                    </div>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </Transition>
      </template>
    </div>
    <div style="height: 50px"></div>
    <div class="goods-cart-bottom flex-between">
      <n-checkbox :checked="calc.isCheckAll" @change="checkAllToggle">
        <div class="check-all-text">全选</div>
      </n-checkbox>
      <div class="price">￥{{ calc.price }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .v-enter-from,
  .v-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .goods-cart {
    width: 100%;
    .cart-top {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 2;
      padding: 15px;
      background: white;
      div {
        font-size: 18px;
        span {
          font-size: 14px;
        }
      }
    }

    .goods-list {
      padding: 0 15px;
      .goods-stop:last-child {
        margin-bottom: 10px;
      }
      .goods-stop {
        background: white;
        margin-top: 10px;
        border-radius: 5px;
        .goods-stop-title {
          border-bottom: 1px solid #eee;
          padding: 10px;
        }
        .goods-item {
          margin: 0 10px;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          position: relative;
          .goodsItem-cont {
            width: calc(100vw - 85px);
            img {
              margin: 0 10px;
              width: 80px;
              height: 80px;
            }
            .goodsItem-cont-more {
              width: calc(100% - 90px);
              .goodsItem-cont-name {
                font-weight: bold;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-bottom: 15px;
              }
              .goods-spec {
                span {
                  color: #aaa;
                  font-size: 12px;
                }
              }
            }
          }
          .goods-item-delete {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            width: 100px;
            background: linear-gradient(to left, #fff, rgba(0, 0, 0, 0));
            height: 100%;
            right: 0;
            z-index: 1;
            cursor: pointer;
            i {
              color: v-bind(primaryColor);
              font-size: 36px;
            }
          }
        }
      }
    }

    .goods-cart-bottom {
      padding: 0 15px;
      width: 100%;
      height: 50px;
      background: white;
      position: sticky;
      bottom: 0;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      z-index: 1;
      .check-all-text {
        margin-left: 5px;
      }
      .price {
        font-size: 18px;
        color: v-bind(primaryColor);
        font-weight: bold;
      }
    }
  }
</style>
