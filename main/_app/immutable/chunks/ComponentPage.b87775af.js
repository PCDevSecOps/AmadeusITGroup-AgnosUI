import{s as se,n as Y,e as F,c as ce,u as fe,g as _e,d as he,a as me,b as de}from"./scheduler.9fa00b13.js";import{S as ne,i as oe,g as k,m as U,s as S,h as A,j as D,n as V,f as v,c as I,k as n,A as R,a as H,y as g,o as ie,z as be,r as ge,B as pe,u as ve,v as Ee,d as Z,t as $,w as ke}from"./index.e26394fb.js";import{g as x,a as ee}from"./app.8c876633.js";import{s as ue,p as Ae,f as we,a as De,i as Ne}from"./stores.019f617c.js";import{e as te}from"./each.0936c752.js";function ae(e,l,t){const o=e.slice();o[2]=l[t].title,o[9]=l[t].key,o[10]=l[t].path;const d=o[1]===o[9];return o[11]=d,o}function le(e){let l,t,o=e[2]+"",d,m,_,c;return{c(){l=k("li"),t=k("a"),d=U(o),c=S(),this.h()},l(r){l=A(r,"LI",{class:!0,role:!0});var h=D(l);t=A(h,"A",{href:!0,role:!0,class:!0,"aria-selected":!0});var f=D(t);d=V(f,o),f.forEach(v),c=I(h),h.forEach(v),this.h()},h(){n(t,"href",m=`${e[7]}${e[3]}${e[10]}`),n(t,"role","tab"),n(t,"class","nav-link link-body-emphasis"),n(t,"aria-selected",_=e[11]),R(t,"active",e[11]),n(l,"class","nav-item"),n(l,"role","presentation")},m(r,h){H(r,l,h),g(l,t),g(t,d),g(l,c)},p(r,h){h&1&&o!==(o=r[2]+"")&&ie(d,o),h&137&&m!==(m=`${r[7]}${r[3]}${r[10]}`)&&n(t,"href",m),h&3&&_!==(_=r[11])&&n(t,"aria-selected",_),h&3&&R(t,"active",r[11])},d(r){r&&v(l)}}}function Re(e){let l,t,o,d,m,_,c,r,h,f,a,i,s,M,j,q,P,w,W,B,z,y,N,L=te(e[0]),E=[];for(let u=0;u<L.length;u+=1)E[u]=le(ae(e,L,u));return{c(){l=k("header"),t=k("div"),o=k("h1"),d=U(e[2]),m=S(),_=k("div"),c=k("div"),r=k("a"),h=U("Angular"),i=S(),s=k("a"),M=U("React"),P=S(),w=k("a"),W=U("Svelte"),y=S(),N=k("ul");for(let u=0;u<E.length;u+=1)E[u].c();this.h()},l(u){l=A(u,"HEADER",{class:!0});var p=D(l);t=A(p,"DIV",{class:!0});var b=D(t);o=A(b,"H1",{class:!0});var C=D(o);d=V(C,e[2]),C.forEach(v),m=I(b),_=A(b,"DIV",{class:!0});var J=D(_);c=A(J,"DIV",{class:!0,role:!0,"aria-label":!0});var T=D(c);r=A(T,"A",{href:!0,class:!0,"aria-current":!0});var K=D(r);h=V(K,"Angular"),K.forEach(v),i=I(T),s=A(T,"A",{href:!0,class:!0,"aria-current":!0});var O=D(s);M=V(O,"React"),O.forEach(v),P=I(T),w=A(T,"A",{href:!0,class:!0,"aria-current":!0});var Q=D(w);W=V(Q,"Svelte"),Q.forEach(v),T.forEach(v),J.forEach(v),b.forEach(v),y=I(p),N=A(p,"UL",{class:!0,role:!0});var X=D(N);for(let G=0;G<E.length;G+=1)E[G].l(X);X.forEach(v),p.forEach(v),this.h()},h(){n(o,"class","col-auto me-auto me-md-none mb-0"),n(r,"href",f=`${e[7]}angular/${e[8]}`),n(r,"class","btn btn-outline-primary"),n(r,"aria-current",a=!e[6]||"page"),R(r,"active",e[6]),n(s,"href",j=`${e[7]}react/${e[8]}`),n(s,"class","btn btn-outline-primary"),n(s,"aria-current",q=!e[5]||"page"),R(s,"active",e[5]),n(w,"href",B=`${e[7]}svelte/${e[8]}`),n(w,"class","btn btn-outline-primary"),n(w,"aria-current",z=!e[4]||"page"),R(w,"active",e[4]),n(c,"class","btn-group btn-group-sm me-2 bg-white"),n(c,"role","group"),n(c,"aria-label","Basic radio toggle button group"),n(_,"class","col"),n(t,"class","row mb-4 align-items-end"),n(N,"class","nav-tabs px-4 px-lg-5 content-tabset justify-content-start nav"),n(N,"role","tablist"),n(l,"class","bg-light pt-4 pb-5 px-4 px-lg-5 d-flex mb-4 d-md-block align-items-center title")},m(u,p){H(u,l,p),g(l,t),g(t,o),g(o,d),g(t,m),g(t,_),g(_,c),g(c,r),g(r,h),g(c,i),g(c,s),g(s,M),g(c,P),g(c,w),g(w,W),g(l,y),g(l,N);for(let b=0;b<E.length;b+=1)E[b]&&E[b].m(N,null)},p(u,[p]){if(p&4&&ie(d,u[2]),p&384&&f!==(f=`${u[7]}angular/${u[8]}`)&&n(r,"href",f),p&64&&a!==(a=!u[6]||"page")&&n(r,"aria-current",a),p&64&&R(r,"active",u[6]),p&384&&j!==(j=`${u[7]}react/${u[8]}`)&&n(s,"href",j),p&32&&q!==(q=!u[5]||"page")&&n(s,"aria-current",q),p&32&&R(s,"active",u[5]),p&384&&B!==(B=`${u[7]}svelte/${u[8]}`)&&n(w,"href",B),p&16&&z!==(z=!u[4]||"page")&&n(w,"aria-current",z),p&16&&R(w,"active",u[4]),p&139){L=te(u[0]);let b;for(b=0;b<L.length;b+=1){const C=ae(u,L,b);E[b]?E[b].p(C,p):(E[b]=le(C),E[b].c(),E[b].m(N,null))}for(;b<E.length;b+=1)E[b].d(1);E.length=L.length}},i:Y,o:Y,d(u){u&&v(l),be(E,u)}}}function Se(e,l,t){let o,d,m,_,c,r;F(e,ue,i=>t(3,_=i)),F(e,Ae,i=>t(7,c=i)),F(e,we,i=>t(8,r=i));let{title:h}=l,{tabs:f}=l,{tab:a=""}=l;return e.$$set=i=>{"title"in i&&t(2,h=i.title),"tabs"in i&&t(0,f=i.tabs),"tab"in i&&t(1,a=i.tab)},e.$$.update=()=>{e.$$.dirty&8&&t(6,o=_==="angular"),e.$$.dirty&8&&t(5,d=_==="react"),e.$$.dirty&8&&t(4,m=_==="svelte")},[f,a,h,_,m,d,o,c,r]}class Ie extends ne{constructor(l){super(),oe(this,l,Se,Re,se,{title:2,tabs:0,tab:1})}}const Le=e=>({tab:e&4}),re=e=>({tab:e[2]});function Te(e){let l,t,o,d,m,_,c,r;document.title=l=x(e[4],e[5]),m=new Ie({props:{title:e[0],tabs:e[1],tab:e[2]}});const h=e[8].default,f=ce(h,e,e[7],re);return{c(){t=k("meta"),d=S(),ge(m.$$.fragment),_=S(),c=k("div"),f&&f.c(),this.h()},l(a){const i=pe("svelte-ll89db",document.head);t=A(i,"META",{name:!0,content:!0}),i.forEach(v),d=I(a),ve(m.$$.fragment,a),_=I(a),c=A(a,"DIV",{class:!0});var s=D(c);f&&f.l(s),s.forEach(v),this.h()},h(){n(t,"name","description"),n(t,"content",o=ee(e[4],e[5])),n(c,"class","main-content")},m(a,i){g(document.head,t),H(a,d,i),Ee(m,a,i),H(a,_,i),H(a,c,i),f&&f.m(c,null),e[9](c),r=!0},p(a,[i]){(!r||i&48)&&l!==(l=x(a[4],a[5]))&&(document.title=l),(!r||i&48&&o!==(o=ee(a[4],a[5])))&&n(t,"content",o);const s={};i&1&&(s.title=a[0]),i&2&&(s.tabs=a[1]),i&4&&(s.tab=a[2]),m.$set(s),f&&f.p&&(!r||i&132)&&fe(f,h,a,a[7],r?he(h,a[7],i,Le):_e(a[7]),re)},i(a){r||(Z(m.$$.fragment,a),Z(f,a),r=!0)},o(a){$(m.$$.fragment,a),$(f,a),r=!1},d(a){a&&(v(d),v(_),v(c)),v(t),ke(m,a),f&&f.d(a),e[9](null)}}}function Ce(e,l,t){let o,d,m,_;F(e,De,s=>t(2,m=s)),F(e,ue,s=>t(5,_=s));let{$$slots:c={},$$scope:r}=l,{componentName:h}=l,{tabs:f}=l,a;me(()=>Ne.patch({elements:[...a.querySelectorAll("section")]}));function i(s){de[s?"unshift":"push"](()=>{a=s,t(3,a)})}return e.$$set=s=>{"componentName"in s&&t(0,h=s.componentName),"tabs"in s&&t(1,f=s.tabs),"$$scope"in s&&t(7,r=s.$$scope)},e.$$.update=()=>{e.$$.dirty&6&&t(6,o=f.find(s=>s.key===m)),e.$$.dirty&65&&t(4,d=`${h} ${(o==null?void 0:o.title.toLowerCase())??""}`)},[h,f,m,a,d,_,o,r,c,i]}class qe extends ne{constructor(l){super(),oe(this,l,Ce,Te,se,{componentName:0,tabs:1})}}export{qe as C};