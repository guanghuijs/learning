import { defineConfig } from 'vite';
import { build } from './vite.config.build';
import { serve } from './vite.config.serve';

export default defineConfig(({ command, mode }) => {
  return mode === 'development' ? serve(mode) : build(mode);
});
