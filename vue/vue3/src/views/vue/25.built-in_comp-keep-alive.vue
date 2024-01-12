<template>
  <button @click="index ? (index = 0) : (index = 1)">按钮{{ index }}</button>
  <KeepAlive>
    <component :is="[comA, comB][index]"></component>
  </KeepAlive>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import comA from './9.modifier.vue';
  import comB from './10.form_input.vue';
  const index = ref(0);
</script>
<style lang="less" scoped></style>
