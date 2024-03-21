<template>
  <div>原数组:{{ arr }}</div>
  <div class="flex-between">
    <n-button @click="resetArr">数据重置</n-button>
    <n-button @click="resetChart">图表重置</n-button>
    <div class="flex-star" style="padding: 10px 0">
      选择排序方式:<n-select style="width: 200px"></n-select>
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

  watch(primaryColor, (value) => {
    const [_] = chart!;
    _.setOption(series(unref(arr)));
  });

  const arr = ref<Array<number>>(
    Array.from({ length: 30 }, () => Random.integer(0, 100))
  );

  let chart;
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
        data: Array.from({ length: 30 }, (_, i) => i),
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
        itemStyle: {
          color: function (params: any) {
            return hexToRgba(primaryColor.value, params.value);
          },
        },
      },
    });
  });

  const resetArr = () => {
    const [_] = chart!;
    arr.value = Array.from({ length: 30 }, () => Random.integer(0, 100));
    _.setOption(series(unref(arr)));
  };

  const resetChart = () => {
    const [_] = chart!;
    _.setOption(series(unref(arr)));
  };

  const startSort = () => {
    sortHelper.bubble(chart!, [...arr.value], primaryColor.value, () => {
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
