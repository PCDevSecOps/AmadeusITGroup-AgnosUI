import{S as u,i as g,s as d,c as h,m as _,t as $,a as w,d as v,j as i,f as y,n as l,a2 as m,o as c,g as R,p,h as b}from"./index-ebfd0004.js";import{R as x}from"./Rating-466311ed.js";import"./index-f44b70d4.js";import"./config-fd070a2e.js";import"./directiveUtils-ffc542b0.js";import"./stores-3dac77f8.js";import"./focustrack-dd96eb0f.js";import"./pagination-c72cd7f9.js";import"./writables-4035f670.js";import"./fade-cfc2f702.js";import"./baseTransitions-2fa30a59.js";const f=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>`;function C(r){let t,s,a,e;return{c(){t=i("span"),s=i("span"),a=y(),e=i("span"),l(s,"class","half"),m(s,"width",r[1]+"%"),l(t,"slot","star"),l(t,"class","star"),c(t,"full",r[1]===100)},m(n,o){R(n,t,o),p(t,s),s.innerHTML=f,p(t,a),p(t,e),e.innerHTML=f},p(n,o){o&2&&m(s,"width",n[1]+"%"),o&2&&c(t,"full",n[1]===100)},d(n){n&&b(t)}}}function L(r){let t,s;return t=new x({props:{className:"rating-readonly",rating:3.64,readonly:!0,maxRating:5,ariaLabel:"readonly rating",$$slots:{star:[C,({index:a,fill:e})=>({0:a,1:e}),({index:a,fill:e})=>(a?1:0)|(e?2:0)]},$$scope:{ctx:r}}}),{c(){h(t.$$.fragment)},m(a,e){_(t,a,e),s=!0},p(a,[e]){const n={};e&6&&(n.$$scope={dirty:e,ctx:a}),t.$set(n)},i(a){s||($(t.$$.fragment,a),s=!0)},o(a){w(t.$$.fragment,a),s=!1},d(a){v(t,a)}}}class A extends u{constructor(t){super(),g(this,t,null,L,d,{})}}export{A as default};