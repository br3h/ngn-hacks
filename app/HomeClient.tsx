'use client';

import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import BackToTop from '@/src/components/BackToTop';
import SectionHeader from '@/src/components/SectionHeader';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Accordion from '@/src/components/Accordion';
import AnimatedText from '@/src/components/AnimatedText';
import { SITE_CONFIG } from '@/src/lib/site';
import { FAQ_ITEMS } from '@/src/lib/faq';
import { SCHEDULE_ITEMS } from '@/src/lib/schedule';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  Globe,
  Users,
  UsersRound,
  Code,
  Lightbulb,
  Trophy,
  Zap,
  ArrowRight,
  DollarSign,
  Clock,
  BookOpen,
  Monitor,
  MessageCircle,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
} from 'lucide-react';

const BUILD_IDEAS = [
  'Apps or websites',
  'Study or productivity tools',
  'AI-assisted tools',
  'Interactive digital prototypes',
  'Digital workflows or systems',
];

const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Register',
    text: 'Complete the intake form and join the event on Devpost.',
  },
  {
    step: '2',
    title: 'Join Discord + Devpost',
    text: 'Get announcements, workshops, support, and your submission space.',
  },
  {
    step: '3',
    title: 'Build your project',
    text: 'Work solo or with a team to solve a real student problem in 48 hours.',
  },
  {
    step: '4',
    title: 'Submit on Devpost',
    text: 'Upload your project before the Sunday deadline.',
  },
  {
    step: '5',
    title: 'Get judged + celebrate',
    text: 'Projects are reviewed; winners announced after the event.',
  },
];

const JUDGING_CRITERIA = [
  'Problem clarity',
  'Effective use of technology',
  'Usefulness & impact',
  'Execution',
  'Presentation',
];

