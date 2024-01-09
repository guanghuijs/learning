<template>
  <div>
    <div>子组件</div>
<!--    <div>{{msg}}</div>-->
<!--    <button @click="sayHi">按钮</button>-->
  </div>
</template>
<script lang='ts' setup>
import { onMounted } from 'vue';
// const { msg, sayHi } = inject<any>('provideObj')

onMounted(() => {
  console.log('子组件挂载完成');
})
</script>
<style lang='less' scoped>
</style>