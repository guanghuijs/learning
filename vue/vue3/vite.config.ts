import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const { GLOBAL_PORT } = loadEnv('', '', 'GLOBAL');
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      Pages({
        dirs: './src/views', //指定生成路由的目录
        extensions: ['vue'], //文件后缀
        exclude: ['**/src/*.vue'], //可以排除指定目录
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: Number(GLOBAL_PORT),
    },
  };
});
