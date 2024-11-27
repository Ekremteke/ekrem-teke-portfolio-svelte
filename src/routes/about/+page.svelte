<script>
	import { fade } from 'svelte/transition';
</script>

<div class="About" in:fade>
	<div class="about__left-side">
		<section class="personal-details">
			<h2 class="personal-details__title">Personal Details</h2>
			<div class="personal-details__info">
				<div class="personal-details__item">
					<h3 class="personal-details__label">Age:</h3>
					<p class="personal-details__value">35</p>
				</div>
				<div class="personal-details__item">
					<h3 class="personal-details__label">Residence:</h3>
					<p class="personal-details__value">United Kingdom</p>
				</div>
				<div class="personal-details__item">
					<h3 class="personal-details__label">Address:</h3>
					<p class="personal-details__value">Lumley Gardens, Gateshead, NE8 3QB</p>
				</div>
				<div class="personal-details__item">
					<h3 class="personal-details__label">Email:</h3>
					<p class="personal-details__value">ekremteke.uk@gmail.com</p>
				</div>
			</div>
		</section>
		<section class="skills">
			<h2 class="skills__title">Technical Skills</h2>
			<div class="skills__grid">
				<div class="skills__category">
					<h4 class="skills__category-title">Frontend</h4>
					<ul class="skills__list">
						<li class="skills__item">JavaScript (ES6+)</li>
						<li class="skills__item">React</li>
						<li class="skills__item">HTML5 & CSS3</li>
						<li class="skills__item">TypeScript</li>
						<li class="skills__item">Next.js</li>
						<li class="skills__item">Tailwind, Bootstrap CSS</li>
						<li class="skills__item">Svelte</li>
						<li class="skills__item">WordPress</li>
					</ul>
				</div>

				<div class="skills__category">
					<h4 class="skills__category-title">Backend</h4>
					<ul class="skills__list">
						<li class="skills__item">Node.js</li>
						<li class="skills__item">Express</li>
						<li class="skills__item">PostgreSQL</li>
						<li class="skills__item">REST APIs</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="services">
			<h2 class="services__title">What I Do</h2>
			<div class="services__grid">
				<div class="services__card">
					<h3 class="services__card-title">Web Design</h3>
					<ul class="services__list">
						<li class="services__item">UI/UX Design</li>
						<li class="services__item">Responsive Design</li>
						<li class="services__item">Mobile-First Approach</li>
						<li class="services__item">Prototyping</li>
					</ul>
				</div>

				<div class="services__card">
					<h3 class="services__card-title">Web Development</h3>
					<ul class="services__list">
						<li class="services__item">Frontend Development</li>
						<li class="services__item">Backend Integration</li>
						<li class="services__item">API Development</li>
						<li class="services__item">Performance Optimization</li>
					</ul>
				</div>

				<div class="services__card">
					<h3 class="services__card-title">E-Commerce</h3>
					<ul class="services__list">
						<li class="services__item">Online Store Setup</li>
						<li class="services__item">Payment Integration</li>
						<li class="services__item">Inventory Management</li>
						<li class="services__item">Shopping Cart Development</li>
					</ul>
				</div>
			</div>
		</section>
	</div>

	<div class="about__right-side">
		<section class="about">
			<h2 class="about__title">About Me</h2>
			<div class="about__content">
				<p class="about__paragraph">
					Hello, I’m Ekrem, a passionate software developer with a focus on web development and
					design. While I specialise primarily in front-end technologies, I have a solid
					understanding of back-end development as well.
				</p>
				<p class="about__paragraph">
					My journey in tech began in 2022 when I completed an intensive one-year Full-Stack Web
					Development course with Code Your Future in Manchester. Following this, I expanded my
					skillset through additional training with Prime Talent in AWS fundamentals and earned a
					Level-5 Full-Stack Development qualification from Gateshead College.
				</p>
				<p class="about__paragraph">
					Originally from Turkey, I relocated to the UK in 2021 and have called the North East home
					ever since, settling in Gateshead/Newcastle in early 2022. I’m a husband to Merve and a
					proud father to Yusuf.
				</p>
				<p class="about__paragraph">
					I have a range of interests outside of software development. I’m a skilled calligrapher
					and also enjoy assembling furniture—activities I find both therapeutic and rewarding.
					While these started as hobbies, they’ve also become small side ventures that I pursue in
					my spare time. However, my primary focus remains on honing my skills as a developer.
				</p>
				<p class="about__paragraph">
					Professionally, I’ve had the opportunity to work on a variety of projects. For Animal
					Charity Evaluators, I developed a decision-making tool using React. At Sunderland Software
					City, where I spent six months as a junior software developer, I contributed to the
					development of an e-commerce website and gained hands-on experience with Agile
					methodologies. Working in a team environment allowed me to sharpen both my technical and
					collaborative skills, and I continue to improve by working on side projects. Before moving
					into tech, I served as a First Lieutenant in the Turkish Air Force, where I specialised in
					IT within the logistics unit. My decade-long career in the military taught me invaluable
					skills such as discipline, problem-solving, and working under pressure—traits that I now
					bring into my development work. Outside of coding, I enjoy swimming (my wife is a swimming
					instructor, so it runs in the family), cycling, and spending quality time with my son. I’m
					also keen on learning new musical instruments and staying active. I’m proud to be a
					volunteer for various charities that aim to build bridges between different communities—a
					role that aligns with my personal values of inclusion and support.
				</p>

				<h3 class="about__sub-title">Work Philosophy</h3>
				<p class="about__paragraph">
					I believe in writing clean, maintainable code and following best practices. My goal is to
					create solutions that not only solve immediate problems but are also sustainable in the
					long term. I'm passionate about continuous learning and staying up-to-date with the latest
					technologies and trends in web development.
				</p>

				<h3 class="about__sub-title">Current Focus</h3>
				<p class="about__paragraph">
					Currently, I'm focusing on cloud technologies and serverless architectures while expanding
					my knowledge in AI and machine learning integration in web applications. I'm always open
					to new challenges and opportunities to grow as a developer.
				</p>
			</div>
		</section>
	</div>
