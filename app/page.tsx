'use client';

import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import BackToTop from '@/src/components/BackToTop';
import SectionHeader from '@/src/components/SectionHeader';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import Accordion from '@/src/components/Accordion';
import AnimatedText from '@/src/components/AnimatedText';
import {
  SITE_CONFIG,
} from '@/src/lib/site';
import { FAQ_ITEMS } from '@/src/lib/faq';
import Link from 'next/link';
import Image from 'next/image';
import {
  Calendar,
  MapPin,
  User,
  Users as TeamIcon,
  Code,
  Lightbulb,
  Trophy,
  Zap,
  ArrowRight,
  UtensilsCrossed,
  DollarSign,
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none"></div>
      <div className="fixed inset-0 bg-pattern pointer-events-none"></div>
      <div className="fixed inset-0 code-grid pointer-events-none opacity-30"></div>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 min-h-screen flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center mb-8 animate-float">
              <Image
                src="/owl-icon.png"
                alt="NGN Hacks Owl"
                width={64}
                height={64}
                className="mr-3"
              />
              <span className="text-2xl font-bold text-primary">∞</span>
            </div>
            
            <div className="mb-4">
            <AnimatedText 
              text="Next Generation Hacks" 
              className="text-2xl sm:text-3xl text-primary font-semibold mb-8 block"
              speed={70}
            />
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <AnimatedText 
                text="Unlimited ideas." 
                className="text-white block mb-2"
                speed={60}
              />
              <AnimatedText 
                text="Real projects." 
                className="text-primary block mb-2"
                speed={60}
                triggerOnScroll={false}
                delay={800}
              />
              <AnimatedText 
                text="One day." 
                className="text-white block"
                speed={60}
                triggerOnScroll={false}
                delay={1600}
              />
            </h1>
            
            <AnimatedText 
              text="York Region's premier high school hackathon. Build something real, learn fast, and join 100+ students creating the future." 
              className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed block"
              speed={15}
              triggerOnScroll={false}
              delay={2500}
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/register">
                <Button className="inline-flex items-center">
                  Register as Participant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card hover className="text-center border-0">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{SITE_CONFIG.date}</div>
                <div className="text-sm text-gray-400">Date</div>
              </Card>
              <Card hover className="text-center border-0">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-lg font-bold text-white mb-1">{SITE_CONFIG.location}</div>
                <div className="text-sm text-gray-400">Location</div>
              </Card>
              <Card hover className="text-center border-0">
                <User className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{SITE_CONFIG.expectedStudents}</div>
                <div className="text-sm text-gray-400">Students</div>
              </Card>
              <Card hover className="text-center border-0">
                <TeamIcon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{SITE_CONFIG.teamSize}</div>
                <div className="text-sm text-gray-400">Teams</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What is Next Generation Hacks?" />
          <div className="max-w-4xl mx-auto">
            <AnimatedText 
              text="A hackathon is a build sprint where you create a project in a short time. Next Generation Hacks is student-led, built for York Region high school students. Focus: learning-by-building, collaboration, and presenting." 
              className="text-xl text-gray-300 mb-12 text-center leading-relaxed block"
              speed={15}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Code,
                  title: 'Build',
                  description: 'Create real projects: apps, websites, games, AI tools, and more',
                },
                {
                  icon: Lightbulb,
                  title: 'Learn',
                  description: 'Get help from mentors and workshops when you need it',
                },
                {
                  icon: Trophy,
                  title: 'Showcase',
                  description: 'Demo your project and compete for awards',
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

      {/* Benefits Section */}
      <section className="py-24 relative">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Why Join Next Generation?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Zap, text: 'Build a portfolio project' },
              { icon: Code, text: 'Learn faster than a class' },
              { icon: TeamIcon, text: 'Meet driven students' },
              { icon: Lightbulb, text: 'Get mentors + workshops' },
              { icon: UtensilsCrossed, text: 'Free food and drinks' },
              { icon: DollarSign, text: 'Win prizes and awards' },
            ].map((benefit, index) => (
              <Card key={index} hover className="border-0 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-gray-200 font-medium">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="FAQ" />
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Register Section */}
      <section className="py-24 relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Register" />
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8">
              Sign up to participate in NGN Hacks.
            </p>
            <Link href="/register">
              <Button className="inline-flex items-center">
                Register Now
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
