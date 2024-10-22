// src/lib/server/config.ts
import { env } from '$env/dynamic/private';

export const emailConfig = {
    host: env.SMTP_HOST,
    port: parseInt(env.SMTP_PORT || '587'),
    secure: false,
    auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASS
    }
};