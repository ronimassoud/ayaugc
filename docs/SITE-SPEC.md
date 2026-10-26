# AYA UGC website · structure and content spec

Build spec for the ayaugc.com rebuild. Read `CLAUDE.md` first: it holds the rules (brand, voice, integrations, codebase). This file holds **what goes on every page, in order, with final copy**. Where this file and the current code disagree, this file wins. Where this file and `CLAUDE.md` disagree, `CLAUDE.md` wins.

Copy conventions used below:
- `[brackets]` = a fact Aya still has to confirm. Render it on the site exactly as written, brackets included, and read it from `src/config/site.ts`, never hard-code it in a page.
- **H1 / H2** = Instrument Serif Italic. **H3 / H4**, body, labels, buttons = Work Sans. One serif statement per section, never a serif paragraph.
- `EYEBROW` = Work Sans 600, caps, +16% tracking, Pine.
- `→ Primary` = Pine button. `→ Secondary` = Ink outline button. `→ Link` = tertiary text link with `›`.
- No em dashes anywhere in site copy (use a full stop, colon or `·`). No exclamation marks in headlines. Never "course", "masterclass", "guaranteed", "passive income".

---

## 0. Build order (for Claude Code)

Do these in order, one commit each. Run `npx tsc -p tsconfig.app.json --noEmit` and `npm run build` after each.

1. **Tokens.** Replace the template theme (`revio-*`, olive `#848B52`, Inter Tight, black hero, gradients, glows, shadows) in `src/index.css` and `tailwind.config.ts` with the brand tokens in section 1. Load the fonts from Google Fonts.
2. **Logo and favicon.** Copy from `brand/AYA UGC - Brand Assets.zip` → `public/brand/`: `AYAUGC_Logo_Accent_Pine.svg` (header), `AYAUGC_Logo_OnDark_Beige-Mint.svg` (footer), `AYAUGC_Mark_Compact_Pine.svg`, `AYAUGC_Mark_Favicon_Small.svg` (favicon). Never retype the wordmark.
3. **Config.** Update `src/config/site.ts` and `src/config/seo.ts` to section 2 and section 12.
4. **Primitives.** Restyle `src/components/site/ui.tsx` and `layout.tsx` to section 3 (header, footer, band, buttons, cards, tip panel, phone frame, day badge, form field, FAQ).
5. **Pages**, in this order: Challenge → Home → Brands → Free guide → Templates → About → Contact → Legal → 404.
6. **QA** against section 14.

Keep: react-router, the `basename` / `BASE_URL` handling, `campaign-tracker.tsx`, `prerender-meta.ts`, the legacy redirects (`/ugc-guide` → `/free-guide`, `/template` → `/templates`), mailto forms.
Remove: any leftover template sections, gradients, glow utilities, drop shadows, left-border accent cards, emoji icons, TikTok links, the "Find your path" page if any trace remains.

---

## 1. Design tokens

Source: `brand/AYA UGC - Brand Assets.zip` → `Design tokens/tokens.css`. Map them into Tailwind so pages use names, never hex values.

```ts
// tailwind.config.ts → theme.extend
colors: {
  beige: "#F9F1E4",      // page background, ~60% of every layout
  mint:  { DEFAULT: "#A2D8BF", hover: "#91C6AE", selected: "#82B69F" },
  ink:   "#2E2A24",      // body text, headlines
  brown: "#6B5F50",      // captions, supporting text
  pine:  { DEFAULT: "#2F5F4E", hover: "#2F5244", active: "#2F473B" },
  line:  "#E3D3B4",      // borders and dividers ONLY, never text
  disabled: { bg: "#E8DFD2", text: "#ABA193" },
  error: "#A33A2B",      // forms only
},
fontFamily: {
  display: ['"Instrument Serif"', "Georgia", "serif"],   // always italic, weight 400
  sans:    ['"Work Sans"', "Arial", "sans-serif"],       // 400 / 500 / 600
  "ar-display": ["Amiri", "serif"],                      // later, Arabic
  "ar-text": ['"IBM Plex Sans Arabic"', "sans-serif"],   // later, Arabic
},
borderRadius: { sm: "12px", lg: "16px", card: "20px", pill: "999px" },
spacing scale: 8, 16, 24, 32, 48, 64, 96 only.
transitionTimingFunction: { brand: "cubic-bezier(0.2,0.7,0.2,1)" },
transitionDuration: { brand: "250ms" },
maxWidth: { content: "1200px", text: "680px" },
```

Type scale (desktop / mobile, px): Display 96/60 · H1 64/44 (lh 1.05) · H2 44/34 (lh 1.1) · H3 Work Sans 600 24/20 · H4 600 18/17 · Body 18/16 lh 1.6 · Supporting (Brown) 16/15 · Eyebrow 13/12 · Caption (Brown, 500) 13/12 · Button 600 16. Numbers in Serif Italic, Pine.

