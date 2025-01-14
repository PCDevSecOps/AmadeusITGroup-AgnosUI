import type {ReadableSignals} from '../../utils/stores';
import {stateStores, writablesForProps, normalizeConfigStores, mergeConfigStores} from '../../utils/stores';
import type {TransitionFn} from '../../services/transitions/baseTransitions';
import {createTransition} from '../../services/transitions/baseTransitions';
import {collapseVerticalTransition} from '../../services/transitions/bootstrap/collapse';
import type {ConfigValidator, Directive, PropsConfig, SlotContent, Widget, WidgetSlotContext} from '../../types';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import {noop} from '../../utils/internal/func';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {typeBoolean, typeFunction, typeString} from '../../utils/writables';
import {bindDirectiveNoArg, directiveSubscribe, registrationArray} from '../../utils/directive';
import {generateId} from '../../utils/internal/dom';

function adjustItemsCloseOthers(items: AccordionItemWidget[], openItems: string[], oldOpen?: string): AccordionItemWidget[] {
	let keepOpen: undefined | string;
	if (openItems.length == 2) {
		oldOpen = oldOpen ?? openItems[0];
		keepOpen = openItems.find((id) => id !== oldOpen)!;
	} else if (openItems.length > 2) {
		//this case can happen when you have multiple items open and you toggle the close others
		keepOpen = openItems[0];
	}
	if (keepOpen) {
		items.forEach((item) => {
			if (item.state$().itemId !== keepOpen && item.state$().itemVisible) {
				item.patch({itemVisible: false});
			}
		});
	}
	return items;
}

function getItem(items: AccordionItemWidget[], itemId: string): AccordionItemWidget | undefined {
	return items.find((item) => item.state$().itemId === itemId);
}

export interface AccordionProps extends WidgetsCommonPropsAndState {
	/**
	 * If `true`, only one accordion-item at the time can stay open.
	 */
	closeOthers: boolean;
	/**
	 * An event fired when an item is shown.
	 *
	 * Event payload is the id of the item.
	 */
	onShown: (itemId: string) => void;
	/**
	 * An event fired when an item is hidden.
	 *
	 * Event payload is the id of the item.
	 */
	onHidden: (itemId: string) => void;
	//item configuration
	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemId: string;
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemDestroyOnHide: boolean;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemDisabled: boolean;
	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 *
	 * It is a prop of the accordion-item.
	 */
	itemVisible: boolean;
	/**
	 * If `true`, accordion-item will be animated.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemAnimation: boolean;
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemTransition: TransitionFn;
	/**
	 * An event fired when an item is shown.
	 *
	 * It is a prop of the accordion-item.
	 */
	onItemShown: () => void;
	/**
	 * An event fired when an item is hidden.
	 *
	 * It is a prop of the accordion-item.
	 */
	onItemHidden: () => void;
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 *
	 * It is a prop of the accordion-item.
	 */
	onItemVisibleChange: (visible: boolean) => void;
	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `slotItemHeader`), while the accordion-item body container contains the accordion body (that contains `slotItemBody`).
	 * The itemTransition it applied on this element.
	 *
	 * It is a prop of the accordion-item.
	 */
	slotItemStructure: SlotContent<AccordionItemContext>;
	/**
	 * Content present in the accordion body.
	 *
	 * It is a prop of the accordion-item.
	 */
	slotItemBody: SlotContent<AccordionItemContext>;
	/**
	 * Content present in the accordion button inside the accordion header.
	 *
	 * It is a prop of the accordion-item.
	 */
	slotItemHeader: SlotContent<AccordionItemContext>;
	/**
	 * CSS classes to add on the accordion-item DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemClass: string;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemHeaderClass: string;
	/**
	 * CSS classes to add on the accordion-item toggle button DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemButtonClass: string;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemBodyContainerClass: string;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemBodyClass: string;
	/**
	 * The html tag to use for the accordion-item-header.
	 *
	 * It is a prop of the accordion-item.
	 */
	itemHeadingTag: string;
}

export interface AccordionState extends WidgetsCommonPropsAndState {
	/**
	 * Array containing all the accordion-items contained in the accordion.
	 */
	itemsWidget: AccordionItemWidget[];
}

