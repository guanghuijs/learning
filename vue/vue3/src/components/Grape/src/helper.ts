import { Random } from 'mockjs';

/**
 * 计算每个葡萄的具体位置
 * @param days
 * @param index
 */
export const calcPosition = (days: number, index: number) => {
  let tempStyle: any = {};
  if (days === 30) {
    switch (days === 30) {
      case index < 4:
        tempStyle = {
          left: `${4 * (index + 1)}rem`,
          top: '5rem',
        };
        break;
      case index < 9:
        tempStyle = {
          left: `${(index - 4) * 4 + 2}rem`,
          top: '8.2rem',
        };
        break;
      case index < 15:
        tempStyle = {
          left: `${(index % 9) * 4}rem`,
          top: '11.4rem',
        };
        break;
      case index < 20:
        tempStyle = {
          left: `${(index % 15) * 4 + 2}rem`,
          top: '14.6rem',
        };
        break;
      case index < 24:
        tempStyle = {
          left: `${((index % 20) + 1) * 4}rem`,
          top: '17.8rem',
        };
        break;
      case index < 27:
        tempStyle = {
          left: `${(index % 24) * 4 + 6}rem`,
          top: '21rem',
        };
        break;
      case index < 29:
        tempStyle = {
          left: `${(index % 27) * 4 + 8}rem`,
          top: '24.2rem',
        };
        break;
      case index < 30:
        tempStyle = {
          left: `${(index % 29) * 4 + 10}rem`,
          top: '27.4rem',
        };
        break;
    }
  } else if (days === 31 || days === 28) {
    switch (true) {
      case index < 4:
        tempStyle = {
          left: `${4 * (index + 1)}rem`,
          top: '5rem',
        };
        break;
      case index < 9:
        tempStyle = {
          left: `${(index % 5) * 4 + 2}rem`,
          top: '8.2rem',
        };
        break;
      case index < 14:
        tempStyle = {
          left: `${(index % 9) * 4 + 2}rem`,
          top: '11.4rem',
        };
        break;
      case index < 19:
        tempStyle = {
          left: `${(index % 14) * 4 + 2}rem`,
          top: '14.6rem',
        };
        break;
      case index < 23:
        tempStyle = {
          left: `${(index % 19) * 4 + 4}rem`,
          top: '17.8rem',
        };
        break;
      case index < 26:
        tempStyle = {
          left: `${(index % 23) * 4 + 6}rem`,
          top: '21rem',
        };
        break;
      case index < 28:
        tempStyle = {
          left: `${(index % 26) * 4 + 8}rem`,
          top: '24.2rem',
        };
        break;
      case index < 30:
        tempStyle = {
          left: `${(index % 28) * 4 + 8}rem`,
          top: '27.4rem',
        };
        break;
      case index < 31:
        tempStyle = {
          left: `${(index % 30) * 4 + 10}rem`,
          top: '30.6rem',
        };
        break;
    }
  } else {
    switch (true) {
      case index < 4:
        tempStyle = {
          left: `${4 * (index + 1)}rem`,
          top: '5rem',
        };
        break;
      case index < 9:
        tempStyle = {
          left: `${(index % 5) * 4 + 2}rem`,
          top: '8.2rem',
        };
        break;
      case index < 14:
        tempStyle = {
          left: `${(index % 9) * 4 + 2}rem`,
          top: '11.4rem',
        };
        break;
      case index < 19:
        tempStyle = {
          left: `${(index % 14) * 4 + 2}rem`,
          top: '14.6rem',
        };
        break;
      case index < 23:
        tempStyle = {
          left: `${(index % 19) * 4 + 4}rem`,
          top: '17.8rem',
        };
        break;
      case index < 26:
        tempStyle = {
          left: `${(index % 23) * 4 + 6}rem`,
          top: '21rem',
        };
        break;
      case index < 28:
        tempStyle = {
          left: `${(index % 26) * 4 + 8}rem`,
          top: '24.2rem',
        };
        break;
      case index < 30:
        tempStyle = {
          left: `${(index % 28) * 4 + 10}rem`,
          top: '27.4rem',
        };
        break;
    }
  }

  return Object.assign(tempStyle, {
    zIndex: `${Random.integer(1, 4)}`,
  });
};

/**
 * 计算月份天数
 * @param date 年月字符串
 */
export const calcDays = (date: string) => {
  const [year, month] = date.split('-');
  if ((Number(year) % 4 === 0 && Number(year) % 100 !== 0) || Number(year) % 400 === 0) {
    return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][Number(month) - 1];
  }
  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][Number(month) - 1];
};
