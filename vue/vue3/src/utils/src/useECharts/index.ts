// @ts-nocheck
import * as echarts from 'echarts';
import { useResizeObserver, useDebounceFn } from '@vueuse/core';
// @ts-ignore
import china from './china.json';
// @ts-ignore
import QU_JING from './530300.json'; // 曲靖
// @ts-ignore
import HUI_ZE from './530326.json'; // 会泽
// @ts-ignore
import XUAN_WEI from './530381.json'; // 宣威
// @ts-ignore
import ZHAN_YI from './530303.json'; // 沾益
// @ts-ignore
import MA_LONG from './530304.json'; // 马龙
// @ts-ignore
import FU_YUAN from './530325.json'; // 富源
// @ts-ignore
import LU_LIANG from './530322.json'; // 陆良
// @ts-ignore
import QI_LIANG from './530302.json'; // 麒麟
// @ts-ignore
import LUO_PING from './530324.json'; // 罗平
// @ts-ignore
import SHI_ZONG from './530323.json'; // 师宗

echarts.registerMap('china', china);
echarts.registerMap('曲靖市', QU_JING); // 曲靖
echarts.registerMap('会泽县', HUI_ZE); // 会泽
echarts.registerMap('宣威市', XUAN_WEI); // 宣威
echarts.registerMap('沾益区', ZHAN_YI); // 沾益
echarts.registerMap('马龙区', MA_LONG); // 马龙
echarts.registerMap('富源县', FU_YUAN); // 富源
echarts.registerMap('陆良县', LU_LIANG); // 陆良
echarts.registerMap('麒麟区', QI_LIANG); // 麒麟
echarts.registerMap('罗平县', LUO_PING); // 罗平
echarts.registerMap('师宗县', SHI_ZONG); // 师宗

/**
 * useEcharts
 * 请在dom挂在后再调用
 * @param el dom元素
 * @param options charts配置项
 */
export function useECharts(el: HTMLElement, options: echarts.EChartsOption) {
  const chart = echarts.init(el);
  chart.setOption(options);
  useResizeObserver(
    el,
    useDebounceFn(() => {
      chart.resize();
    }, 50)
  );
  return chart;
}
