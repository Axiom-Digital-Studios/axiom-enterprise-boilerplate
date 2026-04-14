/* Axiom Digital | Final Audit Verified | Best or Nothing */

/**
 * AxiomFooter — Minimal, high-end footer with brand identity
 * and essential navigation links.
 */

import Link from 'next/link';
import { Hexagon } from 'lucide-react';
import { BRAND, NAV_ITEMS } from '@/lib/constants';

export function AxiomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/[0.03] bg-axiom-void" role="contentinfo">
      <div className="max-w-7xl mx-auto px-10 w-full py-32">
        <div className="grid gap-12 md:grid-cols-3">
          {/* ── Brand Column ──────────────────────────────── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Hexagon className="h-6 w-6 text-accent-primary" strokeWidth={1.5} />
              <span className="text-sm font-semibold tracking-[0.15em] text-axiom-ivory uppercase">
                {BRAND.name}
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Enterprise-grade digital ecosystems engineered for sub-second latency
              and cinematic user experiences.
            </p>
          </div>

          {/* ── Navigation Column ─────────────────────────── */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              Navigation
            </h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors duration-500 hover:text-axiom-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ────────────────────────────── */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              Connect
            </h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li>
                <a
                  href="mailto:hello@axiomdigital.io"
                  className="transition-colors duration-500 hover:text-axiom-ivory"
                >
                  hello@axiomdigital.io
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/axiomdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:text-axiom-ivory"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/axiomdigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:text-axiom-ivory"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ──────────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-axiom-slate/20 pt-8 md:flex-row">
          <p className="text-xs text-neutral-400">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-xs tracking-widest text-neutral-400 uppercase">
            {BRAND.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
