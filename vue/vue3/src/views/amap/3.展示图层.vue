<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import { useAMap } from '@/utils';

  import { NButton } from 'naive-ui';

  let map: any = null;
  const traffic = ref<any>();
  onMounted(() => {
    useAMap((AMap: any) => {
      const layer = new AMap.createDefaultLayer({
        zooms: [3, 20], //可见级别
        visible: true, //是否可见
        opacity: 1, //透明度
        zIndex: 0, //叠加层级
      });

      map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
        layers: [layer], //layer为创建的默认图层
      });

      traffic.value = new AMap.TileLayer.Traffic({
        autoRefresh: true, //是否自动刷新，默认为false
        interval: 180, //刷新间隔，默认180s
      });
      map.add(traffic.value); //通过add方法添加图层
    });
  });

  const show = () => {
    traffic.value.show();
  };
  const hidden = () => {
    traffic.value.hide();
  };

  onUnmounted(() => {
    map?.destroy();
  });
</script>

<template>
  <div id="container"></div>
  <n-button @click="show">显示</n-button>
  <n-button @click="hidden">隐藏</n-button>
</template>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