</div>

<style>
	.About {
		display: flex;
		gap: 2rem;
		color: currentColor;
		min-height: min-content;
		font-size: 0.875rem;
		font-weight: 600;
	}

	.about__left-side {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.about__right-side {
		flex: 2;
	}

	section {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 1rem;
		padding: 1.5rem;
		margin-bottom: 1.5rem;
	}

	h2 {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		border-bottom: 2px solid rgba(255, 255, 255, 0.1);
		padding-bottom: 0.5rem;
	}

	/* BEM structure for skills */
	.skills__title,
	.personal-details__title,
	.services__title,
	.about__title,
	.about__sub-title {
		font-size: 1.5rem;
	}

	.skills__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin: 1rem 0 2rem 0;
	}

	.skills__category {
		margin-bottom: 1rem;
	}

	.skills__category-title {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.skills__list {
		list-style: none;
		padding-left: 1rem;
	}

	.skills__item {
		color: currentColor;
		margin-bottom: 0.3rem;
		position: relative;
	}

	.skills__item::before {
		content: '→';
		position: absolute;
		left: -1rem;
		color: currentColor;
	}

	/* Personal Details */
	.personal-details__info {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.personal-details__item {
		margin-bottom: 1rem;
	}

	.personal-details__label {
		font-size: 1.2rem;
	}

	.personal-details__value {
		color: currentColor;
	}

	/* Services */
	.services__grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.services__card {
		background: rgba(255, 255, 255, 0.03);
		padding: 1rem;
		border-radius: 0.5rem;
		transition: transform 0.2s;
	}

	.services__card:hover {
		transform: translateX(5px);
	}

	.services__card-title {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	.services__list {
		list-style: none;
		padding-left: 1rem;
	}

	.services__item {
		color: currentColor;
		margin-bottom: 0.3rem;
		position: relative;
	}

	.services__item::before {
		content: '•';
		position: absolute;
		left: -1rem;
		color: currentColor;
	}

	/* About Me */
	.about__content {
		line-height: 1.6;
		color: currentColor;
	}

	.about__paragraph {
		margin-bottom: 1rem;
	}

	.about__sub-title {
		font-size: 1.5rem;
		margin-top: 1.5rem;
	}

	/* Responsive Styles */
	@media (max-width: 768px) {
		.About {
			flex-direction: column;
		}
	}
</style>
