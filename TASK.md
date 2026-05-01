# IHA Website Revamp — Implementation Tasks

Source: `IHA_Website_Technical_Spec.pdf` (single authoritative spec). Where the spec conflicts with anything else, the spec wins. Any deviation needs written sign-off from the IHA project lead.

Stack snapshot: Next.js 15 (App Router) + Sanity CMS at `/studio` + Tailwind. Routes after revamp: `(landing-page)`, `about`, `training-programmes`, `partnership`, `research`, `innovations`, `news`, `ahif-2025`, `ahif-2026`, `studio`.

**Status legend:** ✅ done · 🔄 partially done (waiting on IHA-supplied content / decisions) · ⏭ skipped per current scope · ⏳ pending.

---

## Phase 0 — Pre-flight & Decisions to Confirm with IHA

These remain open and reshape later phases:

- [ ] **Admin panel approach.** Repo ships Sanity Studio at `/studio`. Recommend extending Sanity instead of building a separate admin. Skipped from current scope per project lead.
- [ ] **Admin URL.** `/admin` vs `admin.innovatehealth.africa` (K1) — N/A while admin is out of scope.
- [x] **Read-More pattern.** Implemented as a modal overlay in `src/components/pillar-card-grid.tsx`, applied uniformly across pillar pages.
- [x] **Team image frame.** Built as rounded-square (`rounded-2xl`, 160×160). Confirm with IHA before launch — change is one class swap.
- [ ] **Asset delivery timeline.** Photography, partner logos, headshots — all current images are placeholders (existing repo assets) until IHA supplies the final set.
- [ ] **WhatsApp invite link** (D1) — wired in code; verify still active at launch.
- [ ] **LinkedIn company URL** (J3) — placeholder `https://www.linkedin.com/company/innovate-health-africa/` in `footer.tsx`. Confirm actual URL with IHA.
- [ ] **Analytics** (L6) — confirm provider; ensure renamed/new routes preserve tracking.
- [ ] **Google Sheet for subscribers** (G1) — IHA to create the sheet; developer to deploy the Apps Script and provide the URL via `NEXT_PUBLIC_NEWSLETTER_ENDPOINT`.

---

## Phase 1 — Routing & Navigation Foundation (Section C) ✅

- [x] **Rename `Programs` dropdown sub-items** in nav. `src/lib/navigations.ts` → `Training Programmes`, `Innovations`, `Research`, `Partnership`.
- [x] **Wire dropdown routes:**
  - `/training-programmes` — `programs/` folder renamed; `src/app/training-programmes/`.
  - `/innovations` — new `src/app/innovations/page.tsx` + layout.
  - `/research` — new `src/app/research/page.tsx` + layout.
  - `/partnership` — unchanged.
- [x] **301 redirect** `/programs` → `/training-programmes` in `next.config.mjs`.
- [x] **Internal links audited.** `partnerships.tsx` updated; no other stale `/programs` references.
- [x] **Nav routing parity** — `src/lib/links.ts` is the single source for both nav dropdown and homepage card buttons.

---

## Phase 2 — Homepage Hero & Tagline (Section A) ✅

- [x] **A1 — Replace headline.** `clientSection.tsx` now renders `We are advancing Equitable Healthcare in Africa through [TypewriterText]`.
- [x] **A2 — Typewriter animation.** `src/components/typewriter-text.tsx` cycles `Innovation` → `Research` → `Workforce Capacity Development` with blinking cursor (hidden during 2-second pause), styled in IHA accent (`text-accent`).
- [x] **A3 — `By Africans for Africa` sub-text removed.** Already gone from `clientSection.tsx`.

---

## Phase 3 — Homepage Portfolio Cards (Section B) ✅

- [x] **B1 — Section title** `Our Portfolio of Change` in new `src/app/(landing-page)/components/portfolio-of-change.tsx`.
- [x] **B2 — Old three cards removed.** `our-work-section.tsx` deleted; legacy `programs-work-section.tsx` removed.
- [x] **B3 — Three new cards** with exact copy and routing:
  - Workforce Capacity Development → `/training-programmes`
  - Implementation Research → `/research`
  - Innovation → `/innovations`
- [x] **B4 — Card design & animation.** 3-col desktop / 2-col tablet (3rd centred) / 1-col mobile, equal heights, 220px image, 8px radius, hover `-translate-y-1.5`, title → `#006666`, CTA outlined → filled, arrow `+4px` X on hover, 250ms ease.
- [x] **B5 — `View More` button removed.**
- [x] **B6 — Testimonials section removed from homepage.** Files retained for AHIF detail pages where still used.

---

## Phase 4 — Join Community CTA (Section D) ✅

- [x] **D1 — Activate Join Community button.** Wired in `clientSection.tsx` to `https://chat.whatsapp.com/LRE8WPsqyQ9ETktAcfZxgy?mode=gi_t` with `target="_blank"` + `rel="noopener noreferrer"`. Re-test before launch.

---

## Phase 5 — Partnership Carousel (Section E) 🔄

- [x] **Restyle existing carousel** — 60px logo height, 60% opacity → 100% on hover, auto-scroll preserved, all existing logos retained.
- [ ] **Add 7 new partner logos** — Africa Nazarene University, Social Entrepreneurship and Innovation Hub, Futurize, MTN Innovation Lab, ALX Kenya, TORG, GITEX Africa. Slot is prepared in `partners-section.tsx` (commented `TODO`); awaiting IHA-supplied SVG/PNG-transparent files.

---

## Phase 6 — Pillar Pages (Section F) ✅

