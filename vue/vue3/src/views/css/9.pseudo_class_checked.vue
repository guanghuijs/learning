<template>
  <label for="man">
    <input id="man" name="sex" placeholder="请输入" type="checkbox" />
    <span>男</span>
  </label>
</template>
<style lang="less" scoped>
  input {
    &:checked ~ span {
      width: 80px;
      background: red;
    }
  }
</style>
