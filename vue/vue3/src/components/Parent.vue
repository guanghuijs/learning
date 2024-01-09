<template>
  <div>
    <h3>{{title}}</h3>
    <div>子组件没有props接收的自定义属性：{{$attrs}}</div>
    <div>自定义属性是引用类型:{{wgh}}</div>
    <h3>子组件向父级组件通讯</h3>
    <button @click="$emit('getChildMsg','你好,明天')">点击向父级通讯</button>
    <div>
      <input @input="e => $emit('getInputVal', e.target.value)" >
    </div>
    <div :style="'color:'+ color">你好</div>
    <Children />
  </div>
</template>
<script lang='ts' setup>
import {ref} from "vue";
import Children from './Children.vue';
defineProps<{wgh?:{name:string,age:number},title?:string}>();
import {mock} from 'mockjs';
const color = ref(mock('@color'));

const reColor = () => {
  color.value = mock('@color');
}

defineExpose({reColor})

</script>
<style lang='less' scoped>
</style>