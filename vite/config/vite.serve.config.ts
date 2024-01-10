import { loadEnv, UserConfig } from 'vite';
import { viteBaseConfig } from './vite.base.config';

export function serve(): UserConfig {
  console.log('开发环境');
  const { DEV_TAG, DEV_PORT, DEV_PROXY } = loadEnv('development', './env', '');
  console.log(DEV_PORT, DEV_PROXY, DEV_TAG);
  return {
    ...viteBaseConfig,
  };
}
