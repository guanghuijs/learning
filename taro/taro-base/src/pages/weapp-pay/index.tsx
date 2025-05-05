import { View, Text, Button } from '@tarojs/components';
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss';

export default function Index() {
  useLoad(() => {
    console.log('微信支付.');
    console.log(import.meta['env']);
  });
  const payHandler = () => {
    Taro.login({
      success(res) {
        console.log(res);
        Taro.requestPayment({
          paySign: '',
          timeStamp: '',
          nonceStr: '',
          package: '',
        })
          .then()
          .catch((err) => {
            console.log(err);
          });
      },
    });
  };

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Button onClick={payHandler}>微信支付</Button>
    </View>
  );
}
