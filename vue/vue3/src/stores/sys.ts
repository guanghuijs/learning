import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';

export const useSysStore = defineStore('sys', () => {
  const mode = ref<'light' | 'dark'>('light');
  return { mode };
});

export function useSysStoreRefs() {
  return storeToRefs(useSysStore());
}
