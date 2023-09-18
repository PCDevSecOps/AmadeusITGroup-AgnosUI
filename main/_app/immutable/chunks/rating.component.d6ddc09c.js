const t=`import { SlotDirective, callWidgetFactory, createRating, patchSimpleChanges } from '@agnos-ui/angular-headless';
import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject, } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class RatingStarDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingStarDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: RatingStarDirective, isStandalone: true, selector: "ng-template[auRatingStar]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingStarDirective, decorators: [{
            type: Directive,
            args: [{ selector: 'ng-template[auRatingStar]', standalone: true }]
        }] });
export class RatingComponent {
    // TODO angular is failing when adding this host binding in decorator part
    get hostAriaLabelledBy() {
        return this.state$().ariaLabelledBy || null;
    }
    constructor() {
        this._widget = callWidgetFactory(createRating, 'rating');
        this.api = this._widget.api;
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
        this.onChange = (_) => { };
        this.onTouched = () => { };
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload is equal to the rating being hovered over.
         */
        this.hover = new EventEmitter();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload is equal to the rating of the last item being hovered over.
         */
        this.leave = new EventEmitter();
        /**
         * An event emitted when the rating is changed.
         *
         * Event payload is equal to the newly selected rating.
         */
        this.ratingChange = new EventEmitter();
        this._widget.patch({
            onHover: (event) => this.hover.emit(event),
            onLeave: (event) => this.leave.emit(event),
            onRatingChange: (rating) => {
                this.ratingChange.emit(rating);
                this.onChange(rating);
            },
        });
    }
    writeValue(value) {
        this._widget.patch({ rating: value });
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this._widget.patch({ disabled });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotStar: this.slotStarFromContent?.templateRef,
        });
    }
    trackByIndex(index) {
        return index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: RatingComponent, isStandalone: true, selector: "[auRating]", inputs: { ariaValueTextFn: ["auAriaValueTextFn", "ariaValueTextFn"], disabled: ["auDisabled", "disabled"], maxRating: ["auMaxRating", "maxRating"], rating: ["auRating", "rating"], readonly: ["auReadonly", "readonly"], resettable: ["auResettable", "resettable"], slotStar: ["auSlotStar", "slotStar"], tabindex: ["auTabindex", "tabindex"], className: ["auClassName", "className"], ariaLabel: ["auAriaLabel", "ariaLabel"], ariaLabelledBy: ["auAriaLabelledBy", "ariaLabelledBy"] }, outputs: { hover: "auHover", leave: "auLeave", ratingChange: "auRatingChange" }, host: { attributes: { "role": "slider", "aria-valuemin": "0" }, listeners: { "blur": "onTouched()", "keydown": "_widget.actions.handleKey($event)", "mouseleave": "_widget.actions.leave()" }, properties: { "tabindex": "state$().tabindex", "attr.aria-valuemax": "state$().maxRating", "attr.aria-valuenow": "state$().visibleRating", "attr.aria-valuetext": "state$().ariaValueText", "attr.aria-disabled": "state$().disabled ? true : null", "attr.aria-readonly": "state$().readonly ? true : null", "attr.aria-label": "state$().ariaLabel || null", "class": "state$().className", "[attr.aria-labelledby]": "this.hostAriaLabelledBy" }, classAttribute: "d-inline-flex au-rating" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }], queries: [{ propertyName: "slotStarFromContent", first: true, predicate: RatingStarDirective, descendants: true }], usesOnChanges: true, ngImport: i0, template: \`
		<ng-template ngFor [ngForOf]="state$().stars" [ngForTrackBy]="trackByIndex" let-index="index">
			<span class="visually-hidden">({{ index < state$().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state$().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state$().slotStar" [auSlotProps]="state$().stars[index]"></ng-template>
			</span>
		</ng-template>
	\`, isInline: true, dependencies: [{ kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: SlotDirective, selector: "[auSlot]", inputs: ["auSlot", "auSlotProps"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: RatingComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[auRating]',
                    standalone: true,
                    imports: [NgForOf, SlotDirective],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'd-inline-flex au-rating',
                        '[tabindex]': 'state$().tabindex',
                        role: 'slider',
                        'aria-valuemin': '0',
                        '[attr.aria-valuemax]': 'state$().maxRating',
                        '[attr.aria-valuenow]': 'state$().visibleRating',
                        '[attr.aria-valuetext]': 'state$().ariaValueText',
                        '[attr.aria-disabled]': 'state$().disabled ? true : null',
                        '[attr.aria-readonly]': 'state$().readonly ? true : null',
                        '[attr.aria-label]': 'state$().ariaLabel || null',
                        '(blur)': 'onTouched()',
                        '(keydown)': '_widget.actions.handleKey($event)',
                        '(mouseleave)': '_widget.actions.leave()',
                        '[class]': 'state$().className',
                    },
                    template: \`
		<ng-template ngFor [ngForOf]="state$().stars" [ngForTrackBy]="trackByIndex" let-index="index">
			<span class="visually-hidden">({{ index < state$().visibleRating ? '*' : ' ' }})</span>
			<span
				class="au-rating-star"
				(mouseenter)="_widget.actions.hover(index + 1)"
				(click)="_widget.actions.click(index + 1)"
				[style.cursor]="state$().isInteractive ? 'pointer' : 'default'"
			>
				<ng-template [auSlot]="state$().slotStar" [auSlotProps]="state$().stars[index]"></ng-template>
			</span>
		</ng-template>
	\`,
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RatingComponent), multi: true }],
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { hostAriaLabelledBy: [{
                type: HostBinding,
                args: ['[attr.aria-labelledby]']
            }], ariaValueTextFn: [{
                type: Input,
                args: ['auAriaValueTextFn']
            }], disabled: [{
                type: Input,
                args: ['auDisabled']
            }], maxRating: [{
                type: Input,
                args: ['auMaxRating']
            }], rating: [{
                type: Input,
                args: ['auRating']
            }], readonly: [{
                type: Input,
                args: ['auReadonly']
            }], resettable: [{
                type: Input,
                args: ['auResettable']
            }], slotStar: [{
                type: Input,
                args: ['auSlotStar']
            }], slotStarFromContent: [{
                type: ContentChild,
                args: [RatingStarDirective, { static: false }]
            }], tabindex: [{
                type: Input,
                args: ['auTabindex']
            }], className: [{
                type: Input,
                args: ['auClassName']
            }], ariaLabel: [{
                type: Input,
                args: ['auAriaLabel']
            }], ariaLabelledBy: [{
                type: Input,
                args: ['auAriaLabelledBy']
            }], hover: [{
                type: Output,
                args: ['auHover']
            }], leave: [{
                type: Output,
                args: ['auLeave']
            }], ratingChange: [{
                type: Output,
                args: ['auRatingChange']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUcsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRXhDLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLE1BQU0sR0FDTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFFcEQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBR2pELE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQStDLENBQUEsQ0FBQyxDQUFDO0tBSTdFO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQXlCLEVBQUUsT0FBZ0I7UUFDeEUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDOzhHQUpXLG1CQUFtQjtrR0FBbkIsbUJBQW1COzsyRkFBbkIsbUJBQW1CO2tCQUQvQixTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFFLDJCQUEyQixFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBNkNwRSxNQUFNLE9BQU8sZUFBZTtJQVMzQiwwRUFBMEU7SUFDMUUsSUFBMkMsa0JBQWtCO1FBQzVELE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUM7SUFDN0Ms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O2dCQUtHLFNBQVM7c0JBQTlCLEtBQUs7dUJBQUMsYUFBYTtnQkFLRSxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWE7Z0JBS08sY0FBYztzQkFBeEMsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBT04sS0FBSztzQkFBdkIsTUFBTTt1QkFBQyxTQUFTO2dCQU9FLEtBQUs7c0JBQXZCLE1BQU07dUJBQUMsU0FBUztnQkFPUyxZQUFZO3NCQUFyQyxNQUFNO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtBZGFwdFNsb3RDb250ZW50UHJvcHMsIFJhdGluZ1N0YXRlLCBTbG90Q29udGVudCwgU3RhckNvbnRleHR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7U2xvdERpcmVjdGl2ZSwgY2FsbFdpZGdldEZhY3RvcnksIGNyZWF0ZVJhdGluZywgcGF0Y2hTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge05nRm9yT2Z9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0SG9zdEJpbmRpbmcsXG5cdElucHV0LFxuXHRPdXRwdXQsXG5cdFRlbXBsYXRlUmVmLFxuXHRWaWV3RW5jYXBzdWxhdGlvbixcblx0Zm9yd2FyZFJlZixcblx0aW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB0eXBlIHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1UmF0aW5nU3Rhcl0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBSYXRpbmdTdGFyRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTdGFyQ29udGV4dD4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogUmF0aW5nU3RhckRpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU3RhckNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVJhdGluZ10nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbTmdGb3JPZiwgU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdkLWlubGluZS1mbGV4IGF1LXJhdGluZycsXG5cdFx0J1t0YWJpbmRleF0nOiAnc3RhdGUkKCkudGFiaW5kZXgnLFxuXHRcdHJvbGU6ICdzbGlkZXInLFxuXHRcdCdhcmlhLXZhbHVlbWluJzogJzAnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdzdGF0ZSQoKS5tYXhSYXRpbmcnLFxuXHRcdCdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICdzdGF0ZSQoKS52aXNpYmxlUmF0aW5nJyxcblx0XHQnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3N0YXRlJCgpLmFyaWFWYWx1ZVRleHQnLFxuXHRcdCdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdzdGF0ZSQoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsJyxcblx0XHQnW2F0dHIuYXJpYS1yZWFkb25seV0nOiAnc3RhdGUkKCkucmVhZG9ubHkgPyB0cnVlIDogbnVsbCcsXG5cdFx0J1thdHRyLmFyaWEtbGFiZWxdJzogJ3N0YXRlJCgpLmFyaWFMYWJlbCB8fCBudWxsJyxcblx0XHQnKGJsdXIpJzogJ29uVG91Y2hlZCgpJyxcblx0XHQnKGtleWRvd24pJzogJ193aWRnZXQuYWN0aW9ucy5oYW5kbGVLZXkoJGV2ZW50KScsXG5cdFx0Jyhtb3VzZWxlYXZlKSc6ICdfd2lkZ2V0LmFjdGlvbnMubGVhdmUoKScsXG5cdFx0J1tjbGFzc10nOiAnc3RhdGUkKCkuY2xhc3NOYW1lJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgbmdGb3IgW25nRm9yT2ZdPVwic3RhdGUkKCkuc3RhcnNcIiBbbmdGb3JUcmFja0J5XT1cInRyYWNrQnlJbmRleFwiIGxldC1pbmRleD1cImluZGV4XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInZpc3VhbGx5LWhpZGRlblwiPih7eyBpbmRleCA8IHN0YXRlJCgpLnZpc2libGVSYXRpbmcgPyAnKicgOiAnICcgfX0pPC9zcGFuPlxuXHRcdFx0PHNwYW5cblx0XHRcdFx0Y2xhc3M9XCJhdS1yYXRpbmctc3RhclwiXG5cdFx0XHRcdChtb3VzZWVudGVyKT1cIl93aWRnZXQuYWN0aW9ucy5ob3ZlcihpbmRleCArIDEpXCJcblx0XHRcdFx0KGNsaWNrKT1cIl93aWRnZXQuYWN0aW9ucy5jbGljayhpbmRleCArIDEpXCJcblx0XHRcdFx0W3N0eWxlLmN1cnNvcl09XCJzdGF0ZSQoKS5pc0ludGVyYWN0aXZlID8gJ3BvaW50ZXInIDogJ2RlZmF1bHQnXCJcblx0XHRcdD5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUkKCkuc2xvdFN0YXJcIiBbYXVTbG90UHJvcHNdPVwic3RhdGUkKCkuc3RhcnNbaW5kZXhdXCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhdGluZ0NvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG59KVxuZXhwb3J0IGNsYXNzIFJhdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3RvcnkoY3JlYXRlUmF0aW5nLCAncmF0aW5nJyk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cblx0c3RhdGUkOiBTaWduYWw8UmF0aW5nU3RhdGU+ID0gdG9TaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCwge3JlcXVpcmVTeW5jOiB0cnVlfSk7XG5cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblx0b25Ub3VjaGVkID0gKCkgPT4ge307XG5cblx0Ly8gVE9ETyBhbmd1bGFyIGlzIGZhaWxpbmcgd2hlbiBhZGRpbmcgdGhpcyBob3N0IGJpbmRpbmcgaW4gZGVjb3JhdG9yIHBhcnRcblx0QEhvc3RCaW5kaW5nKCdbYXR0ci5hcmlhLWxhYmVsbGVkYnldJykgZ2V0IGhvc3RBcmlhTGFiZWxsZWRCeSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZSQoKS5hcmlhTGFiZWxsZWRCeSB8fCBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS12YWx1ZScgYXR0cmlidXRlLlxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFWYWx1ZVRleHRGbicpIGFyaWFWYWx1ZVRleHRGbjogKChyYXRpbmc6IG51bWJlciwgbWF4UmF0aW5nOiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBpcyBkaXNhYmxlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVEaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgbWF4aW11bSByYXRpbmcgdGhhdCBjYW4gYmUgZ2l2ZW4uXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWF4UmF0aW5nJykgbWF4UmF0aW5nOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHJhdGluZy4gQ291bGQgYmUgYSBkZWNpbWFsIHZhbHVlIGxpa2UgYDMuNzVgLlxuXHQgKi9cblx0QElucHV0KCdhdVJhdGluZycpIHJhdGluZzogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgY2FuJ3QgYmUgY2hhbmdlZC5cblx0ICovXG5cdEBJbnB1dCgnYXVSZWFkb25seScpIHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBEZWZpbmUgaWYgdGhlIHJhdGluZyBjYW4gYmUgcmVzZXQuXG5cdCAqXG5cdCAqIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciBjYW4gJ3Vuc2V0JyB0aGUgcmF0aW5nIHZhbHVlIGJ5IGNsaWtpbmcgb24gdGhlIGN1cnJlbnQgcmF0aW5nIHZhbHVlLlxuXHQgKi9cblx0QElucHV0KCdhdVJlc2V0dGFibGUnKSByZXNldHRhYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90U3RhcicpIHNsb3RTdGFyOiBTbG90Q29udGVudDxBZGFwdFNsb3RDb250ZW50UHJvcHM8U3RhckNvbnRleHQ+Pjtcblx0QENvbnRlbnRDaGlsZChSYXRpbmdTdGFyRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdGFyRnJvbUNvbnRlbnQ6IFJhdGluZ1N0YXJEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFsbG93cyBzZXR0aW5nIGEgY3VzdG9tIHJhdGluZyB0YWJpbmRleC5cblx0ICogSWYgdGhlIGNvbXBvbmVudCBpcyBkaXNhYmxlZCwgYHRhYmluZGV4YCB3aWxsIHN0aWxsIGJlIHNldCB0byBgLTFgLlxuXHQgKi9cblx0QElucHV0KCdhdVRhYmluZGV4JykgdGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsbGVkIGJ5XG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsbGVkQnknKSBhcmlhTGFiZWxsZWRCeTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgaXMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIGJlaW5nIGhvdmVyZWQgb3Zlci5cblx0ICovXG5cdEBPdXRwdXQoJ2F1SG92ZXInKSBob3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIG9mIHRoZSBsYXN0IGl0ZW0gYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKi9cblx0QE91dHB1dCgnYXVMZWF2ZScpIGxlYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgcmF0aW5nIGlzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIG5ld2x5IHNlbGVjdGVkIHJhdGluZy5cblx0ICovXG5cdEBPdXRwdXQoJ2F1UmF0aW5nQ2hhbmdlJykgcmF0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdG9uSG92ZXI6IChldmVudCkgPT4gdGhpcy5ob3Zlci5lbWl0KGV2ZW50KSxcblx0XHRcdG9uTGVhdmU6IChldmVudCkgPT4gdGhpcy5sZWF2ZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uUmF0aW5nQ2hhbmdlOiAocmF0aW5nOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yYXRpbmdDaGFuZ2UuZW1pdChyYXRpbmcpO1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKHJhdGluZyk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG5cblx0d3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtyYXRpbmc6IHZhbHVlfSk7XG5cdH1cblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtkaXNhYmxlZH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RTdGFyOiB0aGlzLnNsb3RTdGFyRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG5cblx0dHJhY2tCeUluZGV4KGluZGV4OiBudW1iZXIpIHtcblx0XHRyZXR1cm4gaW5kZXg7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
