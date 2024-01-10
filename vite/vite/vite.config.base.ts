import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import type { UserConfig } from "vite";

export const viteBaseConfig: UserConfig = {
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  envDir: "./env",
  // envPrefix: ["DEV", "PRO"], //环境变量前缀,不配置默认VITE,可配置多个
};
