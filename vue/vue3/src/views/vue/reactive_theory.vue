<template>
  {{ str }}
  <button @click="fn">按钮</button>
</template>
<script lang="ts" setup>
  const customReactive = (temp: any) => {
    if (typeof temp === 'object') {
      if (temp instanceof Array) {
        temp.forEach((item, index) => {
          if (typeof item === 'object') {
            item[index] = customReactive(item);
          }
        });
      } else {
        for (const tempKey in temp) {
          if (typeof temp[tempKey] === 'object') {
            temp[tempKey] = customReactive(temp[tempKey]);
          }
        }
      }
    } else {
      console.warn(`您传入的内容:${temp}不是一个对象`);
    }
    return new Proxy(temp, {
      //读取
      get(target, propName) {
        //person ==> target
        console.log('读取');
        return Reflect.get(target, propName);
      },
      set(target, propName, value) {
        // 修改和增加属性都调用
        console.log('修改');
        Reflect.set(target, propName, value);
        return true;
      },
      //删除
      deleteProperty(target, propName) {
        console.log(`删除`);
        return Reflect.deleteProperty(target, propName);
      },
    });
  };

  const customRef = (val: any) => {
    return customReactive({ value: val });
  };

  const str = customReactive({ name: '渣渣辉' });

  const fn = () => {
    str.name = '我是渣渣辉';
  };
</script>

<style lang="less" scoped></style>

<route lang="yaml">
meta:
  title: 响应式原理
  sort: 3
</route>
