<script lang="ts">
	import { current, guesses, jiggle, position, status, turn, word } from '$lib/../store';
	import Row from '$lib/Row.svelte';
	import { GAME_STATUS, type Box } from '$lib/types';
	import { formatGuess, openDelayedModal, pickRandomSolution, _delay } from '$lib/utils';
	import { toast } from '@zerodevx/svelte-toast';
	import throttle from 'lodash/throttle';
	import { onMount } from 'svelte';

	export let data: any;
	let solution: Box[];

	onMount(async () => (solution = pickRandomSolution(data.solutions)));

	$: if ($turn > 5 && $status !== GAME_STATUS.WIN) $status = GAME_STATUS.LOOSE;

	$: if ($status === GAME_STATUS.RELOADING) {
		solution = pickRandomSolution(data.solutions);
		_delay(() => ($status = GAME_STATUS.INITIALIZED), 300);
	} else if ($status === GAME_STATUS.LOOSE) {
		openDelayedModal(false, solution, 580);
	}

	const throttleJiggleAnimation = throttle(() => {
		$jiggle = true;
		toast.push('Word must be 5 characters long');
	}, 450);

	const handleKeyUp = ({ key: input }: { key: string }) => {
		if ($turn > 5) return;

		if (input === 'Enter') {
			if ($word !== 5) {
				throttleJiggleAnimation();
				return;
			}
			guesses.updateWord(
				$turn,
				formatGuess(solution, $current, () => ($status = GAME_STATUS.WIN))
			);

			position.next();
		}
		if ((input === 'Backspace' || input === 'Del') && $word > 0) {
			guesses.updateLetter($turn, true);
			position.updateWord(-1);
			return;
		}

		if (/^[A-Za-z]$/.test(input) && $word < 5) {
			guesses.updateLetter($turn, false, { key: input } as Box);
			position.updateWord(1);
		}
	};
	$: if (solution) console.log(solution?.map((e) => e.key).join(''));
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<svelte:window on:keyup={handleKeyUp} />

{#if $status === GAME_STATUS.INITIALIZED || $status === GAME_STATUS.WIN || $status === GAME_STATUS.LOOSE}
	<section>
		<section class="flex flex-col items-center">
			{#each $guesses as row, i (i)}
				<Row isActive={$turn === i && $jiggle} {row} />
			{/each}
		</section>
	</section>
{/if}
