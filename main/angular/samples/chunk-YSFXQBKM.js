import{H as C,I as _,J as x,L as S,Q as F,Z as R,ka as h}from"./chunk-JEZLBD2C.js";import{$a as p,Cb as l,Db as b,Eb as g,Jb as v,Ma as a,Ya as d,ba as c,db as u,gb as m,kb as e,lb as i,mb as f,rb as s}from"./chunk-P4PY4EJA.js";function E(o,t){o&1&&(e(0,"div",8),l(1,"Thanks!"),i())}function M(o,t){o&1&&(e(0,"div",9),l(1,"Please rate us"),i())}var w=(()=>{let t=class t{constructor(){this.ctrl=new x(0,C.min(1))}toggle(){this.ctrl.disabled?this.ctrl.enable():this.ctrl.disable()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=c({type:t,selectors:[["ng-component"]],standalone:!0,features:[v],decls:16,vars:8,consts:[["id","ratingLabel",1,"form-label"],["auAriaLabelledBy","ratingLabel",3,"auRating","formControl"],["id","form-msg",1,"form-text","small"],["class","text-success"],["class","text-danger"],["id","form-model"],["id","form-btn-enable",3,"click"],["id","form-btn-clear",1,"btn","btn-sm","btn-outline-primary","me-2",3,"click"],[1,"text-success"],[1,"text-danger"]],template:function(r,n){r&1&&(e(0,"label",0),l(1,"Rating of your experience"),i(),f(2,"br")(3,"div",1),e(4,"div",2),d(5,E,2,0,"div",3)(6,M,2,0,"div",4),i(),e(7,"pre"),l(8,"Model: "),e(9,"span",5)(10,"b"),l(11),i()()(),e(12,"button",6),s("click",function(){return n.toggle()}),l(13),i(),e(14,"button",7),s("click",function(){return n.ctrl.setValue(0)}),l(15,"Clear"),i()),r&2&&(a(3),p("formControl",n.ctrl),a(2),m(5,n.ctrl.valid?5:-1),a(),m(6,n.ctrl.invalid?6:-1),a(5),b(n.ctrl.value),a(),u("btn btn-sm btn-outline-",n.ctrl.disabled?"danger":"success"," me-2"),a(),g(" ",n.ctrl.disabled?"control disabled":" control enabled"," "))},dependencies:[h,R,F,_,S],encapsulation:2});let o=t;return o})();export{w as default};