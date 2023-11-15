const e=`import type { SliderState } from '@agnos-ui/angular-headless';
import type { OnChanges, Signal, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SliderComponent implements OnChanges {
    private _zone;
    readonly _widget: import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/core").SliderWidget>;
    /**
     * SliderWidget hold the state and actions applicable to the auSliderComponent
     */
    readonly widget: import("@agnos-ui/angular-headless").ContextWidget<import("@agnos-ui/angular-headless").WithPatchSlots<import("@agnos-ui/core").SliderWidget>>;
    readonly state: Signal<SliderState>;
    readonly api: import("@agnos-ui/angular-headless").SliderApi;
    /**
     * CSS classes to be applied on the widget main container
     */
    className: string | undefined;
    /**
     * Minimum value that can be assigned to the slider
     */
    min: number | undefined;
    /**
     * Maximum value that can be assigned to the slider
     */
    max: number | undefined;
    /**
     * Unit value between slider steps
     */
    stepSize: number | undefined;
    /**
     * Current slider values
     */
    values: number[] | undefined;
    /**
     * Return the value for the 'aria-label' attribute for the handle
     */
    ariaLabelHandle: ((value: number, sortedIndex: number, index: number) => string) | undefined;
    /**
     * If \`true\` slider value cannot be changed but the slider is still focusable
     */
    readonly: boolean | undefined;
    /**
     * If \`true\` slider value cannot be changed and the slider cannot be focused
     */
    disabled: boolean | undefined;
    /**
     * If \`true\` is vertically positioned otherwise it is horizontal
     */
    vertical: boolean | undefined;
    /**
     * An event emitted when slider values are changed
     *
     * Event payload equals to the updated slider values
     */
    valuesChange: EventEmitter<number[]>;
    constructor();
    /**
     * Control value accessor methods
     */
    onChange: (_: any) => void;
    onTouched: () => void;
    registerOnChange(fn: (value: any) => any): void;
    registerOnTouched(fn: () => any): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    handleBlur(): void;
    sliderClick($event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent, handleId: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "[auSlider]", never, { "className": { "alias": "auClassName"; "required": false; }; "min": { "alias": "auMin"; "required": false; }; "max": { "alias": "auMax"; "required": false; }; "stepSize": { "alias": "auStepSize"; "required": false; }; "values": { "alias": "auValues"; "required": false; }; "ariaLabelHandle": { "alias": "auAriaLabelHandle"; "required": false; }; "readonly": { "alias": "auReadonly"; "required": false; }; "disabled": { "alias": "auDisabled"; "required": false; }; "vertical": { "alias": "auVertical"; "required": false; }; }, { "valuesChange": "auValuesChange"; }, never, never, true, never>;
}
`;export{e as default};