import { FormEvent } from "react";
import { site } from "@/config/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Shared mailto handler — forms open the visitor's own email app, no backend needed.
export const mailtoSubmit = (subject: string) => (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const body = Array.from(data.entries())
    .map(([k, v]) => `${k}: ${String(v).trim().slice(0, 2000)}`)
    .join("\n");
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ContactForm = ({ subject = "Website message", className = "" }: { subject?: string; className?: string }) => (
  <form onSubmit={mailtoSubmit(subject)} className={`space-y-4 ${className}`}>
    <Input required name="Name" maxLength={100} autoComplete="name" placeholder="Your name" className="min-h-12 bg-background text-base" />
    <Input required type="email" name="Email" maxLength={255} autoComplete="email" placeholder="Your email" className="min-h-12 bg-background text-base" />
    <Textarea required name="Message" rows={6} maxLength={2000} placeholder="Your message" className="bg-background text-base" />
    <button className="min-h-12 w-full rounded-[10px] bg-primary px-7 font-medium text-white sm:w-auto">Send message</button>
  </form>
);

export default ContactForm;
