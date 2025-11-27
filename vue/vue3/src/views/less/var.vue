<template>
  <div class="test">我系渣渣辉</div>
</template>

<style lang="less" scoped>
  @select: test;
  @theme: pink;
  @base_url: '/static/img/';
  .test {
    color: @theme;
    // 插值
    background: url('@{base_url}bg.png');
    // 属性作为变量
    border: 1px solid $color;
  }
  .test:hover {
    color: darken(@theme, 10%);
  }
  .@{select} {
    height: 100px;
  }
</style>

<route lang="yaml">
meta:
  title: 变量
  sort: 1
</route>
