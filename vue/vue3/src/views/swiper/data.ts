import _mock from 'mockjs';

export const swiperList = Array.from({ length: 10 }, (_, i) =>
  _mock.Random.image('400x200', _mock.mock('@color'), '#fff', `${i + 1}`)
);
