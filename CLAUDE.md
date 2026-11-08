# AYA UGC website (ayaugc.com)

Project brief for anyone (human or Claude) designing, writing or building the AYA UGC website. It collects what was learned while auditing the old site, rebuilding it, and planning the 15-Day Challenge launch, so a new site structure can start from here instead of from scratch.

**Sources of truth, in order:** (1) decisions recorded in this file, (2) the brand guidelines `brand/AYA UGC - Brand Guidelines.pdf` and tokens in `brand/AYA UGC - Brand Assets.zip` (v1.0, October 2026), (3) `docs/SITE-SPEC.md`, the page-by-page structure and copy the current site was built from, (4) the current code. Where the code disagrees with any of these, the code is out of date.

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
- **Navigation:** a Pine bar like the footer, with the on-dark logo (Beige and Mint) top left, five Beige links (For brands · 15-Day Challenge · Free guide · Templates · About; Mint on hover and for the current page), one Beige `onPine` button right; sticky on scroll. The mobile menu panel stays Beige. The button follows the challenge status ("Join the waitlist", "Join early", "Join the challenge") and reads "Request a quote" on `/brands`. The full desktop menu shows from 1024 px; below that, logo plus a 44 px menu button. Labels never wrap onto two lines.
- **Footer:** always Pine with the on-dark logo, contact email, Instagram, equipment list, Privacy, Terms, Refunds.
- **Home, section by section:** hero (who Aya is, the two lanes, challenge strip with date and price) → proof strip of 9:16 phone-frame samples → two-lane chooser (Studio outlined card, School Mint card) → challenge feature (what you'll have by Day 15) → brands teaser (services, four-step process) → about Aya → free resources (guide and templates) → testimonials only once real ones exist.
- **Challenge page:** hero with offer, date and price on one mobile screen → the problem in the reader's words → what you'll have by Day 15 → the 15 days in three phases → how it works (daily ebook, WhatsApp community, 1:1 check-in, time per day) → meet Aya → for you / not for you → proof (only real, consented) → price and inclusions → FAQ → final CTA with "Not ready? Send me the free guide". Sticky "Join" bar on mobile.
- **Brands page:** services, process, 6 to 9 real vertical video samples (with permission), a qualifying quote form (name, work email, brand or website, product category, deliverables, budget range, timeline). Form labels sit above fields, never placeholder-only.
- **Later, not at launch:** Arabic version (the brand is bilingual and "Arabic is never an afterthought", so plan the layout for right-to-left mirroring now), blog if search becomes a channel, an advanced offer for established creators.

## 6. Design system (brand guidelines v1.0)

The site is built on these tokens: they live in `tailwind.config.ts` (colour, font, radius, motion and width names) and `src/index.css` (type scale classes `.display .h1 .h2 .h3 .h4 .supporting .eyebrow .caption .num`). Pages use the token names (`bg-beige`, `text-pine`, `rounded-card`...), never hex values. The purchased template's look (olive `#848B52`, Inter Tight, `revio-*` colours, gradients, glows, shadows) has been removed; do not bring any of it back. Source values are in `brand/.../Design tokens/tokens.css` and `tokens.json`.

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
- Cards: Studio cards outlined in Warm Line, School cards Mint. Tip panel: Mint with 1.2 px Ink line. Key takeaway: Pine with serif italic. At most one announcement band per page, at most three panel types per page.
- Phone frames (Ink, 4 to 6 px) are the signature device for showing vertical video in the brand guidelines; on the site they are borderless 9:16 cards (removed on request). Icons: outline, 1.75 stroke at 24 px, Pine or Ink. Max two hand-drawn accents per layout.
- **Avoid:** gradients, drop shadows, glows, left-border accent cards, mixed icon styles, emoji icons. **One exception, pending Aya's approval:** a soft, slowly drifting wash of brand colour flows behind each page's content, from the hero down to just above the footer (see "Page wash" below). Never on the header, footer, buttons or other cards.
- Motion: ease-out `cubic-bezier(0.2,0.7,0.2,1)`, 200 to 300 ms, headlines rise 12 px and fade, no bounce; respect reduced motion.
- Accessibility: text 16 px minimum, touch targets 44 px+, visible focus, alt text on every image, captions on every video, works at 375 px wide.

### How the site implements this
- **Section rhythm:** `<Section>` gives Beige sections 72 px (mobile) to 96 px (desktop) between their content; Pine and Mint bands get more inner padding. Don't add one-off section padding.
- **Focus:** a 2 px Pine outline on Beige and Mint, Mint on Pine surfaces; Pine buttons get the brand's Mint ring drawn flush (offset 0) so it contrasts with the button. Whole-card links (`Card clickable` + `Btn stretched`) outline the card.
- **Motion:** scroll flow modelled on React Bits AnimatedContent, built in CSS with no library. Once a `<Rise>` block's top is 10% into the viewport, each of its direct children rises 100 px and fades in over 0.8 s (GSAP `power3.out` as `cubic-bezier(0.215,0.61,0.355,1)`), 80 ms apart; it plays once. Add the `stagger` class to a grid or list so its children follow one by one instead of moving as a block. Content is visible by default; only blocks below the fold wait. The animation's fill mode is `backwards`, so once a block has landed, hover lifts and tilts work normally. This is larger and slower than the brand spec (12 px, 200 to 300 ms) and is pending Aya's approval. Buttons dip 1 px on press, link arrows nudge on hover, clickable cards lift 2 px, nav links grow an underline, the mobile menu fades and slides. The challenge price card uses `TiltCard` (`src/components/site/tilt-card.tsx`): it leans toward the cursor in 3D (up to 4 degrees), lifts 1.5% and a soft white sheen follows the pointer; no flip, no shadow, mouse and pen only. All of it switches off under reduced motion.
- **Proof ring (Home):** the proof strip is a slowly turning 3D ring at every width: about 80% of the page width from 720 px, and on phones a wider box whose sides run off the screen so the front cards stay large (`.proof-ring` in `circular-carousel.css`). It is a ring of 9:16 cards with no phone border (`src/components/site/circular-carousel.tsx` and `.css`, ported from React Bits CircularCarousel with no dependencies). It drifts, pauses on hover, can be dragged or turned with the arrow keys, and cards fade into Beige as they turn away. Each card plays a silent 8-second loop of one of Aya's 13 sample videos (`-loop.mp4`, 360x640, about 250 KB, with the cover as poster). Only cards facing the viewer play, and all pause when the ring is off screen. Video cards are flat (`curve={0}`), because a curved card is drawn in 8 strips and would decode its video 8 times. Reduced motion stops the drift, the intro and the loops (posters only). Pending Aya's approval like the other motion.
- **Portrait tilt:** Aya's portrait on Home and About (`src/components/site/aya-portrait.tsx`) uses the same `TiltCard` hover tilt as the challenge price card. Set `site.portraitPhoto` to her photo path; until then it shows a grey 4:5 placeholder.
- **Buttons:** pill buttons (primary, secondary, onPine) stay flat, with no glow. On hover they get a gentler version of the challenge price card effect: they lean toward the cursor (up to 2 degrees, the card goes to 4), lift 2%, and a soft sheen follows the cursor (white on Pine and Beige buttons, capped at 15% so white text on Pine stays above 4.5:1; faint Pine on the outline button). Mouse and pen only. On press they shrink slightly and a light ripple spreads from the pointer. Styles are `.btn-3d` in `src/index.css` (variants `--pine`, `--outline`, `--beige`, applied through `btnPill` in `styles.ts`); the pointer listeners are in `layout.tsx`. Reduced motion keeps them still.
- **Rotating word (About takeaway):** in "Brands buy footage, not followers." the middle word rotates through `about.ts` `takeaway.words` (footage, content, stories) in Mint (`src/components/site/rotating-text.tsx` and `.css`, modelled on React Bits RotatingText, slide effect, rebuilt in CSS without the motion library). Letters slide up and out one by one, the next word slides in, and the gap eases to the new width. Screen readers hear the sentence with the first word; reduced motion shows only the first word.
- **Cover rings (Free guide, Templates):** with a `cta` prop, `ProductCover` shows a spinning ring of the hero call to action ("Send me the free guide", "Get the templates") round an arrow, linking to the same Systeme.io URL as the hero button (inert while it is a placeholder). `src/components/site/circular-text.tsx` and `.css`, modelled on React Bits CircularText and rebuilt without the motion library. One turn takes 20 s; on hover it speeds up 4x and tilts toward the cursor (up to 12 degrees). Ink letters on Mint, Pine on Beige. Reduced motion holds it still.
- **Cards:** every card has the hover tilt from the challenge price card: it leans toward the cursor in 3D (4 degrees on cards and covers, 2 on the wide Tip and Takeaway panels), lifts 1.5% and a soft white sheen follows the pointer, weaker on Pine (`tilt--pine`) so Beige text keeps its contrast. It is built into `Card`, `Tip`, `Takeaway` and `ProductCover` through `useTilt` (`src/lib/use-tilt.ts`) and `TiltGlare`; `TiltCard` wraps anything else (Aya's portrait). Mouse and pen only, off under reduced motion. Cards have no dark outlines: the Tip panel is plain Mint (the brand spec's 1.2 px Ink line was removed on request) and the Beige product cover is outlined in Warm Line like Studio cards. Phone frames have no Ink border either: they are plain 9:16 cards with 20 px corners.
- **Hero drift wall (Home):** the hero media is a drifting 3D wall of 9:16 photo tiles (`src/components/site/drift-wall.tsx` and `.css`, ported from React Bits DriftWall with no dependencies) instead of three phone frames. Four columns drift up and down at slightly different speeds on a tilted plane that leans toward the pointer; the tile under the pointer lifts toward the viewer and its column stops. Tiles are the three hero shots plus the six sample categories, as grey placeholders with captions until Aya's photos arrive (pass `image` on an item). Resting tiles get a light Beige tint, no drop shadow. All four edges fade softly into the page (a 22% ramp left and right, 18% top and bottom), so no tile is cut off. The wall is one image for screen readers; reduced motion stops the drift and the lean.
- **Announcement band:** the challenge band under the header is Ink (not Pine, so it reads apart from the Pine header) with Beige text and a Mint link (Mint on Ink is an approved pair); focus rings on Ink are Mint.
- **Scrolling:** in-page anchors scroll smoothly and stop clear of the 72 px sticky header; a new page starts at the top instantly.
- **Page wash:** `src/components/site/page-wash.tsx` draws soft radial washes of brand colour behind a whole page; pages choose theirs with `<Layout wash="...">`. Each page opens with its own hero colours (Home Mint and Warm Line, Challenge Pine and Mint, Brands Warm Line and Pine with no Mint, Free guide Mint, Templates Warm Line, About Mint and Warm Line, Contact, Legal and 404 lighter), then washes flow down the page every 760 px, alternating sides, in that page's colours. The layer lives inside `<main>` and fades out over its last 240 px, so the sticky header and the footer are never washed. Beige sections are transparent so the wash shows through; Pine and Mint surfaces, cards and inputs stay opaque. Only brand colours, never other hues. Caps keep Brown captions at 4.5:1 anywhere text can sit (Mint 0.42, Warm Line 0.75, Pine 0.14 and never over Mint; flowing washes use Mint 0.34, Warm Line 0.6, Pine 0.1); only the hero's right-hand side behind media reaches Mint 0.55. The drift is transform-only (22 to 30 s) and stops under reduced motion. Re-check text contrast whenever a wash moves or strengthens.
- **Challenge price card:** solid Pine (`Card variant="pine"`), the challenge's lead colour, so it stands out from the wash. Beige text and eyebrow, Beige at 85% for supporting lines and captions, Mint for the large serif price and the check icons (Mint on Pine is approved for large text and icons), the Beige `onPine` button, and a Beige underlined refund link. It keeps the `TiltCard` hover tilt.
- **Media:** Aya's photos and 13 sample videos live in `public/media/` (videos 720x1280 H.264 MP4, about 2 to 7 MB each, with a cover `.jpg` and a small `-sm.jpg` tile; photos as 9:16 tiles plus a 4:5 portrait), listed with their "Category · format" labels in `src/config/media.ts`. They fill the Home drift wall (photos alternating with video stills), the Home proof ring (video covers), the For brands hero (two photos) and Recent work (the first nine videos, playable), the challenge Meet Aya pair and the portrait on Home and About. Convert new originals with `scripts/make-media.cjs` (needs ffmpeg); never commit the originals. Videos still need caption files, and each brand's written permission before going public.

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
- **Placeholders** live in `src/config/site.ts` so they change in one place; pages never hard-code a bracketed value. Confirmed so far: start date 7 December 2026 (moved from 16 November on 7 Nov 2026); the challenge price is not shown anywhere on the site while it is being decided (`site.challenge.price` is a placeholder and nothing reads it); and the live Systeme.io funnels taken from the old site (7 Nov 2026), the contact email contact@ayaugc.com (8 Nov 2026): the free guide opt-in at `/ugc-guide`, the templates order page at `/template` ("Templates", AED 79, one-off), the challenge waitlist sign-up at `/waitlist` (added 7 Nov 2026) and the equipment list (Aya's Amazon wishlist). Still needed from Aya: early-bird price and dates, doors-close date, reply time, the challenge checkout (not built in Systeme.io yet; the old `/course` sales page is unfinished), her story (Home, Challenge, About), brand turnaround, revisions, categories, dialects and budget bands, portfolio video count, how the 1:1 check-in is booked, challenge language, guide contents, template formats, refund terms, real photos and video samples, and review of the draft legal text.
- **Placeholder links stay inert:** a button whose URL is still `[bracketed]` renders normally but goes nowhere (hover shows "Link coming soon"). Setting `site.challenge.status` (`waitlist`, `early-bird`, `open`, `closed`) changes every challenge button's label and target at once.
- **Vite on Windows** sometimes misses a file change made right after another (branch switches, quick multi-file edits) and keeps serving the old version. If the preview looks wrong but the build is fine, restart the dev server.
- **Local ignore rules need a leading slash:** `brand/` in `.git/info/exclude` once also matched `public/brand/`, so the logo files never got committed and the live logos 404'd. Private folders are excluded as `/brand/`, `/proposal/` and `/ebooks/`.
- **Privacy:** the policy must mention the WhatsApp community (members' numbers are visible to admins) and the UTM campaign counter.

## 9. Current codebase

- Vite, React 18, TypeScript, Tailwind 3, Radix (via a few shadcn/ui files), react-router 6, react-helmet-async, lucide-react icons. Originally exported from Lovable; Supabase (Lovable Cloud) only stores anonymous campaign visits. No animation library: motion is CSS plus the small `Rise` component.
- **Config** (`src/config/`):
  - `site.ts`: every site fact, price, date, link and `[placeholder]`, the challenge `status`, Aya's story text, legal placeholders, testimonials (empty until real) and the five `nav` links.
  - `challenge.ts`: `challengeCta()` maps the status to each challenge button's label, Systeme.io URL and price line; `systemeHref()` carries `utm_*` params through to Systeme.io; `isPlaceholder()`.
  - `media.ts`: Aya's photos and sample videos (paths, labels, alt text) for the pages.
  - `seo.ts`: title and description per page (no em dashes; read by `<SEO>` and by `scripts/prerender-meta.ts`).
- **Copy** (`src/content/`): one file per page (`home.ts`, `challenge.ts`, `brands.ts`, `free-guide.ts`, `templates.ts`, `about.ts`, `contact.ts`, `legal.ts`, `not-found.ts`). Pages are layout only and read their words from here, so an Arabic file can sit beside each later. Facts come from `site.ts`, never typed into copy.
- **Pages** (`src/pages/`): `home.tsx`, `challenge.tsx`, `brands.tsx`, `free-guide.tsx`, `templates.tsx`, `about.tsx`, `contact.tsx`, `legal.tsx` (Privacy, Terms, Refunds), `not-found.tsx`. Routes and the legacy redirects are in `src/App.tsx`.
- **Components** (`src/components/site/`):
  - `ui.tsx`: brand primitives: `Wrap`, `Section`, `Rise`, `Eyebrow`, `H1`, `H2`, `Btn` (`primary`, `secondary`, `link`, `onPine`, `linkOnPine`; `systeme` and `stretched` props), `Card` (`studio` or `school`, `clickable`), `Tip`, `Takeaway`, `PhoneFrame`, `DayBadge`, `CheckList`, `Steps`, `MetaPills`, `FAQ`, `ProductCover`, `Field`, `CheckboxGroup`, `FieldError`.
  - `styles.ts`: shared class strings (button variants, form controls, select, submit button).
  - `layout.tsx`: sticky Pine header, mobile menu, Ink announcement band (pages opt in with `<Layout band>`), Pine footer; `<Layout stickyBar>` leaves room for the challenge page's mobile sticky bar.
  - `lane-cards.tsx`: the Studio and School cards on Home and About. `contact-form.tsx`: the contact form and the shared sent message.
- `src/components/campaign-tracker.tsx`: records `utm_source=instagram|pinterest` visits. `src/components/seo.tsx`: per-page head tags.
- `src/lib/`: `mailto.ts` (form-to-email helpers), `in-viewport.ts`, `utils.ts` (`cn`).
- `public/brand/`: the four supplied logo SVGs (header, footer, compact mark, favicon). `src/components/ui/` keeps a handful of shadcn files from the scaffold; most are unused.
- **Systeme.io funnel pages** are styled to match the site with the build kit in `docs/systeme/` (`BUILD-KIT.md` step-by-step editor settings and copy, `brand.css` to paste into each page's head code, `mockups.html` as the visual target, and `pages/` with paste-ready HTML, CSS and JS per funnel page: Raw HTML blocks around the native Systeme.io forms and payment box, all classes prefixed `aya-`). Restyle only: funnels, forms, products, payment box, automations and page addresses stay as they are. Done so far for the free guide, templates and challenge waitlist pages and their thank-you pages; the challenge checkout follows the same kit.
- Forms (brand quote, contact) validate inline, then open the visitor's email app via `mailto`; nothing is stored. No backend at launch.
- Hosting (decided 7 Nov 2026): the website stays on GitHub Pages and will move to `www.ayaugc.com` (bare `ayaugc.com` redirects to it); Systeme.io gets its own subdomain for checkout, the waitlist, opt-ins and email, so visitors see one domain throughout. Systeme.io cannot host this site itself. Deploys run from `.github/workflows/deploy.yml` on every push to `main`. Until the domain is live the site is served at https://ronimassoud.github.io/ayaugc/, under `/ayaugc/`, so asset paths use `import.meta.env.BASE_URL` and the router uses it as `basename`. Setting the repository variable `CUSTOM_DOMAIN` (to `www.ayaugc.com`) makes the next deploy build at `/` for that domain. The sitemap and robots.txt always name `www.ayaugc.com`. **Funnel links:** every Systeme.io URL in `site.ts` is built from one `systeme` constant at the top of the file. It points at the old Systeme.io site (`https://www.ayaugc.com`) today; before the new website takes over `www`, connect `go.ayaugc.com` to Systeme.io, move the funnels to it and change that constant, or `/template` would loop back into the new site's legacy redirect.
- Commands: `npm install`, `npm run dev` (port 8080; the predev sitemap step needs Bun, or run `npx vite` directly), `npm run build` (also runs the sitemap and per-route HTML scripts), `npx tsc -p tsconfig.app.json --noEmit`, `npm run lint` (one known error sits in Lovable's generated `src/integrations/supabase/previewAuthStorage.ts`; leave that file alone).
- Local env: `.env.local` needs `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`, or the app shows a blank page.
- Pushing: the repo belongs to the `ronimassoud` GitHub account. If `git push` returns 403, the GitHub CLI's active account has changed; run `gh auth switch --user ronimassoud`.
- The repository is **public**. Never commit pricing proposals, client documents, ebooks or secrets. The `brand/`, `proposal/` and `ebooks/` folders stay out of git.

## 10. Before publishing any page

- Colours from tokens only, approved contrast pairs, works at 375 px, buttons 44 px+ with visible focus.
- Dates and links checked, no challenge price shown; proof numbers match Instagram; no invented claims.
- Alt text on images, captions on video, labels above form fields.
- One primary CTA per section; no TikTok; no em dashes.
- Aya approves anything public.
