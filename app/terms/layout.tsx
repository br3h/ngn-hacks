import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Participation',
  description:
    'Terms of participation for Next Generation Hacks (NGN Hacks). Eligibility, liability, and participation rules.',
  openGraph: {
    title: 'Terms of Participation | NGN Hacks',
    description: 'Terms of participation for Next Generation Hacks. Eligibility, liability, and rules.',
    url: 'https://ngnhacks.ca/terms',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NGN Hacks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Participation | NGN Hacks',
    description: 'Terms of participation for Next Generation Hacks.',
    images: ['/og.png'],
  },
  alternates: { canonical: 'https://ngnhacks.ca/terms' },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
