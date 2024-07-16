<script setup lang="ts">
  import { useSysStoreRefs } from '@/stores/sys';
  import { mock } from 'mockjs';
  import { ref } from 'vue';

  const { primaryColor } = useSysStoreRefs();
  const num = ref(6);
</script>

<template>
  <div class="container">
    <div class="inner">
      <img
        v-for="i in num"
        :style="{ background: mock('@color') }"
        :key="i"
        src="/public/logo.webp"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .body {
    background: #999;
  }
  $n: 6;
  $size: 150px;
  $deg: calc(360deg / $n);
  $r: calc($size / 2);
  $R: calc($r / sin($deg/2));
  $innerWidth: calc($R * 2);
  .container {
    width: $size;
    height: $size;
    border-radius: 50%;
    margin: auto;
    display: flex;
    //overflow: hidden;
    justify-content: center;
    .inner {
      width: $innerWidth;
      height: $innerWidth;
      margin-top: $r;
      background: red;
      border-radius: 50%;
      flex-shrink: 0;
      position: relative;
      img {
        width: $size;
        height: $size;
        border-radius: 50%;
        border: 1px solid v-bind(primaryColor);
        position: absolute;
        left: calc(50% - $r);
        top: -$r;
        transform-origin: center #{$r + $R};
        @for $i from 1 through $n {
          &:nth-child(#{$i}) {
            transform: rotate($deg * ($i - 1));
          }
        }
      }
      animation: moving 20s infinite;
      $u: calc(1 / $n * 100%);
      @keyframes moving {
        @for $i from 1 through $n {
          $p: $u * $i;
          #{$p - 0.2 * $u},
          #{$p} {
            transform: rotate(-$deg * $i);
          }
        }
      }
    }
  }
</style>