export interface AccordionApi {
	/**
	 * Given the itemId, it will return if such item is visible (expanded) or not.
	 *
	 * If the itemId is not a valid id it will return `false`.
	 */
	isExpanded(itemId: string): boolean;
	/**
	 * Given the itemId, will expand the corresponding accordion-item.
	 *
	 * If the itemId is not valid, nothing will happen.
	 */
	expand(itemId: string): void;
	/**
	 * Given the itemId, will collapse the corresponding accordion-item.
	 *
	 * If the itemId is not valid, nothing will happen.
	 */
	collapse(itemId: string): void;
	/**
	 * Given the itemId, will toggle the corresponding accordion-item.
	 *
	 * If the itemId is not valid, nothing will happen.
	 */
	toggle(itemId: string): void;
	/**
	 * It will expand all the items in the accordion.
	 *
	 * If `closeOthers` is `true` it will expand only the last accordion-item.
	 */
	expandAll(): void;
	/**
	 * It will collapse all the accordion-items in the accordion.
	 */
	collapseAll(): void;
	/**
	 * Creates a new accordionItem.
	 */
	registerItem(itemConfig?: PropsConfig<AccordionItemProps>): AccordionItemWidget;
}

export interface AccordionDirectives {
	/**
	 * Directive to put on the accordion DOM element
	 */
	accordionDirective: Directive;
}

export type AccordionWidget = Widget<AccordionProps, AccordionState, AccordionApi, object, AccordionDirectives>;

export type AccordionItemContext = WidgetSlotContext<AccordionItemWidget>;

export interface AccordionItemActions {
	/**
	 * Action to be called when the user clicks on the accordion-item button. If the accordion-item is disabled nothing will happen.
	 */
	click(): void;
}

export interface AccordionItemApi {
	/**
	 * It will collapse the accordion-item.
	 */
	collapse(): void;

	/**
	 * It will expand the accordion-item.
	 */
	expand(): void;
	/**
	 * It will toggle the accordion-item.
	 */
	toggle(): void;
	/**
	 * Method to be called after the initialization to allow animations.
	 */
	initDone(): void;
}

export interface AccordionItemDirectives {
	/**
	 * Directive to be put on the accordion-item collapse. It will handle the animation.
	 */
	collapseDirective: Directive;
	/**
	 * Directive to be put on the accordion-item. It will handle adding the accordion-item to the accordion.
	 */
	accordionItemDirective: Directive;
}

export interface AccordionItemCommonPropsAndState {
	/**
	 * If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).
	 */
	itemVisible: boolean;
	/**
	 * If `true`, the accordion-item will be disabled.
	 * It will not react to user's clicks, but still will be possible to toggle programmatically.
	 */
	itemDisabled: boolean;
	/**
	 * The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.
	 */
	itemId: string;
	/**
	 * Content present in the accordion button inside the accordion header.
	 */
	slotItemHeader: SlotContent<AccordionItemContext>;
	/**
	 * Content present in the accordion body.
	 */
	slotItemBody: SlotContent<AccordionItemContext>;
	/**
	 * Structure of the accordion-item. The default item structure is: accordion-item
	 * contains accordion header and accordion-item body container; the accordion header contains the accordion button
	 * (that contains `slotItemHeader`), while the accordion-item body container contains the accordion body (that contains `slotItemBody`).
	 * The itemTransition it applied on this element.
	 */
	slotItemStructure: SlotContent<AccordionItemContext>;
	/**
	 * CSS classes to add on the accordion-item DOM element.
	 */
	itemClass: string;
	/**
	 * CSS classes to add on the accordion-item header DOM element.
	 */
	itemHeaderClass: string;
	/**
	 * CSS classes to add on the accordion-item collapse DOM element.
	 */
	itemButtonClass: string;
	/**
	 * CSS classes to add on the accordion-item body container DOM element.
	 * The accordion-item body container is the DOM element on what the itemTransition is applied.
	 */
	itemBodyContainerClass: string;
	/**
	 * CSS classes to add on the accordion-item body DOM element.
	 */
	itemBodyClass: string;
	/**
	 * The html tag to use for the accordion-item-header.
	 */
	itemHeadingTag: string;
}

export interface AccordionItemProps extends AccordionItemCommonPropsAndState {
	/**
	 * If `true`, accordion-item will be animated.
	 */
	itemAnimation: boolean;
	/**
	 * The transition to use for the accordion-item body-container when the accordion-item is toggled.
	 */
	itemTransition: TransitionFn;
	/**
	 * If `true`, the accordion-item body container will be removed from the DOM when the accordion-item is collapsed. It will be just hidden otherwise.
	 */
	itemDestroyOnHide: boolean;
	/**
	 * An event fired when an item is shown.
	 */
	onItemShown: () => void;
	/**
	 * An event fired when an item is hidden.
	 */
	onItemHidden: () => void;
	/**
	 * An event fired when the `visible` value changes.
	 *
	 * Event payload is the new value of visible.
	 */
	onItemVisibleChange: (visible: boolean) => void;
}

export interface AccordionItemState extends AccordionItemCommonPropsAndState {
	/**
	 * If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
	 * value of the `itemVisible` and `itemDestroyOnHide`.
	 */
	shouldBeInDOM: boolean;
}

export type AccordionItemWidget = Widget<AccordionItemProps, AccordionItemState, AccordionItemApi, AccordionItemActions, AccordionItemDirectives>;

