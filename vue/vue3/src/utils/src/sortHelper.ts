export function hexToRgba(hex: string = '#ff0000', withOpacity: number = 1) {
  hex = hex.slice(1);
  return `rgba(${parseInt(hex.slice(0, 2), 16)},${parseInt(
    hex.slice(2, 4),
    16
  )},${parseInt(hex.slice(4, 6), 16)},${withOpacity * 0.01})`;
}

export const sortHelper = {
  bubble: function (
    chart: any,
    arr: Array<number>,
    primaryColor: string,
    callback: Function = () => {}
  ) {
    const len = arr.length;
    const [_] = chart!;
    let timer = setInterval(async () => {
      if (isSorted(arr)) {
        clearInterval(timer);
        callback();
      }
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            await _.setOption({
              series: {
                // 图表类型
                type: 'bar',
                data: arr,
                itemStyle: {
                  color: function (params: any) {
                    return hexToRgba(primaryColor, params.value);
                  },
                },
              },
            });
            return;
          }
        }
      }
    }, 50);
  },
};

function isSorted(arr: Array<number>) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
