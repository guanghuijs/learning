<template>
  <div>原数组:{{ arr }}</div>
  <div class="flex-between">
    <n-button @click="resetArr">数据重置</n-button>
    <n-button @click="resetChart">图表重置</n-button>
    <div class="flex-star" style="padding: 10px 0">
      选择排序方式:<n-select
        placeholder="选则排序方式"
        v-model:value="way"
        :options="[
          { label: '冒泡', value: 'bubble' },
          { label: '选择', value: 'selection' },
          { label: '插入', value: 'insertion' },
          { label: '快速', value: 'quick' },
          { label: '归并', value: 'merge' },
          { label: '计数', value: 'counting' },
        ]"
        style="width: 200px"
      ></n-select>
      {{ way }}
    </div>
    <n-button @click="startSort">开始排序</n-button>
  </div>
  <div ref="helloChartRef" class="chart"></div>
</template>
<script setup lang="ts">
  import { onMounted, ref, unref, watch } from 'vue';
  import { Random } from 'mockjs';
  import { NButton, NSelect } from 'naive-ui';
  import { useSysStoreRefs } from '@/stores/sys';
  import { useECharts, sortHelper, hexToRgba } from '@/utils';

  const { primaryColor } = useSysStoreRefs();
  const way = ref<keyof typeof sortHelper>('bubble');

  watch(primaryColor, (value) => {
    chart.setOption(series(unref(arr)));
  });

  const arr = ref<Array<number>>(
    Array.from({ length: 20 }, () => Random.integer(0, 100))
  );

  let chart: echarts.ECharts;
  const helloChartRef = ref();

  onMounted(() => {
    chart = useECharts(helloChartRef.value, {
      grid: {
        // 定位的代码
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      xAxis: {
        // x轴
        data: Array.from({ length: 20 }, (_, i) => i),
      },
      yAxis: {
        // y轴
        splitLine: { show: false }, //去除网格线
        axisLine: { show: false }, //轴线
        axisTick: { show: false }, //刻度
      },
      series: {
        // 图表类型
        type: 'bar',
        data: arr.value,
        label: {
          show: true,
        },
        itemStyle: {
          color: function (params: any) {
            return hexToRgba(primaryColor.value, params.value);
          },
        },
      },
    });
  });

  const resetArr = () => {
    arr.value = Array.from({ length: 20 }, () => Random.integer(0, 100));
    chart.setOption(series(unref(arr)));
  };

  const resetChart = () => {
    chart.setOption(series(unref(arr)));
  };

  const startSort = () => {
    sortHelper[way.value](chart, [...arr.value], primaryColor.value, () => {
      console.log('排序完成');
    });
  };

  const series = (arr: Array<number>) => {
    return {
      series: {
        // 图表类型
        type: 'bar',
        data: [...arr],
        itemStyle: {
          color: function (params: any) {
            return hexToRgba(primaryColor.value, params.value);
          },
        },
      },
    };
  };
</script>

<style lang="less" scoped>
  .chart {
    height: 300px;
  }
</style>

<route lang="yaml">
meta:
  title: 算法排序
  sort: 9
</route>
