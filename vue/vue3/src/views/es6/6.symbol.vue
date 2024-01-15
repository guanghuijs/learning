<template>

</template>

<script setup lang="ts">
    const { log } = console
    {
      let s = Symbol('kkk');//Symbol(kkk)
      const s1 = Symbol(undefined);//Symbol(undefined)
      const s2 = Symbol('wgh');////Symbol(wgh)
      log(typeof s, s);//symbol Symbol(kkk);
      s2.description
    }

    {
      let a:any = {};
      a[Symbol()] = 'hello';
      a[Symbol()] = 'wgh'

      let b:any = {
        [Symbol()] : 'hello'
      }

      let c:any = {};
      Object.defineProperty(c,Symbol(),{ value:'hello'})

      log(a,b,c);

      console.log(log)

    }



</script>

<style scoped lang="less">
</style>