import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// adapter-node: builds a standalone Node server (see Dockerfile),
			// which is how this site runs on prodbox.
			adapter: adapter()
		})
	],
	build: {
		// Keep the self-hosted @fontsource woff2 files as real files, never
		// inlined as base64 data URIs into the CSS (Vite's default 4kb
		// threshold would otherwise inline the smallest font subsets).
		assetsInlineLimit: 0
	}
});
