/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/** Barrel export for /src/lib utilities. */

export { cn, formatDate, truncate, slugify, sleep, absoluteUrl, clamp } from './utils';
export { axiomFetch } from './api';
export {
  springTransition,
  smoothTransition,
  cinematicTransition,
  fadeIn,
  fadeInUp,
  fadeInDown,
  scaleIn,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  pageTransition,
  navbarVariants,
} from './animations';
export { BRAND, NAV_ITEMS, PERFORMANCE_BUDGET, DEFAULT_META } from './constants';
