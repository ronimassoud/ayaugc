# AYA UGC website (ayaugc.com)

Project brief for anyone (human or Claude) designing, writing or building the AYA UGC website. It collects what was learned while auditing the old site, rebuilding it, and planning the 15-Day Challenge launch, so a new site structure can start from here instead of from scratch.

**Sources of truth, in order:** (1) decisions recorded in this file, (2) the brand guidelines `brand/AYA UGC - Brand Guidelines.pdf` and tokens in `brand/AYA UGC - Brand Assets.zip` (v1.0, October 2026), (3) the current code. Where the code disagrees with the brand guidelines, the code is out of date.

## 1. Project goal

Turn ayaugc.com into a clear, professional home for Aya's two audiences: brands that want to hire her for UGC, and creators who want to learn how to make it. Each audience gets its own path. The site connects to Systeme.io for checkout and email, and to ManyChat for Instagram. For creators, the 15-Day UGC Creator Challenge is the main offer. The aim is to launch the challenge in **mid to late November 2026** as a smooth, mostly automated experience, promoted **organically through Instagram**, so it grows Aya's audience and revenue without paid ads.

## 2. Who Aya is and who the site serves

- **Aya Karroum**, a working bilingual (English and Arabic) UGC creator based in Dubai, UAE. 100+ brands. Instagram `@aya.ugc`.
- **Positioning:** for UAE brands that need content people trust, and for creators who want to learn the craft, AYA UGC is a working bilingual UGC creator who makes the content and teaches the method.
- **Purpose:** make UGC a real, respected skill in the region: better content for brands, and a fair, well-paid path for the people who make it.
- **Audiences:**
  - *Brands and marketers* (UAE and GCC brands and agencies): want reliability, category experience, Arabic and English delivery, clear rates and usage terms.
  - *New creators* (no paid collaborations yet): want confidence, a clear plan, honest expectations.
  - *Established creators* (some deals): want better rates, repeat clients, a personal brand that brings work in. Challenge copy always names both new and established creators.

### Brand architecture
- Master brand: **AYA UGC** (wordmark `aya.ugc`).
- **AYA UGC Studio**: for brands. UGC videos for ads and organic, strategy and scripting, creator selection.
- **AYA UGC School**: for creators. Free beginner's guide (entry), **The 15-Day UGC Creator Challenge** (flagship), UGC starter templates (AED 79).
- Studio can invite strong challenge graduates into AYA UGC brand campaigns. Always described as "priority consideration for upcoming AYA UGC brand campaigns", never a promised job.

### Naming rules
- In sentences write **AYA UGC**. `aya.ugc` is the logo, not a way of writing the name.
- Studio and School are labels and navigation only, never separate logos.
- Flagship: **The 15-Day UGC Creator Challenge**, short form **15-Day Challenge**, tagline **"From first deal to fully booked"**. Never "the course".
- Products use plain names: "The beginner's guide to UGC", "UGC starter templates".

## 3. The 15-Day Challenge (current, agreed format)

This replaces older drafts that mentioned a member area, live calls, replays, day-7 unlocks or streak bonuses. Do not bring those back.

1. The participant **registers and pays** through a Systeme.io order form (the AED 79 templates bundle can be an order bump).
2. They are **added to a WhatsApp community**.
3. An **email automation sends one ebook a day for 15 days**, which they download and keep as a reference.
4. During the 15 days, **Aya checks in once with each participant individually** for a personalised follow-up (the 1:1 call).
- Fixed-date cohort, target start **mid to late November 2026**. Doors open and close on set dates.
- Always state on the challenge page: daily ebook by email, the WhatsApp community, the 1:1 check-in, start date, doors-close date, price, refund policy link, and "This is a skills program, not an income guarantee."
- **Curriculum** (from the brand guidelines), three phases:
  - CREATE: 01 The UGC business, 02 Your niche, 03 Hooks and scripts, 04 Filming basics, 05 B-roll and faceless, 06 CapCut editing, 07 Portfolio video
  - PACKAGE: 08 Portfolio and platforms, 09 Pricing and barter, 10 Contracts and UAE permits
  - GET BOOKED: 11 Personal brand, 12 UAE prospecting, 13 Pitching, 14 Negotiation, 15 30-day growth plan
  - Day numbers are always two digits on badges (Day 01 to Day 15), "Day 7" in running text.
