<script setup>
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping');
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  .container {
    background: red;
  }
</style>
