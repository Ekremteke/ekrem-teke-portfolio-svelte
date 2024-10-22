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
			<slot class="slot" />
		</main>
	</div>
	<div class="Header">
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
		align-items: center;
		justify-content: center;
		background-color: rgb(15, 14, 14);
		border: 0px currentColor solid;
		box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
	}
	.Header {
		align-self: flex-start;
		background-color: rgba(0, 0, 0, 0.207);
		border-radius: 1rem;
	}
	.slot {
		width: 100%;
	}
</style>
