import{h as R,e as c,d as $,w as U,i as p,j as k,k as y,n as E,l}from"./modal.2a28f355.js";import{p as u}from"./stores.e8167fb3.js";function I(e){return function(t){R(()=>{var n;for(const[r,i]of Object.entries(t??{}))(n=e[`${r}$`])==null||n.set(i)})}}const j=function(e){this.set(e(this()))},w=Symbol();function A(e,t=$(void 0),{normalizeValue:n=k,equal:r=Object.is}={}){const i=U(void 0),a=c(()=>{const o=t(),s=o===void 0?void 0:n(o);return s===w?(console.error("Not using invalid value from default config",o),e):s===void 0?e:s},{equal:r});return p(c(()=>{const o=i();return o!==void 0?o:a()},{equal:r}),{set(o){const s=o===void 0?void 0:n(o);s===w?console.error("Not setting invalid value",o):i.set(s)},update:j})}const h=e=>!!(e&&typeof e=="function"&&"subscribe"in e),D=(e,t,n)=>{const r={},i=h(t);for(const a of Object.keys(e)){let o=i?c(()=>t()[a]):void 0;if(!i&&t){const s=t[a];o=h(s)?s:$(s)}r[`${a}$`]=A(e[a],o,n==null?void 0:n[a])}return r},N=(e,t,n)=>{const r=D(e,t,n);return[r,I(r)]},O={elements:[],options:void 0},P=e=>{const[{elements$:t,options$:n},r]=N(O,e),i=y([t,n],([a,o],s)=>{if(a.length){const f=new Map,v=new IntersectionObserver(d=>{for(const m of d){const{target:b,isIntersecting:L}=m;L?f.set(b,m):f.delete(b)}s(f)},o);for(const d of a)v.observe(d);return()=>{v.disconnect()}}return E},new Map);return{elements$:p(t),visibleElements$:p(i),patch:r}},V=c(()=>{const e=l(u);if(!e.route.id)throw new Error("Page error");return e.route.id.split("/").length-2}),g=c(()=>{const e=V();return e?"../".repeat(e):"./"}),W=c(()=>new URL(g(),window.location.href).href),x="https://amadeusitgroup.github.io/AgnosUI/latest/";c(()=>{const e=l(u).url.href,t=new URL(g(),e).href;return e.replace(t,x)});const z=c(()=>l(u).params.framework??"angular"),S=/^\/\[framework\]\/components\/[^/]*\/([^/]*)/,C=c(()=>{const e=S.exec(l(u).route.id||"");return(e==null?void 0:e[1])||"examples"}),T=/^\/\[framework\]\//,K=c(()=>(l(u).route.id||"").replace(T,"")),_=P();export{C as a,K as f,_ as i,W as p,z as s};