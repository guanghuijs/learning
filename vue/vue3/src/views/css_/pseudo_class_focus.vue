<template>
  <input placeholder="请输入" type="text" />
</template>

<style lang="less" scoped>
  input {
    border: 1px solid #000;
    &:focus {
      border-color: pink;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 输入框聚焦伪类
  sort: 8
</route>