- **Launch campaign (organic only):** warm-up 2 to 3 weeks before (teach posts, CTA "Join the waitlist"), early-bird window for the waitlist 48 to 72 hours before public open, doors open 7 to 10 days with a fixed doors-close date, final "doors close" reminder.

## 4. Channels and integrations

- **Instagram is the main platform.** Promotion is organic content only; no paid media. **No TikTok** anywhere on the site (this overrides the TikTok link shown in the brand guidelines footer mock-up). Pinterest UTM tracking is still accepted.
- **ManyChat** on Instagram: comment or DM keywords (for example "Comment 15", "Comment GUIDE") send people to the right page, with UTM-tagged links.
- **Systeme.io** runs checkout (Stripe), opt-ins, contacts, tags, email automations and the daily ebook sequence. The website only links out to Systeme.io; never build a second checkout or commerce flow.
- Instagram bio link should point straight to `/challenge` during the sales window.
- **Funnel ladder for creators:** free guide → UGC starter templates (AED 79, also an order bump) → 15-Day Challenge. Brands stay in their own lane: never push brands into creator products. Creator pages link to "For brands" only from the footer and About.

## 5. Recommended site structure

Two lanes from the first screen, the challenge as the creators' lead offer, every page ending in one clear action.

| Page | URL | Lane | Purpose | Primary CTA |
|---|---|---|---|---|
| Home | `/` | Both | Say who Aya is and route each visitor ("I'm a brand" / "I'm a creator") | Join the challenge; secondary: Request a quote |
| 15-Day Challenge | `/challenge` | School | Sell the cohort | Join the challenge (Systeme.io checkout) |
| For brands | `/brands` | Studio | Win UGC projects | Request a quote |
| Free guide | `/free-guide` | School | Capture email | Send me the free guide |
| Templates | `/templates` | School | Sell the AED 79 bundle | Get the templates |
| About | `/about` | Both | Story, credentials, how she works | Join the challenge / Request a quote |
| Contact | `/contact` | Both | Non-sales questions | Send a message |
| Privacy, Terms, Refunds | `/privacy`, `/terms`, `/refunds` | Both | Trust at checkout | None |

