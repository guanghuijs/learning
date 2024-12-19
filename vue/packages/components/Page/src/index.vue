<script setup lang="ts">
  const { title, padding = '20px' } = defineProps<{
    title?: string;
    describe?: string;
    padding?: string;
  }>();
</script>

<template>
  <div class="page-content">
    <div v-if="title" class="title">
      <div>{{ title }}</div>
      <p class="describe">{{ describe }}</p>
    </div>
    <div class="content"><slot></slot></div>
  </div>
</template>

<style scoped lang="less">
  .page-content {
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    .title {
      border-bottom: 1px solid #f2f2f2;
      padding: 15px 15px 10px;
      div {
        font-size: 16px;
        font-weight: bold;
      }
      .describe {
        color: #666;
      }
    }
    .content {
      padding: v-bind(padding);
      overflow-y: scroll;
      flex: 1;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>
