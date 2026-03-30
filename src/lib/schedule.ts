export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
}

/** High-level online event flow (all times ET). */
export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    time: 'Fri · 6:00 PM',
    title: 'Opening ceremony',
    description: 'Kickoff, rules, and beginner orientation — live on Discord',
  },
  {
    time: 'Fri evening',
    title: 'Design process workshop',
    description: 'Frame a real student problem and plan your build',
  },
  {
    time: 'Sat',
    title: 'Workshop day',
    description: 'Web dev, GitHub, hosting & no-code, AI tools, plus office hours',
  },
  {
    time: 'Sun',
    title: 'Final sprint & office hours',
    description: 'Last help before submissions close',
  },
  {
    time: 'Sun · 6:00 PM',
    title: 'Submission deadline',
    description: 'Upload your project on Devpost before the cutoff',
  },
  {
    time: 'After judging',
    title: 'Results & celebration',
    description: 'Winners announced after review — details shared in Discord',
  },
];
