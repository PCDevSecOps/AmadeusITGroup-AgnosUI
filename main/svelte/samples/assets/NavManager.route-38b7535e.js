import{S as N,i as R,s as A,j as p,f as h,k as j,n as a,g as H,p as l,w as $,u as q,x as w,h as S,v as E,c as L,m as k,t as x,a as y,d as C}from"./index-ebfd0004.js";import{c as F}from"./navManager-c2c31bdd.js";import"./directiveUtils-ffc542b0.js";function z(t){let e,n,d,m,u,g,s,v,r,f,o,i,b;return{c(){e=p("div"),n=p("input"),d=h(),m=p("span"),u=j(t[0]),g=h(),s=p("input"),v=h(),r=p("input"),f=h(),o=p("input"),a(n,"type","text"),n.value=t[0],a(n,"class","form-control me-1"),a(m,"tabindex","-1"),a(m,"class","form-control w-auto me-1"),a(s,"tabindex","-1"),a(s,"type","checkbox"),a(s,"class","form-check-input align-self-center me-1"),a(r,"tabindex","-1"),a(r,"type","text"),r.value=t[0],r.disabled=!0,a(r,"class","form-control me-1"),a(o,"tabindex","-1"),a(o,"type","text"),o.value=t[0],a(o,"class","form-control me-1"),a(e,"class","d-flex demo-navmanager-line")},m(c,_){H(c,e,_),l(e,n),l(e,d),l(e,m),l(m,u),l(e,g),l(e,s),l(e,v),l(e,r),l(e,f),l(e,o),i||(b=[$(t[1].call(null,n,t[2])),$(t[1].call(null,m,t[2])),$(t[1].call(null,s,t[2])),$(t[1].call(null,r,t[2])),$(t[1].call(null,o,t[2]))],i=!0)},p(c,[_]){_&1&&n.value!==c[0]&&(n.value=c[0]),_&1&&q(u,c[0]),_&1&&r.value!==c[0]&&(r.value=c[0]),_&1&&o.value!==c[0]&&(o.value=c[0])},i:w,o:w,d(c){c&&S(e),i=!1,E(b)}}}function B(t,e,n){const{directive:d,focusLeft:m,focusRight:u,focusFirst:g,focusLast:s}=F(),v={keys:{ArrowLeft:m,ArrowRight:u,Home:g,End:s}};let{text:r=""}=e;return t.$$set=f=>{"text"in f&&n(0,r=f.text)},[r,d,v]}class M extends N{constructor(e){super(),R(this,e,B,z,A,{text:0})}}function D(t){let e,n,d,m,u,g,s,v,r,f,o;return u=new M({props:{text:"Hello"}}),f=new M({props:{text:"שָׁלוֹם"}}),{c(){e=p("div"),n=p("div"),d=p("h2"),d.textContent="Left-to-right",m=h(),L(u.$$.fragment),g=h(),s=p("div"),v=p("h2"),v.textContent="Right-to-left",r=h(),L(f.$$.fragment),a(n,"dir","ltr"),a(n,"class","mt-3 pb-3"),a(s,"dir","rtl"),a(s,"class","mt-3 pb-3"),a(e,"class","demo-navmanager")},m(i,b){H(i,e,b),l(e,n),l(n,d),l(n,m),k(u,n,null),l(e,g),l(e,s),l(s,v),l(s,r),k(f,s,null),o=!0},p:w,i(i){o||(x(u.$$.fragment,i),x(f.$$.fragment,i),o=!0)},o(i){y(u.$$.fragment,i),y(f.$$.fragment,i),o=!1},d(i){i&&S(e),C(u),C(f)}}}class K extends N{constructor(e){super(),R(this,e,null,D,A,{})}}export{K as default};