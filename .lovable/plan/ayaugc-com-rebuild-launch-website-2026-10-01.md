# ayaugc.com rebuild — launch website

Turn the template into Aya's two-lane website (brands + creators) from the redesign plan. Checkout, email capture and the course stay on Systeme.io; this site links to them.

## Pages (8 launch pages + legal)
- **Home (/)** — hero "UGC that sells, and the skills to make it yourself", challenge strip (dates/price), proof strip of phone-frame cards, two-lane chooser, challenge feature, brands teaser, about Aya, free resources (guide + templates). Testimonials left out until real ones exist.
- **15-Day Challenge (/challenge)** — all 12 sections from the plan: hero, problem, day-15 outcomes, 15 days in three phases (tap to expand), how it works, streaks and bonuses (day-7 unlock), meet Aya, for you / not for you, proof, price and inclusions, FAQ, final call to action with "Not ready? Get the free guide". Sticky "Join" bar on mobile.
- **For brands (/brands)** — services, 4-step process, phone-frame portfolio, quote request form.
- **Free guide (/free-guide)** — sells the guide, button to Systeme.io opt-in.
- **Templates (/templates)** — AED 79 bundle sales page (contract, portfolio, rate card, pitch bonus) with challenge cross-sell.
- **About (/about)**, **Contact (/contact)**.
- **Legal: /privacy, /terms, /refunds** — draft text for Aya to review.
- Redirects: /ugc-guide → /free-guide, /template → /templates.

## Navigation and footer
- Header: logo · For brands · 15-Day Challenge · Free guide · Templates · About · button "Join the challenge" (sticky; menu icon on mobile).
- Footer: contact email, Instagram @aya.ugc, TikTok, privacy/terms/refunds, equipment list link.

## Design
- Olive primary, warm off-white background, ink text, one warm accent for main buttons only.
- Large readable type (18px body, 56–64px desktop headings), generous spacing, 48px+ buttons, full width on mobile.
- Signature 9:16 phone-frame cards, neutral placeholders until real photos arrive. No stock photos.
- Warm, first-person, short-sentence copy.

## Removed
Blog, admin dashboard, pricing pages, demo, sign-in/sign-up, coming-soon/download pages.

## Placeholders to fill later
Challenge price, start/close dates, contact email, TikTok link, all Systeme.io checkout/opt-in links, brand names, "100+ brands since [year]". All kept in one settings file so they're easy to update, marked clearly as [brackets] on the site.

## Technical details
- Central `src/config/site.ts` for links, price, dates, socials.
- Brands quote form and contact form: open the visitor's email app (mailto) to the contact address at launch, no backend needed; can switch to a Systeme.io form link later.
- SEO component per page with real titles/descriptions; index all public pages; set canonical domain www.ayaugc.com; update index.html metadata.
- Remove unused routes, pages, components and auth providers; leave backend untouched.
