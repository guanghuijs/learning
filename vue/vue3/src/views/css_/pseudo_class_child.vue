<template>
  <div class="box">
    <div>1</div>
    <p>2</p>
    <div>3</div>
    <div>4</div>
    <p>5</p>
    <div>6</div>
    <p>7</p>
    <p>8</p>
    <div>9</div>
    <p>10</p>
  </div>
</template>

<style lang="less" scoped>
  div.box {
    div {
      height: 50px;
      margin-bottom: 10px;
      border: 1px solid #f2f2f2;
      padding: 5px;
    }
    & :first-child {
      background: red;
    }
    & :last-child {
      background: yellow;
    }
    & :nth-child(2n) {
      text-align: right;
    }
    & :nth-last-child(3) {
      background: #1dad9b;
    }
  }
</style>

<route lang="yaml">
meta:
  title: 子元素伪类
  sort: 14
</route>
