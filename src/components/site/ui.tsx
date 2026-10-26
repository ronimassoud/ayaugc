import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { AlertCircle, Check, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { isPlaceholder, systemeHref } from "@/config/challenge";

// Shared building blocks for every page, built on the AYA UGC brand tokens (docs/SITE-SPEC.md section 3).

/** Content column: max 1200 px, margins 24 mobile / 80 desktop. */
export const Wrap = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("mx-auto w-full max-w-[calc(1200px+160px)] px-6 lg:px-20", className)}>{children}</div>
);

/** Fades content up 12 px once it scrolls into view. Reduced-motion users see it immediately. */
export const Rise = ({ children, className, as: Tag = "div" }: { children: React.ReactNode; className?: string; as?: React.ElementType }) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setShown(true);
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <Tag ref={ref} data-rise="" data-shown={shown || undefined} className={className}>{children}</Tag>;
};

type Tone = "beige" | "pine" | "mint";
const toneClass: Record<Tone, string> = { beige: "bg-beige text-ink", pine: "bg-pine text-beige", mint: "bg-mint text-ink" };

/** Page section: 72 to 96 px vertical rhythm. */
export const Section = ({ children, className, id, tone = "beige", wrapClassName }: {
  children: React.ReactNode; className?: string; id?: string; tone?: Tone; wrapClassName?: string;
}) => (
  <section id={id} className={cn("scroll-mt-24 py-[72px] md:py-24", toneClass[tone], className)}>
    <Wrap className={wrapClassName}><Rise>{children}</Rise></Wrap>
  </section>
);

export const Eyebrow = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <p className={cn("eyebrow mb-4", className)}>{children}</p>
);

export const H1 = ({ children, className, display = false }: { children: React.ReactNode; className?: string; display?: boolean }) => (
  <h1 className={cn(display ? "display" : "h1", "max-w-[18ch]", className)}>{children}</h1>
);

export const H2 = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <h2 className={cn("h2 max-w-text", className)}>{children}</h2>
);

export type BtnVariant = "primary" | "secondary" | "link" | "onPine" | "linkOnPine";

const btnBase = "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-base font-semibold tracking-[0.01em] transition-colors duration-brand ease-brand";
const btnPill = "min-h-12 rounded-pill px-[26px]";
const btnClass: Record<BtnVariant, string> = {
  primary: cn(btnPill, "w-full bg-pine text-white hover:bg-pine-hover active:bg-pine-active md:w-auto"),
  secondary: cn(btnPill, "w-full border-[1.5px] border-ink text-ink hover:bg-ink/5 md:w-auto"),
  onPine: cn(btnPill, "w-full bg-beige text-ink hover:bg-line md:w-auto"),
  link: "min-h-11 text-pine underline-offset-4 hover:underline",
  linkOnPine: "min-h-11 text-beige underline-offset-4 hover:underline",
};

// Old names, accepted until every page uses the new variants.
type LegacyVariant = "outline" | "ghost";

type BtnProps = {
  to: string;
  children: React.ReactNode;
  variant?: BtnVariant | LegacyVariant;
  className?: string;
  /** Systeme.io link: keeps utm params and stays inert while the URL is a [placeholder]. */
  systeme?: boolean;
  /** Stretches the click target over the nearest `relative` parent (whole-card links). */
  stretched?: boolean;
  onClick?: () => void;
};

export const Btn = ({ to, children, variant: v = "primary", className, systeme = false, stretched = false, onClick }: BtnProps) => {
  const variant: BtnVariant = v === "outline" ? "secondary" : v === "ghost" ? "link" : v;
  const cls = cn(btnBase, btnClass[variant], stretched && "after:absolute after:inset-0 after:rounded-card", className);
  const inner = (
    <>
      {children}
      {(variant === "link" || variant === "linkOnPine") && <span aria-hidden className="rtl:-scale-x-100">›</span>}
    </>
  );
  const href = systeme ? systemeHref(to) : isPlaceholder(to) ? null : to;
  // Placeholder target: keep the button visible for review, but make it go nowhere.
  if (href === null) {
    return (
      <a href="#" aria-disabled="true" title={`Link coming soon: ${to}`} onClick={(e) => e.preventDefault()} className={cls}>
        {inner}
      </a>
    );
  }
  if (href.startsWith("/")) return <Link to={href} onClick={onClick} className={cls}>{inner}</Link>;
  return <a href={href} onClick={onClick} className={cls}>{inner}</a>;
};

