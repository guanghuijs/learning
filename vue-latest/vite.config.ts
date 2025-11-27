import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

import VueRouter from 'unplugin-vue-router/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // ⚠️ VueRouter 必须放在 vue() 之前
    VueRouter({
      // 配置选项
      routesFolder: 'src/views', // 默认为 src/pages
      extensions: ['.vue'], // 支持的文件扩展名
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
