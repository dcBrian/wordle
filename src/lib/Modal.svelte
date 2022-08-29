<script lang="ts">
	import { guesses, position, status, used } from '$lib/../store';
	import { closeModal } from 'svelte-modals';
	import { fade } from 'svelte/transition';
	import Row from './Row.svelte';
	import { GAME_STATUS, type Box } from './types';
	export let isOpen: boolean;
	export let title: boolean;
	export let answer: Box[];
	isOpen = true;
</script>

{#if isOpen}
	<div
		transition:fade
		role="dialog"
		class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm bg-white p-8 border-2  border-gray-300"
	>
		<div class="flex flex-col space-y-8">
			<h2 class={`text-5xl capitalize font-extrabold text-center ${title ? 'text-green-400' : 'text-red-400'}`}>
				{title ? 'You won' : 'You lost'}
			</h2>

			<div>
				<p>The correct answer was:</p>
				<Row isActive={false} row={answer} />
			</div>

			<div class="mx-auto">
				<button
					class="capitalize text-lg border-2 p-3 rounded-sm cursor-pointer"
					on:click={() => {
						used.update((e) => ({}));
						position.reset();
						guesses.reset();
						$status = GAME_STATUS.RELOADING;
						closeModal();
					}}>Play Again</button
				>
			</div>
		</div>
	</div>
{/if}
