<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { concurrent } from 'svelte-typewriter';
	let skills = [
		'TypeScript',

		'JavaScript',
		'Svelte Kit',
		'CSS',
		'HTML',
		'PostgreSQL',
		'Express.js',
		'Node.js',
		'Front-end',
		'Back-end',
		'React',
		'Next.js',
		'Agile',
		'Software Development Life Cycle'
	];
	let index = 0;
	let roller: any;

	onMount(() => {
		roller = setInterval(() => {
			if (index === skills.length - 1) index = 0;
			else index++;
		}, 2500);
	});
	onDestroy(() => {
		clearInterval(roller);
	});
</script>

<div class="Home">
	<h1 use:concurrent={{ interval: 80 }} class="Home__name">Ekrem Teke</h1>
	<p use:concurrent={{ interval: 60 }} class="Home__title">Full-Stack Developer</p>
	{#key index}
		<p use:concurrent={{ interval: 60 }} class="Home__skills">{skills[index]}</p>
	{/key}
</div>

<style>
	.Home {
		display: grid;
		grid-template-rows: 4rem 4rem 4rem;
		grid-template-columns: 1fr;
		min-width: 100%;
		height: 1fr;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		justify-content: center;
	}
	.Home__name {
		font-weight: 900;
		font-size: xx-large;
		justify-self: center;
	}
	.Home__title {
		font-weight: 500;
		font-size: large;
		justify-self: center;
	}
	.Home__skills {
		font-weight: 300;
		font-size: medium;
		justify-self: center;
	}
</style>
