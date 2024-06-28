<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref } from 'vue';
  import { useECharts } from '@/utils';
  import type { EChartsType } from 'echarts';

  let chart: EChartsType;
  const xAxisChartRef = ref();

  onMounted(() => {
    chart = useECharts(xAxisChartRef.value, {
      grid: {
        top: 100,
      },
      title: {
        text: '业务受理趋势',
        // subtext: 'Fake Data'
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['收件总数', '办结总数', '办结率'],
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '你好',
        },
        {
          type: 'value',
          name: '增长率(%)',
          nameTextStyle: {
            color: '#999999',
          },
          splitLine: { show: false }, //去除网格线
          axisLine: { show: false }, //轴线
          axisTick: { show: false }, //刻度
          axisLabel: {
            margin: 2,
            interval: 10,
            color: '#999999',
          },
        },
      ],
      series: [
        {
          name: '办结总数',
          type: 'bar',
          data: [2, 5, 9, 26, 28, 70, 175, 182, 48, 18, 6, 2],
          markPoint: {
            data: [
              // 图钉
              { name: 'Max', value: 182, xAxis: 7, yAxis: 183 },
            ],
          },
          markLine: {},
          label: {
            show: false,
          },
        },
        {
          name: '办结率',
          type: 'line',
          color: ['red', 'pink'], //折线条的颜色
          smooth: true,
          yAxisIndex: 1, //使用的y轴下标
          itemStyle: {
            hadowBlur: 2,
          },
          data: [31, 62, 89, 40, 20, 30, 40, 25, 26, 25, 25, 25],
        },
      ],
    });
  });
</script>

<style lang="less" scoped>
  .chart {
    height: 500px;
    background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
  }
</style>
