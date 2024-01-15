<template></template>

<script setup>
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const it = arr[Symbol.iterator]();
  for (let i = 0; i < arr.length; i++) {
    console.log(it.next());
  }

  let set = new Set().add('a').add('b').add('c');
  console.log(set);

  let [x, y] = set;
  // x='a'; y='b'

  let [first, ...rest] = set;
  console.log(x, y);
</script>

<style lang="less" scoped></style>
