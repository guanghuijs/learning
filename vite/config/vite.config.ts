import { defineConfig, loadEnv } from 'vite';
import { build } from './vite.config.build';
import { serve } from './vite.config.serve';

export default defineConfig(({ command, mode }) => {
  console.log('command', command);
  console.log(import.meta.url);
  console.log(
    '\x1b[31m%s\x1b[0m',
    '\n当前处于开发测试阶段，还会有大量更新，仅供参考，请勿用于实际项目！\n'
  );
  // 执行vite指令时,command维serve,mode默认为development;
  // 执行build指令是command为build,mode默认为build;
  // 执行vite、build指令时,mode也可以指定其他值;
  const env = loadEnv(mode, './env', ['VITE', 'DEV']);
  console.log(env);
  return command === 'serve' ? serve(mode) : build(mode);
});