const defaultAccordionConfig: AccordionProps = {
	closeOthers: false,
	onShown: noop,
	onHidden: noop,
	className: '',
	itemId: '',
	itemDestroyOnHide: true,
	itemDisabled: false,
	itemVisible: false,
	itemAnimation: true,
	itemTransition: collapseVerticalTransition,
	itemHeadingTag: '',
	onItemShown: noop,
	onItemHidden: noop,
	onItemVisibleChange: noop,
	slotItemStructure: undefined,
	slotItemBody: undefined,
	slotItemHeader: undefined,
	itemClass: '',
	itemHeaderClass: '',
	itemButtonClass: '',
	itemBodyContainerClass: '',
	itemBodyClass: '',
};

const defaultItemConfig: AccordionItemProps = {
	itemId: defaultAccordionConfig.itemId,
	itemDestroyOnHide: defaultAccordionConfig.itemDestroyOnHide,
	itemDisabled: defaultAccordionConfig.itemDisabled,
	itemVisible: defaultAccordionConfig.itemVisible,
	itemAnimation: defaultAccordionConfig.itemAnimation,
	itemTransition: defaultAccordionConfig.itemTransition,
	onItemShown: defaultAccordionConfig.onItemShown,
	onItemHidden: defaultAccordionConfig.onItemHidden,
	onItemVisibleChange: defaultAccordionConfig.onItemVisibleChange,
	slotItemStructure: defaultAccordionConfig.slotItemStructure,
	slotItemBody: defaultAccordionConfig.slotItemBody,
	slotItemHeader: defaultAccordionConfig.slotItemHeader,
	itemClass: defaultAccordionConfig.itemClass,
	itemHeaderClass: defaultAccordionConfig.itemHeaderClass,
	itemButtonClass: defaultAccordionConfig.itemButtonClass,
	itemBodyContainerClass: defaultAccordionConfig.itemBodyContainerClass,
	itemBodyClass: defaultAccordionConfig.itemBodyClass,
	itemHeadingTag: defaultAccordionConfig.itemHeadingTag,
};
const accordionItemProps = Object.keys(defaultItemConfig) as (keyof AccordionItemProps)[];

/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export function getAccordionDefaultConfig(): AccordionProps {
	return {...defaultAccordionConfig};
}

const configAccordionValidator: ConfigValidator<AccordionProps> = {
	closeOthers: typeBoolean,
	onShown: typeFunction,
	onHidden: typeFunction,
	itemId: typeString,
	itemDestroyOnHide: typeBoolean,
	itemDisabled: typeBoolean,
	itemVisible: typeBoolean,
	itemAnimation: typeBoolean,
	itemTransition: typeFunction,
	onItemShown: typeFunction,
	onItemHidden: typeFunction,
	onItemVisibleChange: typeFunction,
	itemClass: typeString,
	itemHeaderClass: typeString,
	itemButtonClass: typeString,
	itemBodyContainerClass: typeString,
	itemBodyClass: typeString,
	itemHeadingTag: typeString,
};

const configItemValidator: ConfigValidator<AccordionItemProps> = {
	itemId: typeString,
	itemDestroyOnHide: typeBoolean,
	itemDisabled: typeBoolean,
	itemVisible: typeBoolean,
	itemAnimation: typeBoolean,
	itemTransition: typeFunction,
	onItemShown: typeFunction,
	onItemHidden: typeFunction,
	onItemVisibleChange: typeFunction,
	itemClass: typeString,
	itemHeaderClass: typeString,
	itemButtonClass: typeString,
	itemBodyContainerClass: typeString,
	itemBodyClass: typeString,
	itemHeadingTag: typeString,
};

