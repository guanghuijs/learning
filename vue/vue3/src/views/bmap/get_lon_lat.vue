<template>
  <page title="拾取经纬度">
    <div class="box">
      <div id="container" class="container" ref="mapEle"></div>
      <div class="opt">
        <div class="flex-star">
          <div class="result">{{ point }}</div>
          <n-input-number
            placeholder="复制小数点后多少位"
            v-model:value="number"
          ></n-input-number>
        </div>
        <div style="margin: 10px 0">
          <n-Button type="primary" @click="copy()">
            <span v-if="!copied">复制当前经纬度</span>
            <span v-else>已复制</span>
          </n-Button>
        </div>
        <div>{{ address.join('') }}</div>
      </div>
    </div>
  </page>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref, unref } from 'vue';
  import { useClipboard } from '@vueuse/core';
  import { NInputNumber, NButton } from 'naive-ui';
  import { loadBMapGL } from '@/utils';
  import { Page } from '@packages/components';

  const mapEle = ref();
  const map = ref();

  const point = ref('102.85076697175514,24.89248383034783');
  const address = ref<string[]>([]);
  const number = ref<number>(7);
  const source = computed<string>(() => {
    if (unref(number) > 0) {
      const [lng, lat] = unref(point).split(',');
      return `${Number(lng).toFixed(unref(number))},${Number(lat).toFixed(
        unref(number)
      )}`;
    } else {
      return unref(point);
    }
  });
  const { copy, copied } = useClipboard({ source });

  onMounted(async () => {
    await initMap();
  });

  //初始化地图
  async function initMap() {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    map.value = new BMapGL.Map(mapEle.value);
    map.value.centerAndZoom(
      new BMapGL.Point(102.85076697175514, 24.89248383034783),
      18
    );
    map.value.enableScrollWheelZoom(true);
    map.value.addControl(
      new BMapGL.CityListControl({
        // 控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_LEFT,
      })
    );
    const geoc = new BMapGL.Geocoder();
    map.value.addEventListener('click', (e: any) => {
      point.value = `${e.latlng.lng},${e.latlng.lat}`;
      map.value.clearOverlays();
      map.value.addOverlay(
        new BMapGL.Marker(new BMapGL.Point(e.latlng.lng, e.latlng.lat))
      );
      geoc.getLocation(e.latlng, (res: any) => {
        console.log(res);
        const addressArr = res.addressComponents;
        address.value = [
          addressArr['province'],
          addressArr['city'],
          addressArr['district'],
          addressArr['street'],
          addressArr['streetNumber'],
        ].filter((item) => item);
      });
    });
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
  .box {
    height: initial;
    .result {
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      margin-right: 10px;
      white-space: nowrap;
    }
  }

  .opt {
    padding: 20px 0;
  }
</style>

<route lang="yaml">
meta:
  title: 拾取经纬度
  sort: 4
</route>
