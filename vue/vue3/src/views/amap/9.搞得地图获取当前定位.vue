<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import { NButton } from 'naive-ui';
  import { useAMap } from '@/utils';

  let map: any = null;

  function getAddress() {
    useAMap((AMap: any) => {
      map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
      });
      AMap.plugin('AMap.Geolocation', function () {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000,
          position: 'RB', //定位按钮的停靠位置
          extensions: 'all',
          panToLocation: true,
          zoomToAccuracy: true,
          needAddress: true,
        });
        map.addControl(geolocation);
        (
          geolocation as any
        ).getCurrentPosition!!((status: any, result: any) => {
          if (status == 'complete' && result.info == 'SUCCESS') {
            const { addressComponent, position, aois } = result;
            const loAndLa = position.toString().split(',');
            console.log(addressComponent, position, aois, loAndLa);
          } else {
          }
        });
      });
    });
  }

  onUnmounted(() => {
    map?.destroy();
  });
</script>

<template>
  <div id="container"></div>
  <n-button @click="getAddress">获取当前定位</n-button>
</template>

<style scoped>
  #container {
    width: 100%;
    height: 200px;
  }
</style>
