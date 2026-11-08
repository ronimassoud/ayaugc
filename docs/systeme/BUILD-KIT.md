# Systeme.io build kit: free guide, templates and challenge waitlist

How to make the two live Systeme.io funnels look like the new AYA UGC website, without touching what makes them work. Covers the free guide opt-in (`/ugc-guide`), the templates order page (`/template`), the challenge waitlist (`/waitlist`) and the thank-you page after each.

- **Visual target:** open [`mockups.html`](mockups.html) in a browser (it shows all six pages, desktop and phone widths).
- **Style snippet:** [`brand.css`](brand.css), pasted into each page (step 2).
- **Ready-made page code:** [`pages/`](pages/) has one file per page (HTML, CSS and the small optional script). Each file opens in a browser as the finished page and lists, at the end, the numbered blocks to paste into Raw HTML elements, with a marker where the native Systeme.io form or payment box stays. `pages/funnel.css` is the same CSS on its own; it replaces `brand.css` when you use the ready-made blocks. If copy changes, edit `scripts/make-funnel-pages.cjs` and run `node scripts/make-funnel-pages.cjs .` to regenerate them.
- **Source of truth:** the website's tokens in `tailwind.config.ts` and the brand rules in `CLAUDE.md` section 6. If this kit and those disagree, those win.
- **Drafted copy to confirm with Aya:** the "Where should I send it?" form title, the waitlist card's title and early-access line, and all three thank-you pages. Everything else is the website's approved copy.

## Ground rules: what must not change

The funnels already take sign-ups and payments. Restyle only.

- Keep each funnel, its steps, page addresses (`/ugc-guide`, `/template`, `/waitlist`), the opt-in forms and their tags or lists, the "Templates" product (AED 79, one-off), the payment box, and the email automations exactly as they are.
- Safest way to work: **duplicate the page**, restyle the copy, preview it, test it once (sign up with your own email; for the order page use Stripe's test mode if it's set up), then swap the new version in and keep the old one until you're sure.
- Pages stay on `www.ayaugc.com` for now. When they move to `go.ayaugc.com`, the design moves with them; nothing needs rebuilding.

## Step 1: page settings (each of the four pages)

| Setting | Value |
|---|---|
| Page background | Warm Beige `#F9F1E4` |
| Default text colour | Ink `#2E2A24` |
| Content width | 1200 px max, 48 px side padding on desktop, 24 px on phones |
| Page title (browser tab) | Guide: `The beginner's guide to UGC, free · AYA UGC`. Templates: `UGC starter templates · AED 79 · AYA UGC`. Waitlist: `Join the waitlist · The 15-Day UGC Creator Challenge`. Thank-you pages: `Thank you · AYA UGC` |
| Search engines | Leave both on **noindex**: the website is the page Google should find. |
| Favicon | Upload `public/brand/AYAUGC_Mark_Favicon_Small.svg` |

## Step 2: paste the style snippet

1. Open the page's settings and find the custom head code box. In Systeme.io it is usually under the page's **Settings › Tracking** (head code). If you can't find it, your plan may not include custom code: skip this step and set fonts and corners by hand in the editor instead.
2. Paste `<style>`, then the full contents of `brand.css`, then `</style>`.
3. Save and preview. Headlines should switch to the italic serif and buttons to pills.

The snippet only styles general things (page, headings, text, fields, buttons) because Systeme.io's own element class names are generated and change between updates. Always set colours and sizes in the editor too (steps 3 to 5), and treat the snippet as the safety net.

## Step 3: fonts and text sizes

If Instrument Serif and Work Sans are in the editor's font list, choose them there as well. Otherwise the snippet loads them from Google Fonts.

| Element | Font | Desktop / phone | Colour |
|---|---|---|---|
| Headline (one per page) | Instrument Serif, italic, 400 | 64 / 44 px, line height 1.05 | Ink |
| Eyebrow (small label above the headline) | Work Sans 600, capitals, letter spacing 16% | 13 / 12 px | Pine `#2F5F4E` (Ink on Mint) |
| Card title | Work Sans 600 | 24 / 20 px | Ink |
| Body text | Work Sans 400 | 18 / 16 px, line height 1.6 | Ink |
| Supporting text | Work Sans 400 | 16 / 15 px | Muted Brown `#6B5F50` |
| Caption (fine print) | Work Sans 400 | 13 / 12 px | Muted Brown (Ink on Mint) |
| Button | Work Sans 600 | 16 px | White on Pine |

