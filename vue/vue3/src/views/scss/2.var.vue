<template>
  <div class="test">测试</div>
  <div class="test2">测试2</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
  $color: pink;
  $theme: red !default; // 默认变量
  .test {
    $color: blue; // 局部变量
    color: $color;
    //$gBorder: 1px solid pink !global;// 可以变为全局变量
  }
</style>
