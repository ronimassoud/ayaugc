import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { PageHero, Btn, Card, Eyebrow, H2, PhoneFrame, Section, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const Home = () => (
  <Layout>
    <SEO {...meta["/"]} />

    <PageHero
      badges={[`UGC for ${site.brandsCount} brands`, <span key="c">Next cohort starts <span className="text-white">{site.challenge.startDate}</span></span>]}
      title="UGC that sells, and the skills to make it yourself"
      sub={`I'm Aya. I've created UGC for ${site.brandsCount} brands. I work with brands on content that converts, and I teach new creators how to land their first deals.`}
      media={<div className="mx-auto grid max-w-[640px] grid-cols-3 gap-4"><PhoneFrame label="Aya filming" tone={3} /><PhoneFrame label="Product in hand" tone={1} /><PhoneFrame label="Behind the scenes" tone={2} /></div>}
    >
      <Btn to="/challenge">Join the 15-Day Challenge</Btn>
      <Btn to="/brands" variant="outline">Hire me for your brand</Btn>
      <p className="text-sm text-muted sm:ml-2">{site.challenge.price} · doors close {site.challenge.closeDate}</p>
    </PageHero>

    <section className="border-y border-border bg-card py-12">
      <Wrap>
        <p className="mb-6 text-center text-muted-foreground">Real work for {site.brandsCount} brands since {site.sinceYear}</p>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
          {["Skincare", "Food", "Tech", "Fashion", "Home", "Fitness"].map((l, i) => <PhoneFrame key={l} label={l} tone={i} />)}
        </div>
      </Wrap>
    </section>

    <Section>
      <H2>Where are you starting?</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          { t: "I want to become a UGC creator", d: "Start with the 15-day challenge, the free guide or my templates.", to: "/challenge" },
          { t: "I need UGC for my brand", d: "Strategy, scripting and creator selection for ads and organic.", to: "/brands" },
        ].map((c) => (
          <Link key={c.t} to={c.to} className="group rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary">
            <h3 className="text-2xl md:text-3xl">{c.t}</h3>
            <p className="mt-3 text-muted-foreground">{c.d}</p>
            <ArrowRight className="mt-6 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </Section>

    <section className="bg-ink py-16 text-ink-foreground md:py-28">
      <Wrap className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.14em] text-muted">15-Day UGC Challenge · starts {site.challenge.startDate}</p>
          <h2 className="h3">What you'll have by day 15</h2>
          <ul className="mt-8 space-y-4 text-lg">
            {["[3] portfolio videos you're proud of", "A rate card you can send today", "Your first pitches sent to real brands"].map((b) => (
              <li key={b} className="flex gap-3"><Check className="mt-1 shrink-0" />{b}</li>
            ))}
          </ul>
          <div className="mt-8"><Btn to="/challenge">Join the challenge</Btn></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <PhoneFrame label="Day 1" tone={2} /><PhoneFrame label="Day 15" tone={4} />
        </div>
      </Wrap>
    </section>

    <Section>
      <Eyebrow>For brands</Eyebrow>
      <H2>UGC built to perform, from brief to final cut</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[["Strategy", "Angles and hooks matched to your audience and ad goals."], ["Scripting", "Short, tested scripts that sound like real people."], ["Creator selection", "The right faces for your product, briefed and managed."]].map(([t, d]) => (
          <Card key={t}><h3 className="text-2xl">{t}</h3><p className="mt-3 text-muted-foreground">{d}</p></Card>
        ))}
      </div>
      <ol className="mt-10 grid gap-4 md:grid-cols-4">
        {["Brief", "Concepts & scripts", "Filming", "Delivery & revisions"].map((s, i) => (
          <li key={s} className="flex items-center gap-3"><span className="font-semibold text-3xl text-primary">0{i + 1}</span>{s}</li>
        ))}
      </ol>
      <div className="mt-10"><Btn to="/brands" variant="outline">See brand services</Btn></div>
    </Section>

    <section className="bg-card py-16 md:py-28">
      <Wrap className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div className="mx-auto w-full max-w-[260px]"><PhoneFrame label="Aya" tone={1} /></div>
        <div>
          <Eyebrow>About Aya</Eyebrow>
          <H2>I learned UGC the hard way, so you don't have to</H2>
          <p className="mt-6 text-lg text-muted-foreground">
            When I started, I had no portfolio, no rate card and no idea how to pitch. I built every template I now sell because I needed it myself. [Aya to add her story in her own words.]
          </p>
          <div className="mt-6"><Btn to="/about" variant="ghost">Read more →</Btn></div>
        </div>
      </Wrap>
    </section>

    <Section>
      <H2>Not ready for the challenge yet?</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <p className="text-sm text-primary">Free</p>
          <h3 className="mt-2 text-2xl">Beginner UGC guide</h3>
          <p className="mt-3 text-muted-foreground">What UGC is, what brands look for, and how to film your first sample.</p>
          <div className="mt-6"><Btn to="/free-guide" variant="outline">Get the free guide</Btn></div>
        </Card>
        <Card>
          <p className="text-sm text-primary">{site.templates.price}</p>
          <h3 className="mt-2 text-2xl">UGC template bundle</h3>
          <p className="mt-3 text-muted-foreground">Contract, portfolio, rate card, and a bonus pitch template.</p>
          <div className="mt-6"><Btn to="/templates" variant="outline">Get the templates</Btn></div>
        </Card>
      </div>
    </Section>
  </Layout>
);
export default Home;
