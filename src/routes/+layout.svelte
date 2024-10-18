<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import { onMount } from 'svelte';
	import UserOverview from '../components/UserOverview.svelte';

	let theme = 'dark';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			theme = savedTheme;
			document.documentElement.classList.add(savedTheme);
		}
	});

	function toggleTheme() {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		theme = newTheme;

		document.documentElement.classList.remove('light', 'dark');
		document.documentElement.classList.add(newTheme);

		localStorage.setItem('theme', newTheme);
	}
</script>

<div class="layout-container">
	<div>
		<Header {toggleTheme} />
	</div>

	<div class="content-wrapper">
		<UserOverview />
		<main class="route-content">
			<slot />
		</main>
	</div>
</div>

<style>
	.layout-container {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.content-wrapper {
		display: flex;
		flex: 1;
		overflow: hidden;
	}

	.route-content {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
	}

	/* You may need to add styles for UserOverview to control its width */
</style>
