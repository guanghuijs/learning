<template>
  <h3>内联事件</h3>
  <button @click="cont++">按钮{{cont}}</button>
  <h3>方法事件</h3>
  <button @click="fn">按钮</button>
</template>
<script lang='ts' setup>
import {ref} from 'vue'
const cont = ref(1);

const fn = () => {
  console.log('事件触发了')
}

</script>
<style lang='less' scoped>
</style>