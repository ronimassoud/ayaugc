import { Link } from "react-router-dom";
import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { Btn, Card, Eyebrow, FAQ, H1, H2, ProductCover, Rise, Section, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { templatesContent as t } from "@/content/templates";

const Templates = () => (
  <Layout band>
    <SEO {...meta["/templates"]} />

    <section className="py-12 md:py-24">
      <Wrap>
        <Rise className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1>{t.hero.title}</H1>
            <p className="mt-6 max-w-text">{t.hero.body}</p>
            <div className="mt-8"><Btn to={site.templates.checkoutUrl} systeme>{t.hero.cta}</Btn></div>
            <p className="caption mt-3">
              {t.hero.caption} · <Link to="/refunds" className="text-pine underline-offset-4 hover:underline">{t.hero.refund} <span aria-hidden className="rtl:-scale-x-100">›</span></Link>
            </p>
          </div>
          <ProductCover tone="beige" {...t.cover} className="mx-auto md:mx-0 md:justify-self-end" />
        </Rise>
      </Wrap>
    </section>

    <Section>
      <H2>{t.bundle.title}</H2>
      <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {t.bundle.items.map((item) => (
          <Card key={item.title} as="li" className="p-4 md:p-6">
            <div role="img" aria-label={`${item.title} preview (coming soon)`} className="aspect-[3/4] rounded-sm bg-disabled-bg" />
            <h3 className="h4 mt-4">{item.title}</h3>
            <p className="supporting mt-1">{item.body}</p>
          </Card>
        ))}
      </ul>
      <p className="caption mt-8">{t.bundle.formats}</p>
    </Section>

    <Section>
      <FAQ items={t.faq} />
    </Section>

    <Section>
      <Card variant="school" clickable className="max-w-3xl">
        <h2 className="h3">{t.next.title}</h2>
        <p className="mt-3">{t.next.body}</p>
        <div className="mt-4"><Btn to="/challenge" variant="link" stretched>{t.next.link}</Btn></div>
      </Card>
    </Section>
  </Layout>
);
export default Templates;
