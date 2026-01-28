import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-950 relative">
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      <div className="fixed inset-0 bg-pattern pointer-events-none" />
      <Navbar />

      <article className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-block text-primary hover:underline text-sm mb-8"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mb-12">Last Updated: February 2026</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Data We Collect</h2>
              <p>
                We collect personal data you provide when registering or contacting us: name, email,
                school, grade, experience level, team details, dietary restrictions, and any message
                content. We may also collect technical data such as IP address, browser type, and
                pages visited when you use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Purpose of Collection</h2>
              <p>
                We use your data to run the hackathon (registration, check-in, team coordination),
                communicate about the event, accommodate dietary needs, improve our services, and
                respond to inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">No Sale of Data</h2>
              <p>
                We do not sell, rent, or trade your personal data to third parties for marketing or
                commercial purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Storage & Security</h2>
              <p>
                We store data using providers that implement industry-standard security measures.
                We do not guarantee that transmission or storage is completely secure; you provide
                data at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Retention</h2>
              <p>
                We retain registration and contact data for as long as needed to run the event and
                for a reasonable period afterward for records, unless you request deletion or we are
                required to keep it by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Third-Party Links</h2>
              <p>
                Our site may link to external sites (e.g. registration forms, social media). We are
                not responsible for the privacy practices of those sites. Please review their
                policies before sharing information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Policy Changes</h2>
              <p>
                We may update this policy from time to time. Material changes will be reflected by
                an updated “Last updated” date. Continued use of the site or participation after
                changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Governing Law</h2>
              <p>This policy is governed by the laws of Ontario and Canada.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                Questions about this policy or your data:{' '}
                <a
                  href="mailto:info@ngnhacks.ca"
                  className="text-primary hover:underline"
                >
                  info@ngnhacks.ca
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
