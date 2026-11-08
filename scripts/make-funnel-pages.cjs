// Writes paste-ready HTML/CSS/JS for the six Systeme.io funnel pages into docs/systeme/pages/.
// Copy matches docs/systeme/BUILD-KIT.md and the website's content files. Run from the repo root: node scripts/make-funnel-pages.cjs .
const fs = require("fs");
const root = process.argv[2];
const out = `${root}/docs/systeme/pages`;
fs.mkdirSync(out, { recursive: true });

const SITE = "https://www.ayaugc.com"; // the website once it is live on the real domain
const START = "7 December 2026";
const logo = Buffer.from(fs.readFileSync(`${root}/public/brand/AYAUGC_Logo_OnDark_Beige-Mint.svg`)).toString("base64");

const css = `/* AYA UGC funnel page styles. Every class starts with "aya-" so nothing clashes with Systeme.io's own styles. */
@import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@400;500;600&display=swap");

:root {
  --aya-beige: #f9f1e4; --aya-mint: #a2d8bf; --aya-ink: #2e2a24; --aya-brown: #6b5f50;
  --aya-pine: #2f5f4e; --aya-pine-hover: #2f5244; --aya-line: #e3d3b4;
}
html, body { background: var(--aya-beige) !important; }
body { color: var(--aya-ink); font-family: "Work Sans", Arial, sans-serif; -webkit-font-smoothing: antialiased; }
*, *::before, *::after { box-shadow: none !important; text-shadow: none !important; }

.aya, .aya * { box-sizing: border-box; }
.aya { font: 400 18px/1.6 "Work Sans", Arial, sans-serif; color: var(--aya-ink); }
.aya p, .aya ul, .aya h1, .aya h2 { margin: 0; }

/* Top bar and footer: Pine, on-dark logo only. */
.aya-bar { background: var(--aya-pine); height: 72px; display: flex; align-items: center; padding: 0 48px; }
.aya-logo { display: inline-block; height: 32px; aspect-ratio: 121 / 32; background: url("data:image/svg+xml;base64,${logo}") left center / contain no-repeat; }
.aya-foot { background: var(--aya-pine); color: var(--aya-beige); padding: 32px 48px; display: flex; flex-wrap: wrap; gap: 8px 24px; align-items: center; font-size: 15px; }
.aya-foot .aya-logo { height: 28px; margin-right: auto; }
.aya-foot a { color: var(--aya-beige); text-underline-offset: 4px; }

/* Text styles from the website's type scale. */
.aya-eyebrow { font: 600 13px/1.3 "Work Sans", Arial, sans-serif; letter-spacing: .16em; text-transform: uppercase; color: var(--aya-pine); }
.aya-h1 { font: italic 400 64px/1.05 "Instrument Serif", Georgia, serif; letter-spacing: -.01em; margin-top: 16px !important; color: var(--aya-ink); }
.aya-h3 { font: 600 24px/1.3 "Work Sans", Arial, sans-serif; }
.aya-h4 { font: 600 18px/1.35 "Work Sans", Arial, sans-serif; }
.aya-body { margin-top: 24px !important; max-width: 34em; }
.aya-supporting { color: var(--aya-brown); font-size: 16px; }
.aya-caption { color: var(--aya-brown); font-size: 13px; line-height: 1.5; }
.aya a { color: var(--aya-pine); text-underline-offset: 4px; }

/* Tick list. */
.aya-list { list-style: none; padding: 0 !important; margin-top: 32px !important; display: grid; gap: 12px; }
.aya-list li { display: grid; grid-template-columns: 24px 1fr; gap: 12px; }
.aya-list li::before { content: ""; width: 20px; height: 20px; margin-top: 4px; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232F5F4E' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E") center / contain no-repeat; }

/* Layout: text left, card right; one column under 720 px. */
.aya-wrap { max-width: 1200px; margin: 0 auto; padding: 64px 48px 80px; display: grid; gap: 48px; grid-template-columns: 1.15fr 1fr; align-items: start; }
.aya-thanks { max-width: 760px; margin: 0 auto; padding: 80px 48px 96px; text-align: center; }
.aya-thanks .aya-body { margin-left: auto !important; margin-right: auto !important; }

/* Cards and panels. */
.aya-card { border-radius: 20px; padding: 32px; }
.aya-card--mint { background: var(--aya-mint); }
.aya-card--outline { background: var(--aya-beige); border: 1px solid var(--aya-line); }
.aya-card--pine { background: var(--aya-pine); color: var(--aya-beige); }
.aya-card--pine .aya-eyebrow { color: var(--aya-beige); }
.aya-card--mint .aya-eyebrow, .aya-card--mint .aya-caption, .aya-card--mint a { color: var(--aya-ink); }
.aya-card--pine .aya-caption, .aya-card--pine .aya-soft { color: var(--aya-beige); opacity: .85; }
.aya-card--pine a { color: var(--aya-beige); }
.aya-bundle { margin-top: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.aya-bundle .aya-card { padding: 24px; }
.aya-tip { margin-top: 32px; background: var(--aya-mint); border-radius: 16px; padding: 24px; }
.aya-tip .aya-eyebrow { color: var(--aya-ink); }
.aya-next { margin-top: 48px; text-align: left; }
.aya-price { font: 600 36px/1.1 "Work Sans", Arial, sans-serif; color: var(--aya-pine); margin-top: 8px !important; }

/* Buttons (also restyles Systeme.io form buttons and fields placed inside .aya cards). */
.aya-btn { display: inline-flex; align-items: center; justify-content: center; min-height: 52px; padding: 0 28px; border-radius: 999px; background: var(--aya-pine); color: #fff !important; font: 600 16px "Work Sans", Arial, sans-serif; text-decoration: none; transition: background-color 250ms cubic-bezier(.2,.7,.2,1), transform 160ms cubic-bezier(.2,.7,.2,1); }
.aya-btn:hover { background: var(--aya-pine-hover); }
.aya-btn:active { transform: scale(.97); }
.aya-btn--beige { background: var(--aya-beige); color: var(--aya-ink) !important; }
.aya-btn--beige:hover { background: var(--aya-line); }
.aya :focus-visible { outline: 2px solid var(--aya-pine); outline-offset: 2px; }
.aya-card--pine :focus-visible { outline-color: var(--aya-mint); }

/* Systeme.io form fields and buttons anywhere on the page. */
input[type="text"], input[type="email"], input[type="tel"], input:not([type]), select, textarea {
  min-height: 48px !important; border: 1px solid var(--aya-brown) !important; border-radius: 12px !important;
  background: var(--aya-beige) !important; color: var(--aya-ink) !important; font: 400 16px "Work Sans", Arial, sans-serif !important; padding: 0 16px !important;
}
input:focus, select:focus, textarea:focus { border-color: var(--aya-pine) !important; outline: 2px solid var(--aya-pine) !important; outline-offset: 0 !important; }
button, [data-test-id="send-form-button"] { border-radius: 999px !important; min-height: 52px; font: 600 16px "Work Sans", Arial, sans-serif !important; }

/* Where a native Systeme.io element goes (only visible when you preview this file on its own). */
.aya-slot { margin-top: 16px; border: 1.5px dashed var(--aya-brown); border-radius: 12px; padding: 20px; font-size: 15px; color: var(--aya-brown); background: rgba(249, 241, 228, .6); }
.aya-card--pine .aya-slot { color: var(--aya-beige); border-color: var(--aya-beige); background: transparent; }

@media (max-width: 719px) {
  .aya { font-size: 16px; }
  .aya-bar, .aya-foot { padding-left: 24px; padding-right: 24px; }
  .aya-wrap { grid-template-columns: 1fr; padding: 40px 24px 64px; }
  .aya-thanks { padding: 56px 24px 72px; }
  .aya-h1 { font-size: 44px; }
  .aya-h3 { font-size: 20px; }
  .aya-card { padding: 24px; }
  .aya-bundle { grid-template-columns: 1fr; }
  .aya-btn { width: 100%; }
}
@media (prefers-reduced-motion: reduce) { .aya *, .aya-btn { transition: none !important; } }`;

