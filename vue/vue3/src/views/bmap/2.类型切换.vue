<template>
  <n-select v-model:value="selectType" :options="mapType" @change="mapTypeChange" />
  <div id="container" class="container" ref="container"></div>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref } from 'vue';
  import { loadBMapGL } from '@/utils';

  import { NSelect } from 'naive-ui';
  import type { SelectOption } from 'naive-ui';

  const container = ref();
  const selectType = ref('默认');

  const mapType: SelectOption[] = [
    {
      value: '默认',
      label: '默认',
    },
    {
      value: '地球模式',
      label: '地球模式',
    },
    {
      value: '普通卫星地图',
      label: '普通卫星地图',
    },
  ];

  const mapTypeChange = async (type) => {
    await initMap(container.value, type);
  };

  onMounted(async () => {
    await initMap(container.value);
  });

  //初始化地图
  async function initMap(dom, mapType: string = '默认') {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom, {
      enableDblclickZoom: false,
      enableMapClick: false,
      displayOptions: {
        building: false,
      },
    });
    // 创建点坐标
    const point = new BMapGL.Point(99.657606, 27.302755);
    // 初始化地图，设置中心点坐标和地图级别
    //开启鼠标滚轮缩放
    _map.enableScrollWheelZoom(true);
    if (mapType === '默认') {
      _map.centerAndZoom(point, 18);
      _map.setMapType(BMAP_NORMAL_MAP);
    } else if (mapType === '地球模式') {
      _map.centerAndZoom(point, 5);
      _map.setMapType(BMAP_EARTH_MAP);
    } else {
      _map.centerAndZoom(point, 16);
      _map.setMapType(BMAP_SATELLITE_MAP);
    }
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
    .select {
      width: 150px !important;
    }
  }
</style>
