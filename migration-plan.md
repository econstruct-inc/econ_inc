# Econstruct Homes — Migration Plan

**Last Updated:** 2026-05-13  
**PM:** Drew Quevedo  
**Client:** Frank Neimroozi

---

## Phase 1: Foundation (Week 1–2)
- [ ] Export WordPress content (pages, posts, images)
- [ ] Audit all URLs on econstructinc.com (screaming frog or similar)
- [ ] Build complete redirect map (inc.com → homes.com)
- [ ] Set up GitHub repo: drewquevedocom/econstructhomes-site
- [ ] Connect Cloudflare Pages to repo (auto-deploy on push to main)
- [ ] Configure DNS for econstructhomes.com on Cloudflare

## Phase 2: Build (Week 3–5)
- [ ] Antigravity: Rebuild visual layout matching Frank's current aesthetic
- [ ] Claude Cowork: Set up Supabase for lead capture forms
- [ ] Claude Cowork: Implement all 301 redirects in Cloudflare config
- [ ] Cowork: Add sitemap.xml and robots.txt
- [ ] Frank review + sign-off on design

## Phase 3: SEO & Content (Week 6–7)
- [ ] Migrate all page copy to new site
- [ ] Update meta titles + descriptions
- [ ] Implement schema markup (LocalBusiness, Service)
- [ ] Verify all canonical tags point to homes.com
- [ ] Submit new sitemap to Google Search Console

## Phase 4: Launch (Week 8)
- [ ] Final QA pass — all pages, forms, redirects
- [ ] Switch DNS: econstructhomes.com → Cloudflare Pages
- [ ] Monitor Search Console for crawl errors
- [ ] Verify all 301s are firing correctly

## Phase 5: Sunset econstructinc.com (Month 6–9)
- [ ] Keep econstructinc.com live with all 301s for 6 months post-launch
- [ ] Monitor organic traffic transfer in GSC
- [ ] At 6-month mark: evaluate traffic transfer (>90% = proceed with sunset)
- [ ] Final sunset: 410 Gone on all inc.com pages

---

## Timeline Summary

| Phase | Target Date | Status |
|---|---|---|
| Foundation | 2026-05-27 | 🔄 In Progress |
| Build | 2026-06-17 | ⏳ Pending |
| SEO & Content | 2026-07-01 | ⏳ Pending |
| Launch | 2026-07-15 | ⏳ Pending |
| Sunset | 2027-01-15 | ⏳ Pending |

---

## Blockers

- None currently
