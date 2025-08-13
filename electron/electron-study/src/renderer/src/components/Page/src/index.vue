<script setup lang="ts">
  const { title, padding = '20px' } = defineProps<{
    title?: string;
    describe?: string;
    padding?: string;
  }>();

  import { useSysStoreRefs } from '@/store/sys';

  const { locale } = useSysStoreRefs();
</script>

<template>
  <div class="page-content">
    <div v-if="title" class="title flex-between">
      <div>
        <div>{{ title }}</div>
        <p class="describe">{{ describe }}</p>
      </div>
      <div class="lan flex-star">
        <span>语言切换：</span>
        <el-select style="width: 120px" v-model="locale">
          <el-option
            v-for="[key, name] in [
              'zhCn-中文',
              'en-英语',
              'zhTw-繁体中文',
              'th-泰语'
            ].map((txt) => txt.split('-'))"
            :key="key"
            :label="name"
            :value="key"
          />
        </el-select>
      </div>
    </div>
    <div class="content" v-bind="$attrs"><slot></slot></div>
  </div>
</template>

<style scoped lang="scss">
  .page-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    .title {
      background: white;
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