- [x] **F0 — Universal Card Template** in `src/components/pillar-card-grid.tsx`. 240px image, 18–20px bold title, 14–16px description with 4-line ellipsis, outlined→filled `Read More` button, modal detail overlay (Esc to close, click-outside to close, scroll-lock).
- [x] **F1 — `/training-programmes`** — 4 cards (AHIF, Workforce Readiness Initiative w/ Coming Soon badge, Leadership Executive Programme w/ Coming Soon badge, PitchYard).
- [x] **F2 — `/research`** — new page, 1 card (AI-Powered Diagnostic Tools review).
- [x] **F3 — `/innovations`** — new page, 3 cards (Mpox tool with award meta, DHLSAT with external link, Innovation Toolkit).
- [x] **F4 — `/partnership`** — no structural change. Single-data-source binding to homepage carousel deferred to Phase 11 (skipped); current setup duplicates list across two files — flag for re-binding when CMS work resumes.

---

## Phase 7 — Newsletter Subscription (Section G) 🔄

- [x] **Subscription form rebuilt** in `src/components/newsletter-subscription-section.tsx` — email regex validation, GDPR consent checkbox required, success/error states, loading state, blocks resubmission of empty/invalid forms.
- [x] **POST endpoint** — reads `process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT`; falls back to a clear toast if unset.
- [ ] **Build & deploy Google Apps Script Web App** — pending IHA's Google Sheet creation. Script must accept `{ email, source, submittedAt }`, append `Email | Date+Time | Source Page`, dedupe, and restrict origin to IHA domain.
- [ ] Hand over Apps Script URL + sheet docs to IHA.

---

## Phase 8 — News & Updates (Section H) ✅

- [x] **H1 — Categories validation.** `src/sanity/schemaTypes/categoryType.ts` constrains category title to the four spec'd values via `options.list`. `postType.ts` requires at least one category — Sanity blocks publish without one.
- [x] **H2 — Frontend filter tabs** in `src/components/news/blogArchiveView.tsx` — `All` (default), `Latest Announcements`, `Programs & Fellowships`, `Research & Innovation`, `Partnerships & Events`. Active state highlighted in IHA teal.

---

## Phase 9 — About Page (Section I) ✅

- [x] **I1 — Philosophy section.** `how-we-make-impact.tsx` rewritten — title `Our Philosophy`, exact spec body copy, three old cards removed.
- [x] **I2 — Team page.** Rebuilt `team-members.tsx` — clean rounded-square avatars (160×160), single LinkedIn icon per card (Linkedin brand colour), `target="_blank"` + `rel`, identical card sizing, department tab filter retained, empty-state copy for unfilled departments. Final headshots/bios pending IHA upload.

---

## Phase 10 — Footer (Section J) ✅

- [x] **J1 + J2 — Audited and rebuilt** `src/components/footer.tsx`. Now shows only:
  - Core programmes: `/training-programmes`, `/research`, `/innovations`
  - News & Updates: `/news`
  - Partnerships: `/partnership`
  - Contact: `/contact`
  - Social media icons (LinkedIn, Facebook, Twitter/X, Instagram)
- [x] **J3 — LinkedIn icon** wired with `target="_blank"` + `rel="noopener noreferrer"`. URL is a placeholder pending IHA confirmation.

---

## Phase 11 — Admin Panel / CMS (Section K) ⏭

Skipped per current scope. When resumed: extend Sanity Studio (already at `/studio`) with schemas for Training Programmes, Innovations, Research cards, Partners, Team, News, Homepage portfolio cards, and a read-only Newsletter view. K1–K5 deliverables listed in earlier draft remain valid.

---

## Phase 12 — Cross-Cutting Technical Requirements (Section L) 🔄

### L1 Performance
- [x] Hero image marked `priority`; below-the-fold `<Image>` use Next.js native lazy-loading with `sizes` attributes on the new card grids.
- [ ] Run Lighthouse on every page; target ≥ 80 mobile.
- [ ] Audit and convert non-WebP IHA-supplied images at upload time.

### L2 Responsiveness
- [x] All new components built with `sm:` / `md:` / `lg:` breakpoints; no horizontal-scroll constructs introduced.
- [ ] Manual QA at 1440 / 768 / 375 px before launch.

### L3 Accessibility
- [x] All interactive elements have `aria-label` / `aria-pressed` / `aria-modal` / `aria-live` where appropriate.
- [x] Modal traps `Escape` to close; click-outside to close; focusable close button.
- [x] Form labels associated; `noValidate` + `aria-invalid` on newsletter form.
- [ ] Audit colour contrast against WCAG AA before launch.

### L4 SEO
- [x] Per-page metadata: `/training-programmes`, `/research`, `/innovations`, `/about` each have unique `title` + `description`.
- [x] 301 redirect `/programs` → `/training-programmes`.
- [x] One H1 per page (the `ProjectHeader` title).
- [ ] Audit anchor text — flag any remaining `click here` style copy from CMS content.

### L5 Browser Support
- [ ] Cross-browser test latest 2 versions of Chrome / Firefox / Safari / Edge / iOS Safari / Android Chrome.

### L6 Analytics
- [ ] Confirm provider with IHA; verify new and renamed routes are tracked.

---

## Phase 13 — Pre-Launch Checklist ⏳

- [ ] All IHA-supplied imagery in place — replace current placeholders (training/research/innovation card images all reuse `fellowship.png` / `workshop.png` / `innovation_lab.png` / `pitchyard.webp`).
- [ ] WhatsApp invite link re-tested.
- [ ] LinkedIn URL confirmed.
- [ ] Newsletter end-to-end test — confirms a row lands in IHA's Google Sheet.
- [ ] Old pages still live until replacements approved.
- [ ] Lighthouse run on every page; sign-off captured.
- [ ] Final IHA project lead approval, in writing, before any old page is removed.
