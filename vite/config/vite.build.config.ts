import { loadEnv, UserConfig } from 'vite';
import { viteBaseConfig } from './vite.base.config';

export function build(mode: string): UserConfig {
  console.log('生产环境');
  console.log(loadEnv('production', './env', ''));
  if (mode === 'lib') {
    console.log('打包成库');
  } else {
    console.log('打包');
  }
  return {
    ...viteBaseConfig,
    build:
      mode === 'lib'
        ? {
            outDir: 'lib',
            emptyOutDir: true,
          }
        : {
            outDir: 'dist',
            emptyOutDir: true,
          },
  };
}
