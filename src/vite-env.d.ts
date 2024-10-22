/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USER: string;
    SMTP_PASS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}