Layout: 12-col grid, gutter 24, margins 24 mobile / 80 desktop, section gap 72 to 96, card padding 24 to 32, one column under 720 px. At least 30% empty Beige. One focal point per section. Space above a heading = 2× space below it.

Text pairs allowed: Ink on Beige · Ink on Mint · white on Pine (buttons) · Pine on Beige (links, labels) · Beige on Pine · Brown on Beige (captions) · Mint on Ink.
Never: Mint text on Beige · Brown body on Mint · any text in Warm Line.

Motion: headlines rise 12 px and fade in (300 ms, ease-out), cards follow (250 ms). No bounce. `prefers-reduced-motion` turns it all off.

---

## 2. `src/config/site.ts`

Replace the current object with this shape. Every bracketed value stays bracketed until Aya confirms it.

```ts
export const site = {
  name: "AYA UGC",                      // in sentences; the logo is aya.ugc
  owner: "Aya Karroum",
  location: "Dubai, UAE",
  domain: "https://www.ayaugc.com",
  email: "[contact@ayaugc.com]",
  instagram: { handle: "@aya.ugc", url: "https://www.instagram.com/aya.ugc" },
  equipmentUrl: "[equipment list link]",
  brandsCount: "100+",                  // must match Instagram
  sinceYear: "[year]",
  replyTime: "[2 working days]",

  challenge: {
    name: "The 15-Day UGC Creator Challenge",
    short: "15-Day Challenge",
    tagline: "From first deal to fully booked",
    // Drives every challenge CTA on the site (see section 4).
    status: "waitlist" as "waitlist" | "early-bird" | "open" | "closed",
    price: "[AED price]",
    earlyBirdPrice: "[AED early-bird price]",
    startDate: "[start date]",
    closeDate: "[doors-close date]",
    minutesPerDay: "[20 to 30]",
    checkoutUrl: "[Systeme.io checkout URL]",
    waitlistUrl: "[Systeme.io waitlist opt-in URL]",
  },
  templates: { name: "UGC starter templates", price: "AED 79", checkoutUrl: "[Systeme.io templates checkout URL]" },
  guide: { name: "The beginner's guide to UGC", optInUrl: "[Systeme.io guide opt-in URL]" },
};

export const nav = [
  { label: "For brands", to: "/brands" },
  { label: "15-Day Challenge", to: "/challenge" },
  { label: "Free guide", to: "/free-guide" },
  { label: "Templates", to: "/templates" },
  { label: "About", to: "/about" },
];
```

All Systeme.io URLs open in the same tab and carry through any `utm_*` params already on the page URL.

---

## 3. Global components

### 3.1 Header (every page)
- Left: `AYAUGC_Logo_Accent_Pine.svg`, min 90 px wide, links to `/`, `alt="AYA UGC home"`.
- Centre/right: the five `nav` links in Work Sans 500, Ink, active link Pine with a 1.5 px Pine underline. Labels never wrap (`whitespace-nowrap`). Must fit at 1024 px.
- Right: one Pine pill button.
  - Default: **Join the challenge** → `/challenge` (label follows challenge status, section 4).
  - On `/brands` only: **Request a quote** → `/brands#quote`. Brands stay in their lane.
- Sticky on scroll, Beige background, 1 px Warm Line bottom border once scrolled. No shadow, no blur.
- Mobile (< 720 px): logo + 44 × 44 px menu button (outline icon, Ink, `aria-label="Open menu"`). The menu is a full-height Beige panel with the five links (H3 size, 56 px rows, Warm Line dividers) and the Pine button full width at the bottom.

### 3.2 Announcement band (max one per page)
Pine band, Beige text, 56 px tall, full width, directly under the header. Hidden on `/challenge`, `/brands`, legal pages and when `status === "closed"`.

> **The 15-Day UGC Creator Challenge** · Starts [start date] · Doors close [doors-close date] · [AED price]   `→ Link` See the 15 days ›

Waitlist wording: **The 15-Day UGC Creator Challenge** · Starts [start date] · Waitlist gets early access   `›` Join the waitlist

### 3.3 Footer (every page)
Always Pine. Beige text, Mint for hover.
- `AYAUGC_Logo_OnDark_Beige-Mint.svg`
- Line: **Content that feels real. Skills that are taught honestly.**
- Column "AYA UGC Studio": For brands · Request a quote
- Column "AYA UGC School": 15-Day Challenge · Free guide · Templates
- Column "AYA UGC": About · Contact · Equipment list
- Bottom row: [contact@ayaugc.com] · Dubai, UAE · Instagram (icon + "@aya.ugc") · Privacy · Terms · Refunds · © 2026 AYA UGC
- **No TikTok.** No newsletter box.

