<template></template>

<script setup lang="ts">
  // Proxy 支持的拦截操作一览，一共 13 种。
  // get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
  // set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
  // has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
  // deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
  // ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
  // getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
  // defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
  // preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
  // getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
  // isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
  // setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
  // apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
  // construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

  const person = {
    name: '张三',
    age: 18,
  };

  const proxy = new Proxy(person, {
    get(
      target: { name: string; age: number },
      prop: string | symbol,
      receiver: any
    ): any {
      console.log('获取', receiver);
      return Reflect.get(target, prop);
    },
    set(
      target: { name: string; age: number },
      prop: string | symbol,
      value: string | number
    ): boolean {
      console.log('修改');
      return Reflect.set(target, prop, value);
    },
    deleteProperty(
      target: { name: string; age: number },
      prop: string | symbol
    ): boolean {
      return Reflect.deleteProperty(target, prop);
    },
    has(target: { name: string; age: number }, prop: string | symbol): boolean {
      console.log(Reflect.has(target, prop), 'has');
      return Reflect.has(target, prop);
    },
  });

  console.log(Object.keys(proxy));

  // Reflect对象一共有 13 个静态方法。
  // Reflect.apply(target, thisArg, args)
  // Reflect.construct(target, args)
  // Reflect.get(target, name, receiver)
  // Reflect.set(target, name, value, receiver)
  // Reflect.defineProperty(target, name, desc)
  // Reflect.deleteProperty(target, name)
  // Reflect.has(target, name)
  // Reflect.ownKeys(target)
  // Reflect.isExtensible(target)
  // Reflect.preventExtensions(target)
  // Reflect.getOwnPropertyDescriptor(target, name)
  // Reflect.getPrototypeOf(target)
  // Reflect.setPrototypeOf(target, prototype)
</script>

<route lang="yaml">
meta:
  title: 代理 反射
  sort: 8
</route>
