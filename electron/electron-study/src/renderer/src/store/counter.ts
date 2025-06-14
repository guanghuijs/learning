import { ref } from 'vue';
import { defineStore, storeToRefs } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  return { count, increment };
});

export function useSysStoreRefs() {
  return storeToRefs(useCounterStore());
}
