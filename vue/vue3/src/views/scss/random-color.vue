<template>
  <div class="container">
    <div v-for="i in 5" :class="`item${i}`" :key="i">测试</div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
  @function color() {
    @return rgba(random(255), random(255), random(255));
  }
  .container {
    @each $item in item1, item2, item3, item4, item5 {
      .#{$item} {
        color: color();
      }
    }
  }
</style>

<route lang="yaml">
meta:
  title: 随机颜色
  sort: 10
</route>
