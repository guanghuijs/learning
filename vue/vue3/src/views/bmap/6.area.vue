<template>
  <page title="区域模式">
    <div id="container" class="container" ref="container"></div>
  </page>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref } from 'vue';
  import { loadBMapGL } from '@/utils';
  import { Page } from '@packages/components';

  const container = ref();
  onMounted(async () => {
    await initMap(container.value);
  });
  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom, {
      enableDblclickZoom: true,
      enableMapClick: false,
      displayOptions: {
        building: false,
      },
      enableRotate: false,
      enableTilt: false,
    });
    // 创建点坐标
    const point = new BMapGL.Point(104.10663034748738, 24.714727851308414);
    // 初始化地图，设置中心点坐标和地图级别
    _map.centerAndZoom(point, 11);
    //开启鼠标滚轮缩放
    _map.enableScrollWheelZoom(true);

    const bdary = new BMapGL.Boundary();
    bdary.get('师宗', function (rs) {
      // 绘制行政区
      for (let i = 0; i < rs.boundaries.length; i++) {
        const path = [];
        const xyArr = rs.boundaries[i].split(';');
        const ptArr = [];
        for (let j = 0; j < xyArr.length; j++) {
          const tmp = xyArr[j].split(',');
          const pt = new BMapGL.Point(tmp[0], tmp[1]);
          ptArr.push(pt);
        }
        const mapmask = new BMapGL.MapMask(ptArr, {
          isBuildingMask: true,
          isPoiMask: true,
          isMapMask: true,
          showRegion: 'inside',
          topFillColor: '#5679ea',
          topFillOpacity: 0.5,
          sideFillColor: '#5679ea',
          sideFillOpacity: 0.9,
        });
        _map.addOverlay(mapmask);
        const border = new BMapGL.Polyline(ptArr, {
          strokeColor: '#4ca7a2',
          strokeWeight: 3,
          strokeOpacity: 1,
        });
        _map.addOverlay(border);
      }

      const marker = new BMapGL.Marker3D(
        new BMapGL.Point(104.10663034748738, 24.714727851308414),
        1000,
        {
          size: 50,
          shape: 'BMAP_SHAPE_CIRCLE',
          fillColor: '#454399',
          fillOpacity: 0.6,
        }
      );
      _map.addOverlay(marker);

      _map.addOverlay(
        new BMapGL.Marker3D(
          new BMapGL.Point(104.00021214529644, 24.836091208203417),
          Math.round(Math.random()) * 6000,
          {
            size: 50,
            icon: new BMapGL.Icon(
              'https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492',
              new BMapGL.Size(30, 50)
            ),
          }
        )
      );
    });
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
</style>
