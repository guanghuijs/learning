<template>
  <div class="box">
    <div class="option-container">
      <div class="flex-between">
        <span>渲染器背景色:</span>
        <input @input="setClearColor($event)" value="#000000" type="color" />
      </div>
      <div class="flex-between">
        <span>模型颜色:</span>
        <input @input="setMeshBasicMaterialColor($event)" value="#ff0000" type="color" />
      </div>
      <div class="position_opt flex-between">
        <span>相机位置:</span>
        <div class="position_opt_right">
          <div>
            <span>X:</span><input @input="setCameraP($event, 'x')" value="1" type="number" />
          </div>
          <div>
            <span>Y:</span><input @input="setCameraP($event, 'y')" value="1" type="number" />
          </div>
          <div>
            <span>Z:</span><input @input="setCameraP($event, 'z')" value="5" type="number" />
          </div>
        </div>
      </div>
      <!--      <div class="flex-between">-->
      <!--        <span>显示灯光:</span>-->
      <!--        <input type="checkbox" />-->
      <!--      </div>-->
      <!--      <div class="flex-between">-->
      <!--        <span>显示投影:</span>-->
      <!--        <input type="checkbox" />-->
      <!--      </div>-->
      <!--      <div class="flex-between">-->
      <!--        <span>显示平面:</span>-->
      <!--        <input type="checkbox" />-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup>
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  import Stats from 'three/examples/jsm/libs/stats.module.js';
  import { onMounted, ref } from 'vue';

  const meshBasicMaterialColor = ref('#ff000');

  let scene, camera, renderer, stats, geometry, material, cube, controls, container;

  const init = () => {
    /**
     *
     * @type {Scene}
     * add(object)  用于向场景中添加对象。使用该方法还可以创建对象组。
     * children  用于返回一个场景中所有对象的列表，包括摄像机和光源。
     * getObjectByName(name,recursive)  在创建对象时可以指定唯一的标识 name，使用该方法可以查找特定名字的对象。
     * 当参数 recursive 设置为 false 时，在调用者子元素上查找
     * 当参数 recursive 设置为 true 时，在调用者的所有后代对象上查找
     *  remove(object)  object 为场景中对象的引用，使用该方法可以将对象从场景中移除
     *  traverse(function)  该方法也可以遍历调用者和调用者的所有后代，function 参数是一个函数，被调用者和每一个后代对象调用 function 方法。
     *  fog  使用该属性可以为场景添加雾化效果，可以产生隐藏远处物体的浓雾效果。
     *  overrideMaterial  使用该属性可以强制场景中的所有物体使用相同的材质。
     * 原文出自：www.hangge.com  转载请保留原文链接：https://www.hangge.com/blog/cache/detail_1783.html
     */
    scene = new THREE.Scene();
    scene.background = 'red';
    container = document.querySelector('.box');
    /**
     * @type {PerspectiveCamera}
     * 透视相机
     * PerspectiveCamera(fov, aspect, near, far)
     * fov  视场：即可以看到的角度范围，人的视场大约是180度，一般游戏的视场为60度到90度，推荐默认值45
     * aspect  长宽比：这个是渲染结果输出区域的横向长度和纵向长度的比值；长宽比决定了水平视场和垂直视场之间的比例关系，推荐默认值：window.innerWidth/window.innerHeight
     * near  近面：基于相机位置，表示从这里开始渲染场景；一般会设置一个很小的值，推荐默认值0.1
     * far  远面：基于相机位置，表示停止渲染的位置；要注意设置合适的距离，如果设置太小，部分场景可能渲染不到，但如果设置的太大，会影响渲染的效率，默认值1000
     */

    /**
     *
     * @type {OrthographicCamera}
     * 正投影相机
     * left  左边界：可渲染部分的左边界
     * right  右边界：可渲染部分的右边界
     * top  上边界：可渲染部分的上边界
     * bottom  下边界：可渲染部分的下边界
     * near  近面：基于相机位置，表示从这里开始渲染场景；一般会设置一个很小的值，默认值0.1
     * far  远面：基于相机位置，表示停止渲染的位置；要注意设置合适的距离，保证场景全部可见，默认值1000
     * 原文链接：https://blog.csdn.net/qw8704149/article/details/108351628
     */
    camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      1,
      1000
    );
    camera.position.set(0, -14, 3);
    /**
     *
     * antialias: true, // true/false表示是否开启反锯齿
     * alpha: true, // true/false 表示是否能够设置背景色透明
     * precision: 'highp', // highp/mediump/lowp 表示着色精度选择
     * premultipliedAlpha: false, // true/false 表示是否能够设置像素深度（用来度量图像的分辨率）
     * preserveDrawingBuffer: true, // true/false 表示是否保存绘图缓冲
     * maxLights: 3, // 最大灯光数
     * stencil: false // false/true 表示是否使用模板字体或图案
     * @type {WebGLRenderer}
     */
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor('#000000');
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 新建地面网格对象
    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    // 新建材质
    const MeshLambertMaterial = new THREE.MeshLambertMaterial({
      roughness: 0.8,
      color: 0xffffff,
      bumpScale: 0.0005,
    });
    // 给地面网格添加材质

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/hdrls/jpg/neon_photostudio_1k.jpg', function (map) {
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      // map.anisotropy = 4;
      // map.repeat.set( 10, 24 );
      // map.encoding = THREE.sRGBEncoding;
      MeshLambertMaterial.map = map;
      MeshLambertMaterial.needsUpdate = true;
      render();
    });

    const planeGeometryCube = new THREE.Mesh(planeGeometry, MeshLambertMaterial);
    scene.add(planeGeometryCube, new THREE.AmbientLight(0x333333));

    // 创建盒子
    geometry = new THREE.BoxGeometry(1, 1, 1);
    // 材质
    material = new THREE.MeshBasicMaterial({ color: 'red' });
    // 给盒子添加材质
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, 1.5);
    cube.name = 'ctrlObj';
    scene.add(cube);

    const animate = () => {
      render();
    };

    animate();
    render();

    controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
    controls.addEventListener('change', animate); //监听鼠标、键盘事件
    container.appendChild(renderer.domElement);
  };

  const setClearColor = (e) => {
    renderer.setClearColor(e.target.value);
    render();
  };

  const setMeshBasicMaterialColor = (e) => {
    material = new THREE.MeshBasicMaterial({ color: e.target.value });
    scene.getObjectByName('ctrlObj').material = new THREE.MeshBasicMaterial({
      color: e.target.value,
    });
    render();
  };

  const setCameraP = (ev, p) => {
    camera.position[p] = ev.target.value;
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
