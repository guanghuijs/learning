import{d as ue,aw as tt,ax as nt,y as Ze,ay as lt,az as rt,f as F,r as M,a2 as Ue,aA as ao,aB as We,P as i,aC as it,aD as go,aE as to,aF as at,aG as bo,J as Ro,aH as st,W as $,ah as U,V as Z,aI as we,aJ as ct,a0 as ne,a9 as uo,ai as I,X as Ee,Y as be,aK as dt,Z as zo,am as ho,aL as ut,ao as Y,ap as Le,aM as fo,aN as ze,x as To,aO as Po,a3 as vo,aP as ht,aQ as ft,D as Te,ac as Fo,aR as Pe,C as so,aS as vt,a6 as qe,aT as gt,aU as bt,a8 as pt,aV as Ge,R as mt,aW as Ct,aX as W,aY as po,ag as yt,ab as ve,aZ as wt,a_ as xt,a$ as St,b0 as kt,b1 as mo,b2 as Rt,F as zt,b3 as Tt,a1 as Co,b4 as Pt,b5 as Ft,$ as Ot,b6 as It,b7 as co,b8 as Mt,b9 as Bt,ba as _t,j as $t,s as Et,bb as yo,bc as Lt}from"./index-WJebj2m3.js";function Nt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function no(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(c=>{c&&c(n)})}}const At=new WeakSet;function Ht(e){At.add(e)}function wo(e){return e&-e}class Dt{constructor(t,n){this.l=t,this.min=n;const c=new Array(t+1);for(let l=0;l<t+1;++l)c[l]=0;this.ft=c}add(t,n){if(n===0)return;const{l:c,ft:l}=this;for(t+=1;t<=c;)l[t]+=n,t+=wo(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(t===void 0&&(t=this.l),t<=0)return 0;const{ft:n,min:c,l}=this;if(t>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=t*c;for(;t>0;)s+=n[t],t-=wo(t);return s}getBound(t){let n=0,c=this.l;for(;c>n;){const l=Math.floor((n+c)/2),s=this.sum(l);if(s>t){c=l;continue}else if(s<t){if(n===l)return this.sum(n+1)<=t?n+1:l;n=l}else return l}return n}}let Ke;function Vt(){return typeof document>"u"?!1:(Ke===void 0&&("matchMedia"in window?Ke=window.matchMedia("(pointer:coarse)").matches:Ke=!1),Ke)}let lo;function xo(){return typeof document>"u"?1:(lo===void 0&&(lo="chrome"in window?window.devicePixelRatio:1),lo)}const jt=to(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[to("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[to("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Wt=ue({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const t=tt();jt.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:nt,ssr:t}),Ze(()=>{const{defaultScrollIndex:g,defaultScrollKey:C}=e;g!=null?f({index:g}):C!=null&&f({key:C})});let n=!1,c=!1;lt(()=>{if(n=!1,!c){c=!0;return}f({top:S.value,left:p})}),rt(()=>{n=!0,c||(c=!0)});const l=F(()=>{const g=new Map,{keyField:C}=e;return e.items.forEach((y,N)=>{g.set(y[C],N)}),g}),s=M(null),u=M(void 0),r=new Map,w=F(()=>{const{items:g,itemSize:C,keyField:y}=e,N=new Dt(g.length,C);return g.forEach((A,H)=>{const D=A[y],V=r.get(D);V!==void 0&&N.add(H,V)}),N}),R=M(0);let p=0;const S=M(0),T=Ue(()=>Math.max(w.value.getBound(S.value-ao(e.paddingTop))-1,0)),m=F(()=>{const{value:g}=u;if(g===void 0)return[];const{items:C,itemSize:y}=e,N=T.value,A=Math.min(N+Math.ceil(g/y+1),C.length-1),H=[];for(let D=N;D<=A;++D)H.push(C[D]);return H}),f=(g,C)=>{if(typeof g=="number"){P(g,C,"auto");return}const{left:y,top:N,index:A,key:H,position:D,behavior:V,debounce:te=!0}=g;if(y!==void 0||N!==void 0)P(y,N,V);else if(A!==void 0)k(A,V,te);else if(H!==void 0){const J=l.value.get(H);J!==void 0&&k(J,V,te)}else D==="bottom"?P(0,Number.MAX_SAFE_INTEGER,V):D==="top"&&P(0,0,V)};let x,E=null;function k(g,C,y){const{value:N}=w,A=N.sum(g)+ao(e.paddingTop);if(!y)s.value.scrollTo({left:0,top:A,behavior:C});else{x=g,E!==null&&window.clearTimeout(E),E=window.setTimeout(()=>{x=void 0,E=null},16);const{scrollTop:H,offsetHeight:D}=s.value;if(A>H){const V=N.get(g);A+V<=H+D||s.value.scrollTo({left:0,top:A+V-D,behavior:C})}else s.value.scrollTo({left:0,top:A,behavior:C})}}function P(g,C,y){s.value.scrollTo({left:g,top:C,behavior:y})}function j(g,C){var y,N,A;if(n||e.ignoreItemResize||se(C.target))return;const{value:H}=w,D=l.value.get(g),V=H.get(D),te=(A=(N=(y=C.borderBoxSize)===null||y===void 0?void 0:y[0])===null||N===void 0?void 0:N.blockSize)!==null&&A!==void 0?A:C.contentRect.height;if(te===V)return;te-e.itemSize===0?r.delete(g):r.set(g,te-e.itemSize);const ce=te-V;if(ce===0)return;H.add(D,ce);const a=s.value;if(a!=null){if(x===void 0){const v=H.sum(D);a.scrollTop>v&&a.scrollBy(0,ce)}else if(D<x)a.scrollBy(0,ce);else if(D===x){const v=H.sum(D);te+v>a.scrollTop+a.offsetHeight&&a.scrollBy(0,ce)}re()}R.value++}const ee=!Vt();let G=!1;function K(g){var C;(C=e.onScroll)===null||C===void 0||C.call(e,g),(!ee||!G)&&re()}function X(g){var C;if((C=e.onWheel)===null||C===void 0||C.call(e,g),ee){const y=s.value;if(y!=null){if(g.deltaX===0&&(y.scrollTop===0&&g.deltaY<=0||y.scrollTop+y.offsetHeight>=y.scrollHeight&&g.deltaY>=0))return;g.preventDefault(),y.scrollTop+=g.deltaY/xo(),y.scrollLeft+=g.deltaX/xo(),re(),G=!0,at(()=>{G=!1})}}}function le(g){if(n||se(g.target)||g.contentRect.height===u.value)return;u.value=g.contentRect.height;const{onResize:C}=e;C!==void 0&&C(g)}function re(){const{value:g}=s;g!=null&&(S.value=g.scrollTop,p=g.scrollLeft)}function se(g){let C=g;for(;C!==null;){if(C.style.display==="none")return!0;C=C.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:l,itemsStyle:F(()=>{const{itemResizable:g}=e,C=We(w.value.sum());return R.value,[e.itemsStyle,{boxSizing:"content-box",height:g?"":C,minHeight:g?C:"",paddingTop:We(e.paddingTop),paddingBottom:We(e.paddingBottom)}]}),visibleItemsStyle:F(()=>(R.value,{transform:`translateY(${We(w.value.sum(T.value))})`})),viewportItems:m,listElRef:s,itemsElRef:M(null),scrollTo:f,handleListResize:le,handleListScroll:K,handleListWheel:X,handleItemResize:j}},render(){const{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:c}=this;return i(go,{onResize:this.handleListResize},{default:()=>{var l,s;return i("div",it(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?i("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[i(c,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(u=>{const r=u[t],w=n.get(r),R=this.$slots.default({item:u,index:w})[0];return e?i(go,{key:r,onResize:p=>this.handleItemResize(r,p)},{default:()=>R}):(R.key=r,R)})})]):(s=(l=this.$slots).empty)===null||s===void 0?void 0:s.call(l)])}})}});function Oo(e,t){t&&(Ze(()=>{const{value:n}=e;n&&bo.registerHandler(n,t)}),Ro(()=>{const{value:n}=e;n&&bo.unregisterHandler(n)}))}const Kt=ue({name:"Checkmark",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},i("g",{fill:"none"},i("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Ut=st("close",i("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{fill:"currentColor","fill-rule":"nonzero"},i("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),qt=ue({name:"Empty",render(){return i("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),i("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Gt=$("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[U("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),Z("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),we("disabled",[Z("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),Z("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),Z("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),Z("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),Z("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),U("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),U("round",[Z("&::before",`
 border-radius: 50%;
 `)])]),Yt=ue({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ct("-base-close",Gt,ne(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:n,absolute:c,round:l,isButtonTag:s}=e;return i(s?"button":"div",{type:s?"button":void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:s?void 0:"button",disabled:n,class:[`${t}-base-close`,c&&`${t}-base-close--absolute`,n&&`${t}-base-close--disabled`,l&&`${t}-base-close--round`],onMousedown:r=>{e.focusable||r.preventDefault()},onClick:e.onClick},i(uo,{clsPrefix:t},{default:()=>i(Ut,null)}))}}}),Zt=ue({props:{onFocus:Function,onBlur:Function},setup(e){return()=>i("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Xt=$("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[I("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[Z("+",[I("description",`
 margin-top: 8px;
 `)])]),I("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),I("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Jt=Object.assign(Object.assign({},be.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Qt=ue({name:"Empty",props:Jt,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=Ee(e),c=be("Empty","-empty",Xt,dt,e,t),{localeRef:l}=zo("Empty"),s=ho(ut,null),u=F(()=>{var p,S,T;return(p=e.description)!==null&&p!==void 0?p:(T=(S=s==null?void 0:s.mergedComponentPropsRef.value)===null||S===void 0?void 0:S.Empty)===null||T===void 0?void 0:T.description}),r=F(()=>{var p,S;return((S=(p=s==null?void 0:s.mergedComponentPropsRef.value)===null||p===void 0?void 0:p.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>i(qt,null))}),w=F(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:S},self:{[Y("iconSize",p)]:T,[Y("fontSize",p)]:m,textColor:f,iconColor:x,extraTextColor:E}}=c.value;return{"--n-icon-size":T,"--n-font-size":m,"--n-bezier":S,"--n-text-color":f,"--n-icon-color":x,"--n-extra-text-color":E}}),R=n?Le("empty",F(()=>{let p="";const{size:S}=e;return p+=S[0],p}),w,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:r,localizedDescription:F(()=>u.value||l.value.description),cssVars:n?void 0:w,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n==null||n(),i("div",{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?i("div",{class:`${t}-empty__icon`},e.icon?e.icon():i(uo,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?i("div",{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?i("div",{class:`${t}-empty__extra`},e.extra()):null)}});function en(e,t){return i(To,{name:"fade-in-scale-up-transition"},{default:()=>e?i(uo,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>i(Kt)}):null})}const So=ue({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:c,valueSetRef:l,renderLabelRef:s,renderOptionRef:u,labelFieldRef:r,valueFieldRef:w,showCheckmarkRef:R,nodePropsRef:p,handleOptionClick:S,handleOptionMouseEnter:T}=ho(fo),m=Ue(()=>{const{value:k}=n;return k?e.tmNode.key===k.key:!1});function f(k){const{tmNode:P}=e;P.disabled||S(k,P)}function x(k){const{tmNode:P}=e;P.disabled||T(k,P)}function E(k){const{tmNode:P}=e,{value:j}=m;P.disabled||j||T(k,P)}return{multiple:c,isGrouped:Ue(()=>{const{tmNode:k}=e,{parent:P}=k;return P&&P.rawNode.type==="group"}),showCheckmark:R,nodeProps:p,isPending:m,isSelected:Ue(()=>{const{value:k}=t,{value:P}=c;if(k===null)return!1;const j=e.tmNode.rawNode[w.value];if(P){const{value:ee}=l;return ee.has(j)}else return k===j}),labelField:r,renderLabel:s,renderOption:u,handleMouseMove:E,handleMouseEnter:x,handleClick:f}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:c,isGrouped:l,showCheckmark:s,nodeProps:u,renderOption:r,renderLabel:w,handleClick:R,handleMouseEnter:p,handleMouseMove:S}=this,T=en(n,e),m=w?[w(t,n),s&&T]:[ze(t[this.labelField],t,n),s&&T],f=u==null?void 0:u(t),x=i("div",Object.assign({},f,{class:[`${e}-base-select-option`,t.class,f==null?void 0:f.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:c,[`${e}-base-select-option--show-checkmark`]:s}],style:[(f==null?void 0:f.style)||"",t.style||""],onClick:no([R,f==null?void 0:f.onClick]),onMouseenter:no([p,f==null?void 0:f.onMouseenter]),onMousemove:no([S,f==null?void 0:f.onMousemove])}),i("div",{class:`${e}-base-select-option__content`},m));return t.render?t.render({node:x,option:t,selected:n}):r?r({node:x,option:t,selected:n}):x}}),ko=ue({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:c}=ho(fo);return{labelField:n,nodeProps:c,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:c,tmNode:{rawNode:l}}=this,s=c==null?void 0:c(l),u=t?t(l,!1):ze(l[this.labelField],l,!1),r=i("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),u);return l.render?l.render({node:r,option:l}):n?n({node:r,option:l,selected:!1}):r}}),on=$("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$("scrollbar",`
 max-height: var(--n-height);
 `),$("virtual-list",`
 max-height: var(--n-height);
 `),$("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[I("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),I("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),I("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),I("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),I("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[U("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),Z("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),Z("&:active",`
 color: var(--n-option-text-color-pressed);
 `),U("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),U("pending",[Z("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),U("selected",`
 color: var(--n-option-text-color-active);
 `,[Z("&::before",`
 background-color: var(--n-option-color-active);
 `),U("pending",[Z("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),U("disabled",`
 cursor: not-allowed;
 `,[we("selected",`
 color: var(--n-option-text-color-disabled);
 `),U("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),I("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Po({enterScale:"0.5"})])])]),tn=ue({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=Ee(e),c=vo("InternalSelectMenu",n,t),l=be("InternalSelectMenu","-internal-select-menu",on,ht,e,ne(e,"clsPrefix")),s=M(null),u=M(null),r=M(null),w=F(()=>e.treeMate.getFlattenedNodes()),R=F(()=>ft(w.value)),p=M(null);function S(){const{treeMate:a}=e;let v=null;const{value:q}=e;q===null?v=a.getFirstAvailableNode():(e.multiple?v=a.getNode((q||[])[(q||[]).length-1]):v=a.getNode(q),(!v||v.disabled)&&(v=a.getFirstAvailableNode())),N(v||null)}function T(){const{value:a}=p;a&&!e.treeMate.getNode(a.key)&&(p.value=null)}let m;Te(()=>e.show,a=>{a?m=Te(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():T(),Fo(A)):T()},{immediate:!0}):m==null||m()},{immediate:!0}),Ro(()=>{m==null||m()});const f=F(()=>ao(l.value.self[Y("optionHeight",e.size)])),x=F(()=>Pe(l.value.self[Y("padding",e.size)])),E=F(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),k=F(()=>{const a=w.value;return a&&a.length===0});function P(a){const{onToggle:v}=e;v&&v(a)}function j(a){const{onScroll:v}=e;v&&v(a)}function ee(a){var v;(v=r.value)===null||v===void 0||v.sync(),j(a)}function G(){var a;(a=r.value)===null||a===void 0||a.sync()}function K(){const{value:a}=p;return a||null}function X(a,v){v.disabled||N(v,!1)}function le(a,v){v.disabled||P(v)}function re(a){var v;Ge(a,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,a)}function se(a){var v;Ge(a,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,a)}function g(a){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,a),!e.focusable&&a.preventDefault()}function C(){const{value:a}=p;a&&N(a.getNext({loop:!0}),!0)}function y(){const{value:a}=p;a&&N(a.getPrev({loop:!0}),!0)}function N(a,v=!1){p.value=a,v&&A()}function A(){var a,v;const q=p.value;if(!q)return;const he=R.value(q.key);he!==null&&(e.virtualScroll?(a=u.value)===null||a===void 0||a.scrollTo({index:he}):(v=r.value)===null||v===void 0||v.scrollTo({index:he,elSize:f.value}))}function H(a){var v,q;!((v=s.value)===null||v===void 0)&&v.contains(a.target)&&((q=e.onFocus)===null||q===void 0||q.call(e,a))}function D(a){var v,q;!((v=s.value)===null||v===void 0)&&v.contains(a.relatedTarget)||(q=e.onBlur)===null||q===void 0||q.call(e,a)}so(fo,{handleOptionMouseEnter:X,handleOptionClick:le,valueSetRef:E,pendingTmNodeRef:p,nodePropsRef:ne(e,"nodeProps"),showCheckmarkRef:ne(e,"showCheckmark"),multipleRef:ne(e,"multiple"),valueRef:ne(e,"value"),renderLabelRef:ne(e,"renderLabel"),renderOptionRef:ne(e,"renderOption"),labelFieldRef:ne(e,"labelField"),valueFieldRef:ne(e,"valueField")}),so(vt,s),Ze(()=>{const{value:a}=r;a&&a.sync()});const V=F(()=>{const{size:a}=e,{common:{cubicBezierEaseInOut:v},self:{height:q,borderRadius:he,color:pe,groupHeaderTextColor:me,actionDividerColor:fe,optionTextColorPressed:ie,optionTextColor:Ce,optionTextColorDisabled:de,optionTextColorActive:Fe,optionOpacityDisabled:Oe,optionCheckColor:Ie,actionTextColor:Me,optionColorPending:xe,optionColorActive:Se,loadingColor:Be,loadingSize:_e,optionColorActivePending:$e,[Y("optionFontSize",a)]:Re,[Y("optionHeight",a)]:ke,[Y("optionPadding",a)]:ae}}=l.value;return{"--n-height":q,"--n-action-divider-color":fe,"--n-action-text-color":Me,"--n-bezier":v,"--n-border-radius":he,"--n-color":pe,"--n-option-font-size":Re,"--n-group-header-text-color":me,"--n-option-check-color":Ie,"--n-option-color-pending":xe,"--n-option-color-active":Se,"--n-option-color-active-pending":$e,"--n-option-height":ke,"--n-option-opacity-disabled":Oe,"--n-option-text-color":Ce,"--n-option-text-color-active":Fe,"--n-option-text-color-disabled":de,"--n-option-text-color-pressed":ie,"--n-option-padding":ae,"--n-option-padding-left":Pe(ae,"left"),"--n-option-padding-right":Pe(ae,"right"),"--n-loading-color":Be,"--n-loading-size":_e}}),{inlineThemeDisabled:te}=e,J=te?Le("internal-select-menu",F(()=>e.size[0]),V,e):void 0,ce={selfRef:s,next:C,prev:y,getPendingTmNode:K};return Oo(s,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:t,rtlEnabled:c,virtualListRef:u,scrollbarRef:r,itemSize:f,padding:x,flattenedNodes:w,empty:k,virtualListContainer(){const{value:a}=u;return a==null?void 0:a.listElRef},virtualListContent(){const{value:a}=u;return a==null?void 0:a.itemsElRef},doScroll:j,handleFocusin:H,handleFocusout:D,handleKeyUp:re,handleKeyDown:se,handleMouseDown:g,handleVirtualListResize:G,handleVirtualListScroll:ee,cssVars:te?void 0:V,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender},ce)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:c,themeClass:l,onRender:s}=this;return s==null||s(),i("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,this.rtlEnabled&&`${n}-base-select-menu--rtl`,l,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},qe(e.header,u=>u&&i("div",{class:`${n}-base-select-menu__header`,"data-header":!0,key:"header"},u)),this.loading?i("div",{class:`${n}-base-select-menu__loading`},i(gt,{clsPrefix:n,strokeWidth:20})):this.empty?i("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},pt(e.empty,()=>[i(Qt,{theme:c.peers.Empty,themeOverrides:c.peerOverrides.Empty})])):i(bt,{ref:"scrollbarRef",theme:c.peers.Scrollbar,themeOverrides:c.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?i(Wt,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:u})=>u.isGroup?i(ko,{key:u.key,clsPrefix:n,tmNode:u}):u.ignored?null:i(So,{clsPrefix:n,key:u.key,tmNode:u})}):i("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(u=>u.isGroup?i(ko,{key:u.key,clsPrefix:n,tmNode:u}):i(So,{clsPrefix:n,key:u.key,tmNode:u})))}),qe(e.action,u=>u&&[i("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},u),i(Zt,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),nn=e=>{const{textColor2:t,primaryColorHover:n,primaryColorPressed:c,primaryColor:l,infoColor:s,successColor:u,warningColor:r,errorColor:w,baseColor:R,borderColor:p,opacityDisabled:S,tagColor:T,closeIconColor:m,closeIconColorHover:f,closeIconColorPressed:x,borderRadiusSmall:E,fontSizeMini:k,fontSizeTiny:P,fontSizeSmall:j,fontSizeMedium:ee,heightMini:G,heightTiny:K,heightSmall:X,heightMedium:le,closeColorHover:re,closeColorPressed:se,buttonColor2Hover:g,buttonColor2Pressed:C,fontWeightStrong:y}=e;return Object.assign(Object.assign({},Ct),{closeBorderRadius:E,heightTiny:G,heightSmall:K,heightMedium:X,heightLarge:le,borderRadius:E,opacityDisabled:S,fontSizeTiny:k,fontSizeSmall:P,fontSizeMedium:j,fontSizeLarge:ee,fontWeightStrong:y,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:R,colorCheckable:"#0000",colorHoverCheckable:g,colorPressedCheckable:C,colorChecked:l,colorCheckedHover:n,colorCheckedPressed:c,border:`1px solid ${p}`,textColor:t,color:T,colorBordered:"rgb(250, 250, 252)",closeIconColor:m,closeIconColorHover:f,closeIconColorPressed:x,closeColorHover:re,closeColorPressed:se,borderPrimary:`1px solid ${W(l,{alpha:.3})}`,textColorPrimary:l,colorPrimary:W(l,{alpha:.12}),colorBorderedPrimary:W(l,{alpha:.1}),closeIconColorPrimary:l,closeIconColorHoverPrimary:l,closeIconColorPressedPrimary:l,closeColorHoverPrimary:W(l,{alpha:.12}),closeColorPressedPrimary:W(l,{alpha:.18}),borderInfo:`1px solid ${W(s,{alpha:.3})}`,textColorInfo:s,colorInfo:W(s,{alpha:.12}),colorBorderedInfo:W(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:W(s,{alpha:.12}),closeColorPressedInfo:W(s,{alpha:.18}),borderSuccess:`1px solid ${W(u,{alpha:.3})}`,textColorSuccess:u,colorSuccess:W(u,{alpha:.12}),colorBorderedSuccess:W(u,{alpha:.1}),closeIconColorSuccess:u,closeIconColorHoverSuccess:u,closeIconColorPressedSuccess:u,closeColorHoverSuccess:W(u,{alpha:.12}),closeColorPressedSuccess:W(u,{alpha:.18}),borderWarning:`1px solid ${W(r,{alpha:.35})}`,textColorWarning:r,colorWarning:W(r,{alpha:.15}),colorBorderedWarning:W(r,{alpha:.12}),closeIconColorWarning:r,closeIconColorHoverWarning:r,closeIconColorPressedWarning:r,closeColorHoverWarning:W(r,{alpha:.12}),closeColorPressedWarning:W(r,{alpha:.18}),borderError:`1px solid ${W(w,{alpha:.23})}`,textColorError:w,colorError:W(w,{alpha:.1}),colorBorderedError:W(w,{alpha:.08}),closeIconColorError:w,closeIconColorHoverError:w,closeIconColorPressedError:w,closeColorHoverError:W(w,{alpha:.12}),closeColorPressedError:W(w,{alpha:.18})})},ln={name:"Tag",common:mt,self:nn},rn=ln,an={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},sn=$("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[U("strong",`
 font-weight: var(--n-font-weight-strong);
 `),I("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),I("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),I("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),I("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),U("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[I("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),I("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),U("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),U("icon, avatar",[U("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),U("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),U("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[we("disabled",[Z("&:hover","background-color: var(--n-color-hover-checkable);",[we("checked","color: var(--n-text-color-hover-checkable);")]),Z("&:active","background-color: var(--n-color-pressed-checkable);",[we("checked","color: var(--n-text-color-pressed-checkable);")])]),U("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[we("disabled",[Z("&:hover","background-color: var(--n-color-checked-hover);"),Z("&:active","background-color: var(--n-color-checked-pressed);")])])])]),cn=Object.assign(Object.assign(Object.assign({},be.props),an),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),dn=yt("n-tag"),ro=ue({name:"Tag",props:cn,setup(e){const t=M(null),{mergedBorderedRef:n,mergedClsPrefixRef:c,inlineThemeDisabled:l,mergedRtlRef:s}=Ee(e),u=be("Tag","-tag",sn,rn,e,c);so(dn,{roundRef:ne(e,"round")});function r(m){if(!e.disabled&&e.checkable){const{checked:f,onCheckedChange:x,onUpdateChecked:E,"onUpdate:checked":k}=e;E&&E(!f),k&&k(!f),x&&x(!f)}}function w(m){if(e.triggerClickOnClose||m.stopPropagation(),!e.disabled){const{onClose:f}=e;f&&ve(f,m)}}const R={setTextContent(m){const{value:f}=t;f&&(f.textContent=m)}},p=vo("Tag",s,c),S=F(()=>{const{type:m,size:f,color:{color:x,textColor:E}={}}=e,{common:{cubicBezierEaseInOut:k},self:{padding:P,closeMargin:j,borderRadius:ee,opacityDisabled:G,textColorCheckable:K,textColorHoverCheckable:X,textColorPressedCheckable:le,textColorChecked:re,colorCheckable:se,colorHoverCheckable:g,colorPressedCheckable:C,colorChecked:y,colorCheckedHover:N,colorCheckedPressed:A,closeBorderRadius:H,fontWeightStrong:D,[Y("colorBordered",m)]:V,[Y("closeSize",f)]:te,[Y("closeIconSize",f)]:J,[Y("fontSize",f)]:ce,[Y("height",f)]:a,[Y("color",m)]:v,[Y("textColor",m)]:q,[Y("border",m)]:he,[Y("closeIconColor",m)]:pe,[Y("closeIconColorHover",m)]:me,[Y("closeIconColorPressed",m)]:fe,[Y("closeColorHover",m)]:ie,[Y("closeColorPressed",m)]:Ce}}=u.value,de=Pe(j);return{"--n-font-weight-strong":D,"--n-avatar-size-override":`calc(${a} - 8px)`,"--n-bezier":k,"--n-border-radius":ee,"--n-border":he,"--n-close-icon-size":J,"--n-close-color-pressed":Ce,"--n-close-color-hover":ie,"--n-close-border-radius":H,"--n-close-icon-color":pe,"--n-close-icon-color-hover":me,"--n-close-icon-color-pressed":fe,"--n-close-icon-color-disabled":pe,"--n-close-margin-top":de.top,"--n-close-margin-right":de.right,"--n-close-margin-bottom":de.bottom,"--n-close-margin-left":de.left,"--n-close-size":te,"--n-color":x||(n.value?V:v),"--n-color-checkable":se,"--n-color-checked":y,"--n-color-checked-hover":N,"--n-color-checked-pressed":A,"--n-color-hover-checkable":g,"--n-color-pressed-checkable":C,"--n-font-size":ce,"--n-height":a,"--n-opacity-disabled":G,"--n-padding":P,"--n-text-color":E||q,"--n-text-color-checkable":K,"--n-text-color-checked":re,"--n-text-color-hover-checkable":X,"--n-text-color-pressed-checkable":le}}),T=l?Le("tag",F(()=>{let m="";const{type:f,size:x,color:{color:E,textColor:k}={}}=e;return m+=f[0],m+=x[0],E&&(m+=`a${po(E)}`),k&&(m+=`b${po(k)}`),n.value&&(m+="c"),m}),S,e):void 0;return Object.assign(Object.assign({},R),{rtlEnabled:p,mergedClsPrefix:c,contentRef:t,mergedBordered:n,handleClick:r,handleCloseClick:w,cssVars:l?void 0:S,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:c,closable:l,color:{borderColor:s}={},round:u,onRender:r,$slots:w}=this;r==null||r();const R=qe(w.avatar,S=>S&&i("div",{class:`${n}-tag__avatar`},S)),p=qe(w.icon,S=>S&&i("div",{class:`${n}-tag__icon`},S));return i("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:c,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:u,[`${n}-tag--avatar`]:R,[`${n}-tag--icon`]:p,[`${n}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},p||R,i("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&l?i(Yt,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:u,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?i("div",{class:`${n}-tag__border`,style:{borderColor:s}}):null)}}),un=Z([$("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[$("base-loading",`
 color: var(--n-loading-color);
 `),$("base-selection-tags","min-height: var(--n-height);"),I("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),I("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[I("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[I("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[I("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),$("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),$("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[$("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[I("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),I("render-label",`
 color: var(--n-text-color);
 `)]),we("disabled",[Z("&:hover",[I("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),U("focus",[I("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),U("active",[I("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),U("disabled","cursor: not-allowed;",[I("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),I("render-label",`
 color: var(--n-text-color-disabled);
 `)]),$("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[I("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),I("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>U(`${e}-status`,[I("state-border",`border: var(--n-border-${e});`),we("disabled",[Z("&:hover",[I("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),U("active",[I("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),U("focus",[I("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[Z("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[I("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),hn=ue({name:"InternalSelection",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:n}=Ee(e),c=vo("InternalSelection",n,t),l=M(null),s=M(null),u=M(null),r=M(null),w=M(null),R=M(null),p=M(null),S=M(null),T=M(null),m=M(null),f=M(!1),x=M(!1),E=M(!1),k=be("InternalSelection","-internal-selection",un,wt,e,ne(e,"clsPrefix")),P=F(()=>e.clearable&&!e.disabled&&(E.value||e.active)),j=F(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),ee=F(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),G=F(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function K(){var d;const{value:b}=l;if(b){const{value:Q}=s;Q&&(Q.style.width=`${b.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=T.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function X(){const{value:d}=m;d&&(d.style.display="none")}function le(){const{value:d}=m;d&&(d.style.display="inline-block")}Te(ne(e,"active"),d=>{d||X()}),Te(ne(e,"pattern"),()=>{e.multiple&&Fo(K)});function re(d){const{onFocus:b}=e;b&&b(d)}function se(d){const{onBlur:b}=e;b&&b(d)}function g(d){const{onDeleteOption:b}=e;b&&b(d)}function C(d){const{onClear:b}=e;b&&b(d)}function y(d){const{onPatternInput:b}=e;b&&b(d)}function N(d){var b;(!d.relatedTarget||!(!((b=u.value)===null||b===void 0)&&b.contains(d.relatedTarget)))&&re(d)}function A(d){var b;!((b=u.value)===null||b===void 0)&&b.contains(d.relatedTarget)||se(d)}function H(d){C(d)}function D(){E.value=!0}function V(){E.value=!1}function te(d){!e.active||!e.filterable||d.target!==s.value&&d.preventDefault()}function J(d){g(d)}function ce(d){if(d.key==="Backspace"&&!a.value&&!e.pattern.length){const{selectedOptions:b}=e;b!=null&&b.length&&J(b[b.length-1])}}const a=M(!1);let v=null;function q(d){const{value:b}=l;if(b){const Q=d.target.value;b.textContent=Q,K()}e.ignoreComposition&&a.value?v=d:y(d)}function he(){a.value=!0}function pe(){a.value=!1,e.ignoreComposition&&y(v),v=null}function me(d){var b;x.value=!0,(b=e.onPatternFocus)===null||b===void 0||b.call(e,d)}function fe(d){var b;x.value=!1,(b=e.onPatternBlur)===null||b===void 0||b.call(e,d)}function ie(){var d,b;if(e.filterable)x.value=!1,(d=R.value)===null||d===void 0||d.blur(),(b=s.value)===null||b===void 0||b.blur();else if(e.multiple){const{value:Q}=r;Q==null||Q.blur()}else{const{value:Q}=w;Q==null||Q.blur()}}function Ce(){var d,b,Q;e.filterable?(x.value=!1,(d=R.value)===null||d===void 0||d.focus()):e.multiple?(b=r.value)===null||b===void 0||b.focus():(Q=w.value)===null||Q===void 0||Q.focus()}function de(){const{value:d}=s;d&&(le(),d.focus())}function Fe(){const{value:d}=s;d&&d.blur()}function Oe(d){const{value:b}=p;b&&b.setTextContent(`+${d}`)}function Ie(){const{value:d}=S;return d}function Me(){return s.value}let xe=null;function Se(){xe!==null&&window.clearTimeout(xe)}function Be(){e.active||(Se(),xe=window.setTimeout(()=>{G.value&&(f.value=!0)},100))}function _e(){Se()}function $e(d){d||(Se(),f.value=!1)}Te(G,d=>{d||(f.value=!1)}),Ze(()=>{xt(()=>{const d=R.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=x.value?-1:0)})}),Oo(u,e.onResize);const{inlineThemeDisabled:Re}=e,ke=F(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:b},self:{borderRadius:Q,color:Xe,placeholderColor:Je,textColor:Ne,paddingSingle:Ae,paddingMultiple:He,caretColor:Qe,colorDisabled:eo,textColorDisabled:De,placeholderColorDisabled:ye,colorActive:o,boxShadowFocus:h,boxShadowActive:z,boxShadowHover:L,border:B,borderFocus:O,borderHover:_,borderActive:oe,arrowColor:ge,arrowColorDisabled:oo,loadingColor:Mo,colorActiveWarning:Bo,boxShadowFocusWarning:_o,boxShadowActiveWarning:$o,boxShadowHoverWarning:Eo,borderWarning:Lo,borderFocusWarning:No,borderHoverWarning:Ao,borderActiveWarning:Ho,colorActiveError:Do,boxShadowFocusError:Vo,boxShadowActiveError:jo,boxShadowHoverError:Wo,borderError:Ko,borderFocusError:Uo,borderHoverError:qo,borderActiveError:Go,clearColor:Yo,clearColorHover:Zo,clearColorPressed:Xo,clearSize:Jo,arrowSize:Qo,[Y("height",d)]:et,[Y("fontSize",d)]:ot}}=k.value,Ve=Pe(Ae),je=Pe(He);return{"--n-bezier":b,"--n-border":B,"--n-border-active":oe,"--n-border-focus":O,"--n-border-hover":_,"--n-border-radius":Q,"--n-box-shadow-active":z,"--n-box-shadow-focus":h,"--n-box-shadow-hover":L,"--n-caret-color":Qe,"--n-color":Xe,"--n-color-active":o,"--n-color-disabled":eo,"--n-font-size":ot,"--n-height":et,"--n-padding-single-top":Ve.top,"--n-padding-multiple-top":je.top,"--n-padding-single-right":Ve.right,"--n-padding-multiple-right":je.right,"--n-padding-single-left":Ve.left,"--n-padding-multiple-left":je.left,"--n-padding-single-bottom":Ve.bottom,"--n-padding-multiple-bottom":je.bottom,"--n-placeholder-color":Je,"--n-placeholder-color-disabled":ye,"--n-text-color":Ne,"--n-text-color-disabled":De,"--n-arrow-color":ge,"--n-arrow-color-disabled":oo,"--n-loading-color":Mo,"--n-color-active-warning":Bo,"--n-box-shadow-focus-warning":_o,"--n-box-shadow-active-warning":$o,"--n-box-shadow-hover-warning":Eo,"--n-border-warning":Lo,"--n-border-focus-warning":No,"--n-border-hover-warning":Ao,"--n-border-active-warning":Ho,"--n-color-active-error":Do,"--n-box-shadow-focus-error":Vo,"--n-box-shadow-active-error":jo,"--n-box-shadow-hover-error":Wo,"--n-border-error":Ko,"--n-border-focus-error":Uo,"--n-border-hover-error":qo,"--n-border-active-error":Go,"--n-clear-size":Jo,"--n-clear-color":Yo,"--n-clear-color-hover":Zo,"--n-clear-color-pressed":Xo,"--n-arrow-size":Qo}}),ae=Re?Le("internal-selection",F(()=>e.size[0]),ke,e):void 0;return{mergedTheme:k,mergedClearable:P,mergedClsPrefix:t,rtlEnabled:c,patternInputFocused:x,filterablePlaceholder:j,label:ee,selected:G,showTagsPanel:f,isComposing:a,counterRef:p,counterWrapperRef:S,patternInputMirrorRef:l,patternInputRef:s,selfRef:u,multipleElRef:r,singleElRef:w,patternInputWrapperRef:R,overflowRef:T,inputTagElRef:m,handleMouseDown:te,handleFocusin:N,handleClear:H,handleMouseEnter:D,handleMouseLeave:V,handleDeleteOption:J,handlePatternKeyDown:ce,handlePatternInputInput:q,handlePatternInputBlur:fe,handlePatternInputFocus:me,handleMouseEnterCounter:Be,handleMouseLeaveCounter:_e,handleFocusout:A,handleCompositionEnd:pe,handleCompositionStart:he,onPopoverUpdateShow:$e,focus:Ce,focusInput:de,blur:ie,blurInput:Fe,updateCounter:Oe,getCounter:Ie,getTail:Me,renderLabel:e.renderLabel,cssVars:Re?void 0:ke,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender}},render(){const{status:e,multiple:t,size:n,disabled:c,filterable:l,maxTagCount:s,bordered:u,clsPrefix:r,ellipsisTagPopoverProps:w,onRender:R,renderTag:p,renderLabel:S}=this;R==null||R();const T=s==="responsive",m=typeof s=="number",f=T||m,x=i(kt,null,{default:()=>i(St,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var k,P;return(P=(k=this.$slots).arrow)===null||P===void 0?void 0:P.call(k)}})});let E;if(t){const{labelField:k}=this,P=y=>i("div",{class:`${r}-base-selection-tag-wrapper`,key:y.value},p?p({option:y,handleClose:()=>{this.handleDeleteOption(y)}}):i(ro,{size:n,closable:!y.disabled,disabled:c,onClose:()=>{this.handleDeleteOption(y)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(y,!0):ze(y[k],y,!0)})),j=()=>(m?this.selectedOptions.slice(0,s):this.selectedOptions).map(P),ee=l?i("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:c,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),i("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,G=T?()=>i("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},i(ro,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:c})):void 0;let K;if(m){const y=this.selectedOptions.length-s;y>0&&(K=i("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},i(ro,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:c},{default:()=>`+${y}`})))}const X=T?l?i(mo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:j,counter:G,tail:()=>ee}):i(mo,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:j,counter:G}):m&&K?j().concat(K):j(),le=f?()=>i("div",{class:`${r}-base-selection-popover`},T?j():this.selectedOptions.map(P)):void 0,re=f?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},w):null,g=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,C=l?i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},X,T?null:ee,x):i("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:c?void 0:0},X,x);E=i(zt,null,f?i(Rt,Object.assign({},re,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>C,default:le}):C,g)}else if(l){const k=this.pattern||this.isComposing,P=this.active?!k:!this.selected,j=this.active?!1:this.selected;E=i("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},i("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:c,disabled:c,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),j?i("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},i("div",{class:`${r}-base-selection-overlay__wrapper`},p?p({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,P?i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,x)}else E=i("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?i("div",{class:`${r}-base-selection-input`,title:Nt(this.label),key:"input"},i("div",{class:`${r}-base-selection-input__content`},p?p({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):i("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},i("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),x);return i("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},E,u?i("div",{class:`${r}-base-selection__border`}):null,u?i("div",{class:`${r}-base-selection__state-border`}):null)}});function Ye(e){return e.type==="group"}function Io(e){return e.type==="ignored"}function io(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function fn(e,t){return{getIsGroup:Ye,getIgnored:Io,getKey(c){return Ye(c)?c.name||c.key||"key-required":c[e]},getChildren(c){return c[t]}}}function vn(e,t,n,c){if(!t)return e;function l(s){if(!Array.isArray(s))return[];const u=[];for(const r of s)if(Ye(r)){const w=l(r[c]);w.length&&u.push(Object.assign({},r,{[c]:w}))}else{if(Io(r))continue;t(n,r)&&u.push(r)}return u}return l(e)}function gn(e,t,n){const c=new Map;return e.forEach(l=>{Ye(l)?l[n].forEach(s=>{c.set(s[t],s)}):c.set(l[t],l)}),c}const bn=Z([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Po({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),pn=Object.assign(Object.assign({},be.props),{to:co.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Cn=ue({name:"Select",props:pn,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:c,inlineThemeDisabled:l}=Ee(e),s=be("Select","-select",bn,Tt,e,t),u=M(e.defaultValue),r=ne(e,"value"),w=Co(r,u),R=M(!1),p=M(""),S=F(()=>{const{valueField:o,childrenField:h}=e,z=fn(o,h);return Pt(C.value,z)}),T=F(()=>gn(se.value,e.valueField,e.childrenField)),m=M(!1),f=Co(ne(e,"show"),m),x=M(null),E=M(null),k=M(null),{localeRef:P}=zo("Select"),j=F(()=>{var o;return(o=e.placeholder)!==null&&o!==void 0?o:P.value.placeholder}),ee=Ft(e,["items","options"]),G=[],K=M([]),X=M([]),le=M(new Map),re=F(()=>{const{fallbackOption:o}=e;if(o===void 0){const{labelField:h,valueField:z}=e;return L=>({[h]:String(L),[z]:L})}return o===!1?!1:h=>Object.assign(o(h),{value:h})}),se=F(()=>X.value.concat(K.value).concat(ee.value)),g=F(()=>{const{filter:o}=e;if(o)return o;const{labelField:h,valueField:z}=e;return(L,B)=>{if(!B)return!1;const O=B[h];if(typeof O=="string")return io(L,O);const _=B[z];return typeof _=="string"?io(L,_):typeof _=="number"?io(L,String(_)):!1}}),C=F(()=>{if(e.remote)return ee.value;{const{value:o}=se,{value:h}=p;return!h.length||!e.filterable?o:vn(o,g.value,h,e.childrenField)}});function y(o){const h=e.remote,{value:z}=le,{value:L}=T,{value:B}=re,O=[];return o.forEach(_=>{if(L.has(_))O.push(L.get(_));else if(h&&z.has(_))O.push(z.get(_));else if(B){const oe=B(_);oe&&O.push(oe)}}),O}const N=F(()=>{if(e.multiple){const{value:o}=w;return Array.isArray(o)?y(o):[]}return null}),A=F(()=>{const{value:o}=w;return!e.multiple&&!Array.isArray(o)?o===null?null:y([o])[0]||null:null}),H=Ot(e),{mergedSizeRef:D,mergedDisabledRef:V,mergedStatusRef:te}=H;function J(o,h){const{onChange:z,"onUpdate:value":L,onUpdateValue:B}=e,{nTriggerFormChange:O,nTriggerFormInput:_}=H;z&&ve(z,o,h),B&&ve(B,o,h),L&&ve(L,o,h),u.value=o,O(),_()}function ce(o){const{onBlur:h}=e,{nTriggerFormBlur:z}=H;h&&ve(h,o),z()}function a(){const{onClear:o}=e;o&&ve(o)}function v(o){const{onFocus:h,showOnFocus:z}=e,{nTriggerFormFocus:L}=H;h&&ve(h,o),L(),z&&fe()}function q(o){const{onSearch:h}=e;h&&ve(h,o)}function he(o){const{onScroll:h}=e;h&&ve(h,o)}function pe(){var o;const{remote:h,multiple:z}=e;if(h){const{value:L}=le;if(z){const{valueField:B}=e;(o=N.value)===null||o===void 0||o.forEach(O=>{L.set(O[B],O)})}else{const B=A.value;B&&L.set(B[e.valueField],B)}}}function me(o){const{onUpdateShow:h,"onUpdate:show":z}=e;h&&ve(h,o),z&&ve(z,o),m.value=o}function fe(){V.value||(me(!0),m.value=!0,e.filterable&&He())}function ie(){me(!1)}function Ce(){p.value="",X.value=G}const de=M(!1);function Fe(){e.filterable&&(de.value=!0)}function Oe(){e.filterable&&(de.value=!1,f.value||Ce())}function Ie(){V.value||(f.value?e.filterable?He():ie():fe())}function Me(o){var h,z;!((z=(h=k.value)===null||h===void 0?void 0:h.selfRef)===null||z===void 0)&&z.contains(o.relatedTarget)||(R.value=!1,ce(o),ie())}function xe(o){v(o),R.value=!0}function Se(o){R.value=!0}function Be(o){var h;!((h=x.value)===null||h===void 0)&&h.$el.contains(o.relatedTarget)||(R.value=!1,ce(o),ie())}function _e(){var o;(o=x.value)===null||o===void 0||o.focus(),ie()}function $e(o){var h;f.value&&(!((h=x.value)===null||h===void 0)&&h.$el.contains(Lt(o))||ie())}function Re(o){if(!Array.isArray(o))return[];if(re.value)return Array.from(o);{const{remote:h}=e,{value:z}=T;if(h){const{value:L}=le;return o.filter(B=>z.has(B)||L.has(B))}else return o.filter(L=>z.has(L))}}function ke(o){ae(o.rawNode)}function ae(o){if(V.value)return;const{tag:h,remote:z,clearFilterAfterSelect:L,valueField:B}=e;if(h&&!z){const{value:O}=X,_=O[0]||null;if(_){const oe=K.value;oe.length?oe.push(_):K.value=[_],X.value=G}}if(z&&le.value.set(o[B],o),e.multiple){const O=Re(w.value),_=O.findIndex(oe=>oe===o[B]);if(~_){if(O.splice(_,1),h&&!z){const oe=d(o[B]);~oe&&(K.value.splice(oe,1),L&&(p.value=""))}}else O.push(o[B]),L&&(p.value="");J(O,y(O))}else{if(h&&!z){const O=d(o[B]);~O?K.value=[K.value[O]]:K.value=G}Ae(),ie(),J(o[B],o)}}function d(o){return K.value.findIndex(z=>z[e.valueField]===o)}function b(o){f.value||fe();const{value:h}=o.target;p.value=h;const{tag:z,remote:L}=e;if(q(h),z&&!L){if(!h){X.value=G;return}const{onCreate:B}=e,O=B?B(h):{[e.labelField]:h,[e.valueField]:h},{valueField:_,labelField:oe}=e;ee.value.some(ge=>ge[_]===O[_]||ge[oe]===O[oe])||K.value.some(ge=>ge[_]===O[_]||ge[oe]===O[oe])?X.value=G:X.value=[O]}}function Q(o){o.stopPropagation();const{multiple:h}=e;!h&&e.filterable&&ie(),a(),h?J([],[]):J(null,null)}function Xe(o){!Ge(o,"action")&&!Ge(o,"empty")&&o.preventDefault()}function Je(o){he(o)}function Ne(o){var h,z,L,B,O;if(!e.keyboard){o.preventDefault();return}switch(o.key){case" ":if(e.filterable)break;o.preventDefault();case"Enter":if(!(!((h=x.value)===null||h===void 0)&&h.isComposing)){if(f.value){const _=(z=k.value)===null||z===void 0?void 0:z.getPendingTmNode();_?ke(_):e.filterable||(ie(),Ae())}else if(fe(),e.tag&&de.value){const _=X.value[0];if(_){const oe=_[e.valueField],{value:ge}=w;e.multiple&&Array.isArray(ge)&&ge.some(oo=>oo===oe)||ae(_)}}}o.preventDefault();break;case"ArrowUp":if(o.preventDefault(),e.loading)return;f.value&&((L=k.value)===null||L===void 0||L.prev());break;case"ArrowDown":if(o.preventDefault(),e.loading)return;f.value?(B=k.value)===null||B===void 0||B.next():fe();break;case"Escape":f.value&&(Ht(o),ie()),(O=x.value)===null||O===void 0||O.focus();break}}function Ae(){var o;(o=x.value)===null||o===void 0||o.focus()}function He(){var o;(o=x.value)===null||o===void 0||o.focusInput()}function Qe(){var o;f.value&&((o=E.value)===null||o===void 0||o.syncPosition())}pe(),Te(ne(e,"options"),pe);const eo={focus:()=>{var o;(o=x.value)===null||o===void 0||o.focus()},focusInput:()=>{var o;(o=x.value)===null||o===void 0||o.focusInput()},blur:()=>{var o;(o=x.value)===null||o===void 0||o.blur()},blurInput:()=>{var o;(o=x.value)===null||o===void 0||o.blurInput()}},De=F(()=>{const{self:{menuBoxShadow:o}}=s.value;return{"--n-menu-box-shadow":o}}),ye=l?Le("select",void 0,De,e):void 0;return Object.assign(Object.assign({},eo),{mergedStatus:te,mergedClsPrefix:t,mergedBordered:n,namespace:c,treeMate:S,isMounted:It(),triggerRef:x,menuRef:k,pattern:p,uncontrolledShow:m,mergedShow:f,adjustedTo:co(e),uncontrolledValue:u,mergedValue:w,followerRef:E,localizedPlaceholder:j,selectedOption:A,selectedOptions:N,mergedSize:D,mergedDisabled:V,focused:R,activeWithoutMenuOpen:de,inlineThemeDisabled:l,onTriggerInputFocus:Fe,onTriggerInputBlur:Oe,handleTriggerOrMenuResize:Qe,handleMenuFocus:Se,handleMenuBlur:Be,handleMenuTabOut:_e,handleTriggerClick:Ie,handleToggle:ke,handleDeleteOption:ae,handlePatternInput:b,handleClear:Q,handleTriggerBlur:Me,handleTriggerFocus:xe,handleKeydown:Ne,handleMenuAfterLeave:Ce,handleMenuClickOutside:$e,handleMenuScroll:Je,handleMenuKeydown:Ne,handleMenuMousedown:Xe,mergedTheme:s,cssVars:l?void 0:De,themeClass:ye==null?void 0:ye.themeClass,onRender:ye==null?void 0:ye.onRender})},render(){return i("div",{class:`${this.mergedClsPrefix}-select`},i(Mt,null,{default:()=>[i(Bt,null,{default:()=>i(hn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),i(_t,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===co.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>i(To,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),$t(i(tn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var c,l;return[(l=(c=this.$slots).empty)===null||l===void 0?void 0:l.call(c)]},header:()=>{var c,l;return[(l=(c=this.$slots).header)===null||l===void 0?void 0:l.call(c)]},action:()=>{var c,l;return[(l=(c=this.$slots).action)===null||l===void 0?void 0:l.call(c)]}}),this.displayDirective==="show"?[[Et,this.mergedShow],[yo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[yo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Cn as N};
