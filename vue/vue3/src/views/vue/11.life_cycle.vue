<template>
  <button @click="flag = !flag">按钮{{flag}}</button>
</template>
<script lang='ts' setup>
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref} from 'vue';
  // 重要
  console.log('setup');
  // 一般在这里初始化变量
  const flag = ref(true);
  onBeforeMount(() => {
    console.log('onBeforeMount');
  });
  onMounted(() => {
    //重要
    console.log('onMounted');
    // 挂载完成,一般在这里发送http请求,完成数据渲染,绑定自定义事件
    // 这里可以获取dom,操作dom
  });
  onBeforeUpdate(() => {
    console.log('onBeforeUpdate');
  });
  onUpdated(() => {
    console.log('onUpdated');
    // 数据更新后被调用
  });
  onBeforeUnmount(() => {
    console.log('onBeforeUnmount');
  });
  onUnmounted(() => {
    // 重要
    console.log('onUnmounted');
    // 一般在这里清除定时器,取消消息订阅,解除绑定事件
  });
</script>
<style lang='less' scoped>
</style>