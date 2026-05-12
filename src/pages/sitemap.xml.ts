import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { legacyArticlePages, legacyLandingPages, legacyPortfolioPages, legacyServicePages } from '../data/legacy';

const staticUrls = [
  '/',
  '/about-us/',
  '/industries/',
  '/services/',
  '/services/commercial-ti/',
  '/services/adu-construction/',
  '/services/fire-rebuild/',
  '/services/bar-construction/',
  '/projects/',
  '/case-studies/',
  '/blogs/',
  '/videos/',
  '/reviews/',
  '/contact/',
  '/privacy-policy/',
  '/portfolio/'
];

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? 'https://www.econstructinc.com';
  const posts = await getCollection('blog');

  const urls = [
    ...staticUrls,
    ...legacyLandingPages.map((page) => `/${page.slug}/`),
    ...legacyArticlePages.map((page) => `/${page.slug}/`),
    ...legacyServicePages.map((page) => `/service/${page.slug}/`),
    ...legacyPortfolioPages.map((page) => `/portfolio/${page.slug}/`),
    ...posts.filter((post) => !post.data.draft).map((post) => `/blogs/${post.id}/`)
  ];

  const uniqueUrls = [...new Set(urls)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls
    .map((path) => `  <url><loc>${base}${path}</loc></url>`)
    .join('\n')}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
