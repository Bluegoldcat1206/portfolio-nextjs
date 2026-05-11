import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://your-vercel-url.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://your-vercel-url.vercel.app/portfolio',
      lastModified: new Date(),
    },
    {
      url: 'https://your-vercel-url.vercel.app/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://your-vercel-url.vercel.app/about',
      lastModified: new Date(),
    },
  ]
}