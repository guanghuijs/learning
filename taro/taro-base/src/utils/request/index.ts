import Taro from '@tarojs/taro';

function request({ url, method = 'GET' }: Taro.request.Option) {
  Taro.showLoading();
  return new Promise<any>((resolve, reject) => {
    Taro.request({
      url: import.meta.env.VITE_APP_BASE_URL + url,
      method,
      header: {
        'wx-app-id': import.meta.env.VITE_APP_APPID
      }
    })
      .then((res) => {
        Taro.hideLoading();
        resolve(res.data);
      })
      .catch((err) => {
        Taro.hideLoading();
        reject(err);
      });
  });
}

export { request };
