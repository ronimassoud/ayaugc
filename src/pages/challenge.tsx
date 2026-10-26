import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Clapperboard, LayoutGrid, PenLine, Send, Tag, Target, type LucideIcon } from "lucide-react";
import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { Btn, Card, CheckList, DayBadge, Eyebrow, FAQ, H1, H2, MetaPills, PhoneFrame, Rise, Section, Steps, Tip, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { challengeCta } from "@/config/challenge";
import { challengeContent as t, type FaqItem } from "@/content/challenge";

const outcomeIcons: Record<string, LucideIcon> = { niche: Target, hooks: PenLine, videos: Clapperboard, page: LayoutGrid, prices: Tag, pipeline: Send };

/** Answer text plus an optional trailing link, e.g. "Yes, within the refund policy ›". */
const FaqAnswer = ({ item }: { item: FaqItem }) => (
  <p>
    {item.a}
    {item.link && <> <Btn to={item.link.to} variant="link" className="min-h-0">{item.link.label}</Btn></>}
  </p>
);

/** "Doors close [date] · Refund policy › · This is a skills program, not an income guarantee." */
const TermsCaption = ({ close, refund, note, className }: { close: string; refund: string; note: string; className?: string }) => (
  <p className={`caption ${className ?? ""}`}>
    {close} · <Link to="/refunds" className="text-pine underline-offset-4 hover:underline">{refund} <span aria-hidden className="rtl:-scale-x-100">›</span></Link> · {note}
  </p>
);

/** Watches an element and reports whether it is on screen. */
const useOnScreen = <T extends Element>() => {
  const ref = useRef<T>(null);
  const [onScreen, setOnScreen] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, onScreen] as const;
};

