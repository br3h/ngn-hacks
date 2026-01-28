import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Next Generation Hacks (NGN Hacks). How we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy | NGN Hacks',
    description: 'Privacy policy for Next Generation Hacks. How we collect, use, and protect your data.',
    url: 'https://ngnhacks.ca/privacy',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NGN Hacks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | NGN Hacks',
    description: 'Privacy policy for Next Generation Hacks.',
    images: ['/og.png'],
  },
  alternates: { canonical: 'https://ngnhacks.ca/privacy' },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
