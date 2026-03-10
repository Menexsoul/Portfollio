export const dynamic = 'force-static'

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://menexsoul.github.io/',
      lastModified: new Date('2026-03-10'),
      changeFrequency: 'daily',
    },
  ]
}