/** Studio cards are outlined; School cards are Mint. Radius 20. */
export const Card = ({ children, className, variant = "studio", clickable = false, as: Tag = "div" }: {
  children: React.ReactNode; className?: string; variant?: "studio" | "school"; clickable?: boolean; as?: React.ElementType;
}) => (
  <Tag
    className={cn(
      "rounded-card p-6 md:p-8",
      variant === "studio" ? "border border-line" : "bg-mint text-ink",
      clickable && "relative transition-colors duration-brand ease-brand focus-within:outline focus-within:outline-[3px] focus-within:outline-offset-2 focus-within:outline-mint",
      clickable && (variant === "studio" ? "hover:border-pine" : "hover:bg-mint-hover"),
      className,
    )}
  >
    {children}
  </Tag>
);

/** Mint panel with an Ink outline. */
export const Tip = ({ children, label = "Tip", className }: { children: React.ReactNode; label?: string; className?: string }) => (
  <div className={cn("rounded-lg border-[1.2px] border-ink bg-mint p-6 text-ink", className)}>
    <p className="eyebrow mb-2 text-ink">{label}</p>
    <div className="max-w-text">{children}</div>
  </div>
);

/** One per page: a Pine panel with a serif statement. */
export const Takeaway = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("rounded-lg bg-pine p-8 md:p-12", className)}>
    <p className="h2 text-beige">{children}</p>
  </div>
);

/** 9:16 phone frame for vertical video. Shows a labelled placeholder until real footage is supplied. */
export const PhoneFrame = ({ label, src, poster, captions, className }: {
  label?: string; src?: string; poster?: string; captions?: string; className?: string; tone?: number;
}) => (
  <figure className={cn("relative aspect-[9/16] w-full overflow-hidden rounded-[28px] border-[5px] border-ink bg-disabled-bg", className)}>
    {src ? (
      <video className="h-full w-full object-cover" src={src} poster={poster} muted playsInline controls preload="none" aria-label={label}>
        {captions && <track kind="captions" src={captions} srcLang="en" label="English" default />}
      </video>
    ) : (
      <div role="img" aria-label={label ? `${label} (photo coming soon)` : "Video coming soon"} className="h-full w-full" />
    )}
    {label && !src && <figcaption className="caption absolute inset-x-3 bottom-4 text-center">{label}</figcaption>}
  </figure>
);

export type DayState = "done" | "today" | "ahead";
const dayClass: Record<DayState, string> = {
  done: "bg-pine text-beige",
  today: "bg-mint text-ink ring-[1.5px] ring-ink",
  ahead: "text-ink ring-1 ring-inset ring-line",
};

/** "DAY 07" pill. Done = Pine, today = Mint with an Ink ring, ahead = Warm Line ring. */
export const DayBadge = ({ day, state = "ahead", className }: { day: number; state?: DayState; className?: string }) => (
  <span aria-label={`Day ${day}`} className={cn("inline-flex shrink-0 items-baseline gap-1.5 rounded-pill px-3 py-0.5", dayClass[state], className)}>
    <span aria-hidden className="text-[11px] font-semibold tracking-[0.16em]">DAY</span>
    <span aria-hidden className={cn("font-display text-[22px] italic leading-none", state === "ahead" && "text-pine")}>{String(day).padStart(2, "0")}</span>
  </span>
);

