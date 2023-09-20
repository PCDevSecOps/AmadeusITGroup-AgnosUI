const t=`import { UseDirective, callWidgetFactory, createSelect, patchSimpleChanges } from '@agnos-ui/angular-headless';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SelectComponent {
    constructor() {
        /**
         * Callback called when the text filter change
         */
        this.filterTextChange = new EventEmitter();
        this._widget = callWidgetFactory(createSelect, 'select');
        this.api = this._widget.api;
        this.state$ = toSignal(this._widget.state$, { requireSync: true });
        this._widget.patch({
            onFilterTextChange: (event) => this.filterTextChange.emit(event),
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    itemCtxTrackBy(_, itemCtx) {
        return itemCtx.id;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.5", type: SelectComponent, isStandalone: true, selector: "[auSelect]", inputs: { items: ["auItems", "items"], opened: ["auOpened", "opened"], filterText: ["auFilterText", "filterText"], className: ["auClassName", "className"], disabled: ["auDisabled", "disabled"], matchFn: ["auMatchFn", "matchFn"], itemId: ["auItemId", "itemId"], selected: ["auSelected", "selected"], loading: ["auLoading", "loading"] }, outputs: { filterTextChange: "auFilterTextChange" }, host: { properties: { "class": "\\"au-select dropdown input-group input-group-sm mb-3 d-block\\" + state$().className" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container>\\n\\t<div [auUse]=\\"_widget.directives.hasFocusDirective\\" role=\\"combobox\\" class=\\"input-group\\" aria-haspopup=\\"listbox\\" aria-expanded=\\"true\\">\\n\\t\\t<ng-container *ngIf=\\"state$().selected as selected\\">\\n\\t\\t\\t<div *ngIf=\\"selected.length\\" class=\\"input-group-text\\" (mousedown)=\\"$event.preventDefault()\\">\\n\\t\\t\\t\\t<div *ngFor=\\"let item of selected\\" class=\\"badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1\\">\\n\\t\\t\\t\\t\\t<div class=\\"me-1\\">{{ item }}</div>\\n\\t\\t\\t\\t\\t<span role=\\"button\\" tabindex=\\"-1\\" aria-label=\\"Close\\" (click)=\\"api.unselect(item)\\">x</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</ng-container>\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t[value]=\\"state$().filterText\\"\\n\\t\\t\\taria-autocomplete=\\"list\\"\\n\\t\\t\\tautoCorrect=\\"off\\"\\n\\t\\t\\tautoCapitalize=\\"none\\"\\n\\t\\t\\tautoComplete=\\"off\\"\\n\\t\\t\\t(keydown)=\\"_widget.actions.onInputKeydown($event)\\"\\n\\t\\t\\t(input)=\\"_widget.actions.onInput($event)\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<ul\\n\\t\\t*ngIf=\\"state$().opened && state$().visible.length\\"\\n\\t\\t[auUse]=\\"_widget.directives.hasFocusDirective\\"\\n\\t\\tclass=\\"dropdown-menu show w-100\\"\\n\\t\\tdata-popper-placement=\\"bottom-start\\"\\n\\t\\t(mousedown)=\\"$event.preventDefault()\\"\\n\\t>\\n\\t\\t<li\\n\\t\\t\\t*ngFor=\\"let itemCtx of state$().visible; trackBy: itemCtxTrackBy\\"\\n\\t\\t\\tclass=\\"dropdown-item position-relative\\"\\n\\t\\t\\t[class.bg-light]=\\"itemCtx === state$().highlighted\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"form-check\\">\\n\\t\\t\\t\\t<input type=\\"checkbox\\" tabindex=\\"-1\\" class=\\"form-check-input\\" [id]=\\"itemCtx.id\\" [checked]=\\"itemCtx.selected\\" (change)=\\"itemCtx.toggle()\\" />\\n\\t\\t\\t\\t<label [for]=\\"itemCtx.id\\" class=\\"form-check-label stretched-link\\" (click)=\\"itemCtx.toggle(); $event.preventDefault()\\">\\n\\t\\t\\t\\t\\t{{ itemCtx.item }}\\n\\t\\t\\t\\t</label>\\n\\t\\t\\t</div>\\n\\t\\t</li>\\n\\t</ul>\\n</ng-container>\\n<style>\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n</style>\\n", styles: ["\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n"], dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ standalone: true, imports: [UseDirective, CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, selector: '[auSelect]', host: {
                        '[class]': '"au-select dropdown input-group input-group-sm mb-3 d-block" + state$().className',
                    }, template: "<ng-container>\\n\\t<div [auUse]=\\"_widget.directives.hasFocusDirective\\" role=\\"combobox\\" class=\\"input-group\\" aria-haspopup=\\"listbox\\" aria-expanded=\\"true\\">\\n\\t\\t<ng-container *ngIf=\\"state$().selected as selected\\">\\n\\t\\t\\t<div *ngIf=\\"selected.length\\" class=\\"input-group-text\\" (mousedown)=\\"$event.preventDefault()\\">\\n\\t\\t\\t\\t<div *ngFor=\\"let item of selected\\" class=\\"badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1\\">\\n\\t\\t\\t\\t\\t<div class=\\"me-1\\">{{ item }}</div>\\n\\t\\t\\t\\t\\t<span role=\\"button\\" tabindex=\\"-1\\" aria-label=\\"Close\\" (click)=\\"api.unselect(item)\\">x</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</ng-container>\\n\\t\\t<input\\n\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t[value]=\\"state$().filterText\\"\\n\\t\\t\\taria-autocomplete=\\"list\\"\\n\\t\\t\\tautoCorrect=\\"off\\"\\n\\t\\t\\tautoCapitalize=\\"none\\"\\n\\t\\t\\tautoComplete=\\"off\\"\\n\\t\\t\\t(keydown)=\\"_widget.actions.onInputKeydown($event)\\"\\n\\t\\t\\t(input)=\\"_widget.actions.onInput($event)\\"\\n\\t\\t/>\\n\\t</div>\\n\\t<ul\\n\\t\\t*ngIf=\\"state$().opened && state$().visible.length\\"\\n\\t\\t[auUse]=\\"_widget.directives.hasFocusDirective\\"\\n\\t\\tclass=\\"dropdown-menu show w-100\\"\\n\\t\\tdata-popper-placement=\\"bottom-start\\"\\n\\t\\t(mousedown)=\\"$event.preventDefault()\\"\\n\\t>\\n\\t\\t<li\\n\\t\\t\\t*ngFor=\\"let itemCtx of state$().visible; trackBy: itemCtxTrackBy\\"\\n\\t\\t\\tclass=\\"dropdown-item position-relative\\"\\n\\t\\t\\t[class.bg-light]=\\"itemCtx === state$().highlighted\\"\\n\\t\\t>\\n\\t\\t\\t<div class=\\"form-check\\">\\n\\t\\t\\t\\t<input type=\\"checkbox\\" tabindex=\\"-1\\" class=\\"form-check-input\\" [id]=\\"itemCtx.id\\" [checked]=\\"itemCtx.selected\\" (change)=\\"itemCtx.toggle()\\" />\\n\\t\\t\\t\\t<label [for]=\\"itemCtx.id\\" class=\\"form-check-label stretched-link\\" (click)=\\"itemCtx.toggle(); $event.preventDefault()\\">\\n\\t\\t\\t\\t\\t{{ itemCtx.item }}\\n\\t\\t\\t\\t</label>\\n\\t\\t\\t</div>\\n\\t\\t</li>\\n\\t</ul>\\n</ng-container>\\n<style>\\n\\t.input-group-text {\\n\\t\\tbackground-color: transparent;\\n\\t}\\n\\t.dropdown-menu {\\n\\t\\tposition: absolute;\\n\\t\\tinset: 0px auto auto 0px;\\n\\t\\tmargin: 0px;\\n\\t\\ttransform: translate3d(0px, 45px, 0px);\\n\\t}\\n</style>\\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { items: [{
                type: Input,
                args: ['auItems']
            }], opened: [{
                type: Input,
                args: ['auOpened']
            }], filterText: [{
                type: Input,
                args: ['auFilterText']
            }], className: [{
                type: Input,
                args: ['auClassName']
            }], filterTextChange: [{
                type: Output,
                args: ['auFilterTextChange']
            }], disabled: [{
                type: Input,
                args: ['auDisabled']
            }], matchFn: [{
                type: Input,
                args: ['auMatchFn']
            }], itemId: [{
                type: Input,
                args: ['auItemId']
            }], selected: [{
                type: Input,
                args: ['auSelected']
            }], loading: [{
                type: Input,
                args: ['auLoading']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vbGliL3NyYy9saWIvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdHLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBWXBELE1BQU0sT0FBTyxlQUFlO0lBMEQzQjtRQXJDQTs7V0FFRztRQUMyQixxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBNkJuRSxZQUFPLEdBQUcsaUJBQWlCLENBQXFCLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RSxRQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFFaEMsV0FBTSxHQUE0QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUdwRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNsQixrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDaEUsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNqQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsY0FBYyxDQUFDLENBQVMsRUFBRSxPQUFzQjtRQUMvQyxPQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs4R0F0RVcsZUFBZTtrR0FBZixlQUFlLDBsQkNqQjVCLGlsRUFzREEsNFFEN0NXLFlBQVkscUZBQUUsWUFBWTs7MkZBUXhCLGVBQWU7a0JBVjNCLFNBQVM7aUNBQ0csSUFBSSxXQUNQLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxZQUFZLFFBRWhCO3dCQUNMLFNBQVMsRUFBRSxtRkFBbUY7cUJBQzlGOzBFQU1pQixLQUFLO3NCQUF0QixLQUFLO3VCQUFDLFNBQVM7Z0JBS0csTUFBTTtzQkFBeEIsS0FBSzt1QkFBQyxVQUFVO2dCQUtNLFVBQVU7c0JBQWhDLEtBQUs7dUJBQUMsY0FBYztnQkFLQyxTQUFTO3NCQUE5QixLQUFLO3VCQUFDLGFBQWE7Z0JBS1UsZ0JBQWdCO3NCQUE3QyxNQUFNO3VCQUFDLG9CQUFvQjtnQkFLUCxRQUFRO3NCQUE1QixLQUFLO3VCQUFDLFlBQVk7Z0JBTUMsT0FBTztzQkFBMUIsS0FBSzt1QkFBQyxXQUFXO2dCQU1DLE1BQU07c0JBQXhCLEtBQUs7dUJBQUMsVUFBVTtnQkFLSSxRQUFRO3NCQUE1QixLQUFLO3VCQUFDLFlBQVk7Z0JBS0MsT0FBTztzQkFBMUIsS0FBSzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0l0ZW1DdHgsIFNlbGVjdFdpZGdldCwgV2lkZ2V0U3RhdGV9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7VXNlRGlyZWN0aXZlLCBjYWxsV2lkZ2V0RmFjdG9yeSwgY3JlYXRlU2VsZWN0LCBwYXRjaFNpbXBsZUNoYW5nZXN9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHR5cGUge09uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG9TaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIENvbW1vbk1vZHVsZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzZWxlY3RvcjogJ1thdVNlbGVjdF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYXUtc2VsZWN0IGRyb3Bkb3duIGlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtIG1iLTMgZC1ibG9ja1wiICsgc3RhdGUkKCkuY2xhc3NOYW1lJyxcblx0fSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50PEl0ZW0+IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblx0LyoqXG5cdCAqIExpc3Qgb2YgYXZhaWxhYmxlIGl0ZW1zIGZvciB0aGUgZHJvcGRvd25cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtcycpIGl0ZW1zOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBvcGVuXG5cdCAqL1xuXHRASW5wdXQoJ2F1T3BlbmVkJykgb3BlbmVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJlZCB0ZXh0IHRvIGJlIGRpc3BsYXkgaW4gdGhlIGZpbHRlciBpbnB1dFxuXHQgKi9cblx0QElucHV0KCdhdUZpbHRlclRleHQnKSBmaWx0ZXJUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgdGV4dCBmaWx0ZXIgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUZpbHRlclRleHRDaGFuZ2UnKSBmaWx0ZXJUZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBkaXNhYmxlZFxuXHQgKi9cblx0QElucHV0KCdhdURpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBmdW5jdGlvbiB0byBmaWx0ZXIgYW4gaXRlbS5cblx0ICogQnkgZGVmYXVsdCwgaXRlbSBpcyBjb25zaWRlcmVkIGFzIGEgc3RyaW5nLCBhbmQgdGhlIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZSBpZiB0aGUgdGV4dCBpcyBmb3VuZFxuXHQgKi9cblx0QElucHV0KCdhdU1hdGNoRm4nKSBtYXRjaEZuOiAoKGl0ZW06IEl0ZW0sIHRleHQ6IHN0cmluZykgPT4gYm9vbGVhbikgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBmdW5jdGlvbiB0byBnZXQgdGhlIGlkIG9mIGFuIGl0ZW1cblx0ICogQnkgZGVmYXVsdCwgdGhlIGl0ZW0gaXMgcmV0dXJuZWRcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWQnKSBpdGVtSWQ6ICgoaXRlbTogSXRlbSkgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBzZWxlY3RlZCBpdGVtc1xuXHQgKi9cblx0QElucHV0KCdhdVNlbGVjdGVkJykgc2VsZWN0ZWQ6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiBhIGxvYWRpbmcgcHJvY2VzcyBpcyBiZWluZyBkb25lXG5cdCAqL1xuXHRASW5wdXQoJ2F1TG9hZGluZycpIGxvYWRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5PFNlbGVjdFdpZGdldDxJdGVtPj4oY3JlYXRlU2VsZWN0LCAnc2VsZWN0Jyk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cblx0c3RhdGUkOiBTaWduYWw8V2lkZ2V0U3RhdGU8U2VsZWN0V2lkZ2V0PEl0ZW0+Pj4gPSB0b1NpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkLCB7cmVxdWlyZVN5bmM6IHRydWV9KTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0b25GaWx0ZXJUZXh0Q2hhbmdlOiAoZXZlbnQpID0+IHRoaXMuZmlsdGVyVGV4dENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHR9KTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblx0XHRwYXRjaFNpbXBsZUNoYW5nZXModGhpcy5fd2lkZ2V0LnBhdGNoLCBjaGFuZ2VzKTtcblx0fVxuXG5cdGl0ZW1DdHhUcmFja0J5KF86IG51bWJlciwgaXRlbUN0eDogSXRlbUN0eDxJdGVtPikge1xuXHRcdHJldHVybiBpdGVtQ3R4LmlkO1xuXHR9XG59XG4iLCI8bmctY29udGFpbmVyPlxuXHQ8ZGl2IFthdVVzZV09XCJfd2lkZ2V0LmRpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmVcIiByb2xlPVwiY29tYm9ib3hcIiBjbGFzcz1cImlucHV0LWdyb3VwXCIgYXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIiBhcmlhLWV4cGFuZGVkPVwidHJ1ZVwiPlxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzdGF0ZSQoKS5zZWxlY3RlZCBhcyBzZWxlY3RlZFwiPlxuXHRcdFx0PGRpdiAqbmdJZj1cInNlbGVjdGVkLmxlbmd0aFwiIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cblx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzZWxlY3RlZFwiIGNsYXNzPVwiYmFkZ2Ugcm91bmRlZC1waWxsIHRleHQtYmctcHJpbWFyeSBkLWlubGluZS1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtLTFcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWUtMVwiPnt7IGl0ZW0gfX08L2Rpdj5cblx0XHRcdFx0XHQ8c3BhbiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJhcGkudW5zZWxlY3QoaXRlbSlcIj54PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRcdDxpbnB1dFxuXHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuXHRcdFx0W3ZhbHVlXT1cInN0YXRlJCgpLmZpbHRlclRleHRcIlxuXHRcdFx0YXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcblx0XHRcdGF1dG9Db3JyZWN0PVwib2ZmXCJcblx0XHRcdGF1dG9DYXBpdGFsaXplPVwibm9uZVwiXG5cdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0KGtleWRvd24pPVwiX3dpZGdldC5hY3Rpb25zLm9uSW5wdXRLZXlkb3duKCRldmVudClcIlxuXHRcdFx0KGlucHV0KT1cIl93aWRnZXQuYWN0aW9ucy5vbklucHV0KCRldmVudClcIlxuXHRcdC8+XG5cdDwvZGl2PlxuXHQ8dWxcblx0XHQqbmdJZj1cInN0YXRlJCgpLm9wZW5lZCAmJiBzdGF0ZSQoKS52aXNpYmxlLmxlbmd0aFwiXG5cdFx0W2F1VXNlXT1cIl93aWRnZXQuZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZVwiXG5cdFx0Y2xhc3M9XCJkcm9wZG93bi1tZW51IHNob3cgdy0xMDBcIlxuXHRcdGRhdGEtcG9wcGVyLXBsYWNlbWVudD1cImJvdHRvbS1zdGFydFwiXG5cdFx0KG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdD5cblx0XHQ8bGlcblx0XHRcdCpuZ0Zvcj1cImxldCBpdGVtQ3R4IG9mIHN0YXRlJCgpLnZpc2libGU7IHRyYWNrQnk6IGl0ZW1DdHhUcmFja0J5XCJcblx0XHRcdGNsYXNzPVwiZHJvcGRvd24taXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRbY2xhc3MuYmctbGlnaHRdPVwiaXRlbUN0eCA9PT0gc3RhdGUkKCkuaGlnaGxpZ2h0ZWRcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgW2lkXT1cIml0ZW1DdHguaWRcIiBbY2hlY2tlZF09XCJpdGVtQ3R4LnNlbGVjdGVkXCIgKGNoYW5nZSk9XCJpdGVtQ3R4LnRvZ2dsZSgpXCIgLz5cblx0XHRcdFx0PGxhYmVsIFtmb3JdPVwiaXRlbUN0eC5pZFwiIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbCBzdHJldGNoZWQtbGlua1wiIChjbGljayk9XCJpdGVtQ3R4LnRvZ2dsZSgpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuXHRcdFx0XHRcdHt7IGl0ZW1DdHguaXRlbSB9fVxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9saT5cblx0PC91bD5cbjwvbmctY29udGFpbmVyPlxuPHN0eWxlPlxuXHQuaW5wdXQtZ3JvdXAtdGV4dCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdH1cblx0LmRyb3Bkb3duLW1lbnUge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRpbnNldDogMHB4IGF1dG8gYXV0byAwcHg7XG5cdFx0bWFyZ2luOiAwcHg7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDQ1cHgsIDBweCk7XG5cdH1cbjwvc3R5bGU+XG4iXX0=`;export{t as default};