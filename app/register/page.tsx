'use client';

import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import BackToTop from '@/src/components/BackToTop';
import Button from '@/src/components/Button';
import Card from '@/src/components/Card';
import AnimatedText from '@/src/components/AnimatedText';
import { SITE_CONFIG, CONTACT_SUBJECTS } from '@/src/lib/site';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Users, Briefcase, Mail, Instagram } from 'lucide-react';

export default function RegisterPage() {
  const [participantForm, setParticipantForm] = useState({
    fullName: '',
    email: '',
    school: '',
    grade: '',
    experienceLevel: '',
    teamSize: '1',
    teammates: '',
    dietaryRestrictions: '',
    website: '', // Honeypot
  });
  const [participantErrors, setParticipantErrors] = useState<Record<string, string>>({});
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    role: 'Mentor',
    background: '',
    availability: '',
    message: '',
  });
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'General',
    customSubject: '',
    message: '',
  });
  const [isSubmittingParticipant, setIsSubmittingParticipant] = useState(false);
  const [isSubmittingVolunteer, setIsSubmittingVolunteer] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    participant?: 'success' | 'error';
    volunteer?: 'success' | 'error';
    contact?: 'success' | 'error';
  }>({});

  const handleParticipantChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setParticipantForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (participantErrors[name]) {
      setParticipantErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleVolunteerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVolunteerForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateParticipantForm = (): boolean => {
    const errors: Record<string, string> = {};
    const required = ['fullName', 'email', 'school', 'grade', 'experienceLevel', 'teamSize'];
    
    required.forEach((field) => {
      if (!participantForm[field as keyof typeof participantForm]) {
        errors[field] = 'This field is required';
      }
    });

    // Email validation
    if (participantForm.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(participantForm.email)) {
      errors.email = 'Please enter a valid email address';
    }

    setParticipantErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleParticipantSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, treat as success but don't send
    if (participantForm.website) {
      setSubmitStatus({ ...submitStatus, participant: 'success' });
      setParticipantForm({
        fullName: '',
        email: '',
        school: '',
        grade: '',
        experienceLevel: '',
        teamSize: '1',
        teammates: '',
        dietaryRestrictions: '',
        website: '',
      });
      return;
    }

    // Validate required fields
    if (!validateParticipantForm()) {
      return;
    }

    setIsSubmittingParticipant(true);
    setSubmitStatus({ ...submitStatus, participant: undefined });

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;
      if (!webhookUrl) {
        throw new Error('Webhook URL not configured');
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          fullName: participantForm.fullName,
          email: participantForm.email,
          school: participantForm.school,
          grade: participantForm.grade,
          experienceLevel: participantForm.experienceLevel,
          teamSize: participantForm.teamSize,
          teammates: participantForm.teammates || '',
          dietaryRestrictions: participantForm.dietaryRestrictions || '',
        }),
      });

      if (response.ok) {
        setSubmitStatus({ ...submitStatus, participant: 'success' });
        setParticipantForm({
          fullName: '',
          email: '',
          school: '',
          grade: '',
          experienceLevel: '',
          teamSize: '1',
          teammates: '',
          dietaryRestrictions: '',
          website: '',
        });
      } else {
        setSubmitStatus({ ...submitStatus, participant: 'error' });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setSubmitStatus({ ...submitStatus, participant: 'error' });
    } finally {
      setIsSubmittingParticipant(false);
    }
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingVolunteer(true);
    setSubmitStatus({ ...submitStatus, volunteer: undefined });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: volunteerForm.name,
          email: volunteerForm.email,
          subject: `${volunteerForm.role} Application`,
          role: volunteerForm.role,
          background: volunteerForm.background,
          availability: volunteerForm.availability,
          message: volunteerForm.message || '',
        }),
      });

      if (response.ok) {
        setSubmitStatus({ ...submitStatus, volunteer: 'success' });
        setVolunteerForm({
          name: '',
          email: '',
          role: 'Mentor',
          background: '',
          availability: '',
          message: '',
        });
      } else {
        setSubmitStatus({ ...submitStatus, volunteer: 'error' });
      }
    } catch (error) {
      setSubmitStatus({ ...submitStatus, volunteer: 'error' });
    } finally {
      setIsSubmittingVolunteer(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    setSubmitStatus({ ...submitStatus, contact: undefined });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contactForm,
          subject: contactForm.subject === 'Custom' ? contactForm.customSubject : contactForm.subject,
        }),
      });

      if (response.ok) {
        setSubmitStatus({ ...submitStatus, contact: 'success' });
        setContactForm({ name: '', email: '', subject: 'General', customSubject: '', message: '' });
      } else {
        setSubmitStatus({ ...submitStatus, contact: 'error' });
      }
    } catch (error) {
      setSubmitStatus({ ...submitStatus, contact: 'error' });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 gradient-mesh pointer-events-none"></div>
      <div className="fixed inset-0 bg-pattern pointer-events-none"></div>
      <div className="fixed inset-0 code-grid pointer-events-none opacity-30"></div>
      
      <Navbar />

      {/* Header */}
      <section className="relative pt-32 pb-16">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/owl-icon.png"
                alt="NGN Hacks Owl"
                width={56}
                height={56}
                className="mr-3"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <AnimatedText 
              text="Register for Next Generation Hacks" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4"
              speed={50}
            />
            <p className="text-xl text-gray-400">
              Join York Region's premier high school hackathon
            </p>
          </div>
        </div>
      </section>

      {/* Participant Registration */}
      <section className="relative py-16">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 mb-8">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-white">Participant Registration</h2>
            </div>
            <p className="text-gray-400 mb-8">
              Register as a participant to build, learn, and showcase your project at Next Generation Hacks.
            </p>

            <form onSubmit={handleParticipantSubmit} className="space-y-6">
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={participantForm.website}
                onChange={handleParticipantChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={participantForm.fullName}
                    onChange={handleParticipantChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      participantErrors.fullName ? 'border-red-500' : 'border-white/10'
                    } rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    placeholder="Your full name"
                  />
                  {participantErrors.fullName && (
                    <p className="mt-1 text-sm text-red-400">{participantErrors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={participantForm.email}
                    onChange={handleParticipantChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      participantErrors.email ? 'border-red-500' : 'border-white/10'
                    } rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    placeholder="your@email.com"
                  />
                  {participantErrors.email && (
                    <p className="mt-1 text-sm text-red-400">{participantErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-300 mb-2">
                    School *
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    required
                    value={participantForm.school}
                    onChange={handleParticipantChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      participantErrors.school ? 'border-red-500' : 'border-white/10'
                    } rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                    placeholder="Your high school"
                  />
                  {participantErrors.school && (
                    <p className="mt-1 text-sm text-red-400">{participantErrors.school}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-300 mb-2">
                    Grade *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={participantForm.grade}
                    onChange={handleParticipantChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${
                      participantErrors.grade ? 'border-red-500' : 'border-white/10'
                    } rounded-xl text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  >
                    <option value="" className="bg-gray-900">Select grade</option>
                    <option value="9" className="bg-gray-900">Grade 9</option>
                    <option value="10" className="bg-gray-900">Grade 10</option>
                    <option value="11" className="bg-gray-900">Grade 11</option>
                    <option value="12" className="bg-gray-900">Grade 12</option>
                  </select>
                  {participantErrors.grade && (
                    <p className="mt-1 text-sm text-red-400">{participantErrors.grade}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-300 mb-2">
                  Experience Level *
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  required
                  value={participantForm.experienceLevel}
                  onChange={handleParticipantChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    participantErrors.experienceLevel ? 'border-red-500' : 'border-white/10'
                  } rounded-xl text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                >
                  <option value="" className="bg-gray-900">Select experience</option>
                  <option value="Beginner" className="bg-gray-900">Beginner</option>
                  <option value="Intermediate" className="bg-gray-900">Intermediate</option>
                  <option value="Advanced" className="bg-gray-900">Advanced</option>
                </select>
                {participantErrors.experienceLevel && (
                  <p className="mt-1 text-sm text-red-400">{participantErrors.experienceLevel}</p>
                )}
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300 mb-2">
                  Team Size *
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  required
                  value={participantForm.teamSize}
                  onChange={handleParticipantChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    participantErrors.teamSize ? 'border-red-500' : 'border-white/10'
                  } rounded-xl text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                >
                  <option value="1" className="bg-gray-900">Solo (1 person)</option>
                  <option value="2" className="bg-gray-900">2 people</option>
                  <option value="3" className="bg-gray-900">3 people</option>
                  <option value="4" className="bg-gray-900">4 people</option>
                </select>
                {participantErrors.teamSize && (
                  <p className="mt-1 text-sm text-red-400">{participantErrors.teamSize}</p>
                )}
              </div>

              <div>
                <label htmlFor="teammates" className="block text-sm font-medium text-gray-300 mb-2">
                  Teammates (if applicable)
                </label>
                <input
                  type="text"
                  id="teammates"
                  name="teammates"
                  value={participantForm.teammates}
                  onChange={handleParticipantChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Names and emails of teammates"
                />
              </div>

              <div>
                <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-300 mb-2">
                  Dietary Restrictions
                </label>
                <textarea
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  rows={3}
                  value={participantForm.dietaryRestrictions}
                  onChange={handleParticipantChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Any dietary restrictions or allergies"
                />
              </div>

              {submitStatus.participant === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 text-green-300 rounded-xl text-sm">
                  You're registered. We'll be in touch soon.
                </div>
              )}
              {submitStatus.participant === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl text-sm">
                  Something went wrong. Please try again.
                </div>
              )}

              <Button type="submit" disabled={isSubmittingParticipant} className="w-full">
                {isSubmittingParticipant ? 'Submitting...' : 'Register as Participant'}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Sponsor/Volunteer/Mentor Registration */}
      <section className="relative py-16">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-white">Get Involved</h2>
            </div>
            <p className="text-gray-400 mb-8">
              Want to sponsor, volunteer, or mentor at Next Generation Hacks? We'd love to have you!
            </p>

            <a
              href="https://forms.gle/qMXwUyFq3J15MrAZ9"
              target="_blank"
              rel="noreferrer noopener"
              className="block"
            >
              <Button className="w-full">
                Get Involved (Google Form)
              </Button>
            </a>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0">
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <a
                  href="mailto:info@ngnhacks.ca"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  info@ngnhacks.ca
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 text-primary mr-3" />
                <a
                  href="https://instagram.com/ngn.hacks"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  @ngn.hacks
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
