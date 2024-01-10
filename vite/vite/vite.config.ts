import { defineConfig } from "vite";
import { serve } from "./vite.config.serve";
import { build } from "./vite.config.build";

export default defineConfig(({ command, mode }) => {
  console.log(mode);
  return command === "serve" ? serve() : build(mode);
});
