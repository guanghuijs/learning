<script setup>
  import { onMounted, onUnmounted } from 'vue';
  import { useAMap } from '@/utils';
  import { useSysStoreRefs } from '@/stores/sys';
  import { Page } from '@packages/components';

  const { primaryColor } = useSysStoreRefs();

  let map = null;
  onMounted(() => {
    useAMap((AMap) => {
      map = new AMap.Map('container', {
        viewMode: '3D',
        zoom: 11,
        center: [116.397428, 39.90923],
      });
      const position = new AMap.LngLat(116.397428, 39.90923);
      const marker = new AMap.Marker({
        position: position,
        content: `<div class="bmap marker">点标记</div>`, //将 html 传给 content
        offset: new AMap.Pixel(-25, -25), //以 icon 的 [center bottom] 为原点
      });
      map.add(marker);
      // 标记点点击事件
      document.querySelector('.bmap.marker').onclick = function (e) {
        console.log(e);
      };
      map.on('click', (e) => {
        console.log(e);
      });
    });
  });

  onUnmounted(() => {
    map?.destroy();
  });
</script>

<template>
  <page title="添加点标记">
    <div id="container"></div>
  </page>
</template>

<style lang="less">
  #container {
    width: 100%;
    height: 100%;
  }
  .bmap.marker {
    width: 50px;
    height: 50px;
    background: v-bind(primaryColor);
    border-radius: 50%;
  }
</style>

<route lang="yaml">
meta:
  title: 标记
  sort: 5
</route>
