import{s as q,a as E,e as d,t as L,m as C,f as u,g as w,c as p,b as g,d as N,o as f,v as m,i as k,h as _,j as S,n as R,k as v,w as U}from"./scheduler.EXoB7DWX.js";import{g as j,a as V,s as z,p as B,e as A}from"./app.-qvYZt2T.js";import{S as G,i as J}from"./index.vwAgjp14.js";import{p as K}from"./stores.xuyWHRsS.js";function D(r,n,l){const e=r.slice();e[0]=n[l].title,e[6]=n[l].key,e[7]=n[l].path;const a=e[3]===e[6];return e[8]=a,e}function F(r){let n,l=A(r[1]),e=[];for(let a=0;a<l.length;a+=1)e[a]=I(D(r,l,a));return{c(){n=d("ul");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){n=p(a,"UL",{class:!0,role:!0});var i=g(n);for(let s=0;s<e.length;s+=1)e[s].l(i);i.forEach(u),this.h()},h(){f(n,"class","nav-tabs px-4 px-lg-5 content-tabset justify-content-start nav"),f(n,"role","tablist")},m(a,i){k(a,n,i);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(n,null)},p(a,i){if(i&30){l=A(a[1]);let s;for(s=0;s<l.length;s+=1){const h=D(a,l,s);e[s]?e[s].p(h,i):(e[s]=I(h),e[s].c(),e[s].m(n,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=l.length}},d(a){a&&u(n),U(e,a)}}}function I(r){let n,l,e=r[0]+"",a,i,s,h;return{c(){n=d("li"),l=d("a"),a=L(e),h=E(),this.h()},l(o){n=p(o,"LI",{class:!0,role:!0});var t=g(n);l=p(t,"A",{href:!0,role:!0,class:!0,"aria-selected":!0});var c=g(l);a=N(c,e),c.forEach(u),h=w(t),t.forEach(u),this.h()},h(){f(l,"href",i=`${r[4]}docs/${r[2]}${r[7]}`),f(l,"role","tab"),f(l,"class","nav-link link-body-emphasis"),f(l,"aria-selected",s=r[8]),m(l,"active",r[8]),f(n,"class","nav-item"),f(n,"role","presentation")},m(o,t){k(o,n,t),_(n,l),_(l,a),_(n,h)},p(o,t){t&2&&e!==(e=o[0]+"")&&S(a,e),t&22&&i!==(i=`${o[4]}docs/${o[2]}${o[7]}`)&&f(l,"href",i),t&10&&s!==(s=o[8])&&f(l,"aria-selected",s),t&10&&m(l,"active",o[8])},d(o){o&&u(n)}}}function M(r){let n,l,e,a,i,s,h;document.title=n=j(r[0],r[2]);let o=r[1].length&&F(r);return{c(){l=E(),e=d("header"),a=d("div"),i=d("h1"),s=L(r[0]),h=E(),o&&o.c(),this.h()},l(t){C("svelte-1fpim28",document.head).forEach(u),l=w(t),e=p(t,"HEADER",{class:!0});var b=g(e);a=p(b,"DIV",{class:!0});var T=g(a);i=p(T,"H1",{class:!0});var H=g(i);s=N(H,r[0]),H.forEach(u),T.forEach(u),h=w(b),o&&o.l(b),b.forEach(u),this.h()},h(){f(i,"class","col-auto me-auto me-md-none mb-0 p-0 p-md-3 text-center text-md-start w-100"),f(a,"class","row align-items-center w-100"),m(a,"pb-4",r[1].length),f(e,"class","bg-light pt-4 px-4 px-lg-5 d-flex mb-4 align-items-center title"),m(e,"pb-5",r[1].length),m(e,"pb-4",!r[1].length)},m(t,c){k(t,l,c),k(t,e,c),_(e,a),_(a,i),_(i,s),_(e,h),o&&o.m(e,null)},p(t,[c]){c&5&&n!==(n=j(t[0],t[2]))&&(document.title=n),c&1&&S(s,t[0]),c&2&&m(a,"pb-4",t[1].length),t[1].length?o?o.p(t,c):(o=F(t),o.c(),o.m(e,null)):o&&(o.d(1),o=null),c&2&&m(e,"pb-5",t[1].length),c&2&&m(e,"pb-4",!t[1].length)},i:R,o:R,d(t){t&&(u(l),u(e)),o&&o.d()}}}function O(r,n,l){let e,a,i,s,h;v(r,K,t=>l(5,a=t)),v(r,V,t=>l(2,i=t)),v(r,z,t=>l(3,s=t)),v(r,B,t=>l(4,h=t));let{title:o}=n;return r.$$set=t=>{"title"in t&&l(0,o=t.title)},r.$$.update=()=>{r.$$.dirty&32&&l(1,e=a.data.tabs??[])},[o,e,i,s,h,a]}class Y extends G{constructor(n){super(),J(this,n,O,M,q,{title:0})}}export{Y as H};