/* Axiom Digital | Final Audit Verified | Best or Nothing */

/**
 * HeroSection — Cinematic hero with agency-flex typography,
 * mathematically-spaced vertical rhythm, and centered CTA grouping.
 *
 * Typography rationale:
 *   - lg:text-[120px]: Maximum visual impact on large viewports
 *   - tracking-[-0.06em]: Tightens letterforms into a unified editorial block
 *   - leading-[0.9]: Headlines compress into a "slab" — the agency signature
 *   - space-y-16: 64px gaps guarantee content breathes without feeling lost
 *   - px-10: Unified horizontal containment shared across all sections
 */

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { CriticalSection } from '@/components/layout/PerformanceWrapper';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function HeroSection() {
  return (
    <CriticalSection
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* ── Background Gradient Orbs ──────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Wider, softer orbs for more cinematic atmosphere */}
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-accent-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-primary/3 blur-[100px]" />
      </div>

      {/* ── Strict vertical rhythm: space-y-16 = 64px between every element ── */}
      <motion.div
        className="max-w-7xl mx-auto px-10 w-full relative z-10 flex flex-col items-center text-center space-y-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* ── Badge ───────────────────────────────────────── */}
        <motion.div
          variants={staggerItem}
          className="inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-muted px-4 py-1.5"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent-primary" />
          {/* tracking-[0.4em]: Visually isolates badge from all surrounding copy */}
          <span className="tracking-[0.4em] uppercase text-[10px] font-semibold text-accent-primary">
            Enterprise-Grade Architecture
          </span>
        </motion.div>

        {/* ── Headline ────────────────────────────────────── */}
        {/*
          text-6xl → md:text-8xl → lg:text-[120px]: Responsive scale
          font-black: Maximum weight for brutalist "slab" presence
          tracking-[-0.06em]: Letterforms collapse into editorial unity
          leading-[0.9]: Compressed line-height — the "Agency Flex" signature
        */}
        <motion.h1
          variants={staggerItem}
          className="mx-auto max-w-5xl text-6xl md:text-8xl lg:text-[120px] font-display font-black tracking-[-0.06em] leading-[0.9] text-white"
        >
          Built for Scale.{' '}
          <br className="hidden sm:block" />
          Designed for Impact.
        </motion.h1>

        {/* ── Sub-headline ─ max-w-xl keeps it tight and readable ── */}
        <motion.p
          variants={staggerItem}
          className="mx-auto max-w-xl text-neutral-400 text-lg leading-relaxed"
        >
          Sub-second latency web ecosystems engineered with cinematic precision
          for enterprise and hospitality clients worldwide.
        </motion.p>

        {/* ── CTA Group ── both buttons share equal py-5 height ── */}
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <Link
            href="/contact"
            className="group inline-flex justify-center items-center gap-3 rounded-full bg-white px-12 py-5 text-sm font-bold tracking-widest uppercase text-black transition-all duration-500 hover:scale-105 shadow-[0_0_60px_rgba(250,250,250,0.12)]"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex justify-center items-center rounded-full border border-white/10 px-12 py-5 text-sm font-semibold tracking-widest uppercase text-white transition-all duration-500 hover:border-white/30 hover:bg-white/5"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* ── Scroll Indicator ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <div className="mx-auto flex h-8 w-5 items-start justify-center rounded-full border border-axiom-slate/50 p-1">
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-accent-primary"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </CriticalSection>
  );
}
