import Taro from '@tarojs/taro';

function request() {
  return new Promise((resolve, reject) => {
    Taro.request({
      // @ts-ignore
      url: '/customer/photo/get-member-album',
      method: 'GET',
    })
      .then((res) => {
        console.log(res);
        Taro.hideLoading();
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        Taro.hideLoading();
        reject(err);
      });
  });
}

export { request };
