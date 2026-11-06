import { PointerEvent, useEffect, useRef, useState } from "react";

/**
 * Hover tilt for cards: the card leans toward the cursor in 3D, lifts slightly, and a soft sheen follows the
 * pointer. No flip and no drag, so links and buttons inside work as normal. Mouse and pen only (touch scrolls as
 * usual), and nothing moves for people who prefer reduced motion. CSS lives in index.css (.tilt, .tilt__glare).
 *
 * useTilt() gives any element the effect: spread its props onto the element, add the `tilt` class (plus
 * `relative`), and render <TiltGlare /> inside it. Card, Tip, Takeaway and ProductCover use it; TiltCard wraps
 * anything else (Aya's portrait).
 */
export const useTilt = <T extends HTMLElement = HTMLDivElement>({ tiltMax = 4, lift = 1.015 }: { tiltMax?: number; lift?: number } = {}) => {
  const ref = useRef<T>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Values go straight onto CSS variables, so moving the pointer never re-renders React.
  const set = (vars: Record<string, string>) => {
    const el = ref.current;
    if (el) for (const [k, v] of Object.entries(vars)) el.style.setProperty(k, v);
  };

  const onPointerMove = (e: PointerEvent<T>) => {
    if (reduce || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    set({
      "--tilt-x": `${(0.5 - py) * 2 * tiltMax}deg`,
      "--tilt-y": `${(px - 0.5) * 2 * tiltMax}deg`,
      "--tilt-lift": String(lift),
      "--tilt-gx": `${px * 100}%`,
      "--tilt-gy": `${py * 100}%`,
      "--tilt-sheen": "1",
    });
  };

  const onPointerLeave = () => set({ "--tilt-x": "0deg", "--tilt-y": "0deg", "--tilt-lift": "1", "--tilt-sheen": "0" });

  return { ref, onPointerMove, onPointerLeave };
};
