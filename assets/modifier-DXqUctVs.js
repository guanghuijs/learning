import{d as k,r as b,n as g,F as y,e as n,bS as i,x as s,y as r,t as d,bT as C,b as a,_ as x}from"./index-BtQ9Oy6z.js";import{b as v}from"./route-block-B_A1xBdJ.js";const V=["onKeyup"],m=k({__name:"modifier",setup(w){const e=()=>{console.log("父元素点击事件")},u=()=>{console.log("子元素")},f=()=>{console.log("表单提交")},o=b(),p=()=>{console.log("键盘修饰符")};return(S,l)=>(a(),g(y,null,[l[15]||(l[15]=n("h3",null,"stop:阻止冒泡(以点击事件为例)",-1)),n("div",{style:{height:"100px",background:"red"},onClick:e},[n("p",{onClick:u},"没使用stop修饰符"),n("p",{onClick:i(u,["stop"])},"使用stop修饰符")]),l[16]||(l[16]=n("h3",null,"prevent:阻止默认行为",-1)),n("div",null,[n("div",null,[n("a",{href:"",onClick:l[0]||(l[0]=i(()=>{},["prevent"]))},"阻止链接")]),l[6]||(l[6]=n("div",null,[n("a",{href:""},"未阻止链接")],-1)),n("div",null,[l[5]||(l[5]=n("h3",null,"阻止表单提交默认行为(重新加载页面)",-1)),n("form",{onSubmit:f},[...l[4]||(l[4]=[n("input",null,null,-1),n("button",null,"提交表单",-1)])],32)])]),l[17]||(l[17]=n("h3",null,"self修饰符",-1)),n("div",{style:{height:"100px",background:"red"},onClick:e},[...l[7]||(l[7]=[n("p",null,"测试:点击我",-1)])]),n("div",{style:{height:"100px",background:"red"},onClick:i(e,["self"])},[...l[8]||(l[8]=[n("p",null,"测试",-1)])]),l[18]||(l[18]=n("h3",null,"v-model修饰符",-1)),n("div",null,[l[9]||(l[9]=n("p",null," 默认情况下，v-model同步输入框的值和数据。可以通过number这个修饰符，转变为在change事件再同步。 ",-1)),s(n("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>o.value=t)},null,512),[[r,o.value,void 0,{lazy:!0}]]),l[10]||(l[10]=n("p",null,"number自动将用户的输入值转化为数值类型",-1)),s(n("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>o.value=t)},null,512),[[r,o.value,void 0,{number:!0}]]),l[11]||(l[11]=n("p",null,"trim自动过滤用户输入的首尾空格",-1)),s(n("input",{"onUpdate:modelValue":l[3]||(l[3]=t=>o.value=t)},null,512),[[r,o.value,void 0,{trim:!0}]]),n("div",null,d(o.value)+d(typeof o.value),1)]),l[19]||(l[19]=n("h3",null,"键盘事件的修饰符",-1)),l[20]||(l[20]=n("p",null," 在我们的项目经常需要监听一些键盘事件来触发程序的执行，而Vue中允许在监听的时候添加关键修饰符： ",-1)),n("div",null,[n("input",{onKeyup:C(i(p,["ctrl"]),["enter"])},null,40,V),l[12]||(l[12]=n("input",null,null,-1)),l[13]||(l[13]=n("pre",null,`      全部的按键别名：
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
    `,-1))]),l[21]||(l[21]=n("h3",null,"once修饰符(方法只执行一次)",-1)),n("div",{onClickOnce:u},"按钮",32),n("div",{onClick:u},[l[14]||(l[14]=n("input",null,null,-1)),n("div",{onClick:p},"1")])],64))}});typeof v=="function"&&v(m);const K=x(m,[["__scopeId","data-v-017e8da9"]]);export{K as default};
