# econstruct static site

Astro static rebuild of econstructinc.com for Cloudflare Pages.

Project scope and migration rules live in `MIGRATION_RULES.md`.

## Commands

Use Node.js `22.12.0` or newer. Cloudflare Pages should be configured with `NODE_VERSION=22.12.0`.

```bash
npm install
npm run dev
npm run build
```

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Functions directory: `functions`
- Environment variable: `NODE_VERSION=22.12.0`

## Required environment variables

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL=frank@econstructinc.com`
- `CONTACT_FROM_EMAIL`
- `TURNSTILE_SECRET_KEY`
- `PUBLIC_TURNSTILE_SITE_KEY`

The contact form posts to `/api/contact`, verifies the Turnstile token when configured, and sends the lead through Resend.

## Publishing blog posts

Create a new Markdown file in `src/content/blog/`:

```md
---
title: "Post title"
description: "SEO description for the post."
publishDate: 2026-05-05
category: "Commercial TI"
image: "/images/commercial-ti.png"
imageAlt: "descriptive image alt text"
serviceHref: "/services/commercial-ti/"
draft: false
---

Post body goes here.
```

The post automatically appears on `/blogs/`, gets its own `/blogs/{slug}/` page, and can be linked from the homepage latest insight section.

## Migration rule

Do not shut down the old WordPress host immediately after launch. Keep it parked for one month as a rollback backup unless the owner explicitly approves immediate shutdown.
