import AMapLoader from '@amap/amap-jsapi-loader';
// @ts-ignore
const { GLOBAL_AMMAP_SECURITY, GLOBAL_AMAP_KEY } = import.meta.env;
console.log(GLOBAL_AMAP_KEY, GLOBAL_AMMAP_SECURITY);
/**
 * 高德德图
 */
export function useAMap(callBack: Function) {
  (window as any)._AMapSecurityConfig = {
    securityJsCode: GLOBAL_AMMAP_SECURITY,
  };
  AMapLoader.load({
    key: GLOBAL_AMAP_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      'AMap.Scale',
      'AMap.Geolocation',
      'AMap.CitySearch',
      'AMap.Geocoder',
    ], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      callBack(AMap);
    })
    .catch((e) => {
      console.error(e);
    });
}
