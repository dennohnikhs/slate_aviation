import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main" className="px-4 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-400">404</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-slate-300">The page you requested does not exist.</p>
        <Link className="btn-primary mt-5" href="/">Go home</Link>
      </div>
    </main>
  );
}
