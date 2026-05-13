import Link from 'next/link';

export default function SiteFooter({ siteConfig }) {
  return (
    <footer className="mt-8 border-t border-white/10 bg-white/[0.02] py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <h2 className="text-xl font-semibold">{siteConfig.name}</h2>
          <p className="mt-3 text-slate-300">{siteConfig.tagline}</p>
        </div>
        <div>
          <h3 className="font-semibold">Quick links</h3>
          <ul className="mt-3 list-disc space-y-2 pl-4 text-slate-300">
            <li><Link className="hover:text-white" href="/meet-and-greet">Meet &amp; Greet</Link></li>
            <li><Link className="hover:text-white" href="/ground-handling">Ground Handling</Link></li>
            <li><Link className="hover:text-white" href="/fuel-coordination">Fuel Coordination</Link></li>
            <li><Link className="hover:text-white" href="/permits">Permits</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <p className="mt-3"><a className="text-slate-300 hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
          <p className="mt-1"><a className="text-slate-300 hover:text-white" href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}>{siteConfig.phone}</a></p>
          <p className="mt-1 text-slate-300">{siteConfig.address}</p>
        </div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-white/10 px-4 pt-6">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Slate Aviation Services Africa. All rights reserved.</p>
      </div>
    </footer>
  );
}
