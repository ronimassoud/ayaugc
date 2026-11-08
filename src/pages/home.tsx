import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import LaneCards from "@/components/site/lane-cards";
import { AyaPortrait } from "@/components/site/aya-portrait";
import DriftWall from "@/components/site/drift-wall";
import CircularCarousel from "@/components/site/circular-carousel";
import { Btn, Card, CheckList, Eyebrow, H1, H2, Rise, Section, Steps, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { challengeCta } from "@/config/challenge";
import { photos, samples } from "@/config/media";
import { homeContent as t } from "@/content/home";

// Hero wall: Aya's photos alternating with stills from her sample videos, so every column mixes both.
const wallPhotos = Object.values(photos).map((p) => ({ image: p.src, title: p.alt }));
const wallStills = samples.map((s) => ({ image: s.thumb, title: s.label }));
const wallItems = wallStills.flatMap((s, i) => (wallPhotos[i] ? [wallPhotos[i], s] : [s]));

const Home = () => {
  const cta = challengeCta();
  return (
    <Layout band wash="home">
      <SEO {...meta["/"]} />

      {/* 5.1 Hero: text left, drifting photo wall right (below on mobile). Tight top so the headline sits close to the band. */}
      <section className="pb-12 pt-8 md:pb-24 md:pt-12">
        <Wrap>
          <Rise className="grid items-center gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
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
            {/* A drifting 3D wall of 9:16 tiles: Aya's photos mixed with stills from her sample videos.
                Hover lifts a tile and stops its column. */}
            <div className="-mx-6 h-[360px] md:mx-0 md:h-[520px] lg:col-span-5 lg:h-[600px]">
              <DriftWall
                items={wallItems}
                label={t.hero.wallLabel}
                columns={4}
                tileWidth={120}
                tileHeight={213}
                gap={16}
                radius={20}
                tilt={14}
                turn={-12}
                depth={100}
                speed={26}
                lift={48}
                dim={1}
                fade={0.45}
              />
            </div>
          </Rise>
        </Wrap>
      </section>

      {/* 5.2 Proof strip: covers of Aya's sample videos, shown with each brand's permission. */}
      <section className="overflow-hidden py-12">
        <Wrap>
          <p className="caption text-center">{t.proof.caption}</p>
        </Wrap>
        {/* A slowly turning ring of borderless 9:16 cards: about 80% of the page width on larger screens (the ring fills
            about 94% of this 86vw box), on phones a wider box whose sides run off the screen. Each card is the cover of
            one sample video. Drag or use the arrow keys to turn it. */}
        <div className="proof-ring mt-6 md:mt-8">
          <CircularCarousel
            items={samples.map((s) => ({ src: s.poster, video: s.loop, alt: `${s.label} sample video` }))}
            curve={0}
            label={t.proof.carouselLabel}
            cardWidth={360}
            aspectRatio={9 / 16}
            gap={40}
            cornerRadius={20}
            speed={12}
            fadeColor="rgb(var(--background))"
            depthFade={0.5}
            innerShade={0.85}
          />
        </div>
      </section>

      {/* 5.3 Two-lane chooser */}
      <Section>
        <LaneCards />
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
          {/* The three phases as day intervals on Pine (like the price card): Beige range over a white Work Sans heading. */}
          <Card variant="pine" className="py-2 md:py-2">
            <ol className="divide-y divide-beige/20">
              {t.challenge.phases.map((phase) => (
                <li key={phase.name} className="py-6">
                  <p className="eyebrow text-beige">{t.challenge.dayRange(phase.from, phase.to)}</p>
                  <p className="h3 mt-2 text-white">{phase.name}</p>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

      {/* 5.5 Brands teaser */}
      <Section>
        <Eyebrow>{t.brands.eyebrow}</Eyebrow>
        <H2>{t.brands.title}</H2>
        <div className="stagger mt-10 grid gap-6 md:grid-cols-3">
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
          <AyaPortrait label={t.about.portrait} />
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
        <div className="stagger mt-10 grid gap-6 md:grid-cols-2">
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
