import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig((con) => {
  console.log(con);
  return {
    plugins: [vue()],
  };
});
