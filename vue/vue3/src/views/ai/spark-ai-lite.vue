<script setup lang="ts">
  import axios from 'axios';
  const message = () => {
    axios('/spark-api/v1/chat/completions', {
      headers: {
        Authorization:
          'Bearer DmGKeXpGhcupWEQXExga:UDpeoXaAMpEPlIljfMol',
      },
      method: 'POST',
      data: {
        model: 'lite',
        messages: [
          {
            role: 'user',
            content: '如何学习编程',
          },
        ],
      },
    });
  };
</script>

<template>
  <div @click="message">科大讯飞lite模型</div>
</template>
<style scoped lang="less"></style>

<route lang="yaml">
meta:
  title: 科大讯飞lite模型
  sort: 1
</route>
