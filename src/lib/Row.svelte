<script lang="ts">
	import { jiggle } from '$lib/../store';
	import Brick from './Brick.svelte';
	import type { Box } from './types';

	export let isActive: boolean;
	export let row: Box[];
</script>

<div
	class={`flex space-x-2 my-1 min-h-10 ${isActive ? 'animate-shake' : ''}`}
	on:animationend={() => ($jiggle = false)}
>
	{#each row as e}
		{#key e.key}
			<Brick value={e} />
		{/key}
	{/each}
</div>
