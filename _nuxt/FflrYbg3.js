import P from"./0T_J6kDF.js";import k from"./C6w1qA64.js";import L from"./DEyyqHbW.js";import{u as b,d as f,G as R,P as g,x,H as C,I as S,r as B,a as N,J as m,K as T,L as j,M as p,T as E,N as u,O as H,Q as O,S as A,R as w,U as D,v as $,V as q,c as d,e as I,h as y,w as _,W as v}from"./B9nupWlS.js";import{u as M}from"./nOtBm1Qd.js";import"./CIw-n4oP.js";import"./Dnd51l0P.js";const V=f({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,n){const e=await m[t.name]().then(o=>o.default||o);return()=>p(e,t.layoutProps,n.slots)}}),F=f({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,n){const e=b(),o=R(g),s=o===x()?C():o,r=S(()=>{let a=u(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=u(t.fallback)),a}),i=B();n.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",l);N().beforeEach(a)}return()=>{const a=r.value&&r.value in m,c=s.meta.layoutTransition??T;return j(E,a&&c,{default:()=>p(A,{suspensible:!0,onResolve:()=>{O(l)}},{default:()=>p(G,{layoutProps:H(n.attrs,{ref:i}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},n.slots)})}).default()}}}),G=f({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,n){const e=t.name;return t.shouldProvide&&w(D,{isCurrent:o=>e===(o.meta.layout??"default")}),()=>{var o,s;return!e||typeof e=="string"&&!(e in m)?(s=(o=n.slots).default)==null?void 0:s.call(o):p(V,{key:e,layoutProps:t.layoutProps,name:e},n.slots)}}}),J={class:"document-driven-page"},Z=f({__name:"document-driven",setup(t){const{contentHead:n}=$().public.content,{page:e,layout:o}=q();return e.value,n&&M(e),(s,r)=>{const i=P,l=k,a=L,c=F;return d(),I("div",J,[y(c,{name:u(o)||"default"},{default:_(()=>[u(e)?(d(),v(l,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(d(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{Z as default};
