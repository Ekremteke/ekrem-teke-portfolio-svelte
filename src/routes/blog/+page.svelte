<script>
	import BlogCard from '../../components/BlogCard.svelte';

	const blogItems = [
		{
			slug: 'code-your-future',
			imageUrl: '/images/CodeYourFuture.jpeg',
			title: 'Code Your Future',
			description:
				'Discover how I transitioned from a decade-long career in the Air Force to becoming a software developer, with the help of CodeYourFuture. A story of resilience, learning, and growth in the tech world.'
		}
	];
</script>

<div class="blog">
	<div class="blog__grid">
		{#each blogItems as item}
			<BlogCard
				slug={item.slug}
				imageUrl={item.imageUrl}
				title={item.title}
				description={item.description}
			/>
		{/each}
	</div>
</div>

<style>
	.blog {
		width: 100%;
	}

	.blog__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		max-width: 1300px;
		margin: 0 auto;
		color: currentColor;
	}

	@media (max-width: 925px) {
		.blog__grid {
			grid-template-columns: 1fr;
		}

		.blog {
			padding: 0.5rem;
		}
	}
</style>
