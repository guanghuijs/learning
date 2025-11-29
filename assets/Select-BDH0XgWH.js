import{r as T,l as I,a9 as ke,ah as Ge,d as he,ai as dt,j as a,aj as ft,C as an,ak as nt,al as sn,am as cn,o as Ze,an as dn,ao as un,X as ee,a1 as st,ap as hn,a0 as Le,aq as ot,p as ze,ar as Rt,L as $,M as O,O as se,ag as kt,U as Ae,V as be,as as fn,a8 as zt,$ as G,Z as He,at as Ie,au as ut,av as Tt,P as Y,Q as Re,aw as It,T as Xe,a4 as vn,ax as gn,ab as bn,aa as ht,ay as pn,az as mn,aA as Fe,aB as Ne,ad as Ft,aC as Cn,I as wn,aD as xn,K as U,aE as yn,a2 as ve,aF as vt,aG as Sn,aH as Rn,aI as kn,aJ as gt,F as zn,aK as Tn,aL as In,aM as Fn,aN as On,aO as Pn,aP as Mn,aQ as ct,x as Bn,aR as _n,aS as bt,Y as pt,aT as $n,W as En,aU as Ln,aV as Nn,aW as An,aX as Hn}from"./index-BtQ9Oy6z.js";function mt(e){return e&-e}class Ot{constructor(n,o){this.l=n,this.min=o;const r=new Array(n+1);for(let l=0;l<n+1;++l)r[l]=0;this.ft=r}add(n,o){if(o===0)return;const{l:r,ft:l}=this;for(n+=1;n<=r;)l[n]+=o,n+=mt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:r,l}=this;if(n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*r;for(;n>0;)c+=o[n],n-=mt(n);return c}getBound(n){let o=0,r=this.l;for(;r>o;){const l=Math.floor((o+r)/2),c=this.sum(l);if(c>n){r=l;continue}else if(c<n){if(o===l)return this.sum(o+1)<=n?o+1:l;o=l}else return l}return o}}let qe;function Dn(){return typeof document>"u"?!1:(qe===void 0&&("matchMedia"in window?qe=window.matchMedia("(pointer:coarse)").matches:qe=!1),qe)}let lt;function Ct(){return typeof document>"u"?1:(lt===void 0&&(lt="chrome"in window?window.devicePixelRatio:1),lt)}const Pt="VVirtualListXScroll";function Vn({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const r=T(0),l=T(0),c=I(()=>{const m=e.value;if(m.length===0)return null;const b=new Ot(m.length,0);return m.forEach((y,S)=>{b.add(S,y.width)}),b}),h=ke(()=>{const m=c.value;return m!==null?Math.max(m.getBound(l.value)-1,0):0}),i=m=>{const b=c.value;return b!==null?b.sum(m):0},p=ke(()=>{const m=c.value;return m!==null?Math.min(m.getBound(l.value+r.value)+1,e.value.length-1):0});return Ge(Pt,{startIndexRef:h,endIndexRef:p,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:i}),{listWidthRef:r,scrollLeftRef:l}}const wt=he({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:r,renderColRef:l,renderItemWithColsRef:c}=dt(Pt);return{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:c,getLeft:r}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:r,renderItemWithCols:l,getLeft:c,item:h}=this;if(l!=null)return l({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:h,getLeft:c});if(r!=null){const i=[];for(let p=e;p<=n;++p){const m=o[p];i.push(r({column:m,left:c(p),item:h}))}return i}return null}}),Wn=nt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[nt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[nt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),jn=he({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=sn();Wn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:cn,ssr:n}),Ze(()=>{const{defaultScrollIndex:s,defaultScrollKey:x}=e;s!=null?E({index:s}):x!=null&&E({key:x})});let o=!1,r=!1;dn(()=>{if(o=!1,!r){r=!0;return}E({top:v.value,left:h.value})}),un(()=>{o=!0,r||(r=!0)});const l=ke(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let s=0;return e.columns.forEach(x=>{s+=x.width}),s}),c=I(()=>{const s=new Map,{keyField:x}=e;return e.items.forEach((M,V)=>{s.set(M[x],V)}),s}),{scrollLeftRef:h,listWidthRef:i}=Vn({columnsRef:ee(e,"columns"),renderColRef:ee(e,"renderCol"),renderItemWithColsRef:ee(e,"renderItemWithCols")}),p=T(null),m=T(void 0),b=new Map,y=I(()=>{const{items:s,itemSize:x,keyField:M}=e,V=new Ot(s.length,x);return s.forEach((q,j)=>{const K=q[M],N=b.get(K);N!==void 0&&V.add(j,N)}),V}),S=T(0),v=T(0),C=ke(()=>Math.max(y.value.getBound(v.value-st(e.paddingTop))-1,0)),P=I(()=>{const{value:s}=m;if(s===void 0)return[];const{items:x,itemSize:M}=e,V=C.value,q=Math.min(V+Math.ceil(s/M+1),x.length-1),j=[];for(let K=V;K<=q;++K)j.push(x[K]);return j}),E=(s,x)=>{if(typeof s=="number"){D(s,x,"auto");return}const{left:M,top:V,index:q,key:j,position:K,behavior:N,debounce:X=!0}=s;if(M!==void 0||V!==void 0)D(M,V,N);else if(q!==void 0)H(q,N,X);else if(j!==void 0){const u=c.value.get(j);u!==void 0&&H(u,N,X)}else K==="bottom"?D(0,Number.MAX_SAFE_INTEGER,N):K==="top"&&D(0,0,N)};let k,z=null;function H(s,x,M){const{value:V}=y,q=V.sum(s)+st(e.paddingTop);if(!M)p.value.scrollTo({left:0,top:q,behavior:x});else{k=s,z!==null&&window.clearTimeout(z),z=window.setTimeout(()=>{k=void 0,z=null},16);const{scrollTop:j,offsetHeight:K}=p.value;if(q>j){const N=V.get(s);q+N<=j+K||p.value.scrollTo({left:0,top:q+N-K,behavior:x})}else p.value.scrollTo({left:0,top:q,behavior:x})}}function D(s,x,M){p.value.scrollTo({left:s,top:x,behavior:M})}function W(s,x){var M,V,q;if(o||e.ignoreItemResize||le(x.target))return;const{value:j}=y,K=c.value.get(s),N=j.get(K),X=(q=(V=(M=x.borderBoxSize)===null||M===void 0?void 0:M[0])===null||V===void 0?void 0:V.blockSize)!==null&&q!==void 0?q:x.contentRect.height;if(X===N)return;X-e.itemSize===0?b.delete(s):b.set(s,X-e.itemSize);const g=X-N;if(g===0)return;j.add(K,g);const A=p.value;if(A!=null){if(k===void 0){const re=j.sum(K);A.scrollTop>re&&A.scrollBy(0,g)}else if(K<k)A.scrollBy(0,g);else if(K===k){const re=j.sum(K);X+re>A.scrollTop+A.offsetHeight&&A.scrollBy(0,g)}ne()}S.value++}const te=!Dn();let Z=!1;function ce(s){var x;(x=e.onScroll)===null||x===void 0||x.call(e,s),(!te||!Z)&&ne()}function de(s){var x;if((x=e.onWheel)===null||x===void 0||x.call(e,s),te){const M=p.value;if(M!=null){if(s.deltaX===0&&(M.scrollTop===0&&s.deltaY<=0||M.scrollTop+M.offsetHeight>=M.scrollHeight&&s.deltaY>=0))return;s.preventDefault(),M.scrollTop+=s.deltaY/Ct(),M.scrollLeft+=s.deltaX/Ct(),ne(),Z=!0,hn(()=>{Z=!1})}}}function oe(s){if(o||le(s.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(s.contentRect.height===m.value)return}else if(s.contentRect.height===m.value&&s.contentRect.width===i.value)return;m.value=s.contentRect.height,i.value=s.contentRect.width;const{onResize:x}=e;x!==void 0&&x(s)}function ne(){const{value:s}=p;s!=null&&(v.value=s.scrollTop,h.value=s.scrollLeft)}function le(s){let x=s;for(;x!==null;){if(x.style.display==="none")return!0;x=x.parentElement}return!1}return{listHeight:m,listStyle:{overflow:"auto"},keyToIndex:c,itemsStyle:I(()=>{const{itemResizable:s}=e,x=Le(y.value.sum());return S.value,[e.itemsStyle,{boxSizing:"content-box",width:Le(l.value),height:s?"":x,minHeight:s?x:"",paddingTop:Le(e.paddingTop),paddingBottom:Le(e.paddingBottom)}]}),visibleItemsStyle:I(()=>(S.value,{transform:`translateY(${Le(y.value.sum(C.value))})`})),viewportItems:P,listElRef:p,itemsElRef:T(null),scrollTo:E,handleListResize:oe,handleListScroll:ce,handleListWheel:de,handleItemResize:W}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:r}=this;return a(ft,{onResize:this.handleListResize},{default:()=>{var l,c;return a("div",an(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?a("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[a(r,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:h,renderItemWithCols:i}=this;return this.viewportItems.map(p=>{const m=p[n],b=o.get(m),y=h!=null?a(wt,{index:b,item:p}):void 0,S=i!=null?a(wt,{index:b,item:p}):void 0,v=this.$slots.default({item:p,renderedCols:y,renderedItemWithCols:S,index:b})[0];return e?a(ft,{key:m,onResize:C=>this.handleItemResize(m,C)},{default:()=>v}):(v.key=m,v)})}})]):(c=(l=this.$slots).empty)===null||c===void 0?void 0:c.call(l)])}})}});function Mt(e,n){n&&(Ze(()=>{const{value:o}=e;o&&ot.registerHandler(o,n)}),ze(e,(o,r)=>{r&&ot.unregisterHandler(r)},{deep:!1}),Rt(()=>{const{value:o}=e;o&&ot.unregisterHandler(o)}))}const Kn=new WeakSet;function Un(e){Kn.add(e)}function xt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function rt(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(r=>{r&&r(o)})}}const qn=he({name:"Checkmark",render(){return a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},a("g",{fill:"none"},a("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Gn=he({name:"Empty",render(){return a("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),a("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Xn=he({props:{onFocus:Function,onBlur:Function},setup(e){return()=>a("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),Yn=$("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[O("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[se("+",[O("description",`
 margin-top: 8px;
 `)])]),O("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),O("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Zn=Object.assign(Object.assign({},be.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Qn=he({name:"Empty",props:Zn,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:r}=Ae(e),l=be("Empty","-empty",Yn,fn,e,n),{localeRef:c}=zt("Empty"),h=I(()=>{var b,y,S;return(b=e.description)!==null&&b!==void 0?b:(S=(y=r?.value)===null||y===void 0?void 0:y.Empty)===null||S===void 0?void 0:S.description}),i=I(()=>{var b,y;return((y=(b=r?.value)===null||b===void 0?void 0:b.Empty)===null||y===void 0?void 0:y.renderIcon)||(()=>a(Gn,null))}),p=I(()=>{const{size:b}=e,{common:{cubicBezierEaseInOut:y},self:{[G("iconSize",b)]:S,[G("fontSize",b)]:v,textColor:C,iconColor:P,extraTextColor:E}}=l.value;return{"--n-icon-size":S,"--n-font-size":v,"--n-bezier":y,"--n-text-color":C,"--n-icon-color":P,"--n-extra-text-color":E}}),m=o?He("empty",I(()=>{let b="";const{size:y}=e;return b+=y[0],b}),p,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:i,localizedDescription:I(()=>h.value||c.value.description),cssVars:o?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o?.(),a("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?a("div",{class:`${n}-empty__icon`},e.icon?e.icon():a(kt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?a("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?a("div",{class:`${n}-empty__extra`},e.extra()):null)}}),yt=he({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:r}=dt(ut);return{labelField:o,nodeProps:r,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:r,tmNode:{rawNode:l}}=this,c=r?.(l),h=n?n(l,!1):Ie(l[this.labelField],l,!1),i=a("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c?.class]}),h);return l.render?l.render({node:i,option:l}):o?o({node:i,option:l,selected:!1}):i}});function Jn(e,n){return a(Tt,{name:"fade-in-scale-up-transition"},{default:()=>e?a(kt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>a(qn)}):null})}const St=he({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:r,valueSetRef:l,renderLabelRef:c,renderOptionRef:h,labelFieldRef:i,valueFieldRef:p,showCheckmarkRef:m,nodePropsRef:b,handleOptionClick:y,handleOptionMouseEnter:S}=dt(ut),v=ke(()=>{const{value:k}=o;return k?e.tmNode.key===k.key:!1});function C(k){const{tmNode:z}=e;z.disabled||y(k,z)}function P(k){const{tmNode:z}=e;z.disabled||S(k,z)}function E(k){const{tmNode:z}=e,{value:H}=v;z.disabled||H||S(k,z)}return{multiple:r,isGrouped:ke(()=>{const{tmNode:k}=e,{parent:z}=k;return z&&z.rawNode.type==="group"}),showCheckmark:m,nodeProps:b,isPending:v,isSelected:ke(()=>{const{value:k}=n,{value:z}=r;if(k===null)return!1;const H=e.tmNode.rawNode[p.value];if(z){const{value:D}=l;return D.has(H)}else return k===H}),labelField:i,renderLabel:c,renderOption:h,handleMouseMove:E,handleMouseEnter:P,handleClick:C}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:r,isGrouped:l,showCheckmark:c,nodeProps:h,renderOption:i,renderLabel:p,handleClick:m,handleMouseEnter:b,handleMouseMove:y}=this,S=Jn(o,e),v=p?[p(n,o),c&&S]:[Ie(n[this.labelField],n,o),c&&S],C=h?.(n),P=a("div",Object.assign({},C,{class:[`${e}-base-select-option`,n.class,C?.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:c}],style:[C?.style||"",n.style||""],onClick:rt([m,C?.onClick]),onMouseenter:rt([b,C?.onMouseenter]),onMousemove:rt([y,C?.onMousemove])}),a("div",{class:`${e}-base-select-option__content`},v));return n.render?n.render({node:P,option:n,selected:o}):i?i({node:P,option:n,selected:o}):P}}),eo=$("base-select-menu",`
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
 `,[O("content",`
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
 `),O("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),O("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),O("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),O("action",`
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
 `,[Y("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),se("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),se("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Y("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Y("pending",[se("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Y("selected",`
 color: var(--n-option-text-color-active);
 `,[se("&::before",`
 background-color: var(--n-option-color-active);
 `),Y("pending",[se("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Y("disabled",`
 cursor: not-allowed;
 `,[Re("selected",`
 color: var(--n-option-text-color-disabled);
 `),Y("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),O("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[It({enterScale:"0.5"})])])]),to=he({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ae(e),r=ht("InternalSelectMenu",o,n),l=be("InternalSelectMenu","-internal-select-menu",eo,pn,e,ee(e,"clsPrefix")),c=T(null),h=T(null),i=T(null),p=I(()=>e.treeMate.getFlattenedNodes()),m=I(()=>mn(p.value)),b=T(null);function y(){const{treeMate:u}=e;let g=null;const{value:A}=e;A===null?g=u.getFirstAvailableNode():(e.multiple?g=u.getNode((A||[])[(A||[]).length-1]):g=u.getNode(A),(!g||g.disabled)&&(g=u.getFirstAvailableNode())),x(g||null)}function S(){const{value:u}=b;u&&!e.treeMate.getNode(u.key)&&(b.value=null)}let v;ze(()=>e.show,u=>{u?v=ze(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?y():S(),Ft(M)):S()},{immediate:!0}):v?.()},{immediate:!0}),Rt(()=>{v?.()});const C=I(()=>st(l.value.self[G("optionHeight",e.size)])),P=I(()=>Fe(l.value.self[G("padding",e.size)])),E=I(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),k=I(()=>{const u=p.value;return u&&u.length===0});function z(u){const{onToggle:g}=e;g&&g(u)}function H(u){const{onScroll:g}=e;g&&g(u)}function D(u){var g;(g=i.value)===null||g===void 0||g.sync(),H(u)}function W(){var u;(u=i.value)===null||u===void 0||u.sync()}function te(){const{value:u}=b;return u||null}function Z(u,g){g.disabled||x(g,!1)}function ce(u,g){g.disabled||z(g)}function de(u){var g;Ne(u,"action")||(g=e.onKeyup)===null||g===void 0||g.call(e,u)}function oe(u){var g;Ne(u,"action")||(g=e.onKeydown)===null||g===void 0||g.call(e,u)}function ne(u){var g;(g=e.onMousedown)===null||g===void 0||g.call(e,u),!e.focusable&&u.preventDefault()}function le(){const{value:u}=b;u&&x(u.getNext({loop:!0}),!0)}function s(){const{value:u}=b;u&&x(u.getPrev({loop:!0}),!0)}function x(u,g=!1){b.value=u,g&&M()}function M(){var u,g;const A=b.value;if(!A)return;const re=m.value(A.key);re!==null&&(e.virtualScroll?(u=h.value)===null||u===void 0||u.scrollTo({index:re}):(g=i.value)===null||g===void 0||g.scrollTo({index:re,elSize:C.value}))}function V(u){var g,A;!((g=c.value)===null||g===void 0)&&g.contains(u.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,u))}function q(u){var g,A;!((g=c.value)===null||g===void 0)&&g.contains(u.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,u)}Ge(ut,{handleOptionMouseEnter:Z,handleOptionClick:ce,valueSetRef:E,pendingTmNodeRef:b,nodePropsRef:ee(e,"nodeProps"),showCheckmarkRef:ee(e,"showCheckmark"),multipleRef:ee(e,"multiple"),valueRef:ee(e,"value"),renderLabelRef:ee(e,"renderLabel"),renderOptionRef:ee(e,"renderOption"),labelFieldRef:ee(e,"labelField"),valueFieldRef:ee(e,"valueField")}),Ge(Cn,c),Ze(()=>{const{value:u}=i;u&&u.sync()});const j=I(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:g},self:{height:A,borderRadius:re,color:pe,groupHeaderTextColor:me,actionDividerColor:fe,optionTextColorPressed:ie,optionTextColor:Ce,optionTextColorDisabled:ue,optionTextColorActive:Oe,optionOpacityDisabled:Pe,optionCheckColor:Me,actionTextColor:Be,optionColorPending:xe,optionColorActive:ye,loadingColor:_e,loadingSize:$e,optionColorActivePending:Ee,[G("optionFontSize",u)]:Te,[G("optionHeight",u)]:Se,[G("optionPadding",u)]:ae}}=l.value;return{"--n-height":A,"--n-action-divider-color":fe,"--n-action-text-color":Be,"--n-bezier":g,"--n-border-radius":re,"--n-color":pe,"--n-option-font-size":Te,"--n-group-header-text-color":me,"--n-option-check-color":Me,"--n-option-color-pending":xe,"--n-option-color-active":ye,"--n-option-color-active-pending":Ee,"--n-option-height":Se,"--n-option-opacity-disabled":Pe,"--n-option-text-color":Ce,"--n-option-text-color-active":Oe,"--n-option-text-color-disabled":ue,"--n-option-text-color-pressed":ie,"--n-option-padding":ae,"--n-option-padding-left":Fe(ae,"left"),"--n-option-padding-right":Fe(ae,"right"),"--n-loading-color":_e,"--n-loading-size":$e}}),{inlineThemeDisabled:K}=e,N=K?He("internal-select-menu",I(()=>e.size[0]),j,e):void 0,X={selfRef:c,next:le,prev:s,getPendingTmNode:te};return Mt(c,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:n,rtlEnabled:r,virtualListRef:h,scrollbarRef:i,itemSize:C,padding:P,flattenedNodes:p,empty:k,virtualListContainer(){const{value:u}=h;return u?.listElRef},virtualListContent(){const{value:u}=h;return u?.itemsElRef},doScroll:H,handleFocusin:V,handleFocusout:q,handleKeyUp:de,handleKeyDown:oe,handleMouseDown:ne,handleVirtualListResize:W,handleVirtualListScroll:D,cssVars:K?void 0:j,themeClass:N?.themeClass,onRender:N?.onRender},X)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:r,themeClass:l,onRender:c}=this;return c?.(),a("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,l,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Xe(e.header,h=>h&&a("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?a("div",{class:`${o}-base-select-menu__loading`},a(vn,{clsPrefix:o,strokeWidth:20})):this.empty?a("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},bn(e.empty,()=>[a(Qn,{theme:r.peers.Empty,themeOverrides:r.peerOverrides.Empty,size:this.size})])):a(gn,{ref:"scrollbarRef",theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?a(jn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?a(yt,{key:h.key,clsPrefix:o,tmNode:h}):h.ignored?null:a(St,{clsPrefix:o,key:h.key,tmNode:h})}):a("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?a(yt,{key:h.key,clsPrefix:o,tmNode:h}):a(St,{clsPrefix:o,key:h.key,tmNode:h})))}),Xe(e.action,h=>h&&[a("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},h),a(Xn,{onFocus:this.onTabOut,key:"focus-detector"})]))}});function no(e){const{textColor2:n,primaryColorHover:o,primaryColorPressed:r,primaryColor:l,infoColor:c,successColor:h,warningColor:i,errorColor:p,baseColor:m,borderColor:b,opacityDisabled:y,tagColor:S,closeIconColor:v,closeIconColorHover:C,closeIconColorPressed:P,borderRadiusSmall:E,fontSizeMini:k,fontSizeTiny:z,fontSizeSmall:H,fontSizeMedium:D,heightMini:W,heightTiny:te,heightSmall:Z,heightMedium:ce,closeColorHover:de,closeColorPressed:oe,buttonColor2Hover:ne,buttonColor2Pressed:le,fontWeightStrong:s}=e;return Object.assign(Object.assign({},xn),{closeBorderRadius:E,heightTiny:W,heightSmall:te,heightMedium:Z,heightLarge:ce,borderRadius:E,opacityDisabled:y,fontSizeTiny:k,fontSizeSmall:z,fontSizeMedium:H,fontSizeLarge:D,fontWeightStrong:s,textColorCheckable:n,textColorHoverCheckable:n,textColorPressedCheckable:n,textColorChecked:m,colorCheckable:"#0000",colorHoverCheckable:ne,colorPressedCheckable:le,colorChecked:l,colorCheckedHover:o,colorCheckedPressed:r,border:`1px solid ${b}`,textColor:n,color:S,colorBordered:"rgb(250, 250, 252)",closeIconColor:v,closeIconColorHover:C,closeIconColorPressed:P,closeColorHover:de,closeColorPressed:oe,borderPrimary:`1px solid ${U(l,{alpha:.3})}`,textColorPrimary:l,colorPrimary:U(l,{alpha:.12}),colorBorderedPrimary:U(l,{alpha:.1}),closeIconColorPrimary:l,closeIconColorHoverPrimary:l,closeIconColorPressedPrimary:l,closeColorHoverPrimary:U(l,{alpha:.12}),closeColorPressedPrimary:U(l,{alpha:.18}),borderInfo:`1px solid ${U(c,{alpha:.3})}`,textColorInfo:c,colorInfo:U(c,{alpha:.12}),colorBorderedInfo:U(c,{alpha:.1}),closeIconColorInfo:c,closeIconColorHoverInfo:c,closeIconColorPressedInfo:c,closeColorHoverInfo:U(c,{alpha:.12}),closeColorPressedInfo:U(c,{alpha:.18}),borderSuccess:`1px solid ${U(h,{alpha:.3})}`,textColorSuccess:h,colorSuccess:U(h,{alpha:.12}),colorBorderedSuccess:U(h,{alpha:.1}),closeIconColorSuccess:h,closeIconColorHoverSuccess:h,closeIconColorPressedSuccess:h,closeColorHoverSuccess:U(h,{alpha:.12}),closeColorPressedSuccess:U(h,{alpha:.18}),borderWarning:`1px solid ${U(i,{alpha:.35})}`,textColorWarning:i,colorWarning:U(i,{alpha:.15}),colorBorderedWarning:U(i,{alpha:.12}),closeIconColorWarning:i,closeIconColorHoverWarning:i,closeIconColorPressedWarning:i,closeColorHoverWarning:U(i,{alpha:.12}),closeColorPressedWarning:U(i,{alpha:.18}),borderError:`1px solid ${U(p,{alpha:.23})}`,textColorError:p,colorError:U(p,{alpha:.1}),colorBorderedError:U(p,{alpha:.08}),closeIconColorError:p,closeIconColorHoverError:p,closeIconColorPressedError:p,closeColorHoverError:U(p,{alpha:.12}),closeColorPressedError:U(p,{alpha:.18})})}const oo={common:wn,self:no},lo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},ro=$("tag",`
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
`,[Y("strong",`
 font-weight: var(--n-font-weight-strong);
 `),O("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),O("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),O("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),O("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),Y("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[O("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),O("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Y("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Y("icon, avatar",[Y("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Y("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Y("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Re("disabled",[se("&:hover","background-color: var(--n-color-hover-checkable);",[Re("checked","color: var(--n-text-color-hover-checkable);")]),se("&:active","background-color: var(--n-color-pressed-checkable);",[Re("checked","color: var(--n-text-color-pressed-checkable);")])]),Y("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Re("disabled",[se("&:hover","background-color: var(--n-color-checked-hover);"),se("&:active","background-color: var(--n-color-checked-pressed);")])])])]),io=Object.assign(Object.assign(Object.assign({},be.props),lo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),ao=Sn("n-tag"),it=he({name:"Tag",props:io,slots:Object,setup(e){const n=T(null),{mergedBorderedRef:o,mergedClsPrefixRef:r,inlineThemeDisabled:l,mergedRtlRef:c}=Ae(e),h=be("Tag","-tag",ro,oo,e,r);Ge(ao,{roundRef:ee(e,"round")});function i(){if(!e.disabled&&e.checkable){const{checked:v,onCheckedChange:C,onUpdateChecked:P,"onUpdate:checked":E}=e;P&&P(!v),E&&E(!v),C&&C(!v)}}function p(v){if(e.triggerClickOnClose||v.stopPropagation(),!e.disabled){const{onClose:C}=e;C&&ve(C,v)}}const m={setTextContent(v){const{value:C}=n;C&&(C.textContent=v)}},b=ht("Tag",c,r),y=I(()=>{const{type:v,size:C,color:{color:P,textColor:E}={}}=e,{common:{cubicBezierEaseInOut:k},self:{padding:z,closeMargin:H,borderRadius:D,opacityDisabled:W,textColorCheckable:te,textColorHoverCheckable:Z,textColorPressedCheckable:ce,textColorChecked:de,colorCheckable:oe,colorHoverCheckable:ne,colorPressedCheckable:le,colorChecked:s,colorCheckedHover:x,colorCheckedPressed:M,closeBorderRadius:V,fontWeightStrong:q,[G("colorBordered",v)]:j,[G("closeSize",C)]:K,[G("closeIconSize",C)]:N,[G("fontSize",C)]:X,[G("height",C)]:u,[G("color",v)]:g,[G("textColor",v)]:A,[G("border",v)]:re,[G("closeIconColor",v)]:pe,[G("closeIconColorHover",v)]:me,[G("closeIconColorPressed",v)]:fe,[G("closeColorHover",v)]:ie,[G("closeColorPressed",v)]:Ce}}=h.value,ue=Fe(H);return{"--n-font-weight-strong":q,"--n-avatar-size-override":`calc(${u} - 8px)`,"--n-bezier":k,"--n-border-radius":D,"--n-border":re,"--n-close-icon-size":N,"--n-close-color-pressed":Ce,"--n-close-color-hover":ie,"--n-close-border-radius":V,"--n-close-icon-color":pe,"--n-close-icon-color-hover":me,"--n-close-icon-color-pressed":fe,"--n-close-icon-color-disabled":pe,"--n-close-margin-top":ue.top,"--n-close-margin-right":ue.right,"--n-close-margin-bottom":ue.bottom,"--n-close-margin-left":ue.left,"--n-close-size":K,"--n-color":P||(o.value?j:g),"--n-color-checkable":oe,"--n-color-checked":s,"--n-color-checked-hover":x,"--n-color-checked-pressed":M,"--n-color-hover-checkable":ne,"--n-color-pressed-checkable":le,"--n-font-size":X,"--n-height":u,"--n-opacity-disabled":W,"--n-padding":z,"--n-text-color":E||A,"--n-text-color-checkable":te,"--n-text-color-checked":de,"--n-text-color-hover-checkable":Z,"--n-text-color-pressed-checkable":ce}}),S=l?He("tag",I(()=>{let v="";const{type:C,size:P,color:{color:E,textColor:k}={}}=e;return v+=C[0],v+=P[0],E&&(v+=`a${vt(E)}`),k&&(v+=`b${vt(k)}`),o.value&&(v+="c"),v}),y,e):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:b,mergedClsPrefix:r,contentRef:n,mergedBordered:o,handleClick:i,handleCloseClick:p,cssVars:l?void 0:y,themeClass:S?.themeClass,onRender:S?.onRender})},render(){var e,n;const{mergedClsPrefix:o,rtlEnabled:r,closable:l,color:{borderColor:c}={},round:h,onRender:i,$slots:p}=this;i?.();const m=Xe(p.avatar,y=>y&&a("div",{class:`${o}-tag__avatar`},y)),b=Xe(p.icon,y=>y&&a("div",{class:`${o}-tag__icon`},y));return a("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:r,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:h,[`${o}-tag--avatar`]:m,[`${o}-tag--icon`]:b,[`${o}-tag--closable`]:l}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},b||m,a("span",{class:`${o}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&l?a(yn,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:h,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?a("div",{class:`${o}-tag__border`,style:{borderColor:c}}):null)}}),so=se([$("base-selection",`
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
 `),$("base-selection-tags","min-height: var(--n-height);"),O("border, state-border",`
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
 `),O("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[O("arrow",`
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
 `,[O("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[O("inner",`
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
 `,[O("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),O("render-label",`
 color: var(--n-text-color);
 `)]),Re("disabled",[se("&:hover",[O("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Y("focus",[O("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Y("active",[O("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),Y("disabled","cursor: not-allowed;",[O("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),O("render-label",`
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
 `,[O("input",`
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
 `),O("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Y(`${e}-status`,[O("state-border",`border: var(--n-border-${e});`),Re("disabled",[se("&:hover",[O("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Y("active",[O("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Y("focus",[O("state-border",`
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
 `,[se("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[O("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),co=he({name:"InternalSelection",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Ae(e),r=ht("InternalSelection",o,n),l=T(null),c=T(null),h=T(null),i=T(null),p=T(null),m=T(null),b=T(null),y=T(null),S=T(null),v=T(null),C=T(!1),P=T(!1),E=T(!1),k=be("InternalSelection","-internal-selection",so,In,e,ee(e,"clsPrefix")),z=I(()=>e.clearable&&!e.disabled&&(E.value||e.active)),H=I(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ie(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),D=I(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),W=I(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function te(){var d;const{value:w}=l;if(w){const{value:Q}=c;Q&&(Q.style.width=`${w.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=S.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function Z(){const{value:d}=v;d&&(d.style.display="none")}function ce(){const{value:d}=v;d&&(d.style.display="inline-block")}ze(ee(e,"active"),d=>{d||Z()}),ze(ee(e,"pattern"),()=>{e.multiple&&Ft(te)});function de(d){const{onFocus:w}=e;w&&w(d)}function oe(d){const{onBlur:w}=e;w&&w(d)}function ne(d){const{onDeleteOption:w}=e;w&&w(d)}function le(d){const{onClear:w}=e;w&&w(d)}function s(d){const{onPatternInput:w}=e;w&&w(d)}function x(d){var w;(!d.relatedTarget||!(!((w=h.value)===null||w===void 0)&&w.contains(d.relatedTarget)))&&de(d)}function M(d){var w;!((w=h.value)===null||w===void 0)&&w.contains(d.relatedTarget)||oe(d)}function V(d){le(d)}function q(){E.value=!0}function j(){E.value=!1}function K(d){!e.active||!e.filterable||d.target!==c.value&&d.preventDefault()}function N(d){ne(d)}const X=T(!1);function u(d){if(d.key==="Backspace"&&!X.value&&!e.pattern.length){const{selectedOptions:w}=e;w?.length&&N(w[w.length-1])}}let g=null;function A(d){const{value:w}=l;if(w){const Q=d.target.value;w.textContent=Q,te()}e.ignoreComposition&&X.value?g=d:s(d)}function re(){X.value=!0}function pe(){X.value=!1,e.ignoreComposition&&s(g),g=null}function me(d){var w;P.value=!0,(w=e.onPatternFocus)===null||w===void 0||w.call(e,d)}function fe(d){var w;P.value=!1,(w=e.onPatternBlur)===null||w===void 0||w.call(e,d)}function ie(){var d,w;if(e.filterable)P.value=!1,(d=m.value)===null||d===void 0||d.blur(),(w=c.value)===null||w===void 0||w.blur();else if(e.multiple){const{value:Q}=i;Q?.blur()}else{const{value:Q}=p;Q?.blur()}}function Ce(){var d,w,Q;e.filterable?(P.value=!1,(d=m.value)===null||d===void 0||d.focus()):e.multiple?(w=i.value)===null||w===void 0||w.focus():(Q=p.value)===null||Q===void 0||Q.focus()}function ue(){const{value:d}=c;d&&(ce(),d.focus())}function Oe(){const{value:d}=c;d&&d.blur()}function Pe(d){const{value:w}=b;w&&w.setTextContent(`+${d}`)}function Me(){const{value:d}=y;return d}function Be(){return c.value}let xe=null;function ye(){xe!==null&&window.clearTimeout(xe)}function _e(){e.active||(ye(),xe=window.setTimeout(()=>{W.value&&(C.value=!0)},100))}function $e(){ye()}function Ee(d){d||(ye(),C.value=!1)}ze(W,d=>{d||(C.value=!1)}),Ze(()=>{Fn(()=>{const d=m.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=P.value?-1:0)})}),Mt(h,e.onResize);const{inlineThemeDisabled:Te}=e,Se=I(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:w},self:{fontWeight:Q,borderRadius:Qe,color:Je,placeholderColor:De,textColor:Ve,paddingSingle:We,paddingMultiple:et,caretColor:tt,colorDisabled:je,textColorDisabled:we,placeholderColorDisabled:t,colorActive:f,boxShadowFocus:R,boxShadowActive:L,boxShadowHover:B,border:F,borderFocus:_,borderHover:J,borderActive:ge,arrowColor:_t,arrowColorDisabled:$t,loadingColor:Et,colorActiveWarning:Lt,boxShadowFocusWarning:Nt,boxShadowActiveWarning:At,boxShadowHoverWarning:Ht,borderWarning:Dt,borderFocusWarning:Vt,borderHoverWarning:Wt,borderActiveWarning:jt,colorActiveError:Kt,boxShadowFocusError:Ut,boxShadowActiveError:qt,boxShadowHoverError:Gt,borderError:Xt,borderFocusError:Yt,borderHoverError:Zt,borderActiveError:Qt,clearColor:Jt,clearColorHover:en,clearColorPressed:tn,clearSize:nn,arrowSize:on,[G("height",d)]:ln,[G("fontSize",d)]:rn}}=k.value,Ke=Fe(We),Ue=Fe(et);return{"--n-bezier":w,"--n-border":F,"--n-border-active":ge,"--n-border-focus":_,"--n-border-hover":J,"--n-border-radius":Qe,"--n-box-shadow-active":L,"--n-box-shadow-focus":R,"--n-box-shadow-hover":B,"--n-caret-color":tt,"--n-color":Je,"--n-color-active":f,"--n-color-disabled":je,"--n-font-size":rn,"--n-height":ln,"--n-padding-single-top":Ke.top,"--n-padding-multiple-top":Ue.top,"--n-padding-single-right":Ke.right,"--n-padding-multiple-right":Ue.right,"--n-padding-single-left":Ke.left,"--n-padding-multiple-left":Ue.left,"--n-padding-single-bottom":Ke.bottom,"--n-padding-multiple-bottom":Ue.bottom,"--n-placeholder-color":De,"--n-placeholder-color-disabled":t,"--n-text-color":Ve,"--n-text-color-disabled":we,"--n-arrow-color":_t,"--n-arrow-color-disabled":$t,"--n-loading-color":Et,"--n-color-active-warning":Lt,"--n-box-shadow-focus-warning":Nt,"--n-box-shadow-active-warning":At,"--n-box-shadow-hover-warning":Ht,"--n-border-warning":Dt,"--n-border-focus-warning":Vt,"--n-border-hover-warning":Wt,"--n-border-active-warning":jt,"--n-color-active-error":Kt,"--n-box-shadow-focus-error":Ut,"--n-box-shadow-active-error":qt,"--n-box-shadow-hover-error":Gt,"--n-border-error":Xt,"--n-border-focus-error":Yt,"--n-border-hover-error":Zt,"--n-border-active-error":Qt,"--n-clear-size":nn,"--n-clear-color":Jt,"--n-clear-color-hover":en,"--n-clear-color-pressed":tn,"--n-arrow-size":on,"--n-font-weight":Q}}),ae=Te?He("internal-selection",I(()=>e.size[0]),Se,e):void 0;return{mergedTheme:k,mergedClearable:z,mergedClsPrefix:n,rtlEnabled:r,patternInputFocused:P,filterablePlaceholder:H,label:D,selected:W,showTagsPanel:C,isComposing:X,counterRef:b,counterWrapperRef:y,patternInputMirrorRef:l,patternInputRef:c,selfRef:h,multipleElRef:i,singleElRef:p,patternInputWrapperRef:m,overflowRef:S,inputTagElRef:v,handleMouseDown:K,handleFocusin:x,handleClear:V,handleMouseEnter:q,handleMouseLeave:j,handleDeleteOption:N,handlePatternKeyDown:u,handlePatternInputInput:A,handlePatternInputBlur:fe,handlePatternInputFocus:me,handleMouseEnterCounter:_e,handleMouseLeaveCounter:$e,handleFocusout:M,handleCompositionEnd:pe,handleCompositionStart:re,onPopoverUpdateShow:Ee,focus:Ce,focusInput:ue,blur:ie,blurInput:Oe,updateCounter:Pe,getCounter:Me,getTail:Be,renderLabel:e.renderLabel,cssVars:Te?void 0:Se,themeClass:ae?.themeClass,onRender:ae?.onRender}},render(){const{status:e,multiple:n,size:o,disabled:r,filterable:l,maxTagCount:c,bordered:h,clsPrefix:i,ellipsisTagPopoverProps:p,onRender:m,renderTag:b,renderLabel:y}=this;m?.();const S=c==="responsive",v=typeof c=="number",C=S||v,P=a(Rn,null,{default:()=>a(kn,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var k,z;return(z=(k=this.$slots).arrow)===null||z===void 0?void 0:z.call(k)}})});let E;if(n){const{labelField:k}=this,z=s=>a("div",{class:`${i}-base-selection-tag-wrapper`,key:s.value},b?b({option:s,handleClose:()=>{this.handleDeleteOption(s)}}):a(it,{size:o,closable:!s.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(s)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>y?y(s,!0):Ie(s[k],s,!0)})),H=()=>(v?this.selectedOptions.slice(0,c):this.selectedOptions).map(z),D=l?a("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,W=S?()=>a("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(it,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0;let te;if(v){const s=this.selectedOptions.length-c;s>0&&(te=a("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},a(it,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${s}`})))}const Z=S?l?a(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:H,counter:W,tail:()=>D}):a(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:H,counter:W}):v&&te?H().concat(te):H(),ce=C?()=>a("div",{class:`${i}-base-selection-popover`},S?H():this.selectedOptions.map(z)):void 0,de=C?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},p):null,ne=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},a("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,le=l?a("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},Z,S?null:D,P):a("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:r?void 0:0},Z,P);E=a(zn,null,C?a(Tn,Object.assign({},de,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>le,default:ce}):le,ne)}else if(l){const k=this.pattern||this.isComposing,z=this.active?!k:!this.selected,H=this.active?!1:this.selected;E=a("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`,title:this.patternInputFocused?void 0:xt(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),H?a("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},a("div",{class:`${i}-base-selection-overlay__wrapper`},b?b({option:this.selectedOption,handleClose:()=>{}}):y?y(this.selectedOption,!0):Ie(this.label,this.selectedOption,!0))):null,z?a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,P)}else E=a("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${i}-base-selection-input`,title:xt(this.label),key:"input"},a("div",{class:`${i}-base-selection-input__content`},b?b({option:this.selectedOption,handleClose:()=>{}}):y?y(this.selectedOption,!0):Ie(this.label,this.selectedOption,!0))):a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),P);return a("div",{ref:"selfRef",class:[`${i}-base-selection`,this.rtlEnabled&&`${i}-base-selection--rtl`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},E,h?a("div",{class:`${i}-base-selection__border`}):null,h?a("div",{class:`${i}-base-selection__state-border`}):null)}});function Ye(e){return e.type==="group"}function Bt(e){return e.type==="ignored"}function at(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function uo(e,n){return{getIsGroup:Ye,getIgnored:Bt,getKey(r){return Ye(r)?r.name||r.key||"key-required":r[e]},getChildren(r){return r[n]}}}function ho(e,n,o,r){if(!n)return e;function l(c){if(!Array.isArray(c))return[];const h=[];for(const i of c)if(Ye(i)){const p=l(i[r]);p.length&&h.push(Object.assign({},i,{[r]:p}))}else{if(Bt(i))continue;n(o,i)&&h.push(i)}return h}return l(e)}function fo(e,n,o){const r=new Map;return e.forEach(l=>{Ye(l)?l[o].forEach(c=>{r.set(c[n],c)}):r.set(l[n],l)}),r}const vo=se([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[It({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),go=Object.assign(Object.assign({},be.props),{to:ct.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),po=he({name:"Select",props:go,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:r,inlineThemeDisabled:l}=Ae(e),c=be("Select","-select",vo,Nn,e,n),h=T(e.defaultValue),i=ee(e,"value"),p=pt(i,h),m=T(!1),b=T(""),y=$n(e,["items","options"]),S=T([]),v=T([]),C=I(()=>v.value.concat(S.value).concat(y.value)),P=I(()=>{const{filter:t}=e;if(t)return t;const{labelField:f,valueField:R}=e;return(L,B)=>{if(!B)return!1;const F=B[f];if(typeof F=="string")return at(L,F);const _=B[R];return typeof _=="string"?at(L,_):typeof _=="number"?at(L,String(_)):!1}}),E=I(()=>{if(e.remote)return y.value;{const{value:t}=C,{value:f}=b;return!f.length||!e.filterable?t:ho(t,P.value,f,e.childrenField)}}),k=I(()=>{const{valueField:t,childrenField:f}=e,R=uo(t,f);return An(E.value,R)}),z=I(()=>fo(C.value,e.valueField,e.childrenField)),H=T(!1),D=pt(ee(e,"show"),H),W=T(null),te=T(null),Z=T(null),{localeRef:ce}=zt("Select"),de=I(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:ce.value.placeholder}),oe=[],ne=T(new Map),le=I(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:f,valueField:R}=e;return L=>({[f]:String(L),[R]:L})}return t===!1?!1:f=>Object.assign(t(f),{value:f})});function s(t){const f=e.remote,{value:R}=ne,{value:L}=z,{value:B}=le,F=[];return t.forEach(_=>{if(L.has(_))F.push(L.get(_));else if(f&&R.has(_))F.push(R.get(_));else if(B){const J=B(_);J&&F.push(J)}}),F}const x=I(()=>{if(e.multiple){const{value:t}=p;return Array.isArray(t)?s(t):[]}return null}),M=I(()=>{const{value:t}=p;return!e.multiple&&!Array.isArray(t)?t===null?null:s([t])[0]||null:null}),V=En(e),{mergedSizeRef:q,mergedDisabledRef:j,mergedStatusRef:K}=V;function N(t,f){const{onChange:R,"onUpdate:value":L,onUpdateValue:B}=e,{nTriggerFormChange:F,nTriggerFormInput:_}=V;R&&ve(R,t,f),B&&ve(B,t,f),L&&ve(L,t,f),h.value=t,F(),_()}function X(t){const{onBlur:f}=e,{nTriggerFormBlur:R}=V;f&&ve(f,t),R()}function u(){const{onClear:t}=e;t&&ve(t)}function g(t){const{onFocus:f,showOnFocus:R}=e,{nTriggerFormFocus:L}=V;f&&ve(f,t),L(),R&&fe()}function A(t){const{onSearch:f}=e;f&&ve(f,t)}function re(t){const{onScroll:f}=e;f&&ve(f,t)}function pe(){var t;const{remote:f,multiple:R}=e;if(f){const{value:L}=ne;if(R){const{valueField:B}=e;(t=x.value)===null||t===void 0||t.forEach(F=>{L.set(F[B],F)})}else{const B=M.value;B&&L.set(B[e.valueField],B)}}}function me(t){const{onUpdateShow:f,"onUpdate:show":R}=e;f&&ve(f,t),R&&ve(R,t),H.value=t}function fe(){j.value||(me(!0),H.value=!0,e.filterable&&We())}function ie(){me(!1)}function Ce(){b.value="",v.value=oe}const ue=T(!1);function Oe(){e.filterable&&(ue.value=!0)}function Pe(){e.filterable&&(ue.value=!1,D.value||Ce())}function Me(){j.value||(D.value?e.filterable?We():ie():fe())}function Be(t){var f,R;!((R=(f=Z.value)===null||f===void 0?void 0:f.selfRef)===null||R===void 0)&&R.contains(t.relatedTarget)||(m.value=!1,X(t),ie())}function xe(t){g(t),m.value=!0}function ye(){m.value=!0}function _e(t){var f;!((f=W.value)===null||f===void 0)&&f.$el.contains(t.relatedTarget)||(m.value=!1,X(t),ie())}function $e(){var t;(t=W.value)===null||t===void 0||t.focus(),ie()}function Ee(t){var f;D.value&&(!((f=W.value)===null||f===void 0)&&f.$el.contains(Hn(t))||ie())}function Te(t){if(!Array.isArray(t))return[];if(le.value)return Array.from(t);{const{remote:f}=e,{value:R}=z;if(f){const{value:L}=ne;return t.filter(B=>R.has(B)||L.has(B))}else return t.filter(L=>R.has(L))}}function Se(t){ae(t.rawNode)}function ae(t){if(j.value)return;const{tag:f,remote:R,clearFilterAfterSelect:L,valueField:B}=e;if(f&&!R){const{value:F}=v,_=F[0]||null;if(_){const J=S.value;J.length?J.push(_):S.value=[_],v.value=oe}}if(R&&ne.value.set(t[B],t),e.multiple){const F=Te(p.value),_=F.findIndex(J=>J===t[B]);if(~_){if(F.splice(_,1),f&&!R){const J=d(t[B]);~J&&(S.value.splice(J,1),L&&(b.value=""))}}else F.push(t[B]),L&&(b.value="");N(F,s(F))}else{if(f&&!R){const F=d(t[B]);~F?S.value=[S.value[F]]:S.value=oe}Ve(),ie(),N(t[B],t)}}function d(t){return S.value.findIndex(R=>R[e.valueField]===t)}function w(t){D.value||fe();const{value:f}=t.target;b.value=f;const{tag:R,remote:L}=e;if(A(f),R&&!L){if(!f){v.value=oe;return}const{onCreate:B}=e,F=B?B(f):{[e.labelField]:f,[e.valueField]:f},{valueField:_,labelField:J}=e;y.value.some(ge=>ge[_]===F[_]||ge[J]===F[J])||S.value.some(ge=>ge[_]===F[_]||ge[J]===F[J])?v.value=oe:v.value=[F]}}function Q(t){t.stopPropagation();const{multiple:f}=e;!f&&e.filterable&&ie(),u(),f?N([],[]):N(null,null)}function Qe(t){!Ne(t,"action")&&!Ne(t,"empty")&&!Ne(t,"header")&&t.preventDefault()}function Je(t){re(t)}function De(t){var f,R,L,B,F;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((f=W.value)===null||f===void 0)&&f.isComposing)){if(D.value){const _=(R=Z.value)===null||R===void 0?void 0:R.getPendingTmNode();_?Se(_):e.filterable||(ie(),Ve())}else if(fe(),e.tag&&ue.value){const _=v.value[0];if(_){const J=_[e.valueField],{value:ge}=p;e.multiple&&Array.isArray(ge)&&ge.includes(J)||ae(_)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;D.value&&((L=Z.value)===null||L===void 0||L.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;D.value?(B=Z.value)===null||B===void 0||B.next():fe();break;case"Escape":D.value&&(Un(t),ie()),(F=W.value)===null||F===void 0||F.focus();break}}function Ve(){var t;(t=W.value)===null||t===void 0||t.focus()}function We(){var t;(t=W.value)===null||t===void 0||t.focusInput()}function et(){var t;D.value&&((t=te.value)===null||t===void 0||t.syncPosition())}pe(),ze(ee(e,"options"),pe);const tt={focus:()=>{var t;(t=W.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=W.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=W.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=W.value)===null||t===void 0||t.blurInput()}},je=I(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),we=l?He("select",void 0,je,e):void 0;return Object.assign(Object.assign({},tt),{mergedStatus:K,mergedClsPrefix:n,mergedBordered:o,namespace:r,treeMate:k,isMounted:Ln(),triggerRef:W,menuRef:Z,pattern:b,uncontrolledShow:H,mergedShow:D,adjustedTo:ct(e),uncontrolledValue:h,mergedValue:p,followerRef:te,localizedPlaceholder:de,selectedOption:M,selectedOptions:x,mergedSize:q,mergedDisabled:j,focused:m,activeWithoutMenuOpen:ue,inlineThemeDisabled:l,onTriggerInputFocus:Oe,onTriggerInputBlur:Pe,handleTriggerOrMenuResize:et,handleMenuFocus:ye,handleMenuBlur:_e,handleMenuTabOut:$e,handleTriggerClick:Me,handleToggle:Se,handleDeleteOption:ae,handlePatternInput:w,handleClear:Q,handleTriggerBlur:Be,handleTriggerFocus:xe,handleKeydown:De,handleMenuAfterLeave:Ce,handleMenuClickOutside:Ee,handleMenuScroll:Je,handleMenuKeydown:De,handleMenuMousedown:Qe,mergedTheme:c,cssVars:l?void 0:je,themeClass:we?.themeClass,onRender:we?.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(On,null,{default:()=>[a(Pn,null,{default:()=>a(co,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),a(Mn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ct.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(Tt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Bn(a(to,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var r,l;return[(l=(r=this.$slots).empty)===null||l===void 0?void 0:l.call(r)]},header:()=>{var r,l;return[(l=(r=this.$slots).header)===null||l===void 0?void 0:l.call(r)]},action:()=>{var r,l;return[(l=(r=this.$slots).action)===null||l===void 0?void 0:l.call(r)]}}),this.displayDirective==="show"?[[_n,this.mergedShow],[bt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[bt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{po as N};
