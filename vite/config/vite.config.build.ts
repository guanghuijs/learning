import { loadEnv, UserConfig } from 'vite';
import { viteConfigBase } from './vite.config.base';

export function build(mode: string): UserConfig {
  console.log('生产环境');
  console.log(loadEnv('production', './env', ''));
  if (mode === 'lib') {
    console.log('打包成库');
  } else {
    console.log('打包');
  }
  return {
    ...viteConfigBase,
    build: {
      outDir: mode ?? 'lib',
    },
  };
}
