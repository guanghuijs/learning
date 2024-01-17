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
  const weather = [clear, cloudy, rainy, thundershower];

  let chart;
  const xAxisChartRef = ref();

  onMounted(() => {
    chart = useECharts(xAxisChartRef.value, {
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross',
        },
      },
      grid: {
        top: 80,
        left: 30,
        bottom: 50,
        right: 30,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          position: 'top',
          offset: 50,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            formatter: ['{a|{value}}'].join('\n'),
            rich: {
              a: {
                fontSize: 13,
              },
            },
          },
          nameTextStyle: {},
          data: Array.from({ length: 15 }, (_, i) => {
            const day = new Date().getDate();
            const date = new Date(new Date().setDate(day + i));
            return `${date.getMonth() + 1}/${date.getDate()}`;
          }),
        },
        {
          type: 'category',
          boundaryGap: false,
          position: 'top',
          offset: 32,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            formatter: ['{a|{value}}'].join('\n'),
            rich: {
              a: {
                // color: 'white',
                fontSize: 12,
              },
            },
          },
          nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 19,
          },
          data: Array.from({ length: 15 }, (_, i) => {
            const day = new Date().getDate();
            const date = new Date(new Date().setDate(day + i));
            const week = ['日', '一', '二', '三', '四', '五', '六'];
            return `周${week[date.getDay()]}`;
          }),
        },
        {
          type: 'category',
          boundaryGap: false,
          position: 'top',
          offset: 32,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            formatter: ['{a|{value}}'].join('\n'),
            rich: {
              a: {
                // color: 'white',
                fontSize: 12,
              },
            },
          },
          nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 19,
          },
          data: Array.from({ length: 15 }, (_, i) => {
            const day = new Date().getDate();
            const date = new Date(new Date().setDate(day + i));
            const week = ['日', '一', '二', '三', '四', '五', '六'];
            return `周${week[date.getDay()]}`;
          }),
        },
        {
          type: 'category',
          boundaryGap: false,
          position: 'top',
          offset: -24,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            formatter: function (value, index) {
              return '{' + index + '| }\n{b|' + value + '}';
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
          nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 19,
          },
          data: Array.from(
            { length: 15 },
            () => ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][mock.Random.integer(0, 5)]
          ),
        },
        {
          type: 'category',
          boundaryGap: false,
          position: 'bottom',
          offset: -5,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            formatter: function (value, index) {
              return '{' + index + '| }\n{b|' + value + '}';
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
          nameTextStyle: {
            fontWeight: 'bold',
            fontSize: 19,
          },
          data: Array.from(
            { length: 15 },
            () => ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][mock.Random.integer(0, 5)]
          ),
        },
      ],
      yAxis: [
        {
          type: 'value',
          boundaryGap: true,
          show: false,
          scale: true,
        },
      ],
      series: [
        {
          name: '最高气温',
          type: 'line',
          emphasis: {
            focus: 'series',
          },
          lineStyle: {
            color: '#FF8A15',
          },
          itemStyle: {
            color: '#FF8A15',
          },
          data: Array.from({ length: 24 }, () => `${mock.Random.integer(18, 29)}`),
        },
        {
          name: '最低气温',
          type: 'line',
          emphasis: {
            focus: 'series',
          },
          lineStyle: {
            color: '#0091FF',
          },
          itemStyle: {
            color: '#0091FF',
          },
          data: Array.from({ length: 24 }, () => mock.Random.float(9, 17)),
        },
      ],
    });
  });
</script>

<style lang="less" scoped>
  .chart {
    height: 300px;
    background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
  }
</style>
