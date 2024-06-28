// @ts-nocheck
export async function loadBMapGL() {
  const { GLOBAL_BMAP_AK } = import.meta.env;
  const BMap_URL = `https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=${GLOBAL_BMAP_AK}&callback=onBMapCallback`;

  return new Promise((resolve) => {
    // 如果已加载直接返回
    if (typeof BMapGL !== 'undefined' && BMapGL !== null) {
      resolve(BMapGL);
      return;
    }

    window.onBMapCallback = function () {
      resolve(BMapGL);
    };

    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', BMap_URL);
    document.head.appendChild(script);
  });
}
