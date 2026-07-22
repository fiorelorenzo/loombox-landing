<script lang="ts">
	import BrandMark from './BrandMark.svelte';
</script>

<nav>
	<div class="wrap nav-in">
		<a class="brand" href="#top"><BrandMark /><span class="wm">l<b>oo</b>mbox</span></a>
		<div class="nav-links">
			<a href="#how">How it works</a>
			<a href="#relay">Blind relay</a>
			<a href="#host">Self-host</a>
			<button
				class="tbtn"
				id="themeBtn"
				type="button"
				title="Toggle theme"
				aria-label="Toggle theme">◐</button
			>
			<a class="nav-cta" href="https://github.com/fiorelorenzo/loombox">GitHub</a>
		</div>
	</div>
</nav>
