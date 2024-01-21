import{P as g,ag as xe,V as x,W as s,ah as E,ai as C,aj as me,ak as pe,al as Ce,d as A,r as V,X as _e,$ as we,am as ye,a0 as ze,a1 as Se,a2 as Re,Y,an as Te,a3 as Ee,f as U,ao as G,ap as $e,aq as Le,a6 as Ne,ar as Me,a7 as Be,ab as I,o as f,c as m,a as l,ae as De,u as v,af as Ve,g as Ue,t as B,F as K,b as j,h as Fe,m as D,q as y,T as He,x as W,as as Ie,E as q,p as Ke,l as je,_ as Pe}from"./index-WJebj2m3.js";import{c as Ae}from"./data-8nCsPulo.js";import{N as Oe}from"./InputNumber-Ce-7SZy7.js";import"./mock-0PiHM-V7.js";const Ge=g("svg",{viewBox:"0 0 64 64",class:"check-icon"},g("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),We=g("svg",{viewBox:"0 0 100 100",class:"line-icon"},g("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),qe=xe("n-checkbox-group"),Ye=x([s("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[E("show-label","line-height: var(--n-label-line-height);"),x("&:hover",[s("checkbox-box",[C("border","border: var(--n-border-checked);")])]),x("&:focus:not(:active)",[s("checkbox-box",[C("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),E("inside-table",[s("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),E("checked",[s("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[s("checkbox-icon",[x(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),E("indeterminate",[s("checkbox-box",[s("checkbox-icon",[x(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),x(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),E("checked, indeterminate",[x("&:focus:not(:active)",[s("checkbox-box",[C("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),s("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[C("border",{border:"var(--n-border-checked)"})])]),E("disabled",{cursor:"not-allowed"},[E("checked",[s("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[C("border",{border:"var(--n-border-disabled-checked)"}),s("checkbox-icon",[x(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),s("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[C("border",`
 border: var(--n-border-disabled);
 `),s("checkbox-icon",[x(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),C("label",`
 color: var(--n-text-color-disabled);
 `)]),s("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),s("checkbox-box",`
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
 `),s("checkbox-icon",`
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
 `),me({left:"1px",top:"1px"})])]),C("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[x("&:empty",{display:"none"})])]),pe(s("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),Ce(s("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Xe=Object.assign(Object.assign({},Y.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),P=A({name:"Checkbox",props:Xe,setup(c){const _=V(null),{mergedClsPrefixRef:a,inlineThemeDisabled:k,mergedRtlRef:$}=_e(c),z=we(c,{mergedSize(o){const{size:p}=c;if(p!==void 0)return p;if(h){const{value:b}=h.mergedSizeRef;if(b!==void 0)return b}if(o){const{mergedSize:b}=o;if(b!==void 0)return b.value}return"medium"},mergedDisabled(o){const{disabled:p}=c;if(p!==void 0)return p;if(h){if(h.disabledRef.value)return!0;const{maxRef:{value:b},checkedCountRef:T}=h;if(b!==void 0&&T.value>=b&&!e.value)return!0;const{minRef:{value:N}}=h;if(N!==void 0&&T.value<=N&&e.value)return!0}return o?o.disabled.value:!1}}),{mergedDisabledRef:S,mergedSizeRef:R}=z,h=ye(qe,null),i=V(c.defaultChecked),n=ze(c,"checked"),r=Se(n,i),e=Re(()=>{if(h){const o=h.valueSetRef.value;return o&&c.value!==void 0?o.has(c.value):!1}else return r.value===c.checkedValue}),d=Y("Checkbox","-checkbox",Ye,Te,c,a);function t(o){if(h&&c.value!==void 0)h.toggleCheckbox(!e.value,c.value);else{const{onChange:p,"onUpdate:checked":b,onUpdateChecked:T}=c,{nTriggerFormInput:N,nTriggerFormChange:H}=z,M=e.value?c.uncheckedValue:c.checkedValue;b&&I(b,M,o),T&&I(T,M,o),p&&I(p,M,o),N(),H(),i.value=M}}function u(o){S.value||t(o)}function w(o){if(!S.value)switch(o.key){case" ":case"Enter":t(o)}}function F(o){switch(o.key){case" ":o.preventDefault()}}const J={focus:()=>{var o;(o=_.value)===null||o===void 0||o.focus()},blur:()=>{var o;(o=_.value)===null||o===void 0||o.blur()}},Q=Ee("Checkbox",$,a),O=U(()=>{const{value:o}=R,{common:{cubicBezierEaseInOut:p},self:{borderRadius:b,color:T,colorChecked:N,colorDisabled:H,colorTableHeader:M,colorTableHeaderModal:Z,colorTableHeaderPopover:ee,checkMarkColor:oe,checkMarkColorDisabled:ce,border:ae,borderFocus:re,borderDisabled:le,borderChecked:ne,boxShadowFocus:te,textColor:se,textColorDisabled:ie,checkMarkColorDisabledChecked:de,colorDisabledChecked:he,borderDisabledChecked:ue,labelPadding:be,labelLineHeight:ke,labelFontWeight:ve,[G("fontSize",o)]:fe,[G("size",o)]:ge}}=d.value;return{"--n-label-line-height":ke,"--n-label-font-weight":ve,"--n-size":ge,"--n-bezier":p,"--n-border-radius":b,"--n-border":ae,"--n-border-checked":ne,"--n-border-focus":re,"--n-border-disabled":le,"--n-border-disabled-checked":ue,"--n-box-shadow-focus":te,"--n-color":T,"--n-color-checked":N,"--n-color-table":M,"--n-color-table-modal":Z,"--n-color-table-popover":ee,"--n-color-disabled":H,"--n-color-disabled-checked":he,"--n-text-color":se,"--n-text-color-disabled":ie,"--n-check-mark-color":oe,"--n-check-mark-color-disabled":ce,"--n-check-mark-color-disabled-checked":de,"--n-font-size":fe,"--n-label-padding":be}}),L=k?$e("checkbox",U(()=>R.value[0]),O,c):void 0;return Object.assign(z,J,{rtlEnabled:Q,selfRef:_,mergedClsPrefix:a,mergedDisabled:S,renderedChecked:e,mergedTheme:d,labelId:Le(),handleClick:u,handleKeyUp:w,handleKeyDown:F,cssVars:k?void 0:O,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender})},render(){var c;const{$slots:_,renderedChecked:a,mergedDisabled:k,indeterminate:$,privateInsideTable:z,cssVars:S,labelId:R,label:h,mergedClsPrefix:i,focusable:n,handleKeyUp:r,handleKeyDown:e,handleClick:d}=this;(c=this.onRender)===null||c===void 0||c.call(this);const t=Ne(_.default,u=>h||u?g("span",{class:`${i}-checkbox__label`,id:R},h||u):null);return g("div",{ref:"selfRef",class:[`${i}-checkbox`,this.themeClass,this.rtlEnabled&&`${i}-checkbox--rtl`,a&&`${i}-checkbox--checked`,k&&`${i}-checkbox--disabled`,$&&`${i}-checkbox--indeterminate`,z&&`${i}-checkbox--inside-table`,t&&`${i}-checkbox--show-label`],tabindex:k||!n?void 0:0,role:"checkbox","aria-checked":$?"mixed":a,"aria-labelledby":R,style:S,onKeyup:r,onKeydown:e,onClick:d,onMousedown:()=>{Be("selectstart",window,u=>{u.preventDefault()},{once:!0})}},g("div",{class:`${i}-checkbox-box-wrapper`}," ",g("div",{class:`${i}-checkbox-box`},g(Me,null,{default:()=>this.indeterminate?g("div",{key:"indeterminate",class:`${i}-checkbox-icon`},We):g("div",{key:"check",class:`${i}-checkbox-icon`},Ge)}),g("div",{class:`${i}-checkbox-box__border`}))),t)}}),Je={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"},Qe=l("g",null,[l("g",null,[l("path",{d:`M133.1,128l23.6,290.7c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H133.1z M194.7,393L188,160
			h18.5l6.9,233H194.7z M265,393h-18V160h18V393z M317.3,393h-18.6l6.8-233H324L317.3,393z`})]),l("path",{d:`M364,92h-36l-26.3-23c-3.7-3.2-8.4-5-13.2-5h-64.8c-4.9,0-9.7,1.8-13.4,5L184,92h-36c-17.6,0-30,8.4-30,26h276
		C394,100.4,381.6,92,364,92z`})],-1),Ze=[Qe],eo=A({name:"IosTrash",render:function(_,a){return f(),m("svg",Je,Ze)}}),X=c=>(Ke("data-v-71398a72"),c=c(),je(),c),oo={class:"goods-cart"},co={class:"cart-top flex-between"},ao={class:"goods-list"},ro={key:0,class:"goods-stop"},lo={class:"goods-stop-title"},no=["onClick"],to={class:"goodsItem-cont flex-between"},so=["src"],io={class:"goodsItem-cont-more"},ho={class:"goodsItem-cont-name"},uo={class:"goodsItem-cont-more-bottom flex-between"},bo={class:"goods-spec"},ko=X(()=>l("div",{style:{height:"50px"}},null,-1)),vo={class:"goods-cart-bottom flex-between"},fo=X(()=>l("div",{class:"check-all-text"},"全选",-1)),go={class:"price"},xo=A({__name:"2.goods-car",setup(c){De(n=>({"118637fb":v(_)}));const{primaryColor:_}=Ve(),a=V(Ae()),k=V(!1),$=U(()=>{let n=0;return v(a).forEach(r=>{r.goodsList.forEach(()=>{n++})}),n}),z=()=>{v(a).forEach((n,r)=>{n.isCheck?a.value[r].goodsList.forEach(e=>{e.isCheck=!0}):a.value[r].goodsList.forEach(e=>{e.isCheck=!1})})},S=()=>{v(a).forEach((n,r)=>{let e=0;const{goodsList:d}=n;d.forEach(t=>{t.isCheck&&e++}),e===d.length&&e!==0?a.value[r].isCheck=!0:a.value[r].isCheck=!1})},R=n=>{n?v(a).forEach((r,e)=>{a.value[e].isCheck=!0,a.value[e].goodsList.forEach(d=>{d.isCheck=!0})}):v(a).forEach((r,e)=>{a.value[e].isCheck=!1,a.value[e].goodsList.forEach(d=>{d.isCheck=n})})},h=U(()=>{let n=!1,r=0,e=0;return a.value.forEach(d=>{d.isCheck&&r++;const{goodsList:t}=d;t.forEach(u=>{u.isCheck&&(e+=u.price*u.num)})}),r===a.value.length&&(n=!0),{isCheckAll:n,price:e.toFixed(2)}}),i=(n,r)=>{a.value[n].goodsList.splice(r,1)};return(n,r)=>(f(),m("div",oo,[l("div",co,[l("div",null,[Ue(" 购物车 "),l("span",null,"("+B($.value)+")",1)]),k.value?(f(),m("span",{key:1,onClick:r[1]||(r[1]=e=>k.value=!k.value)},"退出管理")):(f(),m("span",{key:0,onClick:r[0]||(r[0]=e=>k.value=!k.value)},"管理"))]),l("div",ao,[(f(!0),m(K,null,j(a.value,(e,d)=>(f(),Fe(W,{key:d,name:"list"},{default:D(()=>[e.goodsList.length?(f(),m("div",ro,[l("div",lo,[y(v(P),{checked:e.isCheck,"onUpdate:checked":t=>e.isCheck=t,onChange:z},{default:D(()=>[l("div",null,B(e.shopName),1)]),_:2},1032,["checked","onUpdate:checked"])]),y(He,{name:"list"},{default:D(()=>[(f(!0),m(K,null,j(e.goodsList,(t,u)=>(f(),m("div",{class:"goods-item flex-between",key:u},[y(W,null,{default:D(()=>[k.value?(f(),m("div",{key:0,class:"goods-item-delete",onClick:w=>i(d,u)},[y(v(Ie),null,{default:D(()=>[y(v(eo))]),_:1})],8,no)):q("",!0)]),_:2},1024),y(v(P),{checked:t.isCheck,"onUpdate:checked":w=>t.isCheck=w,onChange:S},null,8,["checked","onUpdate:checked"]),l("div",to,[l("img",{src:t.goodsImg,alt:""},null,8,so),l("div",io,[l("div",ho,B(t.goodsName),1),l("div",uo,[l("div",bo,[l("div",null,[(f(!0),m(K,null,j(t.goodsSpec,(w,F)=>(f(),m("span",{key:F},B(w),1))),128))]),l("div",null,"￥"+B(t.price),1)]),y(v(Oe),{value:t.num,"onUpdate:value":w=>t.num=w,range:[1,10]},null,8,["value","onUpdate:value"])])])])]))),128))]),_:2},1024)])):q("",!0)]),_:2},1024))),128))]),ko,l("div",vo,[y(v(P),{checked:h.value.isCheckAll,onChange:R},{default:D(()=>[fo]),_:1},8,["checked"]),l("div",go,"￥"+B(h.value.price),1)])]))}}),wo=Pe(xo,[["__scopeId","data-v-71398a72"]]);export{wo as default};
