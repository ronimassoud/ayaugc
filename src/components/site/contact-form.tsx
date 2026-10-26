import { FormEvent, useState } from "react";
import { Check } from "lucide-react";
import { Field } from "@/components/site/ui";
import { controlClass, selectClass, selectStyle, submitClass } from "@/components/site/styles";
import { openMailto } from "@/lib/mailto";
import { contactContent } from "@/content/contact";

/** Pine confirmation shown after the email app opens. */
export const SentMessage = ({ children }: { children: React.ReactNode }) => (
  <p role="status" className="mt-4 flex items-start gap-3 font-medium text-pine">
    <Check aria-hidden strokeWidth={1.75} className="mt-1 size-5 shrink-0" />
    <span>{children}</span>
  </p>
);

/** General contact form (section 11). Validates inline, then opens the visitor's email app. */
const ContactForm = ({ className = "" }: { className?: string }) => {
  const f = contactContent.form;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const fields = [
    { id: "contact-name", name: "Name" },
    { id: "contact-email", name: "Email" },
    { id: "contact-topic", name: "Topic" },
    { id: "contact-message", name: "Message" },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const { name } of fields) if (!String(data.get(name) ?? "").trim()) next[name] = f.required;
    const email = String(data.get("Email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.Email = f.badEmail;
    setErrors(next);
    const first = fields.find(({ name }) => next[name]);
    if (first) {
      setSent(false);
      document.getElementById(first.id)?.focus();
      return;
    }
    openMailto(f.subject, data);
    setSent(true);
  };

  return (
    <form noValidate onSubmit={onSubmit} className={`space-y-6 ${className}`}>
      <Field id="contact-name" label={f.name} error={errors.Name}><input name="Name" maxLength={100} autoComplete="name" className={controlClass} /></Field>
      <Field id="contact-email" label={f.email} error={errors.Email}><input type="email" name="Email" maxLength={255} autoComplete="email" className={controlClass} /></Field>
      <Field id="contact-topic" label={f.topic} error={errors.Topic}>
        <select name="Topic" defaultValue="" className={selectClass} style={selectStyle}>
          <option value="" disabled>Choose one</option>
          {f.topics.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </Field>
      <Field id="contact-message" label={f.message} error={errors.Message}><textarea name="Message" rows={6} maxLength={2000} className={`${controlClass} py-3`} /></Field>
      <button type="submit" className={submitClass}>
        {f.submit}
      </button>
      {sent && <SentMessage>{f.sent}</SentMessage>}
    </form>
  );
};

export default ContactForm;
