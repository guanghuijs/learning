import{R as de,bd as ue,aX as he,W as D,ai as o,aj as Z,V as L,ah as v,aI as j,d as K,X as fe,Y as U,$ as be,r as R,a0 as ve,a1 as ge,f as F,ao as x,aB as N,aA as g,ap as we,be as W,P as l,a6 as _,ar as me,aT as pe,ab as E,y as ye,av as Ce,bf as I,o as xe,c as _e,_ as ke}from"./index-WJebj2m3.js";import{l as Se}from"./loadBMapGl-_qUit9OZ.js";const Be=e=>{const{primaryColor:u,opacityDisabled:b,borderRadius:d,textColor3:c}=e;return Object.assign(Object.assign({},ue),{iconColor:c,textColor:"white",loadingColor:u,opacityDisabled:b,railColor:"rgba(0, 0, 0, .14)",railColorActive:u,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:d,railBorderRadiusMedium:d,railBorderRadiusLarge:d,buttonBorderRadiusSmall:d,buttonBorderRadiusMedium:d,buttonBorderRadiusLarge:d,boxShadowFocus:`0 0 0 2px ${he(u,{alpha:.2})}`})},Re={name:"Switch",common:de,self:Be},$e=Re,ze=D("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[o("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),o("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),o("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),D("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Z({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),o("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),o("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),o("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),L("&:focus",[o("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),v("round",[o("rail","border-radius: calc(var(--n-rail-height) / 2);",[o("button","border-radius: calc(var(--n-button-height) / 2);")])]),j("disabled",[j("icon",[v("rubber-band",[v("pressed",[o("rail",[o("button","max-width: var(--n-button-width-pressed);")])]),o("rail",[L("&:active",[o("button","max-width: var(--n-button-width-pressed);")])]),v("active",[v("pressed",[o("rail",[o("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),o("rail",[L("&:active",[o("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),v("active",[o("rail",[o("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),o("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[o("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Z()]),o("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),v("active",[o("rail","background-color: var(--n-rail-color-active);")]),v("loading",[o("rail",`
 cursor: wait;
 `)]),v("disabled",[o("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Ve=Object.assign(Object.assign({},U.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let B;const Fe=K({name:"Switch",props:Ve,setup(e){B===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?B=CSS.supports("width","max(1px)"):B=!1:B=!0);const{mergedClsPrefixRef:u,inlineThemeDisabled:b}=fe(e),d=U("Switch","-switch",ze,$e,e,u),c=be(e),{mergedSizeRef:a,mergedDisabledRef:r}=c,w=R(e.defaultValue),m=ve(e,"value"),h=ge(m,w),i=F(()=>h.value===e.checkedValue),s=R(!1),t=R(!1),f=F(()=>{const{railStyle:n}=e;if(n)return n({focused:t.value,checked:i.value})});function p(n){const{"onUpdate:value":$,onChange:z,onUpdateValue:V}=e,{nTriggerFormInput:T,nTriggerFormChange:A}=c;$&&E($,n),V&&E(V,n),z&&E(z,n),w.value=n,T(),A()}function X(){const{nTriggerFormFocus:n}=c;n()}function G(){const{nTriggerFormBlur:n}=c;n()}function Y(){e.loading||r.value||(h.value!==e.checkedValue?p(e.checkedValue):p(e.uncheckedValue))}function q(){t.value=!0,X()}function J(){t.value=!1,G(),s.value=!1}function Q(n){e.loading||r.value||n.key===" "&&(h.value!==e.checkedValue?p(e.checkedValue):p(e.uncheckedValue),s.value=!1)}function ee(n){e.loading||r.value||n.key===" "&&(n.preventDefault(),s.value=!0)}const H=F(()=>{const{value:n}=a,{self:{opacityDisabled:$,railColor:z,railColorActive:V,buttonBoxShadow:T,buttonColor:A,boxShadowFocus:te,loadingColor:oe,textColor:ne,iconColor:ae,[x("buttonHeight",n)]:y,[x("buttonWidth",n)]:ie,[x("buttonWidthPressed",n)]:re,[x("railHeight",n)]:C,[x("railWidth",n)]:S,[x("railBorderRadius",n)]:le,[x("buttonBorderRadius",n)]:se},common:{cubicBezierEaseInOut:ce}}=d.value;let O,P,M;return B?(O=`calc((${C} - ${y}) / 2)`,P=`max(${C}, ${y})`,M=`max(${S}, calc(${S} + ${y} - ${C}))`):(O=N((g(C)-g(y))/2),P=N(Math.max(g(C),g(y))),M=g(C)>g(y)?S:N(g(S)+g(y)-g(C))),{"--n-bezier":ce,"--n-button-border-radius":se,"--n-button-box-shadow":T,"--n-button-color":A,"--n-button-width":ie,"--n-button-width-pressed":re,"--n-button-height":y,"--n-height":P,"--n-offset":O,"--n-opacity-disabled":$,"--n-rail-border-radius":le,"--n-rail-color":z,"--n-rail-color-active":V,"--n-rail-height":C,"--n-rail-width":S,"--n-width":M,"--n-box-shadow-focus":te,"--n-loading-color":oe,"--n-text-color":ne,"--n-icon-color":ae}}),k=b?we("switch",F(()=>a.value[0]),H,e):void 0;return{handleClick:Y,handleBlur:J,handleFocus:q,handleKeyup:Q,handleKeydown:ee,mergedRailStyle:f,pressed:s,mergedClsPrefix:u,mergedValue:h,checked:i,mergedDisabled:r,cssVars:b?void 0:H,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:u,checked:b,mergedRailStyle:d,onRender:c,$slots:a}=this;c==null||c();const{checked:r,unchecked:w,icon:m,"checked-icon":h,"unchecked-icon":i}=a,s=!(W(m)&&W(h)&&W(i));return l("div",{role:"switch","aria-checked":b,class:[`${e}-switch`,this.themeClass,s&&`${e}-switch--icon`,b&&`${e}-switch--active`,u&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},l("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:d},_(r,t=>_(w,f=>t||f?l("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},l("div",{class:`${e}-switch__rail-placeholder`},l("div",{class:`${e}-switch__button-placeholder`}),t),l("div",{class:`${e}-switch__rail-placeholder`},l("div",{class:`${e}-switch__button-placeholder`}),f)):null)),l("div",{class:`${e}-switch__button`},_(m,t=>_(h,f=>_(i,p=>l(me,null,{default:()=>this.loading?l(pe,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(f||t)?l("div",{class:`${e}-switch__button-icon`,key:f?"checked-icon":"icon"},f||t):!this.checked&&(p||t)?l("div",{class:`${e}-switch__button-icon`,key:p?"unchecked-icon":"icon"},p||t):null})))),_(r,t=>t&&l("div",{key:"checked",class:`${e}-switch__checked`},t)),_(w,t=>t&&l("div",{key:"unchecked",class:`${e}-switch__unchecked`},t)))))}}),Te=K({__name:"3.control",setup(e){const u=R(),b=R(!1);ye(async()=>{await d(u.value)});async function d(c){const a=await Se(),r=new a.Map(c);r.centerAndZoom(new a.Point(116.404,39.915),18),r.addControl(new a.ScaleControl),r.addControl(new a.ZoomControl),r.addControl(new a.NavigationControl3D);const w=new a.LocationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,offset:new a.Size(20,20)});r.addControl(w),w.addEventListener("locationSuccess",function(i){console.log(i)}),r.addControl(new a.CityListControl({anchor:BMAP_ANCHOR_TOP_LEFT}));function m({anchor:i=BMAP_ANCHOR_TOP_LEFT,offset:s=new a.Size(20,60)}={}){this.defaultAnchor=i,this.defaultOffset=s}m.prototype=new a.Control,m.prototype.initialize=function(i){const s=l(Ce,{type:"warning",onclick:()=>{i.setZoom(i.getZoom()+1)}},{default:()=>"放大一级"}),t=document.createElement("div");return i.getContainer().appendChild(t),I(s,t),t},r.addControl(new m);function h({anchor:i=BMAP_ANCHOR_TOP_LEFT,offset:s=new a.Size(20,120)}={}){this.defaultAnchor=i,this.defaultOffset=s}h.prototype=new a.Control,h.prototype.initialize=function(i){const s=l(Fe,{checked:b,"onUpdate:checked":async f=>{b.value=f,f?i.enableScrollWheelZoom():i.disableScrollWheelZoom()}}),t=document.createElement("div");return i.getContainer().appendChild(t),I(s,t),t},r.addControl(new h)}return(c,a)=>(xe(),_e("div",{id:"container",class:"container",ref_key:"container",ref:u},null,512))}}),Pe=ke(Te,[["__scopeId","data-v-67f1585b"]]);export{Pe as default};
