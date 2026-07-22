<script lang="ts">
	import IconSprite from '$lib/components/IconSprite.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import WhyGap from '$lib/components/WhyGap.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import BlindRelay from '$lib/components/BlindRelay.svelte';
	import SelfHost from '$lib/components/SelfHost.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const title = 'loombox — the cockpit for coding agents you own';
	const description =
		'The self-hosted, end-to-end encrypted cockpit for coding agents. Run agents where you want, steer from your phone, and own the relay.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<IconSprite />

<Nav />
<Hero />
<WhyGap />
<HowItWorks />
<BlindRelay />
<SelfHost />
<FinalCta />
<Footer />
