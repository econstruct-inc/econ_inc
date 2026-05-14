# SEO Strategy — Econstruct Homes Migration

**Goal:** Transfer 100% of organic equity from econstructinc.com to econstructhomes.com  
**Timeline:** 6–9 month transfer window  
**Last Updated:** 2026-05-13

---

## Core Principle

> A domain migration done right loses zero rankings. A migration done wrong loses 6–12 months of organic traffic. Every decision must protect the equity built on inc.com.

---

## Pre-Launch Checklist

- [ ] Full URL audit of econstructinc.com (Screaming Frog)
- [ ] Export all backlinks pointing to inc.com (Ahrefs/GSC)
- [ ] Document all ranking keywords per page
- [ ] Screenshot current rankings as baseline
- [ ] Verify GSC access for both domains

## Launch Day Checklist

- [ ] All 301s live and verified (test every URL)
- [ ] New sitemap.xml submitted to Google Search Console
- [ ] Google Search Console property added for homes.com
- [ ] Change of address tool NOT needed (different domain, use 301s)
- [ ] Bing Webmaster Tools updated

## Post-Launch Monitoring (First 30 Days)

- [ ] Monitor GSC weekly for crawl errors
- [ ] Check ranking transfer in 2–3 weeks
- [ ] Verify 301s showing in GSC Coverage report
- [ ] Watch for traffic drops on key pages

---

## Target Keywords (To Preserve)

| Keyword | Current Page | Priority |
|---|---|---|
| TBD — needs audit | TBD | HIGH |

---

## Schema Markup Requirements

Add to homepage:
```json
{
  "@type": "LocalBusiness",
  "name": "Econstruct Homes",
  "url": "https://econstructhomes.com",
  "areaServed": "Los Angeles, CA"
}
```

---

## Technical SEO Checklist

- [ ] Canonical tags: all pages point to homes.com
- [ ] robots.txt: allow all on homes.com
- [ ] sitemap.xml auto-generated
- [ ] Page speed: target >90 Lighthouse on Cloudflare Pages
- [ ] Mobile-first: all layouts tested at 375px
- [ ] HTTPS: Cloudflare handles SSL automatically
