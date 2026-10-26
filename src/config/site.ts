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
  templates: { name: "UGC starter templates", price: "AED 79", checkoutUrl: "[Systeme.io templates checkout URL]" },
  guide: { name: "The beginner's guide to UGC", optInUrl: "[Systeme.io guide opt-in URL]" },

  // Copy Aya writes in her own words.
  story: {
    home: "[Two or three sentences from Aya in her own words: how she started, what she does now.]",
    challenge: "[One or two sentences from Aya on how she started.]",
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
