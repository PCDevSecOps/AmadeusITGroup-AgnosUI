import{c as S}from"./cssTransitions-uBV_yeX9.js";import{r as a,a as i,b as t}from"./dom-2S7XI5EU.js";const c=g=>{const{animationPendingClasses:h,animationPendingShowClasses:n,animationPendingHideClasses:r,showClasses:C,hideClasses:d}=g;return S((s,o,P,w)=>{if(a(s,C),a(s,d),P){if(a(s,o==="show"?r:n),!w.started){w.started=!0;const f=o==="show"?d:C;i(s,f),t(s),a(s,f)}i(s,h),t(s),i(s,o==="show"?n:r)}return()=>{a(s,h),a(s,n),a(s,r),i(s,o==="show"?C:d)}})},u=c({animationPendingClasses:["fade"],animationPendingShowClasses:["show"],showClasses:["show"],hideClasses:["d-none"]});export{u as f};
