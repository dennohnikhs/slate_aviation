# Slate Aviation Services Africa

Premium aviation support services across Africa. Meet & greet, ground handling, fuel coordination, overflight permits, and helicopter charter services.
1. Add a new page object in `src/lib/site-data.js`.
2. Set a unique `slug`, `path`, `title`, `description`, and content sections.
3. Add the new route only if it needs a special URL pattern outside the catch-all page.
4. Re-run `npm run generate:sitemap`.

## Deployment
- **Vercel/Netlify**: use the app as a standard Node server or adapt to serverless routing.
- **Render/Railway**: set the start command to `npm start` and add the environment variables above.

## SEO notes
- Every page has a unique title, description, canonical URL, Open Graph metadata, and JSON-LD schema.
- Location pages are written to target airport- and country-specific aviation queries.
- The homepage and service pages now use remote aviation photography via `images.unsplash.com` and `images.pexels.com`.
# slate_aviation
