import { site } from "@/config/site";

// Copy for /challenge (docs/SITE-SPEC.md section 6). Facts in [brackets] come from site.ts.
// Kept apart from the layout so an Arabic file can sit beside it later.
const c = site.challenge;
const skillsNote = "This is a skills program, not an income guarantee.";

export type FaqItem = { q: string; a: string; link?: { label: string; to: string } };

export const challengeContent = {
  hero: {
    lockupNumber: "15",
    lockupLabel: ["Day UGC", "Creator", "Challenge"],
    title: "From first deal to fully booked.",
    body: "Fifteen days, one lesson a day by email, a WhatsApp community and a 1:1 check-in with me. For new creators who want a clear plan, and for creators with a few deals who want better rates.",
    meta: [`Starts ${c.startDate}`, `${c.minutesPerDay} min a day`, c.price],
    close: `Doors close ${c.closeDate}`,
    refund: "Refund policy",
    note: skillsNote,
  },

  problem: {
    title: "Sound familiar?",
    quotes: [
      "\"I don't know what to film or who to film it for.\"",
      "\"I've done a few videos for free and I don't know how to start charging.\"",
      "\"I have samples, but brands never reply to my DMs.\"",
    ],
    after: "Every one of these has a fix, and it's a skill you can learn.",
  },

  outcomes: {
    title: "What you'll have by Day 15",
    items: [
      { icon: "niche", title: "A niche", body: "and the formats brands in it pay for." },
      { icon: "hooks", title: "Hooks and scripts", body: "a reusable way to write the first three seconds." },
      { icon: "videos", title: "Portfolio videos", body: `${c.portfolioVideos} videos filmed and edited on your phone in CapCut.` },
      { icon: "page", title: "A portfolio page", body: "on the platforms brands actually check." },
      { icon: "prices", title: "Your prices", body: "including usage fees, barter rules and contract basics." },
      { icon: "pipeline", title: "A pipeline", body: "a UAE prospect list, pitches sent and a 30-day plan." },
    ],
  },

  days: {
    title: "The 15 days",
    intro: "Three phases. One lesson a day. Each one is an ebook you keep.",
    phases: [
      {
        name: "Create · craft the content",
        days: [
          { title: "The UGC business", line: "What UGC is, who buys it and how creators get paid." },
          { title: "Your niche", line: "Pick the categories that suit you and that brands are spending on." },
          { title: "Hooks and scripts", line: "Write the first three seconds, then the rest." },
          { title: "Filming basics", line: "Light, sound and framing with the phone you have." },
          { title: "B-roll and faceless", line: "Hands, product and cutaways for creators who'd rather not show their face." },
          { title: "CapCut editing", line: "Cut, caption and export a clean video in CapCut." },
          { title: "Portfolio video", line: "Plan, film and finish a portfolio piece from start to end." },
        ],
      },
      {
        name: "Package · price and protect",
        days: [
          { title: "Portfolio and platforms", line: "Put your samples where brands look." },
          { title: "Pricing and barter", line: "What to charge, what usage fees are, and when free product is worth it." },
          { title: "Contracts and UAE permits", line: "What belongs in a UGC contract, and what UAE creators need to know about permits." },
        ],
      },
      {
        name: "Get booked · find and win brands",
        days: [
          { title: "Personal brand", line: "Make your profile bring work in." },
          { title: "UAE prospecting", line: "Find brands in the UAE that are hiring creators." },
          { title: "Pitching", line: "Write a pitch that gets a reply." },
          { title: "Negotiation", line: "Handle \"what's your rate?\" and \"can you do it for less?\"." },
          { title: "30-day growth plan", line: "What to do in the month after the challenge." },
        ],
      },
    ],
    tip: "You don't need followers to do UGC. Brands pay for the content, not your audience.",
  },

  how: {
    title: "How it works",
    steps: [
      { title: "Register", body: "Join through a secure checkout. You'll get a confirmation email straight away." },
      { title: "Join the community", body: "I add you to the challenge WhatsApp community before Day 1." },
      { title: "One ebook a day", body: "Each morning for 15 days, the day's ebook lands in your inbox. Download it and keep it." },
      { title: "Your 1:1 check-in", body: "Once during the 15 days, I check in with you personally to look at your progress and plan your next step." },
    ],
    caption: `About ${c.minutesPerDay} minutes a day. Miss a day and catch up later; the ebooks are yours.`,
  },

  meet: {
    phones: ["Aya filming", "Client work"],
    eyebrow: "Who's teaching",
    title: "I teach what I do every week.",
    body: `I'm Aya, a bilingual UGC creator in Dubai. I've made content for ${site.brandsCount} brands, in English and Arabic. ${site.story.challenge} This challenge is the plan I wish I'd had.`,
    link: "Read my story",
  },

  fit: {
    yes: {
      title: "This is for you if",
      items: [
        "You're starting from zero and want a clear plan",
        "You've done a few deals and want better rates and repeat clients",
        "You live in or work with brands in the UAE and GCC",
        `You can give it about ${c.minutesPerDay} minutes a day for 15 days`,
      ],
    },
    no: {
      title: "It's not for you if",
      items: [
        "You want a guaranteed income or guaranteed brand deals",
        "You're looking for a quick shortcut without filming",
        "You won't have time to practise during the 15 days",
      ],
    },
  },

  proof: { title: "From creators who've done it" },

  price: {
    eyebrow: `Cohort starts ${c.startDate}`,
    amount: c.price,
    terms: "one payment · AED",
    includes: [
      "15 daily ebooks by email, yours to keep",
      "The challenge WhatsApp community",
      "A 1:1 check-in call with me during the 15 days",
      "CapCut editing lesson (Day 6)",
      "Pricing, contract and pitching lessons (Days 9 to 13)",
      c.graduatePerk,
    ],
    addOn: `Add the ${site.templates.name} (${site.templates.price}) at checkout.`,
    close: `Doors close ${c.closeDate}`,
    refund: "Refund policy",
    note: skillsNote,
  },

  faq: {
    title: "Questions",
    items: [
      { q: "Do I need followers?", a: "No. Brands pay UGC creators for the content itself, not for your audience." },
      { q: "I've already done a few deals. Is this too basic?", a: "Days 1 to 7 tighten your craft; Days 8 to 15 are about pricing, usage fees, contracts, UAE permits, pitching and negotiation. Most established creators get the most from the second half." },
      { q: "I'm shy on camera.", a: "Day 5 covers faceless formats: hands, product and B-roll. Plenty of paid UGC never shows a face." },
      { q: "What do I need?", a: `A recent smartphone, the free CapCut app and about ${c.minutesPerDay} minutes a day.`, link: { label: "My equipment list is here", to: site.equipmentUrl } },
      { q: "How does it work day to day?", a: "One ebook arrives by email each day for 15 days. You read it, do the task, and share questions in the WhatsApp community." },
      { q: "When is my 1:1 check-in?", a: c.checkInBooking },
      { q: "What if I miss a day?", a: "Catch up whenever you like. The ebooks are yours to keep." },
      { q: "Is it in English or Arabic?", a: c.language },
      { q: "Will I make money?", a: `That depends on the work you put in and on the market. ${skillsNote}` },
      { q: "Can I get a refund?", a: "Yes, within the", link: { label: "refund policy", to: "/refunds" } },
      { q: "Who do I contact with questions?", a: `Email ${site.email} or send me a DM on Instagram.` },
    ] as FaqItem[],
  },

  final: {
    title: "Fifteen days from now, you could be pitching brands.",
    meta: `Starts ${c.startDate} · ${c.price}`,
    fallback: "Not ready? Send me the free guide",
  },

  sticky: { starts: `Starts ${c.startDate}`, price: c.price, button: "Join" },
};
