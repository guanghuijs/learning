// 定义存储key前缀
const KEY_PREFIX = 'PINIA_STORE_';
import { type PiniaPluginContext } from 'pinia';

/**
 *
 * @param context pinia上下文实例
 */
export default function (context: PiniaPluginContext) {
  const { store } = context;
  const key = KEY_PREFIX + store.$id;
  console.log(store.$state);
  // 页面卸载(刷新、关闭)前存储
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(key, JSON.stringify(store.$state));
  });
  // 页面加载是取
  store.$patch(JSON.parse(localStorage.getItem(key) || '{}'));
}
