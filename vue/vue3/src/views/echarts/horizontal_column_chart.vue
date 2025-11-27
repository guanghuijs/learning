<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref } from 'vue';
  import { useECharts } from '@/utils';
  import mock from 'mockjs';
  import type { EChartsType } from 'echarts';

  let chart: EChartsType;
  const xAxisChartRef = ref();

  onMounted(() => {
    chart = useECharts(xAxisChartRef.value, {
      tooltip: {},
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: Array.from({ length: 7 }, (_, i) => `周${i}`),
      },
      series: {
        type: 'bar',
        data: Array.from({ length: 7 }, (_, i) => mock.Random.integer(5, 10)),
        itemStyle: {
          color: 'red',
        },
      },
    });
  });
</script>

<style lang="less" scoped>
  .chart {
    height: 300px;
  }
</style>


<route lang="yaml">
meta:
  title: 横向柱形图
  sort: 6
</route>
