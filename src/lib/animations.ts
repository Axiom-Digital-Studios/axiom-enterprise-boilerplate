/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/** Axiom Framer Motion animation presets for cinematic transitions. */

import type { Variants, Transition } from 'framer-motion';

/* ── Shared Transitions ───────────────────────────────── */
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

export const cinematicTransition: Transition = {
  duration: 0.9,
  ease: [0.22, 1, 0.36, 1],
};

/* ── Fade Variants ────────────────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

/* ── Scale Variants ───────────────────────────────────── */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
};

/* ── Slide Variants ───────────────────────────────────── */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: cinematicTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: cinematicTransition,
  },
};

/* ── Stagger Container ────────────────────────────────── */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

/* ── Page Transition ──────────────────────────────────── */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.3,
    },
  },
};

/* ── Navbar Variants ──────────────────────────────────── */
export const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(9, 9, 11, 0)',
    backdropFilter: 'blur(0px)',
    borderBottom: '1px solid rgba(200, 169, 126, 0)',
  },
  scrolled: {
    backgroundColor: 'rgba(9, 9, 11, 0.85)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(200, 169, 126, 0.08)',
  },
};
