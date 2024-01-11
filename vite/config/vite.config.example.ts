// import { fileURLToPath, URL } from 'node:url'
//
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

// import { fileURLToPath, URL } from "node:url";
//
// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import vueJsx from "@vitejs/plugin-vue-jsx";
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });

// import { fileURLToPath, URL } from 'node:url';
//
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// import vueJsx from '@vitejs/plugin-vue-jsx';
// import Pages from 'vite-plugin-pages';
// import { resolve } from 'path';
//
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueJsx(),
//     Pages({
//       dirs: './src/views', //指定生成路由的目录
//       extensions: ['vue'], //文件后缀
//       exclude: ['**/src/*.vue'], //可以排除指定目录
//     }),
//   ],
//   build: {
//     lib: {
//       // 入口指向组件库入口模块
//       entry: resolve(__dirname, 'packages/components/index.ts'),
//       name: 'ghui',
//       // 构建生成的文件名，与package.json中配置一致
//       fileName: 'ghui',
//     },
//     rollupOptions: {
//       // 确保外部化处理那些你不想打包进库的依赖
//       external: ['vue'],
//       output: {
//         globals: {
//           // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
//           vue: 'Vue',
//         },
//       },
//     },
//   },
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//       '#': fileURLToPath(new URL('./packages', import.meta.url)),
//     },
//   },
// });

import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import type { UserConfig } from 'vite';

// import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';

import { viteConfigBase } from './vite.config.base';

const envResolver = {
  build: (): UserConfig => {
    console.log('生产环境');
    return {
      plugins: [
        /**vue()**/
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
      },
    };
  },
  serve: (): UserConfig => ({ ...viteConfigBase }),
};

export default defineConfig(({ command, mode }) => {
  console.log('command', command);
  console.log(import.meta.url);
  console.log(
    '\x1b[31m%s\x1b[0m',
    '\n当前处于开发测试阶段，还会有大量更新，仅供参考，请勿用于实际项目！\n'
  );
  // 配置文件路径
  const envDir = resolve(process.cwd(), 'env'); //绝对路径
  // ./env 相对路径
  // process.cwd()项目根路径 D:\work\ghstudy
  console.log(mode);
  const env = loadEnv(mode, envDir, '');
  console.log(env);
  return envResolver[command]();
});
