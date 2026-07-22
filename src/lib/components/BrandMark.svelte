<script lang="ts">
	// The loombox "warp & weft" mark. Exact geometry ported from the approved
	// static mock (viewBox 0 0 64 64, a woven square). `draw` enables the
	// stroke-draw reveal animation used once, for the final CTA's big mark.
	let {
		class: className = '',
		draw = false
	}: {
		class?: string;
		draw?: boolean;
	} = $props();
</script>

<svg
	class="mark {className}"
	class:drawmark={draw}
	viewBox="0 0 64 64"
	fill="none"
	stroke="currentColor"
	stroke-width="3.4"
	stroke-linecap="round"
	aria-hidden="true"
>
	<rect
		x="8"
		y="8"
		width="48"
		height="48"
		rx="14"
		stroke-width="3.2"
		style={draw ? '--i:0' : undefined}
	/>
	<path d="M24 16 V36" style={draw ? '--i:1' : undefined} />
	<path d="M24 44 V48" style={draw ? '--i:2' : undefined} />
	<path d="M40 16 V20" style={draw ? '--i:3' : undefined} />
	<path d="M40 28 V48" style={draw ? '--i:4' : undefined} />
	<path d="M16 24 H20" style={draw ? '--i:5' : undefined} />
	<path d="M28 24 H48" style={draw ? '--i:6' : undefined} />
	<path d="M16 40 H36" style={draw ? '--i:7' : undefined} />
	<path d="M44 40 H48" style={draw ? '--i:8' : undefined} />
</svg>
