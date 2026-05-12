# econstruct URL mapping

This file records the phase 1 migration approach for traffic retention.

## Preserve as exact pages

- Core legacy landing pages:
  - `/commercial-construction-los-angeles/`
  - `/office-building-ti-contractor-los-angeles/`
  - `/retail-construction-los-angeles/`
  - `/industrial-manufacturing-construction-los-angeles/`
  - `/construction-management-los-angeles/`
  - `/general-contracting-los-angeles/`
  - `/adu-construction-los-angeles/`
  - `/bar-construction-los-angeles-ca/`
  - `/restaurant-construction-services-los-angeles-build-your-dream-restaurant-with-econstruct/`
  - `/fast-casual-construction-los-angeles/`
  - `/casual-dining-construction-los-angeles-build-your-dream-restaurant-with-econstruct/`
  - `/luxury-home-builders-los-angeles-premier-custom-homes/`
  - `/los-angeles-residential-construction-services/`
  - `/new-home-construction-los-angeles-ca/`
  - `/tiny-home-builders-los-angeles/`
  - `/hillside-lift-construction-los-angeles/`
  - `/construction-projects/`
  - `/construction-case-studies-los-angeles/`
  - `/econstruct-reviews/`
  - `/video/`
  - `/entitlement-expediting/`
  - `/equipment-procurement/`
- Legacy service paths:
  - `/service/*` for preserved WordPress service URLs
- Legacy portfolio paths:
  - `/portfolio/`
  - `/portfolio/*` for the preserved portfolio sitemap URLs
- Legacy article paths:
  - selected ADU, office TI, restaurant, residential, and reputation article slugs preserved as exact blog-style pages

## Consolidate with relevant 301 redirects

- Thin or duplicate service paths continue to redirect to the closest rebuilt service page.
- Category, author, and non-essential WordPress system URLs redirect to the closest relevant hub.
- Unrebuilt long-tail articles continue to redirect to the closest matching service or case-study destination.

## Migration note

Do not expand broad consolidations during launch week. If a preserved page is needed for rankings or backlinks, create the page first and remove its redirect second.

## Live sitemap coverage

- Source checked: `page-sitemap.xml`, `post-sitemap.xml`, `service-sitemap.xml`, `portfolio-sitemap.xml`
- Current live URL inventory: `136` URLs
- Exact rebuilt static pages: `82`
- Relevant redirects: `54`
- Unmapped URLs remaining: `0`

This is the phase 1 threshold for launch: every live indexed page class is either preserved as a real page or mapped to a documented relevant destination.
