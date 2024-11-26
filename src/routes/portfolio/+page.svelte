<!-- src/routes/portfolio/+page.svelte -->
<script>
	import PortfolioCard from '../../components/PortfolioCard.svelte';

	const portfolioItems = [
		{
			slug: 'decision-maker',
			imageUrl: '/images/Animal-Charity-Evaluators.png',
			title: 'Decision Making Framework',
			description:
				'This tool is designed to help facilitate group decisions that involve voting. It will help you and your team think through some important factors that go into good decision-making and identify which voting method to use.'
		},
		{
			slug: 'TV-show',
			imageUrl: '/images/tvmaze.png',
			title: 'TV Show Finder',
			description:
				'This project showcases my early work in DOM manipulation and API handling, built using only HTML, CSS, and vanilla JavaScript. It leverages the TV Maze API to fetch data on popular TV shows, allowing users to search for and explore details about their favorite series—all without frameworks or libraries. While it’s a straightforward app, I used it to master the fundamentals of JavaScript’s DOM and asynchronous data fetching.'
		},
		{
			slug: 'Tea-Roulette',
			imageUrl: '/images/Tea-roulette.png',
			title: 'Tea-Roulette',
			description:
				'Tea Roulette is a fun, interactive web application designed to foster friendly interactions among team members in the office. Built with JavaScript, Express.js, Node.js, HTML, and CSS, this app allows users to enter the names of people working in the office on a given day, along with their tea preferences. With a playful "roulette" spin feature, the app randomly selects one person who gets to be the "winner"—and their prize is the privilege of preparing tea for everyone!'
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
		color: currentColor;
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
