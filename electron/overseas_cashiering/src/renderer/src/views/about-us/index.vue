<script setup>
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
  <div>这是关于我们页面</div>
  <el-button @click="routeTo" type="primary">to home {{ count }}</el-button>
  <el-button type="danger" @click="increment">count++</el-button>
</template>

<style scoped lang="scss"></style>
