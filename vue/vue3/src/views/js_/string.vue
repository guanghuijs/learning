<script setup lang="ts">
  String.prototype.pointLength = function () {
    let len = 0;
    for (let i = 0; i < this.length; ) {
      const codePoint = this.codePointAt(i)!;
      console.log(codePoint);
      i += codePoint > 0xffff ? 2 : 1;
      len++;
    }
    return len;
  };

  String.prototype.pointAt = function (index: number) {
    let current = 0;
    for (let i = 0; i < this.length; ) {
      const codePoint = this.codePointAt(i)!;
      i += codePoint > 0xffff ? 2 : 1;
      if (current === index) {
        return String.fromCodePoint(codePoint);
      }
      current++;
    }
  };
</script>

<template>
  <h1>split</h1>
  <div>{{ '1,2,3,4,5,6'.split(',') }}</div>
  <h1>pointLength</h1>
  <div>{{ '😅😅😅😅😅😅'.pointLength() }}</div>
  <h1>pointAt</h1>
  <div>{{ '😅🥳🤚👵🧜‍♀️👩‍❤️‍💋‍👨'.charAt(1) }}</div>
  <div>{{ '😅🥳🤚👵🧜‍♀️👩‍❤️‍💋‍'.pointAt(1) }}</div>
  <div>{{ '😅🥳🤚👵🧜‍♀️👩‍❤️‍💋‍'.pointAt(2) }}</div>
  <div>{{ '😅🥳🤚👵🧜‍♀️👩‍❤️‍💋‍'.pointAt(3) }}</div>
  <div>{{ '😅🥳🤚👵🧜‍♀️👩‍❤️‍💋‍'.pointAt(4) }}</div>
  <div>{{ '😅🥳🤚👵🧜‍♀️👩‍❤️‍💋‍'.pointAt(5) }}</div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  title: 字符串
  sort: 3
</route>
