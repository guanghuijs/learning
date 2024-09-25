<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const p = ref();

  onMounted(() => {
    if ('geolocation' in navigator) {
      // 浏览器支持 Geolocation
      navigator.geolocation.getCurrentPosition((res) => {
        console.log(res.coords);
        p.value = res;
      });
    } else {
      // 浏览器不支持 Geolocation
    }
  });
</script>

<template>{{ p.coords }}</template>

<style scoped lang="less"></style>
