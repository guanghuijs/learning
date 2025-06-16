<template>
  <div class="loadImg"></div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  {
    const p = new Promise((resolve, reject) => {
      const num = Math.random() * 10;
      if (num < 5) {
        resolve(num);
      } else {
        reject(num);
      }
    });

    p.then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error, 'error');
      }
    );
  }

  {
    const p = new Promise(() => {
      console.log('Promise');
    });
    console.log(12121);
    // Promise
    // 12121
  }

  {
    const loadImageAsync = (url: string) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          reject(img);
        };
        img.src = url;
      });

    onMounted(() => {
      loadImageAsync(
        'http://img.gaosan.com/upload/201909/20190920085545319.jpg'
      ).then((res) => {
        (document.querySelector('.loadImg') as any).appendChild(res);
      });
    });
  }
  // const fs = require('fs');
  {
    // fs.readFile("@/router/index.js",(err,data) => {
    //   if(err) throw err;
    //   console.log(data.toString())
    // })
    // const p = new Promise((resolve, reject) => {
    //   fs.readFile('url',(err,data) => {
    //     if(err) reject(err);
    //     resolve(data)
    //   })
    // })
  }

  {
    // ajax
    // 第一步  先城建一个ajax的核心 XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // 第二步  使用open 创建请求 第一个参数是请求方式 第二个是请求的地址  是否异步,默认异步(true)
    xhr.open(
      'GET',
      'https://www.fastmock.site/mock/961b619357977ecee63001f0f5140734/yghh/phoneUser'
    );
    // 如果是post请求  必须要写请求头
    // xhr.setRequestHeader() //设置请求头,浏览器
    // 第三步  发送异步请求
    xhr.send();
    // 第四步 绑定事件，处理响应结果
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          // readyState  0 请求未初始化  刚刚实例化XMLHttpRequest
          // readyState  1 客户端与服务器建立链接  调用open方法
          // readyState  2 请求已经被接收
          // readyState  3 请求正在处理中
          // readyState  4 请求成功
          console.log(xhr.responseText);
        } else {
          console.error(xhr.status);
        }
      }
    };

    const promiseAjax = (options: {
      url: string;
      type?: string;
      async?: boolean;
      timeout?: number;
    }) =>
      new Promise((resolve, reject) => {
        const promiseXhr = new XMLHttpRequest();
        console.log(options);
        promiseXhr.open(
          options.type || 'get',
          options.url,
          options.async || true
        );
        promiseXhr.send();
        promiseXhr.onreadystatechange = () => {
          if (promiseXhr.readyState == 4) {
            if (promiseXhr.status == 200) {
              resolve(promiseXhr.response);
            } else {
              reject(promiseXhr.status);
            }
          }
        };
      });
    promiseAjax({
      url: 'https://www.fastmock.site/mock/961b619357977ecee63001f0f5140734/yghh/svperImg',
    }).then((res) => {
      console.log(res);
    });
  }
</script>

<style scoped lang="less"></style>
