<template>
  <div class="less-extend">我系渣渣辉</div>
</template>
<style lang="less" scoped>
  .pre {
    color: red;
  }

  .less-extend:extend(.pre) {
  }
</style>

<route lang="yaml">
meta:
  title: 样式继承
  sort: 3
</route>
