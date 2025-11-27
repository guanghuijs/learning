<template>
  <div class="less-mixin">
    <div class="test">我系渣渣辉</div>
    <div class="test2">我系渣渣辉</div>
    <div class="test3">我系渣渣辉</div>
    <div class="test4">我系渣渣辉</div>
  </div>
</template>

<style lang="less" scoped>
  .a {
    color: red;
  }

  #b {
    background: blanchedalmond;
  }

  .c {
    &:active {
      border: 1px solid pink;
    }
  }

  .test {
    // 加不加()镀锌
    .a;
    #b();
    .c();
  }

  //-----------

  .prop(@color: pink, @bg: blue) {
    color: @color;
    background: @bg;
  }

  .test2 {
    .prop();
  }

  .test3 {
    .prop(@bg: #331400) !important;
    //.border(pink)
  }
  //----------

  .box-shadow(@x: 0, @y: 0, @blur: 1px, @color: #000) {
    -webkit-box-shadow: @arguments;
    -moz-box-shadow: @arguments;
    box-shadow: @arguments;
  }
  .test4 {
    .box-shadow(2px, 5px);
  }

  //.test4 {
  //  -webkit-box-shadow: 2px 5px 1px #000;
  //  -moz-box-shadow: 2px 5px 1px #000;
  //  box-shadow: 2px 5px 1px #000;
  //}
</style>

<route lang="yaml">
meta:
  title: 混入
  sort: 4
</route>
