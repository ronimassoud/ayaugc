import { FormEvent } from "react";
import { site } from "@/config/site";

// Forms open the visitor's own email app (mailto). Nothing is stored on this site.

/** Formats form data as "Label: value" lines; checkbox groups sharing a name are joined with commas. */
export const formToMailBody = (data: FormData) => {
  const fields = new Map<string, string[]>();
  for (const [k, v] of data.entries()) {
    const value = String(v).trim().slice(0, 2000);
    if (value) fields.set(k, [...(fields.get(k) ?? []), value]);
  }
  return [...fields].map(([k, vs]) => `${k}: ${vs.join(", ")}`).join("\n");
};

export const openMailto = (subject: string, data: FormData) => {
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formToMailBody(data))}`;
};

/** Submit handler for simple forms that rely on native `required` validation. */
export const mailtoSubmit = (subject: string, onSent?: () => void) => (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  openMailto(subject, new FormData(e.currentTarget));
  onSent?.();
};
