// Aya's portrait with the same hover tilt as the challenge price card (TiltCard): it leans toward the cursor in 3D,
// lifts slightly and a soft sheen follows the pointer. Until the real photo is set in site.ts (portraitPhoto), it
// shows a grey 4:5 placeholder with a caption.
import TiltCard from "@/components/site/tilt-card";
import { site } from "@/config/site";
import { isPlaceholder } from "@/config/challenge";
import { cn } from "@/lib/utils";

export const AyaPortrait = ({ label, className }: { label: string; className?: string }) => {
  const real = !isPlaceholder(site.portraitPhoto);
  return (
    <TiltCard className={cn("w-full max-w-[360px] rounded-card", className)}>
      {real ? (
        <img src={`${import.meta.env.BASE_URL}${site.portraitPhoto}`} alt={label} className="aspect-[4/5] w-full rounded-card object-cover" />
      ) : (
        <div role="img" aria-label={`${label} (photo coming soon)`} className="relative aspect-[4/5] w-full rounded-card bg-disabled-bg">
          <span className="caption absolute inset-x-4 bottom-4 text-center">{label}</span>
        </div>
      )}
    </TiltCard>
  );
};
