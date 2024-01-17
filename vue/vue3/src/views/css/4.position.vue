<template>
  <div style="height: 10vh"></div>
  <div class="target" :style="{ position: po }">
    {{ po }}
  </div>
  <div class="option">
    <div
      v-for="(item, index) in ['relative', 'fixed', 'absolute', 'sticky']"
      :key="index"
      @click="chosePosition(item)"
    >
      {{ item }}
    </div>
  </div>
  <div style="height: 100vh"></div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  const po = ref<string>('static');
  const chosePosition = (p: string) => {
    po.value = p;
  };
</script>
<style lang="less" scoped>
  .target {
    width: 100px;
    height: 100px;
    background: red;
    top: 0;
    right: 0;
    position: inherit;
  }

  //initial 开始值
  //static 元素的默认值，即没有定位，遵循正常的文档流对象。
  //relative 相对定位元素的定位是相对其正常位置。
  //fixed 元素的位置相对于浏览器窗口是固定位置。
  //absolute 绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>:
  //sticky 基于用户的滚动位置来定位。
  //inherit 继承父级属性
</style>
