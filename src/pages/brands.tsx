import { FormEvent, useState } from "react";
import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { SentMessage } from "@/components/site/contact-form";
import { Btn, Card, CheckboxGroup, Eyebrow, Field, H1, H2, PhoneFrame, Rise, Section, Steps, Tip, Wrap } from "@/components/site/ui";
import { controlClass, selectClass, selectStyle, submitClass } from "@/components/site/styles";
import { site } from "@/config/site";
import { meta } from "@/config/seo";
import { isPlaceholder } from "@/config/challenge";
import { openMailto } from "@/lib/mailto";
import { brandsContent as t, type QuoteField } from "@/content/brands";

const fieldId = (name: string) => `quote-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

/** Qualifying quote form (section 7.6). Validates inline, then opens the visitor's email app. */
const QuoteForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const q = t.quote;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    for (const f of q.fields) {
      if (f.kind === "checkboxes") {
        if (data.getAll(f.name).length === 0) next[f.name] = q.chooseOne;
      } else if (!("optional" in f && f.optional)) {
        const v = String(data.get(f.name) ?? "").trim();
        if (!v) next[f.name] = q.required;
        else if (f.kind === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) next[f.name] = q.badEmail;
      }
    }
    setErrors(next);
    const first = q.fields.find((f) => next[f.name]);
    if (first) {
      setSent(false);
      document.getElementById(fieldId(first.name))?.focus();
      return;
    }
    openMailto(q.subject, data);
    setSent(true);
  };

  const render = (f: QuoteField) => {
    const id = fieldId(f.name);
    const error = errors[f.name];
    if (f.kind === "checkboxes") return <CheckboxGroup key={f.name} id={id} name={f.name} legend={f.label} options={f.options} error={error} />;
    const optional = "optional" in f && f.optional;
    const control =
      f.kind === "select" ? (
        <select name={f.name} defaultValue="" className={selectClass} style={selectStyle}>
          <option value="" disabled>Choose one</option>
          {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : f.kind === "textarea" ? (
        <textarea name={f.name} rows={5} maxLength={2000} className={`${controlClass} py-3`} />
      ) : (
        <input type={f.kind} name={f.name} maxLength={255} autoComplete={f.autoComplete} className={controlClass} />
      );
    return <Field key={f.name} id={id} label={f.label} optional={optional} error={error}>{control}</Field>;
  };

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      {q.fields.map(render)}
      <button type="submit" className={submitClass}>
        {q.submit}
      </button>
      <p className="caption">{q.note}</p>
      {sent && <SentMessage>{q.sent}</SentMessage>}
    </form>
  );
};

const Brands = () => (
  <Layout>
    <SEO {...meta["/brands"]} />

    {/* 7.1 Hero */}
    <section className="py-12 md:py-24">
      <Wrap>
        <Rise className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <H1>{t.hero.title}</H1>
            <p className="mt-6 max-w-text">{t.hero.body}</p>
            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
              <Btn to="#quote">{t.hero.cta}</Btn>
              <Btn to="#work" variant="link">{t.hero.link}</Btn>
            </div>
            <p className="caption mt-4">{t.hero.caption}</p>
          </div>
          <div className="grid max-w-[360px] grid-cols-2 gap-4 lg:col-span-5 lg:max-w-none">
            {t.hero.phones.map((p, i) => <PhoneFrame key={i} label={p} />)}
          </div>
        </Rise>
      </Wrap>
    </section>

    {/* 7.2 Recent work: placeholders until real clips arrive with written permission. */}
    <Section id="work">
      <H2>{t.work.title}</H2>
      <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {Array.from({ length: t.work.samples }, (_, i) => (
          <li key={i}>
            <PhoneFrame />
            <p className="caption mt-3 text-center">{site.studio.samplePlaceholder}</p>
          </li>
        ))}
      </ul>
      <p className="caption mt-8">{t.work.caption}</p>
    </Section>

    {/* 7.3 What I do */}
    <Section>
      <H2>{t.services.title}</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {t.services.items.map((s) => (
          <Card key={s.title}>
            <h3 className="h4">{s.title}</h3>
            <p className="supporting mt-2">{s.body}</p>
          </Card>
        ))}
      </div>
      <p className="mt-8 max-w-text">{t.services.categories}</p>
    </Section>

    {/* 7.4 Process, with the page's one Mint element. */}
    <Section>
      <H2>{t.process.title}</H2>
      <Steps items={t.process.steps} className="mt-10" />
      <Tip label={t.process.tipLabel} className="mt-12">{t.process.tip}</Tip>
    </Section>

    {/* 7.5 What to expect */}
    <section className="border-y border-line py-12">
      <Wrap>
        <ul className="grid gap-8 md:grid-cols-3">
          {t.expect.map((e) => (
            <li key={e.title}>
              <h3 className="h4">{e.title}</h3>
              <p className="supporting mt-1">{e.body}</p>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>

    {/* 7.6 Quote form */}
    <Section id="quote">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <H2>{t.quote.title}</H2>
          <p className="mt-6 max-w-text">{t.quote.body}</p>
          <p className="mt-4">
            {t.quote.alt}{" "}
            {isPlaceholder(site.email)
              ? <span className="font-semibold">{site.email}</span>
              : <a href={`mailto:${site.email}`} className="font-semibold text-pine underline-offset-4 hover:underline">{site.email}</a>}
          </p>
        </div>
        <QuoteForm />
      </div>
    </Section>
  </Layout>
);
export default Brands;
