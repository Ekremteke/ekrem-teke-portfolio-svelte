<script lang="ts">
	export let title = '';
	export let description = '';
	export let imageUrl = '';
	export let slug = '';

	import { onMount, onDestroy } from 'svelte';
	import debounce from 'lodash/debounce';

	let displayText = description;
	let contentRef: HTMLElement | null = null;

	const debouncedResize = debounce(() => {
		if (contentRef) {
			const containerWidth = contentRef.clientWidth * 1.5;
			const characterLimit = Math.floor(containerWidth / 3);
			displayText =
				description.slice(0, characterLimit) + (characterLimit < description.length ? '...' : '');
		}
	}, 200);

	onMount(() => {
		debouncedResize();
		window.addEventListener('resize', debouncedResize);
	});

	onDestroy(() => {
		window.removeEventListener('resize', debouncedResize);
	});
</script>

<a href="/portfolio/{slug}" class="portfolio-card">
	<div class="portfolio-card__image-container">
		<img src={imageUrl} alt={title} class="portfolio-card__image" />
	</div>
	<div class="portfolio-card__content" bind:this={contentRef}>
		<h3 class="portfolio-card__title">{title}</h3>
		<p class="portfolio-card__description">{displayText}</p>
	</div>
</a>

<style>
	.portfolio-card {
		display: grid;
		align-items: center;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 0.5rem;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 10rem;
		transition: transform 0.2s ease-in-out;
		cursor: pointer;
		text-decoration: none;
		gap: 0.5rem;
	}

	.portfolio-card:hover {
		transform: translateY(-4px);
	}

	.portfolio-card__image-container {
		min-width: 100%;
		height: auto;
		padding: 0.6rem 0.2rem 0.6rem 0.6rem;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.portfolio-card__image {
		min-width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 0.5rem;
		position: relative;
	}

	.portfolio-card__content {
		padding: 0.5rem;
		overflow: scroll;
	}

	.portfolio-card__title {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1rem;
		margin: 0 0 0.5rem 0;
	}

	.portfolio-card__description {
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.8rem;
		line-height: 1.2;
	}

	@media (max-width: 1024px) {
		.portfolio-card__title {
			font-size: 1rem;
		}

		.portfolio-card__description {
			font-size: 0.85rem;
		}
	}

	@media (max-width: 925px) {
		.portfolio-card__content {
			padding: 0.75rem;
		}
	}
</style>
