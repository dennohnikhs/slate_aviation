import type { MetadataRoute } from 'next';
import { allPages } from '../src/lib/site-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: `https://slate-aviation.com${page.path}`,
    lastModified: new Date(),
    priority: page.path === '/' ? 1.0 : 0.8,
  }));
}
