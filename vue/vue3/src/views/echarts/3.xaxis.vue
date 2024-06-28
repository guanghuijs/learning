<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref } from 'vue';
  import { useECharts } from '@/utils';
  import mock from 'mockjs';

  import clear from './assets/clear.png';
  import cloudy from './assets/cloudy.png';
  import rainy from './assets/rainy.png';
  import thundershower from './assets/thundershower.png';
  import type { EChartsType } from 'echarts';
  const weather = [clear, cloudy, rainy, thundershower];

  let chart: EChartsType;
  const xAxisChartRef = ref();

  onMounted(() => {
    chart = useECharts(xAxisChartRef.value, {
      grid: {
        left: 10,
        right: 10,
        bottom: 50,
        top: 50,
      },
      xAxis: [
        {
          type: 'category', //轴线类型
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun1'],
          position: 'bottom', //data相等轴线的位置,bottom在轴线下方
          name: 'x轴基本配置练习',
          nameLocation: 'center',
          nameTextStyle: {
            color: 'red',
          },
          nameGap: -5, //坐标轴名称与轴线之间的距离
          nameRotate: 45,
        },
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun66'],
          position: 'bottom',
          offset: -100,
          name: '轴线配置练习',
          nameLocation: 'center',
          axisLine: {
            // show: false,
            symbol: 'arrow', //坐标轴箭头
            lineStyle: {
              //轴线样式
              color: 'pink',
            },
          },
          axisTick: {
            // 刻度相关
            lineStyle: {
              color: 'blue',
            },
          },
        },
        {
          type: 'category',
          data: Array.from(
            { length: 15 },
            () =>
              ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][
                mock.Random.integer(0, 5)
              ]
          ),
          name: '标签相关设置',
          nameLocation: 'center',
          position: 'top',
          nameGap: -20,
          offset: -200,
          axisLabel: {
            interval: 0,
            formatter: function (value, index) {
              return '{' + index + '| }';
            },
            rich: {
              ...Array.from({ length: 15 }, () => ({
                backgroundColor: {
                  image: weather[mock.Random.integer(0, 3)],
                },
                height: 16,
              })),
              b: {
                fontSize: 11,
                lineHeight: 30,
                height: 20,
              },
            },
          },
        },
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun3'],
          position: 'bottom',
          offset: -300,
        },
        {
          type: 'category',
          data: Array.from({ length: 15 }, () => mock.mock('@ctitle')),
          position: 'bottom',
          offset: -400,
          axisLabel: {
            rotate: 80,
          },
        },
      ],
      yAxis: {
        type: 'value',
        show: false,
      },
      series: [],
    });
  });
</script>

<style lang="less" scoped>
  .chart {
    height: 500px;
    background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
  }
</style>
