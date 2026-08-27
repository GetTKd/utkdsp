import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import MemberCard from '@/components/MemberCard';
import { IMAGES, STATS, PILLARS, MEMBERS, EMPLOYERS, TESTIMONIAL } from '@/data/chapter';

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
        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gold">
              Delta Sigma Pi / Alpha Zeta Chapter
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[1.02] text-cream md:text-7xl lg:text-8xl">
              Where UT is cool
              <br />
              Meets Brotherhood.
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
              <em className="text-plum">principled business leaders</em> — through professional
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
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="text-center">
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
                Five Pillars. One Chapter.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Everything we do — from speaker series to formals — grows out of five shared values.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.07}
                className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <div className="group relative overflow-hidden rounded-sm">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/90 via-plum-deep/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-medium text-cream">{p.title}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/80 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 md:max-h-32 md:opacity-100 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL DEVELOPMENT */}
      <section className="bg-plum-deep py-24 md:py-36">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="section-label">Beyond the Classroom</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
                From Rocky Top to What's Next.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75">
                Corporate speaker series, resume workshops, mock interviews, and an alumni network
                that opens doors — DSP brothers build the skills, connections, and experience that
                turn ambition into offers.
              </p>
              <Link to="/professional" className="cta-arrow-light mt-8">
                Explore Career Outcomes <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="overflow-hidden rounded-sm">
                <img
                  src={IMAGES.speaker}
                  alt="A corporate speaker addresses DSP brothers in a university auditorium"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-x-4 gap-y-6">
                {EMPLOYERS.slice(0, 9).map((e) => (
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

      {/* 6. MEET OUR BROTHERS */}
      <section className="bg-background py-24 md:py-36">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">The People Behind DSP</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-6xl">
                Meet Our Brothers.
              </h2>
            </div>
            <Link to="/brothers" className="cta-arrow">
              Meet the Chapter <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {MEMBERS.slice(0, 4).map((m, i) => (
              <Reveal key={m.name} delay={i * 0.07}>
                <MemberCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BROTHERHOOD */}
      <section className="relative overflow-hidden">
        <img
          src={IMAGES.gameday}
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
              Formals, gamedays, retreats, and 2 a.m. study sessions — DSP is where professional
              ambition comes with people you genuinely want beside you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. KNOXVILLE + SMOKIES */}
      <section className="relative overflow-hidden">
        <img
          src={IMAGES.knoxville}
          alt="The Knoxville skyline at dusk with the Great Smoky Mountains beyond"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-plum-deep/45" />
        <div className="relative mx-auto flex min-h-[80dvh] max-w-[90rem] items-center justify-center px-5 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[1.05] text-cream md:text-7xl">
              Rooted in Knoxville.
              <br />
              Connected Everywhere.
            </h2>
            <p className="mt-6 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              <span className="inline-block h-px w-8 bg-vol" />
              Building business leaders from Rocky Top and beyond
              <span className="inline-block h-px w-8 bg-vol" />
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. TESTIMONIAL */}
      <section className="bg-cream py-24 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[2fr_3fr] md:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={TESTIMONIAL.image}
                alt={TESTIMONIAL.name}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="font-display text-7xl leading-none text-gold">"</span>
            <blockquote className="mt-2 font-display text-2xl font-medium leading-[1.35] text-foreground md:text-3xl">
              {TESTIMONIAL.quote}
            </blockquote>
            <p className="mt-8 text-sm font-semibold tracking-[0.15em] uppercase text-plum">
              {TESTIMONIAL.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {TESTIMONIAL.major} · {TESTIMONIAL.year}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 10. RECRUITMENT CTA */}
      <section className="relative overflow-hidden bg-plum py-24 md:py-36">
        <img
          src={IMAGES.recruitment}
          alt="Students connecting at a DSP recruitment event on campus"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <p className="section-label">Recruitment</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Your Next Chapter Starts Here.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75">
              If you're a UTK student ready to grow professionally alongside people who will push
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
              <Link
                to="/contact"
                className="w-full rounded-sm border border-cream/50 px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-cream transition-all duration-300 hover:border-gold hover:text-gold active:scale-[0.98] sm:w-auto"
              >
                Apply / Interest Form
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
