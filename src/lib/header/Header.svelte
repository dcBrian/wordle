<script lang="ts">
	import logo from './svelte-logo.svg';
</script>

<header class="flex justify-between px-4 border-b">
	<div class="h-12 w-12">
		<a href="https://kit.svelte.dev" class="flex items-center justify-start h-full w-full">
			<img src={logo} alt="SvelteKit" class="relative object-contain h-8 w-8" />
		</a>
	</div>

	<div class="flex items-center justify-center">
		<h3 class="font-extrabold text-4xl ">Wordle</h3>
	</div>

	<div class="flex ">
		<a class="flex items-center justify-center uppercase font-bold text-sm" href="https://github.com/dcBrian">
			<p>Github</p>
		</a>
	</div>
</header>
