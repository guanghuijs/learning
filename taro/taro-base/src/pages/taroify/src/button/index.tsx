import { View } from '@tarojs/components';
import './index.scss';
import { Button } from '@taroify/core';

export default function Index() {
  return (
    <View className="index">
      <View>你好</View>
      <Button>按钮</Button>
    </View>
  );
}
