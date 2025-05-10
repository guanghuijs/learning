<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const flag = ref(true);

  onMounted(() => {
    const dom = document.querySelector('.layout-main');

    dom?.addEventListener('scroll', (e) => {
      console.log(dom?.scrollTop);
      flag.value = dom?.scrollTop <= 100;
    });
  });
</script>

<template>
  <div class="top">
    <div style="background: #0a98d5"></div>
    <div v-show="flag" style="background: #d50a0a"></div>
    <div style="background: #daa10e"></div>
  </div>
  <div class="content">
    <div v-for="i in 50" :key="i">{{ i }}</div>
  </div>
</template>

<style scoped lang="scss">
  .top {
    position: sticky;
    top: 0;
    div {
      height: 50px;
    }
  }

  .content {
    height: 1000px;
  }
</style>
