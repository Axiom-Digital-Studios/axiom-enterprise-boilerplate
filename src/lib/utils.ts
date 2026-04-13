/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/** Axiom-standard utility library for consistent operations. */

import { type ClassValue, clsx } from 'clsx';

/**
 * Merges Tailwind classes safely with clsx.
 * NOTE: Install `clsx` → `npm install clsx`
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Formats a date string to Axiom's standard locale.
 * @param date - ISO date string or Date object
 * @param locale - BCP 47 locale tag (default: 'en-US')
 */
export function formatDate(
  date: string | Date,
  locale: string = 'en-US'
): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

/**
 * Truncates text to a maximum character count with ellipsis.
 */
export function truncate(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Generates a slug from a string for URL-safe paths.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Waits for a given number of milliseconds.
 * Useful for stagger animations and rate limiting.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Returns the absolute URL for a given path (SSR-safe).
 */
export function absoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  return `${baseUrl}${path}`;
}

/**
 * Clamps a number between min and max bounds.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