Rules: one serif headline per page, everything else Work Sans. No capitals for whole sentences, no em dashes, no emoji.

## Step 4: building blocks

| Block | Settings |
|---|---|
| **Top bar** | Full-width section, background Pine `#2F5F4E`, 72 px tall. Only the logo `public/brand/AYAUGC_Logo_OnDark_Beige-Mint.svg`, 32 px tall, left-aligned, linking to the website home page. No menu: nothing should pull people away from the form. |
| **Mint card** (guide form) | Background Mint `#A2D8BF`, corners 20 px, padding 32 px (24 on phones), no border, no shadow. |
| **Outline card** (order box, bundle items) | Background Beige, 1 px border Warm Line `#E3D3B4`, corners 20 px, padding 32 px (bundle items 24 px), no shadow. |
| **Tip panel** | Background Mint, corners 16 px, padding 24 px, no border. |
| **Pine panel** (thank-you next step) | Background Pine, corners 20 px, padding 32 px. Text Beige `#F9F1E4`; button Beige with Ink text. |
| **Fields** | 48 px tall, corners 12 px, 1 px border Muted Brown, background Beige, text 16 px Ink. Label **above** each field (Work Sans 500, 15 px), never placeholder-only. Gaps of 16 px between fields. |
| **Button** | Pine `#2F5F4E` background, white text, fully rounded (pill), 52 px tall, full width inside the card, no shadow, no gradient. Hover colour `#2F5244`. |
| **Tick list** | Outline check icon, 20 px, Pine, then the text. 12 px between items. |
| **Footer** | Full-width section, background Pine, padding 32 px. On-dark logo (28 px), then links in Beige: Privacy, Terms, Refunds (to the website's `/privacy`, `/terms`, `/refunds`), and `© 2026 AYA UGC`. |
| **Spacing** | Only these steps: 8, 16, 24, 32, 48, 64, 96 px. 64 px above the main content, 80 px below. |

Never use: drop shadows, glows, gradients, coloured left borders on cards, Mint text on Beige, or any text in Warm Line.

## Step 5: the pages, top to bottom

Two columns on desktop (text left, card right, about 55 / 45), one column on phones with the card under the text.

### 1. Free guide opt-in (`/ugc-guide`)

**Left column**
1. Eyebrow: `Free guide`
2. Headline: `You can start with the phone you have.`
3. Body: `A short, honest guide to what UGC is, what brands pay for, and how to film your first sample this week. No followers needed.`
4. Tick list:
   - What UGC is, and how it's different from influencing
   - What brands actually pay for
   - The phone setup I started with
   - Three easy formats to film first
   - How to share your first samples

**Right column: Mint card with the existing opt-in form**
1. Eyebrow (Ink): `The beginner's guide to UGC`
2. Card title: `Where should I send it?` *(draft)*
3. Fields: First name, Email (keep the form's existing fields if they differ; never remove the email field)
4. Button: `Send me the free guide`
5. Caption (Ink): `Free. You'll get it by email, and you can unsubscribe anytime.` plus a link `Privacy policy` to the website's `/privacy`

Then the footer. The list items are marked `[Aya to confirm contents]` on the website; update both together.

### 2. Free guide thank-you

One centred column, max 760 px.
1. Eyebrow: `You're in`
2. Headline: `Check your inbox.`
3. Body: `The guide is on its way to your email. If it isn't there in a few minutes, look in your spam or promotions folder.` *(draft)*
4. Pine panel: eyebrow `Ready for the full plan?`, title `The 15-Day UGC Creator Challenge starts 7 December 2026.`, line `One lesson a day by email, a WhatsApp community and a 1:1 check-in with me.`, Beige button `See the 15 days` linking to the website's `/challenge#days`.

### 3. Templates order page (`/template`)

**Left column**
1. Eyebrow: `UGC starter templates · AED 79`
2. Headline: `Charge properly. Get booked again.`
3. Body: `The four templates I use with real clients, ready to make your own. Look professional from your first message to your first invoice.`
4. Four outline cards in a 2 by 2 grid (one column on phones), title then supporting text:
   - **Contract**: Scope, usage rights, revisions and payment terms, so you're covered before you film.
   - **Portfolio**: A clean layout to show your best videos to brands.
   - **Rate card**: Clear prices, with usage fees separated, so brands know what they're paying for.
   - **Pitch** (bonus): A ready-to-edit message for reaching out to brands.
5. Tip panel: eyebrow `Good to know`, text `The contract is a starting point, not legal advice. Have it checked for your situation.`

**Right column: outline card around the existing order form**
1. Eyebrow: `Your order`
2. Card title: `UGC starter templates`
3. Price: `AED 79` in Work Sans 600, 36 px, Pine. Not the serif: the headline beside it is already the page's one serif statement, and two serif blocks never sit side by side.
4. Supporting: `One payment · instant download by email`
5. The existing fields and **the existing Systeme.io payment box, unchanged**
6. Button: `Get the templates`
7. Caption: `Secure checkout. By paying you agree to the Terms. Refund policy ›` (links to the website's `/terms` and `/refunds`)

Then the footer.

### 4. Templates thank-you

One centred column, max 760 px.
1. Eyebrow: `Order confirmed`
2. Headline: `Your templates are on their way.`
3. Body: `I've sent the download link to your email. Make them yours: add your name, your prices and your best videos.` *(draft)*
4. Pine panel: eyebrow `Want help using them?`, title `Pricing, contracts and pitching are Days 9 to 13 of the 15-Day Challenge.`, Beige button `See the challenge` linking to the website's `/challenge`.

### 5. Challenge waitlist (`/waitlist`)

The live page is a sign-up form whose buttons read "Join The Waitlist & Save" and move people to the next funnel step. Keep the form, its tag and that redirect; restyle around it. Use sentence case on the button: `Join the waitlist`.

**Left column**
1. Eyebrow: `The 15-Day UGC Creator Challenge · Starts 7 December 2026`
2. Headline: `From first deal to fully booked.`
3. Body: `Fifteen days, one lesson a day by email, a WhatsApp community and a 1:1 check-in with me. For new creators who want a clear plan, and for creators with a few deals who want better rates.`
4. Tick list:
   - 15 daily ebooks by email, yours to keep
   - The challenge WhatsApp community
   - A 1:1 check-in call with me during the 15 days
   - Pricing, contract and pitching lessons (Days 9 to 13)
5. Caption: `This is a skills program, not an income guarantee.`

**Right column: Pine card** (the challenge leads with Pine, as on the website's price card) around the existing form
1. Eyebrow (Beige): `Join the waitlist`
2. Card title (Beige): `Hear first when doors open.` *(draft)*
3. Line (Beige at 85%): `Waitlist members hear first and get early access.` *(draft. No prices on these pages for now; the old button says "& Save", so change it to plain `Join the waitlist` unless Aya confirms a saving)*
4. Fields: First name, Email. On Pine, keep the fields Beige with Ink text so they stand out.
5. Button: **Beige** background, Ink text, pill: `Join the waitlist`
6. Caption (Beige at 85%): `Free to join, no payment now.` plus a `Privacy policy` link to the website's `/privacy` (Beige, underlined)

Focus rings on this card should be Mint, not Pine: set it in the editor if it offers a focus colour.

### 6. Waitlist thank-you

One centred column, max 760 px.
1. Eyebrow: `You're on the list`
2. Headline: `See you on Day 1.` *(draft)*
3. Body: `I'll email you before doors open, with the link to join. Keep an eye on your inbox.` *(draft)*
4. Pine panel: eyebrow `While you wait`, title `Start with the free beginner's guide to UGC.`, line `What brands pay for, and how to film your first sample this week.`, Beige button `Send me the free guide` linking to `/ugc-guide`.

## Step 6: check before going live

- [ ] Opt-ins tested (guide and waitlist): the email arrives and the contact gets the right tag.
- [ ] Order tested (test mode or a refunded live purchase): payment, download email and thank-you page all work.
- [ ] At 375 px wide: no sideways scrolling, buttons full width, headline 44 px, fields easy to tap.
- [ ] Every field has a label above it; the button reads the same as on the website.
- [ ] Colours only from the palette; no shadows or gradients left over from the old design.
- [ ] Privacy, Terms and Refunds links open the website's pages.
- [ ] Aya has approved the drafted copy.

## Later

The same kit covers the challenge checkout, still to be built in Systeme.io. It uses the Pine price card from the website's `/challenge` page as its order box.
