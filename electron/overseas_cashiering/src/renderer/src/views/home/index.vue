<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const routeTo = () => {
    router.push('/about-us');
  };

  import { useSysStoreRefs, useCounterStore } from '@/store/counter';
  const { count } = useSysStoreRefs();
  const { increment } = useCounterStore();

  import request from '@/utils/request';
  import { ref } from 'vue';
  const data = ref();

  const test = () => {
    request
      .get('/v1/users/qaList', {
        params: {
          page: 1,
          limit: 5,
          is_recommend: 1
        }
      })
      .then((res) => {
        data.value = res.data;
      });
  };
</script>

<template>
  <div>这是首页</div>
  <el-button @click="routeTo" type="primary">to about-us</el-button>
  <el-button @click="increment">count++</el-button>
  <div @click="count++">{{ count }}</div>
  <el-button @click="test">请求测试</el-button>
  <pre>{{ data }}</pre>
</template>

<style scoped lang="scss"></style>
