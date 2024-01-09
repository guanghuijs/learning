<template>
  <input ref="input" />
  <Children ref="children"></Children>
</template>
<script lang='ts' setup>
import {onMounted, ref} from "vue";
import Children from '@/component/Children.vue';

const children = ref(null);
const input = ref<HTMLInputElement>();

onMounted(() =>{
  console.log(children.value);
  (input.value as HTMLInputElement).focus()
})

</script>
<style lang='less' scoped>
</style>