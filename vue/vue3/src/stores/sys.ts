import { ref, watch } from 'vue';
import { defineStore, storeToRefs } from 'pinia';
import { setLocalStore, getLocalStore } from '@/utils';
import type { SysStore, GetPropType } from '@/stores/types';

export const useSysStore = defineStore('sys', () => {
  const mode = ref<GetPropType<SysStore, 'mode'>>(
    getLocalStore<SysStore>('learningStore').mode || 'light'
  );
  const primaryColor = ref<GetPropType<SysStore, 'primaryColor'>>(
    getLocalStore<SysStore>('learningStore').primaryColor || '#18A058'
  );

  watch([mode, primaryColor], ([modeValue, colorValue]) => {
    setLocalStore<SysStore>('learningStore', {
      mode: modeValue,
      primaryColor: colorValue,
    });
  });

  return { mode, primaryColor };
});

export function useSysStoreRefs() {
  return storeToRefs(useSysStore());
}
