import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';

export const useSysStore = defineStore('sys', () => {
  const locale = ref('zhCn');
  return {
    locale
  };
});

export function useSysStoreRefs() {
  return storeToRefs(useSysStore());
}
