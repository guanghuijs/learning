<template>
  <button @click="flag = !flag">显示隐藏子组件</button>
  <Children v-if="flag"></Children>
</template>
<script lang="ts" setup>
  import Children from '@/components/Children.vue';
  import { ref, watch } from 'vue';
  const flag = ref(false);
  watch(flag, async (value, oldValue, onCleanup) => {
    console.log(value, oldValue, onCleanup);
  });
</script>
<style lang="less" scoped></style>
