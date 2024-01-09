<template>
  <Parent title="啦啦啦" :wgh="{name:'1', age:1}" ref="parentRef" />
  <button @click="parentRef.reColor()">按钮</button>
</template>
<script lang='ts' setup>
import Parent from '@/component/Parent.vue';
import {onMounted, ref} from "vue";
const parentRef = ref();

onMounted(() => {
  console.log(parentRef)
})
</script>
<style lang='less' scoped>

</style>