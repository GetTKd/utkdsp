import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import MemberCard from '@/components/MemberCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { IMAGES, STATS, PILLARS, MEMBERS, CONTACT } from '@/data/chapter';

const HOME_EMPLOYERS = [
  'PepsiCo',
  'PepsiCo',
  'Ross Stores Inc.',
  'KPMG',
  'Michelin',
  'Stryker',
  'Transcard',
  'Capital One',
  'Big Frey',
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Delta Sigma Pi — Alpha Zeta Chapter | University of Tennessee, Knoxville</title>
        <meta
          name="description"
          content="Delta Sigma Pi's Alpha Zeta Chapter at UTK develops principled business leaders through professional development, leadership, scholarship, service, and genuine brotherhood."
        />
      </Helmet>

      {/* 1. HERO */}
      <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="The brothers of Delta Sigma Pi Alpha Zeta on the steps of a University of Tennessee building"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-plum-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-transparent to-plum-deep/40" />
        <div className="relative mx-auto max-w-7xl -translate-y-12 px-5 text-center md:-translate-y-20">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold">
              Delta Sigma Pi / Alpha Zeta Chapter
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.02] text-cream md:text-7xl lg:text-8xl">
              Building Business Leaders.
Creating Lifelong Brotherhood.
          
              <br />
              
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
              Developing principled business leaders and lifelong connections at the University of
              Tennessee, Knoxville.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/about"
                className="w-full rounded-sm bg-gold px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-plum-deep transition-all duration-300 hover:bg-gold-light active:scale-[0.98] sm:w-auto"
              >
                Explore Our Chapter
              </Link>
              <Link
                to="/recruitment"
                className="w-full rounded-sm border border-cream/50 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-cream transition-all duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
              >
                Recruitment
              </Link>
            </div>
            <p className="mt-12 flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-cream/60">
              <span className="inline-block h-px w-10 bg-vol" />
              University of Tennessee, Knoxville
              <span className="inline-block h-px w-10 bg-vol" />
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="bg-background py-24 md:py-36">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <p className="section-label">Who We Are</p>
            <h2 className="mt-6 font-display text-3xl font-medium leading-[1.2] text-foreground md:text-5xl">
              Delta Sigma Pi at Tennessee is where driven students become{' '}
              <em className="text-plum">principled business leaders</em> through professional
              development, leadership, scholarship, and service, bound together by a brotherhood
              that lasts long after graduation.
            </h2>
            <Link to="/about" className="cta-arrow mt-10">
              Discover Our Story <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 3. BY THE NUMBERS */}
      <section className="border-y border-border bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal>
            <p className="section-label text-center">By the Numbers</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 place-items-center md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="w-full text-center">
                <p className="font-display text-5xl font-medium text-plum md:text-6xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE DSP EXPERIENCE */}
      <section className="bg-background py-24 md:py-36">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">The DSP Experience</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-6xl">
                Our Pillars...
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Whether it's a professional event, service, or a social, our five core values shape everything we do as a chapter.
            </p>
          </Reveal>
          <Accordion type="single" collapsible className="mt-14 space-y-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <AccordionItem value={p.title} classliName="overflow-hidden rounded-sm border border-border bg-card">
                  <AccordionTrigger className="px-5 py-5 text-left text-foreground hover:no-underline md:px-6">
                    <div className="flex items-center justify-between gap-4 w-full">
                      <span className="font-display text-2xl font-medium text-foreground md:text-3xl">
                        {p.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-6 md:px-6">
                    <div className="grid items-center gap-5 md:grid-cols-[1.05fr_1.15fr]">
                      <div className="mx-auto w-full max-w-[54%] overflow-hidden rounded-sm border border-border md:max-w-[58%]">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="aspect-[3/4] w-full object-cover"
                        />
                      </div>
                      <div className="rounded-sm border border-border bg-cream/60 p-5">
                        <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 5. MEET OUR BROTHERS */}
      <section className="bg-background py-24 md:py-36">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">The People Behind DSP</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-6xl">
                Meet Our Executive Board.
              </h2>
            </div>
            <Link to="/brothers" className="cta-arrow">
              Meet the Chapter <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-6">
            {MEMBERS.slice(0, 5).map((m, i) => (
              <Reveal
                key={m.name}
                delay={(i % 5) * 0.07}
                className={
                  i < 3
                    ? 'lg:col-span-2'
                    : i === 3
                      ? 'lg:col-start-2 lg:col-span-2'
                      : 'lg:col-start-4 lg:col-span-2'
                }
              >
                <MemberCard member={m} nameClassName="text-xl" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROFESSIONAL DEVELOPMENT */}
      <section className="bg-plum-deep py-24 md:py-36">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="section-label">Beyond the Classroom</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
                From Rocky Top to What's Next.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75">
                Professionalism is at the heart of Delta Sigma Pi. Through networking, leadership, and real 
                world experiences, our brothers build the skills and confidence to succeed in their careers and represent themselves with purpose.
              </p>
              <Link to="/professional" className="cta-arrow-light mt-8">
                Explore Career Outcomes <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-sm">
                <img
                  src="/Screenshot 2026-09-07 at 10.26.55 PM.png"
                  alt="A corporate speaker addresses DSP brothers in a university auditorium"
                  loading="lazy"
                  style={{ objectPosition: '78% center' }}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-6">
                {HOME_EMPLOYERS.map((e) => (
                  <p
                    key={e}
                    className="text-center text-xs font-semibold tracking-[0.12em] uppercase text-cream/50"
                  >
                    {e}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. BROTHERHOOD */}
      <section className="relative overflow-hidden">
        <img
          src={IMAGES.leadership}
          alt="Brothers celebrating together at a Tennessee gameday tailgate"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-plum-deep/55" />
        <div className="relative mx-auto flex min-h-[70dvh] max-w-[90rem] items-center px-5 md:px-10 py-24">
          <Reveal className="max-w-xl">
            <p className="section-label">Beyond Business</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              More Than a Network.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/85 md:text-lg">
              Formals, gamedays, annual cabin weekend, even late night study sessions... some of the best parts of DSP happen outside of professional events.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 10. RECRUITMENT CTA */}
      <section className="relative min-h-[70dvh] overflow-hidden bg-plum py-24 md:py-36">
        <div className="absolute inset-0 grid grid-cols-2 opacity-25">
          <img src={IMAGES.recruitmentScreenshot} alt="" loading="lazy" className="h-full w-full object-cover object-[center_100%]" />
          <img src={IMAGES.recruitmentScreenshot} alt="" loading="lazy" className="h-full w-full object-cover object-[center_100%]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <p className="section-label">Recruitment</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Your Next Chapter Starts Here.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75">
              If you're a Haslam student ready to grow professionally alongside people who will push
              and support you, we want to meet you.
            </p>
            <p className="mt-6 inline-block border-b-2 border-vol pb-1 text-xs font-semibold tracking-[0.25em] uppercase text-cream/80">
              Fall 2026 Recruitment
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/recruitment"
                className="w-full rounded-sm bg-gold px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-plum-deep transition-all duration-300 hover:bg-gold-light active:scale-[0.98] sm:w-auto"
              >
                Explore Recruitment
              </Link>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-sm border border-cream/50 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-cream transition-all duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
              >
                Message Us on Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
