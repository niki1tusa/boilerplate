'use client';
import { useEffect, useMemo, useState } from 'react';

type UseQueryProps<T> = {
	url: string;
	initialData?: T | null;
	queryKey?: string;
};

// TODO: доделать сохранение в localStorage
export function useQuery<T>({ url, initialData, queryKey }: UseQueryProps<T>) {
	const [data, setData] = useState<T | null>(initialData ?? null);
	const [error, setError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(initialData == null);

	const storageKey = useMemo(() => `Storage-Key: ${queryKey}-${url}`, [queryKey, url]);
	useEffect(() => {
		if (!url) return;
		const controller = new AbortController();
		setIsLoading(true);
		setError(null);

		(async () => {
			try {
				const res = await fetch(url, { signal: controller.signal });
				if (!res.ok) throw Error(`Code ${res.status}: ${res.statusText}!!!`);
				const resJson = (await res.json()) as T;

				setData(resJson);
			} catch (e: unknown) {
				if (controller.signal.aborted) return;
				setError(e instanceof Error ? e : new Error('Error unknown!!!'));
			} finally {
				if (!controller.signal.aborted) setIsLoading(false);
			}
		})();
		return () => controller.abort();
	}, [url, storageKey]);

	return { data, error, isLoading };
}
