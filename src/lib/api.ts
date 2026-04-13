/* Axiom Digital | Logic Verified | Best or Nothing */

export interface AxiomResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}

interface FetchOptions extends RequestInit {
  timeout?: number;
  retries?: number;
}

const DEFAULT_TIMEOUT = 10000;
const MAX_RETRIES = 3;

export async function axiomFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<AxiomResponse<T>> {
  const { timeout = DEFAULT_TIMEOUT, retries = MAX_RETRIES, ...fetchOptions } = options;

  let attempt = 0;
  let lastError: Error | null = null;
  let lastStatus = 0;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const url = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`;

  while (attempt <= retries) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers: {
          'Content-Type': 'application/json',
          ...fetchOptions.headers,
        },
        signal: controller.signal,
      });

      clearTimeout(id);
      lastStatus = response.status;

      if (!response.ok) {
        throw new Error(response.statusText || `HTTP Error ${response.status}`);
      }

      // 204 No Content handling
      if (response.status === 204) {
        return { data: null, error: null, status: response.status };
      }

      const data = (await response.json()) as T;
      return { data, error: null, status: response.status };
    } catch (error) {
      clearTimeout(id);
      const err = error as Error;
      lastError = err;

      // Do not retry on intentional aborts outside of timeouts
      if (err.name === 'AbortError' && attempt === 0) {
        lastError = new Error('Request Timeout');
      }

      attempt++;
      if (attempt <= retries) {
        // Exponential backoff: 500ms, 1000ms, 2000ms
        const delay = 500 * Math.pow(2, attempt - 1);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  return {
    data: null,
    error: lastError?.message || 'Network request failed',
    status: lastStatus || 500,
  };
}
