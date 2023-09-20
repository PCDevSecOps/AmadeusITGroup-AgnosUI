var re=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var r=(t,e,s)=>(re(t,e,"read from private field"),s?s.call(t):e.get(t)),a=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},l=(t,e,s,n)=>(re(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);var he=(t,e,s,n)=>({set _(i){l(t,e,i,s)},get _(){return r(t,e,n)}}),f=(t,e,s)=>(re(t,e,"access private method"),s);import{p as Q}from"./stores.fc8f8a01.js";const te=typeof Symbol=="function"&&Symbol.observable||"@@observable",ce=Symbol(),R=()=>{},X=()=>{};X.unsubscribe=X;const ie=(t,e)=>{const s=t?t[e]:null;return typeof s=="function"?s.bind(t):R},me=t=>({next:typeof t=="function"?t.bind(null):ie(t,"next"),pause:ie(t,"pause"),resume:ie(t,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),Se=function(){return this},ae=t=>{if(!t)return X;if(t.unsubscribe===t)return t;const e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e},ue=new WeakSet,ke=t=>{let e=t.subscribe;return ue.has(e)||(e=(...s)=>ae(t.subscribe(...s)),ue.add(e)),e},se=t=>{const e="subscribe"in t?t:t[te]();return ke(e)},qe=t=>{let e;return t(s=>e=s)(),e};function q(t,e){const s=se(t),n=Object.assign(()=>V(n),e,{subscribe:s,[te]:Se});return n}const p=Symbol(),ge=Symbol();let oe=!1;const j=new Set,Oe=1e3,le=t=>{if(t>Oe)throw new Error("reached maximum number of store changes in one shot")},z=t=>{const e=!oe;e&&(oe=!0);try{return t()}finally{if(e)try{const s=new Map;for(const n of j){const i=s.get(n)??0;le(i),s.set(n,i+1),j.delete(n),n[ge]()}}finally{j.clear(),oe=!1}}},ye=t=>qe(se(t));let k=ye;const V=t=>k(t),de=t=>({[t]:!0,[t-1]:!1,0:!1});var g,L,y,I,U,N,M,B,xe,H,we,A,K;class fe{constructor(e){a(this,B);a(this,H);a(this,A);a(this,g,new Set);a(this,L,null);a(this,y,!1);a(this,I,1);a(this,U,void 0);a(this,N,de(1));a(this,M,new WeakMap);l(this,U,e)}[ge](){const e=r(this,I);for(const s of[...r(this,g)]){if(r(this,y)||r(this,I)!==e)return;s._valueIndex!==0&&f(this,A,K).call(this,s)}}[p](){}equal(e,s){return!this.notEqual(e,s)}notEqual(e,s){return!Object.is(e,s)||e&&typeof e=="object"||typeof e=="function"}pauseSubscribers(){if(!r(this,y)){l(this,y,!0),j.delete(this);for(const e of[...r(this,g)])e._valueIndex===0||e._paused||(e._paused=!0,e.pause())}}resumeSubscribers(){r(this,y)&&(l(this,y,!1),z(()=>{j.add(this)}))}set(e){if(!this.equal(r(this,U),e)){const s=r(this,I)+1;l(this,I,s),l(this,U,e),l(this,N,de(s)),this.pauseSubscribers()}this.resumeSubscribers()}update(e){this.set(e(r(this,U)))}onUse(){}subscribe(e){const s=me(e),n=e==null?void 0:e[ce];if(n){const o=r(this,M).get(n);o&&(s._value=o._value,s._valueIndex=o._valueIndex)}r(this,g).add(s),z(()=>{r(this,g).size==1?f(this,B,xe).call(this):this[p]()}),f(this,A,K).call(this,s);const i=()=>{const o=r(this,g).delete(s);s.next=R,s.pause=R,s.resume=R,o&&(r(this,M).set(i,s),r(this,g).size===0&&f(this,H,we).call(this))};return i[p]=()=>{this[p](),f(this,A,K).call(this,s)},i.unsubscribe=i,i}[te](){return this}}g=new WeakMap,L=new WeakMap,y=new WeakMap,I=new WeakMap,U=new WeakMap,N=new WeakMap,M=new WeakMap,B=new WeakSet,xe=function(){l(this,L,ae(this.onUse()))},H=new WeakSet,we=function(){const e=r(this,L);e&&(l(this,L,null),e())},A=new WeakSet,K=function(e){const s=r(this,N),n=r(this,I),i=r(this,U);let o=s[e._valueIndex];o==null&&(o=this.equal(e._value,i),s[e._valueIndex]=o),e._valueIndex=n,o?!r(this,y)&&e._paused&&(e._paused=!1,e.resume()):(e._value=i,e._paused=!1,e.next(i))};function Pe(t){const e=s=>(s!=null&&s[ce]||me(s).next(t),X);return ue.add(e),Object.assign(()=>t,{subscribe:e,[te]:Se})}class Ie extends fe{constructor(e){super(e)}set(e){super.set(e)}update(e){super.update(e)}}const ne=(t,e)=>{const{onUse:s,equal:n,notEqual:i}=e;return s&&(t.onUse=function(){const o=u=>this.set(u);return o.set=o,o.update=u=>this.update(u),s(o)}),n&&(t.equal=function(o,u){return n(o,u)}),i&&(t.notEqual=function(o,u){return i(o,u)}),t};function Ue(t,e={}){return typeof e=="function"&&(e={onUse:e}),e.onUse?q(ne(new Ie(t),e)):Pe(t)}function Le(t,e={}){typeof e=="function"&&(e={onUse:e});const s=ne(new Ie(t),e);return q(s,{set:s.set.bind(s),update:s.update.bind(s)})}function Ae(t){return t.length<=1}const Fe=t=>t();var T,W,b;class pe extends fe{constructor(s,n){super(n);a(this,T,void 0);a(this,W,void 0);a(this,b,0);const i=Array.isArray(s);l(this,T,i),l(this,W,(i?[...s]:[s]).map(se))}resumeSubscribers(){r(this,b)||super.resumeSubscribers()}onUse(){let s=!1,n=0;const i=r(this,T),o=r(this,W),u=new Array(o.length);let c=null;const v=()=>{const h=c;h&&(c=null,h())},$=(h=!1)=>{h&&(s=!0),s&&!r(this,b)&&(n&&(n=0,v(),c=ae(this.derive(i?u:u[0]))),this.resumeSubscribers())},O=o.map((h,S)=>{const w=Re=>{u[S]=Re,n|=1<<S,l(this,b,r(this,b)&~(1<<S)),$()};return w.next=w,w.pause=()=>{l(this,b,r(this,b)|1<<S),this.pauseSubscribers()},w.resume=()=>{l(this,b,r(this,b)&~(1<<S)),$()},h(w)}),G=(h,S)=>{var w;r(this,b)&1<<S&&((w=h[p])==null||w.call(h))};return this[p]=()=>{let h=0;for(;r(this,b)&&(le(++h),s=!1,O.forEach(G),!r(this,b));)$(!0)},$(!0),this[p](),()=>{this[p]=R,v(),O.forEach(Fe)}}}T=new WeakMap,W=new WeakMap,b=new WeakMap;function Ve(t,e,s){typeof e=="function"&&(e={derive:e});const{derive:n,...i}=e,o=Ae(n)?class extends pe{derive(u){this.set(n(u))}}:class extends pe{derive(u){const c=v=>this.set(v);return c.set=c,c.update=v=>this.update(v),n(u,c)}};return q(ne(new o(t,s),{...i,onUse:void 0}))}const De=t=>{const e=k;try{return k=ye,t()}finally{k=e}},je=({unsubscribe:t})=>t(),ze=({resubscribe:t})=>t();var F,x,_,d,J,Y,_e,Z,Ee,C,D,E,P,ee,$e;class Ne extends fe{constructor(){super(void 0);a(this,Y);a(this,Z);a(this,C);a(this,E);a(this,ee);a(this,F,!1);a(this,x,!1);a(this,_,0);a(this,d,new Map);a(this,J,s=>De(()=>f(this,Z,Ee).call(this,s)))}resumeSubscribers(){f(this,E,P).call(this)||super.resumeSubscribers()}[p](){var n;if(r(this,F))throw new Error("recursive computed");let s=0;for(;f(this,E,P).call(this);){le(++s),l(this,x,!0);try{for(const[,{pending:i,unsubscribe:o}]of r(this,d))i&&((n=o[p])==null||n.call(o))}finally{l(this,x,!1)}if(f(this,E,P).call(this))break;f(this,C,D).call(this)}}onUse(){return f(this,C,D).call(this,!0),this[p](),()=>r(this,d).forEach(je)}}F=new WeakMap,x=new WeakMap,_=new WeakMap,d=new WeakMap,J=new WeakMap,Y=new WeakSet,_e=function(s){const n={versionIndex:r(this,_),unsubscribe:R,resubscribe:R,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},i=o=>{n.value=o,n.valueIndex++,n.pending=!1,!r(this,x)&&!f(this,E,P).call(this)&&z(()=>f(this,C,D).call(this))};return i.next=i,i.pause=()=>{n.pending=!0,this.pauseSubscribers()},i.resume=()=>{n.pending=!1,!r(this,x)&&!f(this,E,P).call(this)&&z(()=>f(this,C,D).call(this))},n.resubscribe=()=>{n.unsubscribe=s(i),i[ce]=n.unsubscribe},n.resubscribe(),n},Z=new WeakSet,Ee=function(s){var i,o;let n=r(this,d).get(s);return n?(n.versionIndex=r(this,_),(o=(i=n.unsubscribe)[p])==null||o.call(i)):(n=f(this,Y,_e).call(this,se(s)),r(this,d).set(s,n)),n.usedValueIndex=n.valueIndex,n.value},C=new WeakSet,D=function(s=!1){l(this,F,!0),l(this,x,!0);try{if(r(this,_)>0&&(s&&r(this,d).forEach(ze),!f(this,ee,$e).call(this))){this.resumeSubscribers();return}he(this,_)._++;const n=r(this,_),i=k;let o;try{k=r(this,J),o=this.compute()}finally{k=i}this.set(o);for(const[u,c]of r(this,d))c.versionIndex!==n&&(r(this,d).delete(u),c.unsubscribe())}finally{l(this,x,!1),l(this,F,!1)}},E=new WeakSet,P=function(){for(const[,{pending:s}]of r(this,d))if(s)return!0;return!1},ee=new WeakSet,$e=function(){for(const[,{valueIndex:s,usedValueIndex:n}]of r(this,d))if(s!=n)return!0;return!1};function m(t,e={}){const s=class extends Ne{compute(){return t()}};return q(ne(new s,{...e,onUse:void 0}))}const Me=()=>{},Te=t=>t;function We(t){return function(e){z(()=>{var s;for(const[n,i]of Object.entries(e??{}))(s=t[`${n}$`])==null||s.set(i)})}}const Qe=function(t){this.set(t(this()))},be=Symbol();function Ge(t,e=Ue(void 0),{normalizeValue:s=Te,equal:n=Object.is}={}){const i=Le(void 0),o=m(()=>{const u=e(),c=u===void 0?void 0:s(u);return c===be?(console.error("Not using invalid value from default config",u),t):c===void 0?t:c},{equal:n});return q(m(()=>{const u=i();return u!==void 0?u:o()},{equal:n}),{set(u){const c=u===void 0?void 0:s(u);c===be?console.error("Not setting invalid value",u):i.set(c)},update:Qe})}const ve=t=>!!(t&&typeof t=="function"&&"subscribe"in t),Ke=(t,e,s)=>{const n={},i=ve(e);for(const o of Object.keys(t)){let u=i?m(()=>e()[o]):void 0;if(!i&&e){const c=e[o];u=ve(c)?c:Ue(c)}n[`${o}$`]=Ge(t[o],u,s==null?void 0:s[o])}return n},Xe=(t,e,s)=>{const n=Ke(t,e,s);return[n,We(n)]},Be={elements:[],options:void 0},He=t=>{const[{elements$:e,options$:s},n]=Xe(Be,t),i=Ve([e,s],([o,u],c)=>{if(o.length){const v=new Map,$=new IntersectionObserver(O=>{for(const G of O){const{target:h,isIntersecting:S}=G;S?v.set(h,G):v.delete(h)}c(v)},u);for(const O of o)$.observe(O);return()=>{$.disconnect()}}return Me},new Map);return{elements$:q(e),visibleElements$:q(i),patch:n}},Je=m(()=>{const t=V(Q);if(!t.route.id)throw new Error("Page error");return t.route.id.split("/").length-2}),Ce=m(()=>{const t=Je();return t?"../".repeat(t):"./"}),nt=m(()=>new URL(Ce(),window.location.href).href),Ye="https://amadeusitgroup.github.io/AgnosUI/latest/";m(()=>{const t=V(Q).url.href,e=new URL(Ce(),t).href;return t.replace(e,Ye)});const rt=m(()=>V(Q).params.framework??"angular"),Ze=/^\/\[framework\]\/components\/[^/]*\/([^/]*)/,it=m(()=>{const t=Ze.exec(V(Q).route.id||"");return(t==null?void 0:t[1])||"examples"}),et=/^\/\[framework\]\//,ot=m(()=>(V(Q).route.id||"").replace(et,"")),ut=He();export{it as a,q as b,m as c,ot as f,ut as i,Me as n,nt as p,Ue as r,rt as s,Le as w};