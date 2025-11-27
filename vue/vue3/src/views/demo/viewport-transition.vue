<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { Page } from '@packages/components';

  const target = ref<HTMLDivElement>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('1', entries);
          entry.target.classList.add('act');
        } else {
          console.log('2', entries);
          entry.target.classList.remove('act');
        }
      });
    },
    {
      root: null, // 相对于浏览器视口进行检测
      threshold: 1, // 触发回调的交叉比例
      rootMargin: '100px',
    }
  );

  onMounted(() => {
    observer.observe(target.value!);
  });
</script>

<template>
  <Page title="元素进入视口监听">
    <div style="height: 100vh"></div>
    <div ref="target" class="title">吃饭了吗</div>
    <div style="height: 100vh"></div>
  </Page>
</template>

<style scoped lang="less">
  .title {
    font-size: 36px;
    font-weight: bold;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.5s;
  }
  .act {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<route lang="yaml">
meta:
  title: 进入视口动画
  sort: 13
</route>
