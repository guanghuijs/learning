<script setup>
  import { onMounted, onUnmounted } from 'vue';
  import { useAMap } from '@/utils';
  import { useSysStoreRefs } from '@/stores/sys';
  import loca from '@/assets/_yy-location.png';

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
        offset: new AMap.Pixel(-13, -30), //以 icon 的 [center bottom] 为原点
      });
      map.add(marker);

      const marker1 = new AMap.Marker({
        position: position,
        icon: loca,
        offset: new AMap.Pixel(-13, -30), //以 icon 的 [center bottom] 为原点
      });
      map.add(marker1);
      // 标记点点击事件
      document.querySelector('.bmap.marker').onclick = function (e) {};
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
  <div id="container"></div>
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
  }
</style>
