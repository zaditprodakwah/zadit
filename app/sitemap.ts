export const dynamic = 'force-static';
import { MetadataRoute } from 'next';
import { seoServices } from '@/data/seo-services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pradiktif.id';
  
  const services = seoServices.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    ...services,
  ];
}
