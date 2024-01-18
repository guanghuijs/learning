<template>
  <div class="test">测试</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
  .extendTest {
    font: {
      family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
        monospace;
      style: italic;
      size: 18px;
    }
    border: 1px solid #ff3d00;
  }
  .test {
    @extend .extendTest;
  }
</style>
