import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const SOURCES = ["instagram", "pinterest"];

/** Records a visit when someone arrives through a tagged social link (?utm_source=instagram&utm_campaign=...). */
const CampaignTracker = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    const p = new URLSearchParams(search);
    const source = p.get("utm_source")?.toLowerCase();
    if (!source || !SOURCES.includes(source)) return;
    const key = `cv:${source}:${p.get("utm_campaign")}:${p.get("utm_content")}:${pathname}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    supabase.from("campaign_visits").insert({
      source,
      campaign: p.get("utm_campaign")?.slice(0, 100) || null,
      content: p.get("utm_content")?.slice(0, 100) || null,
      landing_page: pathname.slice(0, 200),
    }).then(({ error }) => { if (error) console.error("campaign visit not saved", error); });
  }, [pathname, search]);
  return null;
};
export default CampaignTracker;
