'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS } from '@/src/lib/site';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-white/5 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/owl-icon.png"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    // Fallback to original logo if owl icon doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = '/ngnhacks.png';
                  }}
                />
              </div>
              <span className="font-bold text-white text-xl text-primary">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm mb-6 text-gray-400">{SITE_CONFIG.tagline}</p>
            <div className="flex items-center space-x-4 flex-wrap">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <a
                href="https://www.instagram.com/ngn.hacks/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@ngn.hacks</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE_CONFIG.registrationUrl}
                  onClick={(e) => handleNavClick(e, SITE_CONFIG.registrationUrl)}
                  className="text-sm hover:text-white transition-colors"
                >
                  Register
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Join the Team
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

