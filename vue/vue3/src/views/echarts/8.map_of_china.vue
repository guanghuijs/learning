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
      geo: {
        map: 'china',
        roam: true, // 是否开启放大缩小/拖拽功能
        zoom: 1.2, // 缩放比列
        layoutCenter: ['50%', '50%'], // 地图中心点位置
        layoutSize: '100%',
        label: {
          show: true,
          color: '#fff',
        },
        itemStyle: {
          areaColor: '#12235c',
          borderColor: '#2ab8ff',
          borderWidth: 0.5,
          shadowColor: 'rgba(0,54,255, 0.4)',
          shadowBlur: 100,
        },
        emphasis: {
          //区域激活时的样式
          itemStyle: {
            areaColor: '#02102b',
          },
          label: {
            color: '#fff',
          },
        },
      },
      series: [
        {
          // 带有涟漪特效动画的散点（气泡）图
          type: 'effectScatter',
          coordinateSystem: 'geo',
          showEffectOn: 'render',
          zlevel: 1,
          rippleEffect: {
            number: 3, // 波纹的数量。
            period: 5, // 动画的周期，秒数。
            scale: 17, // 动画中波纹的最大缩放比例。
            brushType: 'fill', // 波纹的绘制方式，可选 'stroke' 和 'fill'。
          },
          symbolSize: 2,
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
