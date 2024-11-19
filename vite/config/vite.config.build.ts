import { loadEnv, UserConfig } from 'vite';
import { viteConfigBase } from './vite.config.base';

export function build(mode: string): UserConfig {
  const { VITE_OUT_INPUT_DIR } = loadEnv(mode, './env');
  return {
    ...viteConfigBase,
    build: {
      outDir: VITE_OUT_INPUT_DIR,
      emptyOutDir: true,
    },
  };
}
