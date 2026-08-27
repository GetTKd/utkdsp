import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HeartHandshake,
  Sprout,
  GraduationCap,
  Home,
  Recycle,
  HandPlatter,
  Quote,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import PageHero from '@/components/PageHero';
import { IMAGES, CONTACT } from '@/data/chapter';

const SERVICE_HERO = 'https://images.hostinger.com/466f3899-b97c-46f3-a906-5db5ac2ebeba.png';

const INITIATIVES = [
  {
    icon: HandPlatter,
    title: 'Second Harvest Food Bank',
    text: 'Brothers sort, pack, and distribute meals for East Tennessee families facing food insecurity — our most consistent partnership.',
    impact: '12,000+ meals packed',
  },
  {
    icon: Recycle,
    title: 'River & Park Cleanups',
    text: 'Along the Tennessee River and in city parks, brothers clear litter and restore trails that keep Knoxville green.',
    impact: '30+ cleanup days',
  },
  {
    icon: GraduationCap,
    title: 'Youth Literacy & Mentorship',
    text: 'Reading sessions and mentorship at local elementary schools, helping young students build confidence in the classroom.',
    impact: '200+ students reached',
  },
  {
    icon: Home,
    title: 'Habitat for Humanity',
    text: 'Framing, roofing, and finishing homes alongside future homeowners — turning sweat equity into safe, affordable housing.',
    impact: '4 homes helped build',
  },
  {
    icon: Sprout,
    title: 'Campus & Community Drives',
    text: 'Clothing, food, and supply drives each semester that route student generosity directly to Knoxville nonprofits.',
    impact: '3,500+ items donated',
  },
  {
    icon: HeartHandshake,
    title: 'DSP National Philanthropy',
    text: 'Annual participation in the fraternity’s national service initiatives, connecting Alpha Zeta to chapters coast to coast.',
    impact: 'National partnership',
  },
];

const IMPACT_STATS = [
  { value: 2400, suffix: '+', label: 'Service hours logged this year' },
  { value: 18, suffix: '', label: 'Local organizations partnered with' },
  { value: 95, suffix: '%', label: 'Brothers who volunteer each semester' },
  { value: 6, suffix: '', label: 'Annual service events hosted' },
];

