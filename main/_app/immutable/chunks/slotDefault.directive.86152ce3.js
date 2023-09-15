const t=`import { Directive, Input, TemplateRef, inject } from '@angular/core';
import * as i0 from "@angular/core";
export class SlotDefaultDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    ngOnInit() {
        this.auSlotDefault.update((value) => ({ ...value, slotDefault: this.templateRef }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SlotDefaultDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: SlotDefaultDirective, isStandalone: true, selector: "[auSlotDefault]", inputs: { auSlotDefault: "auSlotDefault" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SlotDefaultDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[auSlotDefault]', standalone: true }]
        }], propDecorators: { auSlotDefault: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xvdERlZmF1bHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vaGVhZGxlc3Mvc3JjL2xpYi9zbG90RGVmYXVsdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFJcEUsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUlDLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBYyxDQUFBLENBQUMsQ0FBQztLQUtyQztJQUhBLFFBQVE7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OEdBUFcsb0JBQW9CO2tHQUFwQixvQkFBb0I7OzJGQUFwQixvQkFBb0I7a0JBRGhDLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBQzs4QkFFaEQsYUFBYTtzQkFBckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtXcml0YWJsZVNpZ25hbH0gZnJvbSAnQGFtYWRldXMtaXQtZ3JvdXAvdGFuc3UnO1xuaW1wb3J0IHR5cGUge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICcuL3V0aWxzJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbYXVTbG90RGVmYXVsdF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTbG90RGVmYXVsdERpcmVjdGl2ZTxUIGV4dGVuZHMgb2JqZWN0PiBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIGF1U2xvdERlZmF1bHQ6IFdyaXRhYmxlU2lnbmFsPHtzbG90RGVmYXVsdD86IFNsb3RDb250ZW50PFQ+fT47XG5cblx0dGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VD4pO1xuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMuYXVTbG90RGVmYXVsdC51cGRhdGUoKHZhbHVlKSA9PiAoey4uLnZhbHVlLCBzbG90RGVmYXVsdDogdGhpcy50ZW1wbGF0ZVJlZn0pKTtcblx0fVxufVxuIl19`;export{t as default};
