<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';

	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let isSubmitting = false;
	let isSuccess = false;
	let errorMessage = '';

	const validateForm = () => {
		if (!formData.name || !formData.email || !formData.message) {
			errorMessage = 'Please fill in all required fields.';
			return false;
		}
		if (!formData.email) {
			errorMessage = 'Please enter a valid email address.';
			return false;
		}
		return true;
	};
</script>

<div class="contact-container">
	<div class="contact-content">
		<h1>Contact Me</h1>
		<p class="subtitle">Fill out the form to get in touch with me.</p>

		{#if isSuccess}
			<div class="success-message" transition:fade>
				Your message has been sent successfully. We will get back to you shortly.
			</div>
		{/if}

		{#if errorMessage}
			<div class="error-message" transition:fade>
				{errorMessage}
			</div>
		{/if}

		<form
			method="POST"
			use:enhance={() => {
				return async ({ result }) => {
					isSubmitting = true;

					if (result.type === 'success') {
						isSuccess = true;
						formData = {
							name: '',
							email: '',
							subject: '',
							message: ''
						};
						errorMessage = '';
					} else {
						errorMessage = 'An error occurred. Please try again.';
					}

					isSubmitting = false;
				};
			}}
			on:submit|preventDefault={async () => {
				if (!validateForm()) return;
				isSubmitting = true;
				errorMessage = '';
			}}
			class="contact-form"
		>
			<div class="form-group">
				<label for="name">Name *</label>
				<input
					type="text"
					id="name"
					name="name"
					bind:value={formData.name}
					required
					placeholder="Your Full Name"
					autocomplete="name"
				/>
			</div>

			<div class="form-group">
				<label for="email">Email *</label>
				<input
					type="email"
					id="email"
					name="email"
					bind:value={formData.email}
					required
					placeholder="example@email.com"
					autocomplete="email"
				/>
			</div>

			<div class="form-group">
				<label for="subject">Subject</label>
				<input
					type="text"
					id="subject"
					name="subject"
					bind:value={formData.subject}
					placeholder="Subject of your message"
					autocomplete="off"
				/>
			</div>

			<div class="form-group">
				<label for="message">Message *</label>
				<textarea
					id="message"
					name="message"
					bind:value={formData.message}
					required
					placeholder="Write your message here..."
					rows="5"
					autocomplete="off"
				/>
			</div>

			<button type="submit" class="submit-button" disabled={isSubmitting}>
				{isSubmitting ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	</div>
</div>

<style>
	.contact-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: top;
		padding: 1rem;
		background: transparent;
		color: currentColor;
		background-image: url('/images/freepik-export-20241126093237RRaw.png');
		background-position: center bottom;
		background-size: 90%;
		background-repeat: no-repeat;
	}

	.contact-content {
		max-height: 90%;

		color: currentColor;
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		color: currentColor;
	}

	.subtitle {
		color: currentColor;
		margin-bottom: 1rem;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-height: 80%;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-weight: 400;
		color: currentColor;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #0c0034;
		border-radius: 0.5rem;
		background-color: rgb(214, 218, 255);
		transition: all 0.3s ease;
		color: black;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border-color: #0c0034;
		box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
		background-color: rgb(214, 218, 255);
	}

	.submit-button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #0c0034;
		color: white;
		border: none;
		border-radius: 0.5rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		padding: 0.5rem;
	}

	.dark .contact-container .submit-button {
		background-color: #0c0034;
		color: rgb(214, 218, 255);
		border: 1px solid grey;
	}
	.dark .contact-container input:focus,
	textarea:focus {
		outline: none;
		border-color: #0c0034;
		box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
		background-color: rgb(214, 218, 255);
	}

	.submit-button:hover {
		background-color: rgb(214, 218, 255);
		color: #0c0034;
		border: 1px solid #0c0034;
	}
	.dark .contact-container .submit-button:hover {
		background-color: rgb(214, 218, 255);
		color: black;
	}

	.submit-button:disabled {
		background-color: #9ca3af;
		cursor: not-allowed;
	}

	.success-message {
		padding: 0.5rem;
		background-color: #dcfce7;
		color: #166534;
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
	}

	.error-message {
		padding: 1rem;
		background-color: #fee2e2;
		color: #991b1b;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 690px) {
		.contact-content {
			padding: 0.5rem;
		}
	}
</style>
