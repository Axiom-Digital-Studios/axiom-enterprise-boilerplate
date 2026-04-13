/* Axiom Digital | Logic Verified | Best or Nothing */

import type { Metadata } from 'next';
import { AXIOM_CONFIG } from '@/lib/constants';
import type { SeoProps } from '@/types';

export function generateMetadata(props: Partial<SeoProps> = {}): Metadata {
  const {
    title,
    description = AXIOM_CONFIG.metadata.description,
    canonical,
    ogImage = AXIOM_CONFIG.metadata.ogImage,
    ogType = 'website',
    noIndex = false,
  } = props;

  const fullTitle = title
    ? `${title} | ${AXIOM_CONFIG.brand.name}`
    : AXIOM_CONFIG.metadata.title;

  const url = canonical || AXIOM_CONFIG.metadata.siteUrl;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(AXIOM_CONFIG.metadata.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: AXIOM_CONFIG.brand.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: AXIOM_CONFIG.metadata.locale,
      type: ogType,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: AXIOM_CONFIG.social.twitter.handle,
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

export function AxiomOrganizationJsonLd() {
  return (
    <JsonLd
      type="Organization"
      data={{
        name: AXIOM_CONFIG.brand.name,
        url: AXIOM_CONFIG.metadata.siteUrl,
        logo: `${AXIOM_CONFIG.metadata.siteUrl}/assets/brand/axiom-logo-dark.svg`,
        description: AXIOM_CONFIG.metadata.description,
        sameAs: [
          AXIOM_CONFIG.social.twitter.url,
          AXIOM_CONFIG.social.linkedin.url,
          AXIOM_CONFIG.social.github.url,
        ],
      }}
    />
  );
}
