import{j as t}from"./index-9Fgqnjnm.js";import{R as e}from"./rating-sHkhV6hF.js";import"./rating-ui-qldCy.js";import"./func-B0ufEirG.js";import"./stores-MWtmIrHD.js";import"./writables-3t5UUwLu.js";import"./slot-gDzFyRzn.js";import"./config-wKsGJoCh.js";import"./widget-PJHTrfIz.js";const r=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>`,u=()=>t.jsx(e,{rating:3.64,readonly:!0,maxRating:5,className:"rating-readonly",slotStar:({fill:s})=>{const a=["star"];s===100&&a.push("full");const n={width:`${s}%`};return t.jsxs("span",{className:a.join(" "),children:[t.jsx("span",{className:"half",style:n,dangerouslySetInnerHTML:{__html:r}}),t.jsx("span",{dangerouslySetInnerHTML:{__html:r}})]})},ariaLabel:"readonly rating"});export{u as default};