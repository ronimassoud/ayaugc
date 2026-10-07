import { site } from "./site";

// Title and description for every public page. Pages render these through <SEO>, and
// scripts/prerender-meta.ts writes them into static HTML so link previews work without JavaScript.
const legal = (title: string, path: string) => ({ title: `${title} | Aya UGC`, description: `${title} for ayaugc.com.`, path });

export const meta = {
  "/": { title: "Aya UGC — UGC that sells, and the skills to make it yourself", description: "Aya creates high-performing UGC for brands and teaches new creators how to land their first deals through the 15-Day UGC Challenge.", path: "/" },
  "/challenge": { title: "15-Day UGC Challenge — your first UGC portfolio in 15 days", description: `One ebook a day by email and a WhatsApp community, guided by Aya. Starts ${site.challenge.startDate}.`, path: "/challenge" },
  "/brands": { title: "UGC for brands — strategy, scripting & creators | Aya UGC", description: "High-performing UGC for ads and organic: strategy, scripting and creator selection by Aya, trusted by 100+ brands.", path: "/brands" },
  "/free-guide": { title: "Free beginner UGC guide | Aya UGC", description: "A free guide to what UGC is, what brands look for, and how to film your first sample.", path: "/free-guide" },
  "/templates": { title: "UGC template bundle — contract, portfolio, rate card | Aya UGC", description: "The templates Aya uses: UGC contract, portfolio, rate card and a bonus pitch template. AED 79.", path: "/templates" },
  "/about": { title: "About Aya Karroum | Aya UGC", description: "Aya's story, credentials and how she works with brands and new UGC creators.", path: "/about" },
  "/contact": { title: "Contact | Aya UGC", description: "Questions for Aya? Send a message and she'll get back to you.", path: "/contact" },
  "/privacy": legal("Privacy policy", "/privacy"),
  "/terms": legal("Terms", "/terms"),
  "/refunds": legal("Refund policy", "/refunds"),
};

export type PagePath = keyof typeof meta;
