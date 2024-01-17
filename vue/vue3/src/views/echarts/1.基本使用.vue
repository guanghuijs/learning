<template>
  <div ref="helloChartRef" class="chart"></div>
</template>
<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref } from 'vue';
  import { useECharts } from '@/utils';

  let chart;
  const helloChartRef = ref();
  const theme = ref('dark');

  onMounted(() => {
    chart = useECharts(helloChartRef.value, {
      xAxis: {
        // x轴
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {
        // y轴
      },
      toolbox: {
        // 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox
        feature: {
          // 按钮的位置和配置参数的排序有关
          restore: {}, // 刷新按钮
          dataZoom: {
            // 缩放按钮
            yAxisIndex: false, // 不选取y轴的坐标（就是全选y轴）
          },
          saveAsImage: {}, // 保存为图片的按钮
        },
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
