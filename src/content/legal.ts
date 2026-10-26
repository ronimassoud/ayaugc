import { site } from "@/config/site";
import type { PagePath } from "@/config/seo";

// Draft legal copy for /privacy, /terms and /refunds (docs/SITE-SPEC.md section 11). Aya reviews it before launch.
export type LegalPage = { path: PagePath; title: string; sections: [string, string][] };

const l = site.legal;

export const legalDraftNotice = `Draft. Aya reviews this before launch. Last updated ${l.updated}.`;
export const legalQuestions = `Questions: ${site.email}`;

export const privacyContent: LegalPage = {
  path: "/privacy",
  title: "Privacy policy",
  sections: [
    ["What I collect", "Your name and email when you join the guide, the waitlist or the challenge, and the details you type into the contact or quote forms if you send them."],
    ["Systeme.io: emails and checkout", "My email list, emails and checkout run on Systeme.io. It stores your contact record (name, email and what you signed up for) and sends the guide, challenge emails and daily ebooks. Payments go through Stripe inside the Systeme.io checkout; I never see your card details."],
    ["The WhatsApp community", `The challenge runs in a WhatsApp community. When you join it, your phone number is ${l.whatsappVisibility}. Leave the community at any time.`],
    ["Campaign tracking (how you found me)", "When you arrive from a tagged link on Instagram or Pinterest, the site records which post or campaign brought you: the platform, the campaign label and the page you landed on. It is an anonymous counter stored with Supabase: no name, email, cookies or device identifiers, and I can't link it back to you. I use it only to see which posts are worth making more of."],
    ["Forms on this site", "The contact and quote forms open your own email app with your message filled in. Nothing you type is stored on this site; I only receive it if you press send."],
    ["How I use it", "To deliver what you signed up for, send related emails, and understand which content brings visitors. I never sell your data."],
    ["Unsubscribing and deleting your data", "Every email has an unsubscribe link. To see, correct or delete your data, email me and I'll take care of it."],
  ],
};

export const termsContent: LegalPage = {
  path: "/terms",
  title: "Terms",
  sections: [
    ["Using this site", "Content on this site is for your personal use and may not be copied or resold."],
    ["Purchases", "Prices are shown in AED. Access details are emailed after payment."],
    ["Digital products", "Ebooks, templates and challenge materials are licensed to you personally and may not be shared or resold."],
    ["Results", `${site.challenge.name} is a skills program, not an income guarantee. UGC income depends on your effort and the market.`],
  ],
};

export const refundsContent: LegalPage = {
  path: "/refunds",
  title: "Refund policy",
  sections: [
    [site.challenge.short, l.challengeRefund],
    ["Templates", l.templatesRefund],
    ["How to request", `Email me with your order details and I'll reply within ${site.replyTime}.`],
  ],
};
