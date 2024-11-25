<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { concurrent } from 'svelte-typewriter';

	let containerWidth: number;
	let aboutText = `
Hello, I'm <span style= "font-weight:900; font-size:1.2rem">Ekrem</span>, a passionate <span style= "font-weight:900; font-size:1.2rem">software developer </span> with a focus on web development and design
While I specialise primarily in front-end technologies, I have a solid understanding of back-end development as well.<br>
<br> My journey in tech began in 2022 when I completed an intensive one-year Full-Stack Web Development course with Code Your Future in Manchester.<br>
Following this, I expanded my skill-set through additional training with Prime Talent in AWS fundamentals and earned a Level-5 Full-Stack Development qualification from Gateshead College.
`;

	let displayText = aboutText;

	onMount(() => {
		const handleResize = () => {
			const containerWidth = window.innerWidth * 1.6;
			const characterLimit = Math.floor(containerWidth / 5);
			displayText =
				aboutText.slice(0, characterLimit) + (characterLimit < aboutText.length ? '...' : '');
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	let skills = [
		'TypeScript',
		'JavaScript',
		'Svelte Kit',
		'CSS',
		'HTML',
		'PostgreSQL',
		'Express.js',
		'Node.js',
		'Front-end',
		'Back-end',
		'React',
		'Next.js',
		'Agile',
		'Software Development Life Cycle'
	];

	let index = 0;
	let roller: any;

	onMount(() => {
		roller = setInterval(() => {
			if (index === skills.length - 1) index = 0;
			else index++;
		}, 2500);
	});

	onDestroy(() => {
		clearInterval(roller);
	});
</script>

<div class="Home">
	<div class="Home__info">
		<h1 use:concurrent={{ interval: 80 }} class="Home__info--name">Ekrem Teke</h1>
		<p use:concurrent={{ interval: 60 }} class="Home__info--title">Full-Stack Developer</p>
		{#key index}
			<p use:concurrent={{ interval: 60 }} class="Home__skills">{skills[index]}</p>
		{/key}
	</div>
	<div class="Home__About">
		<p class="Home__About--text">{@html displayText}</p>
		<a href="/about" class="read-more">To read more about me</a>
	</div>
</div>

<style>
	.Home {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr;
		min-width: 100%;
		height: 1fr;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		align-self: center;
		justify-self: center;
	}

	.Home__info {
		display: grid;
		grid-template-rows: 3rem 3rem 6rem;
		justify-content: center;
		align-items: center;
	}

	.Home__info--name {
		font-weight: 900;
		font-size: xx-large;
		justify-self: center;
	}

	.Home__info--title {
		font-weight: 500;
		font-size: large;
		justify-self: center;
	}

	.Home__skills {
		font-weight: 300;
		font-size: medium;
		justify-self: center;
	}

	.Home__About {
		width: 100%;
		margin: 0 auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.read-more {
		color: #0066cc;
		text-decoration: none;
		font-weight: 700;
		transition: color 0.3s ease;
	}

	.read-more:hover {
		color: #003366;
	}
	.Home__About--text {
		font-weight: 600;
		color: color-mix(in srgb, black 70%, purple 80%);
	}
	.dark .Home .Home__About--text {
		color: color-mix(in srgb, rgb(255, 255, 255) 80%, rgb(128, 0, 128) 50%);
	}
	.dark .Home .read-more:hover {
		color: #9aa4ae;
	}
</style>
