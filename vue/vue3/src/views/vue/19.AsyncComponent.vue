<template>
  <h3>异步组件</h3>
  <div>
    <button @click="num = 0">0</button>
    <button @click="num = 1">1</button>
  </div>
  <component :is="[page1, page2][num]"></component>

  <!--  也可以直接用-->
  <page1></page1>
  <page2></page2>
</template>
<script lang="ts" setup>
  import { defineAsyncComponent, ref } from 'vue';
  const page1 = defineAsyncComponent(() => import('./1.template.vue'));
  const page2 = defineAsyncComponent(() => import('./2.reactive_base.vue'));
  const num = ref<number>(0);
</script>
<style lang="less" scoped></style>
