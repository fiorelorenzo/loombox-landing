# loombox-landing

Marketing landing page for [loombox](https://github.com/fiorelorenzo/loombox) — a
self-hosted cockpit for coding agents.

Separate from the product monorepo by design (same split as pitchbox and embertold).

## Stack

- **SvelteKit** with `@sveltejs/adapter-node`.
- Fonts are self-hosted via `@fontsource-variable/inter` and
  `@fontsource-variable/jetbrains-mono` (no CDN, no inlined font data URIs).
- Hosted on **prodbox** (Docker + Caddy, auto TLS) on `loombox.dev`.

## Development

```bash
pnpm i
pnpm dev
```

Other scripts:

```bash
pnpm build      # production build (adapter-node -> build/)
pnpm preview    # preview the production build locally
pnpm check      # svelte-check (types)
pnpm lint       # prettier --check + eslint
pnpm format     # prettier --write
```

## Deploying on prodbox

Same pattern as pitchbox and the loombox relay: rsync the repo to
`/opt/apps/loombox-landing`, build the Docker image, run it behind the host
Caddy instance.

```bash
# on prodbox, from /opt/apps/loombox-landing
docker compose up -d --build
```

`docker-compose.yml` builds the multi-stage `Dockerfile` (pnpm build, then a
slim `node:22-alpine` runtime running `node build/index.js`) and publishes the
container on `127.0.0.1:5190`, loopback-only so Caddy is the only thing
exposed to the internet.

Caddy vhost (`/etc/caddy/Caddyfile` on prodbox):

```
loombox.dev, www.loombox.dev {
  reverse_proxy 127.0.0.1:5190
}
```

DNS: apex `A loombox.dev -> <prodbox public IP>` (DNS-only, grey cloud, same
as the other prodbox-hosted domains), `www` as a `CNAME` to the apex.

The `ORIGIN` environment variable in `docker-compose.yml` is set to
`https://loombox.dev`; update it if the domain changes.

## License

MIT.
