import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/brothers', label: 'Our Brothers' },
  { to: '/professional', label: 'Professional' },
  { to: '/service', label: 'Service' },
  { to: '/recruitment', label: 'Recruitment' },
  { to: '/alumni', label: 'Alumni & Partners' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 40);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-plum-deep/95 backdrop-blur-md shadow-lg shadow-plum-deep/30'
          : 'bg-gradient-to-b from-plum-deep/70 to-transparent'
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-[90rem] items-center justify-between px-5 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="font-display text-xl md:text-2xl font-semibold tracking-wide text-cream">
            ΔΣΠ
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block text-[11px] font-semibold tracking-[0.25em] uppercase text-cream">
              Delta Sigma Pi
            </span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-gold">
              Alpha Zeta · UTK
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'link-underline text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors',
                  isActive ? 'text-gold' : 'text-cream/85 hover:text-cream'
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/recruitment"
            className="ml-2 rounded-sm bg-gold px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase text-plum-deep transition-all duration-300 hover:bg-gold-light active:scale-[0.98]"
          >
            Join DSP
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="xl:hidden flex h-11 w-11 items-center justify-center text-cream"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" strokeWidth={1.75} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 border-l border-plum-light bg-plum-deep p-0">
            <div className="flex h-full flex-col px-8 py-10">
              <span className="font-display text-3xl font-semibold text-gold">ΔΣΠ</span>
              <span className="mt-1 text-[11px] tracking-[0.25em] uppercase text-cream/60">
                Alpha Zeta · Knoxville
              </span>
              <nav className="mt-10 flex flex-col gap-1">
                {LINKS.map((l) => (
                  <SheetClose asChild key={l.to}>
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        cn(
                          'border-b border-plum-light/60 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase transition-colors',
                          isActive ? 'text-gold' : 'text-cream/85 hover:text-gold'
                        )
                      }
                    >
                      {l.label}
                    </NavLink>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Link
                  to="/recruitment"
                  className="mt-8 rounded-sm bg-gold px-6 py-3.5 text-center text-xs font-bold tracking-[0.2em] uppercase text-plum-deep transition-colors hover:bg-gold-light"
                >
                  Join DSP
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
