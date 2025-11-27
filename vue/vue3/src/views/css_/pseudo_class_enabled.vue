<template>
  <input disabled placeholder="请输入" type="text" />
  <input placeholder="请输入" type="text" />
</template>

<style lang="less" scoped>
  input {
    height: 40px;
  }
  input:disabled {
    border: 1px solid #aaa;
    opacity: 0.6;
  }

  input:enabled {
    border: 1px solid #999;
  }
</style>

<route lang="yaml">
meta:
  title: 输入框禁止输入伪类
  sort: 11
</route>