### 3.4 Shared primitives (restyle in `ui.tsx`)
| Primitive | Spec |
|---|---|
| `Btn` primary | Pine, white text, pill, 48 to 54 px tall, padding 0 26 px, full width under 720 px. Hover `pine.hover`, active `pine.active`, focus 3 px Mint ring offset 2. Verb first, sentence case, under five words. |
| `Btn` secondary | Transparent, 1.5 px Ink border, Ink text, same size. Hover fill `ink/5`. |
| `Btn` link | Pine text, 600, trailing `›`, underline on hover. |
| `Eyebrow` | see conventions. |
| `Card` studio | No fill, 1 px Warm Line border, radius 20, padding 32. |
| `Card` school | Mint fill, no border, radius 20, padding 32, Ink text. |
| `Tip` | Mint fill, 1.2 px Ink border, radius 16, padding 24. Starts with `TIP` eyebrow in Ink. |
| `Takeaway` | Pine fill, Beige serif italic statement, radius 16. Max one per page. |
| `PhoneFrame` | 9:16, Ink frame 5 px, radius 28 outer, grey placeholder `#E8DFD2` inside with a Brown caption ("Aya filming", etc.) until real video arrives. Video: muted, `playsInline`, captions track, poster image. |
| `DayBadge` | Pill: `DAY` eyebrow + two-digit serif number ("DAY 07"). States: done = Pine fill, today = Mint fill + Ink ring, ahead = Warm Line ring. |
| `Field` | Label above (Work Sans 500, 16 px, Ink), input 48 px, 1 px Brown border, radius 12, focus 2 px Pine, error text `#A33A2B` under the field. Never placeholder-only. |
| `FAQ` | Radix accordion, Warm Line dividers, question Work Sans 600 18 px, `+` outline icon that rotates 45°. |
| Icons | lucide outline, 24 px, stroke 1.75, Pine or Ink. No filled icons. |
| Hand-drawn accents | Max two per page (an irregular circle around a number, a looping arrow). SVG, Ink stroke 3 at 64 px. Optional; skip if none supplied. |

Max three panel types per page (e.g. studio card + school card + tip).

---

## 4. Challenge status → CTAs

One switch in `site.challenge.status` changes the label and target of every challenge CTA (header button, band, home, challenge page, sticky bar).

| Status | When | Primary CTA label | Target | Price line |
|---|---|---|---|---|
| `waitlist` | warm-up, 2 to 3 weeks before | Join the waitlist | `waitlistUrl` | "Price announced [date]" |
| `early-bird` | 48 to 72 h for the waitlist | Join early | `checkoutUrl` | [AED early-bird price] until [date] |
| `open` | doors open, 7 to 10 days | Join the challenge | `checkoutUrl` | [AED price] · Doors close [doors-close date] |
| `closed` | after doors close | Join the waitlist | `waitlistUrl` | "Doors are closed. Join the waitlist for the next cohort." |

Header button on non-brand pages always shows a short form: "Join the waitlist" / "Join early" / "Join the challenge".

---

## 5. Home `/`

Lane: both. Goal: say who Aya is in one screen, then route each visitor.

### 5.1 Hero
Layout: text left (7 cols), three phone frames right (5 cols), stacked on mobile with phones below.
- `EYEBROW` UGC CREATOR · DUBAI · EN & AR
- **H1 (Display size)** UGC that sells, and the skills to make it yourself.
- Body: I'm Aya. I make Arabic and English UGC for brands across the UAE, and I teach creators how to do it properly. [100+] brands so far, and every lesson comes from real client work.
- `→ Primary` Join the challenge (status-driven, section 4)
- `→ Secondary` Request a quote → `/brands#quote`
- Challenge strip under the buttons (Brown caption, 13 px): **15-Day UGC Creator Challenge** · Starts [start date] · [AED price]
- Phones: "Aya filming" · "Hands and product" · "Behind the scenes"

### 5.2 Proof strip
Beige, Warm Line top and bottom border.
- Caption (centred, Brown): Real work for [100+] brands. Shown with each brand's permission.
- 6 phone frames in a row (3 on mobile, horizontal scroll with snap): placeholders labelled by category: Skincare · Food · Home · Fashion · Tech · Fitness. Replace with real clips only when permission is in writing. No brand logos until then.

### 5.3 Two-lane chooser
- **H2** Where are you starting?
- Two cards side by side:

| Studio card (outlined) | School card (Mint) |
|---|---|
| `EYEBROW` AYA UGC STUDIO · FOR BRANDS | `EYEBROW` AYA UGC SCHOOL · FOR CREATORS (Ink, not Pine, on Mint) |
| **H3** Content that feels real and is built to sell. | **H3** Learn it the way I do it. |
| UGC videos for ads and organic, in English or Arabic. Strategy, scripts and creators handled. | Real steps, real samples, no hype. Start free, or go all in with the 15-Day Challenge. |
| `→ Secondary` Request a quote | `→ Primary` See the challenge |

Whole card is clickable; focus ring on the card.

