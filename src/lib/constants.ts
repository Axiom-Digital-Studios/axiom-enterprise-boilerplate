/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/** Axiom brand constants and application-wide configuration. */

import type { NavItem, BrandConfig } from '@/types';

/* ── Brand Configuration ──────────────────────────────── */
export const BRAND: BrandConfig = {
  name: 'Axiom Digital',
  tagline: 'Best or Nothing',
  logo: {
    light: '/assets/brand/axiom-logo-light.svg',
    dark: '/assets/brand/axiom-logo-dark.svg',
  },
  colors: {
    primary: '#c8a97e',
    accent: '#d4b98a',
    background: '#09090b',
  },
};

/* ── Navigation ───────────────────────────────────────── */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/* ── Performance Thresholds ───────────────────────────── */
export const PERFORMANCE_BUDGET = {
  LCP_MS: 2500,       // Largest Contentful Paint
  FID_MS: 100,         // First Input Delay
  CLS: 0.1,           // Cumulative Layout Shift
  TTFB_MS: 800,       // Time to First Byte
  FCP_MS: 1800,       // First Contentful Paint
  INP_MS: 200,        // Interaction to Next Paint
  BUNDLE_KB: 250,     // Maximum JS bundle size
} as const;

/* ── Meta Defaults ────────────────────────────────────── */
export const DEFAULT_META = {
  title: 'Axiom Digital | Best or Nothing',
  description:
    'Enterprise-grade digital ecosystems engineered for sub-second latency and cinematic user experiences.',
  ogImage: '/assets/brand/og-default.jpg',
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://axiomdigital.io',
  locale: 'en_US',
  twitterHandle: '@axiomdigital',
} as const;
