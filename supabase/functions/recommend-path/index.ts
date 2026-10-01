import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText } from "npm:ai";
import { createLovableAiGatewayRunIdFetch, getLovableAiGatewayRunId } from "../_shared/run-id.ts";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-lovable-aig-run-id",
  "Access-Control-Expose-Headers": "X-Lovable-AIG-Run-ID",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const DAYS = [
  "What UGC is and what brands buy", "Set up your phone, light and sound", "Hooks that stop the scroll",
  "Film your first product video", "Edit simply on your phone", "Choose your niche", "Unboxing and testimonial formats",
  "Day-7 checkpoint: portfolio video #2", "Writing your own scripts", "Build your portfolio page", "Set your rates",
  "Build your rate card", "Find brands to pitch", "Write and send your pitches", "Celebrate and plan what's next",
];

const SYSTEM = `You are Aya Karroum's assistant for aspiring UGC creators. Recommend ONE resource and the 3 most relevant days of her 15-Day UGC Challenge.
Resources:
- "free-guide": free UGC starter guide, best for total beginners still exploring.
- "templates": paid pitch/rate-card templates, best for people already filming who need to pitch brands.
- "challenge": the full 15-Day Challenge, best for committed beginners wanting a portfolio and first paid deals.
Challenge days:
${DAYS.map((d, i) => `Day ${i + 1}: ${d}`).join("\n")}
Reply with ONLY a JSON object, no markdown:
{"resource":"free-guide"|"templates"|"challenge","resourceReason":string,"steps":[{"day":number,"why":string}],"firstAction":string}
Keep each string under 30 words, warm and practical. Exactly 3 steps.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const { niche, goals, experience } = await req.json();
    const clean = (v: unknown, n: number) => (typeof v === "string" ? v.trim().slice(0, n) : "");
    const n = clean(niche, 200), g = clean(goals, 600), e = clean(experience, 50);
    if (!n || !g) return json({ error: "Please share your niche and goals." }, 400);

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "AI is not configured." }, 500);

    const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(req));
    const provider = createOpenAI({
      baseURL: "https://ai.gateway.lovable.dev/v1",
      apiKey,
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
      fetch: runIdFetch.fetch,
    });
    let upstreamError: unknown;
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system: SYSTEM,
      prompt: `Niche: ${n}\nExperience: ${e || "not stated"}\nGoals: ${g}`,
      abortSignal: req.signal,
      onError: ({ error }) => { upstreamError = error; },
      providerOptions: {
        openai: {
          store: false,
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          include: ["reasoning.encrypted_content"],
        },
      },
    });
    const text = await result.text;
    if (upstreamError) throw upstreamError;
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return json({ error: "No recommendation was returned. Please try again." }, 502);
    const data = JSON.parse(match[0]);
    data.steps = (data.steps ?? []).filter((s: { day: number }) => s.day >= 1 && s.day <= 15)
      .map((s: { day: number; why: string }) => ({ ...s, title: DAYS[s.day - 1] }));
    const runId = runIdFetch.getRunId();
    return new Response(JSON.stringify(data), {
      headers: { ...cors, "Content-Type": "application/json", ...(runId ? { "X-Lovable-AIG-Run-ID": runId } : {}) },
    });
  } catch (err) {
    if ((err as Error)?.name === "AbortError") return json({ error: "Cancelled" }, 499);
    const status = (err as { statusCode?: number })?.statusCode;
    if (status === 429) return json({ error: "Lots of requests right now — please try again in a minute." }, 429);
    if (status === 402) return json({ error: "AI credits have run out for this site." }, 402);
    if (status === 403) return json({ error: "AI access is currently blocked for this site." }, 403);
    console.error(err);
    return json({ error: "Something went wrong creating your recommendation." }, 500);
  }
});
