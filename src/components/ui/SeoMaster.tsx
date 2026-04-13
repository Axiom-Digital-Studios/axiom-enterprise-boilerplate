/* Axiom Digital Enterprise Boilerplate | Best or Nothing */

/**
 * SeoMaster — Enterprise metadata handler for dynamic JSON-LD,
 * OpenGraph, Twitter Cards, and canonical URL management.
 *
 * Usage:
 *   import { generateMetadata } from '@/components/ui/SeoMaster';
 *   export const metadata = generateMetadata({ title: 'Services', ... });
 */

import type { Metadata } from 'next';
import { DEFAULT_META } from '@/lib/constants';
import type { SeoProps } from '@/types';

/**
 * Generates Next.js Metadata object with JSON-LD, OG, and Twitter cards.
 */
export function generateMetadata(props: Partial<SeoProps> = {}): Metadata {
  const {
    title,
    description = DEFAULT_META.description,
    canonical,
    ogImage = DEFAULT_META.ogImage,
    ogType = 'website',
    noIndex = false,
  } = props;

  const fullTitle = title
    ? `${title} | ${DEFAULT_META.title.split(' | ')[0]}`
    : DEFAULT_META.title;

  const url = canonical || DEFAULT_META.siteUrl;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(DEFAULT_META.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: DEFAULT_META.title.split(' | ')[0],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: DEFAULT_META.locale,
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: DEFAULT_META.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Generates JSON-LD structured data for a page.
 * Renders as a <script> tag in the document head.
 */
interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';
  data: Record<string, unknown>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/**
 * Pre-built Organization JSON-LD for the Axiom brand.
 */
export function AxiomOrganizationJsonLd() {
  return (
    <JsonLd
      type="Organization"
      data={{
        name: 'Axiom Digital',
        url: DEFAULT_META.siteUrl,
        logo: `${DEFAULT_META.siteUrl}/assets/brand/axiom-logo-dark.svg`,
        description: DEFAULT_META.description,
        sameAs: [
          'https://twitter.com/axiomdigital',
          'https://linkedin.com/company/axiomdigital',
          'https://github.com/axiomdigital',
        ],
      }}
    />
  );
}
