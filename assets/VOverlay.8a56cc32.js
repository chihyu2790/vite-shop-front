import{s as I,af as C,r as L,l as S,A as Se,x as _,ag as Q,a4 as V,ah as Pe,ai as be,aj as X,ak as $,al as Ae,am as Ce,an as ie,ao as G,ap as J,aq as se,ar as Le,as as ce,n as B,at as ue,au as _e,a as Te,av as Be,aw as Fe,F as Re,ax as De,m as Ne,R as Me,v as $e,p as He,ay as We,k as Ie,t as Ve,az as je,aA as ze,q as qe,b as F,Q as U,aB as ve,aC as Ue,W as Ye,N as Ke,O as Qe,a3 as Xe,P as Ze,aD as Ge,aE as Je}from"./index.b9e201ec.js";import{B as ee,g as fe,n as et,s as tt}from"./VTextField.dd9ff239.js";function pe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ot(e){for(;e;){if(le(e))return e;e=e.parentElement}return document.scrollingElement}function Y(e){const t=[];for(;e;)le(e)&&t.push(e),e=e.parentElement;return t}function le(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function nt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const at=I({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function lt(e,t){const o={},n=l=>()=>{if(!C)return Promise.resolve(!0);const a=l==="openDelay";return o.closeDelay&&window.clearTimeout(o.closeDelay),delete o.closeDelay,o.openDelay&&window.clearTimeout(o.openDelay),delete o.openDelay,new Promise(r=>{var u;const c=parseInt((u=e[l])!=null?u:0,10);o[l]=window.setTimeout(()=>{t==null||t(a),r(a)},c)})};return{runCloseDelay:n("closeDelay"),runOpenDelay:n("openDelay")}}const rt=Symbol.for("vuetify:v-menu"),it=I({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...at()});function st(e,t){let{isActive:o,isTop:n}=t;const l=L();let a=!1,r=!1;const u=S(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),c=S(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:m,runCloseDelay:s}=lt(e,i=>{i===(e.openOnHover&&a||u.value&&r)&&!(e.openOnHover&&o.value&&!n.value)&&(o.value=i)}),b={click:i=>{i.stopPropagation(),l.value=i.currentTarget||i.target,o.value=!o.value},mouseenter:i=>{a=!0,l.value=i.currentTarget||i.target,m()},mouseleave:i=>{a=!1,s()},focus:i=>{Ae&&!i.target.matches(":focus-visible")||(r=!0,i.stopPropagation(),l.value=i.currentTarget||i.target,m())},blur:i=>{r=!1,i.stopPropagation(),s()}},p=S(()=>{const i={};return c.value&&(i.click=b.click),e.openOnHover&&(i.mouseenter=b.mouseenter,i.mouseleave=b.mouseleave),u.value&&(i.focus=b.focus,i.blur=b.blur),i}),d=S(()=>{const i={};if(e.openOnHover&&(i.mouseenter=()=>{a=!0,m()},i.mouseleave=()=>{a=!1,s()}),e.closeOnContentClick){const E=Se(rt,null);i.click=()=>{o.value=!1,E==null||E.closeParents()}}return i});_(n,i=>{i&&e.openOnHover&&!a&&(o.value=!1)});const v=L();Q(()=>{!v.value||V(()=>{const i=v.value;l.value=Pe(i)?i.$el:i})});const R=be("useActivator");let x;return _(()=>!!e.activator,i=>{i&&C?(x=X(),x.run(()=>{ct(e,R,{activatorEl:l,activatorEvents:p})})):x&&x.stop()},{flush:"post",immediate:!0}),{activatorEl:l,activatorRef:v,activatorEvents:p,contentEvents:d}}function ct(e,t,o){let{activatorEl:n,activatorEvents:l}=o;_(()=>e.activator,(c,m)=>{if(m&&c!==m){const s=u(m);s&&r(s)}c&&V(()=>a())},{immediate:!0}),_(()=>e.activatorProps,()=>{a()}),$(()=>{r()});function a(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(l.value).forEach(s=>{let[b,p]=s;c.addEventListener(b,p)}),Object.keys(m).forEach(s=>{m[s]==null?c.removeAttribute(s):c.setAttribute(s,m[s])}))}function r(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u(),m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;!c||(Object.entries(l.value).forEach(s=>{let[b,p]=s;c.removeEventListener(b,p)}),Object.keys(m).forEach(s=>{c.removeAttribute(s)}))}function u(){var c;let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,s;if(m)if(m==="parent"){var b,p;let d=t==null||(b=t.proxy)==null||(p=b.$el)==null?void 0:p.parentNode;for(;d.hasAttribute("data-no-activator");)d=d.parentNode;s=d}else typeof m=="string"?s=document.querySelector(m):"$el"in m?s=m.$el:s=m;return n.value=((c=s)==null?void 0:c.nodeType)===Node.ELEMENT_NODE?s:null,n.value}}const ut=I({eager:Boolean},"lazy");function vt(e,t){const o=L(!1),n=S(()=>o.value||e.eager||t.value);_(t,()=>o.value=!0);function l(){e.eager||(o.value=!1)}return{isBooted:o,hasContent:n,onAfterLeave:l}}function te(e,t){return{x:e.x+t.x,y:e.y+t.y}}function ft(e,t){return{x:e.x-t.x,y:e.y-t.y}}function de(e,t){if(e.side==="top"||e.side==="bottom"){const{side:o,align:n}=e,l=n==="left"?0:n==="center"?t.width/2:n==="right"?t.width:n,a=o==="top"?0:o==="bottom"?t.height:o;return te({x:l,y:a},t)}else if(e.side==="left"||e.side==="right"){const{side:o,align:n}=e,l=o==="left"?0:o==="right"?t.width:o,a=n==="top"?0:n==="center"?t.height/2:n==="bottom"?t.height:n;return te({x:l,y:a},t)}return te({x:t.width/2,y:t.height/2},t)}const we={static:yt,connected:ht},dt=I({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in we},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]});function mt(e,t){const o=L({}),n=L();let l;Q(async()=>{var r;(r=l)==null||r.stop(),n.value=void 0,C&&t.isActive.value&&e.locationStrategy&&(l=X(),await V(),l.run(()=>{if(typeof e.locationStrategy=="function"){var u;n.value=(u=e.locationStrategy(t,e,o))==null?void 0:u.updateLocation}else{var c;n.value=(c=we[e.locationStrategy](t,e,o))==null?void 0:c.updateLocation}}))}),C&&window.addEventListener("resize",a,{passive:!0}),$(()=>{var r;C&&window.removeEventListener("resize",a),n.value=void 0,(r=l)==null||r.stop()});function a(r){var u;(u=n.value)==null||u.call(n,r)}return{contentStyles:o,updateLocation:n}}function yt(){}function gt(e){const t=et(e);return t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function ht(e,t,o){const n=nt(e.activatorEl.value);n&&Object.assign(o.value,{position:"fixed"});const{preferredAnchor:l,preferredOrigin:a}=Ce(()=>{const d=ie(t.location,e.isRtl.value),v=t.origin==="overlap"?d:t.origin==="auto"?G(d):ie(t.origin,e.isRtl.value);return d.side===v.side&&d.align===J(v).align?{preferredAnchor:se(d),preferredOrigin:se(v)}:{preferredAnchor:d,preferredOrigin:v}}),[r,u,c,m]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>S(()=>{const v=parseFloat(t[d]);return isNaN(v)?1/0:v})),s=S(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let b=!1;if(C){const d=new ResizeObserver(()=>{b&&p()});d.observe(e.activatorEl.value),d.observe(e.contentEl.value),$(()=>{d.disconnect()})}function p(){b=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>b=!0)});const d=e.activatorEl.value.getBoundingClientRect(),v=gt(e.contentEl.value),R=Y(e.contentEl.value),x=12;R.length||(R.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const i=R.reduce((w,h)=>{const y=h.getBoundingClientRect(),g=new ee({x:h===document.documentElement?0:y.x,y:h===document.documentElement?0:y.y,width:h.clientWidth,height:h.clientHeight});return w?new ee({x:Math.max(w.left,g.left),y:Math.max(w.top,g.top),width:Math.min(w.right,g.right)-Math.max(w.left,g.left),height:Math.min(w.bottom,g.bottom)-Math.max(w.top,g.top)}):g},void 0);i.x+=x,i.y+=x,i.width-=x*2,i.height-=x*2;let E={anchor:l.value,origin:a.value};function j(w){const h=new ee(v),y=de(w.anchor,d),g=de(w.origin,h);let{x:k,y:f}=ft(y,g);switch(w.anchor.side){case"top":f-=s.value[0];break;case"bottom":f+=s.value[0];break;case"left":k-=s.value[0];break;case"right":k+=s.value[0];break}switch(w.anchor.align){case"top":f-=s.value[1];break;case"bottom":f+=s.value[1];break;case"left":k-=s.value[1];break;case"right":k+=s.value[1];break}return h.x+=k,h.y+=f,h.width=Math.min(h.width,c.value),h.height=Math.min(h.height,m.value),{overflows:fe(h,i),x:k,y:f}}let D=0,T=0;const P={x:0,y:0},H={x:!1,y:!1};let z=-1;for(;;){if(z++>10){Le("Infinite loop detected in connectedLocationStrategy");break}const{x:w,y:h,overflows:y}=j(E);D+=w,T+=h,v.x+=w,v.y+=h;{const g=ce(E.anchor),k=y.x.before||y.x.after,f=y.y.before||y.y.after;let A=!1;if(["x","y"].forEach(O=>{if(O==="x"&&k&&!H.x||O==="y"&&f&&!H.y){const M={anchor:{...E.anchor},origin:{...E.origin}},re=O==="x"?g==="y"?J:G:g==="y"?G:J;M.anchor=re(M.anchor),M.origin=re(M.origin);const{overflows:q}=j(M);(q[O].before<=y[O].before&&q[O].after<=y[O].after||q[O].before+q[O].after<(y[O].before+y[O].after)/2)&&(E=M,A=H[O]=!0)}}),A)continue}y.x.before&&(D+=y.x.before,v.x+=y.x.before),y.x.after&&(D-=y.x.after,v.x-=y.x.after),y.y.before&&(T+=y.y.before,v.y+=y.y.before),y.y.after&&(T-=y.y.after,v.y-=y.y.after);{const g=fe(v,i);P.x=i.width-g.x.before-g.x.after,P.y=i.height-g.y.before-g.y.after,D+=g.x.before,v.x+=g.x.before,T+=g.y.before,v.y+=g.y.before}break}const Z=ce(E.anchor);Object.assign(o.value,{"--v-overlay-anchor-origin":`${E.anchor.side} ${E.anchor.align}`,transformOrigin:`${E.origin.side} ${E.origin.align}`,top:B(me(T)),left:B(me(D)),minWidth:B(Z==="y"?Math.min(r.value,d.width):r.value),maxWidth:B(ye(ue(P.x,r.value===1/0?0:r.value,c.value))),maxHeight:B(ye(ue(P.y,u.value===1/0?0:u.value,m.value)))})}return _(()=>[l.value,a.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>p(),{immediate:!n}),n&&V(()=>p()),requestAnimationFrame(()=>{o.value.maxHeight&&p()}),{updateLocation:p}}function me(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ye(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let oe=!0;const K=[];function bt(e){!oe||K.length?(K.push(e),ne()):(oe=!1,e(),ne())}let ge=-1;function ne(){cancelAnimationFrame(ge),ge=requestAnimationFrame(()=>{const e=K.shift();e&&e(),K.length?ne():oe=!0})}const ae={none:null,close:xt,block:Et,reposition:kt},pt=I({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ae}});function wt(e,t){if(!C)return;let o;Q(async()=>{var n;(n=o)==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(o=X(),await V(),o.run(()=>{if(typeof e.scrollStrategy=="function")e.scrollStrategy(t);else{var l;(l=ae[e.scrollStrategy])==null||l.call(ae,t)}}))})}function xt(e){var t;function o(n){e.isActive.value=!1}xe((t=e.activatorEl.value)!=null?t:e.contentEl.value,o)}function Et(e){var t;const o=[...new Set([...Y(e.activatorEl.value),...Y(e.contentEl.value)])].filter(a=>!a.classList.contains("v-overlay-scroll-blocked")),n=window.innerWidth-document.documentElement.offsetWidth,l=(a=>le(a)&&a)(((t=e.root.value)==null?void 0:t.offsetParent)||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((a,r)=>{a.style.setProperty("--v-body-scroll-x",B(-a.scrollLeft)),a.style.setProperty("--v-body-scroll-y",B(-a.scrollTop)),a.style.setProperty("--v-scrollbar-offset",B(n)),a.classList.add("v-overlay-scroll-blocked")}),$(()=>{o.forEach((a,r)=>{const u=parseFloat(a.style.getPropertyValue("--v-body-scroll-x")),c=parseFloat(a.style.getPropertyValue("--v-body-scroll-y"));a.style.removeProperty("--v-body-scroll-x"),a.style.removeProperty("--v-body-scroll-y"),a.style.removeProperty("--v-scrollbar-offset"),a.classList.remove("v-overlay-scroll-blocked"),a.scrollLeft=-u,a.scrollTop=-c}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function kt(e){var t;let o=!1,n=-1;function l(a){bt(()=>{var r,u;const c=performance.now();(r=(u=e.updateLocation).value)==null||r.call(u,a),o=(performance.now()-c)/(1e3/60)>2})}xe((t=e.activatorEl.value)!=null?t:e.contentEl.value,a=>{o?(cancelAnimationFrame(n),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{l(a)})})):l(a)})}function xe(e,t){const o=[document,...Y(e)];o.forEach(n=>{n.addEventListener("scroll",t,{passive:!0})}),$(()=>{o.forEach(n=>{n.removeEventListener("scroll",t)})})}function Ee(e,t){let o;_(e,n=>{if(n&&!o)o=X(),o.run(t);else{var l;(l=o)==null||l.stop(),o=void 0}},{immediate:!0})}const N=Te([]);function Ot(e,t){const o=be("useStack"),n=L(+t.value);Ee(e,()=>{var a;const r=(a=N[N.length-1])==null?void 0:a[1];n.value=r?r+10:+t.value,N.push([o,n.value]),$(()=>{const u=N.findIndex(c=>c[0]===o);N.splice(u,1)})});const l=L(!0);return Q(()=>{var a;const r=Be((a=N[N.length-1])==null?void 0:a[0])===o;setTimeout(()=>l.value=r)}),{isTop:_e(l),stackStyles:S(()=>({zIndex:n.value}))}}function W(e){return{teleportTarget:S(()=>{const o=e.value;if(o===!0||!C)return;const n=o===!1?document.body:typeof o=="string"?document.querySelector(o):o;if(n==null){Fe(`Unable to locate target ${o}`);return}if(!W.cache.has(n)){const l=document.createElement("div");l.className="v-overlay-container",n.appendChild(l),W.cache.set(n,l)}return W.cache.get(n)})}}W.cache=new WeakMap;function St(){return!0}function ke(e,t,o){if(!e||Oe(e,o)===!1)return!1;const n=pe(t);if(typeof ShadowRoot!="undefined"&&n instanceof ShadowRoot&&n.host===e.target)return!1;const l=(typeof o.value=="object"&&o.value.include||(()=>[]))();return l.push(t),!l.some(a=>a==null?void 0:a.contains(e.target))}function Oe(e,t){return(typeof t.value=="object"&&t.value.closeConditional||St)(e)}function Pt(e,t,o){const n=typeof o.value=="function"?o.value:o.value.handler;t._clickOutside.lastMousedownWasOutside&&ke(e,t,o)&&setTimeout(()=>{Oe(e,o)&&n&&n(e)},0)}function he(e,t){const o=pe(e);t(document),typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot&&t(o)}const At={mounted(e,t){const o=l=>Pt(l,e,t),n=l=>{e._clickOutside.lastMousedownWasOutside=ke(l,e,t)};he(e,l=>{l.addEventListener("click",o,!0),l.addEventListener("mousedown",n,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:o,onMousedown:n}},unmounted(e,t){!e._clickOutside||(he(e,o=>{var n;if(!o||!((n=e._clickOutside)!=null&&n[t.instance.$.uid]))return;const{onClick:l,onMousedown:a}=e._clickOutside[t.instance.$.uid];o.removeEventListener("click",l,!0),o.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Ct(e){const{modelValue:t,color:o,...n}=e;return F(Ge,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&F("div",U({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},n),null)]})}const Tt=Re()({name:"VOverlay",directives:{ClickOutside:At},inheritAttrs:!1,props:{absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...it(),...De(),...ut(),...dt(),...pt(),...Ne(),...Me()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:o,attrs:n,emit:l}=t;const a=$e(e,"modelValue"),r=S({get:()=>a.value,set:f=>{f&&e.disabled||(a.value=f)}}),{teleportTarget:u}=W(S(()=>e.attach||e.contained)),{themeClasses:c}=He(e),{rtlClasses:m,isRtl:s}=We(),{hasContent:b,onAfterLeave:p}=vt(e,r),d=Ie(S(()=>typeof e.scrim=="string"?e.scrim:null)),{isTop:v,stackStyles:R}=Ot(r,Ve(e,"zIndex")),{activatorEl:x,activatorRef:i,activatorEvents:E,contentEvents:j}=st(e,{isActive:r,isTop:v}),{dimensionStyles:D}=je(e);_(()=>e.disabled,f=>{f&&(r.value=!1)});const T=L(),P=L(),{contentStyles:H,updateLocation:z}=mt(e,{isRtl:s,contentEl:P,activatorEl:x,isActive:r});wt(e,{root:T,contentEl:P,activatorEl:x,isActive:r,updateLocation:z});function Z(f){l("click:outside",f),e.persistent?k():r.value=!1}function w(){return r.value&&v.value}C&&_(r,f=>{f?window.addEventListener("keydown",h):window.removeEventListener("keydown",h)},{immediate:!0});function h(f){f.key==="Escape"&&v.value&&(e.persistent?k():r.value=!1)}const y=ze();Ee(()=>e.closeOnBack,()=>{Je(y,f=>{v.value&&r.value?(f(!1),e.persistent?k():r.value=!1):f()})});const g=L();_(()=>r.value&&(e.absolute||e.contained)&&u.value==null,f=>{if(f){const A=ot(T.value);A&&A!==document.scrollingElement&&(g.value=A.scrollTop)}});function k(){var f;e.noClickAnimation||(f=P.value)==null||f.animate([{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:tt})}return qe(()=>{var f,A;return F(Ze,null,[(f=o.activator)==null?void 0:f.call(o,{isActive:r.value,props:U({ref:i},ve(E.value),e.activatorProps)}),C&&F(Ue,{disabled:!u.value,to:u.value},{default:()=>[b.value&&F("div",U({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":r.value,"v-overlay--contained":e.contained},c.value,m.value],style:[R.value,{top:B(g.value)}],ref:T},n),[F(Ct,{color:d,modelValue:r.value&&!!e.scrim},null),F(Ye,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterLeave:()=>{p(),l("afterLeave")}},{default:()=>[Ke(F("div",U({ref:P,class:["v-overlay__content",e.contentClass],style:[D.value,H.value]},ve(j.value),e.contentProps),[(A=o.default)==null?void 0:A.call(o,{isActive:r})]),[[Qe,r.value],[Xe("click-outside"),{handler:Z,closeConditional:w,include:()=>[x.value]}]])]})])]})])}),{activatorEl:x,animateClick:k,contentEl:P,isTop:v,updateLocation:z}}});export{Tt as V,rt as a};