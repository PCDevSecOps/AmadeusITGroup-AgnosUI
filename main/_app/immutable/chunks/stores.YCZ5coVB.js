var re=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var o=(t,e,s)=>(re(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},a=(t,e,s,n)=>(re(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);var be=(t,e,s,n)=>({set _(i){a(t,e,i,s)},get _(){return o(t,e,n)}}),h=(t,e,s)=>(re(t,e,"access private method"),s);import{p as B}from"./stores.tnoFAH7c.js";var pe;const se=typeof Symbol=="function"&&Symbol.observable||"@@observable",ae=Symbol(),k=()=>{},J=()=>{};J.unsubscribe=J;const oe=(t,e)=>{const s=t?t[e]:null;return typeof s=="function"?s.bind(t):k},ge=t=>({next:typeof t=="function"?t.bind(null):oe(t,"next"),pause:oe(t,"pause"),resume:oe(t,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),we=function(){return this},le=t=>{if(!t)return J;if(t.unsubscribe===t)return t;const e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e},ce=new WeakSet,Fe=t=>{let e=t.subscribe;return ce.has(e)||(e=(...s)=>le(t.subscribe(...s)),ce.add(e)),e},ne=t=>{const e="subscribe"in t?t:t[se]();return Fe(e)},Ce=t=>{let e;return t(s=>e=s)(),e};function z(t,e){const s=ne(t),n=Object.assign(()=>A(n),e,{subscribe:s,[se]:we});return n}const me=function(t){this.set(t(qe(()=>A(this))))};function Ne(t,e){return z(t,typeof e=="function"?{set:e,update:me}:{...e,set:(e==null?void 0:e.set)??k,update:(e==null?void 0:e.update)??(e!=null&&e.set?me:k)})}const m=Symbol(),Ie=Symbol();let ue=!1;const Q=new Set,Ee=1e3,fe=t=>{if(t>Ee)throw new Error("reached maximum number of store changes in one shot")},G=t=>{const e=!ue;e&&(ue=!0);try{return t()}finally{if(e)try{const s=new Map;for(const n of Q){const i=s.get(n)??0;fe(i),s.set(n,i+1),Q.delete(n),n[Ie]()}}finally{Q.clear(),ue=!1}}},Ue=t=>Ce(ne(t));let F=Ue;const A=t=>F(t),ve=t=>({[t]:!0,[t-1]:!1,0:!1}),M=Symbol(),We=(t,e)=>Object.is(t,e)&&(!t||typeof t!="object")&&typeof t!="function";var g,L,w,_,R,j,N,O,_e,Y,$e,E,H;class he{constructor(e){l(this,O);l(this,Y);l(this,E);l(this,g,void 0);l(this,L,void 0);l(this,w,void 0);l(this,_,void 0);l(this,R,void 0);l(this,j,void 0);l(this,N,void 0);a(this,g,new Set),a(this,L,null),a(this,w,!1),a(this,_,1),a(this,j,ve(1)),a(this,N,new WeakMap),this[pe]=!1,a(this,R,e)}[(pe=M,Ie)](){const e=o(this,_);for(const s of[...o(this,g)]){if(o(this,w)||o(this,_)!==e)return;s._valueIndex!==0&&h(this,E,H).call(this,s)}}[m](){}equal(e,s){return!this.notEqual(e,s)}notEqual(e,s){return!We(e,s)}pauseSubscribers(){if(!o(this,w)){a(this,w,!0),Q.delete(this);for(const e of[...o(this,g)])e._valueIndex===0||e._paused||(e._paused=!0,e.pause())}}resumeSubscribers(){o(this,w)&&(a(this,w,!1),G(()=>{Q.add(this)}))}set(e){const s=this[M];if(s||!this.equal(o(this,R),e)){const n=o(this,_)+1;a(this,_,n),a(this,R,e),a(this,j,ve(n)),s&&delete o(this,j)[n-1],this.pauseSubscribers()}this.resumeSubscribers()}update(e){this.set(e(o(this,R)))}onUse(){}subscribe(e){const s=ge(e),n=e==null?void 0:e[ae];if(n){const r=o(this,N).get(n);r&&(s._value=r._value,s._valueIndex=r._valueIndex)}o(this,g).add(s),G(()=>{o(this,g).size==1?h(this,O,_e).call(this):this[m]()}),h(this,E,H).call(this,s);const i=()=>{const r=o(this,g).delete(s);s.next=k,s.pause=k,s.resume=k,r&&(o(this,N).set(i,s),o(this,g).size===0&&h(this,Y,$e).call(this))};return i[m]=()=>{this[m](),h(this,E,H).call(this,s)},i.unsubscribe=i,i}[se](){return this}}g=new WeakMap,L=new WeakMap,w=new WeakMap,_=new WeakMap,R=new WeakMap,j=new WeakMap,N=new WeakMap,O=new WeakSet,_e=function(){a(this,L,le(this.onUse()))},Y=new WeakSet,$e=function(){const e=o(this,L);e&&(a(this,L,null),e())},E=new WeakSet,H=function(e){const s=o(this,j),n=o(this,_),i=o(this,R);let r=s[e._valueIndex];r==null&&(r=!!this.equal(e._value,i),s[e._valueIndex]=r),e._valueIndex=n,r?!o(this,w)&&e._paused&&(e._paused=!1,e.resume()):(e._value=i,e._paused=!1,e.next(i))};function Me(t){const e=s=>(s!=null&&s[ae]||ge(s).next(t),J);return ce.add(e),Object.assign(()=>t,{subscribe:e,[se]:we})}class ke extends he{constructor(e){super(e)}set(e){super.set(e)}update(e){super.update(e)}}const ie=(t,e)=>{const{onUse:s,equal:n,notEqual:i}=e;return s&&(t.onUse=function(){const r=u=>this.set(u);return r.set=r,r.update=u=>this.update(u),s(r)}),n&&(t.equal=function(r,u){return n(r,u)}),i&&(t.notEqual=function(r,u){return i(r,u)}),t};function xe(t,e={}){return typeof e=="function"&&(e={onUse:e}),e.onUse?z(ie(new ke(t),e)):Me(t)}function Re(t,e={}){typeof e=="function"&&(e={onUse:e});const s=ie(new ke(t),e);return z(s,{set:s.set.bind(s),update:s.update.bind(s)})}function Te(t){return t.length<=1}const Qe=t=>t();var K,X,v;class Se extends he{constructor(s,n){super(n);l(this,K,void 0);l(this,X,void 0);l(this,v,0);const i=Array.isArray(s);a(this,K,i),a(this,X,(i?[...s]:[s]).map(ne))}resumeSubscribers(){o(this,v)||super.resumeSubscribers()}onUse(){let s=!1,n=0;const i=o(this,K),r=o(this,X),u=new Array(r.length);let c=null;const b=()=>{const f=c;f&&(c=null,f())},I=(f=!1)=>{f&&(s=!0),s&&!o(this,v)&&(n&&(n=0,b(),c=le(this.derive(i?u:u[0]))),this.resumeSubscribers())},d=r.map((f,U)=>{const x=De=>{u[U]=De,n|=1<<U,a(this,v,o(this,v)&~(1<<U)),I()};return x.next=x,x.pause=()=>{a(this,v,o(this,v)|1<<U),this.pauseSubscribers()},x.resume=()=>{a(this,v,o(this,v)&~(1<<U)),I()},f(x)}),y=(f,U)=>{var x;o(this,v)&1<<U&&((x=f[m])==null||x.call(f))};return this[m]=()=>{let f=0;for(;o(this,v)&&(fe(++f),s=!1,d.forEach(y),!o(this,v));)I(!0)},I(!0),this[m](),()=>{this[m]=k,b(),d.forEach(Qe)}}}K=new WeakMap,X=new WeakMap,v=new WeakMap;function Ve(t,e,s){typeof e=="function"&&(e={derive:e});const{derive:n,...i}=e,r=Te(n)?class extends Se{constructor(u,c){super(u,c),this[M]=!0}derive(u){this.set(n(u)),this[M]=!1}}:class extends Se{derive(u){const c=b=>this.set(b);return c.set=c,c.update=b=>this.update(b),n(u,c)}};return z(ie(new r(t,s),{...i,onUse:void 0}))}const qe=t=>{const e=F;try{return F=Ue,t()}finally{F=e}},Ge=({unsubscribe:t})=>t(),Ke=({resubscribe:t})=>t();var W,$,V,p,Z,P,ze,ee,Ae,D,T,q,C,te,Le;class Xe extends he{constructor(){super(void 0);l(this,P);l(this,ee);l(this,D);l(this,q);l(this,te);l(this,W,!1);l(this,$,!1);l(this,V,0);l(this,p,new Map);l(this,Z,s=>qe(()=>h(this,ee,Ae).call(this,s)));this[M]=!0}resumeSubscribers(){h(this,q,C).call(this)||super.resumeSubscribers()}[m](){var n;if(o(this,W))throw new Error("recursive computed");let s=0;for(;h(this,q,C).call(this);){fe(++s),a(this,$,!0);try{for(const[,{pending:i,unsubscribe:r}]of o(this,p))i&&((n=r[m])==null||n.call(r))}finally{a(this,$,!1)}if(h(this,q,C).call(this))break;h(this,D,T).call(this)}}onUse(){return h(this,D,T).call(this,!0),this[m](),()=>o(this,p).forEach(Ge)}}W=new WeakMap,$=new WeakMap,V=new WeakMap,p=new WeakMap,Z=new WeakMap,P=new WeakSet,ze=function(s){const n={versionIndex:o(this,V),unsubscribe:k,resubscribe:k,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},i=r=>{n.value=r,n.valueIndex++,n.pending=!1,!o(this,$)&&!h(this,q,C).call(this)&&G(()=>h(this,D,T).call(this))};return i.next=i,i.pause=()=>{n.pending=!0,this.pauseSubscribers()},i.resume=()=>{n.pending=!1,!o(this,$)&&!h(this,q,C).call(this)&&G(()=>h(this,D,T).call(this))},n.resubscribe=()=>{n.unsubscribe=s(i),i[ae]=n.unsubscribe},n.resubscribe(),n},ee=new WeakSet,Ae=function(s){var i,r;let n=o(this,p).get(s);return n?(n.versionIndex=o(this,V),(r=(i=n.unsubscribe)[m])==null||r.call(i)):(n=h(this,P,ze).call(this,ne(s)),o(this,p).set(s,n)),n.usedValueIndex=n.valueIndex,n.value},D=new WeakSet,T=function(s=!1){a(this,W,!0),a(this,$,!0);try{if(o(this,V)>0&&(s&&o(this,p).forEach(Ke),!h(this,te,Le).call(this))){this.resumeSubscribers();return}be(this,V)._++;const n=o(this,V),i=F;let r;try{F=o(this,Z),r=this.compute()}finally{F=i}this.set(r),this[M]=!1;for(const[u,c]of o(this,p))c.versionIndex!==n&&(o(this,p).delete(u),c.unsubscribe())}finally{a(this,$,!1),a(this,W,!1)}},q=new WeakSet,C=function(){for(const[,{pending:s}]of o(this,p))if(s)return!0;return!1},te=new WeakSet,Le=function(){for(const[,{valueIndex:s,usedValueIndex:n}]of o(this,p))if(s!=n)return!0;return!1};function S(t,e={}){const s=class extends Xe{compute(){return t()}};return z(ie(new s,{...e,onUse:void 0}))}const Be=()=>{},He=t=>t,ye=Symbol();function Je(t){return function(e){G(()=>{var s;for(const[n,i]of Object.entries(e??{}))(s=t[`${n}$`])==null||s.set(i)})}}function Oe(t,e=xe(void 0),s={},n=Re(void 0)){const{normalizeValue:i=He,equal:r=Object.is}=s,u=()=>t,c=(d,y=u)=>{const f=d===void 0?void 0:i(d);return f===ye?(console.error("Not using invalid value",d),y()):f===void 0?y():f},b=S(()=>c(e()),{equal:r}),I=S(()=>c(n(),b),{equal:r});return Ne(I,d=>{if(d!==void 0){const y=i(d);if(y===ye){console.error("Not setting invalid value",d);return}d=y}n.set(d)})}const de=t=>!!(t&&typeof t=="function"&&"subscribe"in t),Ye=t=>de(t)?t:xe(t),Ze=t=>de(t)?t:Re(t),Pe=(t,e)=>{const s={};if(e){const n=de(e);for(const i of t)s[i]=n?S(()=>e()[i]):Ye(e[i])}return s},et=(t,e,s)=>{const n={},i=Object.keys(t),r=Pe(i,e==null?void 0:e.config),u=e==null?void 0:e.props;for(const c of i){const b=u==null?void 0:u[c];n[`${c}$`]=Oe(t[c],r[c],s==null?void 0:s[c],Ze(b))}return n},tt=(t,e,s)=>{const n=et(t,e,s);return[n,Je(n)]},lt=t=>{const e=[],s=[],n={};for(const i of Object.keys(t))if(i.endsWith("$")){const r=t[i];e.push(i.substring(0,i.length-1)),s.push(r),n[i]=z(r)}return{stores:n,state$:S(()=>{const i=s.map(A),r={};return e.forEach((u,c)=>{r[u]=i[c]}),r})}},ft=(t,e,s=i=>i[0],n=(i,r)=>r===i)=>{let i=e[0]();return Ve(e,{derive(r){const u=s(r),c=!n(r[0],u);return c&&e[0].set(u),(c||!n(i,u))&&(i=u,t()(u)),u},equal:n})},st={elements:[],options:void 0},nt=t=>{const[{elements$:e,options$:s},n]=tt(st,t),i=Ve([e,s],([r,u],c)=>{if(r.length){const b=new Map,I=new IntersectionObserver(d=>{for(const y of d){const{target:f,isIntersecting:U}=y;U?b.set(f,y):b.delete(f)}c(b)},u);for(const d of r)I.observe(d);return()=>{I.disconnect()}}return Be},new Map);return{elements$:z(e),visibleElements$:z(i),patch:n}},it=S(()=>{const t=A(B);if(!t.route.id)throw new Error("Page error");return t.route.id.split("/").length-2+Object.values(t.params).reduce((e,s)=>e+s.split("/").length-1,0)}),je=S(()=>{const t=it();return t?"../".repeat(t):"./"}),ht=S(()=>new URL(je(),window.location.href).href),rt="https://amadeusitgroup.github.io/AgnosUI/latest/";S(()=>{const t=A(B).url.href,e=new URL(je(),t).href;return t.replace(e,rt)});const dt=S(()=>A(B).params.framework??"angular"),ot=/^\/docs\/\[framework\]\/components\/[^/]*\/([^/]*)/,bt=S(()=>{const t=ot.exec(A(B).route.id||"");return(t==null?void 0:t[1])||"examples"}),ut=/\/docs\/[a-z]*\/(.*)$/,pt=S(()=>{var e;return((e=A(B).url.pathname.match(ut))==null?void 0:e[1])??"/"}),mt=nt();export{ye as I,bt as a,z as b,S as c,Ve as d,We as e,G as f,tt as g,lt as h,mt as i,ft as j,pt as k,it as l,Be as n,ht as p,xe as r,dt as s,Re as w};