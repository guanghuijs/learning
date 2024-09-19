import './assets/base.less';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia();

import persist from '@/stores/persist';
pinia.use(persist);
app.use(pinia);
app.use(router);

app.mount('#app');
