/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/**
 * HomePage — Landing page demonstrating the Axiom boilerplate
 * with cinematic hero section and performance-wrapped content.
 */

import { HeroSection } from '@/components/sections';
import { PerformanceWrapper } from '@/components/layout';
import { generateMetadata as seoMeta } from '@/components/ui/SeoMaster';
import { Shield, Zap, Globe, Layers } from 'lucide-react';

export const metadata = seoMeta({
  title: 'Home',
  description:
    'Axiom Digital — Enterprise-grade digital ecosystems engineered for sub-second latency and cinematic user experiences.',
});

/* ── Feature Cards Data ───────────────────────────────── */
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

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ── Features Section ──────────────────────────── */}
      <PerformanceWrapper
        as="section"
        className="axiom-section"
        id="features"
      >
        <div className="axiom-container">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-primary uppercase">
              Core Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-display font-bold text-axiom-ivory sm:text-4xl">
              Engineered for Excellence
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-axiom-steel">
              Every layer of the Axiom stack is purpose-built for performance,
              security, and developer experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-axiom-lg border border-axiom-slate/30 bg-axiom-carbon p-6 transition-all duration-axiom hover:border-accent-primary/20 hover:shadow-axiom"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-muted text-accent-primary transition-colors duration-axiom group-hover:bg-accent-primary/15">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-axiom-ivory">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-axiom-steel">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PerformanceWrapper>

      {/* ── CTA Banner ────────────────────────────────── */}
      <PerformanceWrapper
        as="section"
        className="axiom-section"
        id="cta-banner"
      >
        <div className="axiom-container">
          <div className="relative overflow-hidden rounded-axiom-lg border border-accent-primary/10 bg-gradient-to-br from-axiom-carbon to-axiom-graphite p-12 text-center sm:p-16">
            {/* Glow accent */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-primary/8 blur-3xl" />
            <h2 className="relative text-2xl font-display font-bold text-axiom-ivory sm:text-3xl">
              Ready to Build Something Exceptional?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-axiom-steel">
              This boilerplate is your foundation. Clone it, customize it,
              and deploy enterprise-grade experiences in hours — not months.
            </p>
            <div className="relative mt-8">
              <code className="rounded-lg border border-axiom-slate/50 bg-axiom-void px-6 py-3 font-mono text-sm text-accent-primary">
                npx create-axiom-app my-project
              </code>
            </div>
          </div>
        </div>
      </PerformanceWrapper>
    </>
  );
}
