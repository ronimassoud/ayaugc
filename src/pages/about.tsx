import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import LaneCards from "@/components/site/lane-cards";
import { Btn, Eyebrow, H1, H2, Rise, Section, Takeaway, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { aboutContent as t } from "@/content/about";

const About = () => (
  <Layout band>
    <SEO {...meta["/about"]} />

    <section className="py-12 md:py-24">
      <Wrap>
        <Rise className="grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1>{t.hero.title}</H1>
            <p className="mt-6 max-w-text">{t.hero.body}</p>
          </div>
          <div role="img" aria-label={`${t.hero.portrait} (photo coming soon)`} className="relative mx-auto aspect-[4/5] w-full max-w-[400px] rounded-card bg-disabled-bg md:mx-0 md:justify-self-end">
            <span className="caption absolute inset-x-4 bottom-4 text-center">{t.hero.portrait}</span>
          </div>
        </Rise>
      </Wrap>
    </section>

    {/* Story: Work Sans only, text block max 680 px. */}
    <Section>
      <div className="max-w-text">
        <H2>{t.story.title}</H2>
        <div className="mt-6 space-y-4">
          {t.story.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </Section>

    <Section className="py-0 md:py-0">
      <Takeaway>{t.takeaway}</Takeaway>
    </Section>

    <Section>
      <H2>{t.values.title}</H2>
      <ul className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
        {t.values.items.map((v) => (
          <li key={v.title} className="grid gap-1 py-5 md:grid-cols-[16rem_1fr] md:gap-8">
            <h3 className="h4">{v.title}</h3>
            <p className="supporting">{v.body}</p>
          </li>
        ))}
      </ul>
    </Section>

    <Section>
      <H2>{t.kit.title}</H2>
      <p className="mt-6 max-w-text">{t.kit.body}</p>
      <div className="mt-4"><Btn to={site.equipmentUrl} variant="link">{t.kit.link}</Btn></div>
    </Section>

    <Section>
      <LaneCards />
    </Section>
  </Layout>
);
export default About;
