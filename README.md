# HudgeFund Capital — Website

A production-ready corporate website for HudgeFund Capital, a fund-of-funds firm focused on emerging venture managers. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, optimized for deployment on **Vercel**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Fonts | Google Fonts via `next/font` |
| Deployment | Vercel |
| CI | GitHub Actions |

---

## Project Structure

```
hudgefund-website/
├── .github/
│   └── workflows/
│       └── validate.yml        # CI: typecheck + lint + build
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── globals.css             # Tailwind base + custom utilities
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx          # About page
│   ├── portfolio/page.tsx      # Portfolio page
│   ├── insights/page.tsx       # Press & insights page
│   └── contact/page.tsx        # Contact page with form
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky, scroll-aware navigation
│   │   └── Footer.tsx          # Footer with links and copyright
│   ├── sections/
│   │   ├── Hero.tsx            # Full-viewport hero with stats
│   │   ├── Pillars.tsx         # Four strategy pillar cards
│   │   ├── Thesis.tsx          # Investment thesis / about section
│   │   ├── Partner.tsx         # Managing partner profile
│   │   ├── Portfolio.tsx       # Portfolio fund card grid
│   │   ├── Insights.tsx        # Press / media section
│   │   ├── Advisory.tsx        # Advisory services section
│   │   ├── ContactCTA.tsx      # Full-width contact call to action
│   │   └── ContactForm.tsx     # Validated contact form (client)
│   └── ui/
│       ├── Button.tsx          # Polymorphic button/link component
│       ├── SectionHeader.tsx   # Reusable eyebrow + headline block
│       └── AnimatedSection.tsx # Framer Motion scroll-entry wrapper
├── data/
│   └── content.ts              # All site content — edit here
├── lib/
│   └── utils.ts                # cn() helper + utilities
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.js
```

---

## Local Setup

### Prerequisites

- Node.js 20+
- npm 10+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-org/hudgefund-website.git
cd hudgefund-website

# 2. Install dependencies
npm ci

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Build production-optimized bundle |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across all source files |
| `npm run typecheck` | Run TypeScript compiler without emitting files |

---

## Updating Content

All site content is centralized in **`data/content.ts`**. You can update:

- Site name, tagline, email, and social links (`siteConfig`)
- Navigation links (`navLinks`)
- Strategy pillars (`pillars`)
- Managing partner bio and credentials (`partner`)
- Portfolio fund cards (`portfolioFunds`)
- Press and media items (`pressItems`)
- Advisory service descriptions (`advisoryServices`)
- Stats bar values (`stats`)
- About page copy (`aboutContent`)

No other files need to be changed for content updates.

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel
```

Follow the prompts to link your project. Vercel auto-detects Next.js and configures the build.

### Option B — Vercel Dashboard (recommended)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel will auto-detect Next.js — accept the default settings.
4. Click **Deploy**.

Your site will be live at `https://<project-name>.vercel.app`.

### Environment Variables

No environment variables are required for the base site. If you add a form API route or analytics, add keys in the Vercel dashboard under **Project → Settings → Environment Variables**.

---

## GitHub Actions CI

The workflow at `.github/workflows/validate.yml` runs on every **push to `main`** and every **pull request targeting `main`**.

### Steps

1. `npm ci` — clean dependency install
2. `npm run typecheck` — TypeScript strict type-check
3. `npm run lint` — ESLint validation
4. `npm run build` — full Next.js production build

All steps must pass for a green check. Enforce branch protection on `main` in GitHub to require the `validate` job before merging.

---

## Design System

### Colors

| Token | Value | Usage |
|---|---|---|
| `cream` | `#FAFAF7` | Primary background |
| `cream-dark` | `#F0EEE8` | Card / section background |
| `charcoal` | `#111111` | Primary text and CTAs |
| `charcoal-muted` | `#444444` | Secondary text |
| `charcoal-light` | `#888888` | Muted / placeholder text |
| `gold` | `#B8962E` | Accent: borders, eyebrows, hover states |
| `border` | `#E2DDD4` | Dividers and card borders |

### Typography

- **Headings** — Playfair Display (serif) — `next/font/google`
- **Body / UI** — Inter (sans-serif) — `next/font/google`

---

## Accessibility

- Semantic HTML throughout (`main`, `nav`, `header`, `footer`, `section`, `article`)
- All images include meaningful `alt` text
- Focus-visible ring styles on all interactive elements
- Keyboard-navigable mobile menu with `aria-expanded` state
- Form inputs have associated `<label>` elements and `aria-describedby` for errors
- ARIA roles and `aria-live` on form success/error states
- Color contrast meets WCAG AA minimum

---

## License

This project is for demonstration and educational purposes. All brand names, fund names, and biographical details in `data/content.ts` are fictional.
