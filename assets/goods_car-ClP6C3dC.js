import{aG as me,j as g,O as x,L as i,aZ as pe,a_ as Ce,P as S,M as C,R as _e,d as I,T as we,a3 as ye,ae as ze,r as V,U as Re,X as Se,Y as Te,a9 as $e,W as Le,ai as Ee,V as X,aa as Me,l as U,Z as Ne,a$ as Be,b0 as De,$ as G,a2 as K,n as m,b as f,e as l,h as Ve,g as Ue,t as N,F as j,s as P,f as w,w as B,u as v,c as Fe,z as W,av as Y,b1 as He,b2 as Ke,i as je,_ as Pe}from"./index-BtQ9Oy6z.js";import{c as Ae}from"./data-CaihkWLQ.js";import{N as Ie}from"./InputNumber-BzDOl_FX.js";import{b as Z}from"./route-block-B_A1xBdJ.js";import"./mock-Ch6N_ee5.js";import"./commonjsHelpers-CE1G-McA.js";import"./Add-Bj50YL7-.js";const Oe=me("n-checkbox-group"),Ge=()=>g("svg",{viewBox:"0 0 64 64",class:"check-icon"},g("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),We=()=>g("svg",{viewBox:"0 0 100 100",class:"line-icon"},g("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),Ye=x([i("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),x("&:hover",[i("checkbox-box",[C("border","border: var(--n-border-checked);")])]),x("&:focus:not(:active)",[i("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[i("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[i("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[i("checkbox-icon",[x(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[i("checkbox-box",[i("checkbox-icon",[x(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),x(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[x("&:focus:not(:active)",[i("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),i("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[i("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),i("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),i("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",`
 border: var(--n-border-disabled);
 `),i("checkbox-icon",[x(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),C("label",`
 color: var(--n-text-color-disabled);
 `)]),i("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),i("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[C("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),i("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[x(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),_e({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[x("&:empty",{display:"none"})])]),pe(i("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Ce(i("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Ze=Object.assign(Object.assign({},X.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),A=I({name:"Checkbox",props:Ze,setup(r){const h=Ee(Oe,null),a=V(null),{mergedClsPrefixRef:b,inlineThemeDisabled:y,mergedRtlRef:D}=Re(r),T=V(r.defaultChecked),$=Se(r,"checked"),z=Te($,T),t=$e(()=>{if(h){const o=h.valueSetRef.value;return o&&r.value!==void 0?o.has(r.value):!1}else return z.value===r.checkedValue}),n=Le(r,{mergedSize(o){const{size:p}=r;if(p!==void 0)return p;if(h){const{value:k}=h.mergedSizeRef;if(k!==void 0)return k}if(o){const{mergedSize:k}=o;if(k!==void 0)return k.value}return"medium"},mergedDisabled(o){const{disabled:p}=r;if(p!==void 0)return p;if(h){if(h.disabledRef.value)return!0;const{maxRef:{value:k},checkedCountRef:R}=h;if(k!==void 0&&R.value>=k&&!t.value)return!0;const{minRef:{value:E}}=h;if(E!==void 0&&R.value<=E&&t.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:e,mergedSizeRef:c}=n,d=X("Checkbox","-checkbox",Ye,De,r,b);function s(o){if(h&&r.value!==void 0)h.toggleCheckbox(!t.value,r.value);else{const{onChange:p,"onUpdate:checked":k,onUpdateChecked:R}=r,{nTriggerFormInput:E,nTriggerFormChange:H}=n,M=t.value?r.uncheckedValue:r.checkedValue;k&&K(k,M,o),R&&K(R,M,o),p&&K(p,M,o),E(),H(),T.value=M}}function u(o){e.value||s(o)}function _(o){if(!e.value)switch(o.key){case" ":case"Enter":s(o)}}function F(o){switch(o.key){case" ":o.preventDefault()}}const J={focus:()=>{var o;(o=a.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=a.value)===null||o===void 0||o.blur()}},Q=Me("Checkbox",D,b),O=U(()=>{const{value:o}=c,{common:{cubicBezierEaseInOut:p},self:{borderRadius:k,color:R,colorChecked:E,colorDisabled:H,colorTableHeader:M,colorTableHeaderModal:ee,colorTableHeaderPopover:oe,checkMarkColor:ce,checkMarkColorDisabled:ae,border:re,borderFocus:ne,borderDisabled:le,borderChecked:te,boxShadowFocus:se,textColor:ie,textColorDisabled:de,checkMarkColorDisabledChecked:he,colorDisabledChecked:be,borderDisabledChecked:ue,labelPadding:ke,labelLineHeight:ve,labelFontWeight:fe,[G("fontSize",o)]:ge,[G("size",o)]:xe}}=d.value;return{"--n-label-line-height":ve,"--n-label-font-weight":fe,"--n-size":xe,"--n-bezier":p,"--n-border-radius":k,"--n-border":re,"--n-border-checked":te,"--n-border-focus":ne,"--n-border-disabled":le,"--n-border-disabled-checked":ue,"--n-box-shadow-focus":se,"--n-color":R,"--n-color-checked":E,"--n-color-table":M,"--n-color-table-modal":ee,"--n-color-table-popover":oe,"--n-color-disabled":H,"--n-color-disabled-checked":be,"--n-text-color":ie,"--n-text-color-disabled":de,"--n-check-mark-color":ce,"--n-check-mark-color-disabled":ae,"--n-check-mark-color-disabled-checked":he,"--n-font-size":ge,"--n-label-padding":ke}}),L=y?Ne("checkbox",U(()=>c.value[0]),O,r):void 0;return Object.assign(n,J,{rtlEnabled:Q,selfRef:a,mergedClsPrefix:b,mergedDisabled:e,renderedChecked:t,mergedTheme:d,labelId:Be(),handleClick:u,handleKeyUp:_,handleKeyDown:F,cssVars:y?void 0:O,themeClass:L?.themeClass,onRender:L?.onRender})},render(){var r;const{$slots:h,renderedChecked:a,mergedDisabled:b,indeterminate:y,privateInsideTable:D,cssVars:T,labelId:$,label:z,mergedClsPrefix:t,focusable:n,handleKeyUp:e,handleKeyDown:c,handleClick:d}=this;(r=this.onRender)===null||r===void 0||r.call(this);const s=we(h.default,u=>z||u?g("span",{class:`${t}-checkbox__label`,id:$},z||u):null);return g("div",{ref:"selfRef",class:[`${t}-checkbox`,this.themeClass,this.rtlEnabled&&`${t}-checkbox--rtl`,a&&`${t}-checkbox--checked`,b&&`${t}-checkbox--disabled`,y&&`${t}-checkbox--indeterminate`,D&&`${t}-checkbox--inside-table`,s&&`${t}-checkbox--show-label`],tabindex:b||!n?void 0:0,role:"checkbox","aria-checked":y?"mixed":a,"aria-labelledby":$,style:T,onKeyup:e,onKeydown:c,onClick:d,onMousedown:()=>{ze("selectstart",window,u=>{u.preventDefault()},{once:!0})}},g("div",{class:`${t}-checkbox-box-wrapper`}," ",g("div",{class:`${t}-checkbox-box`},g(ye,null,{default:()=>this.indeterminate?g("div",{key:"indeterminate",class:`${t}-checkbox-icon`},We()):g("div",{key:"check",class:`${t}-checkbox-icon`},Ge())}),g("div",{class:`${t}-checkbox-box__border`}))),s)}}),Xe={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},qe=l("g",null,[l("g",null,[l("path",{d:`M133.1,128l23.6,290.7c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H133.1z M194.7,393L188,160
			h18.5l6.9,233H194.7z M265,393h-18V160h18V393z M317.3,393h-18.6l6.8-233H324L317.3,393z`})]),l("path",{d:`M364,92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9,0-9.7,1.8-13.4,5L184,92h-36c-17.6,0-30,8.4-30,26h276
		C394,100.4,381.6,92,364,92z`})],-1),Je=[qe],Qe=I({name:"IosTrash",render:function(h,a){return f(),m("svg",Xe,Je)}}),eo={class:"goods-cart"},oo={class:"cart-top flex-between"},co={class:"goods-list"},ao={key:0,class:"goods-stop"},ro={class:"goods-stop-title"},no=["onClick"],lo={class:"goodsItem-cont flex-between"},to=["src"],so={class:"goodsItem-cont-more"},io={class:"goodsItem-cont-name"},ho={class:"goodsItem-cont-more-bottom flex-between"},bo={class:"goods-spec"},uo={class:"goods-cart-bottom flex-between"},ko={class:"price"},q=I({__name:"goods_car",setup(r){je(n=>({v542f41d8:v(h)}));const{primaryColor:h}=Ve(),a=V(Ae()),b=V(!1),y=U(()=>{let n=0;return v(a).forEach(e=>{e.goodsList.forEach(()=>{n++})}),n}),D=()=>{v(a).forEach((n,e)=>{n.isCheck?a.value[e].goodsList.forEach(c=>{c.isCheck=!0}):a.value[e].goodsList.forEach(c=>{c.isCheck=!1})})},T=()=>{v(a).forEach((n,e)=>{let c=0;const{goodsList:d}=n;d.forEach(s=>{s.isCheck&&c++}),c===d.length&&c!==0?a.value[e].isCheck=!0:a.value[e].isCheck=!1})},$=n=>{n?v(a).forEach((e,c)=>{a.value[c].isCheck=!0,a.value[c].goodsList.forEach(d=>{d.isCheck=!0})}):v(a).forEach((e,c)=>{a.value[c].isCheck=!1,a.value[c].goodsList.forEach(d=>{d.isCheck=n})})},z=U(()=>{let n=!1,e=0,c=0;return a.value.forEach(d=>{d.isCheck&&e++;const{goodsList:s}=d;s.forEach(u=>{u.isCheck&&(c+=u.price*u.num)})}),e===a.value.length&&(n=!0),{isCheckAll:n,price:c.toFixed(2)}}),t=(n,e)=>{a.value[n]?.goodsList.splice(e,1)};return(n,e)=>(f(),m("div",eo,[l("div",oo,[l("div",null,[e[2]||(e[2]=Ue(" 购物车 ",-1)),l("span",null,"("+N(y.value)+")",1)]),b.value?(f(),m("span",{key:1,onClick:e[1]||(e[1]=c=>b.value=!b.value)},"退出管理")):(f(),m("span",{key:0,onClick:e[0]||(e[0]=c=>b.value=!b.value)},"管理"))]),l("div",co,[(f(!0),m(j,null,P(a.value,(c,d)=>(f(),Fe(Y,{key:d,name:"list"},{default:B(()=>[c.goodsList.length?(f(),m("div",ao,[l("div",ro,[w(v(A),{checked:c.isCheck,"onUpdate:checked":s=>c.isCheck=s,onChange:D},{default:B(()=>[l("div",null,N(c.shopName),1)]),_:2},1032,["checked","onUpdate:checked"])]),w(Ke,{name:"list"},{default:B(()=>[(f(!0),m(j,null,P(c.goodsList,(s,u)=>(f(),m("div",{class:"goods-item flex-between",key:u},[w(Y,null,{default:B(()=>[b.value?(f(),m("div",{key:0,class:"goods-item-delete",onClick:_=>t(d,u)},[w(v(He),null,{default:B(()=>[w(v(Qe))]),_:1})],8,no)):W("",!0)]),_:2},1024),w(v(A),{checked:s.isCheck,"onUpdate:checked":_=>s.isCheck=_,onChange:T},null,8,["checked","onUpdate:checked"]),l("div",lo,[l("img",{src:s.goodsImg,alt:""},null,8,to),l("div",so,[l("div",io,N(s.goodsName),1),l("div",ho,[l("div",bo,[l("div",null,[(f(!0),m(j,null,P(s.goodsSpec,(_,F)=>(f(),m("span",{key:F},N(_),1))),128))]),l("div",null,"￥"+N(s.price),1)]),w(v(Ie),{value:s.num,"onUpdate:value":_=>s.num=_,range:[1,10]},null,8,["value","onUpdate:value"])])])])]))),128))]),_:2},1024)])):W("",!0)]),_:2},1024))),128))]),e[4]||(e[4]=l("div",{style:{height:"50px"}},null,-1)),l("div",uo,[w(v(A),{checked:z.value.isCheckAll,onChange:$},{default:B(()=>[...e[3]||(e[3]=[l("div",{class:"check-all-text"},"全选",-1)])]),_:1},8,["checked"]),l("div",ko,"￥"+N(z.value.price),1)])]))}});typeof Z=="function"&&Z(q);const _o=Pe(q,[["__scopeId","data-v-db69ed85"]]);export{_o as default};
