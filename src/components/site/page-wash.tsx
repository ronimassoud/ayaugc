import { useEffect, useRef, useState } from "react";

/*
 * Page wash: soft radial washes of brand colour that drift slowly behind a whole page, from the hero down to
 * just above the footer. The one place gradients are allowed (CLAUDE.md, wash exception).
 *
 * Contrast caps keep Brown captions at 4.5:1 or better anywhere text can sit: Mint up to 0.42, Warm Line up to
 * 0.75, Pine up to 0.14 and never on top of Mint. Only the hero's right-hand side, behind the media, goes
 * stronger (Mint up to 0.55).
 */
type Tint = "mint" | "line" | "pine";
type Blob = { tint: Tint; x: string; top: number; size: string; alpha: number; duration?: string; delay?: string };
/** Hero washes are placed as a fraction of the hero's height (y). */
type HeroBlob = Omit<Blob, "top"> & { y: number };

export type WashName = "home" | "challenge" | "brands" | "freeGuide" | "templates" | "about" | "contact" | "legal" | "notFound";

type Wash = { hero: HeroBlob[]; flow: Tint[] };

const washes: Record<WashName, Wash> = {
  // Both lanes: Mint for School, Warm Line for Studio.
  home: {
    hero: [
      { tint: "mint", x: "82%", y: 0.26, size: "min(84vw, 1080px)", alpha: 0.55 },
      { tint: "line", x: "6%", y: 1, size: "min(72vw, 900px)", alpha: 0.65, duration: "26s", delay: "-6s" },
    ],
    flow: ["mint", "line"],
  },
  // The challenge is Pine-led with Mint accents.
  challenge: {
    hero: [
      { tint: "pine", x: "88%", y: 0.08, size: "min(84vw, 1060px)", alpha: 0.14 },
      { tint: "mint", x: "18%", y: 1, size: "min(72vw, 880px)", alpha: 0.38, duration: "28s", delay: "-8s" },
    ],
    flow: ["line", "mint"],
  },
  // Studio: calm, Warm Line with a breath of Pine, no Mint.
  brands: {
    hero: [
      { tint: "line", x: "85%", y: 0.3, size: "min(84vw, 1060px)", alpha: 0.75 },
      { tint: "pine", x: "70%", y: 1.05, size: "min(64vw, 800px)", alpha: 0.12, duration: "30s", delay: "-10s" },
    ],
    flow: ["line", "pine"],
  },
  // Free products are Mint.
  freeGuide: {
    hero: [
      { tint: "mint", x: "10%", y: 0.1, size: "min(70vw, 900px)", alpha: 0.4 },
      { tint: "line", x: "90%", y: 0.8, size: "min(70vw, 880px)", alpha: 0.75, duration: "26s", delay: "-7s" },
    ],
    flow: ["mint", "line"],
  },
  // Paid templates are Beige with an Ink line: mostly Warm Line.
  templates: {
    hero: [
      { tint: "line", x: "12%", y: 0.18, size: "min(78vw, 980px)", alpha: 0.75 },
      { tint: "mint", x: "88%", y: 0.7, size: "min(62vw, 780px)", alpha: 0.5, duration: "28s", delay: "-9s" },
    ],
    flow: ["line", "mint"],
  },
  about: {
    hero: [
      { tint: "mint", x: "86%", y: 0.45, size: "min(72vw, 900px)", alpha: 0.55 },
      { tint: "line", x: "4%", y: 0.04, size: "min(66vw, 820px)", alpha: 0.7, duration: "27s", delay: "-11s" },
    ],
    flow: ["line", "mint"],
  },
  contact: {
    hero: [
      { tint: "line", x: "90%", y: 0.12, size: "min(76vw, 960px)", alpha: 0.75 },
      { tint: "mint", x: "6%", y: 0.96, size: "min(56vw, 700px)", alpha: 0.3, duration: "29s", delay: "-5s" },
    ],
    flow: ["line"],
  },
  // Practical pages: quiet Warm Line only.
  legal: { hero: [{ tint: "line", x: "88%", y: 0.08, size: "min(76vw, 960px)", alpha: 0.7 }], flow: ["line"] },
  notFound: {
    hero: [
      { tint: "mint", x: "82%", y: 0.3, size: "min(70vw, 880px)", alpha: 0.5 },
      { tint: "line", x: "12%", y: 0.9, size: "min(56vw, 700px)", alpha: 0.5, duration: "25s", delay: "-8s" },
    ],
    flow: ["line"],
  },
};

/** Strength of the washes that flow down the rest of the page, where text can sit anywhere. */
const flowAlpha: Record<Tint, number> = { mint: 0.34, line: 0.6, pine: 0.1 };
const FLOW_START = 380; // px below the hero
const FLOW_STEP = 760; // px between washes, alternating sides
const FOOTER_CLEARANCE = 260; // px kept clear above the footer

const flowBlobs = (tints: Tint[], hero: number, page: number): Blob[] => {
  const blobs: Blob[] = [];
  for (let i = 0, top = hero + FLOW_START; top < page - FOOTER_CLEARANCE; i++, top += FLOW_STEP) {
    const tint = tints[i % tints.length];
    blobs.push({
      tint,
      x: i % 2 === 0 ? "92%" : "8%",
      top,
      size: "min(72vw, 900px)",
      alpha: flowAlpha[tint],
      duration: `${24 + (i % 3) * 3}s`,
      delay: `${-5 * i}s`,
    });
  }
  return blobs;
};

/**
 * Soft, slowly drifting brand-colour wash behind a whole page. Render it as the first child of a
 * `relative isolate` <main>; it stays inside main, so the header and footer are never washed.
 */
const PageWash = ({ name }: { name: WashName }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ hero: 700, page: 0 });

  useEffect(() => {
    const main = ref.current?.parentElement;
    if (!main) return;
    const measure = () => {
      const hero = main.querySelector<HTMLElement>(":scope > section")?.offsetHeight ?? 700;
      setSize((s) => (s.hero === hero && s.page === main.offsetHeight ? s : { hero, page: main.offsetHeight }));
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(main);
    return () => ro.disconnect();
  }, []);

  const wash = washes[name];
  const blobs: Blob[] = [
    ...wash.hero.map(({ y, ...b }) => ({ ...b, top: y * size.hero })),
    ...flowBlobs(wash.flow, size.hero, size.page),
  ];

  return (
    // The bottom fades out so the wash never reaches the footer with a hard edge.
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_calc(100%-240px),transparent)]"
    >
      {blobs.map((b, i) => (
        <span
          key={i}
          className="hero-blob"
          style={{
            left: b.x,
            top: b.top,
            width: b.size,
            backgroundImage: `radial-gradient(closest-side, rgb(var(--tint-${b.tint}) / ${b.alpha}), rgb(var(--tint-${b.tint}) / 0))`,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
};

export default PageWash;
