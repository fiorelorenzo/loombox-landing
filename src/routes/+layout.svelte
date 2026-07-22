<script lang="ts">
	import '@fontsource-variable/inter/wght.css';
	import '@fontsource-variable/jetbrains-mono/wght.css';
	import '../app.css';
	import { onMount } from 'svelte';
	import { initThemeToggle, initRevealOnScroll } from '$lib/actions/page-motion';

	let { children } = $props();

	onMount(() => {
		const cleanupTheme = initThemeToggle();
		const cleanupReveal = initRevealOnScroll();
		return () => {
			cleanupTheme?.();
			cleanupReveal?.();
		};
	});
</script>

{@render children()}
