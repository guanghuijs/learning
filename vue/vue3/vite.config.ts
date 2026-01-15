import { extname } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDevTools from 'vite-plugin-vue-devtools';

import VueRouter from 'unplugin-vue-router/vite';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  base: '/learning/',
  plugins: [
    // ⚠️ VueRouter 必须放在 vue() 之前
    VueRouter({
      // 配置选项
      routesFolder: 'src/views', // 默认为 src/pages
      extensions: ['.vue'], // 支持的文件扩展名
      exclude: ['**/components/*.vue'],
    }),
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/spark-api': {
        target: 'https://spark-api-open.xf-yun.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/spark-api/, ''),
      },
    },
  },
  envPrefix: ['GLOBAL', 'DEV'],
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // 1. 入口文件
        entryFileNames: (info) => {
          const name = info.name.replace(/^_/, ''); // 去掉开头的下划线
          return `assets/${name}-[hash].js`;
        },

        // 2. 异步 chunk
        chunkFileNames: (info) => {
          const name = info.name.replace(/^_/, '');
          return `assets/${name}-[hash].js`;
        },

        // 3. 静态资源（css、字体、图片等）
        assetFileNames: (info) => {
          const name = info.names[0].replace(/^_/, ''); // 去掉可能的前缀 _
          const ext = extname(name);
          return `assets/${name}-[hash]${ext}`;
        },
      },
    },
  },
});
