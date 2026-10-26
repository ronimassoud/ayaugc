import { site, type ChallengeStatus } from "./site";

/** A value Aya still has to confirm, e.g. "[start date]". */
export const isPlaceholder = (value: string) => /^\[[^\]]*\]$/.test(value.trim());

/**
 * Link to a Systeme.io page. Carries any utm_* params on the current URL through, so campaign
 * tracking survives checkout. Placeholder URLs return null so callers can render a disabled link.
 */
export const systemeHref = (url: string): string | null => {
  if (isPlaceholder(url)) return null;
  if (typeof window === "undefined") return url;
  const utm = [...new URLSearchParams(window.location.search)].filter(([k]) => k.startsWith("utm_"));
  if (utm.length === 0) return url;
  const target = new URL(url);
  for (const [k, v] of utm) if (!target.searchParams.has(k)) target.searchParams.set(k, v);
  return target.toString();
};

export type ChallengeCta = { label: string; url: string; priceLine: string };

const c = site.challenge;

/** One switch (site.challenge.status) sets the label, Systeme.io target and price line of every challenge CTA. */
export const challengeCta = (status: ChallengeStatus = c.status): ChallengeCta => {
  switch (status) {
    case "early-bird":
      return { label: "Join early", url: c.checkoutUrl, priceLine: `${c.earlyBirdPrice} until ${c.earlyBirdEnds}` };
    case "open":
      return { label: "Join the challenge", url: c.checkoutUrl, priceLine: `${c.price} · Doors close ${c.closeDate}` };
    case "closed":
      return { label: "Join the waitlist", url: c.waitlistUrl, priceLine: "Doors are closed. Join the waitlist for the next cohort." };
    case "waitlist":
    default:
      return { label: "Join the waitlist", url: c.waitlistUrl, priceLine: `Price announced ${c.priceAnnounceDate}` };
  }
};
