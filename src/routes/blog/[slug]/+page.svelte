<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	interface ProjectImage {
		src: string;
		thumbnail: string;
		loaded: boolean;
	}

	interface Project {
		title: string;
		description: string;
		description2: string;
		images: string[];
		videoUrl?: string[];
		technologies: string[];
		features?: string[];
	}

	const projectDetails: Record<string, Project> = {
		'code-your-future': {
			title: `My Journey to Becoming a Software Developer:`,
			description:
				'Sometimes, life takes us on unexpected journeys, and the choices we make along the way shape who we become. My story is about embarking on a career change and finding my path as a software developer. Today, I want to share the challenges I faced, the successes I achieved, and how CodeYourFuture (CYF) played a pivotal role in my transformation.',

			description2: `
            <h3 style="font-weight: bolder;">From the Air Force to a New Career in the UK</h3>
			<br>
            I served as a lieutenant in one of Turkey’s most prestigious institutions, the Air Force, for ten years. However, due to unforeseen circumstances, I decided to move to the UK with my family. Starting a new life in a new country was challenging, especially since my professional experience did not translate to opportunities here.
            <br><br>
            I was determined to build a meaningful career in my new home, contributing to society and creating value. After much research, I discovered CodeYourFuture—a non-profit coding bootcamp offering training for those looking to transition into tech. This was an opportunity I couldn’t afford to miss.
            <br><br>
            <h3 style="font-weight: bolder;">Why CodeYourFuture?</h3> <br>
            Many coding bootcamps charge high fees—ranging from £5000 to £7000—which are paid after securing a job. While they promise job guarantees, they weren’t feasible for me. CodeYourFuture, on the other hand, was free of charge, though it didn’t guarantee employment. I was initially hesitant, but I decided to enrol because I saw it as an opportunity to gain skills and prove myself.
            <br><br>
            The journey was far from easy. I was living in Newcastle at the time, and the classes were held in Manchester and Leeds. CYF provided train tickets for these long commutes, which often took over eight hours round trip for one day of onsite learning. During the rest of the week, I reviewed class materials, prepared for upcoming lessons, and completed coding tasks while working as a food delivery driver to support my family.
            <br><br>
            Despite the challenges, the program gave me a solid foundation in web development, covering essential technologies such as JavaScript, HTML, React.js, PostgreSQL, and Express.js. I also learned how to work in an agile environment, solve problems effectively, and collaborate with a team—skills that are invaluable in the tech industry.
            <br><br>
            <h3 style="font-weight: bolder;">The Biggest Challenges</h3>
			<br>
            Learning to code from scratch at the age of 35 was one of the hardest things I’ve ever done. Balancing the demands of the bootcamp with personal responsibilities and long commutes sometimes left me feeling demotivated.
            <br><br>
            Thankfully, the support system at CYF was incredible. My Personal Development Mentor, technical mentors, and teaching assistants provided constant encouragement and guidance. Their belief in me kept me going, helping me overcome both technical and psychological hurdles.
            <br><br>
            <h3 style="font-weight: bolder;">A Golden Opportunity</h3>
			<br>
            In my home country, having a profession is often described as owning a “golden bracelet”—a symbol of value and security. Today, I feel like I have that golden bracelet. Although I haven’t yet secured a job, I can confidently say that I am a software developer. The sense of accomplishment and psychological comfort this brings is hard to put into words.
            <br><br>
            Being a software developer is not just about writing code; it’s about creating solutions and building products that make a difference. I am eager to join a reputable company and apply the skills I’ve gained to contribute to meaningful projects that benefit society.
            <br><br>
            <h3 style="font-weight: bolder;">Looking Back: What I’ve Learned</h3>
			<br>
            If I could share one piece of advice with someone considering CodeYourFuture, it would be this: Take the leap. Yes, it’s challenging, and yes, it requires hard work and dedication, but the rewards are worth it. The program not only equips you with technical skills but also instils resilience, discipline, and confidence.
            <br><br>
            For those just starting, I’d recommend preparing for the journey by exploring coding basics, practising patience, and embracing a growth mindset. Success doesn’t happen overnight, but with perseverance and the right support, it is achievable.
            <br><br>
            <h3 style="font-weight: bolder;">Final Thoughts</h3>
			<br>
            My journey with CodeYourFuture has been transformative. It has given me the skills, confidence, and hope to build a fulfilling career in software development. While my journey is still ongoing, I’m proud of how far I’ve come and excited about the road ahead.
            <br><br>
            If you’re looking for a way to start a new career, I encourage you to consider CodeYourFuture. It’s not just a bootcamp—it’s a community that helps you unlock your potential and build a future you can be proud of.
        `,

			images: [
				'/images/CYF1.jpeg',
				'/images/CYF2.jpeg',
				'/images/CYF3.jpeg',
				'/images/CYF4.jpg',
				'/images/CYF6.jpg',
				'/images/CYF5.jpg'
			],

			technologies: [
				'JavaScript',
				'CSS',
				'HTML',
				'React',
				'PostgreSQL',
				'Express.js',
				'Node',
				'Agile',
				'Git',
				'Team Collaboration',
				'Problem Solving'
			]
		},
	'accenture-impact-week': {
    title: `My Experience at Accenture’s Impact Week: A Journey of Collaboration and Innovation`,
    description:
        'In the last week of March 2025, I had the privilege of participating in an event organised by Accenture called Impact Week, also referred to as Work Experience Week in some materials. It was an incredibly intense and enriching experience, covering a broad range of topics, from Generative AI and Agile methodologies to Design Thinking and JavaScript.',

    description2: `
        <h3 style="font-weight: bolder;">Accenture: A Global Powerhouse</h3>
        <br>
        Accenture is a global powerhouse in the tech industry, with an impressive:
        <ul>
            <li>801,000+ employees worldwide</li>
            <li>9,000+ clients across 120+ countries</li>
            <li>350+ partners within its ecosystem</li>
            <li>Offices and operations in 49 countries and 200+ cities</li>
        </ul>
        <br>
        One of the aspects that impressed me the most about Accenture was its commitment to AI and its dedication to fostering a diverse and inclusive working environment.
        <br><br>

        <h3 style="font-weight: bolder;">Team One: A Unique Blend of Talents</h3>
        <br>
        During the programme, we were divided into teams, and I was placed in Team One. My teammates were all incredibly valuable, friendly, and respectful individuals. Despite this being a tech-focused programme, my team consisted of a psychologist, a pharmacist, a university school leaver, a recent sixth-form graduate, and a former Brazilian police officer who had also studied history. While each member had an interest in technology, I was the most experienced when it came to software development.
        <br><br>
        The five-day programme began with an introduction to Accenture, followed by presentations on Agile, HTML, and CSS. By the final day, we were expected to present our projects—meaning we had only three days to develop them! Our project was based on five core requirements:
        <ul>
            <li>Creating an Accenture sub-brand</li>
            <li>Developing a functional contact page</li>
            <li>Building a portfolio page featuring all team members</li>
            <li>Designing a resource page</li>
            <li>Implementing an FAQ section</li>
        </ul>
        <br>
        Our project aimed to support school leavers entering the tech industry by providing them with valuable resources and a Q&A section. In addition to meeting these criteria, we decided to integrate an AI chatbot, allowing users to receive career planning advice based on their strengths and weaknesses. We also included a feedback form for continuous improvement and utilised NodeMailer to make the contact page fully functional—submitting the form would trigger an email directly to my inbox.
        <br><br>

        <h3 style="font-weight: bolder;">Leading as a Scrum Master & Tech Lead</h3>
        <br>
        Given my experience, I naturally took on the roles of Scrum Master and Tech Lead. I shared my knowledge of Agile methodologies and encouraged my team to use collaboration tools like Trello to manage tasks efficiently. As we didn't have computers on the first day, we began by sketching out our prototype on paper, aligning on a shared vision for the project.
        <br><br>
        Considering that we essentially had only two full days for development (as one day was dedicated to preparing for the presentation), I explained to my team that completing a fully polished project within such a tight timeframe would be nearly impossible for a six-person team. Decision-making and task distribution would consume a significant portion of our time. However, ensuring that everyone contributed to the project was crucial.
        <br><br>
        To address this challenge, I took the initiative to build the project’s Minimum Viable Product (MVP) on the first night, incorporating the agreed-upon requirements and branding elements. The following day, during our first sprint review, the team loved the foundation I had built. From there, we worked collaboratively—some teammates focused on sourcing visuals, others worked on logo development, and two members prepared the presentation. A teammate with tech knowledge integrated the AI career advisor, while I handled the backend, implementing Express.js and NodeMailer for the contact page, refining the front-end styling, and ensuring the site was fully responsive across all devices.
        <br><br>
        In the end, Team One emerged as the winning team!
        <br><br>

        <h3 style="font-weight: bolder;">Mock Interview & The Apprenticeship Programme</h3>
        <br>
        As part of the programme, Accenture also conducted a mock interview session. However, I must admit that after several nights of limited sleep, focusing on completing the project, my performance in the mock interview wasn’t as strong as I would have liked. In hindsight, I suspect this may have impacted my selection for Accenture’s Degree Apprenticeship Programme, which was the next step following this experience.
        <br><br>
        Despite playing a crucial role in the winning team, I was not selected. I never received a clear explanation, but I suspect two possible reasons:
        <ul>
            <li>Mock Interview Performance – Although it was labelled as a ‘mock’ interview, it may have held more weight than expected.</li>
            <li>Security Clearance – Accenture works on government-related projects and requires candidates to have been in the UK for at least five years. I have been in the UK for four years, meaning I would have met the requirement by the first year of the apprenticeship.</li>
        </ul>
        <br>
        The response I received stated:
        <blockquote>
            “Due to the highly competitive nature of this programme, we based our decisions on the top scorers in the online assessment.”
        </blockquote>
        This explanation felt somewhat inconsistent—if my assessment scores were not among the highest, it raises the question of why I was invited to the programme in the first place. If my time in the UK was a determining factor, this was something that could have been considered earlier in the process. Regardless, while the outcome was not what I had hoped for, I still appreciate the experience and the opportunity to develop my skills in such a dynamic environment.
        <br><br>

        <h3 style="font-weight: bolder;">Final Thoughts: A Valuable Experience Nonetheless</h3>
        <br>
        Despite not being selected for the apprenticeship, I am grateful for having participated in Impact Week. It provided me with a refreshing experience, reinforcing my skills and knowledge. Leading a team in such a fast-paced environment was a confidence booster, and I had the opportunity to meet amazing, friendly, and talented teammates.
        <br><br>
        The presentations, especially those on Generative AI, were incredibly insightful and exciting.
        <br><br>
        Would I do it again? Absolutely.  
        Would I apply to Accenture again? Probably not.  
        But one thing is certain: this experience has only strengthened my passion for technology and leadership. Onwards and upwards!
    `,

    images: [
        '/images/iw-1.jpg',
		'/images/iw-2.png',
		'/images/iw-3.jpeg',
		'/images/iw-4.jpg',
		'/images/iw-5.jpg',
		'/images/iw-6.jpg',
		'/images/iw-7.jpeg',
		'/images/iw-8.jpg',
        
    ],

    technologies: [
        'Generative AI',
        'Agile',
        'JavaScript',
        'Design Thinking',
        'Node.js',
        'Express.js',
        'HTML',
        'CSS',
        'AI Chatbots',
        'NodeMailer'
    ]
}
	};

	let project: Project | null = null;
	let isModalOpen = false;
	let selectedImage: ProjectImage | null = null;
	let currentImageIndex = 0;
	let processedImages: ProjectImage[] = [];
	let isLoading = true;

	async function preloadImages(imageSources: string[]): Promise<ProjectImage[]> {
		return Promise.all(
			imageSources.map(async (src) => {
				const img = new Image();

				return new Promise<ProjectImage>((resolve) => {
					const timeout = setTimeout(() => {
						resolve({
							src,
							thumbnail: src,
							loaded: false
						});
					}, 5000);
					img.onload = () => {
						clearTimeout(timeout);
						resolve({
							src,
							thumbnail: src,
							loaded: true
						});
					};

					img.onerror = () => {
						clearTimeout(timeout);
						resolve({
							src,
							thumbnail: src,
							loaded: false
						});
					};

					img.src = src;
				});
			})
		);
	}

	onMount(async () => {
		const slug = $page.params.slug;
		project = projectDetails[slug];

		if (project) {
			isLoading = true;
			processedImages = await preloadImages(project.images);
			isLoading = false;
		}
	});

	function openImageModal(image: ProjectImage) {
		selectedImage = image;
		currentImageIndex = processedImages.indexOf(image);
		isModalOpen = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		isModalOpen = false;
		document.body.style.overflow = 'auto';
	}

	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % processedImages.length;
		selectedImage = processedImages[currentImageIndex];
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + processedImages.length) % processedImages.length;
		selectedImage = processedImages[currentImageIndex];
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isModalOpen) return;

		switch (event.key) {
			case 'ArrowLeft':
				prevImage();
				break;
			case 'ArrowRight':
				nextImage();
				break;
			case 'Escape':
				closeModal();
				break;
		}
	}

	function handleModalKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

