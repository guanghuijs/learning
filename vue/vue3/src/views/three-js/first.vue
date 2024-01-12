<template>
  <div class="box"></div>
</template>

<script setup>
  // 引入
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { onMounted } from 'vue';

  let scene, camera, renderer;

  const init = () => {
    // 场景
    scene = new THREE.Scene();

    // 容器
    const container = document.querySelector('.box');

    // 相机
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight);
    camera.position.set(0, 0, 5);

    // 渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);

    // 创建盒子
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // 材质
    const material = new THREE.MeshBasicMaterial({ color: 'red' });
    // 给盒子添加材质
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
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