### 5.4 Challenge feature
Pine section is not allowed here (band already used), so Beige with a Mint school card on the right.
- `EYEBROW` THE 15-DAY UGC CREATOR CHALLENGE
- **H2** From first deal to fully booked.
- Body: Fifteen days, one clear system. Whether you've never been paid for a video or you've done a few deals and want better rates, you'll finish with:
- Checklist (Pine check icons):
  - A niche and the formats brands in it buy
  - Hooks and scripts you can reuse
  - [number] portfolio videos, filmed and edited on your phone
  - A price list, and the confidence to talk about usage fees
  - A UAE prospect list and pitches ready to send
  - A 30-day plan for what comes next
- Right side: `DayBadge` row preview, Day 01 to Day 15 in three groups labelled CREATE · PACKAGE · GET BOOKED.
- `→ Primary` Join the challenge · `→ Link` See the 15 days › → `/challenge#days`
- Caption: Starts [start date] · [AED price] · This is a skills program, not an income guarantee.

### 5.5 Brands teaser
- `EYEBROW` AYA UGC STUDIO
- **H2** Arabic and English UGC, on brief.
- Three studio cards: 
  - **UGC videos** · Reviews, unboxings, demos and faceless hands-and-product videos for ads and organic.
  - **Strategy and scripting** · Angles and hooks matched to your product, written to sound like a real person.
  - **Creator selection** · Need more faces? I find, brief and manage the right creators.
- Four steps (serif Pine numbers): 01 Brief · 02 Concepts and scripts · 03 Filming and editing · 04 Delivery and revisions
- `→ Secondary` See brand services → `/brands`

### 5.6 About Aya
Portrait in a rounded frame (radius 20) left, text right.
- `EYEBROW` MEET AYA
- **H2** Like a capable older sister who has done it.
- Body: [Two or three sentences from Aya in her own words: how she started, what she does now.] I still film for brands every week, so what I teach is what's working right now, not what worked three years ago.
- `→ Link` Read my story › → `/about`

### 5.7 Free resources
- **H2** Not ready for the challenge yet?
- Two school cards:
  - `EYEBROW` FREE GUIDE · **H3** The beginner's guide to UGC · What UGC is, what brands pay for, and how to film your first sample this week. · `→ Secondary` Send me the free guide → `/free-guide`
  - `EYEBROW` TEMPLATES · AED 79 · **H3** UGC starter templates · The contract, portfolio, rate card and pitch I use with real clients. · `→ Secondary` Get the templates → `/templates`

(Two secondary buttons in one section is fine; there is no primary here.)

### 5.8 Testimonials
**Do not render** until real, consented quotes exist. Keep the component behind `site.testimonials.length > 0`.

---

## 6. 15-Day Challenge `/challenge`

Lane: School. One goal: the challenge CTA. No announcement band. Mobile sticky bar on.

### 6.1 Hero (offer, date and price on one mobile screen at 375 × 667)
Pine is the lead colour on this page. Hero on Beige, with the serif "15" signature.
- Lockup: large Pine serif italic **15** + `EYEBROW` DAY UGC CREATOR CHALLENGE (stacked, as in brand guidelines p. 35). Use type, not an image.
- **H1** From first deal to fully booked.
- Body: Fifteen days, one lesson a day by email, a WhatsApp community and a 1:1 check-in with me. For new creators who want a clear plan, and for creators with a few deals who want better rates.
- Meta row (pills, Warm Line ring, Ink text): Starts [start date] · [20 to 30] min a day · [AED price]
- `→ Primary` Join the challenge (status-driven)
- Caption: Doors close [doors-close date] · Refund policy › · This is a skills program, not an income guarantee.

### 6.2 The problem
- **H2** Sound familiar?
- Three studio cards, each one quote in Work Sans 600 20 px (not serif: only one serif per section):
  - "I don't know what to film or who to film it for."
  - "I've done a few videos for free and I don't know how to start charging."
  - "I have samples, but brands never reply to my DMs."
- Line below: Every one of these has a fix, and it's a skill you can learn.

### 6.3 What you'll have by Day 15
- **H2** What you'll have by Day 15
- Six items in a 3 × 2 grid (icon + H4 + one line):
  - **A niche** · and the formats brands in it pay for.
  - **Hooks and scripts** · a reusable way to write the first three seconds.
  - **Portfolio videos** · [number] videos filmed and edited on your phone in CapCut.
  - **A portfolio page** · on the platforms brands actually check.
  - **Your prices** · including usage fees, barter rules and contract basics.
  - **A pipeline** · a UAE prospect list, pitches sent and a 30-day plan.

### 6.4 The 15 days (`id="days"`)
- **H2** The 15 days
- Supporting: Three phases. One lesson a day. Each one is an ebook you keep.
- Three columns (stack on mobile), each a phase with an eyebrow and five or seven rows. Each row: `DayBadge` (ahead state) + H4 title + one-line description in Brown.