function createAccordionItem(
	accordionOnShown: ReadableSignal<(itemId: string) => void>,
	accordionOnHidden: ReadableSignal<(itemId: string) => void>,
	config?: PropsConfig<AccordionItemProps>,
): AccordionItemWidget {
	const [
		{
			itemAnimation$,
			itemTransition$,
			itemDestroyOnHide$,
			onItemShown$,
			onItemHidden$,
			onItemVisibleChange$,
			itemVisible$,
			itemId$: _dirtyItemId$,
			itemDisabled$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultItemConfig, config, configItemValidator);

	const initDone$ = writable(false);
	const _autoItemId$ = computed(() => generateId());
	const itemId$ = computed(() => _dirtyItemId$() || _autoItemId$());
	const shouldBeInDOM$ = computed(() => itemDestroyOnHide$() === false || !itemTransition.state$().hidden);
	const itemTransition = createTransition({
		props: {
			transition: itemTransition$,
			visible: itemVisible$,
			onVisibleChange: onItemVisibleChange$,
			animation: itemAnimation$,
			animationOnInit: false,
			initDone: initDone$,
			onHidden: () => {
				accordionOnHidden()(itemId$());
				onItemHidden$()();
			},
			onShown: () => {
				accordionOnShown()(itemId$());
				onItemShown$()();
			},
		},
	});

	return {
		...stateStores({
			itemVisible$,
			itemId$,
			shouldBeInDOM$,
			itemDisabled$,
			...stateProps,
		}),
		patch,
		actions: {
			click: () => {
				if (!itemDisabled$()) {
					itemVisible$.update((c: boolean) => !c);
				}
			},
		},
		api: {
			initDone: () => {
				initDone$.set(true);
			},
			collapse: () => {
				itemVisible$.set(false);
			},
			expand: () => {
				itemVisible$.set(true);
			},
			toggle: () => {
				itemVisible$.update((c: boolean) => !c);
			},
		},
		directives: {collapseDirective: bindDirectiveNoArg(itemTransition.directives.directive), accordionItemDirective: noop},
	};
}
/**
 * Creates a new Accordion widget instance.
 * @param config - config of the accordion, either as a store or as an object containing values or stores.
 * @returns a new accordion widget instance
 */
export function createAccordion(config?: PropsConfig<AccordionProps>): AccordionWidget {
	const [
		{
			closeOthers$,
			onShown$,
			onHidden$,
			itemId$,
			itemAnimation$,
			itemClass$,
			itemDisabled$,
			itemVisible$,
			itemTransition$,
			itemDestroyOnHide$,
			itemBodyClass$,
			itemButtonClass$,
			itemBodyContainerClass$,
			itemHeaderClass$,
			itemHeadingTag$,
			onItemVisibleChange$,
			onItemHidden$,
			onItemShown$,
			slotItemStructure$,
			slotItemBody$,
			slotItemHeader$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultAccordionConfig, config, configAccordionValidator);
	const accordionItemConfig: ReadableSignals<AccordionItemProps> = {
		itemId: itemId$,
		itemClass: itemClass$,
		itemAnimation: itemAnimation$,
		itemDisabled: itemDisabled$,
		itemVisible: itemVisible$,
		itemTransition: itemTransition$,
		itemDestroyOnHide: itemDestroyOnHide$,
		itemBodyClass: itemBodyClass$,
		itemButtonClass: itemButtonClass$,
		itemBodyContainerClass: itemBodyContainerClass$,
		itemHeaderClass: itemHeaderClass$,
		itemHeadingTag: itemHeadingTag$,
		onItemVisibleChange: onItemVisibleChange$,
		onItemHidden: onItemHidden$,
		onItemShown: onItemShown$,
		slotItemStructure: slotItemStructure$,
		slotItemBody: slotItemBody$,
		slotItemHeader: slotItemHeader$,
	};
	const itemsWidget$ = registrationArray<AccordionItemWidget>();
	const openItems$ = computed(() => {
		const openItems: string[] = [];
		itemsWidget$().forEach((item) => {
			if (item.state$().itemVisible) {
				openItems.push(item.state$().itemId);
			}
		});
		return openItems;
	});

	const oldOpenItem$ = writable(openItems$()[0]);
	const checkCloseOthersAction$ = computed(() => {
		if (closeOthers$()) {
			adjustItemsCloseOthers(itemsWidget$(), openItems$(), oldOpenItem$());
			oldOpenItem$.set(openItems$()[0]);
		}
	});

	const action$ = computed(() => {
		checkCloseOthersAction$();
	});
	return {
		...stateStores({itemsWidget$, ...stateProps}),
		patch,
		actions: {},
		api: {
			isExpanded: (id: string) => {
				const item = getItem(itemsWidget$(), id);
				if (item) {
					return item.state$().itemVisible;
				} else {
					return false;
				}
			},
			expand: (id: string) => {
				getItem(itemsWidget$(), id)?.api.expand();
			},
			collapse: (id: string) => {
				getItem(itemsWidget$(), id)?.api.collapse();
			},
			toggle: (id: string) => {
				getItem(itemsWidget$(), id)?.api.toggle();
			},
			expandAll: () => {
				itemsWidget$().forEach((i) => i.api.expand());
			},
			collapseAll: () => {
				itemsWidget$().forEach((i) => i.api.collapse());
			},
			registerItem: (propsConfig?: PropsConfig<AccordionItemProps>) => {
				const item = createAccordionItem(onShown$, onHidden$, {
					config: mergeConfigStores(accordionItemProps, normalizeConfigStores(accordionItemProps, propsConfig?.config), accordionItemConfig),
					props: propsConfig?.props,
				});
				item.directives.accordionItemDirective = () => ({destroy: itemsWidget$.register(item)});
				return item;
			},
		},
		directives: {accordionDirective: directiveSubscribe(action$)},
	};
}
