
<script lang='ts' setup>

import {ref} from "vue";

const getInitialItems = () => [0,1,2,3,4,5,6,7,8];
const arr = ref(getInitialItems());


function remove(item: number) {
  const i = arr.value.indexOf(item)
  if (i > -1) {
    arr.value.splice(i, 1)
  }
}
</script>
<template>
  <TransitionGroup name="fade" tag="ul">
    <div v-for="item in arr" class="item" :key="item" @click="remove(item)">{{item}}</div>
  </TransitionGroup>
</template>
<style lang='less'>
.container{
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>