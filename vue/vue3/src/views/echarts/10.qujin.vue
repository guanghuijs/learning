<script setup lang="ts">
  import { onMounted, ref, unref, watch } from 'vue';
  import { NSelect } from 'naive-ui';
  import { useECharts } from '@/utils';
  import { useSysStore } from '@/stores/sys';
  const { primaryColor } = useSysStore();

  const options = [
    { label: '曲靖市', value: '曲靖市' },
    { label: '会泽县', value: '会泽县' },
    { label: '宣威市', value: '宣威市' },
    { label: '沾益区', value: '沾益区' },
    { label: '马龙区', value: '马龙区' },
    { label: '富源县', value: '富源县' },
    { label: '陆良县', value: '陆良县' },
    { label: '麒麟区', value: '麒麟区' },
    { label: '罗平县', value: '罗平县' },
    { label: '师宗县', value: '师宗县' },
  ];
  const mapType = ref('曲靖市');
  watch(mapType, () => {
    chart.setOption(chartOptions());
  });

  let chart: echarts.ECharts;
  const chartRef = ref();
  onMounted(() => {
    chart = useECharts(chartRef.value, chartOptions());
    chart.on('click', (params) => {
      console.log(params);
      if (params.componentSubType === 'map' && mapType.value === '曲靖市') {
        mapType.value = params.name;
        return;
      }
      if (params.componentSubType === 'map' && mapType.value !== '曲靖市') {
        mapType.value = '曲靖市';
        return;
      }
    });
  });
  const chartOptions = (): echarts.EChartsOption => {
    return {
      geo: {
        map: unref(mapType),
        zoom: 1.1,
        // roam: true,
        itemStyle: {
          areaColor: 'pink',
        },
        // selectedMode: 'multiple',
      },
      tooltip: {
        trigger: 'item',
        formatter(params) {
          if (params.componentSubType === 'scatter') {
            return `数量${params.data[2]}`;
          }
          return '';
        },
      },
      series: [
        {
          type: 'map',
          map: unref(mapType),
          coordinateSystem: 'geo',
          zoom: 1.1,
          label: {
            show: true,
            color: '#fff',
          },
          itemStyle: {
            areaColor: '#333',
          },
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin',
          symbolSize: [40, 40],
          // 标记里的数量
          label: {
            show: true,
            color: '#fff',
            fontSize: 10,
            formatter(value: any) {
              return value.data[2];
            },
          },
          itemStyle: {
            color: () => unref(primaryColor),
          },
          data: [
            [103.8624983, 24.8289895, 10],
            [103.7978358, 25.5320231, 20],
          ],
        },
      ],
    };
  };
</script>

<template>
  <n-select :options="options" v-model:value="mapType"></n-select>
  <div class="chart" ref="chartRef"></div>
</template>

<style scoped lang="less">
  .chart {
    height: calc(100% - 40px);
  }
</style>
