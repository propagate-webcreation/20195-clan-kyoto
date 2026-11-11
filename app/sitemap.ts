import type { MetadataRoute } from 'next';
import { fetchAllPostSlugs } from '@/lib/blog-api';

// 必須: sitemap を定期再生成し、新記事を反映する
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_ORIGIN || 'https://kyoto-walkin-tattoo-studio.com';

  const routes = ["/"];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' || route === '/home/' ? 1.0 : 0.8,
  }));
  staticEntries.push({
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  });

  let slugs: string[] = [];
  try {
    slugs = await fetchAllPostSlugs();
  } catch {
    // API 障害時は静的ページのみ
  }

  return [
    ...staticEntries,
    ...slugs.map((slug) => ({
      url: `${baseUrl}/blog/${encodeURIComponent(slug)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
