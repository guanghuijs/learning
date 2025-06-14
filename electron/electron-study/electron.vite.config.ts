import { resolve } from 'path';
import { loadEnv } from 'vite';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import vue from '@vitejs/plugin-vue';

import Pages from 'vite-plugin-pages';

export default defineConfig(({ mode, command }) => {
  const { VITE_PORT, VITE_PROXY, VITE_OUT_INPUT_DIR } = loadEnv(mode, './env');
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
      server:
        command === 'serve'
          ? {
              proxy: {
                // [JSON.parse(VITE_PROXY)[0]]: {
                //   target: JSON.parse(VITE_PROXY)[1],
                //   changeOrigin: true,
                //   rewrite: (path: string) =>
                //     path.replace(
                //       new RegExp(`^${JSON.parse(VITE_PROXY)[0]}`),
                //       ''
                //     )
                // }
                '/api': 'https://dify-dev-web.hzhytkj.top'
              },
              port: Number(VITE_PORT || 8080)
            }
          : {},
      build: {
        outDir: VITE_OUT_INPUT_DIR,
        emptyOutDir: true
      },
      envPrefix: ['VITE_']
    }
  };
});
