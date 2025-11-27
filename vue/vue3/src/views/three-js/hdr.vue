<template>
  <div className="box"></div>
</template>

<script setup>
  // 引入
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { onMounted } from 'vue';
  import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

  let scene, camera, renderer;

  const init = () => {
    // 场景
    scene = new THREE.Scene();

    // 容器
    const container = document.querySelector('.box');

    // 相机
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight
    );
    camera.position.set(0, 0, 5);

    // 渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);

    new RGBELoader().load('/hdrls/hdr/venice_sunset_1k.hdr', (hdr) => {
      hdr.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = hdr;
      scene.environment = hdr;
      render();
    });

    const animate = () => {
      render();
    };

    render();

    const controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
    controls.addEventListener('change', animate); //监听鼠标、键盘事件
    container.appendChild(renderer.domElement);
  };

  const render = () => {
    renderer.render(scene, camera);
  };

  onMounted(() => {
    init();
  });
</script>
<style scoped lang="less">
  .box {
    width: 100%;
    height: 100%;
  }
</style>


<route lang="yaml">
meta:
  title: 高动态范围成像
  sort: 1
</route>
