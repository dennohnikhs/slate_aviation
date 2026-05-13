import Link from 'next/link';
import AviationHighlights from '../../src/components/AviationHighlights';
import InquiryForms from '../../src/components/InquiryForms';
import PageSections from '../../src/components/PageSections';
import VisualShowcase from '../../src/components/VisualShowcase';
import { allPages, buildCanonical, buildSchema, getPageBySlug, locationPages, siteConfig } from '../../src/lib/site-data';

export function generateStaticParams() {
  return allPages
    .filter((page) => page.path !== '/')
    .map((page) => ({ slug: page.path.slice(1).split('/') }));
}

export function generateMetadata({ params }) {
  const path = `/${(params.slug || []).join('/')}`;
  const page = getPageBySlug(path);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: buildCanonical(page.path) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: buildCanonical(page.path),
      siteName: siteConfig.name,
      type: 'website',
    },
  };
}

export default function ContentPage({ params }) {
  const path = `/${(params.slug || []).join('/')}`;
  const page = getPageBySlug(path);

  if (!page) {
    return (
      <main id="main" className="px-4 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="text-4xl font-semibold tracking-tight">Page not found</h1>
          <p className="mt-3 text-slate-300">The page you requested does not exist.</p>
          <Link className="btn-primary mt-5" href="/">Go home</Link>
        </div>
      </main>
    );
  }

  const schema = buildSchema(page);
  const visualVariant = page.path.includes('meet-and-greet') || page.path.includes('ground-handling') ? 'location' : 'service';

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-[radial-gradient(circle_at_top_left,rgba(214,166,74,0.14),transparent_35%),linear-gradient(180deg,rgba(18,40,74,0.7),rgba(7,17,31,0))] py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-7 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-400">{page.sectionName}</p>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">{page.heading}</h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-300">{page.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="btn-primary" href="/quote">Get a Quote</Link>
              <Link className="btn-secondary" href="/contact">Request Handling</Link>
            </div>
          </div>
          <div className="card-shell p-4 md:p-5">
            <VisualShowcase variant={visualVariant} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="space-y-5">
            <PageSections page={page} />

            {page.path === '/services' && (
              <div className="card-shell p-6">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What we cover</h2>
                <p className="mt-3 text-slate-300">Every service page routes into a focused booking path with airport-specific coverage for Africa and Kenya.</p>
              </div>
            )}

            {(page.path === '/meet-and-greet' || page.path === '/locations') && (
              <div className="card-shell p-6">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Location-driven SEO</h2>
                <p className="mt-3 text-slate-300">These pages are written for high-intent airport and country searches, including exact-match airport queries.</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-4 text-slate-300">
                  {locationPages.map((location) => (
                    <li key={location.path}>
                      <Link className="hover:text-white" href={location.path}>{location.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          <aside className="card-shell h-fit p-6 lg:sticky lg:top-24">
            <h2 className="text-2xl font-semibold tracking-tight">Service summary</h2>
            <p className="mt-3 text-slate-300">Use the forms below to request handling or a tailored quote for this service.</p>
          </aside>
        </div>
      </section>

      <AviationHighlights />

      <InquiryForms />
    </main>
  );
}
