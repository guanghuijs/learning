<template>
  <page title="覆盖物">
    <div class="box">
      <div class="result">{{ source }}</div>
      <n-button @click="copy()">
        <!-- by default, `copied` will be reset in 1.5s -->
        <span v-if="!copied">复制</span>
        <span v-else>已复制</span>
      </n-button>
    </div>
    <div id="container" class="container" ref="container"></div>
    <n-select
      v-model:value="overlay"
      style="margin-top: 20px"
      :options="
        ['Marker', 'Polyline', 'Circle', 'Polygon', 'Label', 'Marker3D'].map(
          (value) => ({
            value,
            label: value,
          })
        )
      "
    >
    </n-select>
  </page>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref, unref, watch } from 'vue';
  import { useClipboard } from '@vueuse/core';
  import { NSelect, NButton } from 'naive-ui';

  import { Page } from '@packages/components';

  import { loadBMapGL } from '@/utils';

  const container = ref();
  const overlay = ref('Marker');
  const map = ref();

  const source = ref('102.85076697175514, 24.89248383034783');
  const { copy, copied } = useClipboard({ source });

  onMounted(async () => {
    await initMap(container.value);
  });

  watch(overlay, async (value) => {
    await initMap(container.value);
  });

  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom);
    _map.centerAndZoom(
      new BMapGL.Point(102.66176448738847, 25.095927154191205),
      18
    );
    _map.enableScrollWheelZoom(true);
    _map.addEventListener('click', (e) => {
      source.value = `${e.latlng.lng},${e.latlng.lat}`;
    });

    if (unref(overlay) === 'Marker') {
      _map.clearOverlays();

      const marker = new BMapGL.Marker(
        new BMapGL.Point(102.66190821626998, 25.095869901942454),
        {
          enableDragging: true,
        }
      );

      marker.addEventListener('click', () => {
        _map.openInfoWindow(
          new BMapGL.InfoWindow('地址：昆明五华区大河埂地铁站', {
            width: 200,
            height: 100,
            title: '地铁站',
          }),
          new BMapGL.Point(102.66190821626998, 25.095869901942454)
        ); // 开启信息窗口
      });
      _map.addOverlay(marker);

      _map.addOverlay(
        new BMapGL.Marker(
          new BMapGL.Point(102.66232143680443, 25.094904597341667),
          {
            enableDragging: true,
            icon: new BMapGL.Icon(
              'https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492',
              new BMapGL.Size(50, 50)
            ),
          }
        )
      );
    } else if (unref(overlay) === 'Polyline') {
      _map.clearOverlays();
      _map.addOverlay(
        new BMapGL.Polyline(
          [
            new BMapGL.Point(102.65981516443243, 25.09663886789298),
            new BMapGL.Point(102.66192618238017, 25.095943526553533),
            new BMapGL.Point(102.6613063515785, 25.09422560728852),
          ],
          {
            strokeColor: 'red',
            strokeWeight: 2,
            strokeOpacity: 0.5,
          }
        )
      );
    } else if (unref(overlay) === 'Circle') {
      _map.clearOverlays();
      _map.addOverlay(
        new BMapGL.Circle(
          new BMapGL.Point(102.66190821626998, 25.095869901942454),
          100,
          {
            strokeColor: 'blue',
            strokeWeight: 2,
            strokeOpacity: 0.5,
          }
        )
      );
    } else if (unref(overlay) === 'Polygon') {
      _map.clearOverlays();
      _map.addOverlay(
        new BMapGL.Polygon(
          [
            new BMapGL.Point(102.66078533438288, 25.09687610108273),
            new BMapGL.Point(102.66358804757309, 25.09598442909589),
            new BMapGL.Point(102.66308499648767, 25.094708263260046),
            new BMapGL.Point(102.66003075775475, 25.095616305716906),
          ],
          {
            strokeColor: 'blue',
            strokeWeight: 2,
            strokeOpacity: 0.5,
            backgroundColor: 'black',
          }
        )
      );
    }
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
  .box {
    .result {
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      margin-right: 10px;
    }
  }
</style>
