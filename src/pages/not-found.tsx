import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { Btn, Wrap } from "@/components/site/ui";

const NotFound = () => (
  <Layout hideCta>
    <SEO title="Page not found | Aya UGC" description="This page doesn't exist." path="/404" noindex />
    <section className="bg-black text-white banner-top-padding pb-28 text-center"><Wrap>
      <h1 className="h1">Page not found</h1>
      <p className="mt-4 text-muted-foreground">Let's get you back on track.</p>
      <div className="mt-8"><Btn to="/">Go home</Btn></div>
    </Wrap></section>
  </Layout>
);
export default NotFound;
