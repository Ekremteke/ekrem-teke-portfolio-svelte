<!-- src/lib/components/Chatbot.svelte -->
<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';

	let isOpen = false;
	let messages: { role: string; content: string }[] = [];
	let userInput = '';
	let loading = false;
	let msgContainer: HTMLDivElement | null = null;

	async function sendMessage() {
		if (!userInput.trim()) return;

		// User mesajını reactive şekilde ekle
		messages = [...messages, { role: 'user', content: userInput }];
		loading = true;

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: userInput })
			});
			if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
			const data = await res.json();

			// Assistant cevabını reactive şekilde ekle
			messages = [...messages, { role: 'assistant', content: data.reply }];
		} catch (err) {
			console.error(err);
			messages = [...messages, { role: 'assistant', content: 'Sorry, something went wrong.' }];
		} finally {
			userInput = '';
			loading = false;
		}
	}

	// Scroll için afterUpdate kullanıyoruz
	afterUpdate(() => {
		msgContainer?.scrollTo({ top: msgContainer.scrollHeight, behavior: 'smooth' });
	});
</script>

<button class="chatbot-button" on:click={() => (isOpen = !isOpen)}>
	<img class="chatbot-icon" src="/images/chatbot-icon.png" alt="chatbot icon" />
</button>

{#if isOpen}
	<div class="chat-window">
		<button class="close-btn" on:click={() => (isOpen = false)}>x</button>
		<div class="messages" bind:this={msgContainer}>
			{#each messages as msg}
				<div class={msg.role === 'user' ? 'user' : 'bot'}>
					{msg.content}
				</div>
			{/each}
			{#if loading}
				<div class="typing-indicator"><em>Typing...</em></div>
			{/if}
		</div>

		<div class="input-area">
			<input
				bind:value={userInput}
				on:keydown={(e) => e.key === 'Enter' && sendMessage()}
				placeholder="Ask about Ekrem..."
			/>

			<!-- Chatbot close button -->

			<button on:click={sendMessage}>Send</button>
		</div>
	</div>
{/if}

<style>
	.chatbot-button {
		position: fixed;
		bottom: 4rem;
		right: 1rem;
		width: 60px;
		height: 60px;
		border: none;
		background: none;
		cursor: pointer;
		z-index: 1000;
	}

	.chatbot-icon {
		position: fixed;
		bottom: 4rem;
		right: -0.5rem;
		background-color: #0c003400;
		color: white;
		border: none;
		width: 9rem;
		height: 9rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		cursor: pointer;
		padding: 0rem;
		margin: 0%;
		transition:
			background 0.2s ease,
			transform 0.2s ease;
		z-index: 1000;
	}
	.chatbot-icon:hover {
		transform: scale(1.5);
	}

	.chat-window {
		position: fixed;
		bottom: 6rem;
		right: 2rem;
		width: 340px;
		max-height: 1450px;
		background: white;
		color: #0c0034;
		border-radius: 1rem;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
		display: flex;
		flex-direction: column;
		font-family: 'Inter', sans-serif;
		z-index: 1000;
	}

	.messages {
		flex: 1;
		padding: 1rem;
		overflow-y: auto;
		font-size: 0.9rem;
		line-height: 1.5;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		scroll-behavior: smooth; /* smooth scroll */
		height: 100rem;
	}
	.messages em {
		display: inline-block;
		max-width: 60%;
		background: #ccc;
		color: #000;
		padding: 0.5rem 0.8rem;
		border-radius: 1rem;
		align-self: flex-start;
	}

	.messages div.bot {
		align-self: flex-start;
		background: #abaaaa; /* biraz daha koyu, kontrast artırdık */
		color: #0c0034;
		border-bottom-left-radius: 1rem;
		word-break: break-word;
		padding: 0.5rem;
		margin: 0.5rem;
	}

	.messages div.user {
		align-self: flex-end;
		background: #0c0034;
		color: white;
		border-bottom-right-radius: 1rem;
		word-break: break-word;
		padding: 0.5rem;
		margin: 0.5rem;
	}

	.typing-indicator {
		padding: 0.5rem 1rem;
		font-style: italic;
		color: #000000;
	}

	.input-area {
		display: flex;
		align-items: center;
		border-top: 1px solid #ddd;
		background: #f3f3f3;
		padding: 0.5rem;
	}

	.input-area input {
		flex: 1;
		padding: 0.6rem 0.8rem;
		border: 1px solid #ccc;
		border-radius: 20px;
		outline: none;
		font-size: 0.9rem;
		background-color: antiquewhite;
		color: #1a075e;
	}
	.close-btn {
		position: absolute;
		top: -2rem;
		right: 0rem;
		background: #0c0034;
		color: white;
		border: none;
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		font-size: 1.2rem;
		cursor: pointer;
		z-index: 1010;

		text-align: center;
	}

	.input-area input:focus {
		border-color: #0c0034;
	}

	.input-area button {
		margin-left: 0.5rem;
		padding: 0.6rem 1rem;
		background: #0c0034;
		color: white;
		border: none;
		border-radius: 20px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: background 0.2s ease;
	}

	.input-area button:hover {
		background: #1a075e;
	}
	input::placeholder {
		color: #4a4a4a; /* Daha koyu, okunaklı */
	}
</style>
