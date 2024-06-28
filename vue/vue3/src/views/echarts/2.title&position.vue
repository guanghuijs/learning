<template>
  <div ref="titlePositionRef" class="chart"></div>
</template>
<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref } from 'vue';
  import { useECharts } from '@/utils';
  import type { EChartsType } from 'echarts';

  let chart: EChartsType;
  const titlePositionRef = ref();

  onMounted(() => {
    chart = useECharts(titlePositionRef.value, {
      title: {
        text: 'echarts标题', //标题文字
        link: 'https://www.baidu.com', //标题链接
        target: 'self', // 链接跳转方式,默认blank(打开新tab页)
        show: true, //标题是否显示
        subtext: '副标题',
        sublink: 'https://www.baidu.com', // 副标题链接
        // subtarget
        itemGap: 40, //正副标题的间距
        textStyle: {
          // 标题字体样式
          color: 'red',
          backgroundColor: '#00ff00',
        },
      },
      grid: {
        // 定位的代码
        top: 100,
        right: 200,
        bottom: 100,
        left: '10%',
      },
      xAxis: {
        // x轴
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {
        // y轴
      },
      series: {
        // 图表类型

        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    });
  });
</script>

<style lang="less" scoped>
  .chart {
    height: 300px;
  }
</style>
