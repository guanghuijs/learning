import { createApp, type App } from 'vue';
import { createPinia } from 'pinia';
import type { Component } from 'vue';
import type { Router } from 'vue-router';

export async function boot(
  App: Component,
  router: Router,
  afterCallBack?: (app: App) => void,
) {
  const app = createApp(App);
  if (afterCallBack) {
    afterCallBack(app);
  }
  app.use(router).use(createPinia()).mount('#app');
}
