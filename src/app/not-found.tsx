/* Axiom Digital | Logic Verified | Best or Nothing */

'use client';

import Link from 'next/link';
import { Hexagon } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center axiom-container">
      <div className="text-center max-w-xl px-6 py-24 relative">
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[20rem] font-display font-bold text-axiom-ivory">404</span>
        </div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-axiom-graphite border border-axiom-slate mb-6">
            <Hexagon className="h-6 w-6 text-accent-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-axiom-ivory mb-6 tracking-tight">
            Signal Lost
          </h1>
          <p className="text-axiom-steel mb-10 leading-relaxed max-w-md mx-auto">
            The requested trajectory corresponds to a non-existent vector. The sector may have been relocated or the coordinates were compromised.
          </p>

          <Button variant="primary" size="lg" onClick={() => window.location.href = '/'}>
            Re-engage Navigation
          </Button>
        </div>
      </div>
    </div>
  );
}
