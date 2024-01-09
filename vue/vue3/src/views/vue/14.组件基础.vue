<template>
  <child></child>
  <temp></temp>
</template>
<script lang='ts' setup>
import child from '@/component/Children.vue';
import {template} from "lodash-es";
const temp = template(`<div>hello</div>`,{
  sourceURL:'www.baidu.com'
});
</script>
<style lang='less' scoped>
</style>