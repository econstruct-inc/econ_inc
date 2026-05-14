# 301 Redirect Map — econstructinc.com → econstructhomes.com

**Status:** Draft — ceeds URL audit to complete  
**Last Updated:** 2026-05-13

---

## Instructions for Cowork

Implement these as Cloudflare Page Rules or `_redirects` file in repo root.

Format for `_redirects` file (Cloudflare Pages):
```
/old-path    /new-path    301
```

---

## Confirmed Redirects

| Source (inc.com) | Destination (homes.com) | Status |
|---|---|---|
| /index | / | ⏳ Pending audit |
| /about | /about | ⏳ Pending audit |
| /services | /services | ⏳ Pending audit |
| /contact | /contact | ⏳ Pending audit |
| /portfolio | /portfolio | ⏳ Pending audit |

---

## Global Catch-All

```
/*    https://econstructhomes.com/:splat    301
```

Add this LAST in the `_redirects` file as a fallback.

---

## Root Domain Redirect (inc.com → homes.com)

Configure at Cloudflare DNS level:
- econstructinc.com → 301 → https://econstructhomes.com
- www.econstructinc.com → 301 → https://econstructhomes.com

---

## ⚠️ Action Required

Run a full URL crawl of econstructinc.com before this map is finalized.  
Tool: Screaming Frog (free up to 500 URLs) or `sitemap.xml` export from WordPress.

Every URL with backlinks must have a 1:1 301 — no exceptions.
