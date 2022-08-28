<script lang="ts">
	export let handleKeyUp: ({ key: input }: { key: string }) => void;
	const qwerty: string[] = ['q w e r t y u i o p', 'a s d f g h j k l', 'Enter z x c v b n m Del'];
	import { used } from '$lib/../store';
	import { fly } from './utils';
</script>

<div in:fly={{ duration: 400, delay: 0 }}>
	{#each qwerty as row}
		<div class="flex justify-center space-x-1 my-2">
			{#each row.split(' ') as letter}
				<div
					class={`p-2 sm:p-3 cursor-pointer font-bold rounded-md text-xs sm:text-md flex uppercase border-2  border-gray-300 active:bg-gray-300 active:border-gray-300 active:text-white transition-colors duration-300 ${$used[letter]}`}
					on:click={() => handleKeyUp({ key: letter })}
				>
					<p>{letter}</p>
				</div>
			{/each}
		</div>
	{/each}
</div>
