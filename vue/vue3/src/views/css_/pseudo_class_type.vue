<template>
  <div class="of-type">
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
  div.of-type {
    div:first-of-type {
      background: red;
    }
    div:last-of-type {
      background: red;
    }
    div:nth-of-type(2) {
      background: yellow;
    }
    div:nth-of-type(2n - 1) {
      text-align: right;
    }
  }
</style>

<route lang="yaml">
meta:
  title: type伪类
  sort: 15
</route>
