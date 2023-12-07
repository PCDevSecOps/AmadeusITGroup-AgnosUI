"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36],{2036:(v,g,o)=>{o.r(g),o.d(g,{default:()=>h});var C=o(4195),i=o(6442);let h=(()=>{class m{constructor(){this.wordsA=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],this.wordsB=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],this.wordsC=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],this.mainList=[...this.wordsA,...this.wordsB,...this.wordsC],this.items=this.mainList.slice(0,10)}onFilterTextChange(c){const r=this.mainList;this.items=c?r.filter(t=>t.toLowerCase().startsWith(c)):r.slice(0,10)}static#t=this.\u0275fac=function(r){return new(r||m)};static#e=this.\u0275cmp=i.Xpm({type:m,selectors:[["ng-component"]],standalone:!0,features:[i.jDz],decls:5,vars:2,consts:[[2,"height","400px"],[1,"mb-3"],[1,"form-label"],["auSelect","","auBadgeClassName","badge text-bg-light",3,"auItems","auFilterText","auFilterTextChange"]],template:function(r,t){1&r&&(i.TgZ(0,"div",0)(1,"div",1)(2,"label",2),i._uU(3,"Start typing with a, b or c"),i.qZA(),i.TgZ(4,"div",3),i.NdJ("auFilterTextChange",function(p){return t.onFilterTextChange(p)}),i.qZA()()()),2&r&&(i.xp6(4),i.Q6J("auItems",t.items)("auFilterText",t.filterText))},dependencies:[C.Hr],encapsulation:2})}return m})()},2389:(v,g,o)=>{o.d(g,{e:()=>h,r:()=>m});var C=o(7791),i=o(6442);const h=(l,c)=>{const r=(0,i.f3M)(i.SBq);let t=l?.(r.nativeElement,c);function x(){return p.apply(this,arguments)}function p(){return(p=(0,C.Z)(function*(){const d=t;t=void 0,l=void 0,d?.destroy&&(yield 0,d.destroy?.())})).apply(this,arguments)}function S(){return(S=(0,C.Z)(function*(d,f){d!==l?(x(),l=d,c=f,d&&(yield 0,l===d&&!t&&(t=l(r.nativeElement,c)))):f!=c&&(c=f,yield 0,t?.update?.(c))})).apply(this,arguments)}return(0,i.f3M)(i.ktI).onDestroy(x),{update:function b(d,f){return S.apply(this,arguments)}}};let m=(()=>{class l{#t=h();ngOnChanges(){this.#t.update(this.use,this.params)}static#e=this.\u0275fac=function(t){return new(t||l)};static#a=this.\u0275dir=i.lG2({type:l,selectors:[["","auUse",""]],inputs:{use:["auUse","use"],params:["auUseParams","params"]},standalone:!0,features:[i.TTD]})}return l})()},4195:(v,g,o)=>{o.d(g,{BS:()=>D,Hr:()=>M,bQ:()=>w});var C=o(267),i=o(1756),h=o(5261),m=o(1177),l=o(9844),c=o(2389),r=o(8176),t=o(6442);const x=["auSelect",""];function p(a,u){}const b=(a,u,e)=>({state:a,widget:u,itemContext:e});function S(a,u){if(1&a&&(t.TgZ(0,"div",3),t.YNc(1,p,0,0,"ng-template",4),t.qZA()),2&a){const e=u.$implicit,n=t.oxw(2),s=t.oxw();t.Tol(n.badgeClassName),t.xp6(1),t.Q6J("auSlot",n.slotBadgeLabel)("auSlotProps",t.kEZ(4,b,n,s.widget,e))}}function d(a,u){1&a&&t.SjG(0,S,2,8,"div",5,t.QCX().itemCtxTrackBy),2&a&&t.wJu(u)}function f(a,u){}function I(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"li",7),t.NdJ("click",function(){const _=t.CHM(e).$implicit,T=t.oxw(3);return t.KtG(T.widget.api.toggleItem(_.item))}),t.YNc(1,f,0,0,"ng-template",4),t.qZA()}if(2&a){const e=u.$implicit,n=t.oxw(2),s=t.oxw();t.ekj("bg-light",e===s.state$().highlighted)("selected",e.selected),t.xp6(1),t.Q6J("auSlot",n.slotItem)("auSlotProps",t.kEZ(6,b,n,s.widget,e))}}function E(a,u){if(1&a&&(t.TgZ(0,"ul",6),t.NdJ("mousedown",function(n){return n.preventDefault()}),t.SjG(1,I,2,10,"li",8,t.QCX().itemCtxTrackBy),t.qZA()),2&a){const e=t.oxw(2);t.Tol("dropdown-menu show "+(e.menuClassName||"")),t.Q6J("auUse",e._widget.directives.hasFocusDirective),t.xp6(1),t.wJu(e.state$().visibleItems)}}function y(a,u){if(1&a){const e=t.EpF();t.TgZ(0,"div",0),t.YNc(1,d,2,0),t.TgZ(2,"input",1),t.NdJ("keydown",function(s){t.CHM(e);const _=t.oxw();return t.KtG(_._widget.actions.onInputKeydown(s))})("input",function(s){t.CHM(e);const _=t.oxw();return t.KtG(_._widget.actions.onInput(s))}),t.qZA()(),t.YNc(3,E,3,3,"ul",2)}if(2&a){const e=t.oxw();let n;t.Q6J("auUse",e._widget.directives.hasFocusDirective),t.uIk("aria-expanded",u.open),t.xp6(1),t.um2(1,(n=u.selectedContexts)?1:-1,n),t.xp6(1),t.Q6J("value",e.state$().filterText),t.uIk("id",e.state$().id)("aria-label",e.state$().ariaLabel),t.xp6(1),t.um2(3,e.state$().open&&e.state$().visibleItems.length?3:-1)}}let w=(()=>{class a{constructor(){this.templateRef=(0,t.f3M)(t.Rgc)}static ngTemplateContextGuard(e,n){return!0}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275dir=t.lG2({type:a,selectors:[["ng-template","auSelectBadgeLabel",""]],standalone:!0})}return a})(),D=(()=>{class a{constructor(){this.templateRef=(0,t.f3M)(t.Rgc)}static ngTemplateContextGuard(e,n){return!0}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275dir=t.lG2({type:a,selectors:[["ng-template","auSelectItem",""]],standalone:!0})}return a})(),M=(()=>{class a{constructor(){this.filterTextChange=new t.vpe(!0),this.selectedChange=new t.vpe(!0),this.openChange=new t.vpe(!0),this._widget=(0,C.B)({factory:i.Em,widgetName:"select",events:{onOpenChange:e=>this.openChange.emit(e),onSelectedChange:e=>this.selectedChange.emit(e),onFilterTextChange:e=>this.filterTextChange.emit(e)}}),this.widget=(0,h.K)(this._widget),this.api=this._widget.api,this.state$=(0,m.u6)(this._widget.state$)}ngOnChanges(e){(0,m.YW)(this._widget.patch,e)}itemCtxTrackBy(e,n){return n.id}ngAfterContentChecked(){this._widget.patchSlots({slotBadgeLabel:this.slotSelectBadgeLabelFromContent?.templateRef,slotItem:this.slotSelectItemFromContent?.templateRef})}static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["","auSelect",""]],contentQueries:function(n,s,_){if(1&n&&(t.Suo(_,w,5),t.Suo(_,D,5)),2&n){let T;t.iGM(T=t.CRH())&&(s.slotSelectBadgeLabelFromContent=T.first),t.iGM(T=t.CRH())&&(s.slotSelectItemFromContent=T.first)}},hostVars:2,hostBindings:function(n,s){2&n&&t.Tol("au-select dropdown border border-1 p-1 mb-3 d-block"+s.state$().className)},inputs:{ariaLabel:["auAriaLabel","ariaLabel"],id:["auId","id"],items:["auItems","items"],open:["auOpen","open",l.P],filterText:["auFilterText","filterText"],className:["auClassName","className"],disabled:["auDisabled","disabled",l.P],selected:["auSelected","selected"],loading:["auLoading","loading",l.P],itemIdFn:["auItemIdFn","itemIdFn"],menuClassName:["auMenuClassName","menuClassName"],slotBadgeLabel:["auSlotBadgeLabel","slotBadgeLabel"],slotItem:["auSlotItem","slotItem"],menuItemClassName:["auMenuItemClassName","menuItemClassName"],badgeClassName:["auBadgeClassName","badgeClassName"]},outputs:{filterTextChange:"auFilterTextChange",selectedChange:"auSelectedChange",openChange:"auOpenChange"},standalone:!0,features:[t.Xq5,t.TTD,t.jDz],attrs:x,decls:1,vars:1,consts:[["role","combobox","aria-haspopup","listbox",1,"d-flex","align-items-center","flex-wrap",3,"auUse"],["type","text","aria-autocomplete","list","autoCorrect","off","autoCapitalize","none","autoComplete","off",1,"au-select-input","flex-grow-1","border-0",3,"value","keydown","input"],["data-popper-placement","bottom-start","data-bs-popper","static",3,"auUse","class"],[1,"au-select-badge","me-1"],[3,"auSlot","auSlotProps"],["class","au-select-badge me-1",3,"class"],["data-popper-placement","bottom-start","data-bs-popper","static",3,"auUse","mousedown"],[1,"au-select-item","dropdown-item","position-relative",3,"click"],["class","au-select-item dropdown-item position-relative",3,"bg-light","selected"]],template:function(n,s){if(1&n&&t.YNc(0,y,4,7),2&n){let _;t.um2(0,(_=s.widget.state$())?0:-1,_)}},dependencies:[c.r,r.N],encapsulation:2,changeDetection:0})}return a})()}}]);