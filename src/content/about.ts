import { site } from "@/config/site";

// Copy for /about (docs/SITE-SPEC.md section 10). Story paragraphs come from Aya via site.ts.
export const aboutContent = {
  hero: {
    eyebrow: "About",
    title: "Hi, I'm Aya.",
    body: "I'm a bilingual UGC creator based in Dubai. I make content for brands in English and Arabic, and I teach creators how to do the same, honestly.",
    portrait: "Portrait of Aya in window light",
  },
  story: { title: "How I got here", paragraphs: site.story.about },
  takeaway: "Brands buy footage, not followers.",
  values: {
    title: "What I believe",
    items: [
      { title: "Real over polished", body: "Honest numbers, no fake results." },
      { title: "Craft first", body: "Hooks, light, scripts and editing are skills, and I teach them properly." },
      { title: "Two languages, one standard", body: "Arabic is never an afterthought." },
      { title: "Fair pay", body: "Creators should price properly, and brands should know what they're paying for." },
      { title: "Show, don't promise", body: "The work is the proof. I'll never promise you an income." },
    ],
  },
  kit: { title: "My kit", body: "Everything I film with is on my equipment list. Nothing borrowed.", link: "See my equipment list" },
};
