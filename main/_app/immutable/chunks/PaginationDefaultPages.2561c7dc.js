const t=`<script lang="ts">
	import Slot from '../slot/Slot.svelte';
	import type {PaginationSlots} from './pagination';
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = PaginationSlots['pages']; // eslint-disable-line @typescript-eslint/no-unused-vars
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Slots = PaginationSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];
<\/script>

{#each state.pages as page, i}
	<li
		class="page-item"
		class:active={page === state.page}
		class:disabled={widget.api.isEllipsis(page) || state.disabled}
		aria-current={page === state.page ? 'page' : null}
	>
		{#if widget.api.isEllipsis(page)}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a class="page-link au-ellipsis" tabindex="-1" aria-disabled="true" on:click|preventDefault|stopPropagation href="#">
				<Slot slotContent={state.slotEllipsis} props={{state, widget}} let:component let:props>
					<slot slot="slot" name="ellipsis" let:props {...props} />
					<svelte:component this={component} {...props}>
						<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
						<slot name="first" slot="first" let:state let:widget {state} {widget} />
						<slot name="last" slot="last" let:state let:widget {state} {widget} />
						<slot name="next" slot="next" let:state let:widget {state} {widget} />
						<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
						<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
						<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
					</svelte:component>
				</Slot>
			</a>
		{:else}
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a
				class="page-link au-page"
				aria-label={state.pagesLabel[i]}
				href="#"
				on:click|preventDefault={() => widget.actions.select(page)}
				tabindex={state.disabled ? -1 : undefined}
				aria-disabled={state.disabled ? 'true' : null}
				><!-- Remove the strange formatting with https://github.com/sveltejs/svelte/issues/3080
				 --><Slot
					slotContent={state.slotNumberLabel}
					props={{state, widget, displayedPage: page}}
					let:component
					let:props
					><slot slot="slot" name="numberLabel" let:props {...props} /><svelte:component this={component} {...props}>
						<slot name="ellipsis" slot="ellipsis" let:state let:widget {state} {widget} />
						<slot name="first" slot="first" let:state let:widget {state} {widget} />
						<slot name="last" slot="last" let:state let:widget {state} {widget} />
						<slot name="next" slot="next" let:state let:widget {state} {widget} />
						<slot name="numberLabel" slot="numberLabel" let:displayedPage let:state let:widget {displayedPage} {state} {widget} />
						<slot name="pages" slot="pages" let:state let:widget {state} {widget} />
						<slot name="previous" slot="previous" let:state let:widget {state} {widget} />
					</svelte:component></Slot
				>{#if state.page === page}<span class="visually-hidden">{state.activeLabel}</span>{/if}
			</a>
		{/if}
	</li>
{/each}
`;export{t as default};