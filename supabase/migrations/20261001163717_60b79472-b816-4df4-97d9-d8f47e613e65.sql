CREATE TABLE public.campaign_visits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  source text NOT NULL CHECK (char_length(source) <= 50),
  campaign text CHECK (char_length(campaign) <= 100),
  content text CHECK (char_length(content) <= 100),
  landing_page text NOT NULL CHECK (char_length(landing_page) <= 200)
);
GRANT INSERT ON public.campaign_visits TO anon, authenticated;
GRANT ALL ON public.campaign_visits TO service_role;
ALTER TABLE public.campaign_visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can record a visit" ON public.campaign_visits FOR INSERT TO anon, authenticated WITH CHECK (true);