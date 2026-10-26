import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { Btn, Card, CheckList, Eyebrow, H1, H2, ProductCover, Rise, Section, Tip, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { freeGuideContent as t } from "@/content/free-guide";

const FreeGuide = () => (
  <Layout band>
    <SEO {...meta["/free-guide"]} />

    <section className="py-12 md:py-24">
      <Wrap>
        <Rise className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1>{t.hero.title}</H1>
            <p className="mt-6 max-w-text">{t.hero.body}</p>
            <div className="mt-8"><Btn to={site.guide.optInUrl} systeme>{t.hero.cta}</Btn></div>
            <p className="caption mt-3">{t.hero.caption}</p>
          </div>
          <ProductCover tone="mint" {...t.cover} className="mx-auto md:mx-0 md:justify-self-end" />
        </Rise>
      </Wrap>
    </section>

    <Section>
      <H2>{t.inside.title} <span className="font-sans text-base not-italic text-brown">{t.inside.note}</span></H2>
      <CheckList items={t.inside.items} className="mt-8 max-w-text" />
      <Tip className="mt-12">{t.tip}</Tip>
    </Section>

    <Section>
      <Card variant="school" clickable className="max-w-3xl">
        <h2 className="h3">{t.next.title}</h2>
        <p className="mt-3">{t.next.body}</p>
        <div className="mt-4"><Btn to="/challenge#days" variant="link" stretched>{t.next.link}</Btn></div>
      </Card>
    </Section>
  </Layout>
);
export default FreeGuide;
