import{d as h,r as v,o as m,c as f,a as n,w as u,j as c,v as _,t as a,k,F as g,p as b,l as C,_ as y}from"./index-peq8uAMB.js";const o=s=>(b("data-v-8dbb25e6"),s=s(),C(),s),x=o(()=>n("h3",null,"stop:阻止冒泡(以点击事件为例)",-1)),w=o(()=>n("h3",null,"prevent:阻止默认行为",-1)),S=o(()=>n("div",null,[n("a",{href:""},"未阻止链接")],-1)),V=o(()=>n("h3",null,"阻止表单提交默认行为(重新加载页面)",-1)),I=o(()=>n("input",null,null,-1)),B=o(()=>n("button",null,"提交表单",-1)),F=[I,B],K=o(()=>n("h3",null,"self修饰符",-1)),U=o(()=>n("p",null,"测试:点击我",-1)),D=[U],M=o(()=>n("p",null,"测试",-1)),j=[M],z=o(()=>n("h3",null,"v-model修饰符",-1)),A=o(()=>n("p",null,"默认情况下，v-model同步输入框的值和数据。可以通过number这个修饰符，转变为在change事件再同步。",-1)),E=o(()=>n("p",null,"number自动将用户的输入值转化为数值类型",-1)),N=o(()=>n("p",null,"trim自动过滤用户输入的首尾空格",-1)),O=o(()=>n("h3",null,"键盘事件的修饰符",-1)),T=o(()=>n("p",null,"在我们的项目经常需要监听一些键盘事件来触发程序的执行，而Vue中允许在监听的时候添加关键修饰符：",-1)),q=["onKeyup"],G=o(()=>n("input",null,null,-1)),H=o(()=>n("pre",null,`      全部的按键别名：
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
    `,-1)),J=o(()=>n("h3",null,"once修饰符(方法只执行一次)",-1)),L=o(()=>n("input",null,null,-1)),P=h({__name:"9.modifier",setup(s){const d=()=>{console.log("父元素点击事件")},i=()=>{console.log("子元素")},r=()=>{console.log("表单提交")},t=v(),p=()=>{console.log("键盘修饰符")};return(Q,l)=>(m(),f(g,null,[x,n("div",{style:{height:"100px",background:"red"},onClick:d},[n("p",{onClick:i},"没使用stop修饰符"),n("p",{onClick:u(i,["stop"])},"使用stop修饰符")]),w,n("div",null,[n("div",null,[n("a",{href:"",onClick:l[0]||(l[0]=u(()=>{},["prevent"]))},"阻止链接")]),S,n("div",null,[V,n("form",{onSubmit:r},F,32)])]),K,n("div",{style:{height:"100px",background:"red"},onClick:d},D),n("div",{style:{height:"100px",background:"red"},onClick:u(d,["self"])},j),z,n("div",null,[A,c(n("input",{"onUpdate:modelValue":l[1]||(l[1]=e=>t.value=e)},null,512),[[_,t.value,void 0,{lazy:!0}]]),E,c(n("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>t.value=e)},null,512),[[_,t.value,void 0,{number:!0}]]),N,c(n("input",{"onUpdate:modelValue":l[3]||(l[3]=e=>t.value=e)},null,512),[[_,t.value,void 0,{trim:!0}]]),n("div",null,a(t.value)+a(typeof t.value),1)]),O,T,n("div",null,[n("input",{onKeyup:k(u(p,["ctrl"]),["enter"])},null,40,q),G,H]),J,n("div",{onClickOnce:i},"按钮",32),n("div",{onClick:i},[L,n("div",{onClick:p},"1")])],64))}}),W=y(P,[["__scopeId","data-v-8dbb25e6"]]);export{W as default};
