<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const p = ref();

  onMounted(() => {
    if ('geolocation' in navigator) {
      // 浏览器支持 Geolocation
      navigator.geolocation.getCurrentPosition((res) => {
        p.value = res;
      });
    } else {
      // 浏览器不支持 Geolocation
    }
  });
</script>

<template>{{ p }}</template>

<style scoped lang="less"></style>

<route lang="yaml">
meta:
  title: 浏览器定位api
  sort: 4
</route>
