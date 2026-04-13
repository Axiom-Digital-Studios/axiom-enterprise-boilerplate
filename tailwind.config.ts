/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      /* ── Axiom Neutral Color System (Dark-First) ────────── */
      colors: {
        axiom: {
          void: '#09090b',       // Deepest black — primary bg
          carbon: '#0f0f12',     // Card / surface bg
          graphite: '#18181b',   // Elevated surface
          slate: '#27272a',      // Borders / dividers
          ash: '#3f3f46',        // Muted elements
          steel: '#71717a',      // Secondary text
          silver: '#a1a1aa',     // Placeholder text
          pearl: '#d4d4d8',      // Body text
          ivory: '#fafafa',      // Primary text / headings
        },
        accent: {
          primary: '#c8a97e',    // Gold — primary CTA
          hover: '#d4b98a',      // Gold hover
          muted: 'rgba(200, 169, 126, 0.12)', // Subtle gold bg
          glow: 'rgba(200, 169, 126, 0.25)',   // Gold glow
        },
      },

      /* ── Typography ─────────────────────────────────────── */
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        hero: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        subhero: ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        axiom: '0.15em',
      },

      /* ── Spacing & Layout ───────────────────────────────── */
      maxWidth: {
        axiom: '1440px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '128': '32rem',
      },
      borderRadius: {
        axiom: '0.75rem',
        'axiom-lg': '1.25rem',
      },

      /* ── Animations ─────────────────────────────────────── */
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        shimmer: 'shimmer 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },

      /* ── Backdrop & Effects ─────────────────────────────── */
      backdropBlur: {
        axiom: '20px',
      },
      boxShadow: {
        axiom: '0 0 0 1px rgba(200, 169, 126, 0.08), 0 8px 40px rgba(0, 0, 0, 0.4)',
        'axiom-hover': '0 0 0 1px rgba(200, 169, 126, 0.15), 0 16px 64px rgba(0, 0, 0, 0.5)',
        glow: '0 0 24px rgba(200, 169, 126, 0.2)',
      },

      /* ── Transitions ────────────────────────────────────── */
      transitionDuration: {
        axiom: '300ms',
        'axiom-slow': '600ms',
      },
      transitionTimingFunction: {
        axiom: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'axiom-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
