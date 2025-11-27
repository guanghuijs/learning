<template></template>

<script setup lang="ts">
  const [{ age, name, run }, seyHi] = [
    {
      name: 'wgh',
      age: '18',
      run() {
        setInterval(() => {
          console.log('跑~');
        }, 5000000);
      },
    },
    function () {
      console.log('你好');
    },
  ];

  console.log(age, name);
  seyHi();
  run();

  const person = {
    name: 'wgh',
    sex: 1,
    age: 18,
    height: '180cm',
    getItem(key: 'name' | 'sex' | 'age' | 'height') {
      console.log(this[key]);
      return key in this ? this[key] : null;
    },
  };

  person.getItem('name');

  {
    const testObj = {
      name: 'wgh',
      hi() {
        console.log(this);
      },
    };
    testObj.hi();
  }

  {
    console.log(2 ** 3);
    console.log(2 ** 4);
  }

  {
    const testObj = {
      person: {
        person1: {
          name: '你好',
        },
      },
    };
    const name = testObj?.person?.person1?.name || '啦啦';

    const status = testObj?.b;
    console.log(status);
    console.log(name);
  }

  {
    let x = 0;
    const y = 5;
    // let z = x ||= y;// x || (x = y) => x ? x : (x = y) // 5
    // let z = x ??= y;// x ?? (x = y) => x != undefined / Null ? x : (x = y) // 0
  }

  {
    let x = undefined;
    const y = 5;
    // let z = x ||= y;//5
    // let z = x ??= 99;//99
    console.log((x ??= 99));
  }
</script>

<route lang="yaml">
meta:
  title: 对象扩展
  sort: 5
</route>
