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

	export const debouncedResize = debounce(() => {
		if (browser && contentRef) {
			const containerWidth = contentRef.clientWidth * 1.5;
			const characterLimit = Math.floor(containerWidth / 3);
			displayText =
				description.slice(0, characterLimit) + (characterLimit < description.length ? '...' : '');
		}
	}, 50);

	onMount(() => {
		if (browser) {
			window.addEventListener('resize', debouncedResize);
			debouncedResize();
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('resize', debouncedResize);
		}
	});

	$: if (browser && description) {
		debouncedResize();
	}
</script>

<a href="/blog/{slug}" class="blog-card">
	<div class="blog-card__image-container">
		<img src={imageUrl} alt={title} class="blog-card__image" />
	</div>
	<div class="blog-card__content" bind:this={contentRef}>
		<h3 class="blog-card__title">{title}</h3>
		<p class="blog-card__description">{displayText}</p>
	</div>
</a>

<style>
	.blog-card {
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

	.blog-card:hover {
		transform: translateY(-4px);
	}

	.blog-card__image-container {
		max-width: 100%;
		height: auto;
		padding: 0;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
		border-radius: 0.5rem;
	}

	.blog-card__image {
		min-width: 150%;
		justify-self: center;
		height: auto;
		object-fit: cover;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.blog-card__content {
		padding: 0.5rem;
		overflow: scroll;
		scrollbar-width: 0;
	}

	.blog-card__title {
		color: currentColor;
		font-size: 1rem;
		margin: 0 0 0.5rem 0;
	}

	.blog-card__description {
		color: currentColor;
		font-size: 0.8rem;
		line-height: 1.2;
	}

	@media (max-width: 1024px) {
		/* .blog-card__image-container {
			width: 3rem;
			height: 3rem;
		} */

		.blog-card__title {
			font-size: 1rem;
		}

		.blog-card__description {
			font-size: 0.85rem;
		}
	}

	@media (max-width: 925px) {
		.blog-card__content {
			padding: 0.75rem;
		}
	}
</style>
