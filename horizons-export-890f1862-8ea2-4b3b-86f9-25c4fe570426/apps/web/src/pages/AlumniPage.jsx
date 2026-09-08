import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import { IMAGES, CONTACT } from '@/data/chapter';

const INVOLVEMENT = [
  {
    title: 'Share Your Experience',
    text: 'Return to chapter for a panel, professional event, or conversation with current brothers.',
  },
  {
    title: 'Connect With Brothers',
    text: 'Offer career advice, answer questions, and help brothers navigate internships, interviews, and life after UT.',
  },
  {
    title: 'Stay Part of Alpha Zeta',
    text: 'Come back for chapter events, reconnect with brothers, and stay involved in the community beyond graduation.',
  },
];

export default function AlumniPage() {
  return (
    <>
      <Helmet>
        <title>Alumni & Corporate Partners | DSP Alpha Zeta at UTK</title>
        <meta
          name="description"
          content="Graduation doesn't mean leaving Alpha Zeta behind. Learn how alumni stay connected to the chapter and current brothers."
        />
      </Helmet>

      <PageHero
        label="Alumni & Partners"
        title="Four Years in the Chapter. A Lifetime in the Network."
        subtitle="Graduation doesn't mean leaving Alpha Zeta behind. Our alumni stay connected to the chapter, share their experiences, and help current brothers prepare for what's next."
        image="/skyclip.png"
      />

      {/* Alumni connection */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="section-label">Beyond Graduation</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Brotherhood Doesn't End at Graduation.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Alpha Zeta works to keep alumni connected long after their time at UT. Throughout the year, we create opportunities for alumni to return to the chapter, meet current brothers, share career advice, and stay involved in the brotherhood they helped build.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-sm">
              <img
                src="/grad.JPEG"
                alt="Alpha Zeta brothers celebrating graduation"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Alumni panel */}
      <section className="border-t border-border bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] items-center gap-14 px-5 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src="/alumni.JPEG"
                alt="Alpha Zeta alumni panel"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="section-label">Alumni Panel</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Advice From Brothers Who've Been There.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Last semester, Alpha Zeta welcomed alumni back for an alumni panel where current brothers had the opportunity to hear about their experiences after UT, career paths, and lessons they've learned along the way. Brothers were able to ask questions, hear honest advice, and connect with alumni across different stages of their careers.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Events like our alumni panel give current brothers a chance to learn from people who were once in their shoes while giving alumni a way to stay connected to Alpha Zeta.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Staying involved */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <p className="section-label">Stay Connected</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              There's Always a Way Back.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {INVOLVEMENT.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08} className="border-t-2 border-gold pt-6">
                <h3 className="font-display text-2xl font-medium text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni CTA */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
          <Reveal>
            <p className="section-label">Alpha Zeta Alumni</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Once a Brother, Always a Brother.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75">
              Whether you graduated last year or decades ago, we'd love to keep you connected to Alpha Zeta.
            </p>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-sm bg-gold px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-plum-deep transition-colors hover:bg-cream"
            >
              Connect With Us <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
