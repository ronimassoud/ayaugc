// Spinning ring of text, modelled on React Bits CircularText, rebuilt without the motion library (requestAnimationFrame
// plus CSS). Letters are spread evenly round the ring, which turns slowly; on hover it eases up to a faster speed and
// tilts toward the pointer in 3D, then eases back. It only runs while on screen. Reduced motion: still, no tilt.
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import "./circular-text.css";

export const CircularText = ({
  text,
  spinDuration = 20,
  hoverSpeed = 4,
  hoverTilt = 12,
  size = 160,
  fontSize = 14,
  children,
  className,
}: {
  text: string; spinDuration?: number; hoverSpeed?: number; hoverTilt?: number;
  size?: number; fontSize?: number; children?: React.ReactNode; className?: string;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const letters = Array.from(text);

  useEffect(() => {
    const root = rootRef.current;
    const ring = ringRef.current;
    const tiltEl = tiltRef.current;
    if (!root || !ring || !tiltEl) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const cruise = 360 / spinDuration;
    const s = { angle: 0, speed: 1, targetSpeed: 1, tx: 0, ty: 0, aimX: 0, aimY: 0, last: 0 };
    let raf = 0;
    let visible = false;

    const frame = (now: number) => {
      const dt = s.last ? Math.min((now - s.last) / 1000, 0.1) : 1 / 60;
      s.last = now;
      // Ease speed and tilt toward their targets (spring-like, no overshoot).
      const k = 1 - Math.exp(-dt / 0.35);
      s.speed += (s.targetSpeed - s.speed) * k;
      const t = 1 - Math.exp(-dt / 0.12);
      s.tx += (s.aimX - s.tx) * t;
      s.ty += (s.aimY - s.ty) * t;
      s.angle = (s.angle + cruise * s.speed * dt) % 360;
      ring.style.transform = `rotate(${s.angle}deg)`;
      tiltEl.style.transform = `rotateX(${s.tx}deg) rotateY(${s.ty}deg)`;
      raf = visible ? requestAnimationFrame(frame) : 0;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) {
        s.last = 0;
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(root);

    const enter = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      s.targetSpeed = hoverSpeed;
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !hoverTilt) return;
      const r = root.getBoundingClientRect();
      const nx = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
      const ny = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
      s.aimX = -ny * hoverTilt;
      s.aimY = nx * hoverTilt;
    };
    const leave = () => {
      s.targetSpeed = 1;
      s.aimX = 0;
      s.aimY = 0;
    };
    root.addEventListener("pointerenter", enter);
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", leave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      root.removeEventListener("pointerenter", enter);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
    };
  }, [spinDuration, hoverSpeed, hoverTilt]);

  return (
    <div ref={rootRef} aria-hidden className={cn("circular-text", className)} style={{ width: size, height: size, fontSize, perspective: size * 2.5 }}>
      <div ref={tiltRef} className="circular-text__tilt">
        <div ref={ringRef} className="circular-text__ring">
          {letters.map((letter, i) => (
            <span key={i} className="circular-text__letter" style={{ transform: `rotate(${(360 / letters.length) * i}deg)` }}>
              {letter}
            </span>
          ))}
        </div>
        {children != null && <div className="circular-text__center">{children}</div>}
      </div>
    </div>
  );
};
