"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[759],{3759:(E,g,a)=>{a.r(g),a.d(g,{default:()=>u});var i=a(1002),m=a(3969),r=a(6323),l=a(6442);const c=["widget"],d=(0,r.aX)((0,m.z)());let u=(()=>{class f{constructor(){(0,r.ez)(p=>{this.widget?._widget.patch({...d,...p})})}static#t=this.\u0275fac=function(t){return new(t||f)};static#e=this.\u0275cmp=l.Xpm({type:f,selectors:[["ng-component"]],viewQuery:function(t,C){if(1&t&&l.Gf(c,5),2&t){let D;l.iGM(D=l.CRH())&&(C.widget=D.first)}},standalone:!0,features:[l._Bn((0,r.mJ)("progressbar")),l.jDz],decls:2,vars:0,consts:[["auProgressbar",""],["widget",""]],template:function(t,C){1&t&&l._UZ(0,"div",0,1)},dependencies:[i.O1],encapsulation:2})}return f})()},3928:(E,g,a)=>{a.d(g,{i:()=>m});var i=a(6442);let m=(()=>{class r{constructor(){this.templateRef=(0,i.f3M)(i.Rgc)}ngOnInit(){this.auSlotDefault.update(c=>({...c,slotDefault:this.templateRef}))}static#t=this.\u0275fac=function(d){return new(d||r)};static#e=this.\u0275dir=i.lG2({type:r,selectors:[["","auSlotDefault",""]],inputs:{auSlotDefault:"auSlotDefault"},standalone:!0})}return r})()},1002:(E,g,a)=>{a.d(g,{HT:()=>P,O1:()=>W});var i=a(8176),m=a(1358),r=a(267),l=a(1756),c=a(5261),d=a(1177),u=a(9844),f=a(3928),v=a(7947),p=a(6289),t=a(6442);const C=["content"];function D(e,_){}const M=(e,_)=>({state:e,widget:_});function T(e,_){if(1&e&&(t.TgZ(0,"div",2)(1,"div",3),t.YNc(2,D,0,0,"ng-template",4),t.qZA()()),2&e){const s=_.state,n=_.widget;t.Udp("height",s.height),t.xp6(1),t.Udp("width",s.percentage,"%"),t.ekj("progress-bar-striped",s.striped)("progress-bar-animated",s.animated),t.Q6J("ngClass",s.className),t.xp6(1),t.Q6J("auSlot",s.slotDefault)("auSlotProps",t.WLB(11,M,s,n))}}const S=["auProgressbar",""];function B(e,_){1&e&&t.Hsn(0)}function R(e,_){}const A=["*"];let P=(()=>{class e{constructor(){this.templateRef=(0,t.f3M)(t.Rgc)}static ngTemplateContextGuard(s,n){return!0}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275dir=t.lG2({type:e,selectors:[["ng-template","auProgressbarContent",""]],standalone:!0})}return e})();const U={slotContent:new m.T((()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(n,o){if(1&n&&t.Gf(C,7),2&n){let h;t.iGM(h=t.CRH())&&(o.content=h.first)}},standalone:!0,features:[t.jDz],decls:2,vars:0,consts:[["auProgressbarContent",""],["content",""],[1,"progress"],[1,"progress-bar",3,"ngClass"],[3,"auSlot","auSlotProps"]],template:function(n,o){1&n&&t.YNc(0,T,3,14,"ng-template",0,1,t.W1O)},dependencies:[p.mk,i.N,P],encapsulation:2,changeDetection:0})}return e})(),"content")};let W=(()=>{class e{constructor(){this.defaultSlots=(0,v.fZ)(U),this._widget=(0,r.B)({factory:l.HU,widgetName:"progressbar",defaultConfig:this.defaultSlots,events:{}}),this.widget=(0,c.K)(this._widget),this.api=this._widget.api,this.state=(0,d.u6)(this._widget.state$)}ngAfterContentChecked(){this._widget.patch({slotContent:this.slotContentFromContent?.templateRef})}ngOnChanges(s){(0,d.YW)(this._widget.patch,s)}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["","auProgressbar",""]],contentQueries:function(n,o,h){if(1&n&&t.Suo(h,P,5),2&n){let O;t.iGM(O=t.CRH())&&(o.slotContentFromContent=O.first)}},hostAttrs:["role","progressbar"],hostVars:5,hostBindings:function(n,o){2&n&&t.uIk("aria-label",o.state().ariaLabel||void 0)("aria-valuenow",o.state().value)("aria-valuemin",o.state().min)("aria-valuemax",o.state().max)("aria-valuetext",o.state().ariaValueText)},inputs:{ariaLabel:["auAriaLabel","ariaLabel"],min:["auMin","min",u.B],max:["auMax","max",u.B],value:["auValue","value",u.B],className:["auClassName","className"],slotDefault:["auSlotDefault","slotDefault"],slotContent:["auSlotContent","slotContent"],height:["auHeight","height"],animated:["auAnimated","animated",u.P],striped:["auStriped","striped",u.P],ariaValueTextFn:["auAriaValueTextFn","ariaValueTextFn"]},standalone:!0,features:[t.Xq5,t.TTD,t.jDz],attrs:S,ngContentSelectors:A,decls:2,vars:6,consts:[[3,"auSlotDefault"],[3,"auSlot","auSlotProps"]],template:function(n,o){1&n&&(t.F$t(),t.YNc(0,B,1,0,"ng-template",0)(1,R,0,0,"ng-template",1)),2&n&&(t.Q6J("auSlotDefault",o.defaultSlots),t.xp6(1),t.Q6J("auSlot",o.state().slotContent)("auSlotProps",t.WLB(3,M,o.state(),o.widget)))},dependencies:[i.N,f.i],encapsulation:2,changeDetection:0})}return e})()}}]);