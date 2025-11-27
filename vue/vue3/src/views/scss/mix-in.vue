<template>
  <div class="test">测试</div>
</template>
<style lang="scss" scoped>
  @mixin border($w: 1px, $c: red, $t: solid) {
    border: $w $c $t;
  }
  .test {
    @include border(10px, blue);
  }
</style>

<route lang="yaml">
meta:
  title: 混入
  sort: 6
</route>
