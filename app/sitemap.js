import { allPages, buildCanonical } from '../src/lib/site-data';

export default function sitemap() {
  return allPages.map((page) => ({
    url: buildCanonical(page.path),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page.priority ? Number(page.priority) : 0.7,
  }));
}
