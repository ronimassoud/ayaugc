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
  ["What I collect", "Your name and email when you join the guide, waitlist or challenge, and payment details handled securely by our payment provider. If you message me through the contact or quote forms, I receive what you write there. The challenge runs in a WhatsApp community, so if you join it your phone number is visible to the community admins."],
  ["Campaign tracking (how you found me)", "When you arrive from a tagged link on Instagram or Pinterest, the site records which post or campaign brought you: the platform, the campaign label, and the page you landed on. This is a simple counter — no name, email, cookies or device identifiers are attached, and I can't link it back to you. I use it only to see which posts are worth making more of."],
  ["How I use it", "To deliver what you signed up for, send related emails, and understand which content brings visitors. You can unsubscribe from emails at any time."],
  ["Who I share it with", "Only the services that run the site, email and payments. I never sell your data."],
  ["Your rights", "Ask to see, correct or delete your data at any time by emailing me."],
]} />;

export const Terms = () => <Legal title="Terms" path="/terms" sections={[
  ["Using this site", "Content on this site is for your personal use and may not be copied or resold."],
  ["Purchases", "Prices are shown in AED. Access details are emailed after payment."],
  ["Digital products", "Templates, ebooks and challenge content are licensed to you personally and may not be shared."],
  ["Results", "UGC income depends on your effort and the market. No earnings are guaranteed."],
]} />;

export const Refunds = () => <Legal title="Refund policy" path="/refunds" sections={[
  ["15-Day Challenge", "[Refund window and conditions, e.g. full refund up to day [x] if you've completed the first tasks.]"],
  ["Templates", "[Refund terms for digital downloads.]"],
  ["How to request", "Email me with your order details and I'll reply within [x] working days."],
]} />;
