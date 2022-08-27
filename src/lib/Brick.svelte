<script lang="ts">
	import type { Box } from './types';
	import { fly } from './utils';

	export let value: Box;
	$: ({ key, color } = value);
</script>

<div
	style="transition-delay:{parseInt(value.id.slice(-1)) * 50 + 'ms'}"
	class={`box ${key && !color && 'filled '} ${color && `${color} text-white`}`}
	in:fly={{ duration: 400, delay: 0 }}
>
	<span class="m-auto font-extrabold uppercase text-xl sm:text-4xl">{key || ''}</span>
</div>
