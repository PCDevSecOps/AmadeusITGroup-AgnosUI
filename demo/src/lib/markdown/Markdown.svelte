<script lang="ts">
	import SvelteMarkdown, {type Renderers} from 'svelte-markdown';
	import Heading from '$lib/layout/Heading.svelte';
	import MdCode from '$lib/markdown/renderers/MdCode.svelte';
	import {marked} from 'marked';
	import MdSection from '$lib/markdown/renderers/MdSection.svelte';
	import MdImage from '$lib/markdown/renderers/MdImage.svelte';
	import MdLink from '$lib/markdown/renderers/MdLink.svelte';
	import MdParagraph from './renderers/MdParagraph.svelte';
	import MdListItem from './renderers/MdListItem.svelte';
	import MdCodeSpan from './renderers/MdCodeSpan.svelte';

	export let source: string;

	function getTokens(src: string) {
		const tokens = marked.lexer(src);
		const walkTokens = (tokens: marked.TokensList | marked.Token[]) => {
			let indexLastHeading = -1;
			for (let i = 0; i < tokens.length; i++) {
				const token = tokens[i];
				if ((token as marked.Tokens.Generic).tokens?.length) {
					walkTokens((token as marked.Tokens.Generic).tokens!);
				}
				if (token.type === 'heading' && token.depth === 2) {
					if (indexLastHeading >= 0) {
						tokens.splice(indexLastHeading, i - indexLastHeading, {
							type: 'section',
							tokens: tokens.slice(indexLastHeading, i),
						} as unknown as marked.Token);
						i = indexLastHeading + 1;
					}
					indexLastHeading = i;
				}
			}
			if (indexLastHeading >= 0) {
				tokens.splice(indexLastHeading, tokens.length - indexLastHeading, {
					type: 'section',
					tokens: tokens.slice(indexLastHeading, tokens.length),
				} as unknown as marked.Token);
			}
		};
		walkTokens(tokens);
		return tokens;
	}

	$: tokens = getTokens(source);
	const renderers: Partial<Renderers> = {
		image: MdImage,
		heading: Heading,
		code: MdCode,
		section: MdSection,
		link: MdLink,
		paragraph: MdParagraph,
		listitem: MdListItem,
		codespan: MdCodeSpan,
	} as Partial<Renderers>;
</script>

{#key tokens}
	<SvelteMarkdown source={tokens} {renderers} />
{/key}
