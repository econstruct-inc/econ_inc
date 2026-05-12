# econstruct migration rules

These rules define the working scope for moving `www.econstructinc.com` off WordPress and onto Cloudflare Pages.

## Required scope

- Pull everything from the current WordPress site: pages, blog posts, case studies, images, videos, metadata, URLs, and form destinations.
- Rebuild each important public page on the new platform with the same econstruct look and feel, improved performance, and cleaner conversion paths.
- Keep the blog publishable without WordPress. New posts live in `src/content/blog/` as Markdown files with title, description, date, category, image, and optional related service link.
- Wire lead capture forms to the requested destination. Current implementation posts to `/api/contact`, validates spam controls, and emails `frank@econstructinc.com` through Resend.
- Preserve SEO value with per-page metadata, schema, canonical URLs, `sitemap.xml`, `robots.txt`, and Cloudflare `_redirects` from old WordPress URLs.
- Put Cloudflare in front for speed and security. Cloudflare Pages builds the static site, Cloudflare Pages Functions handle the form endpoint, and Cloudflare DNS points the domain after testing.
- Launch only after links, forms, redirects, mobile layout, Lighthouse, and production email delivery are tested.
- Keep the old WordPress host parked for one month after launch unless the owner explicitly approves immediate shutdown.

## Lead-first site structure

- Top navigation should prioritize how prospects search and decide: Industries, Services, Our Company, Videos, Reviews, Contact Us.
- Industries pages should map buyer intent to project types: restaurant, bar, retail, office TI, residential, ADU, and food manufacturing.
- Services pages should explain scope, process, FAQs, service area, and direct next action.
- Company pages should build trust: about, work, case studies, blogs, reviews, license, contact, and project proof.
- Every public page should have one obvious conversion path: call, consultation form, related service page, or project proof.

## Migration checklist

- Export WordPress XML, media library, SEO metadata, redirects, and form configuration.
- Inventory every indexed URL from the Yoast sitemaps and map it to a new page, preserved page, or closest 301 redirect.
- Download and optimize media into `public/images/`; avoid hotlinking WordPress assets.
- Convert blog posts into Markdown files in `src/content/blog/`.
- Convert service, industry, project, and case-study content into static pages or structured data files.
- Validate lead form delivery with production Cloudflare environment variables.
- Submit the new sitemap to Google Search Console and Bing Webmaster Tools after DNS cutover.
