import{s as l}from"../chunks/scheduler.cb6605ed.js";import{S as i,i as p,r as m,u,v as g,d as f,t as _,w as c}from"../chunks/index.58893b4f.js";import{P as d}from"../chunks/Playground.e46b9e56.js";import{g as P}from"../chunks/pagination.508694dc.js";import{_ as r}from"../chunks/preload-helper.a4192956.js";import{d as y}from"../chunks/api.8565129e.js";const v={componentName:"pagination",sampleName:"playground",files:{angular:{entryPoint:"playground.component.ts",files:{"playground.component.ts":()=>r(()=>import("../chunks/playground.route.04efcbb9.js"),[],import.meta.url).then(o=>o.default)}},react:{entryPoint:"playground.tsx",files:{"playground.tsx":()=>r(()=>import("../chunks/Playground.route.3677c70b.js"),[],import.meta.url).then(o=>o.default)}},svelte:{entryPoint:"playground.svelte",files:{"playground.svelte":()=>r(()=>import("../chunks/Playground.route.f6c2d11b.js"),[],import.meta.url).then(o=>o.default)}}}};function V(o){let e,a;return e=new d({props:{sample:v,config:P(),doc:y,listPropsValues:o[0]}}),{c(){m(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){g(e,t,n),a=!0},p(t,[n]){const s={};n&1&&(s.listPropsValues=t[0]),e.$set(s)},i(t){a||(f(e.$$.fragment,t),a=!0)},o(t){_(e.$$.fragment,t),a=!1},d(t){c(e,t)}}}function $(o,e,a){let{listPropsValues:t={onPageChange:["noop","log"],pagesFactory:["defaultPageFactory"],ariaPageLabel:["simpleLabel","pageLabel"],slotNumberLabel:["slotNumberLabel"]}}=e;return o.$$set=n=>{"listPropsValues"in n&&a(0,t=n.listPropsValues)},[t]}class N extends i{constructor(e){super(),p(this,e,$,V,l,{listPropsValues:0})}}export{N as component};