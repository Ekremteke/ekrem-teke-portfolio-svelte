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

	// Function to calculate character limit based on container width
	function calculateCharacterLimit(containerWidth: number): number {
		return Math.floor((containerWidth * 1.5) / 3);
	}

	// Debounced resize handler for responsive description truncation
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
			debouncedResize(); // Run once on mount to set initial text
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', debouncedResize);
		}
	});
</script>

<a href="/blog/{slug}" class="blog-card">
	<div class="blog-card__image-container">
		<!-- Image with lazy loading and aspect ratio for stable layout -->
		<img src={imageUrl} alt={title} class="blog-card__image" loading="lazy" />
	</div>
	<div class="blog-card__content" bind:this={contentRef}>
		<h3 class="blog-card__title">{title}</h3>
		<p class="blog-card__description">{displayText}</p>
	</div>
</a>

<style>
	.blog-card {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-rows: auto; /* Adjust height dynamically */
		gap: 0.5rem;
		align-items: center;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 0.5rem;
		text-decoration: none;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
	}

	.blog-card:hover {
		transform: translateY(-4px);
	}

	.blog-card__image-container {
		width: 100%;
		padding-top: 56.25%; /* Aspect ratio (16:9) to prevent layout shifts */
		position: relative;
		overflow: hidden;
		border-radius: 0.5rem;
	}

	.blog-card__image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	.blog-card__content {
		padding: 0.5rem;
		overflow: hidden;
	}

	.blog-card__title {
		color: inherit;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.blog-card__description {
		color: inherit;
		font-size: 0.8rem;
		line-height: 1.2;
	}

	@media (max-width: 1024px) {
		.blog-card__title {
			font-size: 1rem;
		}

		.blog-card__description {
			font-size: 0.85rem;
		}
	}

	@media (max-width: 768px) {
		.blog-card {
			grid-template-columns: 1fr; /* Stacked layout for smaller screens */
		}

		.blog-card__image-container {
			padding-top: 75%; /* Aspect ratio changes for smaller devices */
		}
	}
</style>
