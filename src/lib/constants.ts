/* Axiom Digital | Logic Verified | Best or Nothing */

export const AXIOM_CONFIG = {
  brand: {
    name: 'Axiom Digital',
    tagline: 'Best or Nothing',
    colors: {
      primary: '#c8a97e',
      accent: '#d4b98a',
      background: '#09090b',
    },
    logo: {
      light: '/assets/brand/axiom-logo-light.svg',
      dark: '/assets/brand/axiom-logo-dark.svg',
    },
  },
  metadata: {
    title: 'Axiom Digital | Best or Nothing',
    description:
      'Enterprise-grade digital ecosystems engineered for sub-second latency and cinematic user experiences.',
    ogImage: '/assets/brand/og-default.jpg',
    siteUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://axiomdigital.io',
    locale: 'en_US',
  },
  social: {
    twitter: {
      handle: '@axiomdigital',
      url: 'https://twitter.com/axiomdigital',
    },
    linkedin: {
      url: 'https://linkedin.com/company/axiomdigital',
    },
    github: {
      url: 'https://github.com/axiom-digital',
    },
  },
  performance: {
    LCP_MS: 2500, // Largest Contentful Paint
    FID_MS: 100,  // First Input Delay
    CLS: 0.1,     // Cumulative Layout Shift
    TTFB_MS: 800, // Time to First Byte
    FCP_MS: 1800, // First Contentful Paint
    INP_MS: 200,  // Interaction to Next Paint
    BUNDLE_KB: 250, // Maximum JS bundle size
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

/* Temporary alias aliases to keep previous imports from breaking until fully refactored, if needed. */
export const BRAND = AXIOM_CONFIG.brand;
export const NAV_ITEMS = AXIOM_CONFIG.navigation;
export const DEFAULT_META = AXIOM_CONFIG.metadata;
export const PERFORMANCE_BUDGET = AXIOM_CONFIG.performance;
