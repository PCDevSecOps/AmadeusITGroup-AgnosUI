import{S as g,i as _,s as y,c as f,m as i,t as $,d as u,g as l,l as x,b as m,f as p,k as A}from"./AppCommon-miqw0umw.js";import{A as b}from"./Alert-6bqwLX7X.js";import{a as S}from"./config-LTqD1tq6.js";import"./Slot-Hr5L000g.js";import"./baseTransitions-UHYbGH_T.js";import"./writables-xJUxUSmr.js";import"./stores-g_eezu9j.js";import"./func-tK0QDe5R.js";import"./promise-N0SAFsFZ.js";import"./directive-RrlqTka0.js";import"./fade-o6vxNs3g.js";import"./cssTransitions-zwdzn_VS.js";import"./dom-2S7XI5EU.js";function h(n){let e;return{c(){e=x("Alert not dismissible and of type secondary, respecting the parent config")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function v(n){let e,s;return e=new b({props:{$$slots:{default:[h]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment)},m(t,o){i(e,t,o),s=!0},p(t,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){l(e,t)}}}class C extends g{constructor(e){super(),_(this,e,null,v,y,{})}}function D(n){let e;return{c(){e=x("Alert not dismissible and of type success, type overriden by child config")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function k(n){let e,s;return e=new b({props:{$$slots:{default:[D]},$$scope:{ctx:n}}}),{c(){f(e.$$.fragment)},m(t,o){i(e,t,o),s=!0},p(t,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){u(e.$$.fragment,t),s=!1},d(t){l(e,t)}}}function q(n){return S().set({alert:{type:"success"}}),[]}class W extends g{constructor(e){super(),_(this,e,q,k,y,{})}}function j(n){let e;return{c(){e=x("Alert not dismissible and of type secondary")},m(s,t){m(s,e,t)},d(s){s&&p(e)}}}function z(n){let e,s,t,o,a,d;return e=new b({props:{$$slots:{default:[j]},$$scope:{ctx:n}}}),t=new C({}),a=new W({}),{c(){f(e.$$.fragment),s=A(),f(t.$$.fragment),o=A(),f(a.$$.fragment)},m(r,c){i(e,r,c),m(r,s,c),i(t,r,c),m(r,o,c),i(a,r,c),d=!0},p(r,[c]){const w={};c&1&&(w.$$scope={dirty:c,ctx:r}),e.$set(w)},i(r){d||($(e.$$.fragment,r),$(t.$$.fragment,r),$(a.$$.fragment,r),d=!0)},o(r){u(e.$$.fragment,r),u(t.$$.fragment,r),u(a.$$.fragment,r),d=!1},d(r){r&&(p(s),p(o)),l(e,r),l(t,r),l(a,r)}}}function B(n){return S().set({alert:{dismissible:!1,type:"secondary"}}),[]}class R extends g{constructor(e){super(),_(this,e,B,z,y,{})}}export{R as default};
