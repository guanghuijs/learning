import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// 自动生成路由
import Pages from 'vite-plugin-pages';
// 强制https
import basicSsl from '@vitejs/plugin-basic-ssl';
// devtools
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { GLOBAL_PORT, GLOBAL_SSL } = loadEnv(mode, '', 'GLOBAL');
  return {
    base: './',
    plugins: [
      vue(),
      vueJsx(),
      Pages({
        //指定生成路由的目录
        dirs: './src/views',
        //文件后缀
        extensions: ['vue'],
        //可以排除指定目录
        exclude: ['**/src/*.vue'],
      }),
      VueDevTools(),
      GLOBAL_SSL
        ? basicSsl({
            name: 'test',
            domains: ['*.custom.com'],
            certDir: '/Users/.../.devServer/cert',
          })
        : null,
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: Number(GLOBAL_PORT),
    },
    envPrefix: ['GLOBAL'],
  };
});
