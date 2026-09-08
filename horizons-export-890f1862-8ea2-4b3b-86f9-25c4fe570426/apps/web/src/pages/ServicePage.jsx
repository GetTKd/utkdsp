import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  Recycle,
  HandPlatter,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import PageHero from '@/components/PageHero';
import { IMAGES, CONTACT } from '@/data/chapter';

const SERVICE_HERO = 'https://images.hostinger.com/466f3899-b97c-46f3-a906-5db5ac2ebeba.png';

const INITIATIVES = [
  {
    icon: HandPlatter,
    title: 'Knox Area Rescue Ministries',
    text: 'Brothers volunteer at KARM by serving meals to individuals experiencing homelessness and helping support those in need throughout the Knoxville community.',
    impact: 'Community partnership',
  },
  {
    icon: Recycle,
    title: 'Dear Jack Foundation',
    text: 'Brothers came together to put on the Dash for Don, raising money through the Dear Jack Foundation to support adolescents and young adults impacted by cancer.',
    impact: 'Dash for Don',
  },
  {
    icon: GraduationCap,
    title: 'Keeping Knoxville Beautiful',
    text: 'Brothers volunteer with Keep Knoxville Beautiful by participating in community cleanups and helping keep Knoxville clean and welcoming.',
    impact: 'Community cleanups',
  },
];

const IMPACT_STATS = [
  { value: 650, suffix: '+', label: 'Service Hours Annually' },
  { value: 5, suffix: '+', label: 'Service Events a Semester' },
  { value: 8, suffix: '+', label: 'Local Community Partners' },
  { value: 120000, suffix: '+', label: 'Total Service Hours in Alpha Zeta' },
];

const GALLERY = [
  { src: '/donsign.JPEG', alt: 'Brothers volunteering at a community service event', span: 'lg:col-span-2' },
  { src: '/purpleservice.JPEG', alt: 'Brothers serving the Knoxville community', span: 'lg:col-span-2' },
  { src: '/soupkitch.JPEG', alt: 'Brothers volunteering at a soup kitchen', span: 'lg:col-span-2' },
  { src: '/soupkitchnfinley.JPEG', alt: 'Finley volunteering at a soup kitchen', span: 'lg:col-span-2 lg:col-start-2' },
  { src: '/trash.JPEG', alt: 'Brothers cleaning up litter in Knoxville', span: 'lg:col-span-2 lg:col-start-4' },
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
        title="Giving Back to Knoxville."
        subtitle="Service is an important part of what we do in DSP. Throughout the semester, our brothers volunteer together with organizations across Knoxville and East Tennessee."
        image="/Screenshot 2026-09-07 at 9.17.09 PM.png"
      />

      {/* Mission overview */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="section-label">Our Service Mission</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-5xl">
                Service Beyond Ourselves.
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
                Service is not a side project for us. It is woven into pledging, into biweekly chapter
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
              Our Brothers at Work.
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
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
                  className="aspect-[3/4] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
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
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="cta-arrow-light"
              >
                Message Us on Instagram <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
