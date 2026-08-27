import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import MemberCard from '@/components/MemberCard';
import { IMAGES, EXEC_BOARD } from '@/data/chapter';

const VALUES = [
  { title: 'Professionalism', text: 'We hold ourselves to the standard of the careers we are building toward.' },
  { title: 'Brotherhood', text: 'We show up for each other — in the classroom, in recruiting, and in life.' },
  { title: 'Leadership', text: 'Every brother leads something. Titles are earned by doing the work.' },
  { title: 'Scholarship', text: 'Academic excellence is a shared commitment, not a solo pursuit.' },
  { title: 'Service', text: 'Knoxville gives us a home. We give back our time.' },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About the Alpha Zeta Chapter | Delta Sigma Pi at UTK</title>
        <meta
          name="description"
          content="Learn about Delta Sigma Pi's history, the Alpha Zeta Chapter at the University of Tennessee, Knoxville, our mission and values, and the executive board leading the chapter."
        />
      </Helmet>

      <PageHero
        label="About the Chapter"
        title="A Century of Principled Business Leaders."
        subtitle="Delta Sigma Pi is America's foremost co-ed professional business fraternity — and Alpha Zeta is its home on Rocky Top."
        image={IMAGES.haslam}
      />

      {/* Story */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="section-label">The Fraternity</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-foreground md:text-5xl">
              Founded in 1907. Built for what's next.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Delta Sigma Pi was founded at New York University in 1907 to bring business students
              together around scholarship, professional development, and fellowship. Today, more
              than 300 chapters and 300,000 initiated members form one of the largest professional
              networks in the world of business.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="section-label">Alpha Zeta at Tennessee</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-foreground md:text-5xl">
              Rocky Top's home for driven students.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The Alpha Zeta Chapter carries that legacy at the University of Tennessee, Knoxville.
              Rooted in the Haslam College of Business and open to students of every major, our
              chapter pairs career-building programming with the kind of community that makes a
              campus of 30,000 feel like home.
            </p>
            <Link to="/brothers" className="cta-arrow mt-8">
              Meet the Brothers <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Mission & values */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Mission & Values</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-cream md:text-5xl">
              What we stand for, every semester.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-plum-light/40 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07} className="bg-plum-deep p-7">
                <p className="font-display text-lg font-medium text-gold">{v.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Haslam connection */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] items-center gap-14 px-5 md:px-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src={IMAGES.haslam}
                alt="The Haslam College of Business at the University of Tennessee, Knoxville"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="section-label">UTK & Haslam</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-foreground md:text-5xl">
              Proudly part of the Haslam College of Business.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our chapter works alongside Haslam's career center, faculty, and student
              organizations — hosting events in the business building, partnering on employer
              visits, and representing Tennessee at regional and national DSP conferences.
            </p>
            <p className="mt-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              <span className="inline-block h-px w-8 bg-vol" />
              Knoxville, Tennessee
            </p>
          </Reveal>
        </div>
      </section>

      {/* Executive board */}
      <section className="border-t border-border bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Leadership</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-6xl">
                The Executive Board.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Elected each year by the chapter, the executive board leads programming, recruitment,
              and brotherhood.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {EXEC_BOARD.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.07}>
                <MemberCard member={m} showPosition />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
