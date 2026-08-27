import React from 'react';
import Reveal from '@/components/Reveal';

export default function PageHero({ label, title, subtitle, image }) {
  return (
    <section className="relative flex min-h-[52dvh] items-end overflow-hidden bg-plum-deep">
      {image && (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-plum-deep/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-deep via-plum-deep/40 to-plum-deep/30" />
        </>
      )}
      <div className="relative mx-auto w-full max-w-[90rem] px-5 md:px-10 pb-14 md:pb-20 pt-36">
        <Reveal>
          <p className="section-label">{label}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.05] text-cream md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
