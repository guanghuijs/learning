import './assets/base.less';
import 'vxe-table/es/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import persist from '@/stores/persist';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app
  .use(createPinia().use(persist))
  .use(router)
  .mount('#app');
