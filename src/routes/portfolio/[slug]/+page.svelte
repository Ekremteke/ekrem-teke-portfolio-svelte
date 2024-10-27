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
		features: string[];
	}

	const projectDetails: Record<string, Project> = {
		'project-1': {
			title: `Decision Making Framework <br> (Voting Methods for Group Decisions)`,
			description:
				'This tool is designed to help facilitate group decisions that involve voting. It will help you and your team think through some important factors that go into good decision-making and identify which voting method to use. We recommend saving or printing the PDF summary of your results once you finish using the tool.',
			description2: `As a full-stack developer, I contributed to the development of an innovative application aimed at improving decision-making processes for nonprofits through the use of voting. Working with cutting-edge technologies such as React.js, PostgreSQL, and Node.js, my team and I delivered a high-performance and scalable solution that is now live and available for use on the Animal Charity Evaluators website.

            My technical contributions included designing and implementing the application's architecture, and coding its core functionality. I also contributed to the testing and deployment efforts, ensuring the application's stability.

            This project represents a prime example of my experience and expertise as a software developer`,
			images: [
				'/images/DMFW-1.png',
				'/images/DMFW-2.png',
				'/images/DMFW-3.png',
				'/images/Decision-Making-Framework.png'
			],
			technologies: [
				'React',
				'Node.js',
				'Express.js',
				'PostgreSQL',
				'JavaScript',
				'GitHub',
				'Trello',
				'Figma',
				'HTML',
				'CSS',
				'Bootstrap'
			],
			features: []
		},
		'project-2': {
			title: `TV Show Finder`,
			description:
				' This project showcases my early work in DOM manipulation and API handling, built using only HTML, CSS, and vanilla JavaScript. It leverages the TV Maze API to fetch data on popular TV shows, allowing users to search for and explore details about their favorite series—all without frameworks or libraries. While it’s a straightforward app, I used it to master the fundamentals of JavaScript’s DOM and asynchronous data fetching.',
			description2: `One of the highlights of this project is its progressive enhancement approach, ensuring a user-friendly experience even on slower networks or older devices. This was a great hands-on experience with the basics of web development, teaching me how to dynamically render content, handle user input, and improve app interactivity using JavaScript. <br>
<br>
Though simple, the project strengthened my foundation in core web technologies and helped me better understand the “behind-the-scenes” workings of the DOM, which has been invaluable in more complex projects. Please find the
<a href='https://cyf-ekremteke-tv.netlify.app/' style=color:#ffcc00;> link here</a>
`,
			images: [],
			technologies: ['JavaScript', 'Document Object Model (DOM)', 'HTML', 'CSS', 'Web APIs'],
			features: []
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
				img.src = src;

				return new Promise<ProjectImage>((resolve) => {
					img.onload = () => {
						resolve({
							src,
							thumbnail: src,
							loaded: true
						});
					};
					img.onerror = () => {
						resolve({
							src,
							thumbnail: src,
							loaded: false
						});
					};
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
			<a href="/portfolio" class="project-detail__back-button">← Back to Portfolio</a>
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

			{#if !project.videoUrl}
				<div class="project-detail__video">
					<iframe
						class="video"
						src="https://www.youtube.com/embed/Y_oYGpjhG2I"
						title="Mobile-Decision Making Framework (Voting Methods for Group Decisions)"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
					<iframe
						class="video"
						src="https://www.youtube.com/embed/dO8hn3LStPY"
						title="Voting Methods for Group Decisions"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			{/if}

			<div class="project-detail__info">
				<div class="project-detail__description">
					<h2 class="project-detail__subtitle">Project Description</h2>
					<p>{project.description}</p>
					<br />
					<p>{@html project.description2}</p>
				</div>

				<div class="project-detail__technologies">
					<h2 class="project-detail__subtitle">Technologies Used</h2>
					<ul class="project-detail__tech-list">
						{#each project.technologies as tech}
							<li class="project-detail__tech-item">{tech}</li>
						{/each}
					</ul>
				</div>
				{#if project.features.length > 0}
					<div class="project-detail__features">
						<h2 class="project-detail__subtitle">Key Features</h2>
						<ul class="project-detail__feature-list">
							{#each project.features as feature}
								{#if feature !== ''}
									<li class="project-detail__feature-item">{feature}</li>
								{/if}
							{/each}
						</ul>
					</div>
				{/if}
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
		color: white;
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
		color: #ffcc00;
		text-decoration: none;
		margin-right: auto;
	}

	.project-detail__title {
		font-size: 2.5rem;
		font-weight: bold;
		margin: 0;
	}

	.project-detail__gallery {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 2rem;
	}

	.project-detail__image-container {
		width: 48%;
		margin-bottom: 1rem;
		position: relative;
	}

	.project-detail__button {
		width: 100%;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
	}

	.project-detail__image {
		width: 100%;
		height: auto;
		border-radius: 10px;
	}

	.project-detail__info {
		margin-top: 2rem;
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
		margin-right: 0.5rem;
		display: inline-block;
	}

	.project-detail__features {
		margin-top: 2rem;
	}

	.project-detail__feature-list {
		list-style-type: none;
		padding: 0;
	}

	.project-detail__feature-item {
		margin-bottom: 0.5rem;
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
		position: relative;
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		max-width: 90vw;
		max-height: 90vh;
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
		width: 100%;
		height: auto;
		border-radius: 10px;
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
		position: relative;
		z-index: 2;
	}

	.modal__close,
	.modal__prev,
	.modal__next {
		position: absolute;
		top: 20px;
		background: rgba(25, 25, 25, 0.472);
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;
		border-radius: 5px;
		padding: 10px;
	}

	.modal__close {
		right: 20px;
	}

	.modal__prev {
		left: 20px;
	}

	.modal__next {
		right: 80px;
	}
</style>
