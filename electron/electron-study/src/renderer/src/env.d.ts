/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.mjs' {}
declare module '*.mp3' {
  const src: string;
  export default src;
}
