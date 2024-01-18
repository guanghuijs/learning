<script setup lang="ts"></script>

<template>
  <div v-for="i in 5" :key="i" :class="`item${i}`">{{ i }}</div>
</template>

<style scoped lang="less">
  each(range(5),{
  .item@{value}{
    position: relative;
    &::after{
      content:  '@{value}';
      position: absolute;
      width: min(20px,30px);
      height: max(20px,30px);
      background: #22C704;
      left: 60px * @value;
    }
  }
});
</style>
