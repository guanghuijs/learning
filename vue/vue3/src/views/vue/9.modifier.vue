<template>
  <h3>stop:阻止冒泡(以点击事件为例)</h3>
  <div style="height: 100px;background: red" @click="parentClick">
    <p @click="fn">没使用stop修饰符</p>
    <p @click.stop="fn">使用stop修饰符</p>
  </div>

  <h3>prevent:阻止默认行为</h3>
  <div>
    <div><a href="" @click.prevent>阻止链接</a></div>
    <div><a href="">未阻止链接</a></div>
    <div>
      <h3>阻止表单提交默认行为(重新加载页面)</h3>
      <form @submit="formSubmit">
        <input />
        <button>提交表单</button>
      </form>
    </div>
  </div>

  <h3>self修饰符</h3>
  <div style="height: 100px;background: red" @click="parentClick">
    <p>测试:点击我</p>
  </div>
  <div style="height: 100px;background: red" @click.self="parentClick">
    <p>测试</p>
  </div>

  <h3>v-model修饰符</h3>
  <div>
    <p>默认情况下，v-model同步输入框的值和数据。可以通过number这个修饰符，转变为在change事件再同步。</p>
    <input v-model.lazy="msg" />
    <p>number自动将用户的输入值转化为数值类型</p>
    <input v-model.number="msg" />
    <p>trim自动过滤用户输入的首尾空格</p>
    <input v-model.trim="msg" />
    <div>{{msg}}{{typeof msg}}</div>
  </div>

  <h3>键盘事件的修饰符</h3>
  <p>在我们的项目经常需要监听一些键盘事件来触发程序的执行，而Vue中允许在监听的时候添加关键修饰符：</p>
  <div>
    <input @keyup.enter.ctrl="keyFn" />
    <input  />
    <pre>
      全部的按键别名：
      .enter
      .tab
      .delete (捕获“删除”和“退格”键)
      .esc
      .space
      .up
      .down
      .left
      .right
      修饰键：
      .ctrl
      .alt
      .shift
      .meta
    </pre>
  </div>
  <h3>once修饰符(方法只执行一次)</h3>
  <div @click.once="fn">按钮</div>
  <!-- 添加事件监听器时，使用 `capture` 捕获模式 -->
  <!-- 例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
  <div @click="fn">
    <input />
    <div @click="keyFn">1</div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";

const parentClick = () => {
  console.log('父元素点击事件');
}

const fn = () => {
  console.log('子元素');
}

const formSubmit = () => {
  console.log('表单提交')
}

const msg = ref();

const keyFn = () => {
  console.log('键盘修饰符')
}

</script>
<style lang='less' scoped>
p{
  height: 40px;
  background: pink;
}
</style>