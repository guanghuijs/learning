import type { UserConfig } from 'vite';

export const viteBaseConfig: UserConfig = {
  base: './',
  plugins: [],
  resolve: {
    alias: {},
  },
  envDir: './env',
  // envPrefix: ["DEV", "PRO"], //环境变量前缀,不配置默认VITE,可配置多个
};