// The only script: keeps the footer year current. Everything else (forms, payment, redirects) is Systeme.io's.
const js = `document.querySelectorAll("[data-aya-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });`;

const bar = `<div class="aya aya-bar"><a href="${SITE}/" aria-label="AYA UGC home"><span class="aya-logo" role="img" aria-label="aya.ugc"></span></a></div>`;
const foot = `<footer class="aya aya-foot"><span class="aya-logo" role="img" aria-label="aya.ugc"></span><a href="${SITE}/privacy">Privacy</a><a href="${SITE}/terms">Terms</a><a href="${SITE}/refunds">Refunds</a><span>© <span data-aya-year>2026</span> AYA UGC</span></footer>`;
const slot = (text) => `<div class="aya-slot">${text}</div>`;

// Pages with a native Systeme.io form are split into numbered blocks; thank-you pages are one block.
const pages = [
  {
    file: "1-free-guide-optin.html",
    title: "The beginner's guide to UGC, free · AYA UGC",
    where: "/ugc-guide",
    blocks: [
      ["Top bar", bar],
      ["Left column", `<div class="aya">
  <p class="aya-eyebrow">Free guide</p>
  <h1 class="aya-h1">You can start with the phone you have.</h1>
  <p class="aya-body">A short, honest guide to what UGC is, what brands pay for, and how to film your first sample this week. No followers needed.</p>
  <ul class="aya-list">
    <li>What UGC is, and how it's different from influencing</li>
    <li>What brands actually pay for</li>
    <li>The phone setup I started with</li>
    <li>Three easy formats to film first</li>
    <li>How to share your first samples</li>
  </ul>
</div>`],
      ["Right column, top of the Mint card", `<div class="aya">
  <p class="aya-eyebrow">The beginner's guide to UGC</p>
  <p class="aya-h3" style="margin-top:8px">Where should I send it?</p>
</div>`],
      ["Right column: the existing Systeme.io opt-in form", slot("Native Systeme.io opt-in form: First name, Email, button “Send me the free guide”. Keep its list, tag and redirect.")],
      ["Right column, under the form", `<div class="aya"><p class="aya-caption" style="margin-top:12px">Free. You'll get it by email, and you can unsubscribe anytime. <a href="${SITE}/privacy">Privacy policy</a></p></div>`],
      ["Footer", foot],
    ],
    card: "mint",
  },
  {
    file: "2-free-guide-thank-you.html",
    title: "Thank you · AYA UGC",
    where: "after the guide opt-in",
    blocks: [["Whole page", `${bar}
<div class="aya aya-thanks">
  <p class="aya-eyebrow">You're in</p>
  <h1 class="aya-h1">Check your inbox.</h1>
  <p class="aya-body">The guide is on its way to your email. If it isn't there in a few minutes, look in your spam or promotions folder.</p>
  <div class="aya-card aya-card--pine aya-next">
    <p class="aya-eyebrow">Ready for the full plan?</p>
    <p class="aya-h3" style="margin-top:8px">The 15-Day UGC Creator Challenge starts ${START}.</p>
    <p class="aya-soft" style="margin-top:8px">One lesson a day by email, a WhatsApp community and a 1:1 check-in with me.</p>
    <p style="margin-top:24px"><a class="aya-btn aya-btn--beige" href="${SITE}/challenge#days">See the 15 days</a></p>
  </div>
</div>
${foot}`]],
  },
  {
    file: "3-templates-order.html",
    title: "UGC starter templates · AED 79 · AYA UGC",
    where: "/template",
    blocks: [
      ["Top bar", bar],
      ["Left column", `<div class="aya">
  <p class="aya-eyebrow">UGC starter templates · AED 79</p>
  <h1 class="aya-h1">Charge properly. Get booked again.</h1>
  <p class="aya-body">The four templates I use with real clients, ready to make your own. Look professional from your first message to your first invoice.</p>
  <div class="aya-bundle">
    <div class="aya-card aya-card--outline"><p class="aya-h4">Contract</p><p class="aya-supporting" style="margin-top:4px">Scope, usage rights, revisions and payment terms, so you're covered before you film.</p></div>
    <div class="aya-card aya-card--outline"><p class="aya-h4">Portfolio</p><p class="aya-supporting" style="margin-top:4px">A clean layout to show your best videos to brands.</p></div>
    <div class="aya-card aya-card--outline"><p class="aya-h4">Rate card</p><p class="aya-supporting" style="margin-top:4px">Clear prices, with usage fees separated, so brands know what they're paying for.</p></div>
    <div class="aya-card aya-card--outline"><p class="aya-h4">Pitch <span class="aya-supporting">(bonus)</span></p><p class="aya-supporting" style="margin-top:4px">A ready-to-edit message for reaching out to brands.</p></div>
  </div>
  <div class="aya-tip"><p class="aya-eyebrow">Good to know</p><p style="margin-top:4px">The contract is a starting point, not legal advice. Have it checked for your situation.</p></div>
</div>`],
      ["Right column, top of the outline card", `<div class="aya">
  <p class="aya-eyebrow">Your order</p>
  <p class="aya-h3" style="margin-top:8px">UGC starter templates</p>
  <p class="aya-price">AED 79</p>
  <p class="aya-supporting">One payment · instant download by email</p>
</div>`],
      ["Right column: the existing Systeme.io order form and payment box", slot("Native Systeme.io order form: Full name, Email, the payment box (card details) and the button “Get the templates”. Keep the “Templates” product, AED 79, exactly as it is.")],
      ["Right column, under the payment box", `<div class="aya"><p class="aya-caption" style="margin-top:12px">Secure checkout. By paying you agree to the <a href="${SITE}/terms">Terms</a>. <a href="${SITE}/refunds">Refund policy ›</a></p></div>`],
      ["Footer", foot],
    ],
    card: "outline",
  },
  {
    file: "4-templates-thank-you.html",
    title: "Thank you · AYA UGC",
    where: "after payment",
    blocks: [["Whole page", `${bar}
<div class="aya aya-thanks">
  <p class="aya-eyebrow">Order confirmed</p>
  <h1 class="aya-h1">Your templates are on their way.</h1>
  <p class="aya-body">I've sent the download link to your email. Make them yours: add your name, your prices and your best videos.</p>
  <div class="aya-card aya-card--pine aya-next">
    <p class="aya-eyebrow">Want help using them?</p>
    <p class="aya-h3" style="margin-top:8px">Pricing, contracts and pitching are Days 9 to 13 of the 15-Day Challenge.</p>
    <p style="margin-top:24px"><a class="aya-btn aya-btn--beige" href="${SITE}/challenge">See the challenge</a></p>
  </div>
</div>
${foot}`]],
  },
  {
    file: "5-challenge-waitlist.html",
    title: "Join the waitlist · The 15-Day UGC Creator Challenge",
    where: "/waitlist",
    blocks: [
      ["Top bar", bar],
      ["Left column", `<div class="aya">
  <p class="aya-eyebrow">The 15-Day UGC Creator Challenge · Starts ${START}</p>
  <h1 class="aya-h1">From first deal to fully booked.</h1>
  <p class="aya-body">Fifteen days, one lesson a day by email, a WhatsApp community and a 1:1 check-in with me. For new creators who want a clear plan, and for creators with a few deals who want better rates.</p>
  <ul class="aya-list">
    <li>15 daily ebooks by email, yours to keep</li>
    <li>The challenge WhatsApp community</li>
    <li>A 1:1 check-in call with me during the 15 days</li>
    <li>Pricing, contract and pitching lessons (Days 9 to 13)</li>
  </ul>
  <p class="aya-caption" style="margin-top:24px">This is a skills program, not an income guarantee.</p>
</div>`],
      ["Right column, top of the Pine card", `<div class="aya aya-card--pine" style="background:transparent">
  <p class="aya-eyebrow">Join the waitlist</p>
  <p class="aya-h3" style="margin-top:8px">Hear first when doors open.</p>
  <p class="aya-soft" style="margin-top:8px;font-size:16px">Waitlist members hear first and get early access.</p>
</div>`],
      ["Right column: the existing Systeme.io waitlist form", slot("Native Systeme.io waitlist form: First name, Email, button “Join the waitlist” (Beige button, Ink text on this Pine card). Keep its tag and the redirect to the next step.")],
      ["Right column, under the form", `<div class="aya aya-card--pine" style="background:transparent"><p class="aya-caption" style="margin-top:12px">Free to join, no payment now. <a href="${SITE}/privacy">Privacy policy</a></p></div>`],
      ["Footer", foot],
    ],
    card: "pine",
  },
  {
    file: "6-challenge-waitlist-thank-you.html",
    title: "Thank you · AYA UGC",
    where: "after joining the waitlist",
    blocks: [["Whole page", `${bar}
<div class="aya aya-thanks">
  <p class="aya-eyebrow">You're on the list</p>
  <h1 class="aya-h1">See you on Day 1.</h1>
  <p class="aya-body">I'll email you before doors open, with the link to join. Keep an eye on your inbox.</p>
  <div class="aya-card aya-card--pine aya-next">
    <p class="aya-eyebrow">While you wait</p>
    <p class="aya-h3" style="margin-top:8px">Start with the free beginner's guide to UGC.</p>
    <p class="aya-soft" style="margin-top:8px">What brands pay for, and how to film your first sample this week.</p>
    <p style="margin-top:24px"><a class="aya-btn aya-btn--beige" href="${SITE}/free-guide">Send me the free guide</a></p>
  </div>
</div>
${foot}`]],
  },
];

