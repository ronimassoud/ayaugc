import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { H1, Section, Tip } from "@/components/site/ui";
import { meta } from "@/config/seo";
import { legalDraftNotice, legalQuestions, privacyContent, refundsContent, termsContent, type LegalPage } from "@/content/legal";

/** Practical pages: serif H1, Work Sans H2s, text max 680 px, no announcement band. */
const Legal = ({ page }: { page: LegalPage }) => (
  <Layout>
    <SEO {...meta[page.path]} />
    <Section>
      <div className="max-w-text">
        <H1>{page.title}</H1>
        <Tip label={null} className="mt-8">{legalDraftNotice}</Tip>
        {page.sections.map(([heading, body]) => (
          <section key={heading} className="mt-12">
            <h2 className="h3">{heading}</h2>
            <p className="mt-3">{body}</p>
          </section>
        ))}
        <p className="supporting mt-12">{legalQuestions}</p>
      </div>
    </Section>
  </Layout>
);

export const Privacy = () => <Legal page={privacyContent} />;
export const Terms = () => <Legal page={termsContent} />;
export const Refunds = () => <Legal page={refundsContent} />;
