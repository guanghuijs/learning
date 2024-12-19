<script setup lang="ts">
  import { Page } from '@packages/components';
  import { Grape } from '@/components/Grape';
  const fn = (res: string) => {
    console.log(res);
  };
</script>

<template>
  <page title="葡萄图">
    <Grape @item-click="fn" />
  </page>
</template>

<style scoped lang="less"></style>
