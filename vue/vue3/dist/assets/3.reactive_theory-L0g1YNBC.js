import{d as a,o as l,c as f,g as u,t as i,u as y,a as _,F as g}from"./index-WJebj2m3.js";const b=a({__name:"3.reactive_theory",setup(d){const n=o=>{if(typeof o=="object")if(o instanceof Array)o.forEach((e,t)=>{typeof e=="object"&&(e[t]=n(e))});else for(const e in o)typeof o[e]=="object"&&(o[e]=n(o[e]));else console.warn(`您传入的内容:${o}不是一个对象`);return new Proxy(o,{get(e,t){return console.log("读取"),Reflect.get(e,t)},set(e,t,s){return console.log("修改"),Reflect.set(e,t,s),!0},deleteProperty(e,t){return console.log("删除"),Reflect.deleteProperty(e,t)}})},r=n({name:"渣渣辉"}),c=()=>{r.name="我是渣渣辉"};return(o,e)=>(l(),f(g,null,[u(i(y(r))+" ",1),_("button",{onClick:c},"按钮")],64))}});export{b as default};