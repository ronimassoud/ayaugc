import { MapPin, Instagram } from "lucide-react";
import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import ContactForm from "@/components/site/contact-form";
import { Btn, Eyebrow, H1, Section } from "@/components/site/ui";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { contactContent as t } from "@/content/contact";

const Contact = () => (
  <Layout>
    <SEO {...meta["/contact"]} />
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <H1>{t.title}</H1>
          <p className="mt-6 max-w-text">{t.body}</p>
          <div className="mt-4"><Btn to="/brands#quote" variant="link">{t.brandsLink}</Btn></div>
          <ul className="mt-10 space-y-3">
            <li>
              <a href={site.instagram.url} className="inline-flex min-h-11 items-center gap-3 font-medium text-ink hover:text-pine">
                <Instagram aria-hidden strokeWidth={1.75} className="size-6 text-pine" />
                Instagram {site.instagram.handle}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin aria-hidden strokeWidth={1.75} className="size-6 text-pine" />
              {site.location}
            </li>
          </ul>
        </div>
        <div>
          <ContactForm />
          <p className="caption mt-4">{t.caption}</p>
        </div>
      </div>
    </Section>
  </Layout>
);
export default Contact;
