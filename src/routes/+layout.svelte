<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import { onMount } from 'svelte';
	import UserOverview from '../components/UserOverview.svelte';

	let theme = 'light';

	// Kullanıcının daha önce seçtiği tema varsa onu uygula
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

<Header {toggleTheme} />
<UserOverview />

<slot />

<style>
	/* Stil eklenebilir */
</style>
