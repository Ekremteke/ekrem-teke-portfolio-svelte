// src\routes\api\test\+server.ts
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  return new Response(JSON.stringify({
    message: 'Test endpoint working! Backend is responding.',
    environment: process.env.NODE_ENV,
    hasOpenAIKey: !!process.env.OPENAI_API_KEY
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
