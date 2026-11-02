# MMI Almazaya Preschool: Landing Page Build Plan

Status: draft v1, for your review. Written 2 Nov 2026.

## 1. Decisions locked in

| Topic | Decision |
|---|---|
| Brand relationship | Official Modern Montessori International (MMI) franchise, at Al Mazaya Islamic School, Banjarmasin |
| Language | Indonesian primary, English toggle |
| Platform | WordPress custom theme (lightweight, no page-builder dependency) |
| Primary CTA | "Book a school tour" via WhatsApp (click-to-chat with prefilled message) |
| Assets | Real photos of classroom/children, plus logo and brand colours (to be supplied) |
| Design skill | Taste Skill (tasteskill.dev, Leonxlnx/taste-skill, default `design-taste-frontend` v2). Its rules were applied in v2 of this plan; see section 3.7 |

## 2. Research summary

### 2.1 Reference: modern-montessori.com (Singapore)
- Structure: sticky nav with "Book A Tour" button, hero with a single CTA, About blurb, centres list, "Why Choose Us" (six short points), animated counters, two testimonials, an awards wall (~19 logos), footer, floating WhatsApp button.
- Strengths to keep: one clear conversion path (tour booking), WhatsApp access, legacy/trust signals (franchisor since 1989 per MMI Group sources), curriculum credibility.
- Weaknesses to avoid: generic stock-style imagery, logo-wall overload, six identical bullet points with no explanation, vague copy ("Modern Montessori is here for you"), purple used as a flat fill rather than a system.
- Brand clue: the reference theme colour is purple (#7139b7). As a franchise unit, the official palette and logo usage must be confirmed with MMI HQ before we commit.

### 2.2 Client: Al Mazaya Islamic School, Banjarmasin
- Run by Yayasan Swadaya Insan Cendekia; SMP and SMA levels; both accredited A (BAN-S/M).
- Address: Jl. Cempaka Besar No. 57, Kel. Mawar, Banjarmasin Tengah. Phone 0511-3367441, WhatsApp +62 811 5051 123, email almazayaislamicschool.bjm@gmail.com (from the school's public pages; confirm the preschool will use the same numbers).
- Identity: Islam, English and technology; overseas partner programmes; monthly English Talent Show; Market Day; national competition wins.
- Finding: no public information about the MMI preschool unit exists yet. All preschool-specific facts below are placeholders to be confirmed.

### 2.3 Local competitive context
Other Islamic early-years schools in Banjarmasin (for example TK Islam Sabilal Muhtadin, PAUD Terpadu Khalifah, PAUD Tahfidz Bintang Qur'ani) compete on faith values and affordability. A Montessori-method school inside an A-accredited Islamic school is the differentiator. Comparable model elsewhere: Albata Islamic Montessori School in Surabaya.

## 3. Aesthetic direction: "The Prepared Shelf"

### 3.1 Concept
Montessori classrooms are built around the *prepared environment*: low open shelves, wooden materials, one task per tray, everything within a child's reach. The page behaves like that shelf. Content sits in distinct, tactile "trays" at different scales, and the hero is a set of graduated wooden blocks.

This is local as well as Montessori. Banjarmasin is the river city: Barito and Martapura rivers, jukung boats, the floating market, and Sasirangan, the Banjar tie-dye cloth with wave and stripe motifs. Sasirangan gives us a regional pattern language that is Islamic-appropriate (non-figurative) and avoids the generic "Arabesque" look.

### 3.2 Memorable moment (the one bold element)
**Hero: ten graduated blocks** (inspired by Montessori graduated materials) sit in a row at the bottom of the viewport. On load they stack once into a tower or stair, in the MMI brand tone from light to deep. Tapping a block reveals one fact (age range, class size, hours). After the first run there is no further decorative motion. Reduced-motion users get the static stacked arrangement.

Everything else on the page is deliberately quiet.

### 3.3 Palette (4 to 6 named values; to be reconciled with official MMI brand guide)
| Name | Hex | Role |
|---|---|---|
| Barito Indigo | #2E2566 | Ink: headings, body text, deepest block |
| Beech Wood | #D8B58A | Warm neutral: block faces, dividers, photo borders |
| Morning Mist | #F5F3FA | Page background (cool tint, deliberately not cream) |
| Paper White | #FFFFFF | Raised panels |
| MMI Violet (the one accent) | #6A3FB0 | CTA, active block, links; the franchise brand tie-in, desaturated from the reference's #7139b7 |

Rules (revised for Taste Skill): one accent only, saturation under 80%, no glows, no neon, no gradient fills. The ten hero blocks step through tints of the single accent plus Beech Wood instead of introducing new hues. Text on Mist uses Indigo (contrast well above 4.5:1). Gold and teal from v1 are dropped; the Islamic-values section is distinguished by the Sasirangan pattern, not a new colour.

### 3.4 Typography
- Display: **Bricolage Grotesque**, a variable, slightly quirky grotesque with a friendly character. Used at large sizes with tight tracking; the width axis can compress for mobile.
- Body: **Figtree**, round, open and highly legible for parents on phones; 17 to 18px base, line length under 70 characters.
- Arabic (Bismillah, small Quranic phrases): **Amiri**, loaded only if Arabic text is present.
- No all-caps labels, no single-word colour accents in headlines, no numbered markers except the real process steps in section 4.8.

### 3.5 Layout principles
- Left-aligned text throughout; asymmetrical grid (7/5 splits) instead of centred stacks.
- Sections are "trays": soft-cornered panels with varied radii (small on small items, large on big ones), wood-grain-free flat fills.
- Sasirangan wave used only as a section divider and as the footer edge, drawn as inline SVG.
- Photography: real children and classroom materials, warm natural light, cropped tight on hands and materials. Faces of children only with signed parental consent.

### 3.6 Self-critique against the generic defaults
- Not cream plus terracotta: base is a cool mist with indigo and violet.
- Not a SaaS card grid: panels vary in size and content, and the hero is an interaction, not a stat block.
- Not a counters-plus-gradient hero: counters moved to a small trust row lower down.
- Regional specificity (Sasirangan, river) is the differentiator a Singapore reference cannot offer.

### 3.7 How Taste Skill changes this plan
Taste Skill (MIT, 13 SKILL.md files) works as a pipeline: infer the brief, set three dials (defaults Variance 8, Motion 6, Density 4), map to a design system if one fits, build, then pass a hard pre-flight checklist. Applied here:
- **Brief inference:** industry preschool/Islamic education; audience Indonesian parents on phones, often arriving from WhatsApp; mood warm, trustworthy, tactile.
- **Dials for this project:** Variance 6 (asymmetry yes, but readable for parents), Motion 3 (one hero moment, transform/opacity only), Density 3 (generous whitespace, short copy).
- **Single accent, no purple glow:** its ban list targets the generic "AI purple" look. MMI's franchise violet is a real brand colour, so it stays, but flat, desaturated and used sparingly (see 3.3).
- **Banned tells respected:** no em-dashes in copy, no section-number eyebrows, no fake dashboards or screenshots, no identical card grids.
- **Dark mode:** the skill defaults to dual-mode. For a parent-facing preschool page I propose light only at launch, with dark mode as an optional later phase. Please confirm.
- **Stack conflict:** the skill's defaults assume React/Next.js with Tailwind, motion and GSAP. We keep WordPress as you chose, using its rules (type, spacing, motion, bans) in plain CSS/JS. If you prefer to follow the skill fully, Next.js with WordPress as a headless CMS is the alternative.
- **Pre-flight:** the skill's checklist becomes the final QA step in week 3.
- Note: I could only read summaries of the full SKILL.md (GitHub pages weren't fetchable), so exact rule wording should be checked once the skill is installed.

## 4. Page architecture (single long landing page, Indonesian first)

### 4.1 Header
Logo (preschool lockup), anchor links (Program, Metode, Hari di Sekolah, Orang Tua, FAQ), ID/EN toggle, "Jadwalkan Kunjungan" button linking to WhatsApp. Sticky; compacts on scroll.

### 4.2 Hero: the stacking blocks
```
+----------------------------------------------------------+
| logo        Program  Metode  Hari  Orang Tua  FAQ  ID|EN [Jadwalkan Kunjungan]
|                                                          |
|  Anak belajar dengan tangannya,                          |
|  tumbuh dengan akhlaknya.                                |
|  Preschool Montessori di Al Mazaya Islamic School        |
|  [Jadwalkan kunjungan via WhatsApp]  Lihat satu hari ... |
|                                                          |
|   [][][][][][][][][][]  <- ten blocks, stack on load     |
+----------------------------------------------------------+
```
One CTA. A secondary text link scrolls to "Satu hari di kelas".

### 4.3 Montessori + Islamic values (the positioning)
Two-column asymmetrical panel. Left: what Montessori means in plain language (free choice, hands-on materials, mixed-age classroom, teacher as guide). Right: how Islamic values show up daily (doa before activities, adab, short surah memorisation, gratitude practices). Teal accent. Tone: practical, no jargon.

### 4.4 Program (age groups and hours)
Placeholder structure, to be confirmed: age range (MMI Singapore serves 18 months to 6.5 years), half-day vs full-day, class size, student-to-teacher ratio. Presented as three differently sized trays rather than identical cards.

### 4.5 Five learning areas
Practical Life, Sensorial, Language, Mathematics, Culture (the traditional Montessori areas, with MMI's own additions such as phonics and Mandarin immersion if the franchise offers them in Banjarmasin; confirm). Each area: one photo of a real material, one line on what the child learns, one line on what a parent sees at home.

### 4.6 A day at school (the only true sequence)
A horizontal timeline drawn from the school's actual schedule (arrival, work cycle, snack, outdoor, circle and doa, pickup). Numbering or times are legitimate here because it is a real sequence.

### 4.7 Why inside Al Mazaya
Pathway reassurance: A-accredited school, continuity into SMP and SMA, English programme, overseas partner schools, school facilities. Verify every claim with the school before publishing. This replaces the reference's logo wall.

### 4.8 How to join (real process)
1. Message us on WhatsApp. 2. Visit and observe a class. 3. Meet the teacher and trial session. 4. Registration and documents. 5. Start date. Confirm the actual steps with the school office.

### 4.9 Trust row
Small, restrained: MMI global presence (use only figures supplied or published by MMI HQ), accreditation, teacher certification. No awards wall unless MMI HQ authorises the logos.

### 4.10 Parent voices
Two to three short real testimonials with parent consent. If none exist at launch, omit the section instead of inventing quotes; replace with a "Dari kepala sekolah" note.

### 4.11 FAQ
Accordion, 8 to 10 questions: age eligibility, tuition and fees (or "request brochure"), halal meals, class size, toilet training policy, transport, Montessori vs conventional school, readiness for SD, parent involvement, trial class.

### 4.12 Final CTA and location
Map (embedded, lazy-loaded), address, hours, WhatsApp button, phone, email. Footer edge in Sasirangan wave.

### 4.13 Persistent elements
Floating WhatsApp button (mobile-first), cookie/privacy note, language toggle state remembered in localStorage.

## 5. Copy starter (Indonesian first, English toggle)

| Slot | Indonesian | English |
|---|---|---|
| Hero headline | Anak belajar dengan tangannya, tumbuh dengan akhlaknya. | Children learn with their hands and grow in character. |
| Hero sub | Preschool Montessori di Al Mazaya Islamic School, Banjarmasin. | A Montessori preschool at Al Mazaya Islamic School, Banjarmasin. |
| Primary CTA | Jadwalkan kunjungan via WhatsApp | Book a school tour on WhatsApp |
| Secondary link | Lihat satu hari di kelas | See a day in class |
| WhatsApp prefill | Assalamu'alaikum, saya ingin menjadwalkan kunjungan ke MMI Al Mazaya untuk anak saya yang berusia ___ tahun. | Assalamu'alaikum, I'd like to schedule a visit to MMI Al Mazaya for my child, aged ___. |

All copy is draft. It must be reviewed by the school and by a native Indonesian reader. Plain verbs, sentence case, buttons describe what happens next.

## 6. Technical plan (WordPress)

### 6.1 Architecture
- Custom classic theme `mmi-almazaya` (PHP templates, one front page template), no Elementor or heavy builder.
- Editable content through the Customizer or ACF fields so staff can change hours, fees, FAQ and testimonials without code.
- Polylang (free) or a simple dual-field approach for ID/EN. Recommendation: Polylang, with Indonesian as the default URL (`/`) and English at `/en/`.
- Self-hosted fonts (Bricolage Grotesque, Figtree, optional Amiri) for speed and privacy.
- Hero animation: vanilla JS plus CSS transforms, under about 4 KB, no animation library.
- Images: WebP/AVIF with srcset, lazy-loading below the fold, hero image under 150 KB.

### 6.2 WhatsApp CTA
- Link format `https://wa.me/<number>?text=<urlencoded prefilled message>`; number stored in a single theme option.
- Track clicks as an event (GA4 or Plausible) so the school sees how many enquiries come from the page.

### 6.3 SEO and local presence
- Title/meta in Indonesian, with `hreflang` for ID/EN.
- Schema.org `Preschool` / `EducationalOrganization` JSON-LD with address and phone.
- Target queries: "preschool Montessori Banjarmasin", "TK Islam Montessori Banjarmasin", "PAUD Islam Banjarmasin".
- Google Business Profile for the preschool unit (separate listing or category on the school's profile).
- Open Graph image with the block motif for WhatsApp sharing, since links will mostly be shared in WhatsApp groups.

### 6.4 Performance and accessibility targets
- Lighthouse mobile: Performance 90+, Accessibility 95+, Best Practices 95+.
- Visible keyboard focus, `prefers-reduced-motion` respected, 4.5:1 text contrast, alt text on all photos, form-free page (no data collection other than WhatsApp).
- Layout tested at 360px width first, since most parents will arrive from a phone.

### 6.5 Privacy and consent
- Photo and video consent form for any child shown.
- Short privacy notice; analytics configured without personal identifiers.

## 7. Content and photography shot list
- Child pouring water from a small jug (Practical Life).
- Hands on a Pink Tower or graduated blocks (Sensorial).
- Sandpaper letters being traced (Language).
- Golden bead / number rods (Mathematics).
- Globe/puzzle map (Culture).
- Children and teacher in doa circle (faces optional, shot from behind or side).
- Classroom wide shot, showing low shelves.
- Outdoor play area and entrance with the Al Mazaya building.
- Teacher portrait, with certification noted.
- Tip: shoot in natural light between 9 and 11 am; photograph materials and hands where faces are not permitted.

## 8. Timeline (about 4 weeks after assets arrive)
| Week | Work |
|---|---|
| 0 | Confirm answers in section 10; get MMI HQ brand guide; photo shoot scheduled |
| 1 | Design: tokens, hero prototype, mobile wireframes; school review |
| 2 | WordPress theme build; hero interaction; content entry in Indonesian |
| 3 | English translation, SEO, analytics, WhatsApp tracking; accessibility and performance pass |
| 4 | Staging review with the school; fixes; launch; Google Business Profile |

## 9. Risks
- **Brand compliance:** a franchise typically restricts logo, colour and claims. Mitigation: get written brand rules from MMI HQ in week 0; keep the palette tokens swappable.
- **Unverified claims:** accreditation, global numbers and awards must be supplied or approved by the school or MMI. Nothing will be invented.
- **Missing photos at launch:** fall back to illustrated materials in the block style, then swap real photos in.
- **Translation quality:** have a native speaker review both languages.
- **WordPress maintenance:** staff need a one-page editing guide; schedule updates and backups.

## 10. Questions still open
1. Preschool official name and logo files (and the MMI HQ brand guide).
2. Which age groups and programme formats will the Banjarmasin unit open with? (hours, class sizes, ratio)
3. Fees: publish, or "request brochure" through WhatsApp?
4. Which WhatsApp number, and who answers it during which hours?
5. Does the unit offer MMI extras such as Mandarin immersion or phonics mastery?
6. Is the school allowed to show MMI global figures and awards? Who approves them?
7. Hosting and domain: a subdomain of almazayaislamicschool.sch.id, a new domain, or a page inside the existing site?
8. Teacher qualifications and bios you can publish.
9. Parent testimonials available at launch?
10. Target opening date or enrolment deadline (drives the timeline and any urgency copy).

## Sources
- modern-montessori.com (structure, copy and theme colour)
- almazayaislamicschool.sch.id (school identity, programmes, contact)
- Sekolahloka and Aku Pintar school profiles (address, accreditation)
- UIN Antasari repository theses (history of SMP Al Mazaya and local PAUD/TK landscape)
- The Jakarta Post, "Albata combines Montessori method with Islamic values" (comparable model)
- Jobstreet MMI Group company profile (global presence)
