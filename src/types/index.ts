/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/** Centralized TypeScript interfaces for the Axiom ecosystem. */

/* ── Navigation ───────────────────────────────────────── */
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavItem[];
}

/* ── SEO / Metadata ───────────────────────────────────── */
export interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown>;
  noIndex?: boolean;
}

/* ── Component Base ───────────────────────────────────── */
export interface BaseComponentProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

/* ── Animation Variants ───────────────────────────────── */
export interface AnimationConfig {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  transition?: Record<string, unknown>;
}

/* ── API Response ─────────────────────────────────────── */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

/* ── Performance Metrics ──────────────────────────────── */
export interface PerformanceMetrics {
  fcp: number;     // First Contentful Paint
  lcp: number;     // Largest Contentful Paint
  cls: number;     // Cumulative Layout Shift
  fid: number;     // First Input Delay
  ttfb: number;    // Time to First Byte
}

/* ── Brand / Theme ────────────────────────────────────── */
export interface BrandConfig {
  name: string;
  tagline: string;
  logo: {
    light: string;
    dark: string;
  };
  colors: {
    primary: string;
    accent: string;
    background: string;
  };
}
