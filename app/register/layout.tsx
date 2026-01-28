import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register for Next Generation Hacks — York Region high school hackathon. Sign up as a participant or get involved as a mentor or volunteer.',
  openGraph: {
    title: 'Register | NGN Hacks',
    description: 'Register for Next Generation Hacks — York Region high school hackathon. Sign up as a participant or get involved.',
    url: 'https://ngnhacks.ca/register',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NGN Hacks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register | NGN Hacks',
    description: 'Register for Next Generation Hacks — York Region high school hackathon.',
    images: ['/og.png'],
  },
  alternates: { canonical: 'https://ngnhacks.ca/register' },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
