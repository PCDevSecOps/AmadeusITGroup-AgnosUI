import{S as D,i as T,s as q,k as M,j as u,f as w,n as _,g as l,q as x,x as p,h as n,v as j}from"./index-ebfd0004.js";import{o as E}from"./modalService-f2815585.js";import"./Modal-77ded74f.js";import"./index-f44b70d4.js";import"./config-fd070a2e.js";import"./directiveUtils-ffc542b0.js";import"./stores-3dac77f8.js";import"./focustrack-dd96eb0f.js";import"./pagination-c72cd7f9.js";import"./writables-4035f670.js";import"./fade-cfc2f702.js";import"./baseTransitions-2fa30a59.js";import"./types-d19cbc41.js";function v(i){let t,r,s,a,m,f,k,d,c,C,h,b,y,S;return{c(){t=M("This is a modal"),r=u("br"),s=u("br"),a=w(),m=u("button"),m.textContent="Launch other modal",f=u("br"),k=w(),d=u("button"),d.textContent="Enable backdrop",c=u("button"),c.textContent="Disable backdrop",C=u("br"),h=w(),b=u("button"),b.textContent="Close",_(m,"class","btn btn-outline-primary m-1"),_(d,"class","btn btn-outline-secondary m-1"),_(c,"class","btn btn-outline-secondary m-1"),_(b,"class","btn btn-outline-secondary m-1")},m(e,o){l(e,t,o),l(e,r,o),l(e,s,o),l(e,a,o),l(e,m,o),l(e,f,o),l(e,k,o),l(e,d,o),l(e,c,o),l(e,C,o),l(e,h,o),l(e,b,o),y||(S=[x(m,"click",i[2]),x(d,"click",i[3]),x(c,"click",i[4]),x(b,"click",i[5])],y=!0)},p,i:p,o:p,d(e){e&&(n(t),n(r),n(s),n(a),n(m),n(f),n(k),n(d),n(c),n(C),n(h),n(b)),y=!1,j(S)}}}function F(i,t,r){let{widget:s}=t,{state:a}=t;const m=()=>E({slotTitle:"Other modal",slotDefault:L,container:a.modalElement}),f=()=>s.api.patch({backdrop:!0}),k=()=>s.api.patch({backdrop:!1}),d=()=>s.api.close();return i.$$set=c=>{"widget"in c&&r(0,s=c.widget),"state"in c&&r(1,a=c.state)},[s,a,m,f,k,d]}class L extends D{constructor(t){super(),T(this,t,F,v,q,{widget:0,state:1})}}function N(i){let t,r,s;return{c(){t=u("button"),t.textContent="Launch demo modal",_(t,"class","btn btn-primary")},m(a,m){l(a,t,m),r||(s=x(t,"click",i[0]),r=!0)},p,i:p,o:p,d(a){a&&n(t),r=!1,s()}}}function O(i){return[()=>E({slotTitle:"First modal",className:"modal-sm",slotDefault:L})]}class W extends D{constructor(t){super(),T(this,t,O,N,q,{})}}export{W as default};