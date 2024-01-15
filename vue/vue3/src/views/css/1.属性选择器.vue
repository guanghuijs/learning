<template>
  <div name="my-name-is-wgh" age="18" hobby="睡觉打游戏" href="https://baidu.com"></div>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
div{
  width: 50px;
  height: 50px;
  background: #333333;
}
//[name~=wgh]{//[name~='name']这样写也行
//  background: red;
//}
//
//[hobby~='睡觉打游戏']{
//  background: red;
//}

[name|='my']{//无效
  background: red;
}
//
//[name|="my name is wgh"]{//有效
//  background: red;
//}
//
//[age|="18"]{//有效
//  background: blanchedalmond;
//}

[href^=http]{
  background: blue;
}

[hobby^='睡觉']{
  background: red;
}



[name*='wgh']{
  background: yellow;
}

[href*='//']{
  background: palevioletred;
}

[name*='-']{
  background: yellow;
}

[hobby*='打游戏']{
  background: red;
}

[hobby$='游戏']{//无效
  background: yellow;
}
</style>