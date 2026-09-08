import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import { IMAGES, TESTIMONIAL } from '@/data/chapter';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const storyCarousels = [
  {
    label: 'Our story',
    images: [
      '/sphererace.JPEG',
      '/holdingfinley.JPEG',
      '/corporate.JPEG',
      '/sunset.JPEG',
      '/dashppl.JPEG',
      '/goateveryone.JPEG',
      '/blurryone.jpg',
      '/shirts.JPEG',
      '/finleyslant.JPEG',
      '/trash.JPEG',
      '/btsstairs.JPEG',
      '/purpleservice.JPEG',
      '/goat4irls.JPEG',
      '/signpj.JPEG',
      '/haslamsteps.JPEG',
      '/finhayden.JPEG',
      '/springppl.JPEG',
      '/nik.JPEG',
      '/dasheveryone.JPEG',
      '/quarry.JPEG',
      '/smokeout.JPEG',
      '/goatindivudal.JPEG',
      '/brian.JPEG',
      '/headstand.JPEG',
    ],
  },
];

function StoryCarousel({ label, images }) {
  const [api, setApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return undefined;

    const updateSelectedIndex = () => setSelectedIndex(api.selectedScrollSnap());
    updateSelectedIndex();
    api.on('select', updateSelectedIndex);
    api.on('reInit', updateSelectedIndex);

    return () => {
      api.off('select', updateSelectedIndex);
      api.off('reInit', updateSelectedIndex);
    };
  }, [api]);

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-gold" />
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">{label}</p>
      </div>
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        tabIndex={0}
        aria-label={`${label} photos`}
        className="pb-12 outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:pb-0"
      >
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem key={image} className="pl-0">
            <div className="aspect-[5/4] overflow-hidden rounded-sm border border-border/80 bg-cream shadow-sm">
              <img
                src={image}
                alt={`${label}, photo ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-contain object-center transition-opacity duration-500 ease-out"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bottom-0 left-3 top-auto h-9 w-9 translate-y-0 border-border bg-cream text-plum shadow-sm hover:bg-cream hover:text-plum-light sm:bottom-auto sm:left-3 sm:top-1/2 sm:-translate-y-1/2" />
      <CarouselNext className="bottom-0 right-3 top-auto h-9 w-9 translate-y-0 border-border bg-cream text-plum shadow-sm hover:bg-cream hover:text-plum-light sm:bottom-auto sm:right-3 sm:top-1/2 sm:-translate-y-1/2" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 sm:hidden" aria-label="Choose a photo">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Show photo ${index + 1}`}
            aria-current={selectedIndex === index ? 'true' : undefined}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index ? 'w-5 bg-gold' : 'w-1.5 bg-plum/30 hover:bg-plum/50'}`}
          />
        ))}
      </div>
      </Carousel>
      <div className="hidden items-center justify-center gap-2 pt-4 sm:flex" aria-label="Choose a photo">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Show photo ${index + 1}`}
            aria-current={selectedIndex === index ? 'true' : undefined}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index ? 'w-5 bg-gold' : 'w-1.5 bg-plum/30 hover:bg-plum/50'}`}
          />
        ))}
      </div>
    </div>
  );
}

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
        label="About Alpha Zeta"
        title="Business Is Just the Beginning."
        subtitle="Delta Sigma Pi at the University of Tennessee brings together students across Haslam who want to grow professionally, get involved, and build friendships that last beyond college."
        image="/blurryone.jpg"
      />

      {/* Story */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal className="lg:pl-8">
            <p className="section-label">Our Story</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-foreground md:text-5xl">
              Founded in 1907. At Rocky Top since 1924.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Delta Sigma Pi Business Fraternity was founded at New York University in 1907 to bring business students
              together around scholarship, professional development, and fellowship. Today, more
              than 300 chapters and 300,000 initiated members form one of the largest professional
              networks in the world of business.<br /><br />
              The Alpha Zeta Chapter of Delta Sigma Pi has been part of the University of Tennessee since 1924. Today, our chapter is made up of students from across the Haslam College of Business who share an interest in building their careers, serving the Knoxville community, and making the most of their time at UT.

What starts as a professional organization quickly becomes much more. Between biweekly chapter meetings, professional events, service projects, formals, and everything in between, DSP gives our brothers a place to learn from each other and form genuine friendships. 
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The Alpha Zeta Chapter carries that legacy at the University of Tennessee, Knoxville.
              Rooted in the Haslam College of Business, our chapter pairs career-building programming
              with the kind of community that makes a campus of 30,000 feel like home.
            </p>
            <Link to="/brothers" className="cta-arrow mt-8">
              Meet the Brothers <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </Reveal>
          <Reveal delay={0.15} className="w-full self-start">
            <h2 className="mb-5 text-left font-display text-2xl font-medium leading-tight text-foreground md:text-3xl">
              A Look Inside Our Brotherhood
            </h2>
            {storyCarousels.map((carousel) => (
              <StoryCarousel key={carousel.label} {...carousel} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* Visual break */}
      <section className="bg-background px-5 py-12 md:px-10 md:py-20">
        <div className="group relative mx-auto max-w-[90rem] overflow-hidden rounded-sm border border-border/80 bg-plum-deep shadow-sm">
          <img
            src="/edited.jpg"
            alt="Haslam College of Business sign framed by Alpha Zeta hands"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-plum-deep/25" />
          <div className="absolute inset-0 hidden bg-gradient-to-tr from-plum-deep/90 via-plum-deep/30 to-transparent md:block" />
          <div className="relative bg-plum-deep px-6 py-8 md:absolute md:inset-x-0 md:bottom-0 md:max-w-xl md:bg-transparent md:px-12 md:py-12 lg:max-w-2xl lg:px-16 lg:py-14">
            <p className="section-label">OUR HOME AT UT</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] text-cream md:text-5xl lg:text-6xl">
              Rooted in the Haslam College of Business.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/80 md:text-lg">
              
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-cream py-24 md:py-36">
        <h2 className="mx-auto mb-12 max-w-6xl px-5 text-left font-display text-4xl font-medium leading-tight text-foreground md:px-10 md:text-5xl">
          A Message from Our President, Finley:
        </h2>
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
            <blockquote className="mt-2 whitespace-pre-line font-display text-base font-medium leading-relaxed text-foreground md:text-lg">
              {TESTIMONIAL.quote}
            </blockquote>
            <div className="text-right">
              <span className="font-display text-7xl leading-none text-gold">"</span>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
