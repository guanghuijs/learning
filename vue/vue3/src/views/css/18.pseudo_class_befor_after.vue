<template>
  <div class="before-after">内容</div>
</template>
<style lang="less" scoped>
  .before-after {
    width: 100px;
    height: 50px;
    border: 1px solid #eee;
    &::before {
      content: '☆';
    }
    &::after {
      content: '★';
    }
  }
</style>
