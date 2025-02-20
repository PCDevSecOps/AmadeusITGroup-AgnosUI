import type {
	SliderContext,
	SliderProps,
	SliderSlotHandleContext,
	SliderSlotLabelContext,
	SliderWidget,
	SlotContent,
} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDefaultDirective,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createSlider,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import {type WritableSignal, writable} from '@amadeus-it-group/tansu';
import type {AfterContentChecked} from '@angular/core';
import {
	ChangeDetectionStrategy,
	Component,
	ContentChild,
	Directive,
	EventEmitter,
	Input,
	NgZone,
	Output,
	TemplateRef,
	ViewChild,
	ViewEncapsulation,
	forwardRef,
	inject,
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {take} from 'rxjs';

@Directive({selector: 'ng-template[auSliderLabel]', standalone: true})
export class SliderLabelDirective {
	public templateRef = inject(TemplateRef<SliderSlotLabelContext>);
	static ngTemplateContextGuard(_dir: SliderLabelDirective, context: unknown): context is SliderSlotLabelContext {
		return true;
	}
}

@Directive({selector: 'ng-template[auSliderHandle]', standalone: true})
export class SliderHandleDirective {
	public templateRef = inject(TemplateRef<SliderSlotLabelContext>);
	static ngTemplateContextGuard(_dir: SliderHandleDirective, context: unknown): context is SliderSlotHandleContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SliderHandleDirective],
	template: `
		<ng-template auSliderHandle #handle let-state="state" let-widget="widget" let-item="item">
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state.min"
				[attr.aria-valuemax]="state.max"
				[attr.aria-readonly]="state.readonly ? true : null"
				[attr.aria-disabled]="state.disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.ariaValueText"
				[attr.aria-label]="item.ariaLabel"
				[attr.aria-orientation]="state.vertical ? 'vertical' : null"
				[disabled]="state.disabled"
				[class]="state.vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
				[style.left.%]="state.handleDisplayOptions[item.id].left"
				[style.top.%]="state.handleDisplayOptions[item.id].top"
				(keydown)="onKeyDown($event, item.id, widget.actions.keydown)"
				(mousedown)="widget.actions.mouseDown($event, item.id)"
				(touchstart)="widget.actions.touchStart($event, item.id)"
			>
				&nbsp;
			</button>
		</ng-template>
	`,
})
export class SliderDefaultHandleSlotComponent {
	private readonly _zone = inject(NgZone);

	@ViewChild('handle', {static: true}) readonly handle: TemplateRef<SliderSlotHandleContext>;

	onKeyDown(event: KeyboardEvent, handleId: number, widgetOnKeyDownFn: (event: KeyboardEvent, handleId: number) => void) {
		widgetOnKeyDownFn(event, handleId);
		this._zone.onStable.pipe(take(1)).subscribe(() => {
			(event.target as HTMLElement).focus();
		});
	}
}

export const sliderDefaultSlotHandle = new ComponentTemplate(SliderDefaultHandleSlotComponent, 'handle');

@Directive({selector: 'ng-template[auSliderStructure]', standalone: true})
export class SliderStructureDirective {
	public templateRef = inject(TemplateRef<SliderSlotHandleContext>);
	static ngTemplateContextGuard(_dir: SliderStructureDirective, context: unknown): context is SliderSlotHandleContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, SliderStructureDirective, UseDirective],
	template: `
		<ng-template auSliderStructure #structure let-state="state" let-widget="widget">
			@for (option of state.progressDisplayOptions; track option) {
				<div
					class="au-slider-progress"
					[style.left.%]="option.left"
					[style.right.%]="option.right"
					[style.bottom.%]="option.bottom"
					[style.top.%]="option.top"
					[style.width.%]="option.width"
					[style.height.%]="option.height"
				></div>
			}
			<div [class]="state.vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="widget.actions.click($event)"></div>
			@if (state.showMinMaxLabels) {
				<div
					[class]="state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
					[class.au-slider-rtl]="state.rtl"
					[class.invisible]="!state.minValueLabelDisplay"
					[auUse]="widget.directives.minLabelDirective"
				>
					<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.min}"></ng-template>
				</div>
				<div
					[class]="state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
					[class.au-slider-rtl]="state.rtl"
					[class.invisible]="!state.maxValueLabelDisplay"
					[auUse]="widget.directives.maxLabelDirective"
				>
					<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.max}"></ng-template>
				</div>
			}
			@if (state.showValueLabels && state.combinedLabelDisplay) {
				<div
					[class]="state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
					[style.left.%]="state.combinedLabelPositionLeft"
					[style.top.%]="state.combinedLabelPositionTop"
				>
					@if (state.rtl) {
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[1]}"></ng-template> -
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[0]}"></ng-template>
					} @else {
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[0]}"></ng-template> -
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.sortedValues[1]}"></ng-template>
					}
				</div>
			}
			@for (item of state.sortedHandles; track item.id; let i = $index) {
				<ng-template [auSlot]="state.slotHandle" [auSlotProps]="{state, widget, item}"></ng-template>
				@if (state.showValueLabels && !state.combinedLabelDisplay) {
					<div
						[class]="state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
						[style.left.%]="state.handleDisplayOptions[i].left"
						[style.top.%]="state.handleDisplayOptions[i].top"
					>
						<ng-template [auSlot]="state.slotLabel" [auSlotProps]="{state, widget, value: state.values[i]}"></ng-template>
					</div>
				}
			}
		</ng-template>
	`,
})
export class SliderDefaultStructureSlotComponent {
	@ViewChild('structure', {static: true}) structure: TemplateRef<SliderContext>;
}

