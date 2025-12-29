<script setup lang="ts">
  import { mock, Random } from 'mockjs';

  import { NButton, NSpace } from 'naive-ui';
  import { VxeTable, VxeColumn } from 'vxe-table';

  import * as XLSX from 'xlsx';
  import * as XLSX_STYLE from 'xlsx-style-vite';

  import { Page } from '@packages/components';
  import { ref } from 'vue';

  // 表头
  const eColumns = [
    { wch: 20, field: 'userName', label: '用户名' },
    { wch: 20, field: 'sex', label: '性别' },
    { wch: 20, field: 'age', label: '年龄' },
  ];

  // 数据
  const dataList = ref([]);
  const generatedData = () => {
    dataList.value = Array.from({ length: 40 }, () => ({
      userName: mock('@cname'),
      sex: ['男', '女'][Random.integer(0, 1)],
      age: Random.integer(20, 30),
    }));
  };
  generatedData();

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
    const worksheet = XLSX.utils.aoa_to_sheet([
      [name],
      ...dataList,
    ]);

    // 设置列宽
    worksheet['!cols'] = columns.map(({ wch }) => ({
      wch,
    }));
    // 合并单元格 => row为0  col0 至 col(headerList.length - 1)
    worksheet['!merges'] = [
      {
        s: { r: 0, c: 0 },
        e: { r: 0, c: columns.length - 1 },
      },
    ];

    // 设置单元格样式
    for (const key in worksheet) {
      if (
        ['!ref', '!merges', '!cols', '!rows'].includes(key)
      )
        continue;
      // 标题
      if (key === 'A1') {
        // https://www.npmjs.com/package/xlsx-style
        worksheet[key] = {
          t: 's', // 设置单元格类型（type: b Boolean, e Error, n Number, d Date, s Text, z Stub）
          v: name, // 设置单元格内容（raw value (number, string, Date object, boolean)）
          s: {
            // 设置单元格样式
            fill: {
              // 设置背景色
              fgColor: { rgb: '85ce61' },
            },
            font: {
              // 设置字体
              name: '等线', // 字体名称
              sz: 18, // 字体大小
              bold: true, // 字体是否加粗
              color: { rgb: '5e7ce0' }, // 文字颜色
            },
            alignment: {
              // 设置居中
              horizontal: 'center', // 水平（向左、向右、居中）
              vertical: 'center', // 上下（向上、向下、居中）
              wrapText: false, // 设置单元格自动换行，目前仅对非合并单元格生效
              indent: 0, // 设置单元格缩进
            },
          },
        };
      } else if (key.match(/\d+/g)?.join('') === '2') {
        // 表头
        worksheet[key].s = {
          // 单元格边框
          border: {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' },
          },
          // 单元格背景色
          fill: { fgColor: { rgb: '85ce61' } },
          // 单元格字体
          font: { name: '微软雅黑', sz: 12 },
          // 设置单元格对齐方式
          alignment: {
            horizontal: 'center',
            vertical: 'center',
            wrapText: true,
          },
        };
      } else {
        // 表格内容
        // 设置td单元格样式
        worksheet[key].s = {
          // 单元格边框
          border: {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' },
          },
          // 单元格背景色
          fill: { fgColor: { rgb: 'ffffff' } },
          // 单元格字体
          font: { name: '微软雅黑', sz: 10 },
          // 设置单元格对齐方式
          alignment: {
            horizontal: 'center',
            vertical: 'center',
            wrapText: true,
          },
        };
      }
    }

    // 把工作表添加到工作簿里,并命名
    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      `用户列表`,
    );

    const blob = new Blob([
      s2ab(
        XLSX_STYLE.write(workbook, {
          bookType: 'xlsx',
          type: 'binary',
          cellStyles: true,
        }),
      ),
    ]);

    download(blob, `${name}${new Date().getTime()}.xlsx`);

    // 导出文件
    // XLSX.writeFile(workbook, `${name}${new Date().getTime()}.xlsx`);
  };

  // 文件流转换
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++)
      view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }

  // 使用 a 标签下载文件
  function download(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
</script>

<template>
  <Page title="前端导出Excel">
    <NSpace style="margin-bottom: 10px">
      <n-button
        size="small"
        @click="
          exportHandle(eColumns, dataList, '用户啦啦啦啦啦')
        "
      >
        导出
      </n-button>
      <n-button size="small" @click="generatedData">
        生成随机数据
      </n-button>
    </NSpace>
    <vxe-table
      border
      size="mini"
      height="320"
      :data="dataList"
    >
      <vxe-column
        v-for="{ field, label } in eColumns"
        :key="field"
        :field
        :title="label"
      ></vxe-column>
    </vxe-table>
  </Page>
</template>

<style scoped lang="scss"></style>

<route lang="yaml">
meta:
  title: 导出电子表格
  sort: 15
</route>
