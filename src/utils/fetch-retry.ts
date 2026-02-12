export async function fetchWithRetry(
    url: string,
    options: RequestInit = {},
    retries = 3,
    backoff = 300
): Promise<Response> {
    try {
        const res = await fetch(url, options);
        // If successful or 404 (not found is not a network error), return
        if (res.ok || res.status === 404) return res;

        // Throw error to trigger retry for 5xx or other errors
        throw new Error(`Fetch failed with status: ${res.status}`);
    } catch (error) {
        if (retries <= 0) throw error;

        // Wait for backoff time
        await new Promise((resolve) => setTimeout(resolve, backoff));

        // Retry with increased backoff
        return fetchWithRetry(url, options, retries - 1, backoff * 2);
    }
}
