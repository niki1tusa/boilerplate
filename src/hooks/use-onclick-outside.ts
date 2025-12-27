import { type RefObject, useEffect, useRef } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;
type IgnoreRefs = Array<RefObject<HTMLElement | null>>;

export function useClickOutside<T extends HTMLElement>(
	handler: Handler,
	ignoreRefs: IgnoreRefs = []
) {
	const ref = useRef<T | null>(null);
	const handlerRef = useRef(handler);
	const ignoreRefsRef = useRef(ignoreRefs);

	useEffect(() => {
		handlerRef.current = handler;
	}, [handler]);
	useEffect(() => {
		ignoreRefsRef.current = ignoreRefs;
	}, [ignoreRefs]);

	useEffect(() => {
		const controller = new AbortController();
		const listener = (event: MouseEvent | TouchEvent) => {
			const target = event.target as Node | null;

			if (!target) return;
			if (!ref.current) return;
			// игнор в основном контейнере
			if (ref.current.contains(target)) return;
			// игнор контейнеров который были переданы как ignoreRefs
			for (const refElement of ignoreRefsRef.current) {
				if (refElement.current?.contains(target)) return;
			}
			handlerRef.current(event);
		};
		document.addEventListener('pointerdown', listener, { signal: controller.signal });
		// document.addEventListener('mousedown', listener, { signal: controller.signal });
		// document.addEventListener('touchstart', listener, { signal: controller.signal });

		return () => {
			controller.abort();
		};
	}, []);
	return { ref };
}