- Keep legacy URLs working: `/ugc-guide` → `/free-guide`, `/template` → `/templates` (they existed on the old Systeme.io site and may be shared).
- **Navigation:** logo top left, five links (For brands · 15-Day Challenge · Free guide · Templates · About), one Pine "Join the challenge" button right; sticky on scroll. Mobile: logo plus a 44 px menu button. Labels never wrap onto two lines.
- **Footer:** always Pine with the on-dark logo, contact email, Instagram, equipment list, Privacy, Terms, Refunds.
- **Home, section by section:** hero (who Aya is, the two lanes, challenge strip with date and price) → proof strip of 9:16 phone-frame samples → two-lane chooser (Studio outlined card, School Mint card) → challenge feature (what you'll have by Day 15) → brands teaser (services, four-step process) → about Aya → free resources (guide and templates) → testimonials only once real ones exist.
- **Challenge page:** hero with offer, date and price on one mobile screen → the problem in the reader's words → what you'll have by Day 15 → the 15 days in three phases → how it works (daily ebook, WhatsApp community, 1:1 check-in, time per day) → meet Aya → for you / not for you → proof (only real, consented) → price and inclusions → FAQ → final CTA with "Not ready? Send me the free guide". Sticky "Join" bar on mobile.
- **Brands page:** services, process, 6 to 9 real vertical video samples (with permission), a qualifying quote form (name, work email, brand or website, product category, deliverables, budget range, timeline). Form labels sit above fields, never placeholder-only.
- **Later, not at launch:** Arabic version (the brand is bilingual and "Arabic is never an afterthought", so plan the layout for right-to-left mirroring now), blog if search becomes a channel, an advanced offer for established creators.

## 6. Design system (brand guidelines v1.0)

The current code still uses the purchased template's look (olive `#848B52`, Inter Tight, black hero, gradient and glow tokens named `revio-*`). **Replace it with these tokens.** Full values are in `brand/.../Design tokens/tokens.css` and `tokens.json`.

### Colour
| Token | Hex | Role |
|---|---|---|
| Warm Beige | `#F9F1E4` | Primary background (about 60% of every layout) |
| Mint | `#A2D8BF` | Tips, highlights, School |
| Ink | `#2E2A24` | Body text, headlines |
| Muted Brown | `#6B5F50` | Captions, secondary text |
| Deep Pine | `#2F5F4E` | Accent, buttons, Studio, footer |
| Warm Line | `#E3D3B4` | Borders and dividers only |

- States: Pine hover `#2F5244`, active `#2F473B` with a Mint focus ring; Mint hover `#91C6AE`, selected `#82B69F`; disabled `#E8DFD2` / `#ABA193`; error `#A33A2B` (forms only). Success uses Pine with a check icon.
- Approved text pairs: Ink on Beige, Ink on Mint, white on Pine (buttons), Pine on Beige (links, labels), Beige on Pine, Brown on Beige (captions), Mint on Ink. **Never** Mint text on Beige, Brown body text on Mint, or any text in Warm Line.
- Website mood: calm and Pine-led with little Mint. Challenge: Pine leads, Mint marks the current day. Never use colour as the only signal.

### Type
- **Instrument Serif Italic** (weight 400) for display, H1, H2, numbers and big statements. **Work Sans** 400/500/600 for everything else. Fallbacks: Georgia, serif and Arial, sans-serif. Arabic: Amiri Bold (headlines), IBM Plex Sans Arabic Medium (text), set 10 to 15% larger, never italic.
- Web scale (desktop / mobile, px): Display 96/60, H1 64/44, H2 44/34, H3 Work Sans 600 24/20, H4 600 18/17, Body 18/16 line height 1.6, Supporting (Brown) 16/15, Eyebrow 600 caps +16% tracking in Pine 13/12, Caption (Brown) 13/12, Button 600 16.
- One serif statement, then sans for everything practical. Never a serif paragraph, never two serif blocks side by side.

### Layout, components, motion
- Grid: 12 columns, content max 1200 px, text blocks max 680 px; margins 24 mobile / 80 desktop; section gap 72 to 96; card padding 24 to 32. Spacing only on the 8 px scale: 8, 16, 24, 32, 48, 64, 96. Collapse to one column under 720 px. At least 30% of every layout is empty Beige. One focal point per layout.
- Radius: 12 small, 16 large, **20 for web cards**, full pill for buttons and badges. Strokes 1 to 1.5 px.
- Buttons 48 to 54 px tall, full width on mobile: primary Pine, secondary Ink outline, tertiary text link. Verb first, sentence case, under five words, one primary CTA per section.
- Cards: Studio cards outlined in Warm Line, School cards Mint. Tip panel: Mint with 1.2 px Ink line. Key takeaway: Pine with serif italic. At most one Pine announcement band per page, at most three panel types per page.
- Phone frames (Ink, 4 to 6 px) are the signature device for showing vertical video. Icons: outline, 1.75 stroke at 24 px, Pine or Ink. Max two hand-drawn accents per layout.
- **Avoid:** gradients, drop shadows, glows, left-border accent cards, mixed icon styles, emoji icons.
- Motion: ease-out `cubic-bezier(0.2,0.7,0.2,1)`, 200 to 300 ms, headlines rise 12 px and fade, no bounce; respect reduced motion.
- Accessibility: text 16 px minimum, touch targets 44 px+, visible focus, alt text on every image, captions on every video, works at 375 px wide.

### Logo
- Always use the supplied files in `brand/.../Logo/`; never retype the wordmark. Primary Ink + Pine on light, Beige + Mint on dark (`OnDark`), `Accent_Pine` for the website header, compact mark for avatars, favicon file for under 32 px. Top left on web pages. Minimum 90 px wide on screen.

### Photography
- Only Aya's own photos and video: portrait in window light, behind the scenes, workspace, hands and product, teaching to camera, her real kit. No stock or AI images of Aya or her work. Client footage or brand logos only with written permission. Grey phone-frame placeholders stay until real images arrive.

## 7. Voice and copy rules

- Warm, direct, confident, practical, a little playful. "Like a capable older sister who has done it." Not hype, guru, corporate or salesy.
- First person from Aya ("I"), second person to the reader ("you"). Short sentences, plain words, explain terms (brief, usage rights, hook) the first time.
- **No em dashes**, no exclamation stacks, no all-caps sentences, no emoji in headlines.
- Say "creators", "brands, clients", "paid collaboration, brand deal", "portfolio videos, samples", "skills program, the challenge". Never "course", "masterclass", "passive income", "guaranteed".
- **Never invent** testimonials, results, earnings, student counts or brand logos. Proof numbers must be real, current and match Instagram.
- CTAs: "Join the challenge", "Request a quote", "Send me the free guide", "Comment 15".
- Facts not yet confirmed stay in `[brackets]` on the site so they are easy to spot.

## 8. Lessons from the work so far

- **Old Systeme.io site audit (30 Sep 2026):** every page was set to noindex; the challenge was invisible on the site; an unfinished lorem-ipsum `/course` page was public; checkout legal links went nowhere; brands and creators were mixed on one page with no navigation; the brand form only asked for a name and email; no visible proof; leftover page titles; browser-default fonts; no tracking. The new site must fix every one of these.
- **Deep links and previews:** a static host needs a real HTML file per route, or inner pages return 404 and WhatsApp/Instagram link previews break. `scripts/prerender-meta.ts` writes one per route from `src/config/seo.ts`. Keep page titles and descriptions in that one file. A share image (og:image) is still missing and needs a real photo or brand graphic.
- **Removed on purpose:** the AI "Find your path" page and its edge function. Do not reintroduce it.
- **Menu labels** must stay on one line at every width; with more than five links the desktop menu no longer fits at 1024 px.
- **Placeholders** live in `src/config/site.ts` so they change in one place. Still needed from Aya: challenge price, start and doors-close dates, contact email (guidelines show `contact@ayaugc.com`; the site still shows `[hello@ayaugc.com]`), Systeme.io checkout, templates and opt-in URLs, equipment list link, her story, real photos and video samples, and review of the draft legal text.
- **Privacy:** the policy must mention the WhatsApp community (members' numbers are visible to admins) and the UTM campaign counter.

## 9. Current codebase

- Vite, React 18, TypeScript, Tailwind 3, shadcn/ui (Radix), react-router 6, react-helmet-async. Originally exported from Lovable; Supabase (Lovable Cloud) only stores anonymous campaign visits.
- Key files:
  - `src/config/site.ts`: all site facts, prices, dates, links and placeholders.
  - `src/config/seo.ts`: title and description per page.
  - `src/components/site/layout.tsx`: header, mobile menu, CTA band, footer.
  - `src/components/site/ui.tsx`: shared primitives (`Wrap`, `Section`, `Eyebrow`, `H2`, `Btn`, `PhoneFrame`, `Card`, `PageHero`).
  - `src/pages/`: `home.tsx`, `challenge.tsx`, `brands.tsx`, `simple-pages.tsx` (Free guide, Templates, About, Contact, legal), `not-found.tsx`.
  - `src/components/campaign-tracker.tsx`: records `utm_source=instagram|pinterest` visits.
  - `src/index.css`, `tailwind.config.ts`: design tokens (to be replaced with the brand tokens).
- Forms (brand quote, contact) open the visitor's email app via `mailto`; no backend at launch.
- Hosting: GitHub Pages at https://ronimassoud.github.io/ayaugc/ from `.github/workflows/deploy.yml` on every push to `main`. The site is served under `/ayaugc/`, so asset paths use `import.meta.env.BASE_URL` and the router uses it as `basename`; at the real domain it builds at `/`.
- Commands: `npm install`, `npm run dev` (port 8080; the predev sitemap step needs Bun, or run `npx vite` directly), `npm run build` (also runs the sitemap and per-route HTML scripts), `npx tsc -p tsconfig.app.json --noEmit`, `npm run lint`.
- Local env: `.env.local` needs `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`, or the app shows a blank page.
- The repository is **public**. Never commit pricing proposals, client documents or secrets. The `brand/` folder and `proposal/` folder are not committed.

## 10. Before publishing any page

- Colours from tokens only, approved contrast pairs, works at 375 px, buttons 44 px+ with visible focus.
- Prices, dates and links checked; proof numbers match Instagram; no invented claims.
- Alt text on images, captions on video, labels above form fields.
- One primary CTA per section; no TikTok; no em dashes.
- Aya approves anything public.
