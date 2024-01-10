import {onMounted, onUnmounted, ref} from "vue";

export const useEventListener = (target: Window | HTMLElement, event: string, callback: any) => {
    onMounted(() => {
        target.addEventListener(event,callback);
    })
    onUnmounted(() =>{
        target.removeEventListener(event,callback);
    })
}

export const useMouse = () => {
    const x = ref(0);
    const y = ref(0);
    useEventListener(window,'mousemove',(e: MouseEvent) => {
        x.value = e.clientX;
        y.value = e.clientY;
    })
    return {x, y};
}