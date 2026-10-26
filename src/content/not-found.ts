import { site } from "@/config/site";

// Copy for the 404 page (docs/SITE-SPEC.md section 11).
export const notFoundContent = {
  seo: { title: `Page not found · ${site.name}`, description: "This page doesn't exist." },
  title: "This page took a different turn.",
  body: "The link may be old or mistyped.",
  home: "Go home",
  challenge: `See the ${site.challenge.short}`,
};
