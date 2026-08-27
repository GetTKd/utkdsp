import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { CONTACT } from '@/data/chapter';

const NAV = [
  { to: '/about', label: 'About the Chapter' },
  { to: '/brothers', label: 'Our Brothers' },
  { to: '/professional', label: 'Professional Development' },
  { to: '/service', label: 'Community Service' },
  { to: '/recruitment', label: 'Recruitment' },
  { to: '/alumni', label: 'Alumni & Partners' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-plum-deep text-cream">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-4xl font-semibold text-gold">ΔΣΠ</span>
            <p className="mt-4 text-sm font-semibold tracking-[0.2em] uppercase">
              Delta Sigma Pi
            </p>
            <p className="mt-1 text-xs tracking-[0.18em] uppercase text-cream/60">
              Alpha Zeta Chapter
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-cream/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              Haslam College of Business
              <br />
              University of Tennessee, Knoxville
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Navigate</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-cream/75 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Recruitment</p>
            <p className="mt-5 text-sm leading-relaxed text-cream/75">
              Interested in joining? Recruitment opens at the start of each fall and spring
              semester.
            </p>
            <Link
              to="/recruitment"
              className="mt-5 inline-block rounded-sm bg-gold px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase text-plum-deep transition-colors hover:bg-gold-light"
            >
              Explore Recruitment
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">Connect</p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-5 flex items-center gap-2 text-sm text-cream/75 transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" strokeWidth={1.75} />
              {CONTACT.email}
            </a>
            <div className="mt-5 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-plum-light text-cream/80 transition-all hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-plum-light text-cream/80 transition-all hover:border-gold hover:text-gold"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-plum-light/50 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Delta Sigma Pi — Alpha Zeta Chapter. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-px w-8 bg-vol" />
            Rocky Top, Knoxville, Tennessee
          </p>
        </div>
      </div>
    </footer>
  );
}