**CREATE · craft the content**
| Day | Title | Line |
|---|---|---|
| 01 | The UGC business | What UGC is, who buys it and how creators get paid. |
| 02 | Your niche | Pick the categories that suit you and that brands are spending on. |
| 03 | Hooks and scripts | Write the first three seconds, then the rest. |
| 04 | Filming basics | Light, sound and framing with the phone you have. |
| 05 | B-roll and faceless | Hands, product and cutaways for creators who'd rather not show their face. |
| 06 | CapCut editing | Cut, caption and export a clean video in CapCut. |
| 07 | Portfolio video | Plan, film and finish a portfolio piece from start to end. |

**PACKAGE · price and protect**
| 08 | Portfolio and platforms | Put your samples where brands look. |
| 09 | Pricing and barter | What to charge, what usage fees are, and when free product is worth it. |
| 10 | Contracts and UAE permits | What belongs in a UGC contract, and what UAE creators need to know about permits. |

**GET BOOKED · find and win brands**
| 11 | Personal brand | Make your profile bring work in. |
| 12 | UAE prospecting | Find brands in the UAE that are hiring creators. |
| 13 | Pitching | Write a pitch that gets a reply. |
| 14 | Negotiation | Handle "what's your rate?" and "can you do it for less?". |
| 15 | 30-day growth plan | What to do in the month after the challenge. |

- `Tip` panel under the grid: **TIP** You don't need followers to do UGC. Brands pay for the content, not your audience.
- `→ Primary` Join the challenge

### 6.5 How it works
- **H2** How it works
- Four steps in a row (serif Pine numbers 01 to 04, H4, line):
  - **01 Register** · Join through a secure checkout. You'll get a confirmation email straight away.
  - **02 Join the community** · I add you to the challenge WhatsApp community before Day 1.
  - **03 One ebook a day** · Each morning for 15 days, the day's ebook lands in your inbox. Download it and keep it.
  - **04 Your 1:1 check-in** · Once during the 15 days, I check in with you personally to look at your progress and plan your next step.
- Caption: About [20 to 30] minutes a day. Miss a day and catch up later; the ebooks are yours.

### 6.6 Meet Aya
- Two phone frames ("Aya filming", "Client work") left, text right.
- `EYEBROW` WHO'S TEACHING
- **H2** I teach what I do every week.
- Body: I'm Aya, a bilingual UGC creator in Dubai. I've made content for [100+] brands, in English and Arabic. [One or two sentences from Aya on how she started.] This challenge is the plan I wish I'd had.
- `→ Link` Read my story › → `/about`

### 6.7 For you / not for you
Two studio cards.
- **H3** This is for you if
  - You're starting from zero and want a clear plan
  - You've done a few deals and want better rates and repeat clients
  - You live in or work with brands in the UAE and GCC
  - You can give it about [20 to 30] minutes a day for 15 days
- **H3** It's not for you if
  - You want a guaranteed income or guaranteed brand deals
  - You're looking for a quick shortcut without filming
  - You won't have time to practise during the 15 days

Use a Pine check icon for "for you" and an Ink `x` outline icon for "not for you" (shape carries the meaning, not colour).

### 6.8 Proof
Only real, consented quotes, with first name and city. Hide the whole section until at least two exist.
- **H2** From creators who've done it

### 6.9 Price and inclusions (`id="join"`)
One centred studio card, max 560 px.
- `EYEBROW` COHORT STARTS [START DATE]
- Price: serif italic Pine, Display size: **[AED price]**
- Supporting: one payment · AED
- Checklist:
  - 15 daily ebooks by email, yours to keep
  - The challenge WhatsApp community
  - A 1:1 check-in call with me during the 15 days
  - CapCut editing lesson (Day 6)
  - Pricing, contract and pitching lessons (Days 9 to 13)
  - Strong graduates get priority consideration for upcoming AYA UGC brand campaigns [Aya to confirm wording]
- Optional add-on line: Add the UGC starter templates (AED 79) at checkout.
- `→ Primary` Join the challenge (full width)
- Caption: Doors close [doors-close date] · Refund policy › · This is a skills program, not an income guarantee.

