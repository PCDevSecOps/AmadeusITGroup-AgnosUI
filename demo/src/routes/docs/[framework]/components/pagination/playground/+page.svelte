<script lang="ts">
	import Playground from '$lib/layout/playground/Playground.svelte';
	import {getPaginationDefaultConfig} from '@agnos-ui/svelte/components/pagination';
	import sample from '@agnos-ui/samples/pagination/playground';
	import doc from '@agnos-ui/generated/doc/api.json?pagination&extractApi';
	import type {PropsValues} from '@agnos-ui/common/propsValues';
	export let listPropsValues: {[key in keyof ReturnType<typeof getPaginationDefaultConfig>]?: PropsValues[]} = {
		onPageChange: ['noop', 'log'],
		pagesFactory: ['defaultPageFactory'],
		ariaPageLabel: ['simpleLabel', 'pageLabel'],
		slotNumberLabel: ['slotNumberLabel'],
	};
</script>

<Playground {sample} config={getPaginationDefaultConfig()} {doc} {listPropsValues} />
