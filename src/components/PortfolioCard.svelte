<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import debounce from 'lodash/debounce';

	export let title = '';
	export let description = '';
	export let imageUrl = '';
	export let slug = '';

	let displayText = description;
	let contentRef: HTMLElement | null = null;

	// Character limit calculation
	function calculateCharacterLimit(containerWidth: number): number {
		return Math.floor((containerWidth * 1.5) / 3);
	}

	// Resize handler
	const debouncedResize = debounce(() => {
		if (contentRef) {
			const containerWidth = contentRef.clientWidth;
			const characterLimit = calculateCharacterLimit(containerWidth);

			displayText =
				description.slice(0, characterLimit) + (characterLimit < description.length ? '...' : '');
		}
	}, 100);

	// Lifecycle hooks
	onMount(() => {
		if (browser) {
			window.addEventListener('resize', debouncedResize);
			debouncedResize(); // Run once on mount
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', debouncedResize);
		}
	});
</script>

<a href={`/portfolio/${slug}`} class="portfolio-card">
	<div class="portfolio-card__image-container">
		<img src={imageUrl} alt={title} class="portfolio-card__image" loading="lazy" />
	</div>
	<div class="portfolio-card__content" bind:this={contentRef}>
		<h3 class="portfolio-card__title">{title}</h3>
		<p class="portfolio-card__description">{displayText}</p>
	</div>
</a>

<style>
	.portfolio-card {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 10rem;
		gap: 0.5rem;
		align-items: center;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 0.5rem;
		text-decoration: none;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
	}

	.portfolio-card:hover {
		transform: translateY(-4px);
	}

	.portfolio-card__image-container {
		padding: 0.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.portfolio-card__image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.portfolio-card__content {
		padding: 0.5rem;
		overflow: hidden; /* Scroll yerine overflow'u gizledik */
	}

	.portfolio-card__title {
		color: inherit;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.portfolio-card__description {
		color: inherit;
		font-size: 0.85rem;
		line-height: 1.4;
	}

	@media (max-width: 1024px) {
		.portfolio-card {
			grid-template-rows: auto;
		}
		.portfolio-card__title {
			font-size: 0.95rem;
		}
		.portfolio-card__description {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 768px) {
		.portfolio-card {
			grid-template-columns: 1fr;
		}
		.portfolio-card__image-container {
			padding: 3rem;
		}
	}
</style>
