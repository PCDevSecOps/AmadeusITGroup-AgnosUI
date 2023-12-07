import{S as ee,i as te,s as le,O as V,j as o,f as k,k as z,c as ne,n as h,P as se,g as a,p as f,Q as X,m as ie,q as T,t as oe,a as ae,h as c,R as ce,d as pe,v as re,T as ue,x as S,U as fe,e as me}from"./index-ebfd0004.js";import{A as he}from"./Alert-c73aa8c6.js";import"./index-f44b70d4.js";import"./config-fd070a2e.js";import"./directiveUtils-ffc542b0.js";import"./stores-3dac77f8.js";import"./focustrack-dd96eb0f.js";import"./pagination-c72cd7f9.js";import"./writables-4035f670.js";import"./fade-cfc2f702.js";import"./baseTransitions-2fa30a59.js";function Y(t,l,p){const i=t.slice();return i[13]=l[p].value,i[14]=l[p].label,i}function Z(t){let l,p=t[14]+"",i;return{c(){l=o("option"),i=z(p),l.__value=t[13],ue(l,l.__value)},m(_,b){a(_,l,b),f(l,i)},p:S,d(_){_&&c(l)}}}function _e(t){let l,p,i,_,b,w,s;return{c(){l=o("h4"),l.textContent="Well done!",p=k(),i=o("p"),i.textContent=`Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.`,_=k(),b=o("hr"),w=k(),s=o("p"),s.textContent="Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",h(l,"class","alert-heading"),h(s,"class","mb-0")},m(r,m){a(r,l,m),a(r,p,m),a(r,i,m),a(r,_,m),a(r,b,m),a(r,w,m),a(r,s,m)},p:S,d(r){r&&(c(l),c(p),c(i),c(_),c(b),c(w),c(s))}}}function de(t){let l,p,i,_,b,w,s,r,m,W,g,D,j,C,P,u,Q,$,J,K,R,I,L,A,B,E,F,G,O,U,H,M,q=V(t[5]),d=[];for(let e=0;e<q.length;e+=1)d[e]=Z(Y(t,q,e));let x={dismissible:t[3],animationOnInit:t[1],animation:t[2],type:t[4],$$slots:{default:[_e]},$$scope:{ctx:t}};return O=new he({props:x}),t[11](O),{c(){l=o("button"),l.textContent="Show alert",p=k(),i=o("br"),_=k(),b=o("br"),w=k(),s=o("div"),r=o("div"),m=o("label"),m.textContent="Alert type:",W=k(),g=o("select");for(let e=0;e<d.length;e+=1)d[e].c();D=k(),j=o("label"),C=o("input"),P=z("Animation on init"),u=k(),Q=o("label"),$=o("input"),J=z("Animation"),K=k(),R=o("label"),I=o("input"),L=z("Dismissible"),A=k(),B=o("br"),E=k(),F=o("br"),G=k(),ne(O.$$.fragment),h(l,"class","btn btn-primary showAlert"),h(l,"type","button"),h(m,"class","align-self-center me-3"),h(m,"for","typeSelect"),h(g,"id","typeSelect"),h(g,"class","form-select w-auto"),t[4]===void 0&&se(()=>t[7].call(g)),h(r,"class","d-flex form-group"),h(C,"class","form-check-input me-1"),h(C,"type","checkbox"),h($,"class","form-check-input me-1"),h($,"type","checkbox"),h(I,"class","dismissibleInput form-check-input me-1"),h(I,"type","checkbox"),h(s,"class","d-flex flex-column")},m(e,n){a(e,l,n),a(e,p,n),a(e,i,n),a(e,_,n),a(e,b,n),a(e,w,n),a(e,s,n),f(s,r),f(r,m),f(r,W),f(r,g);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(g,null);X(g,t[4],!0),f(s,D),f(s,j),f(j,C),C.checked=t[1],f(j,P),f(s,u),f(s,Q),f(Q,$),$.checked=t[2],f(Q,J),f(s,K),f(s,R),f(R,I),I.checked=t[3],f(R,L),a(e,A,n),a(e,B,n),a(e,E,n),a(e,F,n),a(e,G,n),ie(O,e,n),U=!0,H||(M=[T(l,"click",t[6]),T(g,"change",t[7]),T(C,"change",t[8]),T($,"change",t[9]),T(I,"change",t[10])],H=!0)},p(e,[n]){if(n&32){q=V(e[5]);let y;for(y=0;y<q.length;y+=1){const N=Y(e,q,y);d[y]?d[y].p(N,n):(d[y]=Z(N),d[y].c(),d[y].m(g,null))}for(;y<d.length;y+=1)d[y].d(1);d.length=q.length}n&48&&X(g,e[4]),n&2&&(C.checked=e[1]),n&4&&($.checked=e[2]),n&8&&(I.checked=e[3]);const v={};n&8&&(v.dismissible=e[3]),n&2&&(v.animationOnInit=e[1]),n&4&&(v.animation=e[2]),n&16&&(v.type=e[4]),n&131072&&(v.$$scope={dirty:n,ctx:e}),O.$set(v)},i(e){U||(oe(O.$$.fragment,e),U=!0)},o(e){ae(O.$$.fragment,e),U=!1},d(e){e&&(c(l),c(p),c(i),c(_),c(b),c(w),c(s),c(A),c(B),c(E),c(F),c(G)),ce(d,e),t[11](null),pe(O,e),H=!1,re(M)}}}function be(t,l,p){let i,[_,b,w]=[!0,!0,!0],s="success";var r=(u=>(u.success="success",u.info="info",u.warning="warning",u.danger="danger",u.primary="primary",u.secondary="secondary",u.light="light",u.dark="dark",u))(r||{});const m=Object.entries(r).map(u=>({value:u[1],label:u[0]})),W=()=>i.api.open();function g(){s=fe(this),p(4,s),p(5,m)}function D(){_=this.checked,p(1,_)}function j(){b=this.checked,p(2,b)}function C(){w=this.checked,p(3,w)}function P(u){me[u?"unshift":"push"](()=>{i=u,p(0,i)})}return[i,_,b,w,s,m,W,g,D,j,C,P]}class Te extends ee{constructor(l){super(),te(this,l,be,de,le,{})}}export{Te as default};