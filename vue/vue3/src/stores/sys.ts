import { computed, ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';

export const useSysStore = defineStore('sys', () => {
  const mode = ref('light');
  const primaryColor = ref('#18A058');
  const isDark = computed<boolean>(() => mode.value === 'dark');
  return { mode, primaryColor, isDark };
});

export function useSysStoreRefs() {
  return storeToRefs(useSysStore());
}
