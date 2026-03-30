import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-white mb-2">Terms of Participation</h1>
          <p className="text-gray-400 text-sm mb-12">Last Updated: February 2026</p>

          <div className="prose prose-invert prose-slate max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Eligibility & Participation</h2>
              <p>
                Next Generation Hacks (NGN Hacks) is a fully online event open to Ontario high school
                students in Grades 9–12. By registering and participating, you agree to these terms.
                Parents or guardians may need to consent for participants under the age of majority in
                Ontario.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Assumption of Risk</h2>
              <p>
                Participation in online activities (Discord, Devpost, video calls, workshops) involves
                usual risks of internet use and screen time. You participate voluntarily and assume
                responsibility for your own environment, equipment, and well-being while taking part.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Third-Party Platforms</h2>
              <p>
                The event uses third-party services (e.g. Discord, Devpost). Your use of those services
                is also governed by their respective terms and privacy policies. NGN Hacks is not
                responsible for outages, security incidents, or actions of those third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Release of Liability & Waiver</h2>
              <p>
                To the fullest extent permitted by law, you release NGN Hacks, its organizers,
                partners, sponsors, and affiliated individuals from any and all claims, damages, or
                liabilities arising from your participation, including but not limited to technical
                failures, data loss, or disputes with other participants. You waive any right to bring
                legal action against these parties in connection with the event, except where such
                waiver is prohibited by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Medical Emergency Authorization</h2>
              <p>
                In the event of a medical emergency, you authorize NGN Hacks and its representatives
                to obtain emergency medical care for you and, where appropriate, to share
                information with medical personnel. You are responsible for your own health
                insurance and costs of care.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Personal Property & Equipment</h2>
              <p>
                You are responsible for your own devices, accounts, and data. NGN Hacks is not liable
                for loss, theft, damage, or corruption of your hardware, software, or files.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Media Release</h2>
              <p>
                By participating, you grant NGN Hacks the right to use your name, likeness, voice,
                and project work in recordings, streams, screenshots, and other media for promotion,
                reporting, and archival purposes, in any medium, without compensation. If you do not
                wish to appear in promotional materials, please inform the organizers in writing before
                or during the event.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Code of Conduct & Removal</h2>
              <p>
                You agree to follow our code of conduct: treat others with respect, maintain a
                safe and inclusive environment, and refrain from harassment, discrimination, or
                destructive behavior. NGN Hacks reserves the right to remove any participant who
                violates these terms or whose conduct is disruptive or harmful. Removal may be
                immediate and without refund (where applicable).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Policy Changes</h2>
              <p>
                We may update these terms. Material changes will be reflected by an updated “Last
                updated” date. Continued participation after changes constitutes acceptance of the
                revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Governing Law</h2>
              <p>These terms are governed by the laws of Ontario and Canada.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
              <p>
                Questions about these terms:{' '}
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
