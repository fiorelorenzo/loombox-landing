<section class="band alt" id="host">
	<div class="wrap">
		<p class="kicker reveal">Self-host</p>
		<h2 class="reveal">You run it. You own it. MIT licensed.</h2>
		<div class="host-grid">
			<div class="host-copy reveal">
				<p>
					loombox ships as a Docker image and a compose file. Bring a box, bring a domain, and you
					have your own cockpit in a few minutes, with automatic TLS in front and your data on your
					disk. No account with anyone, no tenant you share, no vendor who can read your history.
				</p>
				<div class="chips">
					<span>Docker + compose</span><span>Postgres</span><span>SvelteKit PWA</span><span
						>adapter-node</span
					><span>MIT core</span>
				</div>
			</div>
			<div class="codecard reveal">
				<div class="cc-bar">~/loombox · deploy the relay</div>
				<pre><span class="c"># one image, your box, your domain</span>
<span class="k">docker</span> compose up -d relay

<span class="c"># Caddy fronts it with automatic TLS</span>
relay.loombox.dev &lbrace;
  <span class="k">reverse_proxy</span> 127.0.0.1:5185
&rbrace;

<span class="c"># the relay stores ciphertext only</span>
<span class="k">curl</span> https://relay.loombox.dev/health
<span class="c"># -&gt; &lbrace;"status":"ok"&rbrace;</span></pre>
			</div>
		</div>
	</div>
</section>