for (const p of pages) {
  // Preview layout: blocks 2.. sit in the two columns the way they will in the Systeme.io editor.
  let preview;
  if (p.blocks.length === 1) {
    preview = p.blocks[0][1];
  } else {
    const [barB, left, cardTop, form, cardBottom, footB] = p.blocks.map((b) => b[1]);
    preview = `${barB}
<div class="aya aya-wrap">
${left}
<div class="aya-card aya-card--${p.card}">
${cardTop}
${form}
${cardBottom}
</div>
</div>
${footB}`;
  }
  const blocksDoc = p.blocks
    .map(([name, html], i) => `<!-- ===== BLOCK ${i + 1}: ${name} ===== -->\n${html}`)
    .join("\n\n");
  const html = `<!doctype html>
<!--
  ${p.title}  (Systeme.io page: ${p.where})

  HOW TO USE (see docs/systeme/BUILD-KIT.md):
  1. CSS: paste everything inside <style>...</style> below into the page's custom head code
     (Settings > Tracking > head), once per page.
  2. HTML: ${p.blocks.length === 1 ? "paste the BLOCK 1 markup (between the BLOCK comments at the end of this file) into one Raw HTML element." : "build the page as two columns in the editor. Paste each BLOCK at the end of this file into its own Raw HTML element, in order. BLOCK 4 is NOT code: it marks where the existing native Systeme.io form stays."}
  3. JS: paste the <script> below into the page's custom body code (optional: it only keeps the footer year current).
  Open this file in a browser to see the finished page.
-->
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${p.title}</title>
<style>
${css}
</style>
</head>
<body style="margin:0">
${preview}
<script>
${js}
</script>

<template id="aya-blocks">
${blocksDoc}
</template>
</body>
</html>
`;
  fs.writeFileSync(`${out}/${p.file}`, html);
}
fs.writeFileSync(`${out}/funnel.css`, css + "\n");
fs.writeFileSync(`${out}/funnel.js`, `// Optional. Keeps the footer year current on the Systeme.io funnel pages.\n${js}\n`);
console.log(fs.readdirSync(out).join("\n"));
