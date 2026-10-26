import { site } from "@/config/site";

// Copy for /brands (docs/SITE-SPEC.md section 7). Studio lane only: no creator products on this page.
const s = site.studio;

export type QuoteField =
  | { kind: "text" | "email" | "textarea"; name: string; label: string; optional?: boolean; autoComplete?: string }
  | { kind: "select"; name: string; label: string; options: string[] }
  | { kind: "checkboxes"; name: string; label: string; options: string[] };

export const brandsContent = {
  hero: {
    eyebrow: "AYA UGC Studio · For brands",
    title: "Content that feels real and is built to sell.",
    body: "Need Arabic and English UGC for your next campaign? I script, film and edit on brief, with usage terms agreed up front. Send me your product and timeline.",
    cta: "Request a quote",
    link: "See recent work",
    phones: ["Client sample", "Client sample"],
    caption: `${site.brandsCount} brands · English and Arabic · Based in Dubai`,
  },

  work: {
    title: "Recent work",
    samples: 6,
    caption: "Shared with each brand's permission. More samples on request.",
  },

  services: {
    title: "What I make, and how",
    items: [
      { title: "UGC videos for ads and organic", body: "Reviews, unboxings, demos, tutorials, and faceless hands-and-product videos. 9:16, captioned, ready to post or run." },
      { title: "Strategy and scripting", body: "Hooks and angles matched to your product and audience, in English, Arabic or both." },
      { title: "Creator selection", body: "When you need more than one face, I find, brief and manage the right creators for your product." },
    ],
    categories: `Categories I work in: ${s.categories}.`,
  },

  process: {
    title: "How a project runs",
    steps: [
      { title: "Brief", body: "You share the product, the goal and where the video will run." },
      { title: "Concepts and scripts", body: "I send angles, hooks and scripts for your approval." },
      { title: "Filming and editing", body: "I film and edit, in English, Arabic or both." },
      { title: "Delivery and revisions", body: `Final files with ${s.revisions} round of revisions included.` },
    ],
    tipLabel: "Usage rights, explained",
    tip: "Usage rights decide where and for how long you can use the video. Organic posting and paid ads are priced separately, and I agree them with you before we start.",
  },

  expect: [
    { title: "Turnaround", body: `${s.turnaround} from approved script.` },
    { title: "Languages", body: s.languages },
    { title: "Pricing", body: "Quoted per project, with usage, revisions and payment terms stated on every quote." },
  ],

  quote: {
    title: "Request a quote",
    body: `Tell me about the product and what you need. I reply within ${site.replyTime} with ideas and a quote.`,
    alt: "Prefer email?",
    submit: "Send my request",
    note: "This opens your email app with everything filled in. Nothing is stored on this site.",
    sent: `Your email app should be open. Hit send and I'll reply within ${site.replyTime}.`,
    subject: "UGC quote request",
    required: "Please fill this in.",
    chooseOne: "Please choose at least one.",
    badEmail: "Please enter a full email address.",
    fields: [
      { kind: "text", name: "Your name", label: "Your name", autoComplete: "name" },
      { kind: "email", name: "Work email", label: "Work email", autoComplete: "email" },
      { kind: "text", name: "Brand or website", label: "Brand or website", autoComplete: "organization" },
      { kind: "select", name: "Product category", label: "Product category", options: ["Beauty and skincare", "Food and drink", "Home", "Fashion", "Tech", "Health and fitness", "Other"] },
      { kind: "checkboxes", name: "What do you need", label: "What do you need?", options: ["UGC videos", "Scripts only", "Creator selection", "Not sure yet"] },
      { kind: "select", name: "Number of videos", label: "Number of videos", options: ["1", "2 to 3", "4 to 6", "7+"] },
      { kind: "checkboxes", name: "Language", label: "Language", options: ["English", "Arabic"] },
      { kind: "checkboxes", name: "Where it will run", label: "Where will it run?", options: ["Organic social", "Paid ads", "Website", "Not sure yet"] },
      { kind: "select", name: "Budget range", label: "Budget range", options: s.budgetBands },
      { kind: "select", name: "Timeline", label: "Timeline", options: ["Within 2 weeks", "This month", "Next month", "Flexible"] },
      { kind: "textarea", name: "Anything else", label: "Anything else?", optional: true },
    ] as QuoteField[],
  },
};
