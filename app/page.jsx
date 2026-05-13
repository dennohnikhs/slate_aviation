import Link from 'next/link';
import AviationHighlights from '../src/components/AviationHighlights';
import InquiryForms from '../src/components/InquiryForms';
import VisualShowcase from '../src/components/VisualShowcase';
import { locationPages, pages, servicePages, siteConfig, buildSchema, buildCanonical } from '../src/lib/site-data';

export const metadata = {
  title: pages.find((page) => page.slug === 'home').title,
  description: pages.find((page) => page.slug === 'home').description,
  alternates: { canonical: buildCanonical('/') },
  openGraph: {
    title: pages.find((page) => page.slug === 'home').title,
    description: pages.find((page) => page.slug === 'home').description,
    url: buildCanonical('/'),
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function HomePage() {
  const page = pages.find((item) => item.slug === 'home');
  const schema = buildSchema(page);

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="mx-auto w-full max-w-6xl px-4 pb-12 pt-16 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pt-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-400">African aviation support with a Kenya focus</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">{page.heading}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">{page.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn-primary" href="/quote">Get a Quote</Link>
            <Link className="btn-secondary" href="/contact">Request Handling</Link>
            <Link className="btn-ghost" href="/services">Book Service</Link>
          </div>
          <ul className="mt-6 list-disc space-y-1.5 pl-4 text-slate-300">
            <li>Fast response for high-intent inquiries</li>
            <li>Kenya coverage at HKJK and HKNW</li>
            <li>SEO-focused pages for airport searches</li>
          </ul>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="card-shell p-4 md:p-5">
            <VisualShowcase variant="home" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <div className="card-shell overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-400">Premium experience</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">A polished aviation presence that feels premium from first glance.</h2>
              <p className="mt-4 text-slate-300">We paired the conversion-focused layout with real aviation photography to create an elevated first impression for operators and travelers.</p>
            </div>
            <div className="p-4 md:p-5">
              <VisualShowcase variant="support" />
            </div>
          </div>
        </div>
      </section>

      <AviationHighlights />

      <section className="mx-auto w-full max-w-6xl px-4 pb-14">
        <div className="card-shell p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Core services</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {servicePages.map((service) => (
              <Link href={service.path} className="card-shell flex min-h-24 items-end p-4 text-sm font-semibold transition hover:border-amber-300/60 hover:bg-white/10" key={service.path}>
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgba(214,166,74,0.08),rgba(214,166,74,0))] py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-7 px-4 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-400">{page.sectionName}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Purpose-built to convert search traffic into bookings.</h2>
          </div>
          <div className="grid gap-5">
            {page.sections.map((section) => (
              <article className="card-shell p-6" key={section.heading}>
                <h3 className="text-2xl font-semibold tracking-tight">{section.heading}</h3>
                <p className="mt-3 text-slate-300">{section.body}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-4 text-slate-300">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="grid gap-7 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-400">Coverage</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Dedicated landing pages for important Africa airport searches.</h2>
            <p className="mt-3 text-slate-300">We’ve built focused location pages for airports and country-specific service intent so users can find the exact aviation support they need.</p>
          </div>
          <div className="grid gap-3">
            {locationPages.map((location) => (
              <Link className="card-shell rounded-2xl px-4 py-3.5 text-slate-200 transition hover:border-amber-300/60 hover:bg-white/10 hover:text-white" href={location.path} key={location.path}>
                {location.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InquiryForms />
    </main>
  );
}
