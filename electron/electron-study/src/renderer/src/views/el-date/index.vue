<script setup lang="ts">
  import { ref } from 'vue';
  import { Page } from '@/components';

  const date = ref();
</script>

<template>
  <Page title="element 时间选择器">
    <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
  </Page>
</template>

<style scoped lang="scss"></style>
