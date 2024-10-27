<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import UserOverview from '../components/UserOverview.svelte';
	import { onMount } from 'svelte';

	let navbarStyle = '';

	function handleResize() {
		const width = window.innerWidth;

		const baseWidth = 2000;
		const minWidth = 900;

		const rightPercentage = ((width - minWidth) / (baseWidth - minWidth)) * (5 - 1) + 1;

		navbarStyle = `right: ${rightPercentage}%;`;
	}

	onMount(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div class="layout">
	<div class="content-wrapper">
		<header class="UserOverview">
			<UserOverview />
			<div class="Navbar" style={navbarStyle}>
				<Navbar />
			</div>
		</header>

		<main class="route-content">
			<slot class="slot" />
		</main>
	</div>
</div>

<style>
	.layout {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		gap: 1.2rem;
	}

	.content-wrapper {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		border: 0px currentColor solid;
		box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
		background-color: rgba(0, 0, 0, 0.207);
	}

	.slot {
		width: 100%;
		min-height: min-content;
	}
	.UserOverview {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30%;
	}
	.route-content {
		display: flex;
		width: 70%;
		height: 100.1%;
		margin-right: -5px;
		border-radius: 1rem;
		align-items: flex-start;
		padding: 1rem;
		justify-content: center;
		background-color: rgb(15, 14, 14);
		box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
		overflow-y: auto;
	}

	.Navbar {
		background-color: rgba(0, 0, 0, 0.207);
		border-radius: 1rem;
		position: absolute;
		top: 10%;
	}
	.slot {
		width: 100%;
	}
	@media screen and (max-size: 640px) {
	}
</style>
