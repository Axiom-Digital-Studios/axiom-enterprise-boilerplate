<!-- Axiom Digital Enterprise Boilerplate | Best or Nothing -->

<div align="center">

# ⬡ AXIOM ENTERPRISE BOILERPLATE

### Best or Nothing.

*Enterprise-grade web architecture engineered for sub-second latency and cinematic user experiences.*

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-Proprietary-c8a97e?style=flat-square)](#)

---

</div>

## Overview

The **Axiom Enterprise Boilerplate** is our proprietary internal framework used to scaffold production-ready web ecosystems for enterprise and hospitality clients. Every architectural decision is driven by three non-negotiable principles:

1. **Performance** — Sub-second latency on every interaction
2. **Security** — Enterprise-grade headers and CSP policies from day one
3. **Aesthetics** — Cinematic, dark-mode-first UI that commands attention

---

## Architecture

```
axiom-enterprise-boilerplate/
│
├── public/
│   └── assets/
│       ├── brand/          # Logo variants, OG images, favicons
│       ├── video/          # Hero loops, product demos (WebM/MP4)
│       └── motion/         # Lottie animations, SVG sprites
│
├── src/
│   ├── app/                # Next.js App Router (pages + layouts)
│   │   ├── layout.tsx      # Root shell — fonts, header, footer, JSON-LD
│   │   ├── page.tsx        # Landing page with hero + features
│   │   └── globals.css     # Design tokens, base styles, utilities
│   │
│   ├── components/
│   │   ├── ui/             # Atomic primitives (Button, SeoMaster)
│   │   ├── layout/         # Structural (Header, Footer, PerformanceWrapper)
│   │   └── sections/       # Page-level blocks (HeroSection, FeaturesGrid)
│   │
│   ├── lib/                # Utility layer
│   │   ├── utils.ts        # cn(), formatDate, slugify, clamp, sleep
│   │   ├── api.ts          # Fetch wrapper with timeout + retry
│   │   ├── animations.ts   # Framer Motion variant presets
│   │   └── constants.ts    # Brand config, nav items, perf budgets
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── useScrollDirection.ts
│   │   ├── useMediaQuery.ts
│   │   └── useIntersectionObserver.ts
│   │
│   └── types/              # Centralized TypeScript interfaces
│       └── index.ts        # NavItem, SeoProps, ApiResponse, etc.
│
├── .editorconfig           # Editor consistency
├── .prettierrc             # Code formatting rules
├── next.config.ts          # Image optimization + security headers
├── tailwind.config.ts      # Dark-first design system tokens
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

---

## Core Components

### `SeoMaster`
Dynamic metadata generation for every page — handles OpenGraph, Twitter Cards, canonical URLs, robots directives, and JSON-LD structured data. Uses Next.js `generateMetadata` pattern for fully static SEO.

### `PerformanceWrapper`
Intersection Observer-powered lazy renderer. Wraps page sections to defer below-fold content, applies Framer Motion entrance animations, and respects `prefers-reduced-motion`. Includes a `CriticalSection` bypass for above-the-fold hero content.

### `AxiomHeader`
Scroll-aware responsive navigation with:
- Glassmorphic blur effect on scroll
- Auto-hide on scroll-down, reveal on scroll-up
- Animated logo with spring physics
- Fullscreen mobile drawer with staggered link entry
- Gold-accent CTA button with glow state

### `Button`
Design-system primitive supporting `primary`, `secondary`, `ghost`, and `outline` variants across three sizes (`sm`, `md`, `lg`) with built-in loading spinner.

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `axiom-void` | `#09090b` | Primary background |
| `axiom-carbon` | `#0f0f12` | Card / surface |
| `axiom-graphite` | `#18181b` | Elevated surface |
| `axiom-slate` | `#27272a` | Borders |
| `axiom-ivory` | `#fafafa` | Headings |
| `accent-primary` | `#c8a97e` | Gold CTA |
| `accent-muted` | `rgba(200,169,126,0.12)` | Subtle gold bg |

**Typography:** Inter (body), Outfit (display), JetBrains Mono (code)
**Animations:** Spring physics, cinematic easing `[0.22, 1, 0.36, 1]`, stagger orchestration

---

## Quick Start

```bash
# Clone the boilerplate
git clone https://github.com/axiom-digital/axiom-enterprise-boilerplate.git
cd axiom-enterprise-boilerplate

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start
```

The dev server launches at `http://localhost:3000`.

---

## Environment Variables

Create a `.env.local` file at the project root:

```env
# Base URL (used for canonical URLs and OG images)
NEXT_PUBLIC_BASE_URL=https://axiomdigital.io

# API endpoint (optional — for backend integration)
NEXT_PUBLIC_API_URL=/api
```

---

## System Audit Checklist

> Run this audit before every production deployment.

### Performance

| Metric | Target | Tool |
|---|---|---|
| Largest Contentful Paint (LCP) | ≤ 2.5s | Lighthouse / CrUX |
| First Input Delay (FID) | ≤ 100ms | Web Vitals |
| Cumulative Layout Shift (CLS) | ≤ 0.1 | Lighthouse |
| Time to First Byte (TTFB) | ≤ 800ms | WebPageTest |
| First Contentful Paint (FCP) | ≤ 1.8s | Lighthouse |
| Interaction to Next Paint (INP) | ≤ 200ms | Web Vitals |
| JS Bundle Size | ≤ 250 KB | `npm run build` |

### Security

- [ ] `Strict-Transport-Security` header present
- [ ] `X-Content-Type-Options: nosniff` enabled
- [ ] `X-Frame-Options: DENY` set
- [ ] `Referrer-Policy` configured
- [ ] `Permissions-Policy` restricts camera/mic/geo
- [ ] No `X-Powered-By` header leaked
- [ ] All external resources use `rel="noopener noreferrer"`

### SEO

- [ ] Every page has a unique `<title>` tag
- [ ] Meta descriptions are ≤ 160 characters
- [ ] OpenGraph image is 1200×630
- [ ] JSON-LD Organization schema on root layout
- [ ] Canonical URLs resolve correctly
- [ ] `robots.txt` and `sitemap.xml` present

### Accessibility

- [ ] All interactive elements have focus-visible styles
- [ ] Navigation has `role="navigation"` and `aria-label`
- [ ] Mobile menu toggle has `aria-expanded`
- [ ] Color contrast ratio ≥ 4.5:1 for body text
- [ ] Reduced motion users see no animation

---

## Deployment

This boilerplate is optimized for deployment on:

- **Vercel** (recommended) — Zero-config, edge-optimized
- **Netlify** — Static export with `output: 'export'`
- **Docker** — Containerized Node.js runtime
- **AWS Amplify** — Full-stack with Lambda@Edge

---

## Philosophy

> *"The details are not the details. They make the design."*
> — Charles Eames

Every pixel, every millisecond, every security header exists because we refuse to ship mediocrity. This is not a starter template. This is a precision instrument.

**Best or Nothing.**

---

<div align="center">

*Axiom Digital — Proprietary Internal Framework*
*© 2024–2026 Axiom Digital. All rights reserved.*

</div>
