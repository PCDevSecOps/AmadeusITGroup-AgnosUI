import{S as k,i as C,s as P,e as f,k as w,a as r,b as y,q as m,x as v,r as q,n as b,f as D,w as T,h as g,p as _}from"./AppCommon-miqw0umw.js";import{c as B,o as F,a as H,s as I,h as M}from"./floatingUI-ONmmgjuF.js";import"./directive-RrlqTka0.js";import"./func-tK0QDe5R.js";import"./promise-N0SAFsFZ.js";import"./stores-g_eezu9j.js";function h(i){let e,l,n,a,p,t;return{c(){var o,s;e=f("div"),l=f("div"),n=w(),a=f("div"),a.textContent="This is a sample popover",r(l,"class","popover-arrow position-absolute"),r(a,"class","popover-body text-center"),r(e,"data-popper-placement",i[1]),r(e,"class","popover bs-popover-auto position-absolute"),r(e,"role","tooltip"),_(e,"invisible",(s=(o=i[2])==null?void 0:o.hide)==null?void 0:s.referenceHidden)},m(o,s){y(o,e,s),m(e,l),m(e,n),m(e,a),p||(t=[v(i[5].call(null,l)),v(i[3].call(null,e))],p=!0)},p(o,s){var c,d;s&2&&r(e,"data-popper-placement",o[1]),s&4&&_(e,"invisible",(d=(c=o[2])==null?void 0:c.hide)==null?void 0:d.referenceHidden)},d(o){o&&D(e),p=!1,T(t)}}}function O(i){let e,l,n,a,p,t=i[0]&&h(i);return{c(){e=f("div"),l=f("button"),l.textContent="Toggle popover",n=w(),t&&t.c(),r(l,"type","button"),r(l,"class","btn btn-primary"),r(e,"class","position-relative overflow-auto border border-primary-subtle demo-floatingui")},m(o,s){y(o,e,s),m(e,l),m(e,n),t&&t.m(e,null),a||(p=[v(i[4].call(null,l)),q(l,"click",i[8]),v(i[9].call(null,e))],a=!0)},p(o,[s]){o[0]?t?t.p(o,s):(t=h(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:b,o:b,d(o){o&&D(e),t&&t.d(),a=!1,T(p)}}}function S(i,e,l){let n,a;const{directives:{floatingDirective:p,referenceDirective:t,arrowDirective:o},stores:{placement$:s,middlewareData$:c}}=B({props:{arrowOptions:{padding:6},computePositionOptions:{middleware:[F(10),H(),I({padding:5}),M()]}}});g(i,s,u=>l(1,n=u)),g(i,c,u=>l(2,a=u));let d=!0;return[d,n,a,p,t,o,s,c,()=>{l(0,d=!d)},u=>{u.scrollTo({left:326,top:420})}]}class K extends k{constructor(e){super(),C(this,e,S,O,P,{})}}export{K as default};
