import { useState } from "react";
import Layout from "@/components/site/layout";
import SEO from "@/components/seo";
import { PageHero, Btn, Card, Section, H2 } from "@/components/site/ui";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { site } from "@/config/site";
import { Loader2 } from "lucide-react";

type Rec = { resource: "free-guide" | "templates" | "challenge"; resourceReason: string; steps: { day: number; title: string; why: string }[]; firstAction: string };

const RES = {
  "free-guide": { name: "Free UGC Guide", to: "/free-guide" },
  templates: { name: `UGC Templates (${site.templates.price})`, to: "/templates" },
  challenge: { name: "15-Day UGC Challenge", to: "/challenge" },
};
const LEVELS = ["Brand new", "Filmed a few videos", "Already pitching brands"];

const FindYourPath = () => {
  const [niche, setNiche] = useState("");
  const [goals, setGoals] = useState("");
  const [level, setLevel] = useState(LEVELS[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rec, setRec] = useState<Rec | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(""); setRec(null);
    const { data, error } = await supabase.functions.invoke("recommend-path", { body: { niche, goals, experience: level } });
    setLoading(false);
    if (error) {
      let msg = "Something went wrong. Please try again.";
      try { msg = (await (error as { context?: Response }).context?.json())?.error ?? msg; } catch { /* keep default */ }
      setError(msg);
      return;
    }
    setRec(data as Rec);
  };

  return (
    <Layout>
      <SEO title="Find your UGC path — personalised guide and challenge steps" description="Tell Aya's AI helper your niche and goals and get the guide and challenge days that fit you best." path="/find-your-path" />
      <PageHero badges={["AI-powered", "Free", "30 seconds"]} title="Find your UGC path" sub="Share your niche and goals. Get the right guide and the challenge days that matter most for you." />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <form onSubmit={submit} className="space-y-5">
              <div className="space-y-2"><Label htmlFor="niche">Your niche</Label><Input id="niche" required maxLength={200} value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g. skincare, mom life, tech gadgets" /></div>
              <div className="space-y-2"><Label>Where you are now</Label>
                <div className="flex flex-wrap gap-2">{LEVELS.map((l) => <Button key={l} type="button" size="sm" variant={l === level ? "default" : "outline"} onClick={() => setLevel(l)}>{l}</Button>)}</div>
              </div>
              <div className="space-y-2"><Label htmlFor="goals">Your goals</Label><Textarea id="goals" required maxLength={600} rows={4} value={goals} onChange={(e) => setGoals(e.target.value)} placeholder="e.g. land my first 3 paid brand deals in the next two months" /></div>
              <Button type="submit" disabled={loading} className="w-full">{loading ? <><Loader2 className="animate-spin" /> Finding your path…</> : "Get my recommendation"}</Button>
              {error && <p className="text-sm text-destructive">{error}</p>}
            </form>
          </Card>
          <div>
            {!rec && !loading && <p className="text-muted-foreground">Your personalised plan will appear here.</p>}
            {rec && (
              <div className="space-y-6">
                <div><p className="text-sm uppercase tracking-wide text-muted-foreground">Start with</p><H2>{RES[rec.resource]?.name}</H2><p className="mt-2">{rec.resourceReason}</p>
                  <div className="mt-4"><Btn to={RES[rec.resource]?.to ?? "/challenge"}>Go to {RES[rec.resource]?.name}</Btn></div></div>
                <div className="space-y-3"><p className="font-semibold">Challenge days to focus on</p>
                  {rec.steps.map((s) => <Card key={s.day}><p className="font-semibold">Day {s.day} · {s.title}</p><p className="mt-1 text-muted-foreground">{s.why}</p></Card>)}
                </div>
                <div><p className="font-semibold">Do this today</p><p className="mt-1">{rec.firstAction}</p></div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </Layout>
  );
};
export default FindYourPath;
