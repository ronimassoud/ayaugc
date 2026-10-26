// Every fact Aya still needs to confirm is kept here in [brackets]. Pages read from this file, never hard-code these values.
export type ChallengeStatus = "waitlist" | "early-bird" | "open" | "closed";

export type Testimonial = { quote: string; name: string; city: string };

export const site = {
  name: "AYA UGC", // in sentences; the logo is aya.ugc
  owner: "Aya Karroum",
  location: "Dubai, UAE",
  domain: "https://www.ayaugc.com",
  email: "[contact@ayaugc.com]",
  instagram: { handle: "@aya.ugc", url: "https://www.instagram.com/aya.ugc" },
  equipmentUrl: "[equipment list link]",
  brandsCount: "100+", // must match Instagram
  sinceYear: "[year]",
  replyTime: "[2 working days]",

  challenge: {
    name: "The 15-Day UGC Creator Challenge",
    short: "15-Day Challenge",
    tagline: "From first deal to fully booked",
    // Drives every challenge CTA on the site (see src/config/challenge.ts).
    status: "waitlist" as ChallengeStatus,
    price: "[AED price]",
    earlyBirdPrice: "[AED early-bird price]",
    priceAnnounceDate: "[price announcement date]",
    earlyBirdEnds: "[early-bird end date]",
    startDate: "[start date]",
    closeDate: "[doors-close date]",
    minutesPerDay: "[20 to 30]",
    portfolioVideos: "[number]",
    checkInBooking: "[How the check-in is booked, e.g. you'll get a booking link in your welcome email.]",
    language: "[Language of the ebooks and community.]",
    graduatePerk: "Strong graduates get priority consideration for upcoming AYA UGC brand campaigns [Aya to confirm wording]",
    checkoutUrl: "[Systeme.io checkout URL]",
    waitlistUrl: "[Systeme.io waitlist opt-in URL]",
  },
  studio: {
    categories: "[Beauty, skincare, food, home, fashion, tech]",
    turnaround: "[x working days]",
    revisions: "[one]",
    languages: "English, Arabic (Gulf and Levantine) [Aya to confirm dialects]",
    // [Aya to set bands]
    budgetBands: ["Under AED [x]", "AED [x] to [y]", "AED [y] to [z]", "Above AED [z]", "Not sure yet"],
    samplePlaceholder: "[Category · format]",
  },
  templates: {
    name: "UGC starter templates",
    price: "AED 79",
    checkoutUrl: "[Systeme.io templates checkout URL]",
    formats: "[File formats, e.g. Canva links and editable PDF.]",
    editAnswer: "[Answer.]",
  },
  guide: { name: "The beginner's guide to UGC", optInUrl: "[Systeme.io guide opt-in URL]", contentsNote: "[Aya to confirm contents]" },

  // Draft legal text: Aya reviews it before launch.
  legal: {
    updated: "[date]",
    whatsappVisibility: "visible to the community admins and other members [confirm]",
    challengeRefund: "[Refund window and conditions, e.g. full refund up to day [x] if you've completed the first tasks.]",
    templatesRefund: "[Refund terms for digital downloads.]",
  },

  // Copy Aya writes in her own words.
  story: {
    home: "[Two or three sentences from Aya in her own words: how she started, what she does now.]",
    challenge: "[One or two sentences from Aya on how she started.]",
    about: [
      "[Paragraph 1, in Aya's words: how she started in UGC.]",
      "[Paragraph 2: what she learned the hard way, and the moment she started charging properly.]",
      "[Paragraph 3: what a working week looks like now.]",
    ],
  },

  // Real, consented quotes only (first name and city). Sections that show them stay hidden while this is empty.
  testimonials: [] as Testimonial[],
};

export const nav = [
  { label: "For brands", to: "/brands" },
  { label: "15-Day Challenge", to: "/challenge" },
  { label: "Free guide", to: "/free-guide" },
  { label: "Templates", to: "/templates" },
  { label: "About", to: "/about" },
];
