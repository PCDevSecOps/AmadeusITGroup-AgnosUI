import{r as S,w as T,a as E,c as l}from"./index.es.5c333286.js";const a=()=>{};S(void 0);const $={equal:Object.is},C=()=>{const o=T([],$);return E(o,{register:t=>{let e=!1;return o.update(r=>[...r,t]),()=>{e||(e=!0,o.update(r=>{const s=r.indexOf(t);if(s>-1){const n=[...r];return n.splice(s,1),n}return r}))}}})},F=()=>{const o=C();return{elements$:E(o),directive:t=>({destroy:o.register(t)})}},v="focusin",m="focusout";S(null,{onUse({set:o}){function t(){o(document.activeElement)}t();const e=document.documentElement;function r(){setTimeout(t)}return e.addEventListener(v,t),e.addEventListener(m,r),()=>{e.removeEventListener(v,t),e.removeEventListener(m,r)}},equal:Object.is});const L=o=>{const t=new Map,e=r=>{const s=r.parentElement;s&&r!==document.body&&(Array.from(s.children).forEach(n=>{n!==r&&n.nodeName!=="SCRIPT"&&(t.set(n,n.hasAttribute("inert")),n.toggleAttribute("inert",!0))}),e(s))};return e(o),()=>t.forEach((r,s)=>{s.toggleAttribute("inert",r)})};let g=a;const R=o=>{g(),g=o?L(o):a},{directive:J,elements$:A}=F(),D=l(()=>{const o=A();return o[o.length-1]},{equal:Object.is});l(()=>R(D()));const O=()=>{};new Promise(O);const M=()=>{},w=(o,t)=>{let e;const r=new Promise(i=>e=i);let s=()=>{o.removeEventListener(t,n),s=M};const n=i=>{i.target===o&&(e(i),s())};return o.addEventListener(t,n),{promise:r,unsubscribe(){s()}}},k=o=>{let t;return{promise:new Promise(e=>{t=setTimeout(()=>{t=void 0,e()},o)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}};function h(o=document.body){o.getBoundingClientRect()}const b=(o,t)=>{t&&t.length>0&&o.classList.add(...t)},c=(o,t)=>{t&&t.length>0&&o.classList.remove(...t)};function q(o){return window.getComputedStyle(o).transitionProperty!=="none"}function B(o){const{transitionDelay:t,transitionDuration:e}=window.getComputedStyle(o),r=parseFloat(t),s=parseFloat(e);return(r+s)*1e3}const I=()=>{},P=o=>async(t,e,r,s,n)=>{const i=o(t,e,r,n)??I;if(r&&q(t)){const f=w(s,"abort"),u=w(t,"transitionend"),d=k(B(t));await Promise.race([f.promise,u.promise,d.promise]),f.unsubscribe(),u.unsubscribe(),d.unsubscribe()}s.aborted||i()},j=({animationPendingClasses:o,animationPendingShowClasses:t,animationPendingHideClasses:e,showClasses:r,hideClasses:s})=>P((n,i,f,u)=>{if(c(n,r),c(n,s),f){if(c(n,i==="show"?e:t),!u.started){u.started=!0;const d=i==="show"?s:r;b(n,d),h(n),c(n,d)}b(n,o),h(n),b(n,i==="show"?t:e)}return()=>{c(n,o),c(n,t),c(n,e),b(n,i==="show"?r:s)}}),y=j({animationPendingClasses:["fade"],animationPendingShowClasses:["show"],showClasses:["show"],hideClasses:["d-none"]}),x=()=>{const o=Math.abs(window.innerWidth-document.documentElement.clientWidth),t=document.body,e=t.style,{overflow:r,paddingRight:s}=e;if(o>0){const n=parseFloat(window.getComputedStyle(t).paddingRight);e.paddingRight=`${n+o}px`}return e.overflow="hidden",()=>{o>0&&(e.paddingRight=s),e.overflow=r}};let p=a;const W=()=>{p(),p=x()},V=()=>{p(),p=a},H={animation:!0,ariaCloseButtonLabel:"Close",backdrop:!0,backdropClass:"",backdropTransition:y,closeButton:!0,closeOnOutsideClick:!0,container:typeof window<"u"?document.body:null,modalClass:"",modalTransition:y,onBeforeClose:a,onVisibleChange:a,onHidden:a,onShown:a,slotDefault:void 0,slotFooter:void 0,slotHeader:void 0,slotStructure:void 0,slotTitle:void 0,visible:!1};function K(){return{...H}}const N=C(),U=l(()=>N().length>0),z=l(()=>{U()?W():V()});l(()=>{z()});export{y as f,K as g,a as n};