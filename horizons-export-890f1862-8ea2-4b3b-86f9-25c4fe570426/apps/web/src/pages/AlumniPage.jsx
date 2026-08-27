import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Handshake, GraduationCap, Globe, Mic } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import MemberCard from '@/components/MemberCard';
import { IMAGES, ALUMNI, EMPLOYERS, CONTACT } from '@/data/chapter';

const PARTNERSHIP = [
  { icon: Mic, title: 'Speak to the Chapter', text: 'Share your career story at a professional meeting or speaker series.' },
  { icon: Handshake, title: 'Recruit Our Brothers', text: 'Meet 87 motivated, pre-professional students before they hit the open market.' },
  { icon: GraduationCap, title: 'Mentor the Next Class', text: 'Pair with a brother for a semester of guidance, mock interviews, and advice.' },
];


export default function AlumniPage() {
  return (
    <>
      <Helmet>
        <title>Alumni & Corporate Partners | DSP Alpha Zeta at UTK</title>
        <meta
          name="description"
          content="The Alpha Zeta network lasts a lifetime. Meet our alumni, see where they work, and learn how companies and graduates can partner with Delta Sigma Pi at UTK."
        />
      </Helmet>

      <PageHero
        label="Alumni & Partners"
        title="Four Years in the Chapter. A Lifetime in the Network."
        subtitle="Alpha Zeta alumni lead teams across the country — and keep the door open for the brothers behind them."
        image={IMAGES.knoxville}
      />

      {/* Network intro */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 md:px-10 lg:grid-cols-2">
          <Reveal>
            <p className="section-label">The Lifelong Network</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-foreground md:text-5xl">
              300,000+ brothers. One phone call away.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Delta Sigma Pi does not end at graduation. Our alumni hire brothers, mentor pledge
              classes, return for homecoming, and answer the email a nervous junior sends before
              their first big interview.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="grid content-center gap-8">
            {[
              { icon: Globe, stat: '350+', text: 'Alpha Zeta alumni across finance, consulting, tech, and entrepreneurship' },
              { icon: GraduationCap, stat: '40+', text: 'Companies that have hired brothers in the last five years' },
              { icon: Handshake, stat: '12', text: 'Corporate partners engaging with the chapter each year' },
            ].map((s) => (
              <div key={s.text} className="flex items-start gap-5 border-l-2 border-gold pl-6">
                <s.icon className="mt-1 h-5 w-5 shrink-0 text-plum" strokeWidth={1.5} />
                <div>
                  <p className="font-display text-3xl font-medium text-plum">{s.stat}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Alumni spotlights */}
      <section className="border-t border-border bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Alumni Spotlights</p>
            <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-6xl">
              Where They Are Now.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {ALUMNI.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.08}>
                <MemberCard
                  member={{
                    ...a,
                    major: `Class of ${a.year.replace("'", '20')}`,
                    year: a.company,
                    role: a.position,
                  }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner grid */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Corporate Partners</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Companies That Invest in Alpha Zeta.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-plum-light/40 sm:grid-cols-3 lg:grid-cols-4">
            {EMPLOYERS.map((e) => (
              <div
                key={e}
                className="flex h-24 items-center justify-center bg-plum-deep px-4 transition-colors hover:bg-plum"
              >
                <p className="text-center font-display text-lg font-medium text-cream/70">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with us */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Get Involved</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Partner With DSP.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {PARTNERSHIP.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="border-t-2 border-gold pt-6">
                <p.icon className="h-6 w-6 text-plum" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <a href={`mailto:${CONTACT.email}`} className="cta-arrow">
              Partner With DSP <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
