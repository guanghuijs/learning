<template>
  <div>
    <div>
      <h3>插值</h3>
      <div>{{ msg }}</div>
      <h3>v-html指令</h3>
      <div v-html="eleStr"></div>
      <h3>属性绑定</h3>
      <div :obj="{ name: 'wgh', age: 18 }" :isAct="true">属性绑定测试</div>
      <h3>使用JavaScript表达式</h3>
      <div>{{ 1 + 4 }}</div>
      <!-- 5 -->
      <div>{{ Math.random().toFixed(2) }}</div>
      <div>{{ flag ? '你好' : '我不好' }}</div>
      <!-- 你好 -->
      <div :class="flag ? 'act' : ''"></div>
      <h3>调用函数</h3>
      <div :title="reTitle()">reTitle</div>
      <h3>动态参数</h3>
      <div :[eventName]="`动态参数`">动态参数</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';

  const msg = ref('我是渣渣辉');
  const eleStr = `<i>我系古天乐</i>`;

  const flag = ref<boolean>(true);

  const reTitle = () => {
    return '我是渣渣辉';
  };

  const eventName = ref('name');
</script>
<style lang="less" scoped></style>

<route lang="yaml">
meta:
  title: 模板
  sort: 1
</route>
