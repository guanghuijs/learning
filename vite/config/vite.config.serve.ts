import { loadEnv, UserConfig } from 'vite';
import { viteConfigBase } from './vite.config.base';

export function serve(mode: string): UserConfig {
  console.log('开发环境');
  const { DEV_PORT, DEV_PROXY } = loadEnv(mode, './env', 'DEV_');
  return {
    ...viteConfigBase,
    server: {
      port: Number(DEV_PORT),
      proxy: {
        [JSON.parse(DEV_PROXY)[0]]: {
          target: JSON.parse(DEV_PROXY)[1],
          changeOrigin: true,
          rewrite: (path: string) =>
            path.replace(new RegExp(`^${JSON.parse(DEV_PROXY)[0]}`), ''),
        },
      },
    },
  };
}
