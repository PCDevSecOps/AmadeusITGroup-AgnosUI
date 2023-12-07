import{j as n,R as $e}from"./index-6fb31137.js";import{b as pe,c as r,z as X,i as he,e as Y,d as ve,w as ge,s as Le,m as we,f as xe,n as De,u as K}from"./utils-cf5517f1.js";import{g as ee,e as Q,h as ye,t as C,b as Z}from"./writables-1568ac5b.js";import{u as Ve}from"./config-16628da2.js";const G={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:(b,c)=>""+b,onValuesChange:De,values:[0],showValueLabels:!0,showMinMaxLabels:!0},Re={min:Q,max:Q,stepSize:ye(0,1/0,{strict:!0}),readonly:C,disabled:C,vertical:C,ariaLabelHandle:Z,onValuesChange:Z,values:ee,showValueLabels:C,showMinMaxLabels:C},je=(b,c,f,d,u)=>{const p=Math.pow(10,u);if(b>=f)return f;if(b<=c)return c;const h=Math.floor((b-c)*p/d);return+(((b-c)*p%d<d/2?h:h+1)*d/p+c).toFixed(u)};function Me(b){const[{min$:c,max$:f,stepSize$:d,values$:u,ariaLabelHandle$:p,onValuesChange$:h,showValueLabels$:L,showMinMaxLabels$:D,...y},N]=pe(G,b,Re),{vertical$:m,disabled$:z,readonly$:H}=y;let V=-1;const v=r(()=>c()===f()?G.min:Math.min(c(),f())),o=r(()=>c()===f()?G.max:Math.max(c(),f())),R=r(()=>Math.max(X(d()),X(v()),X(o()))),F=r(()=>d()*Math.pow(10,R())),$=he(h,[u,v,o,F,R],([e,t,s,a,l])=>e.map(P=>je(P,t,s,a,l)),ee.equal),{directive:_,element$:S}=Y(),{directive:B,element$:W}=Y(),{directive:A,element$:E}=Y(),w=ve(S,(e,t)=>{if(!e){t({});return}const s=new ResizeObserver(()=>{t({})});return s.observe(e),()=>s.disconnect()},{}),j=ge({}),i=r(()=>{var e;return w(),j(),((e=S())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),g=r(()=>{var e;return w(),j(),((e=W())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),M=r(()=>{var e;return w(),j(),((e=E())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),te=r(()=>m()?i().top:i().left),q=r(()=>m()?i().height:i().width),I=r(()=>[...$()].sort((e,t)=>e-t)),ae=r(()=>$().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),se=r(()=>{const e=p();return ae().map((t,s)=>({...t,ariaLabel:e(t.value,s,t.id)}))}),k=r(()=>$().map(e=>be(e))),T=r(()=>[...k()].sort((e,t)=>e-t)),re=r(()=>g().width/q()*100),ie=r(()=>M().width/q()*100),le=r(()=>{if(D()){if(!L())return!0}else return!1;const e=re();return!k().some(t=>t<e+1)}),ne=r(()=>{if(D()){if(!L())return!0}else return!1;const e=ie();return!k().some(t=>t>100-e-1)}),oe=r(()=>{const e=$();return e.length==2&&Math.abs(e[0]-e[1])<10}),O=r(()=>!z()&&!H()),ce=r(()=>{const e=T();return m()||e.length!=2?0:(e[0]+e[1])/2}),de=r(()=>{const e=T();return m()&&e.length==2?100-(e[0]+e[1])/2:0}),ue=r(()=>{const e=m();return k().map((t,s)=>({left:e?0:t,top:e?100-t:0}))}),me=r(()=>{const e=m(),t=T();return t.length===1?[{left:0,bottom:0,width:e?100:t[0],height:e?t[0]:100}]:t.map((s,a,l)=>({left:e?0:s,bottom:e?s:0,width:e?100:a===l.length-1?s:l[a+1]-s,height:e?a===l.length-1?s:l[a+1]-s:100})).slice(0,t.length-1)}),be=e=>{const t=v();return(e-t)*100/(o()-t)},fe=e=>{const t=$();if(t.length===1)return 0;const s=I(),a=s.find(x=>x>e*100),l=a?s.indexOf(a):s.length-1,P=s[l-1]+(s[l]-s[l-1])/2,U=s[e*100<=P?l-1:l];return t.indexOf(U)},J=(e,t)=>{if(O()){const s=q(),a=te(),l=m()?(s-e+a)/s:(e-a)/s,P=t??fe(l),U=l*(o()-v())+v();u.update(x=>(x=[...x],x[P]=U,x))}};return{...Le({min$:v,max$:o,stepSize$:d,values$:$,sortedValues$:I,sortedHandles$:se,minValueLabelDisplay$:le,maxValueLabelDisplay$:ne,combinedLabelDisplay$:oe,isInteractable$:O,combinedLabelPositionLeft$:ce,combinedLabelPositionTop$:de,progressDisplayOptions$:me,handleDisplayOptions$:ue,showValueLabels$:L,showMinMaxLabels$:D,...y}),patch:N,api:{},directives:{sliderDirective:we(_,xe(w)),minLabelDirective:B,maxLabelDirective:A},actions:{click(e){J(m()?e.clientY:e.clientX)},keydown(e,t){const{key:s}=e;if(O()){switch(s){case"ArrowDown":case"ArrowLeft":u.update(a=>(a=[...a],a[t]=$()[t]-d(),a));break;case"ArrowUp":case"ArrowRight":u.update(a=>(a=[...a],a[t]=$()[t]+d(),a));break;case"Home":u.update(a=>(a=[...a],a[t]=v(),a));break;case"End":u.update(a=>(a=[...a],a[t]=o(),a));break;case"PageUp":break;case"PageDown":break;default:return}e.preventDefault(),e.stopPropagation()}},mouseDown(e,t){e.preventDefault();const s=a=>{a.preventDefault();const l=m()?a.clientY:a.clientX;e.target.focus(),V!==l&&(V=l,J(l,t))};O()&&(e.target.focus(),document.addEventListener("mousemove",s),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",s)},{once:!0}))}}}}function Oe(b){const[{className:c,combinedLabelDisplay:f,combinedLabelPositionLeft:d,combinedLabelPositionTop:u,disabled:p,handleDisplayOptions:h,max:L,maxValueLabelDisplay:D,min:y,minValueLabelDisplay:N,progressDisplayOptions:m,readonly:z,sortedHandles:H,sortedValues:V,values:v,vertical:o,showValueLabels:R,showMinMaxLabels:F},{actions:{click:$,keydown:_,mouseDown:S},directives:{sliderDirective:B,minLabelDirective:W,maxLabelDirective:A}}]=Ve(Me,b,"slider"),E=K(B),w=K(W),j=K(A);return n.jsxs("div",{ref:E,className:`au-slider ${o?"au-slider-vertical":"au-slider-horizontal"} ${c} ${p?" disabled":""}`,children:[m.map((i,g)=>n.jsx("div",{className:"au-slider-progress",style:{left:`${i.left}%`,bottom:`${i.bottom}%`,width:`${i.width}%`,height:`${i.height}%`}},g)),n.jsx("div",{className:o?"au-slider-clickable-area-vertical":"au-slider-clickable-area",onClick:i=>$(i)}),F?n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:w,className:`${o?"au-slider-label-vertical au-slider-label-vertical-min":"au-slider-label au-slider-label-min"} ${N?"":" invisible"}
						`,children:y}),n.jsx("div",{ref:j,className:`${o?"au-slider-label-vertical au-slider-label-vertical-max":"au-slider-label au-slider-label-max"} ${D?"":" invisible"}`,children:L})]}):n.jsx(n.Fragment,{}),R&&f?n.jsxs("div",{className:o?"au-slider-label-vertical au-slider-label-vertical-now":"au-slider-label au-slider-label-now",style:{left:`${d}%`,top:`${u}%`},children:[V[0]," - ",V[1]]}):n.jsx(n.Fragment,{}),H.map((i,g)=>n.jsxs($e.Fragment,{children:[n.jsx("button",{className:`au-slider-handle ${o?"au-slider-handle-vertical":"au-slider-handle-horizontal"}`,role:"slider","aria-valuemin":y,"aria-valuemax":L,"aria-valuenow":i.value,"aria-valuetext":""+i.value,"aria-label":i.ariaLabel,"aria-readonly":z?"true":void 0,"aria-disabled":p?"true":void 0,"aria-orientation":o?"vertical":void 0,disabled:p,style:o?{top:`${h[i.id].top}%`}:{left:`${h[i.id].left}%`},onKeyDown:M=>_(M,i.id),onMouseDown:M=>S(M,i.id),children:" "}),R&&!f?n.jsx("div",{className:o?"au-slider-label-vertical au-slider-label-vertical-now":"au-slider-label au-slider-label-now",style:{left:`${h[g].left}%`,top:`${h[g].top}%`},children:v[g]}):n.jsx(n.Fragment,{})]},i.id))]})}export{Oe as S};