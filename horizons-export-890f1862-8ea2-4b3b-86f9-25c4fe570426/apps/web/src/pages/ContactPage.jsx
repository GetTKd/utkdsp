import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Instagram, Linkedin, Mail, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageHero from '@/components/PageHero';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { IMAGES, CONTACT } from '@/data/chapter';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'General Question', message: '' });

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[DSP Alpha Zeta] ${form.topic} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Delta Sigma Pi Alpha Zeta at UTK</title>
        <meta
          name="description"
          content="Get in touch with Delta Sigma Pi's Alpha Zeta Chapter at UTK — chapter email, president and recruitment contacts, social media, and the interest form."
        />
      </Helmet>

      <PageHero
        label="Contact"
        title="Let's Start the Conversation."
        subtitle="Questions about recruitment, partnerships, or the chapter — we answer every message."
        image={IMAGES.haslam}
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-16 px-5 md:px-10 lg:grid-cols-[2fr_3fr]">
          {/* Contact info */}
          <Reveal>
            <p className="section-label">Reach the Chapter</p>
            <h2 className="mt-4 font-display text-3xl font-medium text-foreground md:text-4xl">
              Every message gets an answer.
            </h2>
            <div className="mt-10 space-y-8">
              {[
                { label: 'Chapter Email', name: 'Delta Sigma Pi — Alpha Zeta', email: CONTACT.email },
                { label: 'President', name: CONTACT.president.name, email: CONTACT.president.email },
                { label: 'VP of Recruitment', name: CONTACT.recruitment.name, email: CONTACT.recruitment.email },
              ].map((c) => (
                <div key={c.label} className="border-l-2 border-gold pl-5">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-medium text-foreground">{c.name}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-1 inline-flex items-center gap-2 text-sm text-plum underline decoration-gold underline-offset-4 transition-colors hover:text-gold-dark"
                  >
                    <Mail className="h-3.5 w-3.5" strokeWidth={2} /> {c.email}
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 items-center gap-2 rounded-sm border border-border px-5 text-xs font-semibold tracking-[0.15em] uppercase text-foreground transition-all hover:border-gold hover:text-gold-dark"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.75} /> @utkdsp
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 items-center gap-2 rounded-sm border border-border px-5 text-xs font-semibold tracking-[0.15em] uppercase text-foreground transition-all hover:border-gold hover:text-gold-dark"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.75} /> LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="rounded-sm border border-border bg-card p-7 md:p-10"
            >
              <h3 className="font-display text-2xl font-medium text-foreground">
                Interest & Contact Form
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Fill this out and it opens a pre-addressed email to the chapter — hit send and we
                will get back to you within a few days.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={update('name')}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@vols.utk.edu"
                    value={form.email}
                    onChange={update('email')}
                  />
                </div>
              </div>
              <div className="mt-6 grid gap-2">
                <Label htmlFor="topic">Topic</Label>
                <select
                  id="topic"
                  value={form.topic}
                  onChange={update('topic')}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option>General Question</option>
                  <option>Recruitment Interest — Fall 2026</option>
                  <option>Corporate Partnership</option>
                  <option>Alumni Relations</option>
                  <option>Media / University Inquiry</option>
                </select>
              </div>
              <div className="mt-6 grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about yourself and what you'd like to know…"
                  value={form.message}
                  onChange={update('message')}
                />
              </div>
              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-plum px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase text-cream transition-all duration-300 hover:bg-plum-light active:scale-[0.98] sm:w-auto"
              >
                Send Message <Send className="h-4 w-4" strokeWidth={2} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
