import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { PageHero, Btn, Card, Eyebrow, H2, PhoneFrame, Section, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

const c = site.challenge;
const JOIN = c.checkoutUrl;

const phases = [
  { name: "Days 1–5 · Foundations", days: ["What UGC is and what brands buy", "Set up your phone, light and sound", "Hooks that stop the scroll", "Film your first product video", "Edit simply on your phone"] },
  { name: "Days 6–10 · Portfolio", days: ["Choose your niche", "Unboxing and testimonial formats", "Film portfolio video #2", "Writing your own scripts", "Build your portfolio page"] },
  { name: "Days 11–15 · Getting paid", days: ["Set your rates", "Build your rate card", "Find brands to pitch", "Write and send your pitches", "Celebrate and plan what's next"] },
];

const faqs = [
  ["Do I need followers?", "No. Brands pay UGC creators for content, not audience size."],
  ["I'm shy on camera. Can I still do this?", "Yes. Many UGC formats show only hands and products. We build confidence step by step."],
  ["What phone do I need?", "Any recent smartphone with a decent camera is enough."],
  ["What time zone is it in?", "Any. Each day's ebook arrives by email, so you can read it whenever suits you."],
  ["What if I miss a day?", "Catch up anytime. The ebooks are yours to download and keep."],
  ["Can I get a refund?", "Yes, within the terms of the refund policy."],
];

const Challenge = () => (
  <Layout hideCta>
    <SEO {...meta["/challenge"]} />

    <PageHero
      badges={[`15-Day UGC Challenge`, <span key="s">Starts <span className="text-white">{c.startDate}</span></span>, `${c.minutesPerDay} min a day`]}
      title="Go from zero to your first UGC portfolio in 15 days"
      sub="One ebook in your inbox every day, and a WhatsApp community to keep you going. By day 15 you'll have [portfolio videos, a rate card and pitches ready to send]."
      media={<p className="text-center text-sm text-muted">Doors close {c.closeDate} · <Link to="/refunds" className="underline">Refund policy</Link></p>}
    >
      <Btn to={JOIN}>Join the challenge, {c.price}</Btn>
    </PageHero>

    <Section className="bg-card">
      <H2>Sound familiar?</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["\"I don't know what to film.\"", "\"I have no portfolio to show brands.\"", "\"I have no idea what to charge.\""].map((q) => (
          <Card key={q} className="bg-background"><p className="font-semibold text-2xl">{q}</p></Card>
        ))}
      </div>
    </Section>

    <Section>
      <H2>What you'll have on day 15</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["[3] portfolio videos", "A rate card", "First pitches sent"].map((o, i) => (
          <div key={o}><PhoneFrame tone={i + 1} className="mx-auto max-w-[200px]" /><p className="mt-4 text-center text-xl font-medium">{o}</p></div>
        ))}
      </div>
    </Section>

    <Section className="bg-card">
      <H2>The 15 days</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {phases.map((p, pi) => (
          <Card key={p.name} className="bg-background">
            <h3 className="text-xl">{p.name}</h3>
            <Accordion type="single" collapsible className="mt-4">
              {p.days.map((d, i) => (
                <AccordionItem key={d} value={d}>
                  <AccordionTrigger className="text-left text-base">Day {pi * 5 + i + 1}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{d}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        ))}
      </div>
      <div className="mt-10"><Btn to={JOIN}>Join the challenge</Btn></div>
    </Section>

    <Section>
      <H2>How it works</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {[["Daily ebooks", "One ebook by email each day, to download and keep as a reference."], ["WhatsApp community", "You're added as soon as you join."], ["Time", `${c.minutesPerDay} minutes a day.`], ["Monthly check-in", "A check-in once a month on how your challenge is going."]].map(([t, d]) => (
          <Card key={t}><h3 className="text-xl">{t}</h3><p className="mt-2 text-muted-foreground">{d}</p></Card>
        ))}
      </div>
    </Section>

    <Section>
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div className="grid grid-cols-2 gap-4"><PhoneFrame tone={0} label="Brand work" /><PhoneFrame tone={4} label="Brand work" /></div>
        <div>
          <Eyebrow>Meet Aya</Eyebrow>
          <H2>{site.brandsCount} brands, and I started exactly where you are</H2>
          <p className="mt-6 text-lg text-muted-foreground">[Short story from Aya: how she started, what she learned, why she built this challenge.]</p>
        </div>
      </div>
    </Section>

    <Section className="bg-card">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-background">
          <h3 className="text-2xl">This is for you if…</h3>
          <ul className="mt-5 space-y-3">{["You're a beginner who wants a clear plan", "You can film a little every day", "You want real samples to show brands"].map((t) => <li key={t} className="flex gap-3"><Check className="shrink-0 text-primary" />{t}</li>)}</ul>
        </Card>
        <Card className="bg-background">
          <h3 className="text-2xl">It's not for you if…</h3>
          <ul className="mt-5 space-y-3">{["You want guaranteed income", "You won't film during the 15 days", "You're already an experienced UGC creator"].map((t) => <li key={t} className="flex gap-3"><X className="shrink-0 text-accent" />{t}</li>)}</ul>
        </Card>
      </div>
      <div className="mt-10"><Btn to={JOIN}>Join the challenge</Btn></div>
    </Section>

    <Section>
      <H2>What people say</H2>
      <p className="mt-4 text-muted-foreground">[Feedback from waitlist and template buyers, shared with their consent, goes here.]</p>
    </Section>

    <Section className="bg-card">
      <div className="mx-auto max-w-xl rounded-lg border border-border bg-background p-8 text-center md:p-12">
        <p className="text-muted-foreground">Cohort starts {c.startDate}</p>
        <p className="mt-2 font-semibold text-6xl">{c.price}</p>
        <ul className="mt-8 space-y-3 text-left">
          {["15 daily ebooks by email, yours to keep", "WhatsApp community", "Monthly check-in on your progress", "Rate card and pitch templates"].map((t) => <li key={t} className="flex gap-3"><Check className="shrink-0 text-primary" />{t}</li>)}
        </ul>
        <div className="mt-8"><Btn to={JOIN} className="sm:w-full">Join the challenge</Btn></div>
        <p className="mt-3 text-sm text-muted-foreground">Doors close {c.closeDate} · <Link to="/refunds" className="underline">Refund policy</Link></p>
      </div>
    </Section>

    <Section>
      <H2>Questions</H2>
      <Accordion type="single" collapsible className="mt-8 max-w-3xl">
        {faqs.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger className="text-left text-lg">{q}</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>

    <section className="bg-ink py-16 pb-28 text-center text-ink-foreground md:py-24">
      <Wrap>
        <h2 className="h3">Starts {c.startDate} · {c.price}</h2>
        <div className="mt-8"><Btn to={JOIN}>Save my spot</Btn></div>
        <p className="mt-6 text-muted">Not ready? <Link to="/free-guide" className="underline">Send me the free guide</Link></p>
      </Wrap>
    </section>

    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <Btn to={JOIN}>Join the challenge, {c.price}</Btn>
    </div>
  </Layout>
);
export default Challenge;
