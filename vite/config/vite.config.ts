import { defineConfig } from 'vite';
import { build } from './vite.build.config';
import { serve } from './vite.serve.config';

export default defineConfig(({ command, mode }) => {
  console.log(mode);
  return mode === 'development' ? serve() : build(mode);
});
