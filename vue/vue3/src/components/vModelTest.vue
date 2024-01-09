<template>
    <div>11</div>
    <div class="box" style="color: red">
      <div class="box">
        <p>{{$attrs.modelValue}}</p>
        <p>{{$attrs.title}}</p>
        <p>{{$attrs.name}}</p>
      </div>
      <button @click="fn">点击更新父组件变量</button>
    </div>
</template>

<script setup lang="ts">
  const emits = defineEmits(['update:modelValue','update:title','update:name'])

  const fn = () => {
    emits('update:modelValue', 5);
    emits('update:title', '我系古天乐');
    emits('update:name', 'gh');
  }
</script>

<style scoped lang="less">
</style>