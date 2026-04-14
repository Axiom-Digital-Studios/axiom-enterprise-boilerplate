/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/**
 * HomePage — Landing page demonstrating the Axiom boilerplate
 * with cinematic hero section and performance-wrapped content.
 */

import { HeroSection, Features } from '@/components/sections';
import { PerformanceWrapper } from '@/components/layout';
import { generateMetadata as seoMeta } from '@/components/ui/SeoMaster';

export const metadata = seoMeta({
  title: 'Home',
  description:
    'Axiom Digital — Enterprise-grade digital ecosystems engineered for sub-second latency and cinematic user experiences.',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      
      <Features />

      <PerformanceWrapper
        as="section"
        className="axiom-section"
        id="cta-banner"
      >
        <div className="max-w-7xl mx-auto px-10 w-full">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-16 text-center shadow-2xl">
            {/* Glow accent */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-primary/8 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-accent-primary/5 blur-3xl" />
            <h2 className="relative mx-auto max-w-2xl text-3xl md:text-4xl font-display font-bold text-axiom-ivory leading-tight tracking-tight">
              Ready to Build Something Exceptional?
            </h2>
            <p className="relative mx-auto mt-5 max-w-md text-axiom-steel text-center leading-relaxed">
              This boilerplate is your foundation. Clone it, customize it,
              and deploy enterprise-grade experiences in hours — not months.
            </p>
            <div className="relative mt-10 flex justify-center">
              <code className="rounded-xl border border-white/[0.08] bg-axiom-void px-8 py-4 font-mono text-sm text-accent-primary tracking-wider">
                npx create-axiom-app my-project
              </code>
            </div>
          </div>
        </div>
      </PerformanceWrapper>
    </>
  );
}
