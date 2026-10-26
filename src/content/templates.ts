import { site } from "@/config/site";

// Copy for /templates (docs/SITE-SPEC.md section 9).
const tp = site.templates;

export const templatesContent = {
  cover: { eyebrow: "Templates · 4", title: tp.name },
  hero: {
    eyebrow: `${tp.name} · ${tp.price}`,
    title: "Charge properly. Get booked again.",
    body: "The four templates I use with real clients, ready to make your own. Look professional from your first message to your first invoice.",
    cta: "Get the templates",
    caption: `${tp.price} · instant download by email`,
    refund: "Refund policy",
  },
  bundle: {
    title: "What's in the bundle",
    items: [
      { title: "Contract", body: "Scope, usage rights, revisions and payment terms, so you're covered before you film." },
      { title: "Portfolio", body: "A clean layout to show your best videos to brands." },
      { title: "Rate card", body: "Clear prices, with usage fees separated, so brands know what they're paying for." },
      { title: "Pitch", body: "A ready-to-edit message for reaching out to brands. (Bonus)" },
    ],
    formats: tp.formats,
  },
  faq: [
    { q: "Can I edit them?", a: tp.editAnswer },
    { q: "Is the contract legal advice?", a: "No. It's a starting point. Have it checked for your situation." },
    { q: "How do I get them?", a: "You'll get an email with the download right after checkout." },
  ],
  next: {
    title: "Want help using them?",
    body: "Pricing, contracts and pitching are Days 9 to 13 of the 15-Day Challenge.",
    link: "See the challenge",
  },
};
