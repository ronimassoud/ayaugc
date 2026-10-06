import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { PageHero, Btn, Card, Eyebrow, H2, PhoneFrame, Section, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta, type PagePath } from "@/config/seo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import ContactForm from "@/components/site/contact-form";

const Hero = ({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub: string; children?: React.ReactNode }) => (
  <PageHero badges={eyebrow ? [eyebrow] : []} title={title} sub={sub}>{children}</PageHero>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">{items.map((t) => <li key={t} className="flex gap-3"><Check className="shrink-0 text-primary" />{t}</li>)}</ul>
);

export const FreeGuide = () => (
  <Layout>
    <SEO {...meta["/free-guide"]} />
    <Hero eyebrow="Free guide" title="Your first steps into UGC, free" sub="What UGC is, what brands actually look for, and how to film your first sample this week.">
      <Btn to={site.guide.optInUrl}>Get the free guide</Btn>
    </Hero>
    <Section className="bg-card">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div><H2>Inside the guide</H2><div className="mt-8"><List items={["What brands pay for (and what they don't)", "The phone setup I started with", "3 easy formats to film first", "How to share your first samples"]} /></div></div>
        <PhoneFrame label="Guide preview" tone={3} className="mx-auto max-w-[240px]" />
      </div>
    </Section>
  </Layout>
);

export const Templates = () => (
  <Layout>
    <SEO {...meta["/templates"]} />
    <Hero eyebrow={site.templates.price} title="The templates I wish I had when I started" sub="Stop guessing. Send brands a professional contract, portfolio and rate card from day one.">
      <Btn to={site.templates.checkoutUrl}>Get the templates, {site.templates.price}</Btn>
    </Hero>
    <Section className="bg-card">
      <H2>What's in the bundle</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {[["Contract", "Protect your work and get paid on time."], ["Portfolio", "A clean layout to show your best videos."], ["Rate card", "Clear pricing brands understand."], ["Pitch (bonus)", "A ready-to-send email to win your first deals."]].map(([t, d], i) => (
          <div key={t}><PhoneFrame tone={i} className="mx-auto max-w-[180px]" /><h3 className="mt-4 text-xl">{t}</h3><p className="text-muted-foreground">{d}</p></div>
        ))}
      </div>
    </Section>
    <Section>
      <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div><h3 className="text-2xl">Want me to guide you through using them?</h3><p className="mt-2 text-muted-foreground">The 15-Day Challenge starts {site.challenge.startDate}.</p></div>
        <Btn to="/challenge" variant="outline">See the challenge</Btn>
      </Card>
    </Section>
  </Layout>
);

export const About = () => (
  <Layout>
    <SEO {...meta["/about"]} />
    <Hero eyebrow="About" title="Hi, I'm Aya" sub={`UGC creator and strategist. ${site.brandsCount} brands, ${"[2+]"} years, and a lot of lessons learned the hard way.`}>
      <Btn to="/challenge">Join the challenge</Btn>
      <Btn to="/brands" variant="outline">Work with me</Btn>
    </Hero>
    <Section className="bg-card">
      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
        <PhoneFrame label="Aya" tone={1} className="mx-auto max-w-[260px]" />
        <div className="space-y-5 text-lg text-muted-foreground">
          <p>[How Aya started in UGC.]</p>
          <p>[What she learned the hard way — no portfolio, no rate card, no idea how to pitch — and why she built the templates.]</p>
          <p>[How she works with brands today, and why she teaches new creators.]</p>
        </div>
      </div>
    </Section>
    <section id="contact" className="pb-24">
      <Wrap>
        <div className="max-w-xl">
          <H2>Email me directly</H2>
          <p className="mt-2 text-muted-foreground">Questions about UGC, the challenge or the templates? Fill this in and it opens in your own email app, ready to send to {site.email}.</p>
          <ContactForm className="mt-8" />
        </div>
      </Wrap>
    </section>
  </Layout>
);

export const Contact = () => (
  <Layout>
    <SEO {...meta["/contact"]} />
    <Hero title="Say hello" sub={`For general questions. Brands, please use the quote form on the For brands page. Or email ${site.email}.`} />
    <section className="pb-24">
      <Wrap>
        <ContactForm className="max-w-xl" />
      </Wrap>
    </section>
  </Layout>
);

const Legal = ({ title, path, sections }: { title: string; path: PagePath; sections: [string, string][] }) => (
  <Layout>
    <SEO {...meta[path]} />
    <PageHero title={title} />
    <section className="py-16 md:py-24">
      <Wrap className="max-w-3xl">
        <p className="mt-4 rounded-xl bg-secondary p-4 text-sm">Draft — to be reviewed by Aya before launch. Last updated [date].</p>
        {sections.map(([h, b]) => (<div key={h} className="mt-10"><h2 className="text-2xl">{h}</h2><p className="mt-3 text-muted-foreground">{b}</p></div>))}
        <p className="mt-10 text-muted-foreground">Questions: {site.email}</p>
      </Wrap>
    </section>
  </Layout>
);

export const Privacy = () => <Legal title="Privacy policy" path="/privacy" sections={[
  ["What I collect", "Your name and email when you join the guide, waitlist or challenge, and payment details handled securely by our payment provider. If you message me through the contact or quote forms, I receive what you write there."],
  ["Campaign tracking (how you found me)", "When you arrive from a tagged link on Instagram, TikTok or Pinterest, the site records which post or campaign brought you: the platform, the campaign label, and the page you landed on. This is a simple counter — no name, email, cookies or device identifiers are attached, and I can't link it back to you. I use it only to see which posts are worth making more of."],
  ["How I use it", "To deliver what you signed up for, send related emails, and understand which content brings visitors. You can unsubscribe from emails at any time."],
  ["Who I share it with", "Only the services that run the site, email and payments. I never sell your data."],
  ["Your rights", "Ask to see, correct or delete your data at any time by emailing me."],
]} />;

export const Terms = () => <Legal title="Terms" path="/terms" sections={[
  ["Using this site", "Content on this site is for your personal use and may not be copied or resold."],
  ["Purchases", "Prices are shown in AED. Access details are emailed after payment."],
  ["Digital products", "Templates and course content are licensed to you personally and may not be shared."],
  ["Results", "UGC income depends on your effort and the market. No earnings are guaranteed."],
]} />;

export const Refunds = () => <Legal title="Refund policy" path="/refunds" sections={[
  ["15-Day Challenge", "[Refund window and conditions, e.g. full refund up to day [x] if you've completed the first tasks.]"],
  ["Templates", "[Refund terms for digital downloads.]"],
  ["How to request", "Email me with your order details and I'll reply within [x] working days."],
]} />;
