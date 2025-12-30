import { onMounted, onUnmounted, ref } from 'vue';

export const useEventListener = (
  target: Window | HTMLElement,
  event: string,
  callback: (event: Event) => void,
) => {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
};

export const useMouse = () => {
  const x = ref(0);
  const y = ref(0);
  useEventListener(window, 'mousemove', (e: Event) => {
    const { clientX, clientY } = e as MouseEvent;
    x.value = clientX;
    y.value = clientY;
  });
  return { x, y };
};
