<script setup lang="ts">
  import { Page } from '@/components';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const routeTo = () => {
    router.push('/home');
  };

  import { useSysStoreRefs, useCounterStore } from '@/store/counter';
  const { count } = useSysStoreRefs();
  const { increment } = useCounterStore();
</script>

<template>
  <Page title="关于我们" describe="这是关于我们页面">
    <el-button @click="routeTo" type="primary">to home {{ count }}</el-button>
    <el-button type="danger" @click="increment">count++</el-button>
  </Page>
</template>

<style scoped lang="scss"></style>