export const sliderDefaultSlotStructure = new ComponentTemplate(SliderDefaultStructureSlotComponent, 'structure');

export type PartialSliderProps = Partial<SliderProps>;
const defaultConfig: PartialSliderProps = {
	slotStructure: sliderDefaultSlotStructure,
	slotHandle: sliderDefaultSlotHandle,
};

@Component({
	selector: '[auSlider]',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true}],
	imports: [SlotDirective, SlotDefaultDirective],
	host: {
		class: `au-slider`,
		'[class]': '(state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + state().className',
		'[class.disabled]': 'state().disabled',
		'[attr.aria-disabled]': 'state().disabled ? true : null',
		'(blur)': 'handleBlur()',
	},
	template: ` <ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template> `,
})
export class SliderComponent extends BaseWidgetDirective<SliderWidget> implements AfterContentChecked {
	readonly defaultSlots: WritableSignal<PartialSliderProps> = writable(defaultConfig);

	readonly _widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		defaultConfig: this.defaultSlots,
		events: {
			onValuesChange: (event) => {
				this.onChange(event);
				this.onTouched();
				this.valuesChange.emit(event);
			},
		},
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.sliderDirective);
		},
	});

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * Minimum value that can be assigned to the slider
	 */
	@Input({alias: 'auMin', transform: auNumberAttribute})
	min: number | undefined;

	/**
	 * Maximum value that can be assigned to the slider
	 */
	@Input({alias: 'auMax', transform: auNumberAttribute})
	max: number | undefined;

	/**
	 * Unit value between slider steps
	 */
	@Input({alias: 'auStepSize', transform: auNumberAttribute})
	stepSize: number | undefined;

	/**
	 * Current slider values
	 */
	@Input('auValues')
	values: number[] | undefined;

	/**
	 * It `true` slider display is inversed
	 */
	@Input({alias: 'auRtl', transform: auBooleanAttribute})
	rtl: boolean | undefined;

	/**
	 * If `true` the value labels are displayed on the slider
	 */
	@Input({alias: 'auShowValueLabels', transform: auBooleanAttribute}) showValueLabels: boolean | undefined;

	/**
	 * If `true` the min and max labels are displayed on the slider
	 */
	@Input({alias: 'auShowMinMaxLabels', transform: auBooleanAttribute}) showMinMaxLabels: boolean | undefined;
	/**
	 * Return the value for the 'aria-label' attribute for the handle
	 */
	@Input('auAriaLabelHandle') ariaLabelHandle: ((value: number, sortedIndex: number, index: number) => string) | undefined;
	/**
	 * Return the value for the 'aria-valuetext' attribute for the handle
	 */
	@Input('auAriaValueText') ariaValueText: ((value: number, sortedIndex: number, index: number) => string) | undefined;

	/**
	 * If `true` slider value cannot be changed but the slider is still focusable
	 */
	@Input({alias: 'auReadonly', transform: auBooleanAttribute})
	readonly: boolean | undefined;

	/**
	 * If `true` slider value cannot be changed and the slider cannot be focused
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute})
	disabled: boolean | undefined;

	/**
	 * If `true` is vertically positioned otherwise it is horizontal
	 */
	@Input({alias: 'auVertical', transform: auBooleanAttribute})
	vertical: boolean | undefined;

	/**
	 * An event emitted when slider values are changed
	 *
	 * Event payload equals to the updated slider values
	 */
	@Output('auValuesChange')
	valuesChange = new EventEmitter<number[]>();

	@Input('auSlotLabel') slotLabel: SlotContent<SliderSlotLabelContext>;
	@ContentChild(SliderLabelDirective, {static: false}) slotLabelFromContent: SliderLabelDirective | undefined;

	@Input('auSlotStructure') slotStructure: SlotContent<SliderContext>;
	@ContentChild(SliderStructureDirective, {static: false}) slotStructureFromContent: SliderStructureDirective | undefined;

	@Input('auSlotHandle') slotHandle: SlotContent<SliderSlotHandleContext>;
	@ContentChild(SliderHandleDirective, {static: false}) slotHandleFromContent: SliderHandleDirective | undefined;

	/**
	 * Control value accessor methods
	 */
	onChange = (_: any) => {};

	onTouched = () => {};

	registerOnChange(fn: (value: any) => any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => any): void {
		this.onTouched = fn;
	}

	writeValue(value: any): void {
		if (Array.isArray(value)) {
			this._widget.patch({
				values: value,
			});
		} else {
			this._widget.patch({
				values: [value],
			});
		}
	}

	setDisabledState(isDisabled: boolean) {
		this._widget.patch({
			disabled: isDisabled,
		});
	}

	handleBlur() {
		this.onTouched();
	}

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotStructure: this.slotStructureFromContent?.templateRef,
			slotHandle: this.slotHandleFromContent?.templateRef,
			slotLabel: this.slotLabelFromContent?.templateRef,
		});
	}
}
