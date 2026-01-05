export const SITE_CONFIG = {
  name: 'NGN Hacks',
  fullName: 'Next Generation Hacks',
  tagline: 'York Region\'s student-led high school hackathon.',
  email: 'info@ngnhacks.ca',
  instagram: '@ngn.hacks',
  registrationUrl: '/register',
  applyUrl: 'https://forms.gle/qMXwUyFq3J15MrAZ9',
  date: '2026 (TBA)',
  location: 'York Region',
  expectedStudents: '100+',
  teamSize: '1-4',
  showAnnouncement: false, // Feature flag for announcement banner
  announcementText: '',
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Register', href: '/register' },
] as const;

export const QUICK_HIGHLIGHTS = [
  {
    title: 'Mentors + Workshops',
    description: 'Get help when you need it',
  },
  {
    title: 'Portfolio-ready project',
    description: 'Build something real to showcase',
  },
  {
    title: 'Awards + Showcase',
    description: 'Present and get recognized',
  },
] as const;

export const TRUST_CHIPS = [
  'York Region',
  'High School',
  '100+ Students',
  'Beginner-Friendly',
  'Teams 1–4',
] as const;

export const CONTACT_SUBJECTS = [
  'General',
  'Sponsorship',
  'Mentorship',
  'Volunteer',
  'Media/Partners',
] as const;

