import { siteConfig } from '@/lib/seo';

export default function sitemap() {
  const routes = [
    '',
    '/cost-calculator',
    '/tonnage-calculator',
    '/asphalt-vs-concrete',
    '/guide',
    '/faq',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  return routes;
}
