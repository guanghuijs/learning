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
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight
    );
    camera.position.set(0, 0, 5);

    // 渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);

    /**
     *
     * radius  可选。此属性定义球体的半径。
     * widthSegments  可选。此属性定义球体竖直（维度）方向上的分段数。默认值是 8，最小值是 3
     * heightSegments  可选。此属性定义球体水平（经度）方向上的分段数。默认值是 6，最小值是 2
     * phiStart  可选。此属性定义从 x 轴的什么地方开始绘制。取值范围是 0 到 2*π
     * phiLength  可选。此属性定义从 phiStart 开始绘制多少。取值范围是 0 到 2*π
     * thetaStart  可选。此属性定义从 y 轴的什么地方开始绘制。取值范围是 0 到 π
     * thetaLength  可选。此属性定义从 thetaStart 开始绘制多少。取值范围是 0 到 π。一个 π 是整球，0.5*π只绘制上半球
     * 版权声明：本文为CSDN博主「zhulx_sz」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
     * 原文链接：https://blog.csdn.net/zhulx_sz/article/details/78810532
     * @type {SphereGeometry}
     */
    const sphere = new THREE.SphereGeometry(1, 64, 64);
    const box = new THREE.BoxGeometry(2, 2, 2);

    const textureLoader = new THREE.TextureLoader();

    textureLoader.load('/hdrls/png/earth.png', function (texture) {
      texture.wrapS = THREE.RepeatWrapping; //质地.包裹
      texture.wrapT = THREE.RepeatWrapping;
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });
      const mesh = new THREE.Mesh(sphere, material);
      mesh.position.set(-1, 0, 0);
      const mesh1 = new THREE.Mesh(box, material);
      mesh1.position.set(1, 0, 0);
      scene.add(mesh, mesh1);
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
<style lang="less" scoped>
  .box {
    width: 100%;
    height: 100%;
  }
</style>


<route lang="yaml">
meta:
  title: 纹理加载器
  sort: 1
</route>
