/* Axiom Digital | Logic Verified | Best or Nothing */

'use client';

import { type ReactNode, Children, isValidElement, cloneElement, forwardRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useIntersectionObserver, useReducedMotion } from '@/hooks';

interface PerformanceWrapperProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delayStart?: number;
  staggerDelay?: number;
  as?: 'div' | 'section' | 'article' | 'main';
  id?: string;
}

export function PerformanceWrapper({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -80px 0px',
  delayStart = 0,
  staggerDelay = 0.05, // 50ms orchestrator delay
  as: Tag = 'div',
  id,
}: PerformanceWrapperProps) {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Tag className={className} id={id}>
        {children}
      </Tag>
    );
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delayStart,
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Cinematic easing
      },
    },
  };

  const StaggeredChild = forwardRef<HTMLElement, { children: ReactNode; className?: string }>(
    ({ children, className }, childRef) => {
      return (
        <motion.div ref={childRef as any} variants={itemVariants} className={className}>
          {children}
        </motion.div>
      );
    }
  );
  StaggeredChild.displayName = 'StaggeredChild';

  // Orchestrate children to map them into staggered wrappers independently
  const orchestratedChildren = Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    return <StaggeredChild>{child}</StaggeredChild>;
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      id={id}
      variants={containerVariants}
      initial="hidden"
      animate={isIntersecting ? 'visible' : 'hidden'}
    >
      {orchestratedChildren}
    </motion.div>
  );
}

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