const GALLERY = [
  { src: SERVICE_HERO, alt: 'Brothers packing boxes at a Knoxville food bank', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.hostinger.com/295757a4-8070-4b9f-a5c8-f94f02daf732.png', alt: 'River and park cleanup along the Tennessee River', span: '' },
  { src: 'https://images.hostinger.com/93b08bfb-0ab6-44e4-8ade-bdff8be915c9.png', alt: 'Reading to elementary school students in Knoxville', span: '' },
  { src: 'https://images.hostinger.com/0cf16bd5-971e-426b-a02d-10fe1b3f443c.png', alt: 'Building a Habitat for Humanity house', span: '' },
  { src: 'https://images.hostinger.com/c5b0d303-055d-4408-9b68-f35cbc599ba2.png', alt: 'Sorting donated clothing at a community center', span: '' },
  { src: 'https://images.hostinger.com/82c2fb0f-09c9-45b9-9aa6-3ae6afdf7cf5.png', alt: 'Chapter group photo at a community service event', span: 'lg:col-span-2' },
];

const TESTIMONIALS = [
  {
    quote:
      'Service in DSP stopped feeling like an obligation after my first food bank shift. You look around and realize the people next to you are the same ones pushing you in class — and together you are doing something that actually matters for Knoxville.',
    name: 'Emma Carter',
    role: 'VP of Brotherhood · Marketing, Class of 2027',
  },
  {
    quote:
      'Our Habitat build day was the moment I understood what brotherhood really means. We showed up at 7 a.m., worked until sundown, and not one person complained. That is the kind of people this chapter attracts.',
    name: 'Daniel Kim',
    role: 'Finance, Class of 2027',
  },
  {
    quote:
      'Reading with third graders every week reminded me why I came to college in the first place — to build something bigger than myself. DSP gave me the structure and the people to actually follow through on that.',
    name: 'Maya Thompson',
    role: 'Management, Class of 2028',
  },
];

const GET_INVOLVED = [
  {
    title: 'Volunteer With Us',
    text: 'Prospective members and alumni are welcome at our open service events. Sign up to receive dates each semester.',
    cta: 'Email the Chapter',
    href: `mailto:${CONTACT.email}?subject=Community Service Opportunities`,
  },
  {
    title: 'Partner With Alpha Zeta',
    text: 'Knoxville nonprofits and campus organizations — we would love to support your mission with volunteers or a drive.',
    cta: 'Propose a Partnership',
    href: `mailto:${CONTACT.email}?subject=Community Partnership Inquiry`,
  },
  {
    title: 'Join the Chapter',
    text: 'Service is one of DSP’s five pillars. If giving back is part of why you came to Tennessee, recruitment is your way in.',
    cta: 'Explore Recruitment',
    href: '/recruitment',
  },
];

export default function ServicePage() {
  return (
    <>
      <Helmet>
        <title>Community Service & Philanthropy | DSP Alpha Zeta at UTK</title>
        <meta
          name="description"
          content="Delta Sigma Pi's Alpha Zeta Chapter gives back to Knoxville through food banks, river cleanups, Habitat for Humanity, youth literacy, and more — thousands of service hours each year."
        />
      </Helmet>

      <PageHero
        label="Community Service"
        title="Business With a Conscience."
        subtitle="Service is one of DSP’s five pillars. Every semester, Alpha Zeta brothers give thousands of hours back to the city that gives us a home."
        image={SERVICE_HERO}
      />

      {/* Mission overview */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="section-label">Our Service Mission</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-5xl">
                We Lead by Giving Back.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Delta Sigma Pi was founded on the belief that business professionals have a duty
                to the communities they serve. The Alpha Zeta Chapter lives that value in
                Knoxville — partnering with food banks, schools, and housing nonprofits to turn
                our skills, time, and energy into measurable good.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Service is not a side project for us. It is woven into pledging, into chapter
                meetings, and into the way brothers choose to spend their weekends. We measure our
                impact in hours, in meals packed, and in the relationships we build with the
                organizations doing this work year-round.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-vol" />
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
                  One of DSP’s five pillars
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Service Initiatives</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Where We Show Up.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Long-term partnerships and recurring events — not one-off photo opportunities.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {INITIATIVES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08} className="border-t-2 border-gold pt-6">
                <p.icon className="h-6 w-6 text-plum" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                <p className="mt-4 text-xs font-semibold tracking-[0.18em] uppercase text-vol">
                  {p.impact}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Community Impact</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Measured in Hours, Felt for Years.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="border-l-2 border-gold pl-6">
                <p className="font-display text-5xl font-medium text-cream md:text-6xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">In the Field</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Service, Not Selfies.
            </h2>
          </Reveal>

          <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <Reveal
                key={g.src}
                delay={(i % 4) * 0.06}
                className={`group overflow-hidden rounded-sm ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Brothers on Service</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Why It Matters to Us.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 0.08}
                className="flex flex-col rounded-sm border border-border bg-card p-8"
              >
                <Quote className="h-7 w-7 text-gold" strokeWidth={1.5} />
                <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                  “{t.quote}”
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-display text-lg font-medium text-foreground">{t.name}</p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Get involved */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Get Involved</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Be Part of the Mission.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {GET_INVOLVED.map((g, i) => (
              <Reveal
                key={g.title}
                delay={i * 0.08}
                className="flex flex-col rounded-sm border-t-2 border-gold bg-card p-8"
              >
                <h3 className="font-display text-2xl font-medium text-foreground">{g.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {g.text}
                </p>
                {g.href.startsWith('/') ? (
                  <Link to={g.href} className="cta-arrow mt-6">
                    {g.cta} <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </Link>
                ) : (
                  <a href={g.href} className="cta-arrow mt-6">
                    {g.cta} <ArrowRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="section-label">Join Us</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Give Back. Grow Forward.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              Service is built into every brother’s experience. If you want a chapter that takes
              giving back as seriously as it takes careers — recruitment is your way in.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/recruitment"
                className="rounded-sm bg-gold px-7 py-3.5 text-xs font-bold tracking-[0.2em] uppercase text-plum-deep transition-all duration-300 hover:bg-gold-light active:scale-[0.98]"
              >
                Explore Recruitment
              </Link>
              <Link
                to="/contact"
                className="cta-arrow-light"
              >
                Ask Us About Service <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
