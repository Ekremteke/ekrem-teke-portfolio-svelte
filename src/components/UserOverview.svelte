<script>
</script>

<div class="UserOverview">
	<div class="UserOverview__avatar">
		<!-- Set fixed height and width for the avatar image container -->
		<img
			class="avatar"
			src="/images/profile.jpg"
			alt="Profile avatar of Ekrem Teke"
			loading="lazy"
			width="200"
			height="200"
		/>
	</div>
	<div class="UserInformation">
		<h2 class="UserInformation__name">Ekrem Teke</h2>
		<h3 class="UserInformation__title">Software Developer</h3>
	</div>
	<div class="UserOverview__social">
		<a
			href="https://www.linkedin.com/in/ekrem-teke-786992201/"
			class="UserOverview__social--linkedIn socialIcon"
		>
			<svg
				class="w-[36px] h-[36px] text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					fill-rule="evenodd"
					d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
					clip-rule="evenodd"
				/>
				<path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
			</svg>
		</a>
		<a
			href="https://www.instagram.com/ekremteke.uk/"
			class="UserOverview__social--instagram socialIcon"
		>
			<svg
				class="w-[36px] h-[36px] text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					fill-rule="evenodd"
					d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
		<a href="https://github.com/Ekremteke" class="UserOverview__social--gitHub socialIcon">
			<svg
				class="w-[36px] h-[36px] text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					fill-rule="evenodd"
					d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
</div>

<style>
	.UserOverview {
		height: 100%;
		width: 100%;
		align-self: center;
		justify-self: center;
		display: flex;
		flex-direction: column;
		gap: 5rem;
		padding: 2rem;
	}

	.UserOverview__avatar {
		height: 13rem;
		width: 13rem;
		max-height: 13rem;
		max-width: 13rem;
		border-radius: 50%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0px solid rgba(255, 255, 255, 0.837);
		box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
		align-self: center;
		justify-self: center;
		position: relative;
	}

	.avatar {
		position: absolute;
		height: 200%;
		width: 200%;
		object-fit: cover;
		transition: transform 0.3s ease;
		transform: translateY(4%);
	}

	@media screen and (max-width: 950px) {
		.UserOverview__avatar {
			height: 10rem;
			width: 10rem;
		}
	}

	@media screen and (max-width: 700px) {
		.UserOverview__avatar {
			height: 6rem;
			width: 6rem;
		}
	}

	.UserInformation {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
		text-align: center;
	}

	.UserInformation__name {
		font-weight: 900;
		font-size: x-large;
	}

	.UserInformation__title {
		font-weight: 700;
		font-size: large;
	}

	.UserOverview__social {
		display: flex;
		justify-content: space-around;
	}

	.socialIcon {
		min-width: 1rem;
		height: auto;
		background-color: transparent;
		border: solid 1px currentColor;
		border-radius: 0.3rem;
		transition:
			background-color 0.3s,
			color 0.3s;
	}

	/* Dark Mode Hover Styles */
	.socialIcon:hover {
		background-color: currentColor;
	}

	.dark .socialIcon:hover svg {
		fill: black;
	}

	.light .socialIcon:hover svg {
		fill: white;
	}

	@media screen and (max-width: 481px) {
		.UserOverview {
			position: fixed;
			bottom: 1rem;
			margin: 0 1rem 0 1rem;
			box-shadow: none;
			border: none;
			flex-direction: row;
			height: fit-content;
			padding: 0;
			margin: 0;
			align-items: center;
			justify-content: space-around;
		}

		.UserOverview__social {
			display: flex;
			align-self: flex-end;
			justify-content: space-around;
		}

		.UserOverview__avatar {
			height: 7rem;
			width: 7rem;
		}

		.avatar {
			height: 7rem;
			width: 7rem;
		}

		svg {
			height: 1.5rem;
		}

		.UserInformation {
			display: none;
		}
	}
</style>
