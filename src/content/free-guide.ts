import { site } from "@/config/site";

// Copy for /free-guide (docs/SITE-SPEC.md section 8).
export const freeGuideContent = {
  cover: { eyebrow: "Free guide", title: site.guide.name },
  hero: {
    eyebrow: "Free guide",
    title: "You can start with the phone you have.",
    body: "A short, honest guide to what UGC is, what brands pay for, and how to film your first sample this week. No followers needed.",
    cta: "Send me the free guide",
    caption: "Free. You'll get it by email, and you can unsubscribe anytime.",
  },
  inside: {
    title: "What's inside",
    note: site.guide.contentsNote,
    items: [
      "What UGC is, and how it's different from influencing",
      "What brands actually pay for",
      "The phone setup I started with",
      "Three easy formats to film first",
      "How to share your first samples",
    ],
  },
  tip: "On Instagram? Comment GUIDE on any of my posts and I'll send it to your DMs.",
  next: {
    title: "Ready for the full plan?",
    body: `${site.challenge.name} starts ${site.challenge.startDate}.`,
    link: "See the 15 days",
  },
};
