import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Mic, FileText, Users, MessageSquare, Compass } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import PageHero from '@/components/PageHero';
import { IMAGES, EMPLOYERS, MEMBERS } from '@/data/chapter';

const PROGRAMS = [
  { icon: Mic, title: 'Corporate Speaker Series', text: 'Executives and alumni from Fortune 500 companies share how they got there — and how you can too.' },
  { icon: Users, title: 'Networking Nights', text: 'Structured evenings with recruiters and professionals, built for real conversations, not business-card collecting.' },
  { icon: FileText, title: 'Resume & LinkedIn Workshops', text: 'Line-by-line reviews from brothers who have landed the internships you are applying for.' },
  { icon: MessageSquare, title: 'Interview Preparation', text: 'Mock behavioral and technical interviews with honest feedback before the real thing.' },
  { icon: Compass, title: 'Mentorship', text: 'Big-little pairings and alumni mentors who answer the questions you cannot ask a recruiter.' },
  { icon: Briefcase, title: 'Leadership Development', text: 'Committee chairs and executive roles where you lead real budgets, events, and teams.' },
];

const OUTCOME_STATS = [
  { value: 94, suffix: '%', label: 'Brothers with internships by junior year' },
  { value: 120, suffix: '+', label: 'Internships & full-time placements' },
  { value: 40, suffix: '+', label: 'Companies hiring Alpha Zeta brothers' },
];

export default function ProfessionalPage() {
  return (
    <>
      <Helmet>
        <title>Professional Development & Career Outcomes | DSP Alpha Zeta at UTK</title>
        <meta
          name="description"
          content="See how Delta Sigma Pi's Alpha Zeta Chapter prepares UTK students for careers — corporate speakers, workshops, mentorship, and where our brothers intern and work."
        />
      </Helmet>

      <PageHero
        label="Professional Development"
        title="Careers Are Built Here."
        subtitle="From the first resume workshop to the signed offer letter — DSP turns ambition into outcomes."
        image={IMAGES.speaker}
      />

      {/* Programs */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">What We Do</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Professional Growth, Every Week.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08} className="border-t-2 border-gold pt-6">
                <p.icon className="h-6 w-6 text-plum" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-medium text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo band */}
      <section className="grid md:grid-cols-2">
        {[IMAGES.networking, IMAGES.workshop].map((img, i) => (
          <div key={img} className="group overflow-hidden">
            <img
              src={img}
              alt={i === 0 ? 'Brothers networking with corporate partners' : 'A resume workshop with a mentor'}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        ))}
      </section>

      {/* Career outcomes */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Career Outcomes</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Where Brothers Go.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {OUTCOME_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="border-l-2 border-gold pl-6">
                <p className="font-display text-5xl font-medium text-cream md:text-6xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{s.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-cream/50">
              Recent internship & full-time employers
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 lg:grid-cols-6">
              {EMPLOYERS.map((e) => (
                <p
                  key={e}
                  className="text-center font-display text-lg font-medium text-cream/70 transition-colors hover:text-gold"
                >
                  {e}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Career spotlights */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Member Spotlights</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-6xl">
                Brothers on the Rise.
              </h2>
            </div>
            <Link to="/recruitment" className="cta-arrow">
              Start Your Story <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
          <div className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.slice(0, 3).map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm">
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/90 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-xl font-medium text-cream">{m.name}</p>
                    <p className="mt-1 text-xs font-semibold tracking-[0.15em] uppercase text-gold">
                      {m.role}
                    </p>
                    <p className="mt-1 text-sm text-cream/70">
                      {m.major} · Class of {m.year}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
