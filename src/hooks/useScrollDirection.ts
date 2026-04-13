/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/**
 * useScrollDirection — Detects scroll direction and position
 * for cinematic header transitions.
 */

'use client';

import { useState, useEffect, useCallback } from 'react';

interface ScrollState {
  direction: 'up' | 'down' | null;
  scrollY: number;
  isScrolled: boolean;
  isAtTop: boolean;
}

export function useScrollDirection(threshold: number = 10): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    direction: null,
    scrollY: 0,
    isScrolled: false,
    isAtTop: true,
  });

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setScrollState((prev) => {
      const direction =
        currentScrollY > prev.scrollY + threshold
          ? 'down'
          : currentScrollY < prev.scrollY - threshold
            ? 'up'
            : prev.direction;

      return {
        direction,
        scrollY: currentScrollY,
        isScrolled: currentScrollY > 50,
        isAtTop: currentScrollY < 10,
      };
    });
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollState;
}
