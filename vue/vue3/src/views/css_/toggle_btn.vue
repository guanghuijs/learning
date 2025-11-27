<script setup lang="ts">
  // const { theme = '#333' } = defineProps<{
  //   theme: string;
  // }>();
  // const active = defineModel('value', { default: false });
  import { ref } from 'vue';
  const active = ref(false);
</script>

<template>
  <div class="btn" :class="active ? 'active' : ''" @click="active = !active">
    <div class="top"></div>
    <div class="middle"></div>
    <div class="bottom"></div>
  </div>
</template>

<style scoped lang="less">
  .btn {
    position: relative;
    width: 16px;
    height: 14px;
    overflow: hidden;

    .top,
    .middle,
    .bottom {
      position: absolute;
      width: 16px;
      height: 2px;
      background-color: #333;
      transition: top 0.25s, background-color 0.5s, transform 0.25s;
    }

    .top {
      top: 0;
      left: 0;
      transform: translate(0);
    }

    .middle {
      top: 6px;
      left: 0;
      transform: translate(8px);
    }

    .bottom {
      top: 12px;
      left: 0;
      transform: translate(4px);
    }

    &.active {
      .top {
        top: 6px;
        transform: translate(0) rotate(225deg);
      }

      .middle {
        top: 6px;
        transform: translate(16px);
      }

      .bottom {
        top: 6px;
        transform: translate(0) rotate(135deg);
      }
    }
  }
</style>

<route lang="yaml">
meta:
  title: 切换按钮
  sort: 22
</route>
