/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/**
 * HeroSection — Cinematic hero with gradient text,
 * subtle particle animation, and CTA grouping.
 */

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { CriticalSection } from '@/components/layout/PerformanceWrapper';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export function HeroSection() {
  return (
    <CriticalSection
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* ── Background Gradient Orbs ──────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-primary/3 blur-3xl" />
      </div>

      <motion.div
        className="axiom-container relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* ── Badge ───────────────────────────────────── */}
        <motion.div
          variants={staggerItem}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-muted px-4 py-1.5"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent-primary" />
          <span className="text-xs font-medium tracking-wider text-accent-primary uppercase">
            Enterprise-Grade Architecture
          </span>
        </motion.div>

        {/* ── Headline ────────────────────────────────── */}
        <motion.h1
          variants={staggerItem}
          className="axiom-gradient-text mx-auto max-w-4xl text-hero font-display font-bold"
        >
          Built for Scale.{' '}
          <br className="hidden sm:block" />
          Designed for Impact.
        </motion.h1>

        {/* ── Sub-headline ────────────────────────────── */}
        <motion.p
          variants={staggerItem}
          className="mx-auto mt-6 max-w-2xl text-subhero text-axiom-steel"
        >
          Sub-second latency web ecosystems engineered with cinematic precision
          for enterprise and hospitality clients worldwide.
        </motion.p>

        {/* ── CTA Group ───────────────────────────────── */}
        <motion.div
          variants={staggerItem}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent-primary px-8 py-3.5 text-sm font-semibold text-axiom-void transition-all duration-300 hover:bg-accent-hover hover:shadow-glow"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-axiom-slate px-8 py-3.5 text-sm font-medium text-axiom-pearl transition-all duration-300 hover:border-axiom-ash hover:text-axiom-ivory"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* ── Scroll Indicator ────────────────────────── */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="mx-auto flex h-8 w-5 items-start justify-center rounded-full border border-axiom-slate/50 p-1">
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-accent-primary"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </CriticalSection>
  );
}
