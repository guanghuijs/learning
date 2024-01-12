<template>
  <div>
    <h3>非响应式</h3>
    <input v-model="str" />
    <div>{{ str }}</div>
  </div>
  <div>
    <h3>响应式</h3>
    <input v-model="refStr" />
    <div>{{ refStr }}</div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const str = '渣渣辉';
  const refStr = ref('渣渣辉');
</script>
<style lang="less" scoped></style>
