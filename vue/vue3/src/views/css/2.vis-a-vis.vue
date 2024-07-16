<template>
  <div>
    <div class="test">
      <span class="base"></span>
      <span class="target"></span>
      <span class="target"></span>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
  .test {
    span {
      display: inline-block;
      width: 100px;
      height: 100px;
      background: yellow;
    }
  }

  .base ~ .target {
    background: red;
  }
</style>
