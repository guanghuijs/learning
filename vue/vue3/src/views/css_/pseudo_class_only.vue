<template>
  <div class="only">
    <div>
      <div></div>
      <div><div></div></div>
      <div></div>
    </div>
    <div>
      <p></p>
    </div>
  </div>
</template>

<style lang="less" scoped>
  div.only {
    p,
    div {
      min-height: 20px;
    }
    :only-child {
      background: red;
    }
    div:only-of-type {
      border-color: chartreuse;
    }
    p:only-of-type {
      border-color: #1d39c4;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 子元素only伪类
  sort: 16
</route>
