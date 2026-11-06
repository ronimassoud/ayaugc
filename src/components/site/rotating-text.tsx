// Rotating word, modelled on React Bits RotatingText ("slide" effect, direction up), built with CSS animations
// instead of the motion library. Letters of the current word slide up and out one after another, then the next
// word's letters slide up and in, inside a mask. The box eases to each word's width so the sentence reflows
// smoothly. Screen readers get static text from the parent; this is aria-hidden. Reduced motion: no rotation.
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./rotating-text.css";

const ENTER_MS = 520;
const EXIT_MS = 300;

export const RotatingText = ({ texts, interval = 2400, stagger = 30, className }: {
  texts: string[]; interval?: number; stagger?: number; className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [reduce, setReduce] = useState(false);
  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const word = texts[index] ?? "";
  const letters = Array.from(word);

  // Fit the mask to the current word (measured from a hidden copy, so fonts and resizes are handled).
  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return undefined;
    const fit = () => setWidth(el.getBoundingClientRect().width);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [word]);

  useEffect(() => {
    if (reduce || texts.length < 2) return undefined;
    if (phase === "in") {
      const t = window.setTimeout(() => setPhase("out"), interval);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => {
      setIndex((i) => (i + 1) % texts.length);
      setPhase("in");
    }, EXIT_MS + stagger * Math.max(0, letters.length - 1));
    return () => window.clearTimeout(t);
  }, [phase, reduce, interval, stagger, texts.length, letters.length]);

  return (
    <span aria-hidden className={cn("rotating-text", className)} style={{ width }}>
      <span ref={measureRef} className="rotating-text__measure">{word}</span>
      <span key={`${index}-${phase}`} className={cn("rotating-text__word", !reduce && (phase === "in" ? "is-in" : "is-out"))}>
        {letters.map((ch, i) => (
          <span
            key={i}
            className="rotating-text__char"
            style={{ animationDelay: `${i * stagger}ms`, animationDuration: `${phase === "in" ? ENTER_MS : EXIT_MS}ms` }}
          >
            {ch === " " ? " " : ch}
          </span>
        ))}
      </span>
    </span>
  );
};
