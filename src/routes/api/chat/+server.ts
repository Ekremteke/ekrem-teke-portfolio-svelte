// src/routes/api/chat/+server.ts
import type { RequestHandler } from './$types';
import OpenAI from 'openai';
import sources from '$lib/data/sources.json';

// Cloudflare platform type'ı için interface tanımlaması
interface CloudflareEnv {
  OPENAI_API_KEY?: string;
  VITE_OPENAI_API_KEY?: string;
  [key: string]: string | undefined;
}

interface CloudflarePlatform {
  env?: CloudflareEnv;
  cf?: Record<string, unknown>;
  ctx?: Record<string, unknown>;
}

// Type guard fonksiyonu
function isCloudflareRuntime(platform: unknown): platform is CloudflarePlatform {
  return typeof platform === 'object' && platform !== null;
}

// Environment variable'ı güvenli şekilde al
function getOpenAIKey(platform: unknown): string | undefined {
  // İlk olarak standard environment variables'ları kontrol et
  if (import.meta.env.VITE_OPENAI_API_KEY) {
    return import.meta.env.VITE_OPENAI_API_KEY;
  }
  
  if (typeof process !== 'undefined' && process.env?.OPENAI_API_KEY) {
    return process.env.OPENAI_API_KEY;
  }

  if (typeof process !== 'undefined' && process.env?.VITE_OPENAI_API_KEY) {
    return process.env.VITE_OPENAI_API_KEY;
  }

  // Cloudflare runtime kontrolü
  if (isCloudflareRuntime(platform)) {
    return platform.env?.OPENAI_API_KEY || platform.env?.VITE_OPENAI_API_KEY;
  }

  return undefined;
}

export const GET: RequestHandler = async ({ platform }) => {
  const openaiKey = getOpenAIKey(platform);
  
  let envInfo: string[] = [];
  if (isCloudflareRuntime(platform) && platform.env) {
    envInfo = Object.keys(platform.env);
  }

  console.log('Environment check:', {
    hasOpenAIKey: !!openaiKey,
    platform: !!platform,
    envKeys: envInfo,
    isCloudflare: isCloudflareRuntime(platform),
    nodeEnv: typeof process !== 'undefined' ? process.env?.NODE_ENV : 'unknown'
  });

  return new Response(
    JSON.stringify({
      message: 'Test endpoint working! Backend is responding.',
      environment: typeof process !== 'undefined' ? process.env?.NODE_ENV : 'cloudflare',
      hasOpenAIKey: !!openaiKey,
      platform: !!platform,
      isCloudflare: isCloudflareRuntime(platform),
      envKeys: envInfo
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
};

export const POST: RequestHandler = async ({ request, platform }) => {
  try {
    const body = await request.json();
    
    // Request body validation
    if (!body || typeof body !== 'object' || !('message' in body)) {
      return new Response(
        JSON.stringify({ 
          error: 'Bad request', 
          details: 'Message field is required' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { message } = body as { message: string };
    const openaiKey = getOpenAIKey(platform);

    console.log('POST Request Debug:', {
      hasMessage: !!message,
      hasOpenAIKey: !!openaiKey,
      platform: !!platform,
      isCloudflare: isCloudflareRuntime(platform)
    });

    if (!openaiKey) {
      console.error('OpenAI API key not found in any environment source');
      return new Response(
        JSON.stringify({ 
          error: 'Configuration error', 
          details: 'OpenAI API key not configured properly' 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // OpenAI client'ı her request'te yeniden oluştur
    const client = new OpenAI({
      apiKey: openaiKey
    });

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
          content: `You are Ekrem Teke's portfolio assistant. Answer questions using ONLY the provided sources. If the exact answer is not in the sources, say: "This information is not in my sources, but I can guess: ..." and provide a reasonable guess. Always answer in professional English.`
        },
        { role: 'user', content: `Sources:\n${context}` },
        { role: 'user', content: `Question: ${message}` }
      ],
      max_tokens: 300
    });

    const reply = completion.choices[0]?.message?.content ?? "Sorry, I couldn't find an answer.";

    return new Response(JSON.stringify({ reply }), {
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (err: unknown) {
    console.error('Chat API error:', err);
    
    let errorMessage = 'Unknown error';
    let errorDetails = '';
    
    if (err instanceof Error) {
      errorMessage = err.message;
      errorDetails = err.name;
    } else if (typeof err === 'object' && err !== null && 'message' in err) {
      errorMessage = String(err.message);
    }

    // OpenAI API hatalarını özellikle yakala
    if (typeof err === 'object' && err !== null && 'error' in err) {
      console.error('OpenAI API Error Details:', err);
    }

    const isDevelopment = typeof process !== 'undefined' && process.env?.NODE_ENV === 'development';

    return new Response(
      JSON.stringify({ 
        error: 'Server error', 
        details: errorMessage,
        type: errorDetails || 'UnknownError',
        ...(isDevelopment && { stack: err instanceof Error ? err.stack : undefined })
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};