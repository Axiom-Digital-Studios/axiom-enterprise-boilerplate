/* Axiom Digital | Final Audit Verified | Best or Nothing */

/**
 * Features — Asymmetric Bento grid.
 *
 * Grid architecture:
 *   - 3 columns on lg (lg:grid-cols-3)
 *   - Card 0: col-span-2 row-span-2 — Dominant anchor block (left)
 *   - Cards 1 & 2: col-span-1 — Two stacked squares (right)
 *   - Card 3: col-span-3 — Full-width bottom banner
 *
 * The Bento Grid Law:
 *   - h-full min-h-[420px] on every card for perfectly aligned bottom borders
 *   - flex flex-col justify-between to frame content
 *   - Top-left Icon Standard: mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10
 */

'use client';

import { Shield, Zap, Globe, Layers } from 'lucide-react';
import { PerformanceWrapper } from '@/components/layout/PerformanceWrapper';

const features = [
  {
    icon: Zap,
    title: 'Sub-Second Latency',
    description:
      'Every interaction is engineered for speed. Critical path optimization ensures instantaneous page loads.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Security headers, CSP policies, and HSTS preloading come pre-configured out of the box.',
  },
  {
    icon: Globe,
    title: 'Global Edge Delivery',
    description:
      'Optimized for CDN edge deployment with image compression, AVIF/WebP delivery, and smart caching.',
  },
  {
    icon: Layers,
    title: 'Modular Architecture',
    description:
      'Atomic design system with composable components, centralized tokens, and barrel exports.',
  },
];

export function Features() {
  return (
    <PerformanceWrapper
      as="section"
      className="axiom-section"
      id="features"
    >
      <div className="max-w-7xl mx-auto px-10 w-full">

        {/* ── Section Header ─────────────────────────────────── */}
        <div className="mb-20 flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Core Capabilities
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-axiom-ivory leading-tight tracking-tight">
            Engineered for Excellence
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-axiom-steel leading-relaxed">
            Every layer of the Axiom stack is purpose-built for performance,
            security, and developer experience.
          </p>
        </div>

        {/* ── Bento Grid ─────────────────────────────────────── */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* ── Card 0: Dominant 2×2 anchor (left) ── */}
          <div className="
            group relative flex flex-col justify-between h-full min-h-[420px]
            md:col-span-2 lg:row-span-2
            overflow-hidden rounded-3xl
            border border-white/[0.05] bg-[#0A0A0A]
            p-12 shadow-2xl
            transition-all duration-500 hover:border-white/[0.15]
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10 w-full text-left">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-white/[0.2] group-hover:bg-white/[0.1]">
                <Zap className="h-6 w-6 text-axiom-ivory" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-white mb-6">
                Sub-Second Latency
              </h3>
            </div>
            <div className="relative z-10 w-full text-left mt-auto">
              <p className="text-neutral-400 leading-relaxed text-lg max-w-sm">
                Every interaction is engineered for speed. Critical path optimization ensures instantaneous page loads.
              </p>
            </div>
          </div>

          {/* ── Card 1: Top-right square ── */}
          <div className="
            group relative flex flex-col justify-between h-full min-h-[420px]
            lg:col-span-1
            overflow-hidden rounded-3xl
            border border-white/[0.05] bg-[#0A0A0A]
            p-10 shadow-2xl
            transition-all duration-500 hover:border-white/[0.15]
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10 w-full text-left">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-white/[0.2] group-hover:bg-white/[0.1]">
                <Shield className="h-6 w-6 text-axiom-ivory" />
              </div>
              <h3 className="text-xl font-display font-bold tracking-tight text-white mb-4">
                Enterprise Security
              </h3>
            </div>
            <div className="relative z-10 w-full text-left mt-auto">
              <p className="text-neutral-400 leading-relaxed text-sm">
                Security headers, CSP policies, and HSTS preloading come pre-configured out of the box.
              </p>
            </div>
          </div>

          {/* ── Card 2: Bottom-right square ── */}
          <div className="
            group relative flex flex-col justify-between h-full min-h-[420px]
            lg:col-span-1
            overflow-hidden rounded-3xl
            border border-white/[0.05] bg-[#0A0A0A]
            p-10 shadow-2xl
            transition-all duration-500 hover:border-white/[0.15]
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10 w-full text-left">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-white/[0.2] group-hover:bg-white/[0.1]">
                <Globe className="h-6 w-6 text-axiom-ivory" />
              </div>
              <h3 className="text-xl font-display font-bold tracking-tight text-white mb-4">
                Global Edge Delivery
              </h3>
            </div>
            <div className="relative z-10 w-full text-left mt-auto">
              <p className="text-neutral-400 leading-relaxed text-sm">
                Optimized for CDN edge deployment with image compression, AVIF/WebP delivery, and smart caching.
              </p>
            </div>
          </div>

          {/* ── Card 3: Full-width bottom banner ── */}
          <div className="
            group relative flex flex-col justify-between h-full min-h-[420px]
            md:col-span-2 lg:col-span-3
            overflow-hidden rounded-3xl
            border border-white/[0.05] bg-[#0A0A0A]
            p-12 shadow-2xl
            transition-all duration-500 hover:border-white/[0.15]
          ">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.025] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            <div className="relative z-10 w-full text-left">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-white/[0.2] group-hover:bg-white/[0.1]">
                <Layers className="h-6 w-6 text-axiom-ivory" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-display font-bold tracking-tight text-white mb-4">
                Modular Architecture
              </h3>
            </div>
            <div className="relative z-10 w-full text-left mt-auto">
              <p className="text-neutral-400 leading-relaxed text-base max-w-2xl">
                Atomic design system with composable components, centralized tokens, and barrel exports.
              </p>
            </div>
          </div>

        </div>
      </div>
    </PerformanceWrapper>
  );
}
