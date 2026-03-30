export const SITE_CONFIG = {
  name: 'NGN Hacks',
  fullName: 'Next Generation Hacks',
  tagline: 'Ontario’s student-led online hackathon for high school students.',
  email: 'info@ngnhacks.ca',
  instagram: '@ngn.hacks',
  registrationUrl: '/register',
  applyUrl: 'https://forms.gle/qMXwUyFq3J15MrAZ9',
  eventName: 'NGN Hacks 2026',
  dateShort: 'April 24–26',
  dateRangeLabel: 'Fri Apr 24, 6:00 PM ET → Sun Apr 26, 6:00 PM ET',
  dateRangeFull:
    'Friday, April 24, 2026 at 6:00 PM ET → Sunday, April 26, 2026 at 6:00 PM ET',
  format: 'Fully Online',
  platformShort: 'Discord + Devpost',
  platformDiscord: 'Discord',
  platformDevpost: 'Devpost',
  duration: '48 hours',
  cost: 'Free',
  expectedStudents: '50–100',
  teamSize: '1–4',
  eligibility: 'Ontario high school students (Grades 9–12)',
  registrationNote: 'Google Form + Devpost',
  workshops: [
    'Design process',
    'Web development basics',
    'Introduction to GitHub',
    'Website hosting & no-code tools',
    'Building with AI tools',
    'Office hours & open Q&A',
  ],
  showAnnouncement: false,
  announcementText: '',
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Build', href: '#build' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Register', href: '/register' },
] as const;

export const QUICK_HIGHLIGHTS = [
  {
    title: 'Workshops + mentors',
    description: 'Live sessions and Discord support while you build',
  },
  {
    title: 'Portfolio-ready project',
    description: 'Ship something real in 48 hours',
  },
  {
    title: 'Judging + prizes',
    description: 'Present on Devpost and celebrate winners',
  },
] as const;

export const TRUST_CHIPS = [
  'Ontario',
  'Grades 9–12',
  'Fully online',
  'Beginner-friendly',
  'Teams 1–4',
] as const;

export const CONTACT_SUBJECTS = [
  'General',
  'Sponsorship',
  'Mentorship',
  'Volunteer',
  'Media/Partners',
] as const;
