import { useState } from "react";
import { Check } from "lucide-react";
import { site } from "@/config/site";
import { Field, controlClass } from "@/components/site/ui";
import { mailtoSubmit } from "@/lib/mailto";

/** Pine confirmation shown after the email app opens. */
export const SentMessage = ({ children }: { children: React.ReactNode }) => (
  <p role="status" className="mt-4 flex items-start gap-3 font-medium text-pine">
    <Check aria-hidden strokeWidth={1.75} className="mt-1 size-5 shrink-0" />
    <span>{children}</span>
  </p>
);

const ContactForm = ({ subject = "Website message", className = "" }: { subject?: string; className?: string }) => {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={mailtoSubmit(subject, () => setSent(true))} className={`space-y-6 ${className}`}>
      <Field id="contact-name" label="Your name"><input required name="Name" maxLength={100} autoComplete="name" className={controlClass} /></Field>
      <Field id="contact-email" label="Email"><input required type="email" name="Email" maxLength={255} autoComplete="email" className={controlClass} /></Field>
      <Field id="contact-message" label="Message"><textarea required name="Message" rows={6} maxLength={2000} className={`${controlClass} py-3`} /></Field>
      <button className="inline-flex min-h-12 w-full items-center justify-center rounded-pill bg-pine px-[26px] font-semibold text-white transition-colors duration-brand ease-brand hover:bg-pine-hover active:bg-pine-active md:w-auto">
        Send a message
      </button>
      {sent && <SentMessage>Your email app should be open. Hit send and I'll reply within {site.replyTime}.</SentMessage>}
    </form>
  );
};

export default ContactForm;