/** Ticked list. "x" uses an outline X so the shape, not the colour, carries the meaning. */
export const CheckList = ({ items, icon = "check", className }: { items: React.ReactNode[]; icon?: "check" | "x"; className?: string }) => (
  <ul className={cn("space-y-3", className)}>
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        {icon === "check"
          ? <Check aria-hidden strokeWidth={1.75} className="mt-1 size-5 shrink-0 text-pine" />
          : <X aria-hidden strokeWidth={1.75} className="mt-1 size-5 shrink-0 text-ink" />}
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/** Numbered steps with serif Pine numbers (01, 02...). */
export const Steps = ({ items, className }: { items: { title: string; body?: React.ReactNode }[]; className?: string }) => (
  <ol className={cn("grid gap-8 md:grid-cols-2 lg:grid-cols-4", className)}>
    {items.map((s, i) => (
      <li key={s.title}>
        <span className="num block text-[44px] leading-none">{String(i + 1).padStart(2, "0")}</span>
        <h3 className="h4 mt-4">{s.title}</h3>
        {s.body && <p className="supporting mt-2">{s.body}</p>}
      </li>
    ))}
  </ol>
);

/** Small facts in Warm Line pills (date, time per day, price). */
export const MetaPills = ({ items, className }: { items: React.ReactNode[]; className?: string }) => (
  <ul className={cn("flex flex-wrap gap-2", className)}>
    {items.map((m, i) => <li key={i} className="rounded-pill px-4 py-1.5 text-[15px] font-medium text-ink ring-1 ring-inset ring-line">{m}</li>)}
  </ul>
);

/** Questions and answers. Warm Line dividers, a + that turns into an x. */
export const FAQ = ({ items, className }: { items: { q: string; a: React.ReactNode }[]; className?: string }) => (
  <AccordionPrimitive.Root type="single" collapsible className={cn("max-w-3xl border-t border-line", className)}>
    {items.map(({ q, a }) => (
      <AccordionPrimitive.Item key={q} value={q} className="border-b border-line">
        <AccordionPrimitive.Header>
          <AccordionPrimitive.Trigger className="flex min-h-14 w-full items-center justify-between gap-6 py-4 text-start text-[17px] font-semibold md:text-lg [&[data-state=open]>svg]:rotate-45">
            {q}
            <Plus aria-hidden strokeWidth={1.75} className="size-6 shrink-0 text-pine transition-transform duration-brand ease-brand" />
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
          <div className="max-w-text pb-5">{a}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    ))}
  </AccordionPrimitive.Root>
);

// ---------- Forms: labels above fields, never placeholder-only ----------

export const controlClass =
  "w-full min-h-12 rounded-sm border border-brown bg-beige px-4 text-base text-ink focus-visible:border-pine focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine aria-[invalid=true]:border-error";

export const FieldError = ({ id, children }: { id: string; children?: React.ReactNode }) =>
  children ? (
    <p id={id} className="mt-2 flex items-center gap-2 text-[15px] text-error">
      <AlertCircle aria-hidden strokeWidth={1.75} className="size-4 shrink-0" />
      {children}
    </p>
  ) : null;

/** Label above a single control (input, select or textarea passed as the child). */
export const Field = ({ id, label, optional = false, error, children, className }: {
  id: string; label: string; optional?: boolean; error?: string; children: React.ReactElement; className?: string;
}) => (
  <div className={className}>
    <label htmlFor={id} className="mb-2 block text-base font-medium text-ink">
      {label}{optional && <span className="font-normal text-brown"> (optional)</span>}
    </label>
    {React.cloneElement(children, {
      id,
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `${id}-error` : undefined,
    })}
    <FieldError id={`${id}-error`}>{error}</FieldError>
  </div>
);

/** A labelled group of checkboxes sharing one name. */
export const CheckboxGroup = ({ name, legend, options, error, className }: {
  name: string; legend: string; options: string[]; error?: string; className?: string;
}) => (
  <fieldset className={className} aria-describedby={error ? `${name}-error` : undefined}>
    <legend className="mb-2 block text-base font-medium text-ink">{legend}</legend>
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {options.map((o) => (
        <label key={o} className="inline-flex min-h-11 cursor-pointer items-center gap-3">
          <input type="checkbox" name={name} value={o} className="size-5 rounded-[4px] border-brown accent-pine" />
          {o}
        </label>
      ))}
    </div>
    <FieldError id={`${name}-error`}>{error}</FieldError>
  </fieldset>
);

// ---------- Kept only while the remaining pages move to the new layouts ----------

/** Simple left-aligned page hero on Beige. */
export const PageHero = ({ badges = [], title, sub, children, media }: {
  badges?: React.ReactNode[]; title: React.ReactNode; sub?: React.ReactNode; children?: React.ReactNode; media?: React.ReactNode;
}) => (
  <section className="py-16 md:py-24">
    <Wrap>
      <Rise>
        {badges.length > 0 && <p className="eyebrow mb-4 flex flex-wrap gap-x-3">{badges.map((b, i) => <span key={i}>{b}</span>)}</p>}
        <h1 className="h1 max-w-[18ch]">{title}</h1>
        {sub && <p className="mt-6 max-w-text">{sub}</p>}
        {children && <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">{children}</div>}
        {media && <div className="mt-12">{media}</div>}
      </Rise>
    </Wrap>
  </section>
);
