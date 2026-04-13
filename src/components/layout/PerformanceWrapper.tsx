/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/**
 * PerformanceWrapper — Layout component that enforces lazy-loading,
 * critical CSS pathing, and scroll-reveal animations.
 *
 * Wraps page sections to provide:
 * - Intersection-based lazy rendering
 * - Framer Motion entrance animations
 * - Configurable animation variants
 */

'use client';

import { type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useIntersectionObserver, useReducedMotion } from '@/hooks';
import { fadeInUp } from '@/lib/animations';

interface PerformanceWrapperProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'main';
  id?: string;
}

export function PerformanceWrapper({
  children,
  className = '',
  variants = fadeInUp,
  threshold = 0.1,
  rootMargin = '0px 0px -80px 0px',
  delay = 0,
  as: Tag = 'div',
  id,
}: PerformanceWrapperProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const prefersReducedMotion = useReducedMotion();

  /* Bypass animations if user prefers reduced motion */
  if (prefersReducedMotion) {
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      id={id}
      variants={variants}
      initial="hidden"
      animate={isIntersecting ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * CriticalSection — Marks a section as above-the-fold critical.
 * Renders immediately without lazy-loading or intersection logic.
 */
interface CriticalSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function CriticalSection({ children, className = '', id }: CriticalSectionProps) {
  return (
    <motion.section
      className={className}
      id={id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.section>
  );
}
