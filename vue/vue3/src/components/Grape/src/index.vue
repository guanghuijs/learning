<template>
  <div class="grape">
    <!--    <img class="leaf" src="@app/assets/img/leaf.png" />-->
    <div
      class="item"
      v-for="(item, index) in list"
      :key="item.assessDate"
      @click="$emit('itemClick', item.assessDate)"
      :style="calStyle(index, item?.color)"
    >
      {{ index + 1 }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { calcDays, calcPosition } from '../src/helper';
  import { Random } from 'mockjs';

  const props = withDefaults(
    defineProps<{
      date?: string;
      data?: any[];
    }>(),
    {
      date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
    }
  );

  defineEmits<{
    (e: 'itemClick', index: string): void;
  }>();

  /**
   * 计算style属性
   */
  const calStyle = computed(
    () => (index: number, color: string | undefined) => {
      const days = calcDays(props.date);
      return Object.assign(calcPosition(days, index), {
        backgroundColor: props.data
          ? color
          : ['#4F268A', '#933792', '#BA4FB1', '#E7E4E7', '#7CAC21'][
              Random.integer(0, 4)
            ],
      });
    }
  );

  // 数据处理
  const list = computed(() => {
    const baseList = Array.from(
      { length: calcDays(props.date) },
      (_, index) => ({
        assessDate: `${props.date}-${
          index + 1 < 10 ? '0' + (index + 1) : index + 1
        }`,
        color: '#E7E4E7',
      })
    );

    if (!props.data) return baseList;
    props.data.forEach((dataItem) => {
      const i = baseList.findIndex(
        (item) => item.assessDate === dataItem.assessDate
      );
      baseList[i] = dataItem;
    });
    return baseList;
  });
</script>

<style lang="less" scoped>
  .grape {
    padding-top: 5rem;
    box-sizing: border-box;
    display: grid;
    width: 24rem;
    height: 36rem;
    position: relative;

    .item {
      width: 4rem;
      height: 4rem;
      position: absolute;
      border-radius: 50%;
      text-align: center;
      color: #4b4b4b;
      line-height: 4rem;
      font-size: 20px;
      font-weight: bold;
      box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.8);
      transition: all 0.5s;
      user-select: none;
      cursor: pointer;
      background-color: #e7e4e7;
      //background-image: repeating-radial-gradient(
      //  4rem at 1.5rem 1.5rem,
      //  rgba(0, 0, 0, 0),
      //  rgba(0, 0, 0, 0.5)
      //);
    }
  }
</style>
