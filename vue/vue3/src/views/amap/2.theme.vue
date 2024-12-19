<script setup>
  import { onMounted, onUnmounted } from 'vue';

  import { Page } from '@packages/components';
  import { useAMap } from '@/utils';

  let map = null;
  onMounted(() => {
    useAMap((AMap) => {
      map = new AMap.Map('container', {
        // 设置样式
        mapStyle: 'amap://styles/whitesmoke',
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
      });
    });
  });

  onUnmounted(() => {
    map?.destroy();
  });
</script>

<template>
  <page title="主题">
    <div id="container"></div>
  </page>
</template>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
