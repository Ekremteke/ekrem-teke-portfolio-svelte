<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import UserOverview from '../components/UserOverview.svelte';
</script>

<div class="layout">
	<div class="content-wrapper">
		<div class="UserOverview">
			<UserOverview />
		</div>

		<main class="route-content">
			<slot />
		</main>
	</div>
	<div class="header">
		<Header />
	</div>
</div>

<style>
	.layout {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		gap: 1rem;
	}

	.content-wrapper {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		border-radius: 1rem;
		border: 2px currentColor solid;
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
		height: 100.5%;
		margin-right: -5px;
		border-radius: 1rem;
		align-items: center;
		justify-content: center;
		background-color: rgb(15, 14, 14);
		border: 2px currentColor solid;
	}
</style>
