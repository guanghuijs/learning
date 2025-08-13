<script setup lang="ts">
  import { Page } from '@/components';
  import { playerList, audioPlayer } from './data';
</script>

<template>
  <Page title="音频播放">
    <el-button
      v-for="{ text, type } in playerList"
      :key="text"
      @click="audioPlayer(type)"
    >
      {{ text }}
    </el-button>
  </Page>
</template>

<style scoped lang="scss"></style>
