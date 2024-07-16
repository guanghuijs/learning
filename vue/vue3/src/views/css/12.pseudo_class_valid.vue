<template>
  <input placeholder="请输入" type="email" value="渣渣辉" />
  <input placeholder="请输入" type="email" value="1@qq.com" />
</template>
<style lang="less" scoped>
  input {
    border: 1px solid #eee;
    &:valid {
      color: green;
    }
    &:invalid {
      color: red;
    }
  }
</style>
