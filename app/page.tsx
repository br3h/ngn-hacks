import HomeClient from './HomeClient';

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'NGN Hacks 2026',
  startDate: '2026-04-24T18:00:00-04:00',
  endDate: '2026-04-26T18:00:00-04:00',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'VirtualLocation',
    url: 'https://ngnhacks.ca/register',
    name: 'Online — Discord & Devpost',
  },
  description:
    'Free 48-hour online hackathon for Ontario high school students. Team up, build with tech, and submit on Devpost.',
  organizer: { '@type': 'Organization', name: 'NGN Hacks' },
  image: 'https://ngnhacks.ca/og.png',
  url: 'https://ngnhacks.ca/register',
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
