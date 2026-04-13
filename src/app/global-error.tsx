/* Axiom Digital | Logic Verified | Best or Nothing */

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Hexagon, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Placeholder analytics / logging
    console.error('[Axiom Error Telemetry]:', error);
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-axiom-void text-axiom-pearl font-sans antialiased flex items-center justify-center">
        <div className="axiom-container text-center max-w-2xl px-6 py-24 border border-axiom-slate/20 rounded-axiom-lg bg-axiom-carbon shadow-axiom">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-axiom-graphite border border-axiom-slate mb-8">
            <AlertTriangle className="h-8 w-8 text-accent-primary" />
          </div>
          
          <h1 className="text-3xl font-display font-bold text-axiom-ivory mb-4 tracking-tight">
            System Integrity Compromised
          </h1>
          <p className="text-axiom-steel mb-10 leading-relaxed text-sm">
            An unexpected constraint violation occurred. Our telemetry has logged the incident for immediate review.
            You can attempt to recalibrate the view or return to the base ecosystem.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button variant="primary" onClick={() => reset()}>
              Recalibrate View
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              Return to Ecosystem
            </Button>
          </div>

          <div className="mt-16 text-2xs uppercase tracking-[0.25em] text-axiom-ash flex items-center justify-center gap-2">
            <Hexagon className="h-3 w-3" />
            Axiom Digital
          </div>
        </div>
      </body>
    </html>
  );
}
