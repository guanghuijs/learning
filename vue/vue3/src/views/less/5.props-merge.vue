<template>
  <div class="less-merge">我系渣渣辉</div>
</template>
<style lang="less" scoped>
  .less-merge {
    width: 50px;
    height: $width;
    margin: 100px;
  }
  // 属性合并
  .mixin() {
    box-shadow+: inset 0 0 10px #555;
    transform+_: scale(2);
  }

  .less-merge {
    .mixin();
    box-shadow+: 0 0 20px black;
    transform+_: translateX(50px) rotate(36deg);
  }

  // .less-merge {
  //   box-shadow: inset 0 0 10px #555, 0 0 20px black;
  //   transform: scale(2) translateX(50px) rotate(36deg);
  // }
</style>
