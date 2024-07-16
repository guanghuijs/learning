<template>
  <div class="not-has">
    <div>1</div>
    <p>2</p>
    <div>3</div>
    <div>4</div>
    <p><span>5</span></p>
    <div>6</div>
    <p>7</p>
    <p>8</p>
    <div><span>9</span></div>
    <p>10</p>
  </div>
</template>
<style lang="scss" scoped>
  .not-has {
    & :not(:first-child) {
      background: red;
    }
    & :has(span) {
      margin-top: 10px;
      color: white;
    }
  }
</style>
