var A=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var r=(t,e,s)=>(A(t,e,"read from private field"),s?s.call(t):e.get(t)),u=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},c=(t,e,s,n)=>(A(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);var Z=(t,e,s,n)=>({set _(i){c(t,e,i,s)},get _(){return r(t,e,n)}}),a=(t,e,s)=>(A(t,e,"access private method"),s);import{p as P}from"./stores.a3e244f7.js";const W=typeof Symbol=="function"&&Symbol.observable||"@@observable",B=Symbol(),U=()=>{},z=()=>{};z.unsubscribe=z;const G=(t,e)=>{const s=t?t[e]:null;return typeof s=="function"?s.bind(t):U},te=t=>({next:typeof t=="function"?t.bind(null):G(t,"next"),pause:G(t,"pause"),resume:G(t,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),se=function(){return this},ne=t=>{if(!t)return z;if(t.unsubscribe===t)return t;const e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e},X=new WeakSet,be=t=>{let e=t.subscribe;return X.has(e)||(e=(...s)=>ne(t.subscribe(...s)),X.add(e)),e},D=t=>{const e="subscribe"in t?t:t[W]();return be(e)},me=t=>{let e;return t(s=>e=s)(),e};function H(t,e){const s=D(t),n=Object.assign(()=>E(n),e,{subscribe:s,[W]:se});return n}const S=Symbol(),re=Symbol();let K=!1;const k=new Set,ve=1e3,ie=t=>{if(t>ve)throw new Error("reached maximum number of store changes in one shot")},j=t=>{const e=!K;e&&(K=!0);try{return t()}finally{if(e)try{const s=new Map;for(const n of k){const i=s.get(n)??0;ie(i),s.set(n,i+1),k.delete(n),n[re]()}}finally{k.clear(),K=!1}}},oe=t=>me(D(t));let w=oe;const E=t=>w(t),ee=t=>({[t]:!0,[t-1]:!1,0:!1});var h,_,d,b,m,L,O,T,ae,V,ce,R,$;class ue{constructor(e){u(this,T);u(this,V);u(this,R);u(this,h,new Set);u(this,_,null);u(this,d,!1);u(this,b,1);u(this,m,void 0);u(this,L,ee(1));u(this,O,new WeakMap);c(this,m,e)}[re](){const e=r(this,b);for(const s of[...r(this,h)]){if(r(this,d)||r(this,b)!==e)return;s._valueIndex!==0&&a(this,R,$).call(this,s)}}[S](){}equal(e,s){return!this.notEqual(e,s)}notEqual(e,s){return!Object.is(e,s)||e&&typeof e=="object"||typeof e=="function"}pauseSubscribers(){if(!r(this,d)){c(this,d,!0),k.delete(this);for(const e of[...r(this,h)])e._valueIndex===0||e._paused||(e._paused=!0,e.pause())}}resumeSubscribers(){r(this,d)&&(c(this,d,!1),j(()=>{k.add(this)}))}set(e){if(!this.equal(r(this,m),e)){const s=r(this,b)+1;c(this,b,s),c(this,m,e),c(this,L,ee(s)),this.pauseSubscribers()}this.resumeSubscribers()}update(e){this.set(e(r(this,m)))}onUse(){}subscribe(e){const s=te(e),n=e==null?void 0:e[B];if(n){const o=r(this,O).get(n);o&&(s._value=o._value,s._valueIndex=o._valueIndex)}r(this,h).add(s),j(()=>{r(this,h).size==1?a(this,T,ae).call(this):this[S]()}),a(this,R,$).call(this,s);const i=()=>{const o=r(this,h).delete(s);s.next=U,s.pause=U,s.resume=U,o&&(r(this,O).set(i,s),r(this,h).size===0&&a(this,V,ce).call(this))};return i[S]=()=>{this[S](),a(this,R,$).call(this,s)},i.unsubscribe=i,i}[W](){return this}}h=new WeakMap,_=new WeakMap,d=new WeakMap,b=new WeakMap,m=new WeakMap,L=new WeakMap,O=new WeakMap,T=new WeakSet,ae=function(){c(this,_,ne(this.onUse()))},V=new WeakSet,ce=function(){const e=r(this,_);e&&(c(this,_,null),e())},R=new WeakSet,$=function(e){const s=r(this,L),n=r(this,b),i=r(this,m);let o=s[e._valueIndex];o==null&&(o=this.equal(e._value,i),s[e._valueIndex]=o),e._valueIndex=n,o?!r(this,d)&&e._paused&&(e._paused=!1,e.resume()):(e._value=i,e._paused=!1,e.next(i))};function xe(t){const e=s=>(s!=null&&s[B]||te(s).next(t),z);return X.add(e),Object.assign(()=>t,{subscribe:e,[W]:se})}class le extends ue{constructor(e){super(e)}set(e){super.set(e)}update(e){super.update(e)}}const J=(t,e)=>{const{onUse:s,equal:n,notEqual:i}=e;return s&&(t.onUse=function(){const o=f=>this.set(f);return o.set=o,o.update=f=>this.update(f),s(o)}),n&&(t.equal=function(o,f){return n(o,f)}),i&&(t.notEqual=function(o,f){return i(o,f)}),t};function qe(t,e={}){return typeof e=="function"&&(e={onUse:e}),e.onUse?H(J(new le(t),e)):xe(t)}function ke(t,e={}){typeof e=="function"&&(e={onUse:e});const s=J(new le(t),e);return H(s,{set:s.set.bind(s),update:s.update.bind(s)})}const Se=t=>{const e=w;try{return w=oe,t()}finally{w=e}},ge=({unsubscribe:t})=>t(),we=({resubscribe:t})=>t();var C,p,v,l,F,M,fe,N,he,g,q,x,I,Q,de;class ye extends ue{constructor(){super(void 0);u(this,M);u(this,N);u(this,g);u(this,x);u(this,Q);u(this,C,!1);u(this,p,!1);u(this,v,0);u(this,l,new Map);u(this,F,s=>Se(()=>a(this,N,he).call(this,s)))}resumeSubscribers(){a(this,x,I).call(this)||super.resumeSubscribers()}[S](){var n;if(r(this,C))throw new Error("recursive computed");let s=0;for(;a(this,x,I).call(this);){ie(++s),c(this,p,!0);try{for(const[,{pending:i,unsubscribe:o}]of r(this,l))i&&((n=o[S])==null||n.call(o))}finally{c(this,p,!1)}if(a(this,x,I).call(this))break;a(this,g,q).call(this)}}onUse(){return a(this,g,q).call(this,!0),this[S](),()=>r(this,l).forEach(ge)}}C=new WeakMap,p=new WeakMap,v=new WeakMap,l=new WeakMap,F=new WeakMap,M=new WeakSet,fe=function(s){const n={versionIndex:r(this,v),unsubscribe:U,resubscribe:U,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},i=o=>{n.value=o,n.valueIndex++,n.pending=!1,!r(this,p)&&!a(this,x,I).call(this)&&j(()=>a(this,g,q).call(this))};return i.next=i,i.pause=()=>{n.pending=!0,this.pauseSubscribers()},i.resume=()=>{n.pending=!1,!r(this,p)&&!a(this,x,I).call(this)&&j(()=>a(this,g,q).call(this))},n.resubscribe=()=>{n.unsubscribe=s(i),i[B]=n.unsubscribe},n.resubscribe(),n},N=new WeakSet,he=function(s){var i,o;let n=r(this,l).get(s);return n?(n.versionIndex=r(this,v),(o=(i=n.unsubscribe)[S])==null||o.call(i)):(n=a(this,M,fe).call(this,D(s)),r(this,l).set(s,n)),n.usedValueIndex=n.valueIndex,n.value},g=new WeakSet,q=function(s=!1){c(this,C,!0),c(this,p,!0);try{if(r(this,v)>0&&(s&&r(this,l).forEach(we),!a(this,Q,de).call(this))){this.resumeSubscribers();return}Z(this,v)._++;const n=r(this,v),i=w;let o;try{w=r(this,F),o=this.compute()}finally{w=i}this.set(o);for(const[f,Y]of r(this,l))Y.versionIndex!==n&&(r(this,l).delete(f),Y.unsubscribe())}finally{c(this,p,!1),c(this,C,!1)}},x=new WeakSet,I=function(){for(const[,{pending:s}]of r(this,l))if(s)return!0;return!1},Q=new WeakSet,de=function(){for(const[,{valueIndex:s,usedValueIndex:n}]of r(this,l))if(s!=n)return!0;return!1};function y(t,e={}){const s=class extends ye{compute(){return t()}};return H(J(new s,{...e,onUse:void 0}))}const Ie=y(()=>{const t=E(P);if(!t.route.id)throw new Error("Page error");return t.route.id.split("/").length-2}),pe=y(()=>{const t=Ie();return t?"../".repeat(t):"./"}),Le=y(()=>new URL(pe(),window.location.href).href),Ue="https://amadeusitgroup.github.io/AgnosUI/latest/";y(()=>{const t=E(P).url.href,e=new URL(pe(),t).href;return t.replace(e,Ue)});const Oe=y(()=>E(P).params.framework??"angular"),_e=/^\/\[framework\]\/components\/[^/]*\/([^/]*)/,Pe=y(()=>{const t=_e.exec(E(P).route.id||"");return(t==null?void 0:t[1])||"examples"}),Re=/^\/\[framework\]\//,$e=y(()=>(E(P).route.id||"").replace(Re,""));export{Pe as a,H as b,y as c,$e as f,Le as p,qe as r,Oe as s,ke as w};