import type { UserConfig } from "vite";
import { loadEnv } from "vite";
import { viteBaseConfig } from "./vite.config.base";
const { DEV_TAG, DEV_PORT, DEV_PROXY } = loadEnv("development", "./env", "");

export function serve(): UserConfig {
  console.log(DEV_TAG, DEV_PORT, DEV_PROXY);
  return {
    ...viteBaseConfig,
    envPrefix: ["DEV"], //环境变量前缀,不配置默认VITE,可配置多个
    server: {
      port: Number(DEV_PORT),
      proxy: {
        [JSON.parse(DEV_PROXY)[0]]: {
          target: JSON.parse(DEV_PROXY)[1],
          changeOrigin: true,
          rewrite: (path: string) =>
            path.replace(new RegExp(`^${JSON.parse(DEV_PROXY)[0]}`), ""),
        },
      },
    },
  };
}
