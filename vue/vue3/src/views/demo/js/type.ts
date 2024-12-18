export type ShopItem = {
  isCheck: boolean;
  shopName: string;
  goodsList: GoodsItem[];
};

export type GoodsItem = {
  isCheck: boolean;
  goodsImg: string;
  goodsName: string;
  goodsSpec: string[];
  price: number;
  maxNum: number;
  num: number;
};

export type Specific = {
  name: string;
  items: { name: string; isToggle: boolean | undefined; image?: string }[];
};

export type goodsItem = {
  stock: number;
  price: number;
  difference: string;
  legend: string;
};
