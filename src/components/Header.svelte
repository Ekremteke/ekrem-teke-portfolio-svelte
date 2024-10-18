<script lang="ts">
	export let toggleTheme: () => void;
	export let isLightMode = true;
	function handleThemeToggle() {
		toggleTheme();
		isLightMode = !isLightMode;
	}
</script>

<header class="">
	<button on:click={handleThemeToggle} class="">
		{#if isLightMode}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 text-yellow-500"
				viewBox="0 0 24 24"
				fill="white"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 21h6M10 17h4M12 2a7 7 0 00-7 7c0 2.66 1.34 4.99 3.39 6.32.69.44 1.11 1.21 1.11 2.03v.18a1 1 0 001 1h4a1 1 0 001-1v-.18c0-.82.42-1.59 1.11-2.03A7 7 0 0019 9a7 7 0 00-7-7z"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 24 24"
				fill="white"
				stroke="none"
			>
				<circle cx="12" cy="12" r="10" fill="black" />
				<path fill="white" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
			</svg>
		{/if}
	</button>
	<div>
		<h1 class="text-xl">My Portfolio</h1>
	</div>
	<div><a href="/home">Home</a></div>
	<div><a href="/about">About</a></div>
	<div><a href="/blog">Blog</a></div>
	<div><a href="/portfolio">Portfolio</a></div>
	<div><a href="/contact">Contact</a></div>
</header>

<style>
	header {
		background-color: var(--color-header-bg);
		color: var(--color-header-text);
	}
</style>
