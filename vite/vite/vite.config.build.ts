import type { UserConfig } from "vite";
import { viteBaseConfig } from "./vite.config.base";
import { loadEnv } from "vite";

const { PRO_TAG } = loadEnv("production", "./env", "TEST");

export function build(mode?: string): UserConfig {
  console.log(loadEnv("production", "./env", ""));
  console.log(PRO_TAG);
  if (mode === "lib") {
    console.log("打包成库");
  } else {
    console.log("普通打包");
  }
  return {
    ...viteBaseConfig,
    envPrefix: "PRO",
    build: {
      outDir: mode === "lib" ? "lib" : "dist",
      emptyOutDir: true,
    },
  };
}
