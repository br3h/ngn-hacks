export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  links?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Hanif Tajalli',
    role: 'Chair',
    bio: 'Leading the vision and execution of NGN Hacks.',
  },
  {
    name: 'Amirali Zhian',
    role: 'Chair',
    bio: 'Co-leading NGN Hacks to bring York Region students together.',
  },
  {
    name: 'Alex Chen',
    role: 'Partnerships Lead',
    bio: 'Building relationships with sponsors and community partners.',
  },
  {
    name: 'Sarah Kim',
    role: 'Operations Lead',
    bio: 'Ensuring smooth event logistics and participant experience.',
  },
  {
    name: 'Jordan Lee',
    role: 'Tech Lead',
    bio: 'Managing technical infrastructure and workshop content.',
  },
  {
    name: 'Maya Patel',
    role: 'Design Lead',
    bio: 'Creating visual identity and event branding.',
  },
  {
    name: 'Chris Zhang',
    role: 'Mentor Coordinator',
    bio: 'Recruiting and coordinating mentors and workshops.',
  },
];

