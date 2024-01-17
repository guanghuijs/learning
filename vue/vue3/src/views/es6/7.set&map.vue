<template></template>

<script setup lang="ts">
  const setEg = new Set();
  [1, 1, 2, 2, 3, 3, 4, 4, 5, 5].forEach((item) => setEg.add(item));
  console.log(setEg); //Set(5){1, 2, 3, 4, 5}

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9];
  const set = new Set([...arr]);
  console.log(set); //Set(9)
  console.log(set instanceof Set); //true

  {
    const arr = [1, 1, 2, 2, 3, 3];
    const arr2 = [new Set(arr)];
    console.log(arr2);
  }

  {
    const set = new Set(['a', 'b', { a: 'aaa' }]);
    console.log(set.keys()); //SetIterator{'a', 'b', 'c'}
    console.log(set.values()); //SetIterator{'a', 'b', 'c'}
    console.log(set.entries()); //SetIterator{'a', 'b', 'c'}
  }

  {
    const map = new Map();
    const o = { p: 'hello' };
    map.set(o, '你好');
    map.set('person', { name: 'wgh' });
    console.log(map);
    console.log(map.has(o)); //true
    map.delete(o);
    console.log(map.has(o)); //false
  }
</script>

<style scoped lang="less"></style>
