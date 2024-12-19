<script setup>
  import { onMounted, onUnmounted } from 'vue';

  import { Page } from '@packages/components';
  import { useAMap } from '@/utils';

  let map = null;
  onMounted(() => {
    useAMap((AMap) => {
      map = new AMap.Map('container', {
        // 设置地图容器id
        viewMode: '3D', // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
        center: [116.397428, 39.90923], // 初始化地图中心点位置
      });

      //异步加载控件
      AMap.plugin('AMap.ToolBar', function () {
        const toolbar = new AMap.ToolBar(); //缩放工具条实例化
        map.addControl(toolbar);
      });
      AMap.plugin('AMap.HawkEye', function () {
        const hawkEye = new AMap.HawkEye({
          position: {
            top: '100px',
            right: '100px',
          },
        }); //缩放工具条实例化
        map.addControl(hawkEye);
      });
      AMap.plugin('AMap.Scale', function () {
        const scale = new AMap.Scale(); //缩放工具条实例化
        map.addControl(scale);
      });
      AMap.plugin('AMap.ControlBar', function () {
        const controlBar = new AMap.ControlBar(); //缩放工具条实例化
        map.addControl(controlBar);
      });
      AMap.plugin('AMap.MapType', function () {
        const mapType = new AMap.MapType(); //缩放工具条实例化
        map.addControl(mapType);
      });
    });
  });

  onUnmounted(() => {
    map?.destroy();
  });
</script>

<template>
  <page title="控件">
    <div id="container"></div>
  </page>
</template>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
