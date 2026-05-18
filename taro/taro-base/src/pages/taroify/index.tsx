import { View } from '@tarojs/components';
import './index.scss';
import Menus from '@/components/Menus';

const menusList = [
  {
    pagePath: '/pages/taroify/src/button/index',
    text: '按钮',
    icon: '',
    iconActive: ''
  }
];

export default function Index() {
  return (
    <View className="index">
      <Menus list={menusList} activeIndex={0}></Menus>
    </View>
  );
}
