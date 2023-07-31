import{s as z,c as G,u as M,g as O,d as P,e as L}from"../chunks/scheduler.bebea13f.js";import{S as W,i as B,g as v,s as y,h as b,j as k,f as d,c as w,k as p,a as R,y as g,d as H,t as J,z as N,m as j,n as q,A as $}from"../chunks/index.db664e96.js";import{e as A}from"../chunks/each.909dc1de.js";import{p as K}from"../chunks/stores.f07f0908.js";/* empty css                          */import{p as Q,s as X}from"../chunks/stores.ed01ac6b.js";const D=[{title:"Components",submenu:[{label:"Alert",path:"/components/alert"},{label:"Modal",path:"/components/modal"},{label:"Pagination",path:"/components/pagination"},{label:"Rating",path:"/components/rating"}]},{title:"Utilities",submenu:[{label:"Focus track",path:"/utilities/focustrack"},{label:"Transition",path:"/utilities/transition"}]}];function F(n,l,a){const o=n.slice();return o[5]=l[a].title,o[6]=l[a].submenu,o}function U(n,l,a){var _;const o=n.slice();o[9]=l[a].label,o[10]=l[a].path;const u=(_=o[0].route.id)==null?void 0:_.startsWith(`/[framework]${o[10]}`);return o[11]=u,o}function V(n){let l,a,o=n[9]+"",u,_,h,f;return{c(){l=v("li"),a=v("a"),u=j(o),f=y(),this.h()},l(s){l=b(s,"LI",{});var t=k(l);a=b(t,"A",{class:!0,"aria-current":!0,href:!0});var r=k(a);u=q(r,o),r.forEach(d),f=w(t),t.forEach(d),this.h()},h(){p(a,"class","demo-links-link d-inline-block rounded"),p(a,"aria-current",_=n[11]?"page":void 0),p(a,"href",h=""+(n[1]+n[2]+n[10])),$(a,"active",n[11])},m(s,t){R(s,l,t),g(l,a),g(a,u),g(l,f)},p(s,t){t&1&&_!==(_=s[11]?"page":void 0)&&p(a,"aria-current",_),t&6&&h!==(h=""+(s[1]+s[2]+s[10]))&&p(a,"href",h),t&1&&$(a,"active",s[11])},d(s){s&&d(l)}}}function C(n){let l,a,o=n[5]+"",u,_,h,f,s=A(n[6]),t=[];for(let r=0;r<s.length;r+=1)t[r]=V(U(n,s,r));return{c(){l=v("li"),a=v("strong"),u=j(o),_=y(),h=v("ul");for(let r=0;r<t.length;r+=1)t[r].c();f=y(),this.h()},l(r){l=b(r,"LI",{class:!0,id:!0});var i=k(l);a=b(i,"STRONG",{class:!0});var e=k(a);u=q(e,o),e.forEach(d),_=w(i),h=b(i,"UL",{class:!0});var m=k(h);for(let c=0;c<t.length;c+=1)t[c].l(m);m.forEach(d),f=w(i),i.forEach(d),this.h()},h(){p(a,"class","d-flex w-100 align-items-center fw-semibold"),p(h,"class","list-unstyled fw-normal pb-2 small"),p(l,"class","py-2"),p(l,"id","sidenav-"+n[5])},m(r,i){R(r,l,i),g(l,a),g(a,u),g(l,_),g(l,h);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(h,null);g(l,f)},p(r,i){if(i&7){s=A(r[6]);let e;for(e=0;e<s.length;e+=1){const m=U(r,s,e);t[e]?t[e].p(m,i):(t[e]=V(m),t[e].c(),t[e].m(h,null))}for(;e<t.length;e+=1)t[e].d(1);t.length=s.length}},d(r){r&&d(l),N(t,r)}}}function Y(n){let l,a,o,u,_,h,f,s=A(D),t=[];for(let e=0;e<s.length;e+=1)t[e]=C(F(n,s,e));const r=n[4].default,i=G(r,n,n[3],null);return{c(){l=v("div"),a=v("aside"),o=v("nav"),u=v("ul");for(let e=0;e<t.length;e+=1)t[e].c();_=y(),h=v("div"),i&&i.c(),this.h()},l(e){l=b(e,"DIV",{class:!0});var m=k(l);a=b(m,"ASIDE",{class:!0});var c=k(a);o=b(c,"NAV",{class:!0});var E=k(o);u=b(E,"UL",{class:!0});var S=k(u);for(let I=0;I<t.length;I+=1)t[I].l(S);S.forEach(d),E.forEach(d),c.forEach(d),_=w(m),h=b(m,"DIV",{});var T=k(h);i&&i.l(T),T.forEach(d),m.forEach(d),this.h()},h(){p(u,"class","list-unstyled mb-0 pb-0 pb-md-2 pe-lg-2 main-nav-list svelte-19mpoym"),p(o,"class","w-100"),p(a,"class","demo-sidebar"),p(l,"class","demo-layout")},m(e,m){R(e,l,m),g(l,a),g(a,o),g(o,u);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(u,null);g(l,_),g(l,h),i&&i.m(h,null),f=!0},p(e,[m]){if(m&7){s=A(D);let c;for(c=0;c<s.length;c+=1){const E=F(e,s,c);t[c]?t[c].p(E,m):(t[c]=C(E),t[c].c(),t[c].m(u,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=s.length}i&&i.p&&(!f||m&8)&&M(i,r,e,e[3],f?P(r,e[3],m,null):O(e[3]),null)},i(e){f||(H(i,e),f=!0)},o(e){J(i,e),f=!1},d(e){e&&d(l),N(t,e),i&&i.d(e)}}}function Z(n,l,a){let o,u,_;L(n,K,s=>a(0,o=s)),L(n,Q,s=>a(1,u=s)),L(n,X,s=>a(2,_=s));let{$$slots:h={},$$scope:f}=l;return n.$$set=s=>{"$$scope"in s&&a(3,f=s.$$scope)},[o,u,_,f,h]}class ne extends W{constructor(l){super(),B(this,l,Z,Y,z,{})}}export{ne as component};
