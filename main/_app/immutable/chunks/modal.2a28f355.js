var ie=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var o=(t,e,s)=>(ie(t,e,"read from private field"),s?s.call(t):e.get(t)),a=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},c=(t,e,s,n)=>(ie(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);var he=(t,e,s,n)=>({set _(r){c(t,e,r,s)},get _(){return o(t,e,n)}}),l=(t,e,s)=>(ie(t,e,"access private method"),s);const te=typeof Symbol=="function"&&Symbol.observable||"@@observable",ae=Symbol(),U=()=>{},Q=()=>{};Q.unsubscribe=Q;const re=(t,e)=>{const s=t?t[e]:null;return typeof s=="function"?s.bind(t):U},xe=t=>({next:typeof t=="function"?t.bind(null):re(t,"next"),pause:re(t,"pause"),resume:re(t,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),Ce=function(){return this},ce=t=>{if(!t)return Q;if(t.unsubscribe===t)return t;const e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e},ue=new WeakSet,Pe=t=>{let e=t.subscribe;return ue.has(e)||(e=(...s)=>ce(t.subscribe(...s)),ue.add(e)),e},se=t=>{const e="subscribe"in t?t:t[te]();return Pe(e)},ke=t=>{let e;return t(s=>e=s)(),e};function P(t,e){const s=se(t),n=Object.assign(()=>je(n),e,{subscribe:s,[te]:Ce});return n}const p=Symbol(),Ee=Symbol();let oe=!1;const L=new Set,Le=1e3,le=t=>{if(t>Le)throw new Error("reached maximum number of store changes in one shot")},G=t=>{const e=!oe;e&&(oe=!0);try{return t()}finally{if(e)try{const s=new Map;for(const n of L){const r=s.get(n)??0;le(r),s.set(n,r+1),L.delete(n),n[Ee]()}}finally{L.clear(),oe=!1}}},Ie=t=>ke(se(t));let A=Ie;const je=t=>A(t),be=t=>({[t]:!0,[t-1]:!1,0:!1});var S,T,y,x,C,j,M,X,_e,J,qe,D,B;class de{constructor(e){a(this,X);a(this,J);a(this,D);a(this,S,new Set);a(this,T,null);a(this,y,!1);a(this,x,1);a(this,C,void 0);a(this,j,be(1));a(this,M,new WeakMap);c(this,C,e)}[Ee](){const e=o(this,x);for(const s of[...o(this,S)]){if(o(this,y)||o(this,x)!==e)return;s._valueIndex!==0&&l(this,D,B).call(this,s)}}[p](){}equal(e,s){return!this.notEqual(e,s)}notEqual(e,s){return!Object.is(e,s)||e&&typeof e=="object"||typeof e=="function"}pauseSubscribers(){if(!o(this,y)){c(this,y,!0),L.delete(this);for(const e of[...o(this,S)])e._valueIndex===0||e._paused||(e._paused=!0,e.pause())}}resumeSubscribers(){o(this,y)&&(c(this,y,!1),G(()=>{L.add(this)}))}set(e){if(!this.equal(o(this,C),e)){const s=o(this,x)+1;c(this,x,s),c(this,C,e),c(this,j,be(s)),this.pauseSubscribers()}this.resumeSubscribers()}update(e){this.set(e(o(this,C)))}onUse(){}subscribe(e){const s=xe(e),n=e==null?void 0:e[ae];if(n){const i=o(this,M).get(n);i&&(s._value=i._value,s._valueIndex=i._valueIndex)}o(this,S).add(s),G(()=>{o(this,S).size==1?l(this,X,_e).call(this):this[p]()}),l(this,D,B).call(this,s);const r=()=>{const i=o(this,S).delete(s);s.next=U,s.pause=U,s.resume=U,i&&(o(this,M).set(r,s),o(this,S).size===0&&l(this,J,qe).call(this))};return r[p]=()=>{this[p](),l(this,D,B).call(this,s)},r.unsubscribe=r,r}[te](){return this}}S=new WeakMap,T=new WeakMap,y=new WeakMap,x=new WeakMap,C=new WeakMap,j=new WeakMap,M=new WeakMap,X=new WeakSet,_e=function(){c(this,T,ce(this.onUse()))},J=new WeakSet,qe=function(){const e=o(this,T);e&&(c(this,T,null),e())},D=new WeakSet,B=function(e){const s=o(this,j),n=o(this,x),r=o(this,C);let i=s[e._valueIndex];i==null&&(i=this.equal(e._value,r),s[e._valueIndex]=i),e._valueIndex=n,i?!o(this,y)&&e._paused&&(e._paused=!1,e.resume()):(e._value=r,e._paused=!1,e.next(r))};function Me(t){const e=s=>(s!=null&&s[ae]||xe(s).next(t),Q);return ue.add(e),Object.assign(()=>t,{subscribe:e,[te]:Ce})}class Fe extends de{constructor(e){super(e)}set(e){super.set(e)}update(e){super.update(e)}}const ne=(t,e)=>{const{onUse:s,equal:n,notEqual:r}=e;return s&&(t.onUse=function(){const i=u=>this.set(u);return i.set=i,i.update=u=>this.update(u),s(i)}),n&&(t.equal=function(i,u){return n(i,u)}),r&&(t.notEqual=function(i,u){return r(i,u)}),t};function Oe(t,e={}){return typeof e=="function"&&(e={onUse:e}),e.onUse?P(ne(new Fe(t),e)):Me(t)}function Ve(t,e={}){typeof e=="function"&&(e={onUse:e});const s=ne(new Fe(t),e);return P(s,{set:s.set.bind(s),update:s.update.bind(s)})}function ze(t){return t.length<=1}const We=t=>t();var V,z,v;class pe extends de{constructor(s,n){super(n);a(this,V,void 0);a(this,z,void 0);a(this,v,0);const r=Array.isArray(s);c(this,V,r),c(this,z,(r?[...s]:[s]).map(se))}resumeSubscribers(){o(this,v)||super.resumeSubscribers()}onUse(){let s=!1,n=0;const r=o(this,V),i=o(this,z),u=new Array(i.length);let d=null;const f=()=>{const h=d;h&&(d=null,h())},m=(h=!1)=>{h&&(s=!0),s&&!o(this,v)&&(n&&(n=0,f(),d=ce(this.derive(r?u:u[0]))),this.resumeSubscribers())},fe=i.map((h,q)=>{const w=$e=>{u[q]=$e,n|=1<<q,c(this,v,o(this,v)&~(1<<q)),m()};return w.next=w,w.pause=()=>{c(this,v,o(this,v)|1<<q),this.pauseSubscribers()},w.resume=()=>{c(this,v,o(this,v)&~(1<<q)),m()},h(w)}),De=(h,q)=>{var w;o(this,v)&1<<q&&((w=h[p])==null||w.call(h))};return this[p]=()=>{let h=0;for(;o(this,v)&&(le(++h),s=!1,fe.forEach(De),!o(this,v));)m(!0)},m(!0),this[p](),()=>{this[p]=U,f(),fe.forEach(We)}}}V=new WeakMap,z=new WeakMap,v=new WeakMap;function vt(t,e,s){typeof e=="function"&&(e={derive:e});const{derive:n,...r}=e,i=ze(n)?class extends pe{derive(u){this.set(n(u))}}:class extends pe{derive(u){const d=f=>this.set(f);return d.set=d,d.update=f=>this.update(f),n(u,d)}};return P(ne(new i(t,s),{...r,onUse:void 0}))}const Ne=t=>{const e=A;try{return A=Ie,t()}finally{A=e}},Be=({unsubscribe:t})=>t(),Qe=({resubscribe:t})=>t();var $,g,E,b,K,Y,Ue,Z,Ae,O,k,I,R,ee,Re;class Ge extends de{constructor(){super(void 0);a(this,Y);a(this,Z);a(this,O);a(this,I);a(this,ee);a(this,$,!1);a(this,g,!1);a(this,E,0);a(this,b,new Map);a(this,K,s=>Ne(()=>l(this,Z,Ae).call(this,s)))}resumeSubscribers(){l(this,I,R).call(this)||super.resumeSubscribers()}[p](){var n;if(o(this,$))throw new Error("recursive computed");let s=0;for(;l(this,I,R).call(this);){le(++s),c(this,g,!0);try{for(const[,{pending:r,unsubscribe:i}]of o(this,b))r&&((n=i[p])==null||n.call(i))}finally{c(this,g,!1)}if(l(this,I,R).call(this))break;l(this,O,k).call(this)}}onUse(){return l(this,O,k).call(this,!0),this[p](),()=>o(this,b).forEach(Be)}}$=new WeakMap,g=new WeakMap,E=new WeakMap,b=new WeakMap,K=new WeakMap,Y=new WeakSet,Ue=function(s){const n={versionIndex:o(this,E),unsubscribe:U,resubscribe:U,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},r=i=>{n.value=i,n.valueIndex++,n.pending=!1,!o(this,g)&&!l(this,I,R).call(this)&&G(()=>l(this,O,k).call(this))};return r.next=r,r.pause=()=>{n.pending=!0,this.pauseSubscribers()},r.resume=()=>{n.pending=!1,!o(this,g)&&!l(this,I,R).call(this)&&G(()=>l(this,O,k).call(this))},n.resubscribe=()=>{n.unsubscribe=s(r),r[ae]=n.unsubscribe},n.resubscribe(),n},Z=new WeakSet,Ae=function(s){var r,i;let n=o(this,b).get(s);return n?(n.versionIndex=o(this,E),(i=(r=n.unsubscribe)[p])==null||i.call(r)):(n=l(this,Y,Ue).call(this,se(s)),o(this,b).set(s,n)),n.usedValueIndex=n.valueIndex,n.value},O=new WeakSet,k=function(s=!1){c(this,$,!0),c(this,g,!0);try{if(o(this,E)>0&&(s&&o(this,b).forEach(Qe),!l(this,ee,Re).call(this))){this.resumeSubscribers();return}he(this,E)._++;const n=o(this,E),r=A;let i;try{A=o(this,K),i=this.compute()}finally{A=r}this.set(i);for(const[u,d]of o(this,b))d.versionIndex!==n&&(o(this,b).delete(u),d.unsubscribe())}finally{c(this,g,!1),c(this,$,!1)}},I=new WeakSet,R=function(){for(const[,{pending:s}]of o(this,b))if(s)return!0;return!1},ee=new WeakSet,Re=function(){for(const[,{valueIndex:s,usedValueIndex:n}]of o(this,b))if(s!=n)return!0;return!1};function W(t,e={}){const s=class extends Ge{compute(){return t()}};return P(ne(new s,{...e,onUse:void 0}))}const _=()=>{},mt=t=>t;Oe(void 0);const He={equal:Object.is},Te=()=>{const t=Ve([],He);return P(t,{register:e=>{let s=!1;return t.update(n=>[...n,e]),()=>{s||(s=!0,t.update(n=>{const r=n.indexOf(e);if(r>-1){const i=[...n];return i.splice(r,1),i}return n}))}}})},Xe=()=>{const t=Te();return{elements$:P(t),directive:e=>({destroy:t.register(e)})}},ve="focusin",me="focusout";Oe(null,{onUse({set:t}){function e(){t(document.activeElement)}e();const s=document.documentElement;function n(){setTimeout(e)}return s.addEventListener(ve,e),s.addEventListener(me,n),()=>{s.removeEventListener(ve,e),s.removeEventListener(me,n)}},equal:Object.is});const Je=t=>{const e=new Map,s=n=>{const r=n.parentElement;r&&n!==document.body&&(Array.from(r.children).forEach(i=>{i!==n&&i.nodeName!=="SCRIPT"&&(e.set(i,i.hasAttribute("inert")),i.toggleAttribute("inert",!0))}),s(r))};return s(t),()=>e.forEach((n,r)=>{r.toggleAttribute("inert",n)})};let Se=_;const Ke=t=>{Se(),Se=t?Je(t):_},{directive:St,elements$:Ye}=Xe(),Ze=W(()=>{const t=Ye();return t[t.length-1]},{equal:Object.is});W(()=>Ke(Ze()));const et=()=>{};new Promise(et);const tt=()=>{},ye=(t,e)=>{let s;const n=new Promise(u=>s=u);let r=()=>{t.removeEventListener(e,i),r=tt};const i=u=>{u.target===t&&(s(u),r())};return t.addEventListener(e,i),{promise:n,unsubscribe(){r()}}},st=t=>{let e;return{promise:new Promise(s=>{e=setTimeout(()=>{e=void 0,s()},t)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}};function ge(t=document.body){t.getBoundingClientRect()}const N=(t,e)=>{e&&e.length>0&&t.classList.add(...e)},F=(t,e)=>{e&&e.length>0&&t.classList.remove(...e)};function nt(t){return window.getComputedStyle(t).transitionProperty!=="none"}function it(t){const{transitionDelay:e,transitionDuration:s}=window.getComputedStyle(t),n=parseFloat(e),r=parseFloat(s);return(n+r)*1e3}const rt=()=>{},ot=t=>async(e,s,n,r,i)=>{const u=t(e,s,n,i)??rt;if(n&&nt(e)){const d=ye(r,"abort"),f=ye(e,"transitionend"),m=st(it(e));await Promise.race([d.promise,f.promise,m.promise]),d.unsubscribe(),f.unsubscribe(),m.unsubscribe()}r.aborted||u()},ut=({animationPendingClasses:t,animationPendingShowClasses:e,animationPendingHideClasses:s,showClasses:n,hideClasses:r})=>ot((i,u,d,f)=>{if(F(i,n),F(i,r),d){if(F(i,u==="show"?s:e),!f.started){f.started=!0;const m=u==="show"?r:n;N(i,m),ge(i),F(i,m)}N(i,t),ge(i),N(i,u==="show"?e:s)}return()=>{F(i,t),F(i,e),F(i,s),N(i,u==="show"?n:r)}}),we=ut({animationPendingClasses:["fade"],animationPendingShowClasses:["show"],showClasses:["show"],hideClasses:["d-none"]}),at=()=>{const t=Math.abs(window.innerWidth-document.documentElement.clientWidth),e=document.body,s=e.style,{overflow:n,paddingRight:r}=s;if(t>0){const i=parseFloat(window.getComputedStyle(e).paddingRight);s.paddingRight=`${i+t}px`}return s.overflow="hidden",()=>{t>0&&(s.paddingRight=r),s.overflow=n}};let H=_;const ct=()=>{H(),H=at()},lt=()=>{H(),H=_},dt={animation:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:we,closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,className:"",modalTransition:we,onBeforeClose:_,onVisibleChange:_,onHidden:_,onShown:_,slotDefault:void 0,slotFooter:void 0,slotHeader:void 0,slotStructure:void 0,slotTitle:void 0,visible:!1};function yt(){return{...dt}}const ft=Te(),ht=W(()=>ft().length>0),bt=W(()=>{ht()?ct():lt()});W(()=>{bt()});export{N as a,ge as b,ot as c,Oe as d,W as e,we as f,yt as g,G as h,P as i,mt as j,vt as k,je as l,_ as n,F as r,Ve as w};