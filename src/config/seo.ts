import { site } from "./site";

// Title and description for every public page. Pages render these through <SEO>, and
// scripts/prerender-meta.ts writes them into static HTML so link previews work without JavaScript.
// No em dashes. Titles under 60 characters, descriptions under 155.
const legal = (title: string, path: string) => ({ title: `${title} · AYA UGC`, description: `${title} for ayaugc.com.`, path });

export const meta = {
  "/": { title: "AYA UGC · UGC creator in Dubai, English and Arabic", description: "Arabic and English UGC for UAE brands, and the 15-Day UGC Creator Challenge for creators who want to learn the craft.", path: "/" },
  "/challenge": { title: "The 15-Day UGC Creator Challenge · AYA UGC", description: `From first deal to fully booked. One lesson a day by email, a WhatsApp community and a 1:1 check-in. Starts ${site.challenge.startDate}.`, path: "/challenge" },
  "/brands": { title: "UGC for brands in the UAE · AYA UGC Studio", description: "UGC videos for ads and organic, in English and Arabic. Strategy, scripting and creator selection from a Dubai creator.", path: "/brands" },
  "/free-guide": { title: "The beginner's guide to UGC, free · AYA UGC", description: "What UGC is, what brands pay for and how to film your first sample. Free by email.", path: "/free-guide" },
  "/templates": { title: "UGC starter templates · AED 79 · AYA UGC", description: "The contract, portfolio, rate card and pitch I use with real clients. Instant download.", path: "/templates" },
  "/about": { title: "About Aya Karroum · AYA UGC", description: "A bilingual UGC creator in Dubai who makes the content and teaches the method.", path: "/about" },
  "/contact": { title: "Contact · AYA UGC", description: "Questions about the challenge, the guide or the templates? Send me a message.", path: "/contact" },
  "/privacy": legal("Privacy policy", "/privacy"),
  "/terms": legal("Terms", "/terms"),
  "/refunds": legal("Refund policy", "/refunds"),
};

export type PagePath = keyof typeof meta;