### 6.10 FAQ
- **H2** Questions
| Q | A |
|---|---|
| Do I need followers? | No. Brands pay UGC creators for the content itself, not for your audience. |
| I've already done a few deals. Is this too basic? | Days 1 to 7 tighten your craft; Days 8 to 15 are about pricing, usage fees, contracts, UAE permits, pitching and negotiation. Most established creators get the most from the second half. |
| I'm shy on camera. | Day 5 covers faceless formats: hands, product and B-roll. Plenty of paid UGC never shows a face. |
| What do I need? | A recent smartphone, the free CapCut app and about [20 to 30] minutes a day. My equipment list is here › (link `equipmentUrl`). |
| How does it work day to day? | One ebook arrives by email each day for 15 days. You read it, do the task, and share questions in the WhatsApp community. |
| When is my 1:1 check-in? | [How the check-in is booked, e.g. you'll get a booking link in your welcome email.] |
| What if I miss a day? | Catch up whenever you like. The ebooks are yours to keep. |
| Is it in English or Arabic? | [Language of the ebooks and community.] |
| Will I make money? | That depends on the work you put in and on the market. This is a skills program, not an income guarantee. |
| Can I get a refund? | Yes, within the refund policy ›. |
| Who do I contact with questions? | Email [contact@ayaugc.com] or send me a DM on Instagram. |

### 6.11 Final CTA
Pine section is allowed here (this page has no band). Beige text.
- **H2** Fifteen days from now, you could be pitching brands.
- Meta: Starts [start date] · [AED price]
- `→ Primary` on Pine: use Beige fill + Ink text variant (white-on-Pine button would vanish). Label: Join the challenge
- `→ Link` (Mint on Pine is allowed for large text only, so use Beige): Not ready? Send me the free guide › → `/free-guide`

### 6.12 Mobile sticky bar
Under 720 px, after the hero scrolls out of view. Beige, 1 px Warm Line top border, 72 px tall, safe-area padding.
Left: "Starts [start date]" (Caption) + "[AED price]" (H4). Right: Pine **Join** button (min 44 px). Hidden when the price card (`#join`) is on screen.

---

## 7. For brands `/brands`

Lane: Studio. No challenge content anywhere on this page except the footer. Header button = Request a quote. Calm, Pine-led, very little Mint (none in cards; Studio cards are outlined).

### 7.1 Hero
- `EYEBROW` AYA UGC STUDIO · FOR BRANDS
- **H1** Content that feels real and is built to sell.
- Body: Need Arabic and English UGC for your next campaign? I script, film and edit on brief, with usage terms agreed up front. Send me your product and timeline.
- `→ Primary` Request a quote → `#quote`
- `→ Link` See recent work › → `#work`
- Right: two phone frames playing real samples (muted, captioned).
- Caption: [100+] brands · English and Arabic · Based in Dubai

### 7.2 Recent work (`id="work"`)
- **H2** Recent work
- 6 to 9 phone frames, grid 3 × 3 desktop / 2 columns mobile. Each: video, category label under it ("Skincare · review"), brand name only with written permission.
- Caption: Shared with each brand's permission. More samples on request.

### 7.3 What I do
- **H2** What I make, and how
- Three studio cards:
  - **UGC videos for ads and organic** · Reviews, unboxings, demos, tutorials, and faceless hands-and-product videos. 9:16, captioned, ready to post or run.
  - **Strategy and scripting** · Hooks and angles matched to your product and audience, in English, Arabic or both.
  - **Creator selection** · When you need more than one face, I find, brief and manage the right creators for your product.
- Line: Categories I work in: [Beauty, skincare, food, home, fashion, tech].

### 7.4 Process
- **H2** How a project runs
- Four steps (serif Pine numbers):
  - **01 Brief** · You share the product, the goal and where the video will run.
  - **02 Concepts and scripts** · I send angles, hooks and scripts for your approval.
  - **03 Filming and editing** · I film and edit, in English, Arabic or both.
  - **04 Delivery and revisions** · Final files with [one] round of revisions included.
- `Tip` panel (the one Mint element on the page): **Usage rights, explained.** Usage rights decide where and for how long you can use the video. Organic posting and paid ads are priced separately, and I agree them with you before we start.

### 7.5 What to expect
Three short facts in a row (H4 + Brown line):
- **Turnaround** · [x working days] from approved script.
- **Languages** · English, Arabic (Gulf and Levantine) [Aya to confirm dialects].
- **Pricing** · Quoted per project, with usage, revisions and payment terms stated on every quote.

### 7.6 Quote form (`id="quote"`)
Two columns: copy left, form right (one column on mobile).
- **H2** Request a quote
- Body: Tell me about the product and what you need. I reply within [2 working days] with ideas and a quote.
- Alternative: Prefer email? [contact@ayaugc.com]
- Fields (labels above, all required unless marked):
  1. Your name
  2. Work email
  3. Brand or website
  4. Product category (select: Beauty and skincare · Food and drink · Home · Fashion · Tech · Health and fitness · Other)
  5. What do you need? (checkboxes: UGC videos · Scripts only · Creator selection · Not sure yet)
  6. Number of videos (select: 1 · 2 to 3 · 4 to 6 · 7+)
  7. Language (checkboxes: English · Arabic)
  8. Where will it run? (checkboxes: Organic social · Paid ads · Website · Not sure yet)
  9. Budget range (select: Under AED [x] · AED [x] to [y] · AED [y] to [z] · Above AED [z] · Not sure yet) [Aya to set bands]
  10. Timeline (select: Within 2 weeks · This month · Next month · Flexible)
  11. Anything else? (textarea, optional)
- `→ Primary` Send my request
- Under button, caption: This opens your email app with everything filled in. Nothing is stored on this site.
- Validation: inline error under the field in `#A33A2B` with an icon; on success, a Pine check message: "Your email app should be open. Hit send and I'll reply within [2 working days]."

---

## 8. Free guide `/free-guide`

Lane: School. Goal: email opt-in. Legacy `/ugc-guide` redirects here.

- Band: yes (section 3.2).
- Hero, two columns: copy left, Mint 3:4 cover mock-up right (`EYEBROW` FREE GUIDE, serif title "The beginner's guide to UGC", logo at the foot, per brand guidelines p. 41).
  - `EYEBROW` FREE GUIDE
  - **H1** You can start with the phone you have.
  - Body: A short, honest guide to what UGC is, what brands pay for, and how to film your first sample this week. No followers needed.
  - `→ Primary` Send me the free guide → `optInUrl`
  - Caption: Free. You'll get it by email, and you can unsubscribe anytime.
- **H2** What's inside [Aya to confirm contents]
  - What UGC is, and how it's different from influencing
  - What brands actually pay for
  - The phone setup I started with
  - Three easy formats to film first
  - How to share your first samples
- `Tip`: **TIP** On Instagram? Comment GUIDE on any of my posts and I'll send it to your DMs.
- Next step, one school card: **Ready for the full plan?** The 15-Day UGC Creator Challenge starts [start date]. `→ Link` See the 15 days ›

---

## 9. Templates `/templates`

Lane: School. Goal: sell the AED 79 bundle. Legacy `/template` redirects here.

- Band: yes.
- Hero, two columns: copy left, Beige-with-Ink-outline 3:4 cover mock-up right (`EYEBROW` TEMPLATES · 4, serif title "UGC starter templates").
  - `EYEBROW` UGC STARTER TEMPLATES · AED 79
  - **H1** Charge properly. Get booked again.
  - Body: The four templates I use with real clients, ready to make your own. Look professional from your first message to your first invoice.
  - `→ Primary` Get the templates → `templates.checkoutUrl`
  - Caption: AED 79 · instant download by email · Refund policy ›
- **H2** What's in the bundle
  Four studio cards in a row (2 × 2 on mobile), each with a 3:4 thumbnail placeholder:
  - **Contract** · Scope, usage rights, revisions and payment terms, so you're covered before you film.
  - **Portfolio** · A clean layout to show your best videos to brands.
  - **Rate card** · Clear prices, with usage fees separated, so brands know what they're paying for.
  - **Pitch** · A ready-to-edit message for reaching out to brands. (Bonus)
- Format line: [File formats, e.g. Canva links and editable PDF.]
- FAQ (three items): Can I edit them? · [Answer.] / Is the contract legal advice? · No. It's a starting point. Have it checked for your situation. / How do I get them? · You'll get an email with the download right after checkout.
- Next step, one school card: **Want help using them?** Pricing, contracts and pitching are Days 9 to 13 of the 15-Day Challenge. `→ Link` See the challenge ›

---

## 10. About `/about`

Lane: both.

- Band: yes.
- Hero: portrait (window light) right in a radius-20 frame.
  - `EYEBROW` ABOUT
  - **H1** Hi, I'm Aya.
  - Body: I'm a bilingual UGC creator based in Dubai. I make content for brands in English and Arabic, and I teach creators how to do the same, honestly.
- Story section (text block max 680 px, Work Sans body, no serif):
  - **H2** How I got here
  - [Paragraph 1, in Aya's words: how she started in UGC.]
  - [Paragraph 2: what she learned the hard way, and the moment she started charging properly.]
  - [Paragraph 3: what a working week looks like now.]
- `Takeaway` (Pine, serif italic, the page's one): Brands buy footage, not followers.
- **H2** What I believe
  Five short rows (H4 + line), from the brand values:
  - **Real over polished** · Honest numbers, no fake results.
  - **Craft first** · Hooks, light, scripts and editing are skills, and I teach them properly.
  - **Two languages, one standard** · Arabic is never an afterthought.
  - **Fair pay** · Creators should price properly, and brands should know what they're paying for.
  - **Show, don't promise** · The work is the proof. I'll never promise you an income.
- **H2** My kit
  - Body: Everything I film with is on my equipment list. Nothing borrowed. `→ Link` See my equipment list ›
- Two-lane close (same two cards as Home 5.3).

---

## 11. Contact `/contact`

- No band.
- `EYEBROW` CONTACT
- **H1** Say hello.
- Body: For general questions about the challenge, the guide or the templates. Brands, the quote form gets you a faster answer.
- `→ Link` Brands: request a quote › → `/brands#quote`
- Form (mailto): Your name · Email · What's it about? (select: The 15-Day Challenge · Free guide · Templates · Something else) · Message. `→ Primary` Send a message
- Caption: This opens your email app, ready to send to [contact@ayaugc.com]. I reply within [2 working days].
- Side: Instagram @aya.ugc · Dubai, UAE

### Legal `/privacy` `/terms` `/refunds`
Keep the current draft structure, rename "Aya UGC" to "AYA UGC", text max 680 px, H1 serif, H2s Work Sans 600 (not serif: these are practical). Keep the draft notice as a Mint `Tip` panel: "Draft. Aya reviews this before launch. Last updated [date]."
- Privacy must cover: Systeme.io (contacts, emails, checkout via Stripe), the WhatsApp community (members' numbers are visible to admins and other members [confirm]), the anonymous UTM campaign counter (Supabase), mailto forms (nothing stored on the site), how to unsubscribe and request deletion.
- Terms: add "The 15-Day UGC Creator Challenge is a skills program, not an income guarantee." Replace "challenge content" licensing line with "Ebooks, templates and challenge materials are licensed to you personally and may not be shared or resold."
- Refunds: keep brackets for windows and conditions for the challenge and the templates.

### 404
- **H1** This page took a different turn.
- Body: The link may be old or mistyped.
- `→ Primary` Go home · `→ Link` See the 15-Day Challenge ›

---

## 12. `src/config/seo.ts`

No em dashes. Titles under 60 characters, descriptions under 155.

| Path | Title | Description |
|---|---|---|
| `/` | AYA UGC · UGC creator in Dubai, English and Arabic | Arabic and English UGC for UAE brands, and the 15-Day UGC Creator Challenge for creators who want to learn the craft. |
| `/challenge` | The 15-Day UGC Creator Challenge · AYA UGC | From first deal to fully booked. One lesson a day by email, a WhatsApp community and a 1:1 check-in. Starts [start date]. |
| `/brands` | UGC for brands in the UAE · AYA UGC Studio | UGC videos for ads and organic, in English and Arabic. Strategy, scripting and creator selection from a Dubai creator. |
| `/free-guide` | The beginner's guide to UGC, free · AYA UGC | What UGC is, what brands pay for and how to film your first sample. Free by email. |
| `/templates` | UGC starter templates · AED 79 · AYA UGC | The contract, portfolio, rate card and pitch I use with real clients. Instant download. |
| `/about` | About Aya Karroum · AYA UGC | A bilingual UGC creator in Dubai who makes the content and teaches the method. |
| `/contact` | Contact · AYA UGC | Questions about the challenge, the guide or the templates? Send me a message. |
| `/privacy` `/terms` `/refunds` | Privacy policy / Terms / Refund policy · AYA UGC | [Title] for ayaugc.com. |

`og:image`: still missing (see `roadmap.md`). Leave the slot ready; don't generate one.

---

## 13. Arabic readiness (not at launch)

Build so the Arabic version is a translation job, not a rebuild:
- Use logical properties everywhere (`ms-`/`me-`, `ps-`/`pe-`, `start`/`end`, `text-start`), never `left`/`right`.
- Directional icons (arrows, `›`) flip with `rtl:` variants.
- Put all page copy in per-page objects (e.g. `src/content/home.ts`) so an `ar` file can sit beside each.
- `<html lang dir>` set from the route. Arabic uses Amiri Bold for headlines and IBM Plex Sans Arabic Medium for text, 10 to 15% larger, never italic. Logo and numbers stay as they are.

---

## 14. QA checklist before any push

- [ ] Only brand tokens in use; no `revio-*`, no olive, no Inter Tight, no gradient, shadow or glow anywhere (`grep -ri "gradient\|shadow\|glow\|revio" src`).
- [ ] Every page at 375 px: no horizontal scroll, hero CTA visible without scrolling on `/challenge`.
- [ ] Nav labels on one line at 1024, 1280 and 1440 px.
- [ ] Every button 44 px+ with a visible Mint focus ring; keyboard can reach everything.
- [ ] One primary CTA per section; max one Pine band per page; max three panel types per page.
- [ ] No TikTok. No em dashes (`grep -rn "—" src`). No "course", "masterclass", "guaranteed".
- [ ] "AYA UGC" in sentences; "The 15-Day UGC Creator Challenge" / "15-Day Challenge"; Day badges two digits, running text "Day 7".
- [ ] Challenge page shows: daily ebook by email, WhatsApp community, 1:1 check-in, start date, doors-close date, price, refund link, "This is a skills program, not an income guarantee."
- [ ] `/brands` has no creator product links outside the footer.
- [ ] All bracketed facts come from `site.ts`; no invented testimonials, numbers or logos.
- [ ] Alt text on every image, captions on every video, labels above every field.
- [ ] Deep links work after build: `dist/challenge.html` etc. exist with the right `<title>`; `/ugc-guide` and `/template` still resolve.
- [ ] Reduced motion disables all animation.
- [ ] Aya approves before going public.

---

## 15. Still needed from Aya

Price and early-bird price · start, early-bird and doors-close dates · Systeme.io URLs (checkout, waitlist, guide opt-in, templates) · contact email confirmed · reply time · turnaround and revisions for brands · budget bands for the quote form · categories and dialects · number of portfolio videos by Day 15 · how the 1:1 check-in is booked · challenge language · free guide contents · template file formats · her story (About, Home, Challenge) · portrait and BTS photos · 6 to 9 brand samples with written permission · equipment list link · refund terms · approval of the legal drafts.
