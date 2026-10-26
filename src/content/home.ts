import { site } from "@/config/site";

// Copy for / (docs/SITE-SPEC.md section 5). Facts in [brackets] come from site.ts.
const c = site.challenge;

export const homeContent = {
  hero: {
    eyebrow: "UGC creator · Dubai · EN & AR",
    title: "UGC that sells, and the skills to make it yourself.",
    body: `I'm Aya. I make Arabic and English UGC for brands across the UAE, and I teach creators how to do it properly. ${site.brandsCount} brands so far, and every lesson comes from real client work.`,
    quote: "Request a quote",
    strip: { name: "15-Day UGC Creator Challenge", facts: [`Starts ${c.startDate}`, c.price] },
    phones: ["Aya filming", "Hands and product", "Behind the scenes"],
  },

  proof: {
    caption: `Real work for ${site.brandsCount} brands. Shown with each brand's permission.`,
    categories: ["Skincare", "Food", "Home", "Fashion", "Tech", "Fitness"],
  },

  lanes: {
    title: "Where are you starting?",
    studio: {
      eyebrow: "AYA UGC Studio · For brands",
      title: "Content that feels real and is built to sell.",
      body: "UGC videos for ads and organic, in English or Arabic. Strategy, scripts and creators handled.",
      cta: "Request a quote",
    },
    school: {
      eyebrow: "AYA UGC School · For creators",
      title: "Learn it the way I do it.",
      body: "Real steps, real samples, no hype. Start free, or go all in with the 15-Day Challenge.",
      cta: "See the challenge",
    },
  },

  challenge: {
    eyebrow: c.name,
    title: `${c.tagline}.`,
    body: "Fifteen days, one clear system. Whether you've never been paid for a video or you've done a few deals and want better rates, you'll finish with:",
    outcomes: [
      "A niche and the formats brands in it buy",
      "Hooks and scripts you can reuse",
      `${c.portfolioVideos} portfolio videos, filmed and edited on your phone`,
      "A price list, and the confidence to talk about usage fees",
      "A UAE prospect list and pitches ready to send",
      "A 30-day plan for what comes next",
    ],
    phases: [
      { name: "Create", days: [1, 2, 3, 4, 5, 6, 7] },
      { name: "Package", days: [8, 9, 10] },
      { name: "Get booked", days: [11, 12, 13, 14, 15] },
    ],
    link: "See the 15 days",
    caption: `Starts ${c.startDate} · ${c.price} · This is a skills program, not an income guarantee.`,
  },

  brands: {
    eyebrow: "AYA UGC Studio",
    title: "Arabic and English UGC, on brief.",
    services: [
      { title: "UGC videos", body: "Reviews, unboxings, demos and faceless hands-and-product videos for ads and organic." },
      { title: "Strategy and scripting", body: "Angles and hooks matched to your product, written to sound like a real person." },
      { title: "Creator selection", body: "Need more faces? I find, brief and manage the right creators." },
    ],
    steps: [{ title: "Brief" }, { title: "Concepts and scripts" }, { title: "Filming and editing" }, { title: "Delivery and revisions" }],
    cta: "See brand services",
  },

  about: {
    eyebrow: "Meet Aya",
    title: "Like a capable older sister who has done it.",
    body: `${site.story.home} I still film for brands every week, so what I teach is what's working right now, not what worked three years ago.`,
    link: "Read my story",
    portrait: "Portrait of Aya",
  },

  resources: {
    title: "Not ready for the challenge yet?",
    guide: {
      eyebrow: "Free guide",
      title: site.guide.name,
      body: "What UGC is, what brands pay for, and how to film your first sample this week.",
      cta: "Send me the free guide",
    },
    templates: {
      eyebrow: `Templates · ${site.templates.price}`,
      title: site.templates.name,
      body: "The contract, portfolio, rate card and pitch I use with real clients.",
      cta: "Get the templates",
    },
  },

  testimonials: { title: "What creators and brands say" },
};
