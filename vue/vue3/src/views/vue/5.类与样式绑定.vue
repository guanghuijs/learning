<template>
  <h3>css</h3>
  <div :class="isActive ? 'active':''">啦啦啦</div>
  <div :class="{ active: isActive }">啦啦啦</div>
  <div :class="[{act:isActive},{red:isActive}]">啦啦啦</div>
  <div class="static" :class="{ active: isActive, 'text-danger': hasError() }">哈哈哈</div>

  <h3>style</h3>
  <div style="background: red">呵呵哈哈哈</div>
  <div :style="{background: 'yellow',fontSize: '15px'}">呵呵哈哈哈</div>
  <div :style="isActive ? {background: 'blue'}:''">呵呵哈哈哈</div>
  <!--<div :style="[{background: 'blue'},{fontSize:'18px'}]">呵呵哈哈哈</div>报错-->
  <h3>自动前缀</h3>
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">红红火火恍恍惚惚或或或或或或或或</div>
</template>
<script lang='ts' setup>
import {ref} from "vue";
const isActive = ref<boolean>(true);
const hasError = () => {
  return false;
}
</script>
<style lang='less' scoped>
</style>