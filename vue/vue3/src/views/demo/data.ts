import { mock, Random } from 'mockjs';
import type { ShopItem, GoodsItem } from './type';

export const cartList = (): ShopItem[] => {
  const list: ShopItem[] = [];
  for (let i = 0; i < Random.integer(3, 5); i++) {
    list.push({
      isCheck: false,
      shopName: `${mock('@ctitle')}自营店`,
      goodsList: (() => {
        const itemList: GoodsItem[] = [];
        for (let j = 0; j < Random.integer(2, 5); j++) {
          itemList.push({
            isCheck: false,
            goodsImg: Random.image(
              '100x100',
              mock('@color'),
              mock('color'),
              `商品${i}${j}`
            ),
            goodsName: mock('@ctitle'),
            goodsSpec: ['包邮', '麻辣'],
            price: Random.float(50, 100, 2, 2),
            maxNum: Random.integer(20, 50),
            num: Random.integer(1, 10),
          });
        }
        return itemList;
      })(),
    });
  }
  return list;
};

import type { goodsItem, Specific } from './type';

export const goods = () => {
  const specific: Specific[] = [
    {
      name: '机身颜色',
      items: [
        {
          name: '红色',
          isToggle: true,
          image: '',
        },
        {
          name: '蓝色',
          isToggle: true,

          image: '',
        },
        {
          name: '午夜色',
          isToggle: true,

          image: '',
        },
        {
          name: '新光色',
          isToggle: true,

          image: '',
        },
        {
          name: '紫色',
          isToggle: true,
          image: '',
        },
      ],
    },
    {
      name: '存储容量',
      items: [
        { name: '128G', isToggle: true },
        { name: '256G', isToggle: true },
        { name: '512G', isToggle: true },
        { name: '1TB', isToggle: true },
      ],
    },
    {
      name: '网络类型',
      items: [
        { name: '5G全网通', isToggle: true },
        { name: '5G电信', isToggle: true },
        { name: '5G移动', isToggle: true },
        { name: '5G联通', isToggle: true },
      ],
    },
  ];
  const goodsSpec: goodsItem[] = [];
  for (let i = 0; i < 20; i++) {
    goodsSpec.push({
      stock: Random.integer(50, 800),
      price: Random.float(6000, 10000, 2, 2),
      difference: `${specific[0].items[Random.integer(0, 4)].name};${
        specific[1].items[Random.integer(0, 3)].name
      };${specific[2].items[Random.integer(0, 3)].name}`,
      legend: Random.image('100x100', mock('@color'), mock('color'), `商品`),
    });
  }
  return {
    specific,
    goodsSpec,
  };
};
