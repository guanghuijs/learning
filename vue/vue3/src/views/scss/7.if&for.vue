<script setup lang="ts">
  import { ref } from 'vue';
  import { NInputNumber } from 'naive-ui';
  const num = ref(1); // x
</script>

<template>
  <p>哈哈哈</p>
  <n-input-number v-model:value="num"></n-input-number>
  <div class="test" :style="{ '--num': num }"></div>
  <div class="container">
    <div v-for="i in 20">{{ i }}</div>
  </div>
</template>

<style scoped lang="scss">
  $type: 1;
  p {
    @if 1 + 1 == 2 {
      border: 1px solid;
    }
    @if 5 < 3 {
      border: 2px dotted;
    }
    @if null {
      border: 3px double;
    }
  }
  //编译后
  //div {
  //  border: 1px solid;
  //}

  .container {
    display: inline-flex;
    height: 600px;
    flex-flow: column wrap;
    align-items: center;
    @for $i from 1 through 20 {
      div:nth-child(#{$i}) {
        width: 30px;
        line-height: 30px;
        text-align: center;
        margin-top: #{$i * 2}px;
        background: if($i > 10, red, blue);
      }
      @if ($i % 2 ==0) {
        div:nth-child(#{$i}) {
          color: black;
        }
      }
    }
  }
</style>
