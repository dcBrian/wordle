<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import { Modals } from 'svelte-modals';
	import '../app.css';

	const options = {
		reversed: true,
		intro: { y: 20 },
		duration: 1200,
		dismissable: false,
		theme: {
			'--toastBackground': 'rgb(0 0 0/0.9)',
			'--toastColor': 'white',
			'--toastBarBackground': 'rgb(0 0 0/0.9)'
		}
	};
</script>

<Modals>
	<div slot="backdrop" class="fixed top-0 bottom-0 right-0 left-0 bg-white/[.7]" />
</Modals>
<SvelteToast {options} />
<Header />

<main class="select-none  h-[calc(100vh-3rem)]">
	<slot />
</main>

<style>
	:root {
		--toastContainerTop: 1rem;
		--toastContainerRight: auto;
		--toastContainerBottom: auto;
		--toastContainerLeft: calc(50vw - 8rem);
	}
</style>
