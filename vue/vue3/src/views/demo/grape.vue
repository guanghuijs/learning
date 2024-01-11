<script setup lang="ts">
  import { Grape } from '@/components/Grape';
  const fn = (res: string) => {
    console.log(res);
  };
</script>

<template>
  <Grape @item-click="fn" />
</template>

<style scoped lang="less"></style>
