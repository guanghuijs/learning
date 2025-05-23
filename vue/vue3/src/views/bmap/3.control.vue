<template>
  <page title="控件">
    <div id="container" class="container" ref="container"></div>
  </page>
</template>

<script setup lang="ts">
  // @ts-nocheck
  import { onMounted, ref } from 'vue';
  import { loadBMapGL } from '@/utils';
  import { NButton, NSwitch } from 'naive-ui';
  import { h, render } from 'vue';
  import { Page } from '@packages/components';

  const container = ref();

  const enableScrollWheelZoomSwitch = ref(false);

  onMounted(async () => {
    await initMap(container.value);
  });

  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom);
    // 初始化地图，设置中心点坐标和地图级别
    _map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 18);

    // 添加比例尺控件
    _map.addControl(new BMapGL.ScaleControl());
    // 添加缩放控件
    _map.addControl(new BMapGL.ZoomControl());
    // 3d控件
    _map.addControl(new BMapGL.NavigationControl3D());

    const locationControl = new BMapGL.LocationControl({
      // 控件的停靠位置（可选，默认左上角）
      anchor: BMAP_ANCHOR_TOP_RIGHT,
      // 控件基于停靠位置的偏移量（可选）
      offset: new BMapGL.Size(20, 20),
    });
    _map.addControl(locationControl);
    locationControl.addEventListener('locationSuccess', function (e) {
      console.log(e);
    });

    _map.addControl(
      new BMapGL.CityListControl({
        // 控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_LEFT,
      })
    );

    /** 自定义放大地图层级控件 **/
    function ZoomControl({
      anchor = BMAP_ANCHOR_TOP_LEFT,
      offset = new BMapGL.Size(20, 60),
    } = {}) {
      this.defaultAnchor = anchor;
      this.defaultOffset = offset;
    }

    //通过JavaScript的prototype属性继承于BMap.Control
    ZoomControl.prototype = new BMapGL.Control();

    //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
    //在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
    ZoomControl.prototype.initialize = function (map) {
      const btn = h(
        NButton,
        {
          type: 'warning',
          onclick: () => {
            map.setZoom(map.getZoom() + 1);
          },
        },
        {
          default: () => '放大一级',
        }
      );
      const div = document.createElement('div');
      map.getContainer().appendChild(div);
      // 这里使用render函数把ant组件渲染到控件中
      render(btn, div);
      return div;
    };
    _map.addControl(new ZoomControl());
    /** 自定义放大地图层级控件 **/

    /** 自定义鼠标滚轮控制地图层级开关控件 **/
    function enableScrollWheelZoomControl({
      anchor = BMAP_ANCHOR_TOP_LEFT,
      offset = new BMapGL.Size(20, 120),
    } = {}) {
      this.defaultAnchor = anchor;
      this.defaultOffset = offset;
    }

    //通过JavaScript的prototype属性继承于BMap.Control
    enableScrollWheelZoomControl.prototype = new BMapGL.Control();

    //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
    //在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
    enableScrollWheelZoomControl.prototype.initialize = function (map) {
      const btn = h(NSwitch, {
        checked: enableScrollWheelZoomSwitch,
        ['onUpdate:checked']: async (checked) => {
          enableScrollWheelZoomSwitch.value = checked;
          if (checked) {
            //开启鼠标滚轮缩放
            map.enableScrollWheelZoom();
          } else {
            //关闭鼠标滚轮缩放
            map.disableScrollWheelZoom();
          }
        },
      });
      const div = document.createElement('div');
      map.getContainer().appendChild(div);
      // 这里使用render函数把ant组件渲染到控件中
      render(btn, div);
      return div;
    };
    _map.addControl(new enableScrollWheelZoomControl());
    /** 自定义鼠标滚轮控制地图层级开关控件 **/
  }
</script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
</style>
