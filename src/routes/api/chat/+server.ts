// src/routes/api/chat/+server.ts
import type { RequestHandler } from './$types';
import OpenAI from "openai";

// OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Cloudflare Pages environment variable olarak ekle
});

// Edge uyumlu şekilde sources.json'u fetch ile yükle
async function loadSources() {
  const res = await fetch(`${import.meta.env.BASE_URL}data/sources.json`);
  if (!res.ok) throw new Error('Cannot load sources.json');
  const data = (await res.json()) as Record<string, string>;
  return data;
}

export const GET: RequestHandler = async () => {
  return new Response(JSON.stringify({
    message: 'Test endpoint working! Backend is responding.',
    environment: process.env.NODE_ENV,
    hasOpenAIKey: !!process.env.OPENAI_API_KEY
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
};

export const POST: RequestHandler = async ({ request }) => {
  const { message } = await request.json();
  const sources = await loadSources();

  const context = Object.entries(sources)
    .map(([key, value]) => {
      const text = typeof value === 'string' ? value : JSON.stringify(value);
      return `Source: ${key}\n${text}`;
    })
    .join('\n\n');

  const completion = await client.chat.completions.create({
    model: 'gpt-3.5-turbo', 
    messages: [
      {
        role: 'system',
        content: `You are Ekrem Teke's portfolio assistant. 
Answer questions using ONLY the provided sources. 
If the exact answer is not in the sources, say:
"This information is not in my sources, but I can guess: ..." 
and provide a reasonable guess. 
Always answer in professional English.`
      },
      { role: 'user', content: `Sources:\n${context}` },
      { role: 'user', content: `Question: ${message}` }
    ],
    max_tokens: 300
  });

  const reply = completion.choices[0].message?.content ?? "Sorry, I couldn't find an answer.";
  return new Response(JSON.stringify({ reply }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
