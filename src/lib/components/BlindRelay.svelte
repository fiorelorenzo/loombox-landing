<section class="band" id="relay">
	<div class="wrap">
		<p class="kicker reveal">Blind by design</p>
		<h2 class="reveal">The relay carries your work without ever reading it.</h2>
		<div class="relay-wrap">
			<div class="flow reveal">
				<div class="flow-row">
					<div class="node">
						<div class="nlabel">client</div>
						<div class="nname">phone / desktop</div>
					</div>
					<div class="pipe"><span class="cipher">ciphertext</span><span class="arrow"></span></div>
					<div class="node blind">
						<div class="nlabel">your relay</div>
						<div class="nname">blind router</div>
					</div>
					<div class="pipe"><span class="cipher">ciphertext</span><span class="arrow"></span></div>
					<div class="node">
						<div class="nlabel">node</div>
						<div class="nname">laptop / devbox</div>
					</div>
				</div>
				<p class="flow-note">
					the relay sees who talks to whom, and moves opaque bytes between them. nothing else.
				</p>
			</div>
			<div class="relay-copy reveal">
				<h3>End-to-end, not just in transit.</h3>
				<p>
					Every payload is sealed on your device and opened only on another device you own. The
					relay's Postgres holds <b>routing metadata and opaque ciphertext</b>, so a full database
					dump reveals nothing about your work.
				</p>
				<ul class="crypto-list">
					<li>
						<b>ECDH P-256 + AES-256-GCM</b> envelopes, bound to their context so they cannot be replayed
						elsewhere.
					</li>
					<li>
						<b>Device pairing and recovery codes</b> you hold; revoke a device and the key tree rotates
						forward.
					</li>
					<li>
						<b>Rebuild the relay from scratch</b> and your devices re-enroll from their own keypairs.
						No server-held plaintext, ever.
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
