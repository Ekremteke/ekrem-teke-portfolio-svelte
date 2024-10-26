<!-- src/routes/portfolio/+page.svelte -->
<script>
	import PortfolioCard from '../../components/PortfolioCard.svelte';

	const portfolioItems = [
		{
			slug: 'project-1',
			imageUrl: '/images/Animal-Charity-Evaluators.png',
			title: 'Title 1',
			description:
				'This tool is designed to help facilitate group decisions that involve voting. It will help you and your team think through some important factors that go into good decision-making and identify which voting method to use. '
		},
		{
			slug: 'project-2',
			imageUrl: '',
			title: 'Example 2',
			description: 'Example description 2'
		},
		{
			slug: 'project-3',
			imageUrl: '',
			title: 'Example 3',
			description: 'Example description 3'
		},
		{
			slug: 'project-4',
			imageUrl: '',
			title: 'Example 4',
			description: ''
		},
		{
			slug: 'project-5',
			imageUrl: '',
			title: 'Example 5',
			description: 'Example description 5'
		},
		{
			slug: 'project-6',
			imageUrl: '',
			title: 'Example 6',
			description: 'Example description 6'
		}
	];
</script>

<div class="portfolio">
	<div class="portfolio__grid">
		{#each portfolioItems as item}
			<PortfolioCard
				slug={item.slug}
				imageUrl={item.imageUrl}
				title={item.title}
				description={item.description}
			/>
		{/each}
	</div>
</div>

<style>
	.portfolio {
		width: 100%;
	}

	.portfolio__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
		max-width: 1300px;
		margin: 0 auto;
	}

	@media (max-width: 925px) {
		.portfolio__grid {
			grid-template-columns: 1fr;
		}

		.portfolio {
			padding: 0.5rem;
		}
	}
</style>
