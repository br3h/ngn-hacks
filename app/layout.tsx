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
  title: `${SITE_CONFIG.fullName} - York Region High School Hackathon`,
  description: `${SITE_CONFIG.fullName} is a York Region high school hackathon where 100+ students build real projects, learn fast, and present what they create.`,
  keywords: ['hackathon', 'York Region', 'high school', 'coding', 'programming', 'students'],
  openGraph: {
    title: `${SITE_CONFIG.fullName} - York Region High School Hackathon`,
    description: `${SITE_CONFIG.fullName} is a York Region high school hackathon where 100+ students build real projects.`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.fullName} - York Region High School Hackathon`,
    description: `${SITE_CONFIG.fullName} is a York Region high school hackathon where 100+ students build real projects.`,
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
      <body className={jetbrainsMono.className}>{children}</body>
    </html>
  );
}

