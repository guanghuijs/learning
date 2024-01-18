<script setup lang="ts"></script>

<template>
  <div class="each-base">
    <div :class="`item${i}`" v-for="i in 5"></div>
  </div>
</template>

<style scoped lang="scss">
  .each-base {
    div {
      width: 50px;
      height: 50px;
    }
    @each $select, $value in (item1, 老王), (item2, 张三), (item3, 李四) {
      .#{$select} {
        background: red;
        &::after {
          content: '#{$value}';
        }
      }
    }
  }

  .each-base {
    @each $select, $value, $cursor in (1, blue, default), (2, black, move),
      (3, yellow, pointer)
    {
      div:nth-child(#{$select}) {
        color: $value;
        margin-top: #{$select * 10}px;
        cursor: $cursor;
      }
    }
  }
</style>
