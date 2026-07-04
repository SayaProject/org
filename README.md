# SHNWAZDEV — Personal Site

Single-page portfolio built with **TanStack Start**, **React 19**, **Vite 7** and **Tailwind v4**. Runs on the edge — designed for **Cloudflare Workers / Pages**.

## Local dev

```bash
bun install
bun dev
```

Open http://localhost:8080

## Build

```bash
bun run build
```

The output is a Cloudflare-compatible Worker in `.output/` (Nitro `cloudflare-module` preset — already configured in `vite.config.ts`).

## Deploy to Cloudflare

You have two easy paths. Pick one.

### Option A — Cloudflare Pages (recommended, git-connected)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repo, then set:
   - **Framework preset**: `None`
   - **Build command**: `bun run build`
   - **Build output directory**: `.output/public`
   - **Root directory**: `/`
   - **Environment variables**: add `NODE_VERSION=20` (or newer)
4. Click **Save and Deploy**.

Every push to your default branch redeploys automatically.

### Option B — Wrangler CLI (Workers)

1. Install Wrangler once: `bun add -g wrangler`
2. Log in: `wrangler login`
3. Build: `bun run build`
4. Deploy the generated Worker:

   ```bash
   wrangler deploy --name shnwazdev \
     --compatibility-date 2025-01-01 \
     --compatibility-flag nodejs_compat \
     .output/server/index.mjs
   ```

Optional `wrangler.toml`:

```toml
name = "shnwazdev"
main = ".output/server/index.mjs"
compatibility_date = "2025-01-01"
compatibility_flags = ["nodejs_compat"]

[assets]
directory = ".output/public"
```

Then just: `wrangler deploy`.

### Custom domain

In the Cloudflare dashboard → your Pages/Worker → **Custom domains → Set up a custom domain**. Point your domain's nameservers to Cloudflare first, then add the record.

## Project structure

```
src/
├─ routes/
│  ├─ __root.tsx      # HTML shell, head, providers
│  └─ index.tsx       # Home page (EN / RU)
├─ styles.css         # Tailwind v4 + design tokens
└─ assets/            # avatar, static images
```

Language toggle (EN / RU) is client-side and persisted in `localStorage`.

## License

© 2025 SHNWAZDEV. All rights reserved.
