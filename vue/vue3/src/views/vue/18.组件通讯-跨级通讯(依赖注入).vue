<template>
  <Parent></Parent>
</template>
<script lang='ts' setup>
import Parent from '@/component/Parent.vue';
import {provide, ref} from "vue";
const msg = ref('消息');
const sayHello = () => {
  console.log('我是祖先组件啦啦啦啦啦')
}
provide('provideObj', {
  msg,
  sayHi: sayHello
})
</script>
<style lang='less' scoped>
</style>