const PRIZE_EXAMPLES = [
  'Best overall',
  'Most creative solution',
  'Best beginner project',
  'Best use of AI',
  'Best no-code project',
  'Most likely to be built',
];

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />
      <div className="fixed inset-0 bg-pattern pointer-events-none" />
      <div className="fixed inset-0 code-grid pointer-events-none opacity-30" />

      <Navbar />

      <section className="relative pt-32 pb-20 min-h-screen flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center mb-8 animate-float">
              <Image src="/owl-icon.png" alt="NGN Hacks Owl" width={64} height={64} className="mr-3" />
              <span className="text-2xl font-bold text-primary">∞</span>
            </div>

            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
              48-hour online hackathon · Ontario high school students
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              <AnimatedText text="NGN Hacks 2026" className="block" speed={55} />
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              A free 48-hour online hackathon for Ontario high school students.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Build a real solution to a real student problem — no coding experience required.
            </p>
            <p className="text-sm text-gray-500 mb-10">Hosted online through Discord and Devpost.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link href="/register">
                <Button className="inline-flex items-center">
                  Register free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button href="#event-details" variant="outline" className="inline-flex items-center w-full sm:w-auto justify-center">
                View event details
              </Button>
            </div>
            <p className="text-sm text-gray-500 mb-16">
              Open to Ontario high school students in Grades 9–12 · Free · Beginner-friendly
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              <Card hover className="text-center border-0">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-white mb-1 leading-tight">{SITE_CONFIG.dateShort}</div>
                <div className="text-sm text-gray-400">Dates</div>
              </Card>
              <Card hover className="text-center border-0">
                <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-white mb-1">{SITE_CONFIG.format}</div>
                <div className="text-sm text-gray-400">Format</div>
              </Card>
              <Card hover className="text-center border-0">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{SITE_CONFIG.expectedStudents}</div>
                <div className="text-sm text-gray-400">Students</div>
              </Card>
              <Card hover className="text-center border-0">
                <UsersRound className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{SITE_CONFIG.teamSize}</div>
                <div className="text-sm text-gray-400">Team size</div>
              </Card>
              <Card hover className="text-center border-0">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{SITE_CONFIG.cost}</div>
                <div className="text-sm text-gray-400">Cost</div>
              </Card>
              <Card hover className="text-center border-0">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{SITE_CONFIG.duration}</div>
                <div className="text-sm text-gray-400">Duration</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="event-details" className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Event details" />
          <div className="max-w-4xl mx-auto">
            <Card className="border-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Sparkles className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Event name</div>
                      <div className="text-lg font-semibold text-white">{SITE_CONFIG.eventName}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">When</div>
                      <div className="text-lg font-semibold text-white leading-snug">{SITE_CONFIG.dateRangeFull}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Duration</div>
                      <div className="text-lg font-semibold text-white">{SITE_CONFIG.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Monitor className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Format</div>
                      <div className="text-lg font-semibold text-white">{SITE_CONFIG.format}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Communication</div>
                      <div className="text-lg font-semibold text-white">{SITE_CONFIG.platformDiscord}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Layers className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Submissions</div>
                      <div className="text-lg font-semibold text-white">{SITE_CONFIG.platformDevpost}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Registration</div>
                      <div className="text-lg font-semibold text-white">{SITE_CONFIG.registrationNote}</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <UsersRound className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Eligibility & teams</div>
                      <div className="text-lg font-semibold text-white leading-snug">
                        {SITE_CONFIG.eligibility} · Teams of {SITE_CONFIG.teamSize} students
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <DollarSign className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Cost</div>
                      <div className="text-lg font-semibold text-white">Completely free</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What is NGN Hacks?" subtitle="Built by students, for students" />
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-10 text-center leading-relaxed">
              NGN Hacks is a beginner-first online hackathon where Ontario high school students build technology-based solutions to{' '}
              <span className="text-white font-medium">real student problems</span>. Work solo or in teams, use code or no-code tools, and submit on Devpost. No prior hackathon or coding experience is required — join from anywhere in Ontario, learn by building, and get support the whole weekend.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
              {[
                {
                  icon: Code,
                  title: 'Build',
                  description: 'Ship a project in 48 hours — app, site, workflow, or prototype',
                },
                {
                  icon: Lightbulb,
                  title: 'Learn',
                  description: 'Workshops, Discord mentors, and resources for every skill level',
                },
                {
                  icon: Trophy,
                  title: 'Showcase',
                  description: 'Present on Devpost and compete for category awards',
                },
              ].map((benefit, index) => (
                <Card key={index} hover className="text-center border-0">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="build" className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What you can build" />
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Pick a problem students actually face — then prototype or build your fix. Advanced coding is{' '}
            <span className="text-white">not</span> required. A strong Figma prototype, no-code site, workflow, or clear concept demo is completely valid.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {BUILD_IDEAS.map((label) => (
              <Card key={label} hover className="border-0 py-5 text-center">
                <p className="text-gray-200 font-medium">{label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="How it works" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {HOW_IT_WORKS.map((item) => (
              <Card key={item.step} hover className="border-0 h-full">
                <div className="text-primary font-mono text-sm mb-2">Step {item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workshops" className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Workshops + support" subtitle="Learn while you build" />
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            Mentors and helpers on Discord · resources posted during the event · friendly to first-time hackers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            {SITE_CONFIG.workshops.map((w, i) => (
              <Card key={i} hover className="border-0 flex items-center gap-4">
                <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-200">{w}</span>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Zap, text: 'Beginner-friendly pace — ask questions in Discord' },
              { icon: MessageCircle, text: 'Office hours & open Q&A during the weekend' },
              { icon: Sparkles, text: 'Room to experiment with AI and no-code tools thoughtfully' },
              { icon: Globe, text: 'Join from anywhere in Ontario — all you need is internet' },
            ].map((row, i) => (
              <Card key={i} hover className="border-0 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <row.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-gray-200 font-medium">{row.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="judging" className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Judging & prizes" />
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white text-center mb-6">Judging criteria</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {JUDGING_CRITERIA.map((c) => (
                <Card key={c} hover className="border-0 text-center py-5">
                  <p className="text-gray-200 font-medium">{c}</p>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white text-center mb-6">Prize categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {PRIZE_EXAMPLES.map((p) => (
                <Card key={p} hover className="border-0 flex items-center gap-3 py-4">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300">{p}</span>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Weekend schedule" subtitle="Online · All times Eastern (ET)" />
          <div className="max-w-3xl mx-auto space-y-6">
            {SCHEDULE_ITEMS.map((item, i) => (
              <Card key={i} className="border-0 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="text-primary font-mono text-sm sm:w-36 flex-shrink-0">{item.time}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  {item.description && <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="FAQ" />
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="py-24 relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Register for NGN Hacks 2026" />
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-4">
              Join the 48-hour online hackathon — free to register, no experience needed.
            </p>
            <p className="text-gray-500 mb-8 text-sm">Open to Ontario high school students in Grades 9–12.</p>
            <Link href="/register">
              <Button className="inline-flex items-center">
                Sign up free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
