// src/components/TabBar/index.tsx
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState } from 'react';
import './index.scss';

interface TabItem {
  pagePath: string;
  text: string;
  icon: string;
  iconActive: string;
}

interface TabBarProps {
  list: TabItem[];
  activeIndex?: number;
  onChange?: (index: number) => void;
}

export default function Menus({ list, activeIndex = 0, onChange }: TabBarProps) {
  const [current, setCurrent] = useState(activeIndex);

  const handleClick = (index: number, url: string) => {
    setCurrent(index);
    onChange?.(index);
    Taro.navigateTo({ url }).then(_ => {
    });
  };

  return (
    <View className="menus">
      {list.map((item, index) => (
        <View
          key={index}
          className={`item ${current === index ? 'active' : ''}`}
          onClick={() => handleClick(index, item.pagePath)}
        >
          <Text className="tab-text">{item.text}</Text>
        </View>
      ))}
    </View>
  );
}
