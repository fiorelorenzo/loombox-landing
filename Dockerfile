# loombox-landing — SvelteKit + adapter-node, built and run as a plain Node
# server. Multi-stage: build with the full devDependencies, ship only the
# production node_modules + the adapter-node output.

FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable

# ---- deps: install once, reused by both the build and prod stages -------
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# ---- build: compile the SvelteKit app ------------------------------------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# ---- prod deps: production-only node_modules, no devDependencies --------
FROM base AS prod-deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile --prod

# ---- runtime: the actual container we ship -------------------------------
FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
CMD ["node", "build/index.js"]
