<template>
  <h3 @click="flag = !flag">过渡组件</h3>
  <Transition>
    <div v-show="flag"></div>
  </Transition>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const flag = ref(true);
</script>

<style lang="less" scoped>
  div {
    width: 400px;
    height: 400px;
    background: pink;
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.25s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: scale(0);
  }
</style>

<route lang="yaml">
meta:
  title: 过渡组件
  sort: 23
</route>
