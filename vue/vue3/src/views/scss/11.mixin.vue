<template>
  <div class="test">测试</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
  @mixin border($w: 1px, $c: red, $t: solid) {
    border: $w $c $t;
  }
  .test {
    @include border();
  }
</style>
