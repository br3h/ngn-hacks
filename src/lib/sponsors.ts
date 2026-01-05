export interface SponsorTier {
  name: string;
  benefits: string[];
}

export const SPONSOR_TIERS: SponsorTier[] = [
  {
    name: 'Community',
    benefits: [
      'Logo on website',
      'Social media mention',
      'Thank you in closing remarks',
    ],
  },
  {
    name: 'Silver',
    benefits: [
      'Logo on website and event materials',
      'Social media shoutouts',
      'Option to mentor/judge',
      'Thank you in closing remarks',
    ],
  },
  {
    name: 'Gold',
    benefits: [
      'Prominent logo placement',
      'Social media features',
      'Mentor/judge opportunity',
      'Table/booth (if venue allows)',
      'Closing remarks recognition',
    ],
  },
  {
    name: 'Title',
    benefits: [
      'Highest visibility branding',
      'Exclusive social media features',
      'Keynote opportunity',
      'Judging panel participation',
      'Premium table/booth space',
      'Prime closing remarks recognition',
    ],
  },
];

