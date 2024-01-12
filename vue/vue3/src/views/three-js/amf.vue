<template>
  <div class="box">
    <div class="option-container">
      <div class="flex-between">
        <span>渲染器背景色:</span>
        <input @input="setClearColor($event)" value="#000000" type="color" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader.js';
  import { onMounted } from 'vue';

  let scene, camera, renderer, container, controls;

  const init = () => {
    scene = new THREE.Scene();

    // scene.background = new THREE.Color( 0x999999 );

    scene.add(new THREE.AmbientLight(0x999999));

    container = document.querySelector('.box');

    camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      1,
      500
    );
    camera.up.set(0, 0, 1);
    camera.position.set(0, -9, 6);
    // 相机添加灯光
    camera.add(new THREE.PointLight(0xffffff, 0.8));

    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);

    const grid = new THREE.GridHelper(50, 50, 0xffffff, 0x555555);
    grid.rotateOnAxis(new THREE.Vector3(1, 0, 0), 90 * (Math.PI / 180));
    scene.add(grid);

    renderer.setClearColor('#f2f2f2');
    if (renderer.domElement) {
      container.appendChild(renderer.domElement);
    }
    new AMFLoader().load('/models/amf/rook.amf', (amfObject) => {
      amfObject.name = 'amfTest';
      scene.add(amfObject);
      render();
    });

    const animate = () => {
      render();
    };

    function fn(t) {
      if (t.isMesh) {
        // 先消耗默认的材质
        if (t.material.dispose) {
          t.material.dispose();
          // 重新给一个材质
          t.material = material;
        } else if (Array.isArray(t.material)) {
          for (let i = 0; i < t.material.length; i++) {
            t.material[i].dispose();
            t.material[i] = material;
          }
        }
      }
    }

    animate();
    render();

    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', animate);
    container.appendChild(renderer.domElement);
  };

  const setClearColor = (e) => {
    renderer.setClearColor(e.target.value);
    render();
  };

  const render = () => {
    renderer.render(scene, camera);
  };

  onMounted(() => {
    init();
    render();
  });
</script>

<style scoped lang="less">
  .box {
    width: 100%;
    height: 100%;
  }

  .option-container {
    position: absolute;
    width: 200px;
    height: 300px;
    background: white;
    top: 10px;
    right: 10px;
    padding: 10px;
    border-radius: 5px;
    .flex-between {
      padding: 5px 0;
      input[type='color'] {
        border: 1px #999 solid;
        height: 24px;
        border-radius: 4px;
      }
    }
    .position_opt {
      input {
        width: 40px;
        outline: 0;
      }
      .position_opt_right {
        div {
          margin-top: 5px;
        }
        span {
          margin-right: 10px;
          display: inline-block;
          width: 20px;
        }
      }
    }
  }
</style>
