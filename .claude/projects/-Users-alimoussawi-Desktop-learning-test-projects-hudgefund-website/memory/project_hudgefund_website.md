---
name: HudgeFund Capital Website
description: Production-ready Next.js 14 venture capital website — tech stack, structure, and key decisions
type: project
---

Built a full corporate website for HudgeFund Capital (fictional fund-of-funds brand).

**Why:** User wanted a premium VC website inspired by Amkan Ventures, built with Next.js + Tailwind + Framer Motion, deployable on Vercel.

**Stack:** Next.js 14.2.3 (App Router), TypeScript, Tailwind CSS, Framer Motion, next/font (Playfair Display + Inter).

**Key decisions:**
- All content centralized in `data/content.ts` — single source of truth for easy replacement
- `next.config.mjs` (not `.ts`) — Next.js 14.2.3 does not support `next.config.ts`
- `group` utility cannot be used inside `@apply` in Tailwind — use inline classes instead
- @typescript-eslint/no-unused-vars rule requires the plugin installed; removed from .eslintrc.json since next/core-web-vitals covers it
- All pages are statically prerendered (no API routes yet)
- ContactForm is a client component with mock submission handler

**How to apply:** When extending this project, remember content changes go in `data/content.ts`, and to add real form handling, create an `app/api/contact/route.ts` API route.
