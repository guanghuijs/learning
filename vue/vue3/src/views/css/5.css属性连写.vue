<template>
  <div class="font">
    我系追追追
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
//font-style font-variant font-weight font-size/line-height font-family
//font-style 规定字体样式[]
//normal	默认值。浏览器显示一个标准的字体样式。
//italic	浏览器会显示一个斜体的字体样式。
//oblique	浏览器会显示一个倾斜的字体样式。
//inherit	规定应该从父元素继承字体样式。

//font-variant	规定字体异体。
//normal	默认值。浏览器会显示一个标准的字体。
//small-caps	浏览器会显示小型大写字母的字体。
//inherit	规定应该从父元素继承 font-variant 属性的值。

//font-weight 规定字体粗细。
//normal	默认值。定义标准的字符。
//bold	定义粗体字符。
//bolder	定义更粗的字符。
//lighter	定义更细的字符。
//100
//200
//300
//400
//500
//600
//700
//800
//900
//定义由细到粗的字符。400 等同于 normal，而 700 等同于 bold。
//inherit	规定应该从父元素继承字体的粗细。

.font{
  //font-size/line-height	规定字体尺寸和行高。
  /* <absolute-size>，绝对大小值 */
  font-size: xx-small;
  font-size: x-small;
  font-size: small;
  font-size: medium;
  font-size: large;
  font-size: x-large;
  font-size: xx-large;

  /* <relative-size>，相对大小值 */
  font-size: larger;
  font-size: smaller;

  /* <length>，长度值 */
  font-size: 12px;
  font-size: 0.8em;

  /* <percentage>，百分比值 */
  font-size: 80%;

  font-size: inherit;


  //normal	默认。设置合理的行间距。
  //number	设置数字，此数字会与当前的字体尺寸相乘来设置行间距。
  //length	设置固定的行间距。
  //%	基于当前字体尺寸的百分比行间距。
  //inherit	规定应该从父元素继承 line-height 属性的值。

}
</style>