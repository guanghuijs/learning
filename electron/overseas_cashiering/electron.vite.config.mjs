import { resolve } from 'path';
import { loadEnv } from 'vite';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import vue from '@vitejs/plugin-vue';

// 自动生成路由
import Pages from 'vite-plugin-pages';

export default defineConfig(({ mode }) => {
  const { VITE_PORT, VITE_API_HOST } = loadEnv(mode, './env');
  return {
    main: {
      plugins: [externalizeDepsPlugin()]
    },
    preload: {
      plugins: [externalizeDepsPlugin()]
    },
    renderer: {
      plugins: [
        vue(),
        Pages({
          //指定生成路由的目录
          dirs: resolve('src/renderer/src/views'),
          //文件后缀
          extensions: ['vue'],
          //可以排除指定目录
          exclude: ['**/src/*.vue']
        })
      ],
      resolve: {
        alias: {
          '@': resolve('src/renderer/src')
        }
      },
      server: {
        proxy: {
          '/api': VITE_API_HOST
        },
        port: Number(VITE_PORT || 8080)
      },
      envDir: resolve('env')
    }
  };
});
