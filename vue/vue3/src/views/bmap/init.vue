<template>
  <page title="百度地图初体验">
    <div id="container" class="container" ref="container"></div>
  </page>
</template>

<script setup lang="ts">
  // @ts-nocheck 忽略全文,要写到首行
  import { onMounted, ref } from 'vue';
  // @ts-ignore 忽略单行校验
  import { loadBMapGL } from '@/utils';
  import { Page } from '@packages/components';

  const container = ref();

  onMounted(async () => {
    await initMap(container.value);
  });

  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom, {
      enableDblclickZoom: true,
      enableMapClick: false,
      displayOptions: {
        building: false,
      },
      enableRotate: false,
      enableTilt: false,
    });
    // 创建点坐标
    const point = new BMapGL.Point(99.657606, 27.302755);
    // 初始化地图，设置中心点坐标和地图级别
    _map.centerAndZoom(point, 18);
    //开启鼠标滚轮缩放
    _map.enableScrollWheelZoom(true);
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
</style>

<route lang="yaml">
meta:
  title: 地图初始化
  sort: 1
</route>
