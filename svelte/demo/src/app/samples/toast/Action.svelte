<script lang="ts">
	import {Slot} from '@agnos-ui/svelte/slot';
	import type {ToastSlots} from '@agnos-ui/svelte/components/toast';
	import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?raw';
	import biArrowCounterClockwise from 'bootstrap-icons/icons/arrow-counterclockwise.svg?raw';

	type $$Props = ToastSlots['structure'];
	type $$Slots = ToastSlots;

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	function actionDemo() {
		window.alert('Undo');
	}
</script>

<div class="d-flex w-100">
	<div class="d-flex align-items-center flex-grow-1 toast-body">
		<span class="d-flex me-2">{@html biCheckCircleFill}</span>
		<Slot slotContent={state.slotDefault} props={{widget, state}} let:component let:props>
			<slot slot="slot" let:props {...props} />
			<svelte:component this={component} {...props}>
				<svelte:fragment let:state let:widget><slot {state} {widget} /></svelte:fragment>
				<slot name="header" slot="header" let:state let:widget {state} {widget} />
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
		<button type="button" class="btn btn-sm ms-auto text-bg-success" on:click={actionDemo}>
			<span class="me-2">{@html biArrowCounterClockwise}</span>Undo
		</button>
	</div>
	{#if state.dismissible}
		<button type="button" class="btn-close btn-close-white me-2 m-auto" on:click={() => widget.api.close()} aria-label={state.ariaCloseButtonLabel} />
	{/if}
</div>
