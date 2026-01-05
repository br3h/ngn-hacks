export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
}

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    time: '9:00 AM',
    title: 'Check-in',
    description: 'Registration and welcome',
  },
  {
    time: '9:30 AM',
    title: 'Opening + Rules',
    description: 'Event kickoff and guidelines',
  },
  {
    time: '10:00 AM',
    title: 'Hacking starts',
    description: 'Time to build!',
  },
  {
    time: '12:30 PM',
    title: 'Lunch',
    description: 'Break and networking',
  },
  {
    time: '2:00 PM',
    title: 'Workshop block',
    description: 'Learn something new',
  },
  {
    time: '4:30 PM',
    title: 'Submissions due',
    description: 'Finalize your project',
  },
  {
    time: '5:00 PM',
    title: 'Demos',
    description: 'Present your work',
  },
  {
    time: '6:00 PM',
    title: 'Awards',
    description: 'Recognition and prizes',
  },
  {
    time: '6:30 PM',
    title: 'Wrap-up',
    description: 'Closing remarks',
  },
];

