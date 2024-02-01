import{a as H}from"./chunk-Z7SX3R6A.js";import{A as X,Ia as M,Jb as y,Ka as E,Pa as a,Ra as Y,T as p,Ua as F,V as D,Xa as c,Y as g,_b as Q,a as h,aa as m,b as _,ca as b,da as u,db as K,fa as R,ia as A,p as z,sb as J,u as Z,ub as w}from"./chunk-CDYQJW4G.js";var ue=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(E),a(M))},e.\u0275dir=u({type:e});let t=e;return t})(),G=(()=>{let e=class e extends ue{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=A(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[c]});let t=e;return t})(),V=new g("NgValueAccessor"),ke={provide:V,useExisting:p(()=>Ge),multi:!0},Ge=(()=>{let e=class e extends G{writeValue(i){this.setProperty("checked",i)}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=A(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,s){r&1&&w("change",function(l){return s.onChange(l.target.checked)})("blur",function(){return s.onTouched()})},features:[y([ke]),c]});let t=e;return t})(),je={provide:V,useExisting:p(()=>de),multi:!0};function Te(){let t=H()?H().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Be=new g("CompositionEventMode"),de=(()=>{let e=class e extends ue{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Te())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(E),a(M),a(Be,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&w("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[y([je]),c]});let t=e;return t})();function f(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function ce(t){return t!=null&&typeof t.length=="number"}var he=new g("NgValidators"),fe=new g("NgAsyncValidators"),Ue=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,ee=class{static min(e){return Re(e)}static max(e){return He(e)}static required(e){return Le(e)}static requiredTrue(e){return $e(e)}static email(e){return We(e)}static minLength(e){return qe(e)}static maxLength(e){return ze(e)}static pattern(e){return Ze(e)}static nullValidator(e){return pe(e)}static compose(e){return Ce(e)}static composeAsync(e){return De(e)}};function Re(t){return e=>{if(f(e.value)||f(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function He(t){return e=>{if(f(e.value)||f(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Le(t){return f(t.value)?{required:!0}:null}function $e(t){return t.value===!0?null:{required:!0}}function We(t){return f(t.value)||Ue.test(t.value)?null:{email:!0}}function qe(t){return e=>f(e.value)||!ce(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function ze(t){return e=>ce(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function Ze(t){if(!t)return pe;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(f(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function pe(t){return null}function ge(t){return t!=null}function me(t){return J(t)?z(t):t}function ye(t){let e={};return t.forEach(n=>{e=n!=null?h(h({},e),n):e}),Object.keys(e).length===0?null:e}function ve(t,e){return e.map(n=>n(t))}function Xe(t){return!t.validate}function _e(t){return t.map(e=>Xe(e)?e:n=>e.validate(n))}function Ce(t){if(!t)return null;let e=t.filter(ge);return e.length==0?null:function(n){return ye(ve(n,e))}}function Ve(t){return t!=null?Ce(_e(t)):null}function De(t){if(!t)return null;let e=t.filter(ge);return e.length==0?null:function(n){let i=ve(n,e).map(me);return X(i).pipe(Z(ye))}}function be(t){return t!=null?De(_e(t)):null}function te(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ae(t){return t._rawValidators}function Me(t){return t._rawAsyncValidators}function L(t){return t?Array.isArray(t)?t:[t]:[]}function P(t,e){return Array.isArray(t)?t.includes(e):t===e}function ie(t,e){let n=L(e);return L(t).forEach(r=>{P(n,r)||n.push(r)}),n}function ne(t,e){return L(e).filter(n=>!P(t,n))}var x=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ve(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=be(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},$=class extends x{get formDirective(){return null}get path(){return null}},v=class extends x{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ye={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Rt=_(h({},Ye),{"[class.ng-submitted]":"isSubmitted"}),Ht=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(v,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&K("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[c]});let t=e;return t})();var I="VALID",N="INVALID",C="PENDING",S="DISABLED";function Ke(t){return(j(t)?t.validators:t)||null}function Je(t){return Array.isArray(t)?Ve(t):t||null}function Qe(t,e){return(j(e)?e.asyncValidators:t)||null}function et(t){return Array.isArray(t)?be(t):t||null}function j(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var q=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===N}get pending(){return this.status==C}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ie(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ie(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ne(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ne(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=C,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(_(h({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(_(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(_(h({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===C)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let n=me(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?N:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(N)?N:I}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Je(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=et(this._rawAsyncValidators)}};var T=new g("CallSetDisabledState",{providedIn:"root",factory:()=>B}),B="always";function tt(t,e){return[...e.path,t]}function Ee(t,e,n=B){nt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),st(t,e),at(t,e),ot(t,e),it(t,e)}function re(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),rt(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function k(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function it(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function nt(t,e){let n=Ae(t);e.validator!==null?t.setValidators(te(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Me(t);e.asyncValidator!==null?t.setAsyncValidators(te(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();k(e._rawValidators,r),k(e._rawAsyncValidators,r)}function rt(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Ae(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Me(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return k(e._rawValidators,i),k(e._rawAsyncValidators,i),n}function st(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Fe(t,e)})}function ot(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Fe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Fe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function at(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function we(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function lt(t){return Object.getPrototypeOf(t.constructor)===G}function Ie(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===de?n=s:lt(s)?i=s:r=s}),r||i||n||null}function se(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function oe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ut=class extends q{constructor(e=null,n,i){super(Ke(n),Qe(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(n)&&(n.nonNullable||n.initialValueIsDefault)&&(oe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){se(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){se(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){oe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var dt={provide:v,useExisting:p(()=>ct)},ae=Promise.resolve(),ct=(()=>{let e=class e extends v{constructor(i,r,s,o,l,d){super(),this._changeDetectorRef=l,this.callSetDisabledState=d,this.control=new ut,this._registered=!1,this.name="",this.update=new F,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=Ie(this,o)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),we(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ee(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){ae.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,s=r!==0&&Q(r);ae.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?tt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(a($,9),a(he,10),a(fe,10),a(V,10),a(Y,8),a(T,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[m.None,"disabled","isDisabled"],model:[m.None,"ngModel","model"],options:[m.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[y([dt]),c,R]});let t=e;return t})();var ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=D({});let t=e;return t})();var Se=new g("NgModelWithFormControlWarning"),ft={provide:v,useExisting:p(()=>pt)},pt=(()=>{let e=class e extends v{set isDisabled(i){}constructor(i,r,s,o,l){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=l,this.update=new F,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Ie(this,s)}ngOnChanges(i){if(this._isControlChanged(i)){let r=i.form.previousValue;r&&re(r,this,!1),Ee(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}we(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&re(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(he,10),a(fe,10),a(V,10),a(Se,8),a(T,8))},e.\u0275dir=u({type:e,selectors:[["","formControl",""]],inputs:{form:[m.None,"formControl","form"],isDisabled:[m.None,"disabled","isDisabled"],model:[m.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[y([ft]),c,R]});let t=e;return t})();var gt={provide:V,useExisting:p(()=>Ne),multi:!0};function Oe(t,e){return t==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function mt(t){return t.split(":")[0]}var Ne=(()=>{let e=class e extends G{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(i){this._compareWith=i}writeValue(i){this.value=i;let r=this._getOptionId(i),s=Oe(r,i);this.setProperty("value",s)}registerOnChange(i){this.onChange=r=>{this.value=this._getOptionValue(r),i(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(i){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),i))return r;return null}_getOptionValue(i){let r=mt(i);return this._optionMap.has(r)?this._optionMap.get(r):i}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=A(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,s){r&1&&w("change",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[y([gt]),c]});let t=e;return t})(),$t=(()=>{let e=class e{constructor(i,r,s){this._element=i,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(i){this._select!=null&&(this._select._optionMap.set(this.id,i),this._setElementValue(Oe(this.id,i)),this._select.writeValue(this._select.value))}set value(i){this._setElementValue(i),this._select&&this._select.writeValue(this._select.value)}_setElementValue(i){this._renderer.setProperty(this._element.nativeElement,"value",i)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(a(M),a(E),a(Ne,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})(),yt={provide:V,useExisting:p(()=>Pe),multi:!0};function le(t,e){return t==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${t}: ${e}`.slice(0,50))}function vt(t){return t.split(":")[0]}var Pe=(()=>{let e=class e extends G{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(i){this._compareWith=i}writeValue(i){this.value=i;let r;if(Array.isArray(i)){let s=i.map(o=>this._getOptionId(o));r=(o,l)=>{o._setSelected(s.indexOf(l.toString())>-1)}}else r=(s,o)=>{s._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(i){this.onChange=r=>{let s=[],o=r.selectedOptions;if(o!==void 0){let l=o;for(let d=0;d<l.length;d++){let O=l[d],U=this._getOptionValue(O.value);s.push(U)}}else{let l=r.options;for(let d=0;d<l.length;d++){let O=l[d];if(O.selected){let U=this._getOptionValue(O.value);s.push(U)}}}this.value=s,i(s)}}_registerOption(i){let r=(this._idCounter++).toString();return this._optionMap.set(r,i),r}_getOptionId(i){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,i))return r;return null}_getOptionValue(i){let r=vt(i);return this._optionMap.has(r)?this._optionMap.get(r)._value:i}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=A(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,s){r&1&&w("change",function(l){return s.onChange(l.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[y([yt]),c]});let t=e;return t})(),Wt=(()=>{let e=class e{constructor(i,r,s){this._element=i,this._renderer=r,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(i){this._select!=null&&(this._value=i,this._setElementValue(le(this.id,i)),this._select.writeValue(this._select.value))}set value(i){this._select?(this._value=i,this._setElementValue(le(this.id,i)),this._select.writeValue(this._select.value)):this._setElementValue(i)}_setElementValue(i){this._renderer.setProperty(this._element.nativeElement,"value",i)}_setSelected(i){this._renderer.setProperty(this._element.nativeElement,"selected",i)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(a(M),a(E),a(Pe,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let t=e;return t})();var xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=D({imports:[ht]});let t=e;return t})();var qt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:T,useValue:i.callSetDisabledState??B}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=D({imports:[xe]});let t=e;return t})(),zt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Se,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:T,useValue:i.callSetDisabledState??B}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b({type:e}),e.\u0275inj=D({imports:[xe]});let t=e;return t})();export{V as a,Ge as b,de as c,ee as d,Ht as e,ut as f,ct as g,pt as h,Ne as i,$t as j,Wt as k,qt as l,zt as m};
