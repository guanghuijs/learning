<template>
  <button @click="index ? index = 0:index = 1">按钮{{index}}</button>
  <KeepAlive>
    <component :is="[comA,comB][index]"></component>
  </KeepAlive>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import comA from './9.事件修饰符.vue'
import comB from './10.表单输入绑定.vue'
const index = ref(0);
</script>
<style lang='less' scoped>
</style>