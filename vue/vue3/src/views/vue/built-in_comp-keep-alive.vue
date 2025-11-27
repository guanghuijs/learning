<template>
  <button @click="index ? (index = 0) : (index = 1)">按钮{{ index }}</button>
  <KeepAlive>
    <component :is="[comA, comB][index]"></component>
  </KeepAlive>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import comA from './modifier.vue';
  import comB from './form_input.vue';
  const index = ref(0);
</script>

<style lang="less" scoped></style>

<route lang="yaml">
meta:
  title: 保持活性组件
  sort: 25
</route>
