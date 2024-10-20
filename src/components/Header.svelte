<script lang="ts">
	// export let toggleTheme: () => void;
	// export let isLightMode = true;
	// function handleThemeToggle() {
	// 	toggleTheme();
	// 	isLightMode = !isLightMode;
	// }
</script>

<header class="Header">
	<div>
		<a href="/home" class="Header__home icon"
			><svg
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
	</div>
	<div>
		<a href="/about" class="icon"
			><svg
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
	</div>
	<div>
		<a href="/blog" class="icon"
			><svg
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
	</div>
	<div>
		<a href="/portfolio" class="icon"
			><svg
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
	</div>
	<div>
		<a href="/contact" class="icon"
			><svg
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
	</div>
</header>

<style>
	.Header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		height: fit-content;
		border-radius: 1rem;
		border: 2px solid currentColor;
		padding: 1rem 0.5rem;
	}
	.icon {
		background-color: transparent;
		border-radius: 0.3rem;
		transition:
			background-color 0.3s,
			color 0.3s;
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
		border-radius: 0.5rem;
	}
	.light .icon:hover svg {
		background-color: black;
		border-radius: 0.5rem;
	}
</style>
