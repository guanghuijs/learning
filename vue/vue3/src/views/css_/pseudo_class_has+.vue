<template>
  <div class="css-has">
    <div class="css-has-item">
      <div class="label">姓名</div>
      <input type="text" required />
    </div>
    <div class="css-has-item">
      <div class="label">年龄</div>
      <input type="text" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .css-has {
    .css-has-item {
      width: 400px;
      display: flex;
      align-items: center;
      input {
        width: 200px;
      }
      .label {
        width: 50px;
      }
      .label:has(+ input:required)::after {
        content: '*';
        color: red;
      }
      input:required {
        border: 1px solid red;
      }
    }
  }
</style>

<route lang="yaml">
meta:
  title: has+
  sort: 21
</route>
