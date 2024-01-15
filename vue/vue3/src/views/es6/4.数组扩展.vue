<template></template>

<script setup lang="ts">
  console.log(...[1, 2, 3]);
  // 1 2 3

  console.log(1, ...[2, 3, 4], 5);
  // 1 2 3 4 5

  {
    const [register, { seyHi }] = [
      () => {
        console.log('register');
      },
      {
        seyHi: () => {
          console.log('hello');
        },
      },
    ];

    seyHi();
  }

  {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [...arr1];
    const arr3 = [...arr1, ...arr2];
    console.log(arr1, arr2, arr3);
  }

  {
    const arr = [...'hello'.split('')];
    console.log(arr);
  }

  {
    const arr = [, , ,];
    console.log(arr); //[空属性 × 3]
    arr.forEach((item) => {
      console.log(item); //不执行
    });
    const arr1 = [...arr];
    console.log(arr1); //[undefined, undefined, undefined]
    arr1.forEach((item) => {
      console.log(item); //undefined
    });
  }
</script>

<style scoped lang="less"></style>
