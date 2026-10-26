import { cn } from "@/lib/utils";

// Class strings shared by the brand primitives and native form controls (kept apart from ui.tsx so it only exports components).

export type BtnVariant = "primary" | "secondary" | "link" | "onPine" | "linkOnPine";

export const btnBase = "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-base font-semibold tracking-[0.01em] transition-colors duration-brand ease-brand";
export const btnPill = "min-h-12 rounded-pill px-[26px]";
export const btnClass: Record<BtnVariant, string> = {
  primary: cn(btnPill, "w-full bg-pine text-white hover:bg-pine-hover active:bg-pine-active md:w-auto"),
  secondary: cn(btnPill, "w-full border-[1.5px] border-ink text-ink hover:bg-ink/5 md:w-auto"),
  onPine: cn(btnPill, "w-full bg-beige text-ink hover:bg-line md:w-auto"),
  link: "min-h-11 text-pine underline-offset-4 hover:underline",
  linkOnPine: "min-h-11 text-beige underline-offset-4 hover:underline",
};

export const controlClass =
  "w-full min-h-12 rounded-sm border border-brown bg-beige px-4 text-base text-ink focus-visible:border-pine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine aria-[invalid=true]:border-error";

/** Native select with an outline chevron at the end of the field. */
export const selectClass = cn(controlClass, "appearance-none bg-[length:20px] bg-[right_1rem_center] bg-no-repeat pe-12 rtl:bg-[left_1rem_center]");
export const selectStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232E2A24' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
};

/** Primary button style for native <button type="submit">. */
export const submitClass = cn(btnBase, btnClass.primary);
