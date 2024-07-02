<script setup lang="ts">
  import { useSysStoreRefs } from '@/stores/sys';
  const { primaryColor } = useSysStoreRefs();
</script>

<template>
  <div class="container"></div>
</template>

<style scoped lang="less">
  .container {
    height: 100%;
    background-color: v-bind(primaryColor);
    background-image: linear-gradient(
        to right,
        #1c3434 1px,
        transparent 1px,
        transparent 10px
      ),
      linear-gradient(to bottom, #1c3434 1px, transparent 1px, transparent 10px);
    background-size: 20px 20px;
  }
</style>
