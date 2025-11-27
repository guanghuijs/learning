<template>
  <div class="item" v-for="i in 10" :key="i"></div>
</template>

<style scoped lang="less">
  each(range(10),{
    .item:nth-child(@{value}){
      width: 50px;
      height: 50px;
      background: red;
      margin-top: if(@value > 5,20px,0);
      &::after{
        content: '@{value}';
      }
    }
  });
</style>

<route lang="yaml">
meta:
  title: 条件判断
  sort: 9
</route>