const Challenge = () => {
  const cta = challengeCta();
  const [heroRef, heroOnScreen] = useOnScreen<HTMLElement>();
  const [joinRef, joinOnScreen] = useOnScreen<HTMLDivElement>();
  const showSticky = !heroOnScreen && !joinOnScreen;
  let day = 0;

  return (
    <Layout>
      <SEO {...meta["/challenge"]} />

      {/* 6.1 Hero: offer, date and price on one phone screen. */}
      <section ref={heroRef} className="pb-16 pt-6 md:py-24">
        <Wrap>
          <Rise>
            <div className="flex items-end gap-3" aria-label={site.challenge.name}>
              <span aria-hidden className="num text-[72px] leading-[0.8] md:text-[120px]">{t.hero.lockupNumber}</span>
              <span aria-hidden className="eyebrow mb-1 leading-[1.35]">{t.hero.lockupLabel.map((l) => <span key={l} className="block">{l}</span>)}</span>
            </div>
            <H1 className="mt-5 md:mt-8">{t.hero.title}</H1>
            <p className="mt-4 max-w-text md:mt-6">{t.hero.body}</p>
            <MetaPills items={t.hero.meta} className="mt-5 md:mt-6" />
            <div className="mt-5 md:mt-8"><Btn to={cta.url} systeme>{cta.label}</Btn></div>
            <TermsCaption {...t.hero} className="mt-3 max-w-text" />
          </Rise>
        </Wrap>
      </section>

      {/* 6.2 The problem */}
      <Section>
        <H2>{t.problem.title}</H2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.problem.quotes.map((q) => (
            <Card key={q}><p className="text-[20px] font-semibold leading-snug">{q}</p></Card>
          ))}
        </div>
        <p className="mt-8 max-w-text">{t.problem.after}</p>
      </Section>

      {/* 6.3 What you'll have by Day 15 */}
      <Section>
        <H2>{t.outcomes.title}</H2>
        <ul className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {t.outcomes.items.map((o) => {
            const Icon = outcomeIcons[o.icon];
            return (
              <li key={o.title}>
                <Icon aria-hidden strokeWidth={1.75} className="size-6 text-pine" />
                <h3 className="h4 mt-4">{o.title}</h3>
                <p className="supporting mt-1">{o.body}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* 6.4 The 15 days */}
      <Section id="days">
        <H2>{t.days.title}</H2>
        <p className="supporting mt-3 max-w-text">{t.days.intro}</p>
        <div className="mt-10 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {t.days.phases.map((phase) => (
            <div key={phase.name}>
              <h3 className="eyebrow border-b border-line pb-3">{phase.name}</h3>
              <ol>
                {phase.days.map((d) => {
                  day += 1;
                  return (
                    <li key={d.title} className="flex gap-4 border-b border-line py-4">
                      <DayBadge day={day} />
                      <div>
                        <p className="h4">{d.title}</p>
                        <p className="supporting mt-1">{d.line}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
        <Tip className="mt-12">{t.days.tip}</Tip>
        <div className="mt-10"><Btn to={cta.url} systeme>{cta.label}</Btn></div>
      </Section>

      {/* 6.5 How it works */}
      <Section>
        <H2>{t.how.title}</H2>
        <Steps items={t.how.steps} className="mt-10" />
        <p className="caption mt-10">{t.how.caption}</p>
      </Section>

      {/* 6.6 Meet Aya */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.3fr]">
          <div className="grid max-w-[420px] grid-cols-2 gap-4">
            {t.meet.phones.map((p) => <PhoneFrame key={p} label={p} />)}
          </div>
          <div>
            <Eyebrow>{t.meet.eyebrow}</Eyebrow>
            <H2>{t.meet.title}</H2>
            <p className="mt-6 max-w-text">{t.meet.body}</p>
            <div className="mt-4"><Btn to="/about" variant="link">{t.meet.link}</Btn></div>
          </div>
        </div>
      </Section>

      {/* 6.7 For you / not for you */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="h3">{t.fit.yes.title}</h2>
            <CheckList items={t.fit.yes.items} className="mt-6" />
          </Card>
          <Card>
            <h2 className="h3">{t.fit.no.title}</h2>
            <CheckList items={t.fit.no.items} icon="x" className="mt-6" />
          </Card>
        </div>
      </Section>

      {/* 6.8 Proof: only real, consented quotes, and only once there are at least two. */}
      {site.testimonials.length >= 2 && (
        <Section>
          <H2>{t.proof.title}</H2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {site.testimonials.map((q) => (
              <Card key={q.quote} as="figure">
                <blockquote>{q.quote}</blockquote>
                <figcaption className="caption mt-4">{q.name}, {q.city}</figcaption>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* 6.9 Price and inclusions */}
      <Section id="join">
        <div ref={joinRef} className="mx-auto max-w-[560px]">
          <Card className="text-center md:p-12">
            <p className="eyebrow">{t.price.eyebrow}</p>
            <p className="display num mt-4">{t.price.amount}</p>
            <p className="supporting mt-2">{t.price.terms}</p>
            <CheckList items={t.price.includes} className="mt-8 text-start" />
            <p className="supporting mt-6 text-start">{t.price.addOn}</p>
            <div className="mt-8"><Btn to={cta.url} systeme className="md:w-full">{cta.label}</Btn></div>
            <TermsCaption {...t.price} className="mt-4" />
          </Card>
        </div>
      </Section>

      {/* 6.10 FAQ */}
      <Section>
        <H2>{t.faq.title}</H2>
        <FAQ className="mt-8" items={t.faq.items.map((item) => ({ q: item.q, a: <FaqAnswer item={item} /> }))} />
      </Section>

      {/* 6.11 Final CTA on Pine (this page has no announcement band). */}
      <Section tone="pine">
        <h2 className="h2 max-w-text text-beige">{t.final.title}</h2>
        <p className="mt-4">{t.final.meta}</p>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
          <Btn to={cta.url} systeme variant="onPine">{cta.label}</Btn>
          <Btn to="/free-guide" variant="linkOnPine">{t.final.fallback}</Btn>
        </div>
      </Section>

      {/* 6.12 Mobile sticky bar: after the hero, hidden while the price card is on screen. */}
      <div
        aria-hidden={!showSticky}
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-line bg-beige pb-[env(safe-area-inset-bottom)] transition-[transform,visibility] duration-brand ease-brand md:hidden ${showSticky ? "visible translate-y-0" : "invisible translate-y-full"}`}
      >
        <Wrap className="flex h-[72px] items-center justify-between gap-4">
          <div>
            <p className="caption">{t.sticky.starts}</p>
            <p className="h4">{t.sticky.price}</p>
          </div>
          <Btn to={cta.url} systeme className="w-auto">{t.sticky.button}</Btn>
        </Wrap>
      </div>
    </Layout>
  );
};
export default Challenge;
