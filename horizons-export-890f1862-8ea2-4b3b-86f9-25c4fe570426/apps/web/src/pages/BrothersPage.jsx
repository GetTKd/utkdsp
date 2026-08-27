import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import MemberCard from '@/components/MemberCard';
import { IMAGES, MEMBERS } from '@/data/chapter';

const TRADITIONS = [
  { image: IMAGES.gameday, title: 'Gamedays on Rocky Top', text: 'Tailgates, checkerboard end zones, and 100,000 of our closest friends.' },
  { image: IMAGES.brotherhood, title: 'Formals & Socials', text: 'Semi-formals in the fall, formal in the spring, and plenty in between.' },
  { image: IMAGES.service, title: 'Service in Knoxville', text: 'Philanthropy weeks and community partnerships across the city we call home.' },
  { image: IMAGES.networking, title: 'Chapter Retreats & Trips', text: 'Fall retreats in the Smokies and road trips to regional conferences.' },
];

export default function BrothersPage() {
  return (
    <>
      <Helmet>
        <title>Our Brothers | Delta Sigma Pi Alpha Zeta at UTK</title>
        <meta
          name="description"
          content="Meet the brothers of Delta Sigma Pi's Alpha Zeta Chapter at UTK — their majors, internships, and career interests — plus the traditions and brotherhood that define chapter life."
        />
      </Helmet>

      <PageHero
        label="Our Brothers"
        title="The People Who Make Alpha Zeta Home."
        subtitle="Fourteen majors, one chapter. Meet the students building careers and friendships together at Tennessee."
        image={IMAGES.brotherhood}
      />

      {/* Directory */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Member Directory</p>
              <h2 className="mt-4 font-display text-4xl font-medium text-foreground md:text-6xl">
                Meet the Chapter.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              From finance to supply chain to economics — brothers interning across the country and
              leading across campus.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {MEMBERS.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.07}>
                <MemberCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brotherhood & traditions */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">Chapter Life</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Traditions Worth Showing Up For.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {TRADITIONS.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.07}>
                <div className="group relative overflow-hidden rounded-sm">
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/90 via-plum-deep/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="font-display text-2xl font-medium text-cream">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/75">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <Link to="/recruitment" className="cta-arrow-light">
              Become Part of It <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
