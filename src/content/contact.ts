import { site } from "@/config/site";

// Copy for /contact (docs/SITE-SPEC.md section 11).
export const contactContent = {
  eyebrow: "Contact",
  title: "Say hello.",
  body: "For general questions about the challenge, the guide or the templates. Brands, the quote form gets you a faster answer.",
  brandsLink: "Brands: request a quote",
  form: {
    subject: "Website message",
    name: "Your name",
    email: "Email",
    topic: "What's it about?",
    topics: ["The 15-Day Challenge", "Free guide", "Templates", "Something else"],
    message: "Message",
    submit: "Send a message",
    required: "Please fill this in.",
    badEmail: "Please enter a full email address.",
    sent: `Your email app should be open. Hit send and I'll reply within ${site.replyTime}.`,
  },
  caption: `This opens your email app, ready to send to ${site.email}. I reply within ${site.replyTime}.`,
};
