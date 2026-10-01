import { mailtoSubmit } from "@/components/site/contact-form";
import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { PageHero, Btn, Card, Eyebrow, H2, PhoneFrame, Section, Wrap } from "@/components/site/ui";
import { site } from "@/config/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const field = "min-h-12 bg-background text-base";

const Brands = () => (
  <Layout>
    <SEO title="UGC for brands — strategy, scripting & creators | Aya UGC" description="High-performing UGC for ads and organic: strategy, scripting and creator selection by Aya, trusted by 100+ brands." path="/brands" />
    <PageHero
      badges={["For brands", `Trusted by ${site.brandsCount} brands`]}
      title="UGC that looks real and sells like an ad"
      sub={`I've made content for ${site.brandsCount} brands since ${site.sinceYear}. I handle strategy, scripts and creators so you get videos that perform.`}
    >
      <Btn to="#quote">Request a quote</Btn>
    </PageHero>

    <Section className="bg-card">
      <H2>Recent work</H2>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
        {["Hook test", "Unboxing", "Testimonial", "How-to", "Before/after"].map((l, i) => <PhoneFrame key={l} label={l} tone={i} />)}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Brand names shown only with permission.</p>
    </Section>

    <Section>
      <H2>What I do</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[["Strategy", "Angles, hooks and formats tied to your goals and audience."], ["Scripting", "Scripts written for the first 3 seconds and the final click."], ["Creator selection", "I find, brief and manage the right creators for your product."]].map(([t, d]) => (
          <Card key={t}><h3 className="text-2xl">{t}</h3><p className="mt-3 text-muted-foreground">{d}</p></Card>
        ))}
      </div>
      <ol className="mt-14 grid gap-6 md:grid-cols-4">
        {[["Brief", "You share the product and goal."], ["Concepts", "I send angles and scripts."], ["Filming", "Content is shot and edited."], ["Delivery", "Final files, with a round of revisions."]].map(([t, d], i) => (
          <li key={t}><span className="font-semibold text-4xl text-primary">0{i + 1}</span><p className="mt-2 text-lg font-medium">{t}</p><p className="text-muted-foreground">{d}</p></li>
        ))}
      </ol>
    </Section>

    <Section className="bg-card" id="quote">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <H2>Request a quote</H2>
          <p className="mt-4 text-lg text-muted-foreground">Tell me a little about the project. I reply within 24 hours.</p>
        </div>
        <form onSubmit={mailtoSubmit("UGC quote request")} className="space-y-4">
          <Input required name="Name" placeholder="Your name" className={field} />
          <Input required type="email" name="Email" placeholder="Work email" className={field} />
          <Input name="Brand" placeholder="Brand or website" className={field} />
          <Input name="Budget" placeholder="Budget range" className={field} />
          <Textarea name="Project" rows={5} placeholder="What do you need, and by when?" className="bg-background text-base" />
          <button className="min-h-12 w-full rounded-[10px] bg-primary px-7 font-medium text-white">Send my request</button>
        </form>
      </div>
    </Section>
  </Layout>
);
export default Brands;