{#if project}
	<div class="project-detail">
		<div class="project-detail__header">
			<a href="/blog" class="project-detail__back-button">← Back to Blogs</a>
			<h1 class="project-detail__title">{@html project.title}</h1>
		</div>

		<div class="project-detail__content">
			{#if isLoading}
				<div class="loading-indicator">Loading images...</div>
			{:else}
				<div class="project-detail__gallery">
					{#if processedImages.length !== 0}
						{#each processedImages as image}
							<div class="project-detail__image-container" in:fly|local={{ y: 20, duration: 200 }}>
								<button
									type="button"
									on:click={() => openImageModal(image)}
									on:keydown={(e) => e.key === 'Enter' && openImageModal(image)}
									aria-label="Open Image Modal"
									class="project-detail__button"
								>
									<img
										src={image.thumbnail}
										alt="Project"
										class="project-detail__image"
										loading="lazy"
										decoding="async"
									/>
								</button>
							</div>
						{/each}
					{/if}
				</div>
			{/if}

			{#if project.videoUrl && project.videoUrl.length > 0}
				<div class="project-detail__video">
					{#each project.videoUrl as url}
						<iframe
							class="video"
							src={url}
							title="Project Video"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					{/each}
				</div>
			{/if}

			<div class="project-detail__info">
				<div class="project-detail__description">
					<h2 class="project-detail__subtitle">How CodeYourFuture Transformed My Career</h2>
					<p>{project.description}</p>
					<br />
					<p>{@html project.description2}</p>
				</div>

				<div class="project-detail__technologies">
					<h2 class="project-detail__subtitle">Technologies I learned</h2>
					<ul class="project-detail__tech-list">
						{#each project.technologies as tech}
							<li class="project-detail__tech-item">{tech}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
{/if}
{#if isModalOpen && selectedImage}
	<div class="modal-backdrop" aria-hidden="true">
		<dialog class="modal" aria-label="Image Gallery Modal" open>
			<div class="modal__content">
				<div class="modal__image-wrapper">
					<img
						src={selectedImage.src}
						alt="Gallery Modal"
						class="modal__image"
						transition:fade|local={{ duration: 150 }}
					/>
				</div>
				<div class="modal__controls">
					<button type="button" class="modal__close" on:click={closeModal} aria-label="Close Modal">
						✕
					</button>
					<button
						type="button"
						class="modal__prev"
						on:click={prevImage}
						aria-label="Previous Image"
					>
						←
					</button>
					<button type="button" class="modal__next" on:click={nextImage} aria-label="Next Image">
						→
					</button>
				</div>
				<button
					type="button"
					class="modal__overlay"
					on:click={closeModal}
					aria-label="Close Modal"
				/>
			</div>
		</dialog>
	</div>
{/if}

<style>
	.project-detail {
		color: currentColor;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.loading-indicator {
		text-align: center;
		padding: 2rem;
		color: rgba(255, 255, 255, 0.7);
	}

	.project-detail__header {
		display: flex;
		align-items: center;
		margin-bottom: 2rem;
	}

	.project-detail__back-button {
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0.395);
		color: #ffb300;
		text-decoration: none;
		margin-right: auto;
	}

	.project-detail__title {
		font-size: 2rem;
		font-weight: bold;
		margin: 0;
	}

	.project-detail__gallery {
		display: flex;
		flex-wrap: wrap;
		margin-bottom: 1.5rem;
		gap: 0.2rem;
		justify-content: space-around;
	}

	.project-detail__image-container {
		display: flex;
		margin: 0.2rem;
		min-width: 10rem;
		max-width: 12rem;
	}

	.project-detail__button {
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}

	.project-detail__image {
		height: auto;
		border-radius: 0.5rem;
	}

	.project-detail__info {
		margin-top: 1.5rem;
	}

	.project-detail__subtitle {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.project-detail__description,
	.project-detail__technologies {
		margin-bottom: 2rem;
	}

	.project-detail__tech-list {
		list-style-type: none;
		padding: 0;
	}

	.project-detail__tech-item {
		background: rgba(255, 255, 255, 0.1);
		padding: 0.5rem 1rem;
		border-radius: 5px;
		margin: 0.2rem;
		display: inline-block;
	}
	.project-detail__video {
		display: flex;
		justify-content: space-around;
	}

	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.modal {
		position: fixed;
		background: transparent;
		border: none;
		max-width: 90%;
		max-height: 90%;
	}

	.modal__content {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.modal__image-wrapper {
		margin: 0 auto;
	}

	.modal__image {
		max-width: 90%;
		max-height: 700px;
		border-radius: 0.5rem;
		justify-self: center;
	}

	.modal__overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: transparent;
		border: none;
		cursor: pointer;
		z-index: 1;
	}

	.modal__controls {
		position: fixed;
		z-index: 1002;
		bottom: 1rem;
	}

	.modal__close,
	.modal__prev,
	.modal__next {
		/* position: absolute;
		bottom: 1rem; */
		background: rgba(25, 25, 25, 0.472);
		border: none;
		color: currentColor;
		font-size: 2rem;
		cursor: pointer;
		border-radius: 5px;
		padding: 10px;
	}

	.modal__close {
		position: fixed; /* Sağ üst köşeye sabitle */
		right: 2rem;
		top: 2rem;
		background: rgba(25, 25, 25, 0.7);
		border: none;
		color: #fff;
		font-size: 2rem;
		cursor: pointer;
		border-radius: 5px;
		padding: 10px;
	}

	.modal__prev {
		position: fixed; /* Sol alt köşeye sabitle */
		left: 2rem;
		bottom: 2rem;
		background: rgba(25, 25, 25, 0.7);
		border: none;
		color: #fff;
		font-size: 2rem;
		cursor: pointer;
		border-radius: 5px;
		padding: 10px;
	}

	.modal__next {
		position: fixed; /* Sağ alt köşeye sabitle */
		right: 2rem;
		bottom: 2rem;
		background: rgba(25, 25, 25, 0.7);
		border: none;
		color: #fff;
		font-size: 2rem;
		cursor: pointer;
		border-radius: 5px;
		padding: 10px;
	}
</style>
