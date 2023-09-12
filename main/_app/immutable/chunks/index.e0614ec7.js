import{_ as e}from"./preload-helper.a4192956.js";const S=500,w=20,$=300,k="https://stackblitz.com",g=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],M=["project","search","ports","settings"],N=["light","dark"],C=["editor","preview"],T={clickToLoad:i=>p("ctl",i),devToolsHeight:i=>A("devtoolsheight",i),forceEmbedLayout:i=>p("embed",i),hideDevTools:i=>p("hidedevtools",i),hideExplorer:i=>p("hideExplorer",i),hideNavigation:i=>p("hideNavigation",i),openFile:i=>O("file",i),showSidebar:i=>x("showSidebar",i),sidebarView:i=>v("sidebarView",i,M),startScript:i=>O("startScript",i),terminalHeight:i=>A("terminalHeight",i),theme:i=>v("theme",i,N),view:i=>v("view",i,C),zenMode:i=>p("zenMode",i)};function R(i={}){const r=Object.entries(i).map(([t,o])=>o!=null&&T.hasOwnProperty(t)?T[t](o):"").filter(Boolean);return r.length?`?${r.join("&")}`:""}function p(i,r){return r===!0?`${i}=1`:""}function x(i,r){return typeof r=="boolean"?`${i}=${r?"1":"0"}`:""}function A(i,r){if(typeof r=="number"&&!Number.isNaN(r)){const t=Math.min(100,Math.max(0,r));return`${i}=${encodeURIComponent(Math.round(t))}`}return""}function v(i,r="",t=[]){return t.includes(r)?`${i}=${encodeURIComponent(r)}`:""}function O(i,r){return(Array.isArray(r)?r:[r]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${i}=${encodeURIComponent(o)}`).join("&")}function L(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function h(i,r){return`${V(r)}${i}${R(r)}`}function b(i,r){const t={forceEmbedLayout:!0};return r&&typeof r=="object"&&Object.assign(t,r),`${V(t)}${i}${R(t)}`}function V(i={}){return(typeof i.origin=="string"?i.origin:k).replace(/\/$/,"")}function P(i,r,t){if(!r||!i||!i.parentNode)throw new Error("Invalid Element");i.id&&(r.id=i.id),i.className&&(r.className=i.className),U(r,t),i.replaceWith(r)}function I(i){if(typeof i=="string"){const r=document.getElementById(i);if(!r)throw new Error(`Could not find element with id '${i}'`);return r}else if(i instanceof HTMLElement)return i;throw new Error(`Invalid element: ${i}`)}function D(i){return i&&i.newWindow===!1?"_self":"_blank"}function U(i,r={}){const t=Object.hasOwnProperty.call(r,"height")?`${r.height}`:`${$}`,o=Object.hasOwnProperty.call(r,"width")?`${r.width}`:void 0;i.setAttribute("height",t),o?i.setAttribute("width",o):i.setAttribute("style","width:100%;")}class F{constructor(r){this.pending={},this.port=r,this.port.onmessage=this.messageListener.bind(this)}request({type:r,payload:t}){return new Promise((o,l)=>{const _=L();this.pending[_]={resolve:o,reject:l},this.port.postMessage({type:r,payload:{...t,__reqid:_}})})}messageListener(r){var n;if(typeof((n=r.data.payload)==null?void 0:n.__reqid)!="string")return;const{type:t,payload:o}=r.data,{__reqid:l,__success:_,__error:a}=o;this.pending[l]&&(_?this.pending[l].resolve(this.cleanResult(o)):this.pending[l].reject(a?`${t}: ${a}`:t),delete this.pending[l])}cleanResult(r){const t={...r};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class W{constructor(r,t){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>(o==null?void 0:o.url)??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new F(r),Object.defineProperty(this.preview,"origin",{value:typeof t.previewOrigin=="string"?t.previewOrigin:null,writable:!1})}applyFsDiff(r){const t=o=>o!==null&&typeof o=="object";if(!t(r)||!t(r.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(r.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:r})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const c=[];class q{constructor(r){this.id=L(),this.element=r,this.pending=new Promise((t,o)=>{const l=({data:s,ports:u})=>{(s==null?void 0:s.action)==="SDK_INIT_SUCCESS"&&s.id===this.id&&(this.vm=new W(u[0],s.payload),t(this.vm),a())},_=()=>{var s;(s=this.element.contentWindow)==null||s.postMessage({action:"SDK_INIT",id:this.id},"*")};function a(){window.clearInterval(d),window.removeEventListener("message",l)}window.addEventListener("message",l),_();let n=0;const d=window.setInterval(()=>{if(this.vm){a();return}if(n>=w){a(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),c.forEach((s,u)=>{s.id===this.id&&c.splice(u,1)});return}n++,_()},S)}),c.push(this)}}const H=i=>{const r=i instanceof Element?"element":"id";return c.find(t=>t[r]===i)??null};function K(i,r){const t=document.createElement("input");return t.type="hidden",t.name=i,t.value=r,t}function B(i){return i.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function j({template:i,title:r,description:t,dependencies:o,files:l,settings:_}){if(!g.includes(i)){const s=g.map(u=>`'${u}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${s}`)}const a=[],n=(s,u,y="")=>{a.push(K(s,typeof u=="string"?u:y))};n("project[title]",r),typeof t=="string"&&t.length>0&&n("project[description]",t),n("project[template]",i,"javascript"),o&&(i==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):n("project[dependencies]",JSON.stringify(o))),_&&n("project[settings]",JSON.stringify(_)),Object.entries(l).forEach(([s,u])=>{n(`project[files][${B(s)}]`,u)});const d=document.createElement("form");return d.method="POST",d.setAttribute("style","display:none!important;"),d.append(...a),d}function J(i,r){const t=j(i);return t.action=b("/run",r),t.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${t.outerHTML}
  <script>document.getElementById('${t.id}').submit();<\/script>
</body>
</html>`}function G(i,r){const t=j(i);t.action=h("/run",r),t.target=D(r),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}function f(i){return i!=null&&i.contentWindow?(H(i)??new q(i)).pending:Promise.reject("Provided element is not an iframe.")}function z(i,r){G(i,r)}function X(i,r){const t=h(`/edit/${i}`,r),o=D(r);window.open(t,o)}function Y(i,r){const t=h(`/github/${i}`,r),o=D(r);window.open(t,o)}function Q(i,r,t){var a;const o=I(i),l=J(r,t),_=document.createElement("iframe");return P(o,_,t),(a=_.contentDocument)==null||a.write(l),f(_)}function Z(i,r,t){const o=I(i),l=document.createElement("iframe");return l.src=b(`/edit/${r}`,t),P(o,l,t),f(l)}function tt(i,r,t){const o=I(i),l=document.createElement("iframe");return l.src=b(`/github/${r}`,t),P(o,l,t),f(l)}const et={connect:f,embedGithubProject:tt,embedProject:Q,embedProjectId:Z,openGithubProject:Y,openProject:z,openProjectId:X},m=(i,r="",t)=>async o=>{await Promise.all(Object.keys(i).map(async l=>{const _=r+(t&&l.startsWith(t)?l.substring(t.length):l);o.files[_]=await i[l]()}))},E={angular:[m(Object.assign({"./angular/angular.json":()=>e(()=>import("./angular.3603f7b0.js"),[],import.meta.url).then(i=>i.default),"./angular/index.html":()=>e(()=>import("./index.b0b8c4e5.js"),[],import.meta.url).then(i=>i.default),"./angular/package.json":()=>e(()=>import("./package.c54b8f36.js"),[],import.meta.url).then(i=>i.default),"./angular/src/polyfills.ts":()=>e(()=>import("./polyfills.ca93877f.js"),[],import.meta.url).then(i=>i.default),"./angular/src/raw-loader.d.ts":()=>e(()=>import("./raw-loader.d.af52f768.js"),[],import.meta.url).then(i=>i.default),"./angular/tsconfig.json":()=>e(()=>import("./tsconfig.410825bf.js"),[],import.meta.url).then(i=>i.default)}),"","./angular/"),async(i,r)=>{i.files["src/main.ts"]=`import {bootstrapApplication} from '@angular/platform-browser';
import MainComponent from './${r.files.angular.entryPoint.replace(/\.ts$/,"")}';
bootstrapApplication(MainComponent).catch((err) => console.error(err));`}],react:[m(Object.assign({"./react/index.html":()=>e(()=>import("./index.1063d445.js"),[],import.meta.url).then(i=>i.default),"./react/package.json":()=>e(()=>import("./package.fd4d265b.js"),[],import.meta.url).then(i=>i.default),"./react/src/vite-env.d.ts":()=>e(()=>import("./vite-env.d.7838e369.js"),[],import.meta.url).then(i=>i.default),"./react/tsconfig.json":()=>e(()=>import("./tsconfig.6bbdde4a.js"),[],import.meta.url).then(i=>i.default),"./react/vite.config.ts":()=>e(()=>import("./vite.config.9d6850ed.js"),[],import.meta.url).then(i=>i.default)}),"","./react/"),async(i,r)=>{i.files["src/main.tsx"]=`import {createRoot} from "react-dom/client";
import App from ${JSON.stringify(`./${r.files.react.entryPoint.replace(/\.tsx?$/,"")}`)};
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />)`}],svelte:[m(Object.assign({"./svelte/index.html":()=>e(()=>import("./index.637f3b0f.js"),[],import.meta.url).then(i=>i.default),"./svelte/package.json":()=>e(()=>import("./package.6abd8727.js"),[],import.meta.url).then(i=>i.default),"./svelte/src/vite-env.d.ts":()=>e(()=>import("./vite-env.d.2f957e98.js"),[],import.meta.url).then(i=>i.default),"./svelte/svelte.config.js":()=>e(()=>import("./svelte.config.1307a686.js"),[],import.meta.url).then(i=>i.default),"./svelte/tsconfig.json":()=>e(()=>import("./tsconfig.f25b7c9b.js"),[],import.meta.url).then(i=>i.default),"./svelte/vite.config.ts":()=>e(()=>import("./vite.config.17a73b3a.js"),[],import.meta.url).then(i=>i.default)}),"","./svelte/"),async(i,r)=>{i.files["src/main.ts"]=`import App from ${JSON.stringify(`./${r.files.svelte.entryPoint}`)};
const app = new App({target: document.getElementById('root')});
export default app;`,i.template="node"}]};{const i=async({files:t})=>{const o=JSON.parse(t["package.json"]);for(const l of Object.keys(t))if(l.startsWith("packages/")&&l.endsWith("/package.json")){const _=JSON.parse(t[l]);o.devDependencies[_.name]=`file:./packages/${_.name}`;for(const a of Object.keys(_.dependencies))t[`packages/${a}/package.json`]||(o.devDependencies[a]=_.dependencies[a])}t["package.json"]=JSON.stringify(o,null,"	")},r=m(Object.assign({"../../../../core/dist/lib/accordion.d.ts":()=>e(()=>import("./accordion.d.cac13201.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/accordion.js":()=>e(()=>import("./accordion.91d7be19.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/alert.d.ts":()=>e(()=>import("./alert.d.49b1c3f5.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/alert.js":()=>e(()=>import("./alert.164ec7b4.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/commonProps.d.ts":()=>e(()=>import("./commonProps.d.b26bee18.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/commonProps.js":()=>e(()=>import("./commonProps.40c5e49c.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/config.d.ts":()=>e(()=>import("./config.d.ddd5ebb0.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/config.js":()=>e(()=>import("./config.11c7bd02.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/index.d.ts":()=>e(()=>import("./index.d.c2110e30.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/index.js":()=>e(()=>import("./index.c2110e30.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/modal/modal.d.ts":()=>e(()=>import("./modal.d.6083e104.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/modal/modal.js":()=>e(()=>import("./modal.3cc8e99a.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/modal/scrollbars.d.ts":()=>e(()=>import("./scrollbars.d.0d4a88cc.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/modal/scrollbars.js":()=>e(()=>import("./scrollbars.eb65c898.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/pagination.d.ts":()=>e(()=>import("./pagination.d.717fef99.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/pagination.js":()=>e(()=>import("./pagination.e1e4c843.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/pagination.utils.d.ts":()=>e(()=>import("./pagination.utils.d.e7e212c6.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/pagination.utils.js":()=>e(()=>import("./pagination.utils.47c1e435.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/rating.d.ts":()=>e(()=>import("./rating.d.3d806de6.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/rating.js":()=>e(()=>import("./rating.97c5728f.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/select.d.ts":()=>e(()=>import("./select.d.8e615314.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/select.js":()=>e(()=>import("./select.13fa8a43.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/checks.d.ts":()=>e(()=>import("./checks.d.94efa04d.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/checks.js":()=>e(()=>import("./checks.f1c5717a.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/directiveUtils.d.ts":()=>e(()=>import("./directiveUtils.d.ebf41e2b.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/directiveUtils.js":()=>e(()=>import("./directiveUtils.2419bd03.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/focustrack.d.ts":()=>e(()=>import("./focustrack.d.dedf8e96.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/focustrack.js":()=>e(()=>import("./focustrack.830ce8dc.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/index.d.ts":()=>e(()=>import("./index.d.e73945d6.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/index.js":()=>e(()=>import("./index.e73945d6.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/intersection.d.ts":()=>e(()=>import("./intersection.d.5206754b.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/intersection.js":()=>e(()=>import("./intersection.230d25cf.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/portal.d.ts":()=>e(()=>import("./portal.d.40fba5bf.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/portal.js":()=>e(()=>import("./portal.5385bde1.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/siblingsInert.d.ts":()=>e(()=>import("./siblingsInert.d.9e14ff96.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/siblingsInert.js":()=>e(()=>import("./siblingsInert.150f0d58.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/stores.d.ts":()=>e(()=>import("./stores.d.4b622f5a.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/stores.js":()=>e(()=>import("./stores.3684a3b9.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/writables.d.ts":()=>e(()=>import("./writables.d.dc851d34.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/services/writables.js":()=>e(()=>import("./writables.2c501414.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/baseTransitions.d.ts":()=>e(()=>import("./baseTransitions.d.858d0820.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/baseTransitions.js":()=>e(()=>import("./baseTransitions.a0773383.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/collapse.d.ts":()=>e(()=>import("./collapse.d.3013c3a8.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/collapse.js":()=>e(()=>import("./collapse.296b7854.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/fade.d.ts":()=>e(()=>import("./fade.d.770fba58.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/fade.js":()=>e(()=>import("./fade.ef8512e3.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/index.d.ts":()=>e(()=>import("./index.d.f1668404.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/bootstrap/index.js":()=>e(()=>import("./index.f1668404.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/collapse.d.ts":()=>e(()=>import("./collapse.d.cd17647f.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/collapse.js":()=>e(()=>import("./collapse.74a41b72.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/cssTransitions.d.ts":()=>e(()=>import("./cssTransitions.d.9df3b2ef.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/cssTransitions.js":()=>e(()=>import("./cssTransitions.4e7c08ed.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/index.d.ts":()=>e(()=>import("./index.d.62354d15.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/index.js":()=>e(()=>import("./index.62354d15.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/simpleClassTransition.d.ts":()=>e(()=>import("./simpleClassTransition.d.5a59147d.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/simpleClassTransition.js":()=>e(()=>import("./simpleClassTransition.a85d0742.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/utils.d.ts":()=>e(()=>import("./utils.d.637f4088.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/transitions/utils.js":()=>e(()=>import("./utils.67181d66.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/tsdoc-metadata.json":()=>e(()=>import("./tsdoc-metadata.a76b4c5b.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/types.d.ts":()=>e(()=>import("./types.d.a5cd1d02.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/types.js":()=>e(()=>import("./types.be831c47.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/utils.d.ts":()=>e(()=>import("./utils.d.b64ff8f8.js"),[],import.meta.url).then(t=>t.default),"../../../../core/dist/lib/utils.js":()=>e(()=>import("./utils.d55a9b72.js"),[],import.meta.url).then(t=>t.default),"../../../../core/package.json":()=>e(()=>import("./package.639e5142.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/core/","../../../../core/");E.angular.push(r,m(Object.assign({"../../../../angular/dist/lib/README.md":()=>e(()=>import("./README.6340ebac.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/agnos-ui-angular.mjs":()=>e(()=>import("./agnos-ui-angular.011e2c28.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/accordion/accordion.component.mjs":()=>e(()=>import("./accordion.component.b32362f2.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/agnos-ui-angular.module.mjs":()=>e(()=>import("./agnos-ui-angular.module.6b0efc3b.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/alert/alert.component.mjs":()=>e(()=>import("./alert.component.7510a4c8.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/modal/modal.component.mjs":()=>e(()=>import("./modal.component.79e8cf50.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/modal/modal.service.mjs":()=>e(()=>import("./modal.service.7f1d6ff0.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/pagination/pagination.component.mjs":()=>e(()=>import("./pagination.component.4717e612.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/rating/rating.component.mjs":()=>e(()=>import("./rating.component.51bb5fa5.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/select/select.component.mjs":()=>e(()=>import("./select.component.16ef57a2.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/slot.directive.mjs":()=>e(()=>import("./slot.directive.d28579e0.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/slotDefault.directive.mjs":()=>e(()=>import("./slotDefault.directive.f739fa42.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/transition/use.directive.mjs":()=>e(()=>import("./use.directive.98e47f3d.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/lib/utils.mjs":()=>e(()=>import("./utils.cebcb0d8.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/esm2022/public-api.mjs":()=>e(()=>import("./public-api.d14e2421.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/fesm2022/agnos-ui-angular.mjs":()=>e(()=>import("./agnos-ui-angular.ddf059c3.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/index.d.ts":()=>e(()=>import("./index.d.86b79f99.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/accordion/accordion.component.d.ts":()=>e(()=>import("./accordion.component.d.934d73fe.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/agnos-ui-angular.module.d.ts":()=>e(()=>import("./agnos-ui-angular.module.d.65bb6a68.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/alert/alert.component.d.ts":()=>e(()=>import("./alert.component.d.e4fad904.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/modal/modal.component.d.ts":()=>e(()=>import("./modal.component.d.9d8f9ff4.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/modal/modal.service.d.ts":()=>e(()=>import("./modal.service.d.e6673de1.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/pagination/pagination.component.d.ts":()=>e(()=>import("./pagination.component.d.733b6895.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/rating/rating.component.d.ts":()=>e(()=>import("./rating.component.d.ab90b3f6.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/select/select.component.d.ts":()=>e(()=>import("./select.component.d.204cf305.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/slot.directive.d.ts":()=>e(()=>import("./slot.directive.d.0161fb5f.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/slotDefault.directive.d.ts":()=>e(()=>import("./slotDefault.directive.d.cd78c962.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/transition/use.directive.d.ts":()=>e(()=>import("./use.directive.d.ee7872d1.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/lib/utils.d.ts":()=>e(()=>import("./utils.d.f93bdbaf.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/package.json":()=>e(()=>import("./package.a3acadb5.js"),[],import.meta.url).then(t=>t.default),"../../../../angular/dist/lib/public-api.d.ts":()=>e(()=>import("./public-api.d.3fdea6b3.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/angular/","../../../../angular/dist/lib/"),i),E.react.push(r,m(Object.assign({"../../../../react/dist/lib/Accordion.d.ts":()=>e(()=>import("./Accordion.d.249944ce.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Accordion.js":()=>e(()=>import("./Accordion.4f433778.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Alert.d.ts":()=>e(()=>import("./Alert.d.7cedf829.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Alert.js":()=>e(()=>import("./Alert.0cc87a67.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Portal.d.ts":()=>e(()=>import("./Portal.d.f413165a.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Portal.js":()=>e(()=>import("./Portal.a6cafcab.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Rating.d.ts":()=>e(()=>import("./Rating.d.d1c241a4.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Rating.js":()=>e(()=>import("./Rating.6db33cb9.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Select.d.ts":()=>e(()=>import("./Select.d.85924ad7.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Select.js":()=>e(()=>import("./Select.5b43c129.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Slot.d.ts":()=>e(()=>import("./Slot.d.e24ea4b2.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/Slot.js":()=>e(()=>import("./Slot.83ed8c16.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/WidgetsDefaultConfig.d.ts":()=>e(()=>import("./WidgetsDefaultConfig.d.1842a1b7.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/WidgetsDefaultConfig.js":()=>e(()=>import("./WidgetsDefaultConfig.45af1382.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/index.d.ts":()=>e(()=>import("./index.d.bc895e6e.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/index.js":()=>e(()=>import("./index.bc895e6e.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/modal/Modal.d.ts":()=>e(()=>import("./Modal.d.21e256c7.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/modal/Modal.js":()=>e(()=>import("./Modal.d48f2a9c.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/modal/modalService.d.ts":()=>e(()=>import("./modalService.d.1c20e5ef.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/modal/modalService.js":()=>e(()=>import("./modalService.5aebcf71.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/pagination/PageItem.d.ts":()=>e(()=>import("./PageItem.d.a9c5e7c6.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/pagination/PageItem.js":()=>e(()=>import("./PageItem.10ca2de9.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/pagination/Pagination.d.ts":()=>e(()=>import("./Pagination.d.ca01644f.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/pagination/Pagination.js":()=>e(()=>import("./Pagination.cce940f4.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/utils.d.ts":()=>e(()=>import("./utils.d.d11a412c.js"),[],import.meta.url).then(t=>t.default),"../../../../react/dist/lib/utils.js":()=>e(()=>import("./utils.5b573f13.js"),[],import.meta.url).then(t=>t.default),"../../../../react/package.json":()=>e(()=>import("./package.f216f7d8.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/react/","../../../../react/"),i),E.svelte.push(r,m(Object.assign({"../../../../svelte/dist/lib/accordion/Accordion.svelte":()=>e(()=>import("./Accordion.db6fd3e3.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/Item.svelte":()=>e(()=>import("./Item.1553580c.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/ItemDefaultStructure.svelte":()=>e(()=>import("./ItemDefaultStructure.b5f0fda2.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/ItemDefaultStructure.svelte.d.ts":()=>e(()=>import("./ItemDefaultStructure.svelte.d.a446264e.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/accordion.d.ts":()=>e(()=>import("./accordion.d.c328cd48.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/accordion/accordion.js":()=>e(()=>import("./accordion.985b1aad.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/alert/Alert.svelte":()=>e(()=>import("./Alert.f15a2f76.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/alert/AlertDefaultStructure.svelte":()=>e(()=>import("./AlertDefaultStructure.2d8f5280.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/alert/AlertDefaultStructure.svelte.d.ts":()=>e(()=>import("./AlertDefaultStructure.svelte.d.a3119352.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/alert/alert.d.ts":()=>e(()=>import("./alert.d.7b8da576.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/alert/alert.js":()=>e(()=>import("./alert.159a48d2.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/index.d.ts":()=>e(()=>import("./index.d.bcaa6c27.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/index.js":()=>e(()=>import("./index.d505f0d7.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/Modal.svelte":()=>e(()=>import("./Modal.38766b9e.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/ModalDefaultHeader.svelte":()=>e(()=>import("./ModalDefaultHeader.f40def23.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/ModalDefaultHeader.svelte.d.ts":()=>e(()=>import("./ModalDefaultHeader.svelte.d.1ded25d9.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/ModalDefaultStructure.svelte":()=>e(()=>import("./ModalDefaultStructure.507f422d.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/ModalDefaultStructure.svelte.d.ts":()=>e(()=>import("./ModalDefaultStructure.svelte.d.5724f5cf.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/modal.d.ts":()=>e(()=>import("./modal.d.552eecfb.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/modal.js":()=>e(()=>import("./modal.40c5e49c.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/modalService.d.ts":()=>e(()=>import("./modalService.d.326120dc.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/modal/modalService.js":()=>e(()=>import("./modalService.402676e8.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/pagination/Pagination.svelte":()=>e(()=>import("./Pagination.2e77216f.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/pagination/PaginationDefaultPages.svelte":()=>e(()=>import("./PaginationDefaultPages.2561c7dc.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/pagination/PaginationDefaultPages.svelte.d.ts":()=>e(()=>import("./PaginationDefaultPages.svelte.d.eb884129.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/pagination/pagination.d.ts":()=>e(()=>import("./pagination.d.ecceae57.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/pagination/pagination.js":()=>e(()=>import("./pagination.159a48d2.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/rating/Rating.svelte":()=>e(()=>import("./Rating.f4c4cdbc.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/rating/rating.d.ts":()=>e(()=>import("./rating.d.f9e5ed0e.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/rating/rating.js":()=>e(()=>import("./rating.159a48d2.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/select/Select.svelte":()=>e(()=>import("./Select.b48b36b0.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/select/Select.svelte.d.ts":()=>e(()=>import("./Select.svelte.d.971428c4.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/select/select.d.ts":()=>e(()=>import("./select.d.540b9605.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/select/select.js":()=>e(()=>import("./select.323a570d.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/slot/Slot.svelte":()=>e(()=>import("./Slot.f418e50b.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/slot/Slot.svelte.d.ts":()=>e(()=>import("./Slot.svelte.d.2aafbd62.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/slot/slot.d.ts":()=>e(()=>import("./slot.d.0dc786f1.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/slot/slot.js":()=>e(()=>import("./slot.275d1713.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/utils.d.ts":()=>e(()=>import("./utils.d.1423f6f6.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/dist/lib/utils.js":()=>e(()=>import("./utils.4a204570.js"),[],import.meta.url).then(t=>t.default),"../../../../svelte/package.json":()=>e(()=>import("./package.8d059217.js"),[],import.meta.url).then(t=>t.default)}),"packages/@agnos-ui/svelte/","../../../../svelte/"),i)}const rt=async(i,r)=>{const t={title:`AgnosUI ${r} demo - ${i.componentName} - ${i.sampleName}`,files:{},template:"node"},o=i.files[r],{entryPoint:l,files:_}=o,a=[m(_,"src/"),...E[r]];for(const d of a)await d(t,i,r);const n=[l,...Object.keys(_).filter(d=>d!=l)].map(d=>`src/${d}`).join(",");et.openProject(t,{newWindow:!0,openFile:n})};export{rt as openInStackblitz};
