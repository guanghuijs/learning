<template>
  <div class="test"></div>
</template>

<style lang="scss" scoped>
  .test {
    height: 100px;
    border: {
      left: 1px salmon solid;
      right: none;
    }
    font: {
      family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
      size: 18px;
      style: italic;
    }
  }
</style>
<route lang="yaml">
meta:
  title: 属性嵌套
  sort: 3
</route>
