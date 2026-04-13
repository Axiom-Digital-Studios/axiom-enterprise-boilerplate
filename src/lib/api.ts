/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/**
 * Axiom API Configuration — Centralized fetch wrapper
 * with timeout, retry logic, and error normalization.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';
const DEFAULT_TIMEOUT = 10000; // 10 seconds

interface FetchOptions extends RequestInit {
  timeout?: number;
  retries?: number;
}

/**
 * Axiom-standard fetch wrapper with timeout and retry.
 */
export async function axiomFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { timeout = DEFAULT_TIMEOUT, retries = 2, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  };

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        ...fetchOptions,
        headers: { ...defaultHeaders, ...fetchOptions.headers },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(
          `API Error: ${response.status} ${response.statusText}`
        );
      }

      return (await response.json()) as T;
    } catch (error) {
      lastError = error as Error;

      if (attempt < retries) {
        // Exponential backoff: 500ms, 1000ms, 2000ms...
        await new Promise((resolve) =>
          setTimeout(resolve, 500 * Math.pow(2, attempt))
        );
      }
    }
  }

  clearTimeout(timeoutId);
  throw lastError || new Error('API request failed');
}
