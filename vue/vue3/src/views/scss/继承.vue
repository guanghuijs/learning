<template>
  <div class="test">测试</div>
</template>

<style lang="scss" scoped>
  .extendTest {
    font: {
      family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
      style: italic;
      size: 18px;
    }
    border: 1px solid #ff3d00;
  }
  .test {
    @extend .extendTest;
  }
</style>

<route lang="yaml">
meta:
  title: 继承
  sort: 4
</route>
