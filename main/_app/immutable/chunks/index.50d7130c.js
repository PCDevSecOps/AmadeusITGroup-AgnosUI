import{_ as e}from"./preload-helper.a4192956.js";const S=500,w=20,$=300,k="https://stackblitz.com",I=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],M=["project","search","ports","settings"],x=["light","dark"],N=["editor","preview"],A={clickToLoad:i=>p("ctl",i),devToolsHeight:i=>T("devtoolsheight",i),forceEmbedLayout:i=>p("embed",i),hideDevTools:i=>p("hidedevtools",i),hideExplorer:i=>p("hideExplorer",i),hideNavigation:i=>p("hideNavigation",i),openFile:i=>O("file",i),showSidebar:i=>C("showSidebar",i),sidebarView:i=>f("sidebarView",i,M),startScript:i=>O("startScript",i),terminalHeight:i=>T("terminalHeight",i),theme:i=>f("theme",i,x),view:i=>f("view",i,N),zenMode:i=>p("zenMode",i)};function R(i={}){const r=Object.entries(i).map(([t,o])=>o!=null&&A.hasOwnProperty(t)?A[t](o):"").filter(Boolean);return r.length?`?${r.join("&")}`:""}function p(i,r){return r===!0?`${i}=1`:""}function C(i,r){return typeof r=="boolean"?`${i}=${r?"1":"0"}`:""}function T(i,r){if(typeof r=="number"&&!Number.isNaN(r)){const t=Math.min(100,Math.max(0,r));return`${i}=${encodeURIComponent(Math.round(t))}`}return""}function f(i,r="",t=[]){return t.includes(r)?`${i}=${encodeURIComponent(r)}`:""}function O(i,r){return(Array.isArray(r)?r:[r]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${i}=${encodeURIComponent(o)}`).join("&")}function L(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function v(i,r){return`${V(r)}${i}${R(r)}`}function b(i,r){const t={forceEmbedLayout:!0};return r&&typeof r=="object"&&Object.assign(t,r),`${V(t)}${i}${R(t)}`}function V(i={}){return(typeof i.origin=="string"?i.origin:k).replace(/\/$/,"")}function P(i,r,t){if(!r||!i||!i.parentNode)throw new Error("Invalid Element");i.id&&(r.id=i.id),i.className&&(r.className=i.className),U(r,t),i.replaceWith(r)}function g(i){if(typeof i=="string"){const r=document.getElementById(i);if(!r)throw new Error(`Could not find element with id '${i}'`);return r}else if(i instanceof HTMLElement)return i;throw new Error(`Invalid element: ${i}`)}function D(i){return i&&i.newWindow===!1?"_self":"_blank"}function U(i,r={}){const t=Object.hasOwnProperty.call(r,"height")?`${r.height}`:`${$}`,o=Object.hasOwnProperty.call(r,"width")?`${r.width}`:void 0;i.setAttribute("height",t),o?i.setAttribute("width",o):i.setAttribute("style","width:100%;")}class F{constructor(r){this.pending={},this.port=r,this.port.onmessage=this.messageListener.bind(this)}request({type:r,payload:t}){return new Promise((o,s)=>{const a=L();this.pending[a]={resolve:o,reject:s},this.port.postMessage({type:r,payload:{...t,__reqid:a}})})}messageListener(r){var d;if(typeof((d=r.data.payload)==null?void 0:d.__reqid)!="string")return;const{type:t,payload:o}=r.data,{__reqid:s,__success:a,__error:l}=o;this.pending[s]&&(a?this.pending[s].resolve(this.cleanResult(o)):this.pending[s].reject(l?`${t}: ${l}`:t),delete this.pending[s])}cleanResult(r){const t={...r};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class W{constructor(r,t){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>(o==null?void 0:o.url)??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new F(r),Object.defineProperty(this.preview,"origin",{value:typeof t.previewOrigin=="string"?t.previewOrigin:null,writable:!1})}applyFsDiff(r){const t=o=>o!==null&&typeof o=="object";if(!t(r)||!t(r.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(r.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:r})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const c=[];class q{constructor(r){this.id=L(),this.element=r,this.pending=new Promise((t,o)=>{const s=({data:_,ports:m})=>{(_==null?void 0:_.action)==="SDK_INIT_SUCCESS"&&_.id===this.id&&(this.vm=new W(m[0],_.payload),t(this.vm),l())},a=()=>{var _;(_=this.element.contentWindow)==null||_.postMessage({action:"SDK_INIT",id:this.id},"*")};function l(){window.clearInterval(n),window.removeEventListener("message",s)}window.addEventListener("message",s),a();let d=0;const n=window.setInterval(()=>{if(this.vm){l();return}if(d>=w){l(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),c.forEach((_,m)=>{_.id===this.id&&c.splice(m,1)});return}d++,a()},S)}),c.push(this)}}const H=i=>{const r=i instanceof Element?"element":"id";return c.find(t=>t[r]===i)??null};function K(i,r){const t=document.createElement("input");return t.type="hidden",t.name=i,t.value=r,t}function B(i){return i.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function j({template:i,title:r,description:t,dependencies:o,files:s,settings:a}){if(!I.includes(i)){const _=I.map(m=>`'${m}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${_}`)}const l=[],d=(_,m,y="")=>{l.push(K(_,typeof m=="string"?m:y))};d("project[title]",r),typeof t=="string"&&t.length>0&&d("project[description]",t),d("project[template]",i,"javascript"),o&&(i==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):d("project[dependencies]",JSON.stringify(o))),a&&d("project[settings]",JSON.stringify(a)),Object.entries(s).forEach(([_,m])=>{d(`project[files][${B(_)}]`,m)});const n=document.createElement("form");return n.method="POST",n.setAttribute("style","display:none!important;"),n.append(...l),n}function J(i,r){const t=j(i);return t.action=b("/run",r),t.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${t.outerHTML}
  <script>document.getElementById('${t.id}').submit();<\/script>
</body>
</html>`}function G(i,r){const t=j(i);t.action=v("/run",r),t.target=D(r),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}function h(i){return i!=null&&i.contentWindow?(H(i)??new q(i)).pending:Promise.reject("Provided element is not an iframe.")}function z(i,r){G(i,r)}function X(i,r){const t=v(`/edit/${i}`,r),o=D(r);window.open(t,o)}function Y(i,r){const t=v(`/github/${i}`,r),o=D(r);window.open(t,o)}function Q(i,r,t){var l;const o=g(i),s=J(r,t),a=document.createElement("iframe");return P(o,a,t),(l=a.contentDocument)==null||l.write(s),h(a)}function Z(i,r,t){const o=g(i),s=document.createElement("iframe");return s.src=b(`/edit/${r}`,t),P(o,s,t),h(s)}function tt(i,r,t){const o=g(i),s=document.createElement("iframe");return s.src=b(`/github/${r}`,t),P(o,s,t),h(s)}const et={connect:h,embedGithubProject:tt,embedProject:Q,embedProjectId:Z,openGithubProject:Y,openProject:z,openProjectId:X},u=(i,r="",t)=>async o=>{await Promise.all(Object.keys(i).map(async s=>{const a=r+(t&&s.startsWith(t)?s.substring(t.length):s);o.files[a]=await i[s]()}))},E={angular:[u(Object.assign({"./angular/angular.json":()=>e(()=>import("./angular.3603f7b0.js"),[],import.meta.url).then(i=>i.default),"./angular/index.html":()=>e(()=>import("./index.b0b8c4e5.js"),[],import.meta.url).then(i=>i.default),"./angular/package.json":()=>e(()=>import("./package.800a9f7d.js"),[],import.meta.url).then(i=>i.default),"./angular/src/polyfills.ts":()=>e(()=>import("./polyfills.ca93877f.js"),[],import.meta.url).then(i=>i.default),"./angular/src/raw-loader.d.ts":()=>e(()=>import("./raw-loader.d.af52f768.js"),[],import.meta.url).then(i=>i.default),"./angular/tsconfig.json":()=>e(()=>import("./tsconfig.410825bf.js"),[],import.meta.url).then(i=>i.default)}),"","./angular/"),async(i,r)=>{i.files["src/main.ts"]=`import {bootstrapApplication} from '@angular/platform-browser';
import MainComponent from './${r.files.angular.entryPoint.replace(/\.ts$/,"")}';
bootstrapApplication(MainComponent).catch((err) => console.error(err));`}],react:[u(Object.assign({"./react/index.html":()=>e(()=>import("./index.1063d445.js"),[],import.meta.url).then(i=>i.default),"./react/package.json":()=>e(()=>import("./package.b1d7640f.js"),[],import.meta.url).then(i=>i.default),"./react/src/vite-env.d.ts":()=>e(()=>import("./vite-env.d.7838e369.js"),[],import.meta.url).then(i=>i.default),"./react/tsconfig.json":()=>e(()=>import("./tsconfig.6bbdde4a.js"),[],import.meta.url).then(i=>i.default),"./react/vite.config.ts":()=>e(()=>import("./vite.config.9d6850ed.js"),[],import.meta.url).then(i=>i.default)}),"","./react/"),async(i,r)=>{i.files["src/main.tsx"]=`import {createRoot} from "react-dom/client";
import App from ${JSON.stringify(`./${r.files.react.entryPoint.replace(/\.tsx?$/,"")}`)};
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />)`}],svelte:[u(Object.assign({"./svelte/index.html":()=>e(()=>import("./index.637f3b0f.js"),[],import.meta.url).then(i=>i.default),"./svelte/package.json":()=>e(()=>import("./package.c0f69be3.js"),[],import.meta.url).then(i=>i.default),"./svelte/src/vite-env.d.ts":()=>e(()=>import("./vite-env.d.2f957e98.js"),[],import.meta.url).then(i=>i.default),"./svelte/svelte.config.js":()=>e(()=>import("./svelte.config.1307a686.js"),[],import.meta.url).then(i=>i.default),"./svelte/tsconfig.json":()=>e(()=>import("./tsconfig.f25b7c9b.js"),[],import.meta.url).then(i=>i.default),"./svelte/vite.config.ts":()=>e(()=>import("./vite.config.17a73b3a.js"),[],import.meta.url).then(i=>i.default)}),"","./svelte/"),async(i,r)=>{i.files["src/main.ts"]=`import App from ${JSON.stringify(`./${r.files.svelte.entryPoint}`)};
const app = new App({target: document.getElementById('root')});
export default app;`,i.template="node"}]};{const i=async({files:t})=>{const o=JSON.parse(t["package.json"]);for(const s of Object.keys(t))if(s.startsWith("packages/")&&s.endsWith("/package.json")){const a=JSON.parse(t[s]);o.devDependencies[a.name]=`file:./packages/${a.name}`;for(const l of Object.keys(a.dependencies))t[`packages/${l}/package.json`]||(o.devDependencies[l]=a.dependencies[l])}t["package.json"]=JSON.stringify(o,null,"	")},r=u(Object.assign({"../../../../core/dist/lib/README.md":()=>e(()=>import("./README.58b847c0.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/accordion.d.ts":()=>e(()=>import("./accordion.d.cac13201.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/accordion.js":()=>e(()=>import("./accordion.91d7be19.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/alert.d.ts":()=>e(()=>import("./alert.d.49b1c3f5.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/alert.js":()=>e(()=>import("./alert.164ec7b4.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/commonProps.d.ts":()=>e(()=>import("./commonProps.d.b26bee18.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/commonProps.js":()=>e(()=>import("./commonProps.40c5e49c.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/config.d.ts":()=>e(()=>import("./config.d.ddd5ebb0.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/config.js":()=>e(()=>import("./config.11c7bd02.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/index.d.ts":()=>e(()=>import("./index.d.c2110e30.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/index.js":()=>e(()=>import("./index.c2110e30.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/modal/modal.d.ts":()=>e(()=>import("./modal.d.6083e104.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/modal/modal.js":()=>e(()=>import("./modal.3cc8e99a.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/modal/scrollbars.d.ts":()=>e(()=>import("./scrollbars.d.0d4a88cc.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/modal/scrollbars.js":()=>e(()=>import("./scrollbars.eb65c898.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/package.json":()=>e(()=>import("./package.e38dd562.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/pagination.d.ts":()=>e(()=>import("./pagination.d.84eafb41.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/pagination.js":()=>e(()=>import("./pagination.e1be5e07.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/pagination.utils.d.ts":()=>e(()=>import("./pagination.utils.d.e7e212c6.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/pagination.utils.js":()=>e(()=>import("./pagination.utils.47c1e435.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/rating.d.ts":()=>e(()=>import("./rating.d.3d806de6.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/rating.js":()=>e(()=>import("./rating.97c5728f.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/select.d.ts":()=>e(()=>import("./select.d.8e615314.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/select.js":()=>e(()=>import("./select.13fa8a43.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/checks.d.ts":()=>e(()=>import("./checks.d.94efa04d.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/checks.js":()=>e(()=>import("./checks.f1c5717a.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/directiveUtils.d.ts":()=>e(()=>import("./directiveUtils.d.ebf41e2b.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/directiveUtils.js":()=>e(()=>import("./directiveUtils.2419bd03.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/focustrack.d.ts":()=>e(()=>import("./focustrack.d.dedf8e96.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/focustrack.js":()=>e(()=>import("./focustrack.830ce8dc.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/index.d.ts":()=>e(()=>import("./index.d.e73945d6.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/index.js":()=>e(()=>import("./index.e73945d6.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/intersection.d.ts":()=>e(()=>import("./intersection.d.5206754b.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/intersection.js":()=>e(()=>import("./intersection.230d25cf.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/portal.d.ts":()=>e(()=>import("./portal.d.40fba5bf.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/portal.js":()=>e(()=>import("./portal.5385bde1.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/siblingsInert.d.ts":()=>e(()=>import("./siblingsInert.d.9e14ff96.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/siblingsInert.js":()=>e(()=>import("./siblingsInert.150f0d58.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/stores.d.ts":()=>e(()=>import("./stores.d.4b622f5a.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/stores.js":()=>e(()=>import("./stores.3684a3b9.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/writables.d.ts":()=>e(()=>import("./writables.d.dc851d34.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/writables.js":()=>e(()=>import("./writables.2c501414.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/baseTransitions.d.ts":()=>e(()=>import("./baseTransitions.d.858d0820.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/baseTransitions.js":()=>e(()=>import("./baseTransitions.a0773383.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/collapse.d.ts":()=>e(()=>import("./collapse.d.3013c3a8.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/collapse.js":()=>e(()=>import("./collapse.296b7854.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/fade.d.ts":()=>e(()=>import("./fade.d.770fba58.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/fade.js":()=>e(()=>import("./fade.ef8512e3.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/index.d.ts":()=>e(()=>import("./index.d.f1668404.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/index.js":()=>e(()=>import("./index.f1668404.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/collapse.d.ts":()=>e(()=>import("./collapse.d.cd17647f.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/collapse.js":()=>e(()=>import("./collapse.74a41b72.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/cssTransitions.d.ts":()=>e(()=>import("./cssTransitions.d.9df3b2ef.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/cssTransitions.js":()=>e(()=>import("./cssTransitions.4e7c08ed.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/index.d.ts":()=>e(()=>import("./index.d.62354d15.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/index.js":()=>e(()=>import("./index.62354d15.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/simpleClassTransition.d.ts":()=>e(()=>import("./simpleClassTransition.d.5a59147d.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/simpleClassTransition.js":()=>e(()=>import("./simpleClassTransition.a85d0742.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/utils.d.ts":()=>e(()=>import("./utils.d.637f4088.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/utils.js":()=>e(()=>import("./utils.67181d66.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/types.d.ts":()=>e(()=>import("./types.d.a5cd1d02.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/types.js":()=>e(()=>import("./types.be831c47.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/utils.d.ts":()=>e(()=>import("./utils.d.b64ff8f8.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/utils.js":()=>e(()=>import("./utils.d55a9b72.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/core/","../../../../core/dist/lib/");E.angular.push(r,u(Object.assign({"../../../../angular/dist/headless/README.md":()=>e(()=>import("./README.e6792552.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/esm2022/agnos-ui-angular-headless.mjs":()=>e(()=>import("./agnos-ui-angular-headless.ea0299c7.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/esm2022/lib/slot.directive.mjs":()=>e(()=>import("./slot.directive.feaba4c0.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/esm2022/lib/slotDefault.directive.mjs":()=>e(()=>import("./slotDefault.directive.86152ce3.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/esm2022/lib/use.directive.mjs":()=>e(()=>import("./use.directive.eda7f612.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/esm2022/lib/utils.mjs":()=>e(()=>import("./utils.6207ee6b.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/esm2022/public-api.mjs":()=>e(()=>import("./public-api.462d2f04.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/fesm2022/agnos-ui-angular-headless.mjs":()=>e(()=>import("./agnos-ui-angular-headless.fed8bfec.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/index.d.ts":()=>e(()=>import("./index.d.c9bd3621.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/lib/slot.directive.d.ts":()=>e(()=>import("./slot.directive.d.cc9283fe.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/lib/slotDefault.directive.d.ts":()=>e(()=>import("./slotDefault.directive.d.a556fa98.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/lib/use.directive.d.ts":()=>e(()=>import("./use.directive.d.ee7872d1.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/lib/utils.d.ts":()=>e(()=>import("./utils.d.68aee7c3.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/package.json":()=>e(()=>import("./package.48128d5e.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/headless/public-api.d.ts":()=>e(()=>import("./public-api.d.5bb01a69.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/angular-headless/","../../../../angular/dist/headless/"),u(Object.assign({"../../../../angular/dist/lib/README.md":()=>e(()=>import("./README.6340ebac.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/agnos-ui-angular.mjs":()=>e(()=>import("./agnos-ui-angular.011e2c28.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/accordion/accordion.component.mjs":()=>e(()=>import("./accordion.component.85a147c0.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/agnos-ui-angular.module.mjs":()=>e(()=>import("./agnos-ui-angular.module.80bd6939.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/alert/alert.component.mjs":()=>e(()=>import("./alert.component.a492e772.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/modal/modal.component.mjs":()=>e(()=>import("./modal.component.e1f403ee.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/modal/modal.service.mjs":()=>e(()=>import("./modal.service.178e3b5c.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/pagination/pagination.component.mjs":()=>e(()=>import("./pagination.component.56a97a40.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/rating/rating.component.mjs":()=>e(()=>import("./rating.component.ab0e146f.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/select/select.component.mjs":()=>e(()=>import("./select.component.a4f40801.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/public-api.mjs":()=>e(()=>import("./public-api.4dc18685.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/fesm2022/agnos-ui-angular.mjs":()=>e(()=>import("./agnos-ui-angular.d10f8a87.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/index.d.ts":()=>e(()=>import("./index.d.86b79f99.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/accordion/accordion.component.d.ts":()=>e(()=>import("./accordion.component.d.4ccd12f2.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/agnos-ui-angular.module.d.ts":()=>e(()=>import("./agnos-ui-angular.module.d.94ab242c.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/alert/alert.component.d.ts":()=>e(()=>import("./alert.component.d.9cee30dc.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/modal/modal.component.d.ts":()=>e(()=>import("./modal.component.d.beb9fd64.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/modal/modal.service.d.ts":()=>e(()=>import("./modal.service.d.e709784e.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/pagination/pagination.component.d.ts":()=>e(()=>import("./pagination.component.d.cd77e7bc.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/rating/rating.component.d.ts":()=>e(()=>import("./rating.component.d.6a1ab351.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/select/select.component.d.ts":()=>e(()=>import("./select.component.d.b3ea374f.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/package.json":()=>e(()=>import("./package.9a738c03.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/public-api.d.ts":()=>e(()=>import("./public-api.d.7e3f690c.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/angular/","../../../../angular/dist/lib/"),i),E.react.push(r,u(Object.assign({"../../../../react/dist/headless/Portal.d.ts":()=>e(()=>import("./Portal.d.f413165a.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/Portal.js":()=>e(()=>import("./Portal.a6cafcab.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/README.md":()=>e(()=>import("./README.119b7a6d.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/Slot.d.ts":()=>e(()=>import("./Slot.d.47650b85.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/Slot.js":()=>e(()=>import("./Slot.83ed8c16.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/WidgetsDefaultConfig.d.ts":()=>e(()=>import("./WidgetsDefaultConfig.d.d8768e94.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/WidgetsDefaultConfig.js":()=>e(()=>import("./WidgetsDefaultConfig.45af1382.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/index.d.ts":()=>e(()=>import("./index.d.54d0a448.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/index.js":()=>e(()=>import("./index.d8a638c8.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/package.json":()=>e(()=>import("./package.3a52ead2.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/utils.d.ts":()=>e(()=>import("./utils.d.be3d3049.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/headless/utils.js":()=>e(()=>import("./utils.ed374d31.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/react-headless/","../../../../react/dist/headless/"),u(Object.assign({"../../../../react/dist/lib/Accordion.d.ts":()=>e(()=>import("./Accordion.d.7dad5175.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Accordion.js":()=>e(()=>import("./Accordion.1e0c7378.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Alert.d.ts":()=>e(()=>import("./Alert.d.a3f1292b.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Alert.js":()=>e(()=>import("./Alert.fc59fef5.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/README.md":()=>e(()=>import("./README.35c9ee67.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Rating.d.ts":()=>e(()=>import("./Rating.d.7871ca9b.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Rating.js":()=>e(()=>import("./Rating.4fffae85.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Select.d.ts":()=>e(()=>import("./Select.d.83e385bf.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Select.js":()=>e(()=>import("./Select.2680deae.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/index.d.ts":()=>e(()=>import("./index.d.566926d0.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/index.js":()=>e(()=>import("./index.566926d0.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/modal/Modal.d.ts":()=>e(()=>import("./Modal.d.01007b6e.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/modal/Modal.js":()=>e(()=>import("./Modal.1dfb2664.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/modal/modalService.d.ts":()=>e(()=>import("./modalService.d.e47b3fa5.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/modal/modalService.js":()=>e(()=>import("./modalService.5aebcf71.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/package.json":()=>e(()=>import("./package.b12f4f5c.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/pagination/PageItem.d.ts":()=>e(()=>import("./PageItem.d.a9c5e7c6.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/pagination/PageItem.js":()=>e(()=>import("./PageItem.10ca2de9.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/pagination/Pagination.d.ts":()=>e(()=>import("./Pagination.d.f62b8b8e.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/pagination/Pagination.js":()=>e(()=>import("./Pagination.a09e61f9.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/react/","../../../../react/dist/lib/"),i),E.svelte.push(r,u(Object.assign({"../../../../svelte/dist/headless/README.md":()=>e(()=>import("./README.66804e13.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/headless/Slot.svelte":()=>e(()=>import("./Slot.16edbf50.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/headless/Slot.svelte.d.ts":()=>e(()=>import("./Slot.svelte.d.d49e714f.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/headless/index.d.ts":()=>e(()=>import("./index.d.73515a12.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/headless/index.js":()=>e(()=>import("./index.ef1b9286.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/headless/package.json":()=>e(()=>import("./package.e111ab6a.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/headless/utils.d.ts":()=>e(()=>import("./utils.d.a16809b5.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/headless/utils.js":()=>e(()=>import("./utils.d019867f.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/svelte-headless/","../../../../svelte/dist/headless/"),u(Object.assign({"../../../../svelte/dist/lib/README.md":()=>e(()=>import("./README.7c4b3da7.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/Accordion.svelte":()=>e(()=>import("./Accordion.6be5b9ff.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/Item.svelte":()=>e(()=>import("./Item.fca641d6.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/ItemDefaultStructure.svelte":()=>e(()=>import("./ItemDefaultStructure.8783b68f.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/ItemDefaultStructure.svelte.d.ts":()=>e(()=>import("./ItemDefaultStructure.svelte.d.0ea4a0ae.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/accordion.d.ts":()=>e(()=>import("./accordion.d.825c865c.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/accordion.js":()=>e(()=>import("./accordion.985b1aad.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/alert/Alert.svelte":()=>e(()=>import("./Alert.f31b9985.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/alert/AlertDefaultStructure.svelte":()=>e(()=>import("./AlertDefaultStructure.ba96b7d1.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/alert/AlertDefaultStructure.svelte.d.ts":()=>e(()=>import("./AlertDefaultStructure.svelte.d.927e9206.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/index.d.ts":()=>e(()=>import("./index.d.0bf627a5.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/index.js":()=>e(()=>import("./index.0bf627a5.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/Modal.svelte":()=>e(()=>import("./Modal.9c246c86.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/ModalDefaultHeader.svelte":()=>e(()=>import("./ModalDefaultHeader.1d8da949.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/ModalDefaultHeader.svelte.d.ts":()=>e(()=>import("./ModalDefaultHeader.svelte.d.3f84ecfa.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/ModalDefaultStructure.svelte":()=>e(()=>import("./ModalDefaultStructure.ac2d237f.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/ModalDefaultStructure.svelte.d.ts":()=>e(()=>import("./ModalDefaultStructure.svelte.d.f0d2188c.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/modalService.d.ts":()=>e(()=>import("./modalService.d.7087f0b3.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/modalService.js":()=>e(()=>import("./modalService.402676e8.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/package.json":()=>e(()=>import("./package.3710a73d.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/pagination/Pagination.svelte":()=>e(()=>import("./Pagination.28bab763.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/pagination/PaginationDefaultPages.svelte":()=>e(()=>import("./PaginationDefaultPages.48acf872.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/pagination/PaginationDefaultPages.svelte.d.ts":()=>e(()=>import("./PaginationDefaultPages.svelte.d.f2d36bf3.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/rating/Rating.svelte":()=>e(()=>import("./Rating.09a43c50.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/select/Select.svelte":()=>e(()=>import("./Select.1f752755.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/select/Select.svelte.d.ts":()=>e(()=>import("./Select.svelte.d.c44e7250.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/svelte/","../../../../svelte/dist/lib/"),i)}const rt=async(i,r)=>{const t={title:`AgnosUI ${r} demo - ${i.componentName} - ${i.sampleName}`,files:{},template:"node"},o=i.files[r],{entryPoint:s,files:a}=o,l=[u(a,"src/"),...E[r]];for(const n of l)await n(t,i,r);const d=[s,...Object.keys(a).filter(n=>n!=s)].map(n=>`src/${n}`).join(",");et.openProject(t,{newWindow:!0,openFile:d})};export{rt as openInStackblitz};
