import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Mic, FileText, Users, MessageSquare, Compass } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import { IMAGES } from '@/data/chapter';

const PROGRAMS = [
  { icon: Mic, title: 'Professional Speakers', text: 'Hear directly from alumni, recruiters, and professionals across different industries.' },
  { icon: Users, title: 'Networking Opportunities', text: 'Build connections with professionals, alumni, and fellow brothers.' },
  { icon: FileText, title: 'Resume & LinkedIn Workshops', text: 'Get feedback and practical advice to strengthen how you present yourself professionally.' },
  { icon: MessageSquare, title: 'Interview Preparation', text: 'Practice answering interview questions and get advice from brothers who have been through the process.' },
  { icon: Compass, title: 'Brother-to-Brother Mentorship', text: 'Learn from older brothers about internships, classes, recruiting, and everything in between.' },
  { icon: Briefcase, title: 'Leadership Experience', text: 'Take on real responsibility through committees, events, and executive positions.' },
];

const CAREER_SPOTLIGHT_IMAGES = [
  { src: '/transcard.JPEG', name: 'Finley Roland', role: 'Transcard Intern', location: 'Chattanooga, TN' },
  { src: '/owen.JPEG', name: 'Owen Zerega', role: 'PepsiCo Intern', location: 'Knoxville, TN' },
  { src: '/ross.JPEG', name: 'Anna Swisher', role: 'Ross Stores Inc. Intern', location: 'New York City, NY' },
  { src: '/michelin.JPEG', name: 'Zach Jones', role: 'Michelin Intern', location: 'Greenville, SC', objectPosition: '35% center' },
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
        subtitle="From building your first resume to landing an internship, DSP gives you the people, experience, and resources to take the next step."
        image={IMAGES.corporate}
      />

      {/* Programs */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[90rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="section-label">What We Do</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
              Professional Development in Action.
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

      {/* Employer speaker series */}
      <section className="bg-plum-deep py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:gap-16 md:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-sm">
              <img
                src="/21st.JPEG"
                alt="21st Mortgage employer speaker series"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="section-label">Beyond the Classroom</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
              Employer Speaker Series
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/75">
              Throughout the semester, we invite employers to speak with our brothers about their industries, career paths, and opportunities within their companies. Last semester, 21st Mortgage joined us to share career advice and discuss internship and full-time opportunities, giving brothers the chance to ask questions and make connections directly with their team.
            </p>
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
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_SPOTLIGHT_IMAGES.map((image, i) => (
              <Reveal key={image.src} delay={i * 0.08}>
                <div className="group">
                  <img
                    src={image.src}
                    alt={`${image.name}, ${image.role}, ${image.location}`}
                    loading="lazy"
                    style={{ objectPosition: image.objectPosition || 'center' }}
                    className="aspect-[3/4] w-full rounded-sm object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="mt-4">
                    <p className="font-display text-xl font-medium text-foreground">{image.name}</p>
                    <p className="mt-1 text-xs font-semibold tracking-[0.15em] uppercase text-gold-dark">
                      {image.role}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{image.location}</p>
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
