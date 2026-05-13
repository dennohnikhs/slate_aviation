# Slate Aviation Services Africa

Custom-coded, SEO-focused aviation services website for Slate Aviation Services Africa.

## Stack
- Next.js App Router
- Express API server for form handling
- React components and vanilla client-side interactivity
- Tailwind CSS

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Generate sitemap if needed:
   ```bash
   npm run generate:sitemap
   ```
3. Start the site:
   ```bash
   npm start
   ```
4. Open `http://localhost:3000`

## Environment variables
Use these for production email delivery and canonical URLs:
- `SITE_URL` = `https://yourdomain.com`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE` (`true` or `false`)
- `SMTP_USER`
- `SMTP_PASS`
- `ADMIN_EMAIL`
- `FROM_EMAIL`

If SMTP is not configured, submissions are logged to the console and stored in `data/submissions.json`.

## Google Analytics and Search Console
- Add your Google Analytics tag in `app/layout.jsx`.
- Add the Search Console verification meta tag in `app/layout.jsx` or via Next metadata if Google gives you a verification code.
- Keep `SITE_URL` set correctly so canonical links and sitemap URLs match production.

## Forms
- Contact form posts to `/api/inquiries/contact`.
- Quote form posts to `/api/inquiries/quote`.
- Both forms validate required fields client-side and server-side.
- Production email setup uses Nodemailer with SMTP credentials.

## Adding more location pages
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
