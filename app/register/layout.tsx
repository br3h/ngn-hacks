import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Register for NGN Hacks 2026 — free 48-hour online hackathon for Ontario high school students. Discord + Devpost.',
  openGraph: {
    title: 'Register | NGN Hacks 2026',
    description:
      'Sign up for the online hackathon — participants, mentors, and volunteers welcome.',
    url: 'https://ngnhacks.ca/register',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NGN Hacks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Register | NGN Hacks 2026',
    description: 'Join the 48-hour online hackathon for Ontario students.',
    images: ['/og.png'],
  },
  alternates: { canonical: 'https://ngnhacks.ca/register' },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
