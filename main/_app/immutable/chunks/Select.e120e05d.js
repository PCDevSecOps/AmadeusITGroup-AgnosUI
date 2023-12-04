const t=`<script lang="ts" context="module">
	import type {SelectProps as Props, SelectWidget, SelectSlots as Slots, WidgetPropsEvents, WidgetPropsProps} from '@agnos-ui/svelte-headless';
	import {Slot, callWidgetFactory, createEventDispatcher, createSelect} from '@agnos-ui/svelte-headless';
<\/script>

<script lang="ts">
	type Item = $$Generic; // eslint-disable-line no-undef
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = WidgetPropsProps<Props<Item>>; // eslint-disable-line @typescript-eslint/no-unused-vars
	type $$Events = WidgetPropsEvents<Props<Item>>;
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = Slots<Item>; // eslint-disable-line @typescript-eslint/no-unused-vars
	const dispatch = createEventDispatcher<$$Events>();

	export let open: boolean | undefined = false;
	export let filterText: string | undefined = undefined;
	export let selected: Item[] | undefined = undefined;

	const widget = callWidgetFactory<SelectWidget<Item>>({
		factory: createSelect,
		widgetName: 'select',
		$$slots,
		events: {
			onOpenChange: function (isOpen: boolean): void {
				open = isOpen;
				dispatch('openChange', isOpen);

				open = isOpen;
			},
			onSelectedChange: (newSelection) => {
				selected = newSelection;
				dispatch('selectedChange', newSelection);
			},
			onFilterTextChange: (value) => {
				filterText = value;
				dispatch('filterTextChange', value);
			},
		},
	});
	const {
		stores: {
			id$,
			ariaLabel$,
			badgeClassName$,
			className$,
			filterText$,
			highlighted$,
			menuClassName$,
			menuItemClassName$,
			open$,
			selectedContexts$,
			slotBadgeLabel$,
			slotItem$,
			visibleItems$,
		},
		state$,
		actions: {onInputKeydown, onInput},
		directives: {hasFocusDirective},
	} = widget;
	$: widget.patchChangedProps($$props);
<\/script>

<div class="au-select dropdown border border-1 p-1 mb-3 d-block {$className$}">
	<!-- svelte-ignore a11y-role-has-required-aria-props -->
	<div use:hasFocusDirective role="combobox" class="d-flex align-items-center flex-wrap" aria-haspopup="listbox" aria-expanded={$open$}>
		{#each $selectedContexts$ as itemContext}
			<div class={\`au-select-badge me-1 \${$badgeClassName$}\`}>
				<Slot slotContent={$slotBadgeLabel$} props={{state: $state$, widget, itemContext}} let:component let:props>
					<slot slot="slot" name="badgeLabel" let:props {...props} />
					<svelte:component this={component} {...props}>
						<slot name="badgeLabel" slot="badgeLabel" let:itemContext let:state let:widget {itemContext} {state} {widget} />
						<slot name="item" slot="item" let:itemContext let:state let:widget {itemContext} {state} {widget} />
					</svelte:component>
				</Slot>
			</div>
		{/each}
		<input
			id={$id$}
			aria-label={$ariaLabel$}
			type="text"
			class="au-select-input flex-grow-1 border-0"
			value={$filterText$}
			aria-autocomplete="list"
			autoCorrect="off"
			autoCapitalize="none"
			autoComplete="off"
			on:keydown={onInputKeydown}
			on:input={onInput}
		/>
	</div>
	{#if $open$ && $visibleItems$.length > 0}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<ul
			use:hasFocusDirective
			class="dropdown-menu show {$menuClassName$}"
			data-popper-placement="bottom-start"
			data-bs-popper="static"
			on:mousedown|preventDefault
		>
			{#each $visibleItems$ as itemContext (itemContext.id)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li
					class={\`au-select-item dropdown-item position-relative \${$menuItemClassName$}\`}
					class:bg-light={itemContext === $highlighted$}
					class:selected={itemContext.selected}
					on:click={() => widget.api.toggleItem(itemContext.item)}
				>
					<Slot slotContent={$slotItem$} props={{state: $state$, widget, itemContext}} let:component let:props>
						<slot slot="slot" name="item" let:props {...props} />
						<svelte:component this={component} {...props}>
							<slot name="badgeLabel" slot="badgeLabel" let:itemContext let:state let:widget {itemContext} {state} {widget} />
							<slot name="item" slot="item" let:itemContext let:state let:widget {itemContext} {state} {widget} />
						</svelte:component>
					</Slot>
				</li>
			{/each}
		</ul>
	{/if}
</div>
`;export{t as default};
