// Theme toggle + reveal-on-scroll + reduced-motion wiring, ported from the
// inline <script> in the approved static mock. Both are plain DOM
// interactions (no reactive state needed), so they stay as small imperative
// helpers rather than Svelte stores. Call from `onMount` only: everything
// here is guarded so it is a no-op if it somehow runs during SSR.

export function initThemeToggle(): (() => void) | undefined {
	if (typeof document === 'undefined') return undefined;

	const root = document.documentElement;
	const btn = document.getElementById('themeBtn');
	if (!btn) return undefined;

	const onClick = () => {
		let cur = root.getAttribute('data-theme');
		if (!cur) {
			cur = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		root.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
	};

	btn.addEventListener('click', onClick);
	return () => btn.removeEventListener('click', onClick);
}

export function initRevealOnScroll(): (() => void) | undefined {
	if (typeof document === 'undefined' || typeof window === 'undefined') return undefined;

	const reduced =
		window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const targets = document.querySelectorAll('.reveal');

	if (reduced) {
		targets.forEach((el) => el.classList.add('in'));
		return undefined;
	}

	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('in');
					io.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.14 }
	);
	targets.forEach((el) => io.observe(el));
	return () => io.disconnect();
}
