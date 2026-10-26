import { Btn, Card, Eyebrow, H2 } from "@/components/site/ui";
import { homeContent } from "@/content/home";

/** "Where are you starting?" Studio and School cards, used on Home and About. Whole cards are clickable. */
const LaneCards = () => {
  const t = homeContent.lanes;
  return (
    <>
      <H2>{t.title}</H2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card clickable>
          <Eyebrow>{t.studio.eyebrow}</Eyebrow>
          <h3 className="h3">{t.studio.title}</h3>
          <p className="mt-3">{t.studio.body}</p>
          <div className="mt-8"><Btn to="/brands#quote" variant="secondary" stretched>{t.studio.cta}</Btn></div>
        </Card>
        <Card variant="school" clickable>
          <Eyebrow className="text-ink">{t.school.eyebrow}</Eyebrow>
          <h3 className="h3">{t.school.title}</h3>
          <p className="mt-3">{t.school.body}</p>
          <div className="mt-8"><Btn to="/challenge" stretched>{t.school.cta}</Btn></div>
        </Card>
      </div>
    </>
  );
};
export default LaneCards;
