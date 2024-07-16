<template>
  <div class="item">
    <span>*</span>
    <input required placeholder="请输入" type="text" />
  </div>
  <div class="item">
    <span>*</span>
    <input placeholder="请输入" type="text" />
  </div>
</template>
<style lang="less" scoped>
  .item {
    display: flex;
    align-items: center;
    span {
      color: red;
    }
    input {
      border: 1px solid #aaa;
    }
    span:has(+ input:required) {
      color: red;
    }
    span:has(+ input:optional) {
      display: block;
      color: green;
    }
  }
</style>
