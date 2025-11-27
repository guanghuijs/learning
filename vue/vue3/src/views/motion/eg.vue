<script setup lang="ts">
  import { motion } from 'motion-v';
  import { ref } from 'vue';

  const show = ref(false);
</script>

<template>
  <motion.div v-show="show" class="item" :animate="{ opacity: 1 }">
  </motion.div>
  <motion.div
    v-show="show"
    class="item"
    :initial="{ height: '0px' }"
    :animate="{ height: 'auto' }"
  />
  <div @click="show = !show">6666</div>
  <motion.div
    class="item"
    :animate="{ x: 100 }"
    :transition="{ ease: 'easeOut', duration: 2 }"
  />

  <div class="text-container">
    这是一段示例文本，用于展示CSS文字对齐的过渡动画效果。
  </div>
</template>

<style scoped lang="scss">
  .item {
    width: 50px;
    height: 50px;
    background: palevioletred;
  }

  .text-container {
    width: 300px;
    border: 1px solid #ccc;
    padding: 20px;
    text-align: left; /* 初始对齐方式 */
    transition: text-align 0.5s ease; /* 添加过渡效果 */
  }

  .text-container:hover {
    text-align: right; /* 鼠标悬停时的对齐方式 */
  }
</style>

<route lang="yaml">
meta:
  title: 例子
  sort: 1
</route>

