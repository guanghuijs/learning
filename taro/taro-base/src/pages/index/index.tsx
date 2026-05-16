import { View } from '@tarojs/components';
import Taro, { useLoad, usePullDownRefresh } from '@tarojs/taro';
import { request } from '@/utils/request';
import { useState } from 'react';
import './index.scss';


export default function Index() {
  const [list, setList] = useState([]);
  const getList = async () => {
    const { code, data } = await request({ url: '/api/v1/index/getTradeType' });
    if (code === 200) {
      Taro.stopPullDownRefresh();
      setList(data);
    }
  };

  useLoad(() => {
    getList();
  });

  usePullDownRefresh(() => {
    getList();
  });


  return (
    <View className="index">
      <View>你好</View>
      {list.map((item: any) => (
        <View>
          <View>{item.id}：{item.name}</View>
        </View>
      ))}
      {list.map((item: any) => (
        <View>
          <View>{item.id}：{item.name}</View>
        </View>
      ))}
    </View>
  );
}
