'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SiteHeader({ siteConfig }) {
  const [open, setOpen] = useState(false);
  const navLink = 'text-sm font-medium text-slate-300 transition hover:text-slate-100';

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3.5">
        <Link className="flex items-center gap-3" href="/" aria-label={`${siteConfig.name} home`}>
          <img src="/slate-aviation-logo.png" alt="Slate Aviation logo" className="h-10 w-10" />
          <span>
            <strong className="block leading-none">Slate Aviation</strong>
            <small className="block text-xs text-slate-400">Services Africa</small>
          </span>
        </Link>
        <button
          className="rounded-xl border border-white/15 px-3 py-2 text-sm text-slate-100 md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
        <nav
          className={`${open ? 'flex' : 'hidden'} absolute right-4 top-[72px] min-w-[230px] flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950 p-4 md:static md:flex md:min-w-0 md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0`}
          id="site-nav"
        >
          <Link className={navLink} href="/services">Services</Link>
          <Link className={navLink} href="/meet-and-greet">Meet &amp; Greet</Link>
          <Link className={navLink} href="/ground-handling">Ground Handling</Link>
          <Link className={navLink} href="/locations">Locations</Link>
          <Link className={navLink} href="/contact">Contact</Link>
          <Link className="btn-primary" href="/quote">Get a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
