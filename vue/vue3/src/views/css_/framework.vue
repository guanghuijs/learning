<template></template>

<style scoped lang="less">
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    outline: 0;
    font-family: '微软雅黑', serif;
  }

  a,
  button,
  input {
    -webkit-appearance: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }

  .ui-pane {
    width: 100vw;
    height: 100vh;
    position: fixed;
  }

  /* 公共颜色 */
  :root {
    --theme: #5a9bff;
    --text: #999;
    --titColor: #333;
    --myback: #fff;
    --white: #ffffff;
  }

  /**
 * header
 */
  .ui-header {
    height: 0.8rem;
    position: fixed;
    top: 0;
    padding: 0 0.88rem;
    width: 100%;
    box-shadow: -3px 0 2px rgba(0, 0, 0, 0.2);
    font-size: 0.28rem;
    color: var(--titColor);
    z-index: 10;
    background-color: var(--white);
    .header-title {
      text-align: center;
      line-height: 0.8rem;
      font-size: 0.32rem;
    }
  }

  /** content **/
  .ui-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    font-size: 0.28rem;
    -webkit-overflow-scrolling: touch;
    color: var(--text);
    background-color: #f2f2f2;
  }

  /* 当存在头部导航时给ui-content加上padding */
  .ui-header ~ .ui-content {
    padding-top: 0.8rem;
  }
</style>

<route lang="yaml">
meta:
  title: 公共样式
  sort: 6
</route>
