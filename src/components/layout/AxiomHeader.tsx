/* Axiom Digital | Final Audit Verified | Best or Nothing */

/**
 * AxiomHeader — Enterprise-grade responsive navigation system
 * with cinematic scroll-aware transitions, mobile drawer, and
 * gold-accent micro-interactions.
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Hexagon } from 'lucide-react';
import { useScrollDirection, useIsMobile } from '@/hooks';
import { NAV_ITEMS, BRAND } from '@/lib/constants';
import { navbarVariants, fadeInDown, staggerContainer, staggerItem } from '@/lib/animations';

export function AxiomHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled, direction } = useScrollDirection();
  const isMobile = useIsMobile();

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isVisible = direction !== 'down' || isMobileMenuOpen;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[var(--z-nav)] backdrop-blur-xl bg-black/40 border-b border-white/[0.03]"
        variants={navbarVariants}
        initial="top"
        animate={isScrolled ? 'scrolled' : 'top'}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}
      >
        <nav
          className="max-w-7xl mx-auto px-10 w-full flex h-[var(--axiom-header-height)] items-center justify-between"
          role="navigation"
          aria-label="Primary navigation"
        >
          {/* ── Logo ──────────────────────────────────────── */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${BRAND.name} — Home`}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 30 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Hexagon
                className="h-8 w-8 text-accent-primary transition-colors duration-500 group-hover:text-accent-hover"
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-widest text-axiom-ivory">
                  A
                </span>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-[0.15em] text-axiom-ivory uppercase">
                {BRAND.name.split(' ')[0]}
              </span>
              <span className="text-2xs tracking-[0.25em] text-axiom-steel uppercase">
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation ────────────────────────── */}
          {!isMobile && (
            <ul className="flex flex-1 justify-end items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative px-4 py-2 text-[13px] tracking-wider uppercase font-medium text-axiom-silver transition-colors duration-500 hover:text-axiom-ivory"
                  >
                    {item.label}
                    {/* Hover underline */}
                    <motion.span
                      className="absolute bottom-0 left-4 right-4 h-px bg-accent-primary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ originX: 0 }}
                    />
                  </Link>
                </li>
              ))}
              {/* CTA Button */}
              <li className="ml-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-[13px] tracking-widest uppercase font-bold text-black transition-all duration-500 hover:scale-105 hover:shadow-glow"
                >
                  Start Project
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          )}

          {/* ── Mobile Menu Toggle ────────────────────────── */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-axiom-silver transition-colors duration-500 hover:text-axiom-ivory"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )}
        </nav>
      </motion.header>

      {/* ── Mobile Fullscreen Menu ─────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[calc(var(--z-nav)-1)] flex flex-col items-center justify-center bg-axiom-void/98 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-6"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.href} variants={staggerItem}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-semibold tracking-wide text-axiom-pearl transition-colors duration-500 hover:text-accent-primary"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={staggerItem} className="mt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-accent-primary bg-accent-muted px-8 py-3 text-base font-medium text-accent-primary transition-all duration-500 hover:bg-accent-primary/20"
                >
                  Start Project
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
