// 引入
import { writeFile } from 'node:fs';

// 写入(异步)
writeFile('./fs-1.text', '吃饭了吗', (err) => {
  if (err) {
    console.log('写入失败');
  } else {
    console.log('写入成功');
  }
});
