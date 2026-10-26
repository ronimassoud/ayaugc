import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { Btn, Card, CheckList, DayBadge, Eyebrow, H1, H2, PhoneFrame, Rise, Section, Steps, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { challengeCta } from "@/config/challenge";
import { homeContent as t } from "@/content/home";

const Home = () => {
  const cta = challengeCta();
  return (
    <Layout band>
      <SEO {...meta["/"]} />

      {/* 5.1 Hero: text left, three phone frames right (below on mobile). */}
      <section className="py-12 md:py-24">
        <Wrap>
          <Rise className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
              <H1 display className="max-w-[14ch]">{t.hero.title}</H1>
              <p className="mt-6 max-w-text">{t.hero.body}</p>
              <div className="mt-8 flex flex-col gap-4 md:flex-row">
                <Btn to={cta.url} systeme>{cta.label}</Btn>
                <Btn to="/brands#quote" variant="secondary">{t.hero.quote}</Btn>
              </div>
              <p className="caption mt-4">
                <strong className="font-semibold text-ink">{t.hero.strip.name}</strong>
                {t.hero.strip.facts.map((f) => <span key={f}> · {f}</span>)}
              </p>
            </div>
            <div className="grid max-w-[480px] grid-cols-3 gap-3 lg:col-span-5 lg:max-w-none">
              {t.hero.phones.map((p, i) => <PhoneFrame key={p} label={p} className={i === 1 ? "lg:-translate-y-6" : undefined} />)}
            </div>
          </Rise>
        </Wrap>
      </section>

      {/* 5.2 Proof strip: category placeholders until brands give written permission. */}
      <section className="border-y border-line py-12">
        <Wrap>
          <p className="caption text-center">{t.proof.caption}</p>
          <ul className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0">
            {t.proof.categories.map((cat) => (
              <li key={cat} className="w-[calc((100%-2rem)/3)] shrink-0 snap-start md:w-auto">
                <PhoneFrame label={cat} />
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      {/* 5.3 Two-lane chooser: whole cards are clickable. */}
      <Section>
        <H2>{t.lanes.title}</H2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card clickable>
            <Eyebrow>{t.lanes.studio.eyebrow}</Eyebrow>
            <h3 className="h3">{t.lanes.studio.title}</h3>
            <p className="mt-3">{t.lanes.studio.body}</p>
            <div className="mt-8"><Btn to="/brands#quote" variant="secondary" stretched>{t.lanes.studio.cta}</Btn></div>
          </Card>
          <Card variant="school" clickable>
            <Eyebrow className="text-ink">{t.lanes.school.eyebrow}</Eyebrow>
            <h3 className="h3">{t.lanes.school.title}</h3>
            <p className="mt-3">{t.lanes.school.body}</p>
            <div className="mt-8"><Btn to="/challenge" stretched>{t.lanes.school.cta}</Btn></div>
          </Card>
        </div>
      </Section>

      {/* 5.4 Challenge feature: Beige, with the day preview on a Mint school card. */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{t.challenge.eyebrow}</Eyebrow>
            <H2>{t.challenge.title}</H2>
            <p className="mt-6 max-w-text">{t.challenge.body}</p>
            <CheckList items={t.challenge.outcomes} className="mt-6" />
            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
              <Btn to={cta.url} systeme>{cta.label}</Btn>
              <Btn to="/challenge#days" variant="link">{t.challenge.link}</Btn>
            </div>
            <p className="caption mt-4">{t.challenge.caption}</p>
          </div>
          <Card variant="school" className="space-y-6">
            {t.challenge.phases.map((phase) => (
              <div key={phase.name}>
                <p className="eyebrow mb-3 text-ink">{phase.name}</p>
                <div className="flex flex-wrap gap-2">
                  {phase.days.map((d) => <DayBadge key={d} day={d} state={d === 1 ? "today" : "ahead"} className={d === 1 ? undefined : "bg-beige"} />)}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </Section>

      {/* 5.5 Brands teaser */}
      <Section>
        <Eyebrow>{t.brands.eyebrow}</Eyebrow>
        <H2>{t.brands.title}</H2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.brands.services.map((s) => (
            <Card key={s.title}>
              <h3 className="h4">{s.title}</h3>
              <p className="supporting mt-2">{s.body}</p>
            </Card>
          ))}
        </div>
        <Steps items={t.brands.steps} className="mt-12" />
        <div className="mt-10"><Btn to="/brands" variant="secondary">{t.brands.cta}</Btn></div>
      </Section>

      {/* 5.6 About Aya */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
          <div role="img" aria-label={`${t.about.portrait} (photo coming soon)`} className="relative aspect-[4/5] max-w-[420px] rounded-card bg-disabled-bg">
            <span className="caption absolute inset-x-4 bottom-4 text-center">{t.about.portrait}</span>
          </div>
          <div>
            <Eyebrow>{t.about.eyebrow}</Eyebrow>
            <H2>{t.about.title}</H2>
            <p className="mt-6 max-w-text">{t.about.body}</p>
            <div className="mt-4"><Btn to="/about" variant="link">{t.about.link}</Btn></div>
          </div>
        </div>
      </Section>

      {/* 5.7 Free resources: two secondary buttons, no primary. */}
      <Section>
        <H2>{t.resources.title}</H2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[{ ...t.resources.guide, to: "/free-guide" }, { ...t.resources.templates, to: "/templates" }].map((r) => (
            <Card key={r.to} variant="school" clickable>
              <Eyebrow className="text-ink">{r.eyebrow}</Eyebrow>
              <h3 className="h3">{r.title}</h3>
              <p className="mt-3">{r.body}</p>
              <div className="mt-8"><Btn to={r.to} variant="secondary" stretched>{r.cta}</Btn></div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 5.8 Testimonials: only once real, consented quotes exist. */}
      {site.testimonials.length > 0 && (
        <Section>
          <H2>{t.testimonials.title}</H2>
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
    </Layout>
  );
};
export default Home;
