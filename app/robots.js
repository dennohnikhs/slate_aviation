import { buildCanonical } from '../src/lib/site-data';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: buildCanonical('/sitemap.xml'),
  };
}
