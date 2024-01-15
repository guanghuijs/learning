<template>
  <div>{{a}}</div>
  <div>{{b}}</div>
  <div>{{c}}</div>
  <div>{{foo}}| {{bar}} | {{baz}}</div>
  <div>{{e}}| {{f}} </div>
</template>

<script setup lang="ts">
  let [a,b,c] = [1,2,3];

  let [foo, [[bar], baz]] = [1, [[2], 3]];

  let [e, , f] = [4,5,6]

  let [head, ...tail] = [1, 2, 3, 4];
  // head // 1
  // tail // [2, 3, 4]

  let [x, y, ...z] = ['a'];
  // x //'a'
  // y //undefined
  // z //[]

  // let [g] = undefined;
  // TypeError: Cannot read properties of undefined (reading '0')

  {

    let x;
    if ([1][0] === undefined) {
      x = f();
    } else {
      x = [1][0];
    }

  }

  {
    let { log } = console;
    let { floor, random } = Math;
    log(random());//0.5633973515209068
  }

  {
    //别名
    let { name: useName, age: useAge } = { name: 'wgh', age:18 };
    console.log(useName, useAge)
  }

  {
    // 默认值
    let { x = 15, y : useY = 250, z } = {};
    console.log(x);//15
    console.log(useY);//250
    console.log(z);//undefined

    let { name = 'wgh' } = { name:'我系渣渣辉' };
    console.log(name);//我系渣渣辉
  }

  {
    // 对数组进行对象属性的解构
    let arr =  [1,2,3,4,5,6];
    let { 0: first, [arr.length - 1]: last } = arr;
    console.log(first, last);//1  6
  }

</script>

<style scoped lang="less">
</style>