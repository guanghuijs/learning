<template>
  <div class="test">测试</div>
</template>

<style lang="scss" scoped>
  //使用% 声明的代码块，如果不被@extend调用的话就不会被编译。编译出来的代码会将相同的代码合并在一起，代码变得十分简洁。
  %test {
    font: {
      family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier,
        monospace;
      style: italic;
      size: 18px;
    }
    border: 1px solid #ff3d00;
  }
  .test {
    @extend %test;
  }
</style>

<route lang="yaml">
meta:
  title: '%占位符'
  sort: 5
</route>
