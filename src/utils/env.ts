// Typed access to Vite env vars. Vite exposes only VITE_* at runtime.
type Env = {
    VITE_API_BASE_URL?: string;
    VITE_FEATURE_FLAG?: string;
};

const env = import.meta.env as unknown as Env;

export const getRequiredEnv = (key: keyof Env): string => {
    const value = env[key];
    if (!value) {
        throw new Error(`Missing required env var: ${String(key)}`);
    }
    return value;
};

export const getOptionalEnv = (key: keyof Env, fallback: string): string => {
    return env[key] ?? fallback;
};
