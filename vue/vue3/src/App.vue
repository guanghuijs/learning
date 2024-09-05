<script setup lang="ts">
  import { NMessageProvider } from 'naive-ui';
  import { RouterView } from 'vue-router';
</script>
<template>
  <n-message-provider>
    <RouterView />
  </n-message-provider>
</template>
