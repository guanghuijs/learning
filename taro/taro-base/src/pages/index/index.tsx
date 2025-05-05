import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';
import './index.scss';
import { request } from '@/utils/request';

export default function Index() {
  useLoad(() => {
    console.log(666666666);
    console.log(request);
  });

  return (
    <View className="index">
      <Text>Hello world!66</Text>
    </View>
  );
}
