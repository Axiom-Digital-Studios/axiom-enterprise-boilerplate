/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/**
 * RootLayout — Application shell with font loading,
 * global styles, header/footer, and noise texture.
 */

import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import { AxiomHeader } from '@/components/layout/AxiomHeader';
import { AxiomFooter } from '@/components/layout/AxiomFooter';
import { AxiomOrganizationJsonLd } from '@/components/ui/SeoMaster';
import { DEFAULT_META } from '@/lib/constants';
import './globals.css';

/* ── Font Configuration ───────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

/* ── Root Metadata ────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: DEFAULT_META.title,
    template: `%s | Axiom Digital`,
  },
  description: DEFAULT_META.description,
  metadataBase: new URL(DEFAULT_META.siteUrl),
  openGraph: {
    title: DEFAULT_META.title,
    description: DEFAULT_META.description,
    url: DEFAULT_META.siteUrl,
    siteName: 'Axiom Digital',
    images: [{ url: DEFAULT_META.ogImage, width: 1200, height: 630 }],
    locale: DEFAULT_META.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_META.title,
    description: DEFAULT_META.description,
    creator: DEFAULT_META.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

/* ── Layout Component ─────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="axiom-noise min-h-screen bg-axiom-void font-sans text-axiom-pearl antialiased">
        <AxiomOrganizationJsonLd />
        <AxiomHeader />
        <main className="relative">{children}</main>
        <AxiomFooter />
      </body>
    </html>
  );
}
