import { cn } from "@/lib/utils";
import { useTilt } from "@/lib/use-tilt";

// Card hover tilt (see src/lib/use-tilt.ts). TiltCard wraps anything that is not a Card primitive (Aya's portrait).

/** The sheen layer that follows the pointer. Place it as the last child of a `tilt` element. */
export const TiltGlare = () => <span aria-hidden className="tilt__glare" />;

const TiltCard = ({ children, className, tiltMax = 4, lift = 1.015 }: {
  children: React.ReactNode; className?: string; tiltMax?: number; lift?: number;
}) => {
  const tilt = useTilt({ tiltMax, lift });
  return (
    <div {...tilt} className={cn("tilt relative rounded-card", className)}>
      {children}
      <TiltGlare />
    </div>
  );
};

export default TiltCard;
