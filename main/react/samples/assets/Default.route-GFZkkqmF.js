import{r as o,j as e}from"./index-E1S85dop.js";import{P as a}from"./pagination-BdIM-l0Y.js";import"./pagination-hqDIQjxC.js";import"./func-B0ufEirG.js";import"./stores-JgT84mg8.js";import"./writables-OyOtM5rk.js";import"./config-zDWraNqZ.js";import"./widget-xxPN8IKN.js";import"./slot-clfMybp_.js";const j=()=>{const[i,n]=o.useState(4),[t,s]=o.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Basic pagination:"}),e.jsx(a,{page:i,collectionSize:60,onPageChange:n}),e.jsx("h5",{children:"No direction links:"}),e.jsx(a,{page:i,collectionSize:60,directionLinks:!1,onPageChange:n}),e.jsx("h5",{children:"With boundary links:"}),e.jsx(a,{page:i,collectionSize:60,boundaryLinks:!0,onPageChange:n}),e.jsxs("div",{className:"mb-3",children:["Current page: ",e.jsx("span",{id:"defaultPage",children:i})]}),e.jsx("h5",{children:"Disabled pagination:"}),e.jsx(a,{page:t,collectionSize:60,ariaLabel:"Disabled pagination",disabled:!0,onPageChange:s})]})};export{j as default};