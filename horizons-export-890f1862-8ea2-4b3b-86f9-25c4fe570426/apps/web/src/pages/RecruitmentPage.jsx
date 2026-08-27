import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, MapPin, Shirt } from 'lucide-react';
import Reveal from '@/components/Reveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IMAGES, RECRUITMENT_EVENTS, FAQS, CONTACT } from '@/data/chapter';

const WHY = [
  { image: IMAGES.networking, title: 'Build Your Career', text: 'Internship pipelines, resume workshops, and interview prep that turn applications into offers.' },
  { image: IMAGES.leadership, title: 'Become a Leader', text: 'Lead committees, run events, and hold real responsibility from your first semester.' },
  { image: IMAGES.brotherhood, title: 'Find Your Community', text: 'A co-ed brotherhood of driven students who make a big campus feel like home.' },
  { image: IMAGES.speaker, title: 'Create Your Network', text: '300,000+ DSP alumni worldwide — starting with the brothers in the room beside you.' },
];

const STEPS = [
  { n: '01', title: 'Learn', text: 'Come to Info Night and hear what DSP is really about — no pressure, no commitment.' },
  { n: '02', title: 'Connect', text: 'Meet brothers at open events and coffee chats. Ask anything. Be yourself.' },
  { n: '03', title: 'Apply', text: 'Submit the short interest form so we can get to know you and keep you updated.' },
  { n: '04', title: 'Interview', text: 'A relaxed conversation with chapter leadership about your goals and what you are looking for.' },
  { n: '05', title: 'Find Your Place', text: 'Receive a bid, join a pledge class, and start the semester that changes your college experience.' },
];

export default function RecruitmentPage() {
  return (
    <>
      <Helmet>
        <title>Recruitment — Join DSP | Alpha Zeta Chapter at UTK</title>
        <meta
          name="description"
          content="Rush Delta Sigma Pi at the University of Tennessee, Knoxville. See how recruitment works, the Fall 2026 event schedule, eligibility, FAQs, and how to apply."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative flex min-h-[85dvh] items-center overflow-hidden">
        <img
          src={IMAGES.recruitment}
          alt="Students connecting at a DSP recruitment event on the UTK campus"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-plum-deep/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-transparent to-plum-deep/40" />
        <div className="relative mx-auto w-full max-w-[90rem] px-5 md:px-10 pt-28 pb-16">
          <Reveal className="max-w-3xl">
            <p className="section-label">Recruitment</p>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] text-cream md:text-7xl">
              Your Next Chapter Starts Here.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
              Recruitment is a two-way conversation — you get to know us, we get to know you. No
              experience required. Every major welcome.
            </p>
            <p className="mt-6 inline-block border-b-2 border-vol pb-1 text-xs font-semibold tracking-[0.25em] uppercase text-cream/85">
              Fall 2026 Recruitment
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-sm bg-gold px-8 py-4 text-center text-xs font-bold tracking-[0.2em] uppercase text-plum-deep transition-all duration-300 hover:bg-gold-light active:scale-[0.98]"
              >
                Apply / Interest Form
              </Link>
              <a
                href="#schedule"
                className="rounded-sm border border-cream/50 px-8 py-4 text-center text-xs font-bold tracking-[0.2em] uppercase text-cream transition-all duration-300 hover:border-gold hover:text-gold active:scale-[0.98]"
              >
                View Schedule
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why DSP */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Why DSP?</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Four Reasons. One Decision.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.07}>
                <div className="group">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={w.image}
                      alt={w.title}
                      loading="lazy"
                      className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-foreground">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How recruitment works */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">How Recruitment Works</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Five Steps. Two Weeks.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="relative border-t border-plum-light pt-6">
                <p className="font-display text-4xl font-medium text-gold">{s.n}</p>
                <h3 className="mt-3 text-sm font-bold tracking-[0.15em] uppercase text-cream">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Recruitment Schedule</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-6xl">
                Fall 2026 Events.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              All events are open to every UTK student unless marked invite-only. Dates subject to
              change — follow @utkdsp for updates.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RECRUITMENT_EVENTS.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) * 0.07}>
                <div className="flex h-full flex-col rounded-sm border border-border bg-card p-7 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-plum/5">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-dark">
                    {e.date}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium text-foreground">{e.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {e.description}
                  </p>
                  <div className="mt-5 space-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-plum" strokeWidth={2} /> {e.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5 text-plum" strokeWidth={2} /> {e.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <Shirt className="h-3.5 w-3.5 text-plum" strokeWidth={2} /> {e.attire}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional info */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 md:px-10 lg:grid-cols-3">
          {[
            {
              title: 'Eligibility',
              items: ['Enrolled at UTK (any major, any year)', 'Interest in business and leadership', 'Able to attend at least two open events', 'Good academic standing'],
            },
            {
              title: 'What We Look For',
              items: ['Motivation and follow-through', 'Genuine curiosity about business', 'People who elevate the room', 'Commitment to the community'],
            },
            {
              title: 'What to Wear',
              items: ['Open events: business casual', 'Panel & interviews: business professional', 'Socials: come as you are', 'When in doubt — ask us'],
            },
          ].map((col, i) => (
            <Reveal key={col.title} delay={i * 0.08}>
              <h3 className="border-b-2 border-gold pb-4 font-display text-2xl font-medium text-foreground">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal className="text-center">
            <p className="section-label">Questions, Answered</p>
            <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-5xl">
              Recruitment FAQ.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-plum hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 text-center text-sm text-muted-foreground">
            Still curious? Email{' '}
            <a href={`mailto:${CONTACT.recruitment.email}`} className="font-semibold text-plum underline decoration-gold underline-offset-4 hover:text-gold-dark">
              {CONTACT.recruitment.email}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-plum py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.3em] uppercase text-gold">
              <CalendarDays className="h-4 w-4" strokeWidth={1.75} /> Fall 2026
            </p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Ready to Take the Next Step?
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="w-full rounded-sm bg-gold px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-plum-deep transition-all duration-300 hover:bg-gold-light active:scale-[0.98] sm:w-auto"
              >
                Apply Now
              </Link>
              <a
                href={`mailto:${CONTACT.recruitment.email}`}
                className="w-full rounded-sm border border-cream/50 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-cream transition-all duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
              >
                Contact Recruitment
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
