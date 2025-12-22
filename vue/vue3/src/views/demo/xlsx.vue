<script setup lang="ts">
  import { mock, Random } from 'mockjs';

  import { NButton } from 'naive-ui';
  import * as XLSX from 'xlsx';

  const exportHandle = (columns, data, name) => {
    const dataList = data.reduce(
      (list, cur) => {
        list.push(columns.map(({ field }) => cur[field]));
        return list;
      },
      [columns.map(({ label }) => label)],
    );

    // 新建一个工作簿、工作表
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([[name], ...dataList]);

    // 设置列宽
    worksheet['!cols'] = columns.map(({ wch }) => ({ wch }));
    // 合并单元格 => row为0  col0 至 col(headerList.length - 1)
    worksheet['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: columns.length - 1 } }];

    // 设置单元格样式
    for (const key in worksheet) {
      if (['!ref', '!merges', '!cols', '!rows'].includes(key)) continue;
      if (key === 'A1') {
        worksheet[key] = {
          t: 's',
          v: name,
          s: {
            // 设置单元格样式
            fill: {
              // 设置背景色
              fgColor: { rgb: '85ce61' },
            },
          },
        };
      }
    }

    // 把工作表添加到工作簿里,并命名
    XLSX.utils.book_append_sheet(workbook, worksheet, `用户列表`);

    // 导出文件
    XLSX.writeFile(workbook, `${name}${new Date().getTime()}.xlsx`);
  };

  // 表头
  const eColumns = [
    { wch: 20, field: 'userName', label: '用户名' },
    { wch: 20, field: 'sex', label: '性别' },
    { wch: 20, field: 'age', label: '年龄' },
  ];

  // 数据
  const dataList = Array.from({ length: 40 }, () => ({
    userName: mock('@cname'),
    sex: ['男', '女'][Random.integer(0, 1)],
    age: Random.integer(20, 30),
  }));
</script>

<template>
  <n-button @click="exportHandle(eColumns, dataList, '用户啦啦啦啦啦')">导出</n-button>
</template>

<style scoped lang="scss"></style>

<route lang="yaml">
meta:
  title: 导出电子表格
  sort: 15
</route>
