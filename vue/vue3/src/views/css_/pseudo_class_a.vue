<template>
  <a class="link" href="https://www.baidu.com" target="_blank">百度一下,你就知道</a>
</template>

<style lang="less" scoped>
  a:link {
    background: red;
  }
  a:visited {
    background: yellow;
  }
  a:hover {
    background: blue;
  }
  a:active {
    background: green;
  }
</style>

<route lang="yaml">
meta:
  title: a标签伪类
  sort: 7
</route>
