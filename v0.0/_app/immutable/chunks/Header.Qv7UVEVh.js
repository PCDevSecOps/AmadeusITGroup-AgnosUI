import{s as S,a as E,e as p,t as I,r as z,f as d,g as w,c as _,b as g,d as L,m as f,y as u,i as k,h as m,j as N,n as R,k as v,z as C}from"./scheduler.Q0hAFj3-.js";import{g as j,e as q}from"./app.ozcrq7Ns.js";import{S as U,i as V}from"./index.0hJEAOOZ.js";import{s as B,a as G,p as J}from"./stores.jhBooqM3.js";import{p as K}from"./stores.s8ulmexO.js";function A(n,o,a){const e=n.slice();e[0]=o[a].title,e[6]=o[a].key,e[7]=o[a].path;const l=e[3]===e[6];return e[8]=l,e}function D(n){let o,a=q(n[1]),e=[];for(let l=0;l<a.length;l+=1)e[l]=F(A(n,a,l));return{c(){o=p("ul");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){o=_(l,"UL",{class:!0,role:!0});var i=g(o);for(let s=0;s<e.length;s+=1)e[s].l(i);i.forEach(d),this.h()},h(){f(o,"class","nav-tabs px-4 px-lg-5 d-flex flex-nowrap content-tabset justify-content-start nav"),f(o,"role","tablist")},m(l,i){k(l,o,i);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(o,null)},p(l,i){if(i&30){a=q(l[1]);let s;for(s=0;s<a.length;s+=1){const c=A(l,a,s);e[s]?e[s].p(c,i):(e[s]=F(c),e[s].c(),e[s].m(o,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=a.length}},d(l){l&&d(o),C(e,l)}}}function F(n){let o,a,e=n[0]+"",l,i,s,c;return{c(){o=p("li"),a=p("a"),l=I(e),c=E(),this.h()},l(r){o=_(r,"LI",{class:!0,role:!0});var t=g(o);a=_(t,"A",{href:!0,role:!0,class:!0,"aria-selected":!0});var h=g(a);l=L(h,e),h.forEach(d),c=w(t),t.forEach(d),this.h()},h(){f(a,"href",i=`${n[4]}docs/${n[2]}${n[7]}`),f(a,"role","tab"),f(a,"class","nav-link link-body-emphasis"),f(a,"aria-selected",s=n[8]),u(a,"active",n[8]),f(o,"class","nav-item"),f(o,"role","presentation")},m(r,t){k(r,o,t),m(o,a),m(a,l),m(o,c)},p(r,t){t&2&&e!==(e=r[0]+"")&&N(l,e),t&22&&i!==(i=`${r[4]}docs/${r[2]}${r[7]}`)&&f(a,"href",i),t&10&&s!==(s=r[8])&&f(a,"aria-selected",s),t&10&&u(a,"active",r[8])},d(r){r&&d(o)}}}function M(n){let o,a,e,l,i,s,c;document.title=o=j(n[0],n[2]);let r=n[1].length&&D(n);return{c(){a=E(),e=p("header"),l=p("div"),i=p("h1"),s=I(n[0]),c=E(),r&&r.c(),this.h()},l(t){z("svelte-1fpim28",document.head).forEach(d),a=w(t),e=_(t,"HEADER",{class:!0});var b=g(e);l=_(b,"DIV",{class:!0});var T=g(l);i=_(T,"H1",{class:!0});var H=g(i);s=L(H,n[0]),H.forEach(d),T.forEach(d),c=w(b),r&&r.l(b),b.forEach(d),this.h()},h(){f(i,"class","text-primary col-auto me-auto me-md-none mb-0 p-0 p-md-3 text-center text-md-start w-100"),f(l,"class","row align-items-center w-100"),u(l,"pb-3",n[1].length),f(e,"class","au-header bg-light pt-3 px-4 px-lg-5 d-flex mb-4 align-items-center title svelte-q1c5tl"),u(e,"rounded",!n[1].length),u(e,"rounded-top",n[1].length),u(e,"pb-5",n[1].length),u(e,"pb-3",!n[1].length)},m(t,h){k(t,a,h),k(t,e,h),m(e,l),m(l,i),m(i,s),m(e,c),r&&r.m(e,null)},p(t,[h]){h&5&&o!==(o=j(t[0],t[2]))&&(document.title=o),h&1&&N(s,t[0]),h&2&&u(l,"pb-3",t[1].length),t[1].length?r?r.p(t,h):(r=D(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null),h&2&&u(e,"rounded",!t[1].length),h&2&&u(e,"rounded-top",t[1].length),h&2&&u(e,"pb-5",t[1].length),h&2&&u(e,"pb-3",!t[1].length)},i:R,o:R,d(t){t&&(d(a),d(e)),r&&r.d()}}}function O(n,o,a){let e,l,i,s,c;v(n,K,t=>a(5,l=t)),v(n,B,t=>a(2,i=t)),v(n,G,t=>a(3,s=t)),v(n,J,t=>a(4,c=t));let{title:r}=o;return n.$$set=t=>{"title"in t&&a(0,r=t.title)},n.$$.update=()=>{n.$$.dirty&32&&a(1,e=l.data.tabs??[])},[r,e,i,s,c,l]}class Z extends U{constructor(o){super(),V(this,o,O,M,S,{title:0})}}export{Z as H};
