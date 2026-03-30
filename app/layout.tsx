import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/src/lib/site';

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ngnhacks.ca'),
  title: {
    default: '48-Hour Online Hackathon for Ontario Students',
    template: '%s | NGN Hacks',
  },
  description:
    'NGN Hacks is a free, beginner-friendly 48-hour online hackathon for Ontario high school students. Build on Discord, submit on Devpost — April 24–26, 2026.',
  keywords: ['hackathon', 'Ontario', 'high school', 'online', 'Discord', 'Devpost', 'students'],
  openGraph: {
    title: 'NGN Hacks 2026 | 48-Hour Online Hackathon',
    description:
      'Free online hackathon for Ontario high school students. 48 hours on Discord & Devpost — no experience required.',
    type: 'website',
    url: 'https://ngnhacks.ca',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'NGN Hacks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NGN Hacks 2026 | 48-Hour Online Hackathon',
    description:
      'Free online hackathon for Ontario high school students. Discord + Devpost. April 24–26, 2026.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/owl-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/owl-icon.png" />
      </head>
      <body className={jetbrainsMono.className}>
        {children}
        <Analytics />
        </body>
    </html>
  );
}

