<script setup lang="ts"></script>

<template>
  <a href="https://lesscss.cn/functions/#list-functions" target="_blank">
    https://lesscss.cn/functions/#list-functions
  </a>
  <div v-for="i in 5" :class="`item${i}`">{{ i }}</div>
</template>

<style scoped lang="less">
  @list: item1, item2, item3, item4, item5;
  @len: length(@list); // 5
  @list3: extract(@list, 5); // item5

  .@{list3}{
    background: red;
  }

  each(@list,{
    .@{value}{
      width: 10px * @index;
      font-size: @index * 12px;
    }
  });

  @set:{
    item1: green;
    item2: red;
    item3: yellow
  }

  each(@set,{
    .@{key}{background: @value}
  })

  each(range(5),{
    .item@{value}{
      transform: rotate(60deg);
    }
  })
</style>

<route lang="yaml">
meta:
  title: 循环遍历
  sort: 7
</route>
