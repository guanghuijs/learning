import type { UserConfig } from 'vite';

export const viteConfigBase: UserConfig = {
  base: './',
  plugins: [],
  resolve: {
    alias: {},
  },
  envDir: './env',
  envPrefix: ['DEV', 'PRO', 'VITE'], //环境变量前缀,不配置默认VITE,可配置多个
};
