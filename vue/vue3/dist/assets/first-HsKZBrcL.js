import{S as l,P as m,W as _,B as p,M as h,b as f,O as u}from"./OrbitControls-PK4fmBsq.js";import{_ as b,y as w,o as x,c as y}from"./index-WJebj2m3.js";const B={class:"box"},M={__name:"first",setup(g){let o,n,t;const a=()=>{o=new l;const e=document.querySelector(".box");n=new m(75,e.clientWidth/e.clientHeight),n.position.set(0,0,5),t=new _,t.setSize(e.clientWidth,e.clientHeight);const c=new p(1,1,1),i=new h({color:"red"}),s=new f(c,i);o.add(s);const d=()=>{s.rotation.x+=.01,s.rotation.y+=.01,r()};r(),new u(n,t.domElement).addEventListener("change",d),e.appendChild(t.domElement)},r=()=>{t.render(o,n)};return w(()=>{a()}),(e,c)=>(x(),y("div",B))}},W=b(M,[["__scopeId","data-v-3f84494b"]]);export{W as default};