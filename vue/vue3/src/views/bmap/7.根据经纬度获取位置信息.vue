<script setup lang="ts">
  import { loadBMapGL } from '@/utils';
  import { onMounted, ref } from 'vue';

  const mapEle = ref<HTMLDivElement>();
  const map = ref<any>();

  onMounted(async () => {
    await initMap();
  });

  //初始化地图
  async function initMap(coordinate: number[] = [102.850766, 24.892483]) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    map.value = new BMapGL.Map(mapEle.value, {
      enableDblclickZoom: true,
      enableMapClick: false,
      displayOptions: {
        building: false,
      },
      enableRotate: false,
      enableTilt: false,
    });
    const point = new BMapGL.Point(coordinate[0], coordinate[1]);
    map.value.centerAndZoom(point, 19);
    map.value.clearOverlays();
    map.value.addOverlay(new BMapGL.Marker(point));
    map.value.enableScrollWheelZoom(true);
    // 获取位置具体信息
    const geoc = new BMapGL.Geocoder();
    // point 是地图 Point 类
    geoc.getLocation(point, (res: any) => {
      console.log(res);
    });
  }
</script>

<template>
  <div class="map" ref="mapEle"></div>
</template>

<style lang="less" scoped>
  .map {
    height: 500px;
  }
</style>
