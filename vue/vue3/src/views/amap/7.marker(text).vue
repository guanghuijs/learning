<script setup>
  import { onMounted, onUnmounted } from 'vue';

  import { Page } from '@packages/components';

  import { useAMap } from '@/utils';
  import { useSysStoreRefs } from '@/stores/sys';

  const { primaryColor } = useSysStoreRefs();

  let map, marker;
  onMounted(() => {
    useAMap((AMap) => {
      map = new AMap.Map('container', {
        viewMode: '3D',
        zoom: 11,
        center: [102.86775401882852, 24.876217395873415],
      });
      marker = new AMap.Text({
        position: new AMap.LngLat(102.86775401882852, 24.876217395873415),
        anchor: 'bottom-center',
        text: `102.86775401882852, 24.876217395873415`,
        style: { 'background-color': 'red' },
      });
      map.add(marker);
      map.on('click', ({ lnglat }) => {
        if (marker) {
          marker.setMap(null);
          marker = null;
        }
        // 文本标记
        marker = new AMap.Text({
          position: new AMap.LngLat(lnglat.lng, lnglat.lat),
          anchor: 'bottom-center',
          text: `${lnglat.lng},${lnglat.lat}`,
          style: { 'background-color': 'red' },
        });
        map.add(marker);
      });
    });
  });

  onUnmounted(() => {
    map?.destroy();
  });
</script>

<template>
  <page title="点标记(文本)">
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
