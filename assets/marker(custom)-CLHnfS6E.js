import{P as i}from"./index.vue_vue_type_style_index_0_scoped_3c63ca2e_lang-63-H3oCd.js";import"./index-Ce2Tcrdf.js";import{u as d}from"./useAMap-CMssfdi3.js";import{h as c,o as p,j as m,B as u,a as l,c as f,w as v,e as M,u as k,b as w}from"./index-BtQ9Oy6z.js";import{b as s}from"./route-block-B_A1xBdJ.js";import"./commonjsHelpers-CE1G-McA.js";const A="/learning/assets/yy-location.png-D8qFGghd.png",_={__name:"marker(custom)",setup(g){const{primaryColor:y}=c();let r,a=null;p(()=>{d(e=>{r=new e.Map("container",{viewMode:"3D",zoom:11,center:[102.8495453,24.892828]}),t(),r.on("click",({lnglat:o})=>{t([o.lng,o.lat])})})});function t(e=[102.8495453,24.892828]){a&&(a.setMap(null),a=null),new AMap.Geocoder().getAddress(new AMap.LngLat(e[0],e[1]),(B,n)=>{a=new AMap.Marker({position:new AMap.LngLat(e[0],e[1]),content:`<div class="bmap marker">
                    <img src="${A}" alt="">
                    <div class="info">
                      <div>地址:${n.regeocode.formattedAddress}</div>
                      <div>经纬度:${e[0]},${e[1]}</div>
                    <div>${()=>m(u)}</div>
                    </div>
                  </div>`,offset:new AMap.Pixel(-15,-38)}),r.add(a),r.setCenter(e)})}return l(()=>{r?.destroy()}),(e,o)=>(w(),f(k(i),{title:"自定义点标记"},{default:v(()=>[...o[0]||(o[0]=[M("div",{id:"container"},null,-1)])]),_:1}))}};typeof s=="function"&&s(_);export{_ as default};
