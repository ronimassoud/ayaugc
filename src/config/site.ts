// Every fact Aya still needs to confirm is kept here in [brackets]. Pages read from this file, never hard-code these values.
export type ChallengeStatus = "waitlist" | "early-bird" | "open" | "closed";

export type Testimonial = { quote: string; name: string; city: string };

/**
 * Where the Systeme.io funnels live. Today they are on the old Systeme.io site at www.ayaugc.com. Before the new
 * website takes over www.ayaugc.com, connect go.ayaugc.com to Systeme.io, move these funnels to it and change this
 * one value to "https://go.ayaugc.com" (the page paths stay the same). Otherwise /template would loop back to this site.
 */
const systeme = "https://www.ayaugc.com";

export const site = {
  name: "AYA UGC", // in sentences; the logo is aya.ugc
  owner: "Aya Karroum",
  location: "Dubai, UAE",
  domain: "https://www.ayaugc.com",
  email: "[contact@ayaugc.com]",
  instagram: { handle: "@aya.ugc", url: "https://www.instagram.com/aya.ugc" },
  // Aya's Amazon wishlist, linked as "Shop equipment must-haves" on the old Systeme.io home page.
  equipmentUrl: "https://www.amazon.ae/hz/wishlist/ls/39UW0OLXZ1250",
  brandsCount: "100+", // must match Instagram
  sinceYear: "[year]",
  replyTime: "[2 working days]",
  // Aya's portrait (4:5, window light), a path under public/ such as "photos/aya-portrait.jpg". Shows a grey placeholder card until then.
  portraitPhoto: "[portrait photo]",

  challenge: {
    name: "The 15-Day UGC Creator Challenge",
    short: "15-Day Challenge",
    tagline: "From first deal to fully booked",
    // Drives every challenge CTA on the site (see src/config/challenge.ts).
    status: "waitlist" as ChallengeStatus,
    // Not shown on the site while pricing is being decided; keep it here for when it returns.
    price: "[challenge price]",
    earlyBirdPrice: "[AED early-bird price]",
    priceAnnounceDate: "[price announcement date]",
    earlyBirdEnds: "[early-bird end date]",
    startDate: "7 December 2026",
    closeDate: "[doors-close date]",
    minutesPerDay: "[20 to 30]",
    portfolioVideos: "[number]",
    checkInBooking: "[How the check-in is booked, e.g. you'll get a booking link in your welcome email.]",
    language: "[Language of the ebooks and community.]",
    graduatePerk: "Strong graduates get priority consideration for upcoming AYA UGC brand campaigns [Aya to confirm wording]",
    checkoutUrl: "[Systeme.io checkout URL]",
    // Live Systeme.io waitlist page: a sign-up form ("Join the waitlist & save") that moves people to the next funnel step.
    waitlistUrl: `${systeme}/waitlist`,
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
    // Live Systeme.io order page: "Templates", AED 79, one-off payment.
    checkoutUrl: `${systeme}/template`,
    formats: "[File formats, e.g. Canva links and editable PDF.]",
    editAnswer: "[Answer.]",
  },
  guide: { name: "The beginner's guide to UGC", optInUrl: `${systeme}/ugc-guide`, contentsNote: "[Aya to confirm contents]" },

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
