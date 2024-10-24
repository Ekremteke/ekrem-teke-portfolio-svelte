<script lang="ts">
	let tooltips = {
		home: false,
		about: false,
		blog: false,
		portfolio: false,
		contact: false
	};
</script>

<div class="Navbar">
	<div
		class="Navbar__navItem Navbar__home"
		role="button"
		tabindex="0"
		aria-label="Home"
		on:mouseenter={() => {
			tooltips.home = true;
		}}
		on:mouseleave={() => {
			tooltips.home = false;
		}}
	>
		<a href="/home" class="icon">
			<svg
				class="w-[40px] h-[40px] text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
				/>
			</svg>
		</a>
		{#if tooltips.home}
			<div class="tooltip"><a href="/home">Home</a></div>
		{/if}
	</div>
	<div
		class="Navbar__navItem Navbar__about"
		role="button"
		tabindex="0"
		aria-label="About"
		on:mouseenter={() => {
			tooltips.about = true;
		}}
		on:mouseleave={() => {
			tooltips.about = false;
		}}
	>
		<a href="/about" class="icon">
			<svg
				class="w-[40px] h-[40px] text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
				/>
			</svg>
		</a>
		{#if tooltips.about}
			<div class="tooltip"><a href="/about">About</a></div>
		{/if}
	</div>
	<div
		class="Navbar__navItem Navbar__blog"
		role="button"
		tabindex="0"
		aria-label="Blog"
		on:mouseenter={() => {
			tooltips.blog = true;
		}}
		on:mouseleave={() => {
			tooltips.blog = false;
		}}
	>
		<a href="/blog" class="icon">
			<svg
				class="w-[40px] h-[40px] text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
				/>
			</svg>
		</a>
		{#if tooltips.blog}
			<div class="tooltip"><a href="/blog">Blog</a></div>
		{/if}
	</div>
	<div
		class="Navbar__navItem Navbar__portfolio"
		role="button"
		tabindex="0"
		aria-label="Portfolio"
		on:mouseenter={() => {
			tooltips.portfolio = true;
		}}
		on:mouseleave={() => {
			tooltips.portfolio = false;
		}}
	>
		<a href="/portfolio" class="icon">
			<svg
				class="w-[40px] h-[40px] text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"
				/>
			</svg>
		</a>
		{#if tooltips.portfolio}
			<div class="tooltip"><a href="/portfolio">Portfolio</a></div>
		{/if}
	</div>
	<div
		class="Navbar__navItem Navbar__contact"
		role="button"
		tabindex="0"
		aria-label="Contact"
		on:mouseenter={() => {
			tooltips.contact = true;
		}}
		on:mouseleave={() => {
			tooltips.contact = false;
		}}
	>
		<a href="/contact" class="icon">
			<svg
				class="w-[40px] h-[40px] text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="1"
					d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
				/>
			</svg>
		</a>
		{#if tooltips.contact}
			<div class="tooltip"><a href="/contact">Contact</a></div>
		{/if}
	</div>
</div>

<style>
	.Navbar {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: fit-content;
		border-radius: 1rem;
		border: 0px solid currentColor;
		padding: 1rem 0.5rem;
		box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
	}

	.Navbar__navItem {
		position: relative;
	}

	.icon {
		background-color: transparent;
		border-radius: 0.3rem;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	.tooltip {
		position: absolute;
		text-align: center;
		width: 6rem;
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-left: 0.5rem;
		padding: 0.5rem;
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		border-radius: 0.3rem 0 0 0.3rem;
		font-size: 1rem;
		white-space: nowrap;
	}

	/* Dark Mode Hover Styles */
	.dark .icon:hover path {
		stroke: rgb(15, 15, 15);
	}
	.light .icon:hover path {
		stroke: white;
	}
	.dark .icon:hover svg {
		background-color: white;

		border-radius: 0 0.3rem 0.3rem 0;
	}
	.light .icon:hover svg {
		background-color: black;
		border-radius: 0 0.3rem 0.3rem 0;
	}
	.dark .Navbar .tooltip {
		background-color: rgb(252, 252, 252);
		color: black;
	}
</style>
