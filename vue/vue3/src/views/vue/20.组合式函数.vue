<template>
  <h3>组合式函数</h3>
  <div>{{x}}{{y}}</div>
</template>
<script lang='ts' setup>
import {useMouse} from "@/common/sueMouse";
const {x,y} = useMouse()
</script>
<style lang='less' scoped>
</style>