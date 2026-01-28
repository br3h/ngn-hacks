import HomeClient from './HomeClient';

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'NGN Hacks',
  startDate: '2026-04-23T09:00:00-04:00',
  endDate: '2026-04-23T21:00:00-04:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Aurora Public Library, Aurora, Ontario, Canada',
  },
  description:
    'Free one-day hackathon for York Region high school students. Team up, build with tech, and present.',
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
