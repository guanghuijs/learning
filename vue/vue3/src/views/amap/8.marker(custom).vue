<script setup>
  import { onMounted, onUnmounted, h } from 'vue';

  import { Page } from '@packages/components';

  import { useAMap } from '@/utils';
  import { useSysStoreRefs } from '@/stores/sys';
  import local from '@/assets/_yy-location.png';
  import { NButton } from 'naive-ui';

  const { primaryColor } = useSysStoreRefs();

  let map,
    marker = null;
  onMounted(() => {
    useAMap((AMap) => {
      map = new AMap.Map('container', {
        viewMode: '3D',
        zoom: 11,
        center: [102.8495453, 24.892828],
      });
      addMarker();
      map.on('click', ({ lnglat }) => {
        addMarker([lnglat.lng, lnglat.lat]);
      });
    });
  });
  function addMarker(lngLat = [102.8495453, 24.892828]) {
    if (marker) {
      marker.setMap(null);
      marker = null;
    }
    const geocoder = new AMap.Geocoder();
    geocoder.getAddress(new AMap.LngLat(lngLat[0], lngLat[1]), (_, result) => {
      marker = new AMap.Marker({
        position: new AMap.LngLat(lngLat[0], lngLat[1]),
        content: `<div class="bmap marker">
                    <img src="${local}" alt="">
                    <div class="info">
                      <div>地址:${result.regeocode.formattedAddress}</div>
                      <div>经纬度:${lngLat[0]},${lngLat[1]}</div>
                    <div>${() => h(NButton)}</div>
                    </div>
                  </div>`,
        offset: new AMap.Pixel(-15, -38), //以 icon 的 [center bottom] 为原点
      });
      map.add(marker);
      map.setCenter(lngLat);
    });
  }

  onUnmounted(() => {
    map?.destroy();
  });
</script>

<template>
  <page title="自定义点标记">
    <div id="container"></div>
  </page>
</template>

<style lang="less">
  #container {
    width: 100%;
    height: 100%;
  }
  .bmap.marker {
    position: relative;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
    }
    .info {
      background: white;
      position: absolute;
      left: 30px;
      border-radius: 5px;
      padding: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 200px;
    }
  }
</style>
