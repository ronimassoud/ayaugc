import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { Btn, H1, Section } from "@/components/site/ui";
import { notFoundContent as t } from "@/content/not-found";

const NotFound = () => (
  <Layout>
    <SEO {...t.seo} path="/404" noindex />
    <Section className="md:py-32">
      <H1>{t.title}</H1>
      <p className="mt-6 max-w-text">{t.body}</p>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
        <Btn to="/">{t.home}</Btn>
        <Btn to="/challenge" variant="link">{t.challenge}</Btn>
      </div>
    </Section>
  </Layout>
);
export default NotFound;
