<!-- src/lib/components/Chatbot.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	let isOpen = false;
	let messages: { role: string; content: string }[] = [];
	let userInput = '';
	let loading = false;

	async function sendMessage() {
		if (!userInput.trim()) return;
		messages.push({ role: 'user', content: userInput });
		loading = true;

		const res = await fetch('/api/chat', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: userInput })
		});

		const data = await res.json();
		messages.push({ role: 'assistant', content: data.reply });
		userInput = '';
		loading = false;
	}
</script>

<button class="chatbot-button" on:click={() => (isOpen = !isOpen)}>
	<img class="chatbot-icon" src="/images/chatbot-icon.png" alt="chatbot icon" />
</button>

{#if isOpen}
	<div class="chat-window">
		<div class="messages">
			{#each messages as msg}
				<div class={msg.role === 'user' ? 'user' : 'bot'}>
					{msg.content}
				</div>
			{/each}
			{#if loading}
				<div><em>Typing...</em></div>
			{/if}
		</div>
		<div class="input-area">
			<input
				bind:value={userInput}
				on:keydown={(e) => e.key === 'Enter' && sendMessage()}
				placeholder="Ask about Ekrem..."
			/>
			<button on:click={sendMessage}>Send</button>
		</div>
	</div>
{/if}

<style>
	.chatbot-button {
		padding: 0%;
		margin: 0%;
		width: 4rem;
		height: 4rem;
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
		max-height: 450px;
		background: white;
		color: #0c0034;
		border-radius: 1rem;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		font-family: 'Inter', sans-serif;
		animation: fadeIn 0.3s ease;
		z-index: 1000;
	}

	.messages {
		flex: 1;
		padding: 1rem;
		overflow-y: auto;
		font-size: 0.9rem;
		line-height: 1.4;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	/* Ortak mesaj balonları */
	.messages div {
		max-width: 80%;
		padding: 0.6rem 0.9rem;
		border-radius: 1rem;
		word-wrap: break-word;
	}

	/* Kullanıcı mesajı (sağda koyu renk) */
	.messages div.user {
		align-self: flex-end;
		background: #0c0034;
		color: white;
		border-bottom-right-radius: 0.3rem;
	}

	/* Bot mesajı (solda açık renk) */
	.messages div.bot {
		align-self: flex-start;
		background: #f1f1f1;
		color: #0c0034;
		border-bottom-left-radius: 0.3rem;
	}

	.input-area {
		display: flex;
		align-items: center;
		border-top: 1px solid #ddd;
		background: #f9f9f9;
		padding: 0.5rem;
	}

	.input-area input {
		flex: 1;
		padding: 0.6rem 0.8rem;
		border: 1px solid #ccc;
		border-radius: 20px;
		outline: none;
		font-size: 0.9rem;
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

	/* basit fade animasyonu */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
